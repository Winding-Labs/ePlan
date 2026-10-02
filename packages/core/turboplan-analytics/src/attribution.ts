/**
 * Campaign attribution carried in two cookies on the registrable domain
 * (`.eplan.ai`), byte-compatible with dash's analytics layer and with the
 * Moab links worker (`links.eplan.ai`) that writes them on every outbound
 * click before the 302:
 *
 * - `dash_utm` — FIRST-touch `utm_*` + `gclid` bag. The worker sets it for a
 *   Moab click (`utm_source=moab`, `utm_content=<link code>`); the browser
 *   sets it from the landing URL for every other campaign. First touch wins.
 * - `dash_link` — LAST-touch Moab link bag (code, campaign, channel, subject…).
 *   `link_code` equals Moab's `campaign_link_clicked` `utm_content` — the
 *   cross-project join key between Moab's click and ePlan's pageviews/signups.
 *
 * Both are attacker-controlled (any browser can set a cookie), so parsing keeps
 * ONLY the allow-listed keys, only as strings, bounded — a cookie can never
 * stuff an event's property bag. Isomorphic: the browser and the signup seam
 * share these parsers.
 *
 * Do NOT rename the cookies or keys without changing dash
 * (`apps/web/lib/analytics/{utm,link-attribution}.ts` + the links worker).
 */

export const UTM_COOKIE_NAME = "dash_utm";
export const LINK_COOKIE_NAME = "dash_link";

/** The five UTM params + the Google click id. */
export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;

/** The Moab `link_codes` fields the links worker denormalizes into the cookie. */
export const LINK_COOKIE_KEYS = [
  "code",
  "agent_id",
  "campaign_id",
  "channel",
  "subject",
  "program",
  "code_style",
  "outbox_id",
] as const;

export type UtmProperties = Partial<Record<(typeof UTM_KEYS)[number], string>>;
export type LinkAttribution = Partial<
  Record<(typeof LINK_COOKIE_KEYS)[number], string>
>;

const VALUE_MAX_CHARS = 256;
/** Subject lines are prose — capped harder, same as the worker's budget. */
const LINK_SUBJECT_MAX_CHARS = 120;

const parseCookieJson = (
  raw: string | null | undefined,
): Record<string, unknown> | null => {
  if (!raw) {
    return null;
  }
  try {
    const decoded: unknown = JSON.parse(decodeURIComponent(raw));
    return decoded && typeof decoded === "object"
      ? (decoded as Record<string, unknown>)
      : null;
  } catch {
    // A garbage cookie is an empty bag, never a throw.
    return null;
  }
};

export const parseUtmCookie = (
  raw: string | null | undefined,
): UtmProperties => {
  const source = parseCookieJson(raw);
  const bag: UtmProperties = {};
  if (!source) {
    return bag;
  }
  for (const key of UTM_KEYS) {
    const value = source[key];
    if (typeof value === "string" && value) {
      bag[key] = value.slice(0, VALUE_MAX_CHARS);
    }
  }
  return bag;
};

export const parseLinkCookie = (
  raw: string | null | undefined,
): LinkAttribution => {
  const source = parseCookieJson(raw);
  const bag: LinkAttribution = {};
  if (!source) {
    return bag;
  }
  for (const key of LINK_COOKIE_KEYS) {
    const value = source[key];
    if (typeof value === "string" && value) {
      bag[key] = value.slice(
        0,
        key === "subject" ? LINK_SUBJECT_MAX_CHARS : VALUE_MAX_CHARS,
      );
    }
  }
  return bag;
};

/**
 * Event properties for the link bag: every key `link_`-prefixed so the
 * creative dimensions never collide with an event's own `code`/`channel`.
 */
export const linkAttributionProperties = (
  bag: LinkAttribution,
): Record<string, string> => {
  const properties: Record<string, string> = {};
  for (const key of LINK_COOKIE_KEYS) {
    const value = bag[key];
    if (value) {
      properties[`link_${key}`] = value;
    }
  }
  return properties;
};

/** One cookie's raw value out of a `Cookie:` header / `document.cookie`. */
export const readCookieValue = (
  cookieHeader: string | null | undefined,
  name: string,
): string | null => {
  if (!cookieHeader) {
    return null;
  }
  for (const part of cookieHeader.split(";")) {
    const separator = part.indexOf("=");
    if (separator === -1) {
      continue;
    }
    if (part.slice(0, separator).trim() === name) {
      return part.slice(separator + 1).trim();
    }
  }
  return null;
};

/**
 * The full attribution bag in force for a request or page: first-touch
 * `utm_*`/`gclid` plus the last-touch `link_*` Moab bag.
 */
export const readCookieAttribution = (
  cookieHeader: string | null | undefined,
): Record<string, string> => {
  return {
    ...(parseUtmCookie(
      readCookieValue(cookieHeader, UTM_COOKIE_NAME),
    ) as Record<string, string>),
    ...linkAttributionProperties(
      parseLinkCookie(readCookieValue(cookieHeader, LINK_COOKIE_NAME)),
    ),
  };
};

/**
 * The registrable domain an attribution cookie is scoped to
 * (`app.eplan.ai` → `eplan.ai`); empty for localhost/IPs. Same rule as dash's
 * `cookieDomain` — the writer and the readers must agree byte for byte.
 */
export const cookieDomain = (hostname: string): string => {
  if (!hostname.includes(".") || /^[0-9.]+$/.test(hostname)) {
    return "";
  }
  return hostname.split(".").slice(-2).join(".");
};

/**
 * First-touch capture: the browser writes `dash_utm` from the landing URL's
 * campaign params, unless a bag already exists (a Moab click or an earlier
 * visit). Returns the cookie string to write, or null when there is nothing
 * new. Pure — the caller owns `document.cookie`.
 */
export const buildUtmCookie = (input: {
  search: string;
  hostname: string;
  isHttps: boolean;
  existingCookieHeader: string;
}): string | null => {
  const existing = parseUtmCookie(
    readCookieValue(input.existingCookieHeader, UTM_COOKIE_NAME),
  );
  if (Object.keys(existing).length > 0) {
    return null;
  }
  const params = new URLSearchParams(input.search);
  const captured: UtmProperties = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      captured[key] = value.slice(0, VALUE_MAX_CHARS);
    }
  }
  if (Object.keys(captured).length === 0) {
    return null;
  }
  const domain = cookieDomain(input.hostname);
  const parts = [
    `${UTM_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(captured))}`,
    "path=/",
    // 30 days — same lifetime the links worker gives it.
    "max-age=2592000",
    "samesite=lax",
  ];
  if (domain) {
    parts.push(`domain=.${domain}`);
  }
  if (input.isHttps) {
    parts.push("secure");
  }
  return parts.join("; ");
};

/**
 * The attribution a `user_signed_up` carries (dash `post-auth` parity): the
 * cookie bag as flat event properties, and the same values as first-touch
 * PostHog person properties (`initial_utm_source`, `initial_link_code`, …) so
 * every later event of this person — purchase included — can be broken down
 * by the Moab campaign that produced the account.
 */
export const signupAttributionProperties = (
  cookieHeader: string | null | undefined,
): Record<string, unknown> => {
  const bag = readCookieAttribution(cookieHeader);
  if (Object.keys(bag).length === 0) {
    return {};
  }
  const setOnce = Object.fromEntries(
    Object.entries(bag).map(([key, value]) => [`initial_${key}`, value]),
  );
  return { ...bag, $set_once: setOnce };
};
