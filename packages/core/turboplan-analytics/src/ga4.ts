import { readCookieValue } from "./attribution";

/**
 * GA4-side helpers shared by gtag (browser) and the Measurement Protocol
 * (server): the param sanitizer and the `_ga` cookie parsers. Pure — no
 * runtime globals — so both transports agree byte for byte.
 */

/**
 * Event properties that carry the browser's GA4 identity to a server-side
 * event (e.g. stashed in Stripe metadata at checkout, replayed by the
 * webhook). The MP transport lifts them into `client_id` / `session_id`;
 * they are never forwarded as event params or to PostHog.
 */
export const GA4_CLIENT_ID_PROPERTY = "ga_client_id";
export const GA4_SESSION_ID_PROPERTY = "ga_session_id";

/** Keys Google's terms forbid sending, matched case-insensitively. */
const GA4_PII_KEYS = new Set([
  "email",
  "email_address",
  "name",
  "full_name",
  "first_name",
  "last_name",
  "user_name",
  "username",
  "phone",
  "phone_number",
  "ip",
]);

const EMAIL_SHAPED = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// GA4 limits: param names ≤ 40 chars (letter first, [A-Za-z0-9_]), string
// values ≤ 100 chars, ≤ 25 params per event. Over-limit params are dropped
// by GA4 anyway — doing it here keeps the payload predictable.
const GA4_PARAM_NAME = /^[A-Za-z][A-Za-z0-9_]{0,39}$/;
const GA4_MAX_VALUE_LENGTH = 100;
const GA4_MAX_PARAMS = 25;

export type Ga4Params = Record<string, string | number | boolean>;

/**
 * Event properties → GA4 params. Drops PostHog's `$` namespace (`$set` can
 * carry an email one level down), PII keys, email-shaped values, the identity
 * carriers above, and anything that is not a flat scalar.
 */
export const toGa4Params = (
  properties: Record<string, unknown> | undefined,
): Ga4Params => {
  const params: Ga4Params = {};
  if (!properties) {
    return params;
  }
  for (const [key, value] of Object.entries(properties)) {
    if (Object.keys(params).length >= GA4_MAX_PARAMS) {
      break;
    }
    if (
      key.startsWith("$") ||
      key === GA4_CLIENT_ID_PROPERTY ||
      key === GA4_SESSION_ID_PROPERTY ||
      GA4_PII_KEYS.has(key.toLowerCase()) ||
      !GA4_PARAM_NAME.test(key)
    ) {
      continue;
    }
    if (typeof value === "string") {
      if (EMAIL_SHAPED.test(value.trim())) {
        continue;
      }
      params[key] = value.slice(0, GA4_MAX_VALUE_LENGTH);
      continue;
    }
    if (typeof value === "number" && Number.isFinite(value)) {
      params[key] = value;
      continue;
    }
    if (typeof value === "boolean") {
      params[key] = value;
    }
  }
  return params;
};

/** `_ga=GA1.1.1234567890.1727862000` → `1234567890.1727862000`. */
export const parseGa4ClientId = (
  cookieHeader: string | null | undefined,
): string | null => {
  const value = readCookieValue(cookieHeader, "_ga");
  const match = value?.match(/^GA\d+\.\d+\.(\d+\.\d+)$/);
  return match?.[1] ?? null;
};

/**
 * Session id from the per-stream `_ga_<ID>` cookie (measurement id without
 * the `G-` prefix). Handles both the current `GS2.1.s<id>$o…` format and the
 * legacy `GS1.1.<id>.<n>…` one. Without it an MP event is not attributed to
 * the visitor's session — and so not to the ad click that started it.
 */
export const parseGa4SessionId = (
  cookieHeader: string | null | undefined,
  measurementId: string,
): string | null => {
  const value = readCookieValue(
    cookieHeader,
    `_ga_${measurementId.replace(/^G-/, "")}`,
  );
  if (!value) {
    return null;
  }
  const gs2 = value.match(/^GS2\.\d+\.s(\d+)/);
  if (gs2) {
    return gs2[1] ?? null;
  }
  const gs1 = value.match(/^GS1\.\d+\.(\d+)\./);
  return gs1?.[1] ?? null;
};

export type Ga4Identity = {
  clientId: string | null;
  sessionId: string | null;
};

export const readGa4Identity = (
  cookieHeader: string | null | undefined,
  measurementId: string | null | undefined,
): Ga4Identity => {
  return {
    clientId: parseGa4ClientId(cookieHeader),
    sessionId: measurementId
      ? parseGa4SessionId(cookieHeader, measurementId)
      : null,
  };
};
