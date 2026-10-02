"use client";

import { useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import type { CaptureOptions, PostHog } from "posthog-js";

import { resolveAnalyticsDestinations } from "./destinations";
import { toGa4EventName } from "./events";
import { toGa4Params } from "./ga4";
import { buildPageViewParams, sanitizeProperties } from "./redact";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type BrowserService = "landing" | "web";

/**
 * The app's own posthog-js instance, handed in by `initBrowserAnalytics`.
 * Injected rather than imported so the package can never end up holding a
 * second, uninitialized copy of posthog-js.
 */
let posthogClient: PostHog | null = null;

/**
 * Initializes PostHog from the destination registry. Call at module level of
 * the app's provider (not in an effect) so it runs before any child effect
 * identifies or captures. No destination → stays uninitialized and every
 * call below no-ops for PostHog.
 */
export const initBrowserAnalytics = (
  posthog: PostHog,
  { service }: { service: BrowserService },
) => {
  if (typeof window === "undefined" || posthogClient) {
    return;
  }
  const destination = resolveAnalyticsDestinations().posthog;
  if (!destination) {
    return;
  }
  posthog.init(destination.token, {
    api_host: destination.host,
    ui_host: "https://us.posthog.com",
    // Anonymous traffic stays cheap — profiles only for identified users.
    person_profiles: "identified_only",
    // SPA navigation pageviews.
    capture_pageview: "history_change",
    // Landing and app share the registrable domain, so one distinct id
    // survives the hand-off. ph_did stays as the fallback bridge.
    cross_subdomain_cookie: true,
    sanitize_properties: sanitizeProperties,
  });
  // Attached to every event — the server-side capture sets the same
  // property, so one project can be filtered per service.
  posthog.register({ service });
  posthogClient = posthog;
};

export const isPostHogEnabled = (): boolean => {
  return posthogClient !== null;
};

/** Redacted page params for the current location — see buildPageViewParams. */
const setRedactedPage = (gtag: (...args: unknown[]) => void) => {
  const params = buildPageViewParams(window.location.href, document.referrer);
  // `set` makes the redacted values the default for every later hit —
  // without it gtag re-reads location.href per event and the PII comes back.
  gtag("set", params);
  return params;
};

/**
 * The gtag command queue, bootstrapped on FIRST USE from any path —
 * <GoogleTag>'s effect, or an identify/track that runs before it (child
 * effects run first, and <GoogleTag> hydrates inside a Suspense boundary).
 * Commands queue in `dataLayer` until gtag.js loads; `config` is always
 * queued first because hits queued ahead of it have no destination.
 * Returns undefined when nothing is configured (or on the server).
 */
const ensureGtag = () => {
  if (typeof window === "undefined") {
    return undefined;
  }
  if (window.gtag) {
    return window.gtag;
  }
  const { ga4, googleAds } = resolveAnalyticsDestinations();
  if (!ga4 && !googleAds) {
    return undefined;
  }
  window.dataLayer = window.dataLayer || [];
  const gtag = function gtag() {
    // gtag.js only executes commands queued as Arguments objects; a plain
    // array is silently ignored, so this cannot be an arrow function.
    window.dataLayer?.push(arguments);
  } as (...args: unknown[]) => void;
  window.gtag = gtag;
  gtag("js", new Date());
  // The redacted location must be in place BEFORE `config`: the Ads tag's
  // conversion linker fires on config and otherwise reads document.location
  // raw, `?utm_email=` included. The automatic page_view is off for every tag
  // for the same reason; <GoogleTag> emits a redacted one instead.
  const page = setRedactedPage(gtag);
  if (ga4) {
    gtag("config", ga4.measurementId, { ...page, send_page_view: false });
  }
  if (googleAds) {
    gtag("config", googleAds.tagId, { ...page, send_page_view: false });
  }
  return gtag;
};

/**
 * The ONE browser call: PostHog under the canonical name, GA4 mapped.
 * `options` reaches PostHog only (e.g. `{ transport: "sendBeacon" }` right
 * before a full-page navigation); gtag.js already sends with a beacon.
 */
export const trackEvent = (
  event: string,
  properties?: Record<string, unknown>,
  options?: CaptureOptions,
) => {
  try {
    if (posthogClient?.__loaded) {
      posthogClient.capture(event, properties, options);
    }
    ensureGtag()?.("event", toGa4EventName(event), toGa4Params(properties));
  } catch (error) {
    console.error("[analytics] trackEvent failed:", error);
  }
};

/** Identify by our opaque user id only — no email (tracking-plan decision). */
export const identifyUser = (
  userId: string,
  personProperties?: Record<string, unknown>,
) => {
  try {
    if (posthogClient?.__loaded) {
      posthogClient.identify(userId, personProperties);
    }
    ensureGtag()?.("set", { user_id: userId });
  } catch (error) {
    console.error("[analytics] identifyUser failed:", error);
  }
};

/** Unlink the identity on sign-out so the next user doesn't inherit it. */
export const resetAnalytics = () => {
  try {
    if (posthogClient?.__loaded) {
      posthogClient.reset();
    }
    ensureGtag()?.("set", { user_id: null });
  } catch (error) {
    console.error("[analytics] resetAnalytics failed:", error);
  }
};

/**
 * Loads gtag.js once for GA4 and the Google Ads tag (each when configured), and
 * emits a redacted page_view on first load and on every SPA route change.
 * With no `send_to`, that one hit reaches every configured tag.
 *
 * Reads useSearchParams — render it inside a <Suspense> boundary.
 */
export const GoogleTag = () => {
  const { ga4, googleAds } = resolveAnalyticsDestinations();
  const loaderId = ga4?.measurementId ?? googleAds?.tagId;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const gtag = ensureGtag();
    if (!gtag) {
      return;
    }
    gtag("event", "page_view", setRedactedPage(gtag));
  }, [pathname, searchParams]);

  if (!loaderId) {
    return null;
  }

  return (
    <Script
      id="google-tag"
      src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
    />
  );
};
