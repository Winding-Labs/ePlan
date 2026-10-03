"use client";

import { useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import type { CaptureOptions, PostHog } from "posthog-js";

import { buildUtmCookie, readCookieAttribution } from "./attribution";
import {
  type AnalyticsContext,
  type AnalyticsSource,
  projectAnalyticsEvent,
} from "./context";
import { resolveAnalyticsDestinations } from "./destinations";
import { type AnalyticsEvent, toGa4EventName } from "./events";
import { toGa4Params } from "./ga4";
import { buildPageViewParams, redactUrl, sanitizeProperties } from "./redact";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    AhrefsAnalytics?: { sendEvent: (name: string) => void };
  }
}

type BrowserService = Extract<AnalyticsSource, "landing" | "web">;

/**
 * Scope the browser layer stamps on every event. Names are for PostHog group
 * properties only — pass them only when the caller already holds the row, and
 * never for a personal organization (its name is the user's email local part).
 */
export type BrowserAnalyticsContext = Partial<
  Pick<AnalyticsContext, "organizationId" | "officeId" | "projectId" | "chatId">
> & {
  organizationName?: string | null;
  officeName?: string | null;
  projectName?: string | null;
};

const GROUP_TYPES = [
  ["organization", "organizationId", "organizationName"],
  ["office", "officeId", "officeName"],
  ["project", "projectId", "projectName"],
] as const;

/**
 * The app's own posthog-js instance, handed in by `analytics.init`. Injected
 * rather than imported so the package can never hold a second, uninitialized
 * copy of posthog-js.
 */
let posthogClient: PostHog | null = null;
let service: BrowserService | null = null;
let userId: string | null = null;
let scope: BrowserAnalyticsContext = {};

const withPostHog = (callback: (client: PostHog) => void) => {
  if (posthogClient?.__loaded) {
    callback(posthogClient);
  }
};

const AHREFS_SCRIPT_ID = "ahrefs-analytics";

/**
 * Ahrefs Web Analytics pageview. The script's own pageviews are off (they
 * report the raw URL, `?token=` included), so this hands it the redacted URL
 * through the `data-page-location` attribute it reads on every event. Until
 * the script has run, the pageview waits for its load event.
 */
