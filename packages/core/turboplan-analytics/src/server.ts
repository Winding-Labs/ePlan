import { resolveAnalyticsDestinations } from "./destinations";
import { toGa4EventName } from "./events";
import {
  GA4_CLIENT_ID_PROPERTY,
  GA4_SESSION_ID_PROPERTY,
  type Ga4Params,
  toGa4Params,
} from "./ga4";

/**
 * GA4 Measurement Protocol transport — the server half of the fan-out. The
 * host's PostHog capture calls `sendGa4Event` with the same canonical event,
 * and its request-scoped flush awaits `flushGa4Events` so a Worker never
 * returns before the hit lands.
 */
const MP_ENDPOINT = "https://www.google-analytics.com/mp/collect";

export type Ga4ServerConfig = {
  measurementId: string;
  apiSecret: string;
};

export type Ga4ServerEvent = {
  /** Canonical tracking-plan name; mapped through `toGa4EventName`. */
  event: string;
  /** Fallback client id when the browser's `_ga` id is unknown. */
  distinctId: string;
  /** Our own opaque user id (never an email) — GA4 `user_id`. */
  userId?: string | null;
  clientId?: string | null;
  sessionId?: string | null;
  properties?: Record<string, unknown>;
};

export type Ga4MeasurementProtocolPayload = {
  client_id: string;
  user_id?: string;
  events: Array<{ name: string; params: Ga4Params }>;
};

const asNonEmptyString = (value: unknown): string | null => {
  return typeof value === "string" && value.length > 0 ? value : null;
};

export const buildGa4Payload = (
  event: Ga4ServerEvent,
): Ga4MeasurementProtocolPayload => {
  const properties = event.properties ?? {};
  // A browser id beats a synthetic one: it is what joins this hit to the
  // visitor's session, and through it to the ad click.
  const clientId =
    event.clientId ??
    asNonEmptyString(properties[GA4_CLIENT_ID_PROPERTY]) ??
    `server.${event.distinctId}`;
  const sessionId =
    event.sessionId ?? asNonEmptyString(properties[GA4_SESSION_ID_PROPERTY]);

  return {
    client_id: clientId,
    ...(event.userId ? { user_id: event.userId } : {}),
    events: [
      {
        name: toGa4EventName(event.event),
        params: {
          ...toGa4Params(properties),
          ...(sessionId ? { session_id: sessionId } : {}),
          // Required for server hits to show in Realtime and count as engaged.
          engagement_time_msec: 100,
        },
      },
    ],
  };
};

const pending = new Set<Promise<void>>();

/** Fire-and-forget — never throws, never rejects. */
export const sendGa4Event = (
  config: Ga4ServerConfig,
  event: Ga4ServerEvent,
): void => {
  const url = `${MP_ENDPOINT}?measurement_id=${encodeURIComponent(config.measurementId)}&api_secret=${encodeURIComponent(config.apiSecret)}`;
  let request: Promise<void>;
  try {
    request = fetch(url, {
      method: "POST",
      body: JSON.stringify(buildGa4Payload(event)),
    })
      .then((response) => {
        // MP answers 2xx even for an unknown secret, so a non-2xx is a
        // transport problem worth a log line, and a 2xx proves nothing.
        if (!response.ok) {
          console.error(
            `[analytics] GA4 Measurement Protocol rejected "${event.event}" (${response.status})`,
          );
        }
      })
      .catch((error) => {
        console.error(
          "[analytics] GA4 Measurement Protocol send failed:",
          error,
        );
      })
      .finally(() => {
        pending.delete(request);
      });
  } catch (error) {
    console.error("[analytics] GA4 Measurement Protocol send failed:", error);
    return;
  }
  pending.add(request);
};

/** Awaits every in-flight GA4 hit. Safe to call when none are pending. */
export const flushGa4Events = async (): Promise<void> => {
  await Promise.allSettled([...pending]);
};

let hasWarnedMissingSecret = false;

/**
 * The GA4 server destination for this process, or null. A measurement id
 * without its api_secret is a named gap (logged once), never a silent no-op.
 */
export const getGa4ServerConfig = (): Ga4ServerConfig | null => {
  const { ga4 } = resolveAnalyticsDestinations();
  if (!ga4) {
    return null;
  }
  if (!ga4.apiSecret) {
    if (!hasWarnedMissingSecret) {
      hasWarnedMissingSecret = true;
      console.warn(
        `[analytics] ga4_api_secret_missing: server-side GA4 for ${ga4.measurementId} is off until GA_API_SECRET is set`,
      );
    }
    return null;
  }
  return { measurementId: ga4.measurementId, apiSecret: ga4.apiSecret };
};
