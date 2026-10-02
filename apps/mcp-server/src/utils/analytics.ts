import { AsyncLocalStorage } from "node:async_hooks";

import { distinctIdIsPerson } from "@wildfires-org/turboplan-analytics";
import {
  configureServerAnalytics,
  flushGa4Events,
  type ServerPostHogClient,
  trackServerEvent,
} from "@wildfires-org/turboplan-analytics/server";

/**
 * The analytics sink of the MCP Worker: every `trackAnalyticsEvent` emitted
 * while a request is handled — by a tool, or by a package such as the
 * timeline recorder — fans out to PostHog and to GA4 (Measurement Protocol),
 * kept alive past the response with that request's `ctx.waitUntil`.
 *
 * The sink is registered once per isolate, but one isolate serves concurrent
 * requests, so each request's delivery (its waitUntil and PostHog client)
 * travels in AsyncLocalStorage instead of being captured by the sink: an
 * event can never ride another request's context. MCP has no browser cookies,
 * so GA4 hits carry no `_ga` identity.
 */
const POSTHOG_CAPTURE_URL = "https://us.i.posthog.com/i/v0/e/";

type WaitUntil = (promise: Promise<unknown>) => void;

type AnalyticsDelivery = {
  posthog: ServerPostHogClient | null;
  waitUntil: WaitUntil;
};

const requestDelivery = new AsyncLocalStorage<AnalyticsDelivery>();

/**
 * PostHog capture via raw HTTP — posthog-node's buffering doesn't fit
 * stateless Workers. Receives the projected event from `trackServerEvent`;
 * the capture API takes PostHog groups as the `$groups` property.
 */
const createPosthogHttpClient = (
  apiKey: string,
  waitUntil: WaitUntil,
): ServerPostHogClient => ({
  capture: ({ distinctId, event, properties, groups }) => {
    waitUntil(
      fetch(POSTHOG_CAPTURE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          distinct_id: distinctId,
          event,
          properties: { ...properties, ...(groups ? { $groups: groups } : {}) },
        }),
      })
        .then((response) => {
          if (!response.ok) {
            console.error(
              `PostHog capture rejected (${response.status}) for event "${event}"`,
            );
          }
        })
        .catch((error) => {
          console.error("PostHog capture failed:", error);
        }),
    );
  },
});

configureServerAnalytics((event, context, extra) => {
  const delivery = requestDelivery.getStore();
  // Outside a request there is no waitUntil to keep the hits alive.
  if (!delivery) {
    return;
  }
  trackServerEvent(
    { posthog: delivery.posthog, baseProperties: { service: "mcp" } },
    event,
    {
      ...context,
      // A machine id (an organization, "system") is never a GA4 user.
      userId:
        context.userId ??
        (distinctIdIsPerson(context) ? context.distinctId : null),
      source: context.source ?? "mcp",
    },
    extra,
  );
  delivery.waitUntil(flushGa4Events());
});

/**
 * Runs `handle` with this request's analytics delivery in scope. Each
 * destination no-ops when it is not configured: PostHog without
 * POSTHOG_API_KEY, GA4 without GA_MEASUREMENT_ID + GA_API_SECRET (read from
 * the bridged process.env).
 */
export const runWithAnalytics = <T>(
  options: { posthogApiKey?: string; waitUntil: WaitUntil },
  handle: () => T,
): T => {
  const posthog = options.posthogApiKey
    ? createPosthogHttpClient(options.posthogApiKey, options.waitUntil)
    : null;
  return requestDelivery.run({ posthog, waitUntil: options.waitUntil }, handle);
};