const sendAhrefsPageView = () => {
  const script = document.getElementById(AHREFS_SCRIPT_ID);
  if (!script) {
    return;
  }
  if (!window.AhrefsAnalytics) {
    script.addEventListener("load", sendAhrefsPageView, { once: true });
    return;
  }
  script.setAttribute("data-page-location", redactUrl(window.location.href));
  window.AhrefsAnalytics.sendEvent("pageview");
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
 * <AnalyticsPageView>'s effect, or an identify/event that runs before it
 * (child effects run first, and the page view hydrates inside Suspense).
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
  // for the same reason; `analytics.page` emits a redacted one instead.
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
 * The campaign bag in force for this page: first-touch `utm_*` (`dash_utm`)
 * and the last-touch Moab link (`dash_link`), both read live from the cookies
 * the Moab links worker / `captureUtm` wrote on the registrable domain.
 */
const readAttribution = (): Record<string, string> => {
  try {
    return readCookieAttribution(document.cookie);
  } catch {
    // document.cookie can throw in exotic embeds — lost attribution must
    // never break a page.
    return {};
  }
};

/** First-touch: mirror the landing URL's campaign params into `dash_utm`. */
const captureUtm = () => {
  try {
    const cookie = buildUtmCookie({
      search: window.location.search,
      hostname: window.location.hostname,
      isHttps: window.location.protocol === "https:",
      existingCookieHeader: document.cookie,
    });
    if (cookie) {
      // biome-ignore lint/suspicious/noDocumentCookie: the Cookie Store API is missing in Safari/Firefox, and the app host must read this cookie.
      document.cookie = cookie;
    }
  } catch {
    // Attribution is best-effort and must never break a page.
  }
};

/** The canonical property bag for a browser event (see projectAnalyticsEvent). */
const project = (event: string, properties: Record<string, unknown>) => {
  // The browser's person identity is the SDK's own distinct id, so the
  // projection is used for its dimensions only.
  return projectAnalyticsEvent(
    event,
    {
      distinctId: "",
      userId,
      organizationId: scope.organizationId,
      officeId: scope.officeId,
      projectId: scope.projectId,
      chatId: scope.chatId,
      source: service,
    },
    // Event-specific props win over the ambient campaign bag.
    { ...readAttribution(), ...properties },
  ).properties;
};

const emit = (
  event: string,
  properties: Record<string, unknown>,
  options?: CaptureOptions,
) => {
  try {
    const bag = project(event, properties);
    withPostHog((client) => client.capture(event, bag, options));
    ensureGtag()?.("event", toGa4EventName(event), toGa4Params(bag));
  } catch (error) {
    console.error("[analytics] event failed:", error);
  }
};

/** Register the scope ids as PostHog groups (sticky in persistence). */
const syncGroups = () => {
  withPostHog((client) => {
    // Groups persist — clear first so leaving a project/office doesn't keep
    // tagging events with the previous one.
    client.resetGroups();
    for (const [groupType, idKey, nameKey] of GROUP_TYPES) {
      const id = scope[idKey];
      if (!id) {
        continue;
      }
      const name = scope[nameKey];
      client.group(groupType, id, name ? { name } : undefined);
    }
  });
};

/**
 * The ONE browser analytics API (Segment-shaped, same as dash): no app code
 * calls posthog-js or gtag directly.
 */
export const analytics = {
  /**
   * Start PostHog against this deployment's destination. Call at module level
   * of the app's provider (not in an effect) so it runs before any child
   * effect identifies or captures. No destination → stays uninitialized and
   * every PostHog branch no-ops.
   */
  init(posthog: PostHog, options: { service: BrowserService }): void {
    if (typeof window === "undefined" || posthogClient) {
      return;
    }
    service = options.service;
    captureUtm();
    const destination = resolveAnalyticsDestinations().posthog;
    if (!destination) {
      return;
    }
    posthog.init(destination.token, {
      api_host: destination.host,
      ui_host: "https://us.posthog.com",
      // Anonymous traffic stays cheap — profiles only for identified users.
      person_profiles: "identified_only",
      // Pageviews are captured by `analytics.page` (the App Router pattern),
      // so they carry the same scope dimensions as every other event.
      // Pageleave gives them bounce/duration.
      capture_pageview: false,
      capture_pageleave: true,
      // Landing and app share the registrable domain, so one distinct id
      // survives the hand-off. ph_did stays as the fallback bridge.
      cross_subdomain_cookie: true,
      sanitize_properties: sanitizeProperties,
    });
    // Attached to every event — the server-side capture sets the same
    // property, so one project can be filtered per service.
    posthog.register({ service: options.service });
    // Autocaptured events ($pageleave, $autocapture) never pass through
    // `emit`, so the campaign bag is also registered on the SDK. Session
    // scoped: a long-dead campaign click must not taint a later visit.
    const attribution = readAttribution();
    if (Object.keys(attribution).length > 0) {
      posthog.register_for_session(attribution);
    }
    posthogClient = posthog;
  },

  isPostHogEnabled(): boolean {
    return posthogClient !== null;
  },

  /** The visitor's anonymous PostHog id (the `ph_did` signup hand-off). */
  getAnonymousId(): string | null {
    return posthogClient?.__loaded ? posthogClient.get_distinct_id() : null;
  },

  /**
   * Merge scope into every later event. A null/undefined value REMOVES the
   * key ("nothing to attach yet") rather than riding along and overwriting a
   * real value. Changing organization/office/project re-registers groups.
   */
  setContext(patch: BrowserAnalyticsContext): void {
    const next: BrowserAnalyticsContext = { ...scope };
    for (const [key, value] of Object.entries(patch)) {
      if (value === null || value === undefined) {
        delete next[key as keyof BrowserAnalyticsContext];
      } else {
        next[key as keyof BrowserAnalyticsContext] = value;
      }
    }
    const groupsChanged = GROUP_TYPES.some(
      ([, idKey, nameKey]) =>
        next[idKey] !== scope[idKey] || next[nameKey] !== scope[nameKey],
    );
    scope = next;
    if (groupsChanged) {
      syncGroups();
    }
  },

  /** Identify by our opaque user id only — no email (tracking-plan decision). */
  set(id: string, traits: Record<string, unknown> = {}): void {
    try {
      userId = id;
      // The person record names its own acquisition source, first touch only.
      const initial = Object.fromEntries(
        Object.entries(readAttribution()).map(([key, value]) => [
          `initial_${key}`,
          value,
        ]),
      );
      withPostHog((client) => client.identify(id, traits, initial));
      ensureGtag()?.("set", { user_id: id });
    } catch (error) {
      console.error("[analytics] set failed:", error);
    }
  },

  /** Emit ONE tracking-plan event to every configured destination. */
  event(name: AnalyticsEvent, properties: Record<string, unknown> = {}): void {
    emit(name, properties);
  },

  /**
   * Emit an event that must survive an IMMEDIATE full-page navigation (a CTA
   * one statement before `location.href = …`). PostHog's default capture only
   * queues and the document can unload first (Safari especially);
   * `send_instantly` + `sendBeacon` survive unload. gtag.js already beacons.
   */
  eventBeforeNavigate(
    name: AnalyticsEvent,
    properties: Record<string, unknown> = {},
  ): void {
    emit(name, properties, { send_instantly: true, transport: "sendBeacon" });
  },

  /** One pageview per route change, URL redacted, scope attached. */
  page(): void {
    try {
      const bag = project("$pageview", {});
      withPostHog((client) =>
        client.capture("$pageview", {
          ...bag,
          $current_url: redactUrl(window.location.href),
        }),
      );
      const gtag = ensureGtag();
      if (gtag) {
        gtag("event", "page_view", {
          ...toGa4Params(bag),
          ...setRedactedPage(gtag),
        });
      }
      sendAhrefsPageView();
    } catch (error) {
      console.error("[analytics] page failed:", error);
    }
  },

  /** Unlink identity + scope on sign-out so the next user doesn't inherit it. */
  reset(): void {
    try {
      userId = null;
      scope = {};
      withPostHog((client) => client.reset());
      ensureGtag()?.("set", { user_id: null });
    } catch (error) {
      console.error("[analytics] reset failed:", error);
    }
  },
};

/**
 * Loads gtag.js once for GA4 and the Google Ads tag (each when configured),
 * and emits `analytics.page()` on first load and on every SPA route change.
 *
 * Reads useSearchParams — render it inside a <Suspense> boundary.
 */
export const AnalyticsPageView = () => {
  const { ga4, googleAds } = resolveAnalyticsDestinations();
  const loaderId = ga4?.measurementId ?? googleAds?.tagId;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    analytics.page();
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

/**
 * The Ahrefs Web Analytics script, when configured. A plain async script, so
 * it is in the server HTML (React hoists it into <head>) and needs no
 * Suspense. `data-no-pageview-auto` turns its own pageviews off;
 * `analytics.page()` sends redacted ones (see sendAhrefsPageView).
 */
export const AhrefsAnalytics = () => {
  const ahrefs = resolveAnalyticsDestinations().ahrefs;
  if (!ahrefs) {
    return null;
  }

  return (
    <script
      id={AHREFS_SCRIPT_ID}
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={ahrefs.key}
      data-no-pageview-auto=""
      async
    />
  );
};
