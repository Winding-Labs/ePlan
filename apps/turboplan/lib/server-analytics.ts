import "server-only";

import { cookies } from "next/headers";
import { after } from "next/server";
import { PostHog } from "posthog-node";

import {
  ANALYTICS_EVENTS,
  distinctIdIsPerson,
  readGa4Identity,
  resolveAnalyticsDestinations,
  signupAttributionProperties,
} from "@wildfires-org/turboplan-analytics";
import {
  configureServerAnalytics,
  flushGa4Events,
  type ServerAnalyticsSink,
  trackServerEvent,
} from "@wildfires-org/turboplan-analytics/server";
import { hmacEmailId } from "@wildfires-org/turboplan-auth/email-identity";
import { getUserById } from "@wildfires-org/turboplan-db/queries";
import { getWebEnv } from "@wildfires-org/turboplan-env";

import { mergeSignupAttribution } from "@/lib/signup-attribution";

/**
 * The analytics sink of the Next web server process: every
 * `trackAnalyticsEvent` emitted here — by a server action, a route handler,
 * next-auth events or a package (timeline recorder, workspace services) —
 * fans out to PostHog and to GA4 (Measurement Protocol) post-response.
 * PostHog uses immediate flush (flushAt: 1) because there is no per-request
 * flush middleware in the Next runtime. Each destination no-ops when it is not
 * configured (see `resolveAnalyticsDestinations`).
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

/**
 * Starts reading the request's cookies as one `Cookie:` header string.
 * cookies() must be called synchronously inside the request scope (it throws
 * outside one: scripts, tests, module-level work), so the sink calls this
 * before deferring anything; the value is awaited post-response.
 */
const startCookieHeaderRead = (): Promise<string> => {
  try {
    return cookies()
      .then((store) =>
        store
          .getAll()
          .map(({ name, value }) => `${name}=${value}`)
          .join("; "),
      )
      .catch(() => "");
  } catch {
    return Promise.resolve("");
  }
};

/**
 * Runs the delivery post-response so no request (signup above all) waits on
 * PostHog or GA4. Outside a request scope after() throws; the delivery then
 * runs unawaited, best effort.
 */
const runAfterResponse = (task: () => Promise<void>) => {
  try {
    after(task);
  } catch {
    void task();
  }
};

const webAnalyticsSink: ServerAnalyticsSink = (event, context, extra) => {
  const cookieHeader = startCookieHeaderRead();
  runAfterResponse(async () => {
    try {
      const header = await cookieHeader;
      const posthog = getClient();
      trackServerEvent(
        { posthog, baseProperties: { service: "web" } },
        event,
        {
          ...context,
          // A machine id (an organization, "system") is never a GA4 user.
          userId:
            context.userId ??
            (distinctIdIsPerson(context) ? context.distinctId : null),
          source: context.source ?? "web",
        },
        // Sign-up carries the Moab / first-touch campaign cookies; the
        // caller's hand-off attribution wins where both name a key.
        event === ANALYTICS_EVENTS.USER_SIGNED_UP
          ? mergeSignupAttribution(signupAttributionProperties(header), extra)
          : extra,
        // The visitor's `_ga` client + session ids: what joins a server hit
        // (sign_up above all) to the browser session, and through it to the
        // ad click.
        readGa4Identity(
          header,
          resolveAnalyticsDestinations().ga4?.measurementId,
        ),
      );
      await Promise.allSettled([flushGa4Events(), posthog?.flush()]);
    } catch (error) {
      console.error(`[analytics] web delivery failed for "${event}":`, error);
    }
  });
};

configureServerAnalytics(webAnalyticsSink);

/**
 * App code imports the emit from HERE, not from the package: importing this
 * module is what registers the sink above, and Next compiles route handlers,
 * server actions and instrumentation into separate bundle layers, each with
 * its own copy of the package's module state. Importing through this file
 * guarantees the caller's copy has the sink.
 */
export { trackAnalyticsEvent } from "@wildfires-org/turboplan-analytics/server";
