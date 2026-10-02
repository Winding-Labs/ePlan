import { expect, test } from "@playwright/test";

/**
 * NEPA guide pages and SEO basics on the landing page: robots.txt,
 * sitemap.xml, per-page metadata, JSON-LD, layout at phone width, and the
 * "Draft yours" prompt handing off to the existing signup flow.
 */
const LANDING_URL = process.env.LANDING_PAGE_URL || "http://localhost:3002";

const GUIDE_PATHS = [
  "/nepa",
  "/categorical-exclusions",
  "/nepa/environmental-assessment",
  "/nepa/scoping-letter",
  "/nepa-software",
  "/compare/nepa-ai-tools",
];

test.describe("Landing Page - NEPA guide pages", () => {
  test("serves robots.txt and a sitemap listing every guide page", async ({
    request,
  }) => {
    const robots = await request.get(`${LANDING_URL}/robots.txt`);
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain("/sitemap.xml");

    const sitemap = await request.get(`${LANDING_URL}/sitemap.xml`);
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    for (const path of GUIDE_PATHS) {
      expect(xml).toContain(`${path}</loc>`);
    }
  });

  test("gives every guide page its own title, canonical and valid JSON-LD", async ({
    page,
  }) => {
    const titles = new Set<string>();

    for (const path of GUIDE_PATHS) {
      await page.goto(`${LANDING_URL}${path}`);
      await expect(page.locator("h1")).toHaveCount(1);

      titles.add(await page.title());
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new RegExp(`${path.replace(/\//g, "\\/")}$`),
      );

      const types = await page
        .locator('script[type="application/ld+json"]')
        .evaluateAll((scripts) =>
          scripts.map(
            (script) => JSON.parse(script.textContent ?? "")["@type"],
          ),
        );
      expect(types).toEqual(["BreadcrumbList", "FAQPage"]);

      // Every citation number links to an entry in the source list.
      const citationTargets = await page
        .locator('a[href^="#source-"]')
        .evaluateAll((links) =>
          links.map((link) => link.getAttribute("href")?.slice(1)),
        );
      const sourceIds = await page
        .locator('#sources li[id^="source-"]')
        .evaluateAll((items) => items.map((item) => item.id));
      const brokenCitations = citationTargets.filter(
        (target) => !target || !sourceIds.includes(target),
      ).length;
      expect(brokenCitations).toBe(0);
    }

    expect(titles.size).toBe(GUIDE_PATHS.length);
  });

  test("fits a phone screen without horizontal scrolling", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    for (const path of GUIDE_PATHS) {
      await page.goto(`${LANDING_URL}${path}`);
      const scrollWidth = await page
        .locator("html")
        .evaluate((html) => html.scrollWidth);
      expect(scrollWidth, path).toBeLessThanOrEqual(390);
    }
  });

  // Ad and search traffic is anonymous. (Signed in, the prompt waits on
  // /api/billing/access, which 404s when the billing package is disabled, as
  // it is in this suite.)
  test.describe("as an anonymous visitor", () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test("prefills the prompt from projectDescription and opens the signup flow with it", async ({
      page,
    }) => {
      const description =
        "I'm planning a culvert replacement on a national forest road in Idaho.";
      await page.goto(
        `${LANDING_URL}/nepa/scoping-letter?projectDescription=${encodeURIComponent(description)}`,
      );

      const prompt = page.locator("#project-prompt-input textarea");
      await expect(prompt).toHaveValue(description);

      await page
        .locator('#project-prompt-input button[aria-label="Create project"]')
        .click();
      const dialog = page.getByRole("dialog");
      await expect(dialog).toBeVisible({ timeout: 30_000 });
      await expect(dialog.getByText("Sign up for")).toBeVisible();
      await expect(dialog.locator("textarea").first()).toHaveValue(description);
    });
  });

  test("links every guide page from the footer", async ({ page }) => {
    await page.goto(`${LANDING_URL}/nepa`);
    const hrefs = await page
      .getByRole("navigation", { name: "NEPA guides" })
      .getByRole("link")
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    expect(hrefs.sort()).toEqual([...GUIDE_PATHS].sort());
  });
});
