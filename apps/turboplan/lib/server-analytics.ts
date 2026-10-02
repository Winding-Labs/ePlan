import "server-only";

import { cookies } from "next/headers";
import { after } from "next/server";
import { PostHog } from "posthog-node";

import {
  type AnalyticsEvent,
  type Ga4Identity,
  readGa4Identity,
  resolveAnalyticsDestinations,
} from "@wildfires-org/turboplan-analytics";
import {
  flushGa4Events,
  getGa4ServerConfig,
  sendGa4Event,
} from "@wildfires-org/turboplan-analytics/server";
import { hmacEmailId } from "@wildfires-org/turboplan-auth/email-identity";
import { getUserById } from "@wildfires-org/turboplan-db/queries";
import { getWebEnv } from "@wildfires-org/turboplan-env";

/**
 * Server-side analytics for Next.js server actions, route handlers and
 * next-auth events: one capture fans out to PostHog and to GA4 (Measurement
 * Protocol). PostHog uses immediate flush (flushAt: 1) because there is no
 * per-request flush middleware in the Next runtime. Each destination no-ops
 * when it is not configured (see `resolveAnalyticsDestinations`).
 */
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

let client: PostHog | null = null;

const getClient = (): PostHog | null => {
  const token = resolveAnalyticsDestinations().posthog?.token;
  if (!token) {
    return null;
  }
  if (!client) {
    client = new PostHog(token, {
      host: "https://us.i.posthog.com",
      flushAt: 1,
      flushInterval: 0,
    });
  }
  return client;
};

/**
 * Derives the same keyed pseudonymous id the API server uses for pre-login
 * magic-link events (HMAC-SHA256 of the email, keyed with AUTH_SECRET), and
 * aliases it onto the real user id at login so the signup funnel joins.
 */
export const aliasEmailIdentity = async (userId: string, email: string) => {
  const posthog = getClient();
  // AUTH_SECRET must match the API server's — both sides derive the same
  // keyed email id via the shared hmacEmailId (see its contract docs).
  const secret = getWebEnv().AUTH_SECRET;
  if (!posthog || !secret) {
    return;
  }
  try {
    const hash = await hmacEmailId(email, secret);
    posthog.alias({ distinctId: userId, alias: `email:${hash}` });
    after(() => posthog.flush());
  } catch (error) {
    console.error("PostHog aliasEmailIdentity failed:", error);
  }
};

/**
 * Links the visitor's pre-signup anonymous PostHog distinct id (carried from
 * the landing page as `ph_did`) onto the real user id, so everything the
 * person did before they had an account joins the post-signup funnel.
 *
 * `anonymousId` is attacker-controllable query-param data — callers must pass
 * a value already validated by parseSignupAttribution.
 */
export const aliasAnonymousId = (userId: string, anonymousId: string) => {
  const posthog = getClient();
  if (!posthog) {
    return;
  }
  // Aliasing an id onto itself is a no-op at best and a corrupt merge at
  // worst; a spoofed ph_did equal to the user id is the obvious way to try it.
  if (!anonymousId || anonymousId === userId) {
    return;
  }
  // The existence check and the alias both run post-response via after() so
  // signup latency is untouched and callers stay fire-and-forget.
  // Legitimate PostHog anonymous ids are UUID-shaped. Requiring that closes
  // the whole class of reserved/server-side distinct ids in one check — a
  // crafted ph_did like "system" (research-agent + unattributed billing
  // events) or "email:<hmac>" (pre-login identities) would otherwise merge a
  // shared analytics person into this account.
  if (!UUID_PATTERN.test(anonymousId)) {
    return;
  }
  after(async () => {
    try {
      // A ph_did that collides with a real user id would merge that user's
      // PostHog person into this account — refuse it.
      if (await getUserById(anonymousId)) {
        console.warn(
          "PostHog aliasAnonymousId refused: ph_did matches an existing user id",
        );
        return;
      }
      posthog.alias({ distinctId: userId, alias: anonymousId });
      await posthog.flush();
    } catch (error) {
      console.error("PostHog aliasAnonymousId failed:", error);
    }
  });
};

const capturePostHogServerEvent = (
  distinctId: string,
  event: AnalyticsEvent,
  properties?: Record<string, unknown>,
) => {
  const posthog = getClient();
  if (!posthog) {
    return;
  }
  try {
    posthog.capture({
      distinctId,
      event,
      properties: { service: "web", ...properties },
    });
    // Keep the runtime alive until the capture request lands — serverless
    // targets may otherwise terminate right after the response and drop it.
    after(() => posthog.flush());
  } catch (error) {
    console.error("PostHog captureServerEvent failed:", error);
  }
};

/**
 * The visitor's GA4 client + session ids from the current request's `_ga`
 * cookies — what joins a server-side hit (sign_up above all) to the browser
 * session, and through it to the ad click. Unknown ids outside a request
 * scope, where cookies() throws.
 */
const readRequestGa4Identity = async (
  measurementId: string,
): Promise<Ga4Identity> => {
  try {
    const cookieHeader = (await cookies())
      .getAll()
      .map(({ name, value }) => `${name}=${value}`)
      .join("; ");
    return readGa4Identity(cookieHeader, measurementId);
  } catch {
    return { clientId: null, sessionId: null };
  }
};

const captureGa4ServerEvent = (
  distinctId: string,
  event: AnalyticsEvent,
  properties?: Record<string, unknown>,
) => {
  try {
    const ga4 = getGa4ServerConfig();
    if (!ga4) {
      return;
    }
    // cookies() is read synchronously here, inside the request scope; the
    // send and its flush then run post-response via after(), so the caller
    // (signup above all) never waits on GA4.
    const delivery = readRequestGa4Identity(ga4.measurementId)
      .then(({ clientId, sessionId }) => {
        sendGa4Event(ga4, {
          event,
          distinctId,
          userId: distinctId,
          clientId,
          sessionId,
          properties,
        });
        return flushGa4Events();
      })
      .catch((error) => {
        console.error("GA4 captureServerEvent failed:", error);
      });
    after(() => delivery);
  } catch (error) {
    console.error("GA4 captureServerEvent failed:", error);
  }
};

/**
 * Captures a tracking-plan event for a user. Fire-and-forget — never throws,
 * never blocks the caller.
 */
export const captureServerEvent = (
  distinctId: string,
  event: AnalyticsEvent,
  properties?: Record<string, unknown>,
) => {
  capturePostHogServerEvent(distinctId, event, properties);
  captureGa4ServerEvent(distinctId, event, properties);
};
