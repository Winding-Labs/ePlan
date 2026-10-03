import { expect, test } from "@playwright/test";

/**
 * What a crawler sees in the raw HTML, before any JavaScript runs: a missing
 * page answers with a real 404 (not a 200 carrying a noindex not-found page),
 * and a page's title and canonical sit in <head>, where crawlers read them.
 * A Suspense boundary around the page in the root layout breaks the first;
 * streaming metadata breaks the second.
 */
const LANDING_URL = process.env.LANDING_PAGE_URL || "http://localhost:3002";

const GOOGLEBOT_USER_AGENT =
  "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

const MISSING_PATHS = [
  "/no-such-page",
  "/docs/no-such-page",
  "/templates/no-such-template",
  "/projects/no-such-organization",
  "/projects/no-such-organization/no-such-office",
];

const PAGE_PATHS = ["/", "/nepa", "/templates/nepa-scoping-letter", "/docs"];

test.describe("Landing Page - status codes and <head> metadata", () => {
  for (const path of MISSING_PATHS) {
    test(`${path} returns a 404`, async ({ request }) => {
      const response = await request.get(`${LANDING_URL}${path}`, {
        headers: { "user-agent": GOOGLEBOT_USER_AGENT },
      });
      expect(response.status()).toBe(404);
    });
  }

  for (const path of PAGE_PATHS) {
    test(`${path} puts its title and canonical in <head>`, async ({
      request,
    }) => {
      const response = await request.get(`${LANDING_URL}${path}`, {
        headers: { "user-agent": GOOGLEBOT_USER_AGENT },
      });
      expect(response.status()).toBe(200);

      const html = await response.text();
      const headEnd = html.indexOf("</head>");
      expect(headEnd).toBeGreaterThan(0);

      const head = html.slice(0, headEnd);
      expect(head).toMatch(/<title>[^<]+<\/title>/);
      expect(head).toContain('rel="canonical"');
    });
  }
});
