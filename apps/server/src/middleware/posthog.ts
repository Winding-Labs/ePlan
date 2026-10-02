import type { Context, Next } from "hono";
import { tryGetContext } from "hono/context-storage";
import { PostHog } from "posthog-node";

import {
  GA4_CLIENT_ID_PROPERTY,
  GA4_SESSION_ID_PROPERTY,
  readGa4Identity,
  resolveAnalyticsDestinations,
} from "@wildfires-org/turboplan-analytics";
import {
  flushGa4Events,
  getGa4ServerConfig,
  sendGa4Event,
} from "@wildfires-org/turboplan-analytics/server";
import { getApiEnv } from "@wildfires-org/turboplan-env";

import { redactSensitiveUrl } from "../utils/sentry.js";
import type {
  AnalyticsEvent,
  AnalyticsEventProperties,
} from "./analytics-events.js";

/** The request-scoped variables analytics reads (set by the auth middleware). */
type AnalyticsRequestEnv = {
  Variables: { user?: { userId?: string } };
};

/** GA4 identity carriers — lifted into the MP payload, never sent to PostHog. */
const GA4_IDENTITY_PROPERTIES = new Set([
  GA4_CLIENT_ID_PROPERTY,
  GA4_SESSION_ID_PROPERTY,
]);

// Singleton PostHog client instance
let posthogClient: PostHog | null = null;

/**
 * Returns the PostHog client instance.
 * Returns null when no PostHog project token is configured (see
 * `resolveAnalyticsDestinations`).
 */
export const getPostHogClient = (): PostHog | null => {
  const token = resolveAnalyticsDestinations().posthog?.token;
  if (!token) {
    return null;
  }

  if (!posthogClient) {
    posthogClient = new PostHog(token, {
      host: "https://us.i.posthog.com",
      enableExceptionAutocapture: true,
    });
  }

  return posthogClient;
};

const flushPostHog = async (): Promise<void> => {
  await getPostHogClient()?.flush();
};

/**
 * Middleware that flushes PostHog and GA4 events after each request.
 * This ensures events are sent even for short-lived serverless functions.
 * A failed flush is logged, never surfaced to the response.
 */
export const posthogMiddleware = async (c: Context, next: Next) => {
  await next();

  const results = await Promise.allSettled([flushPostHog(), flushGa4Events()]);
  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[analytics] flush failed:", result.reason);
    }
  }
};

const capturePostHogEvent = (
  distinctId: string,
  event: AnalyticsEvent,
  properties?: AnalyticsEventProperties,
) => {
  const client = getPostHogClient();
  if (!client) {
    return;
  }

  const posthogProperties = Object.fromEntries(
    Object.entries(properties ?? {}).filter(
      ([key]) => !GA4_IDENTITY_PROPERTIES.has(key),
    ),
  );

  try {
    client.capture({
      distinctId,
      event,
      properties: {
        service: "api",
        environment: getApiEnv().NODE_ENV,
        ...posthogProperties,
      },
    });
  } catch (error) {
    console.error("PostHog captureEvent failed:", error);
  }
};

/**
 * GA4 Measurement Protocol half of the fan-out. Identity comes from the
 * current request when there is one: the `_ga` cookies join the hit to the
 * visitor's GA session (and through it to the ad click), and the
 * authenticated user becomes GA4 `user_id`. Background calls with no request
 * fall back to identity carried in the properties (e.g. the ids stashed in
 * Stripe metadata at checkout).
 */
const captureGa4Event = (
  distinctId: string,
  event: AnalyticsEvent,
  properties?: AnalyticsEventProperties,
) => {
  try {
    const ga4 = getGa4ServerConfig();
    if (!ga4) {
      return;
    }

    const c = tryGetContext<AnalyticsRequestEnv>();
    const { clientId, sessionId } = readGa4Identity(
      c?.req.header("cookie"),
      ga4.measurementId,
    );
    const propertyUserId =
      typeof properties?.user_id === "string" ? properties.user_id : null;

    sendGa4Event(ga4, {
      event,
      distinctId,
      userId: propertyUserId ?? c?.get("user")?.userId ?? null,
      clientId,
      sessionId,
      properties,
    });
  } catch (error) {
    console.error("GA4 captureEvent failed:", error);
  }
};

/**
 * Captures a product analytics event and fans it out to PostHog and GA4.
 * Fire-and-forget — never throws; each destination no-ops when it is not
 * configured. Delivery is guaranteed by the flush middleware, which is
 * registered before every route group.
 */
export const captureEvent = (
  distinctId: string,
  event: AnalyticsEvent,
  properties?: AnalyticsEventProperties,
) => {
  capturePostHogEvent(distinctId, event, properties);
  captureGa4Event(distinctId, event, properties);
};

/**
 * Captures an exception in PostHog without request context.
 * Used for background / fire-and-forget error reporting (e.g. timeline recorder).
 */
export const capturePosthogError = (error: Error) => {
  const client = getPostHogClient();
  if (!client) return;

  client.captureException(error, "system", {
    environment: getApiEnv().NODE_ENV,
  });
};

/**
 * Captures an exception in PostHog with request context.
 * Should be called from error handlers.
 */
export const capturePosthogException = async (
  error: Error,
  c: Context,
  distinctId?: string,
) => {
  const client = getPostHogClient();
  if (!client) {
    return;
  }

  // Use provided distinctId, or try to get from user context, or fallback to "anonymous"
  const userId = distinctId || c.get("user")?.userId || "anonymous";

  client.captureException(error, userId, {
    environment: getApiEnv().NODE_ENV,
    path: c.req.path,
    method: c.req.method,
    // Redact sensitive query params (upload/magic-link tokens) before they
    // reach PostHog — a 500 on an authenticated URL must not exfiltrate creds.
    url: redactSensitiveUrl(c.req.url),
  });

  await client.flush();
};
