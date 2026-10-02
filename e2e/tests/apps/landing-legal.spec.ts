import { expect, test } from "@playwright/test";

import { isBillingE2EConfigured } from "../../utils";

/**
 * Privacy Policy and Terms of Service on the landing page. Google Ads and GA4
 * require a privacy policy, and checkout asks users to agree to both, so the
 * pages must exist, be indexable, and be what the checkout links open.
 */
const LANDING_URL = process.env.LANDING_PAGE_URL || "http://localhost:3002";

const LEGAL_PAGES = [
  { path: "/privacy", heading: "Privacy Policy", crossLink: "/terms" },
  { path: "/terms", heading: "Terms of Service", crossLink: "/privacy" },
];

test.describe("Landing Page - legal pages", () => {
  for (const { path, heading, crossLink } of LEGAL_PAGES) {
    test(`${path} is an indexable page with its own metadata`, async ({
      page,
    }) => {
      const response = await page.goto(`${LANDING_URL}${path}`);
      expect(response?.status()).toBe(200);

      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("h1")).toHaveText(heading);
      await expect(page).toHaveTitle(new RegExp(`^${heading} \\| `));
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new RegExp(`${path}$`),
      );
      await expect(page.locator('meta[name="robots"]')).toHaveCount(0);

      // A real support address, and a link to the other legal page.
      await expect(page.locator('a[href^="mailto:"]').first()).toBeVisible();
      await expect(
        page.locator(`main a[href="${crossLink}"]`).first(),
      ).toBeVisible();
    });

    test(`${path} fits a phone screen`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(`${LANDING_URL}${path}`);
      await expect(page.locator("h1")).toBeVisible();

      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }

  test("the sitemap lists both legal pages", async ({ request }) => {
    const sitemap = await request.get(`${LANDING_URL}/sitemap.xml`);
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    expect(xml).toContain("/privacy</loc>");
    expect(xml).toContain("/terms</loc>");
  });

  test("checkout links its agreement to the legal pages", async ({ page }) => {
    test.skip(
      !isBillingE2EConfigured(),
      "Billing package disabled or Stripe not configured — checkout is off.",
    );

    // Signed in as the citizen user (default storage state), who owns an
    // organization, so the checkout footer shows the agreement checkbox.
    await page.goto(`${LANDING_URL}/checkout?plan=pro`);

    const terms = page.getByRole("link", { name: "Terms of Service" });
    const privacy = page.getByRole("link", { name: "Privacy Policy" });
    await expect(terms).toHaveAttribute("href", /\/terms$/);
    await expect(privacy).toHaveAttribute("href", /\/privacy$/);
    await expect(terms).toHaveAttribute("target", "_blank");
  });
});
