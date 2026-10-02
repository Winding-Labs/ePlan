import { type AnalyticsContext, projectAnalyticsEvent } from "./context";
import { resolveAnalyticsDestinations } from "./destinations";
import { type AnalyticsEvent, toGa4EventName } from "./events";
import {
  GA4_CLIENT_ID_PROPERTY,
  GA4_SESSION_ID_PROPERTY,
  type Ga4Identity,
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

/**
 * Process-wide state lives on `globalThis`, not in module scope: Next compiles
 * route handlers, server actions and `instrumentation.ts` into separate
 * bundle layers, each with its OWN copy of this module. A module-level sink
 * registered in one layer would be invisible to another, and a flush in one
 * layer would miss hits queued in another. `Symbol.for` gives every copy the
 * same slot (the same approach turboplan-db uses for its connection store).
 */
type ServerAnalyticsState = {
  pending: Set<Promise<void>>;
  sink: ServerAnalyticsSink | null;
  hasWarnedMissingSecret: boolean;
};

const STATE_KEY = Symbol.for("@wildfires-org/turboplan-analytics/server");

const getState = (): ServerAnalyticsState => {
  const store = globalThis as typeof globalThis & {
    [STATE_KEY]?: ServerAnalyticsState;
  };
  store[STATE_KEY] ??= {
    pending: new Set(),
    sink: null,
    hasWarnedMissingSecret: false,
  };
  return store[STATE_KEY];
};

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
        getState().pending.delete(request);
      });
  } catch (error) {
    console.error("[analytics] GA4 Measurement Protocol send failed:", error);
    return;
  }
  getState().pending.add(request);
};

/** Awaits every in-flight GA4 hit. Safe to call when none are pending. */
export const flushGa4Events = async (): Promise<void> => {
  await Promise.allSettled([...getState().pending]);
};

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
    const state = getState();
    if (!state.hasWarnedMissingSecret) {
      state.hasWarnedMissingSecret = true;
      console.warn(
        `[analytics] ga4_api_secret_missing: server-side GA4 for ${ga4.measurementId} is off until GA_API_SECRET is set`,
      );
    }
    return null;
  }
  return { measurementId: ga4.measurementId, apiSecret: ga4.apiSecret };
};

/**
 * The slice of a posthog-node client the server fan-out uses — structural, so
 * this package carries no posthog-node dependency of its own.
 */
export type ServerPostHogClient = {
  capture: (message: {
    distinctId: string;
    event: string;
    properties?: Record<string, unknown>;
    groups?: Record<string, string>;
  }) => void;
};

export type ServerAnalyticsTransport = {
  posthog: ServerPostHogClient | null;
  /** Stamped on every PostHog event from this host, e.g. `{ service: "api" }`. */
  baseProperties?: Record<string, unknown>;
};

/** GA4 identity carriers — lifted into the MP payload, never sent to PostHog. */
const withoutGa4Identity = (
  properties: Record<string, unknown>,
): Record<string, unknown> => {
  const {
    [GA4_CLIENT_ID_PROPERTY]: _clientId,
    [GA4_SESSION_ID_PROPERTY]: _sessionId,
    ...rest
  } = properties;
  return rest;
};

/**
 * The ONE server-side call: project the event once (standard dimensions +
 * PostHog groups), then fan it to PostHog and GA4. Fire-and-forget — never
 * throws; each destination no-ops when it is not configured. The host
 * supplies its PostHog client and the request's `_ga` identity, and flushes
 * (`flushGa4Events`) at the end of its request.
 */
export const trackServerEvent = (
  transport: ServerAnalyticsTransport,
  event: AnalyticsEvent,
  context: AnalyticsContext,
  extra: Record<string, unknown> = {},
  ga4Identity: Ga4Identity = { clientId: null, sessionId: null },
): void => {
  const projected = projectAnalyticsEvent(event, context, extra);

  try {
    transport.posthog?.capture({
      distinctId: projected.distinctId,
      event,
      properties: {
        ...transport.baseProperties,
        ...withoutGa4Identity(projected.properties),
      },
      ...(projected.groups ? { groups: projected.groups } : {}),
    });
  } catch (error) {
    console.error(`[analytics] PostHog capture failed for "${event}":`, error);
  }

  try {
    const ga4 = getGa4ServerConfig();
    if (!ga4) {
      return;
    }
    sendGa4Event(ga4, {
      event,
      distinctId: projected.distinctId,
      userId: context.userId ?? null,
      clientId: ga4Identity.clientId,
      sessionId: ga4Identity.sessionId,
      properties: projected.properties,
    });
  } catch (error) {
    console.error(`[analytics] GA4 send failed for "${event}":`, error);
  }
};

/**
 * The host-registered sink behind `trackAnalyticsEvent`. Each server process
 * (API worker, Next web server, MCP worker) registers ONE at boot; it owns the
 * PostHog client, reads the request's `_ga` identity and flushes.
 */
export type ServerAnalyticsSink = (
  event: AnalyticsEvent,
  context: AnalyticsContext,
  extra: Record<string, unknown>,
) => void;

export const configureServerAnalytics = (next: ServerAnalyticsSink | null) => {
  getState().sink = next;
};

/**
 * The ONE server-side analytics call for every package and app (dash
 * `trackAnalyticsEvent`). Fire-and-forget: never throws, never blocks, and is
 * a no-op in a process that registered no sink (scripts, tests).
 */
export const trackAnalyticsEvent = (
  event: AnalyticsEvent,
  context: AnalyticsContext,
  extra: Record<string, unknown> = {},
): void => {
  try {
    getState().sink?.(event, context, extra);
  } catch (error) {
    console.error(
      `[analytics] trackAnalyticsEvent failed for "${event}":`,
      error,
    );
  }
};
