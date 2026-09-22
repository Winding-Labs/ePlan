/**
 * Interface scale preference — shared contract between the web app and the
 * landing page.
 *
 * Stored as a percent and applied by setting the `--ui-scale` custom property
 * on <html>; each app's stylesheet zooms the children of <body> by that
 * variable and uses it again to compensate viewport units (see below). The
 * zoom is kept off <html> and off Radix's popper wrappers on purpose —
 * Floating UI positions those in visual pixels, and a zoomed ancestor would
 * scale the position a second time. The stylesheets carry the full note. `zoom` is used
 * rather than a root `font-size` because both apps hardcode a lot of pixel
 * utilities (`text-[36px]`, `h-[34px]`, `gap-[12px]`…): a root font size only
 * scales `rem`, so headings, control heights and gaps would stay put and the
 * setting would look like it did nothing. `zoom` scales every unit.
 *
 * The catch is viewport units: `100vh` resolves against the unzoomed visual
 * viewport and is then scaled, so an unadjusted `min-h-screen` renders short
 * and leaves a gap at the bottom of the window. Both stylesheets divide the
 * scale back out of the screen-height utilities, which is why the value is
 * published as a CSS variable rather than written straight to `style.zoom`.
 *
 * The default matches the `--ui-scale: 0.9375` baseline both apps declare in
 * their `globals.css` — when the preference equals the default we clear the
 * inline property and let the stylesheet win.
 *
 * The value lives in a cookie rather than `localStorage` because
 * `localStorage` is partitioned per origin: the app (`localhost:3000`,
 * `app.<domain>`) and the landing page (`localhost:3002`, `<domain>`) cannot
 * read each other's storage. Cookies key on host (ports are ignored) and can
 * be scoped to a shared parent domain, so one write is visible to both.
 *
 * Deliberately framework-free (no React) so server components, client
 * components and the root layouts can all share these constants.
 */

/** Cookie the preference is stored in. Readable by JS — not `httpOnly`. */
export const UI_SCALE_COOKIE_NAME = "turboplan-ui-scale";

export const DEFAULT_UI_SCALE = 93.75;
export const MIN_UI_SCALE = 80;
export const MAX_UI_SCALE = 120;
export const UI_SCALE_STEP = 1.25;

/** One year, in seconds. */
const UI_SCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const clampUiScale = (value: number) => {
  if (!Number.isFinite(value)) {
    return DEFAULT_UI_SCALE;
  }
  return Math.min(MAX_UI_SCALE, Math.max(MIN_UI_SCALE, value));
};

/**
 * Parse a raw cookie value into a usable scale.
 *
 * Returns `null` for anything missing, non-numeric or outside the supported
 * range so callers can fall back to the stylesheet baseline instead of
 * applying a nonsense value.
 */
export const parseUiScale = (raw: string | null | undefined): number | null => {
  if (!raw) {
    return null;
  }
  const value = Number.parseFloat(raw);
  if (!Number.isFinite(value)) {
    return null;
  }
  if (value < MIN_UI_SCALE || value > MAX_UI_SCALE) {
    return null;
  }
  return value;
};

/**
 * Read the preference from `document.cookie`. Returns `null` on the server or
 * when no valid value is stored.
 */
export const readUiScaleCookie = (): number | null => {
  if (typeof document === "undefined") {
    return null;
  }
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${UI_SCALE_COOKIE_NAME}=([^;]*)`),
  );
  if (!match) {
    return null;
  }
  return parseUiScale(match[1]);
};

type BuildUiScaleCookieOptions = {
  /**
   * Parent domain the cookie is scoped to (e.g. `.example.com`), from
   * `AUTH_COOKIE_DOMAIN`. Omitted in local dev, where both apps already share
   * the `localhost` host — cookies ignore the port.
   */
  domain?: string;
  secure?: boolean;
};

export const buildUiScaleCookie = (
  scale: number,
  { domain, secure }: BuildUiScaleCookieOptions = {},
) => {
  const parts = [
    `${UI_SCALE_COOKIE_NAME}=${clampUiScale(scale)}`,
    "path=/",
    `max-age=${UI_SCALE_COOKIE_MAX_AGE}`,
    "samesite=lax",
  ];

  if (domain) {
    parts.push(`domain=${domain}`);
  }
  if (secure) {
    parts.push("secure");
  }

  return parts.join("; ");
};

/**
 * Persist the preference. No-op on the server. `secure` is derived from the
 * current protocol so local http dev still gets a cookie.
 */
export const writeUiScaleCookie = (scale: number, domain?: string) => {
  if (typeof document === "undefined") {
    return;
  }
  document.cookie = buildUiScaleCookie(scale, {
    domain,
    secure: window.location.protocol === "https:",
  });
};

/**
 * Apply a scale to <html>. Passing `null` or the default clears the inline
 * style so the stylesheet baseline takes over.
 */
export const UI_SCALE_CSS_VAR = "--ui-scale";

export const applyUiScaleToDocument = (scale: number | null) => {
  if (typeof document === "undefined") {
    return;
  }
  const root = document.documentElement;
  if (scale === null || scale === DEFAULT_UI_SCALE) {
    root.style.removeProperty(UI_SCALE_CSS_VAR);
    return;
  }
  root.style.setProperty(UI_SCALE_CSS_VAR, String(scale / 100));
};

/**
 * Inline style for `<html>` carrying the stored scale, for the root layouts to
 * render on the server so the first paint is already at the right scale.
 * Takes the raw cookie value; returns `undefined` for a missing, invalid or
 * default value so the stylesheet baseline applies untouched.
 */
export const uiScaleStyleFromCookie = (
  raw: string | null | undefined,
): Record<string, string> | undefined => {
  const scale = parseUiScale(raw);
  if (scale === null || scale === DEFAULT_UI_SCALE) {
    return undefined;
  }
  return { [UI_SCALE_CSS_VAR]: String(scale / 100) };
};

/**
 * Keep <html> in sync with the cookie while the page is open.
 *
 * The layouts render the scale once, per request, so a tab that was already open
 * when the scale changed somewhere else — the app in another tab, or the other
 * app entirely — would otherwise keep rendering at the old scale until a
 * reload. Cookies fire no change event, and the two apps are different origins,
 * so `storage`/BroadcastChannel are not available either: re-reading is the
 * only option.
 *
 * Re-reads on focus, tab visibility and bfcache restore, plus a slow poll while
 * the tab is actually visible so two side-by-side windows stay in step. Reading
 * `document.cookie` and comparing a number is cheap enough for that cadence.
 *
 * `onChange` reports each new value so a consumer holding its own state (the
 * app's slider) can stay in step. Returns a cleanup function.
 */
export const watchUiScaleCookie = (
  onChange?: (scale: number | null) => void,
  pollIntervalMs = 1000,
) => {
  if (typeof document === "undefined") {
    return () => {};
  }

  let lastApplied: number | null = readUiScaleCookie();

  const sync = () => {
    const current = readUiScaleCookie();
    if (current === lastApplied) {
      return;
    }
    lastApplied = current;
    applyUiScaleToDocument(current);
    onChange?.(current);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === "visible") {
      sync();
    }
  };

  window.addEventListener("focus", sync);
  window.addEventListener("pageshow", sync);
  document.addEventListener("visibilitychange", handleVisibilityChange);

  const timer = window.setInterval(() => {
    if (document.visibilityState === "visible") {
      sync();
    }
  }, pollIntervalMs);

  return () => {
    window.removeEventListener("focus", sync);
    window.removeEventListener("pageshow", sync);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    window.clearInterval(timer);
  };
};
