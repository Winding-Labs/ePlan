// URL redaction shared by PostHog's sanitize_properties and gtag's page_view.
// Autocaptured URLs can carry PII/secrets in query params (check-email?email=,
// magic-link ?token=, campaign ?utm_email=). Redact them from every
// URL-shaped value before it leaves the browser.
const SENSITIVE_URL_PARAM_PATTERN =
  /(^|[?&#])([^&#=]*(?:token|code|key|secret|signature|email)[^&#=]*)=[^&#\s]*/gi;

export const redactUrl = (value: string): string =>
  value.replace(SENSITIVE_URL_PARAM_PATTERN, "$1$2=[redacted]");

export const sanitizeProperties = (
  properties: Record<string, unknown>,
): Record<string, unknown> => {
  for (const [prop, value] of Object.entries(properties)) {
    const propName = prop.toLowerCase();
    if (
      typeof value === "string" &&
      (propName.includes("url") ||
        propName.includes("pathname") ||
        propName.includes("referrer"))
    ) {
      properties[prop] = redactUrl(value);
    }
  }
  return properties;
};

export type PageViewParams = {
  page_location: string;
  page_referrer?: string;
};

/**
 * gtag's automatic page_view reports the full URL, query string included, so
 * it is turned off and page_view is emitted with these redacted params.
 */
export const buildPageViewParams = (
  href: string,
  referrer: string,
): PageViewParams => ({
  page_location: redactUrl(href),
  // An empty referrer stays absent: sending page_referrer: "" would override
  // GA's own handling with a meaningless param.
  ...(referrer ? { page_referrer: redactUrl(referrer) } : {}),
});
