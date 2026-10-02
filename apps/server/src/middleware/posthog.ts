import type { Context, Next } from "hono";
import { tryGetContext } from "hono/context-storage";
import { PostHog } from "posthog-node";

import {
  readGa4Identity,
  resolveAnalyticsDestinations,
} from "@wildfires-org/turboplan-analytics";
import {
  configureServerAnalytics,
  flushGa4Events,
  trackServerEvent,
} from "@wildfires-org/turboplan-analytics/server";
import { getApiEnv } from "@wildfires-org/turboplan-env";

import { redactSensitiveUrl } from "../utils/sentry.js";

/** The request-scoped variables analytics reads (set by the auth middleware). */
type AnalyticsRequestEnv = {
  Variables: { user?: { userId?: string } };
};

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

/**
 * Registers this process's sink behind `trackAnalyticsEvent` — the one
 * pathway every package emits through. Identity comes from the current
 * request when there is one (Hono context storage): the authenticated user
 * fills `userId` (GA4 `user_id`) when the caller left it out, and the `_ga`
 * cookies join the GA4 hit to the visitor's session, and through it to the
 * ad click. Background calls with no request (e.g. the Stripe webhook's
 * purchase) carry their GA4 identity in the event properties instead.
 * Delivery is guaranteed by `posthogMiddleware`, which wraps every route.
 *
 * `environment` is resolved once by the caller at bootstrap, so no emit
 * depends on re-reading the validated env.
 */
export const registerApiAnalyticsSink = ({
  environment,
}: {
  environment: string;
}) => {
  const baseProperties = { service: "api", environment };

  configureServerAnalytics((event, context, extra) => {
    const c = tryGetContext<AnalyticsRequestEnv>();
    const ga4Identity = readGa4Identity(
      c?.req.header("cookie"),
      resolveAnalyticsDestinations().ga4?.measurementId,
    );

    trackServerEvent(
      { posthog: getPostHogClient(), baseProperties },
      event,
      {
        ...context,
        userId: context.userId ?? c?.get("user")?.userId ?? null,
      },
      extra,
      ga4Identity,
    );
  });
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
