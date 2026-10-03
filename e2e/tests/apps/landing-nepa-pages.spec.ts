import { expect, test } from "@playwright/test";

/**
 * Guide pages (every /for/<slug>) and SEO basics
 * on the landing page: robots.txt, sitemap.xml, the moved-page redirects,
 * per-page metadata and JSON-LD, the shared home components every guide
 * renders (hero prompt, feature showcase, comparison, feature sections),
 * layout at phone width, and the hero handing its prompt to signup.
 */
const LANDING_URL = process.env.LANDING_PAGE_URL || "http://localhost:3002";

const GUIDE_PATHS = [
  "/for/nepa",
  "/for/nepa-categorical-exclusion",
  "/for/nepa-environmental-assessment",
  "/for/environmental-impact-statement",
  "/for/nepa-scoping-letter",
  "/for/nepa-regulations",
  "/for/ceqa",
  "/for/ceqa-initial-study",
  "/for/ceqa-exemptions",
  "/for/ceqa-environmental-impact-report",
  "/for/ceqa-and-nepa",
  "/for/section-106",
  "/for/hud-environmental-review",
  "/for/esa-section-7",
  "/for/state-environmental-review",
  "/for/new-york-seqr",
  "/for/washington-sepa",
  "/for/massachusetts-mepa",
  "/for/hawaii-hepa",
  "/for/usda-forest-service-nepa",
  "/for/interior-blm-nepa",
  "/for/fhwa-nepa",
  "/for/doe-nepa",
  "/for/faa-nepa",
  "/for/fema-ehp",
  "/for/nepa-examples",
  "/for/eis-database",
  "/for/nepassist",
  "/for/ipac",
  "/for/ceqanet",
  "/for/nepa-software",
  "/for/nepa-ai-tools",
];

test.describe("Landing Page - guide pages", () => {
  test("serves robots.txt and a sitemap listing every guide page", async ({
    request,
  }) => {
    // Only https://eplan.ai is crawlable; this suite runs on another host.
    const robots = await request.get(`${LANDING_URL}/robots.txt`);
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toMatch(/^Disallow: \/$/m);

    const sitemap = await request.get(`${LANDING_URL}/sitemap.xml`);
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    for (const path of GUIDE_PATHS) {
      expect(xml).toContain(`${path}</loc>`);
    }
    // The old top-level /templates pages 308 to /for; catalog project
    // templates (/projects/<org>/<office>/templates/<slug>) are listed.
    expect(xml).not.toMatch(/<loc>https?:\/\/[^/]+\/templates/);
  });

  test("permanently redirects the moved guide URLs", async ({ request }) => {
    for (const [from, to] of [
      ["/categorical-exclusions", "/for/nepa-categorical-exclusion"],
      ["/templates/nepa-scoping-letter", "/for/nepa-scoping-letter"],
      ["/nepa/scoping-letter", "/for/nepa-scoping-letter"],
      ["/ceqa/initial-study", "/for/ceqa-initial-study"],
      ["/nepa", "/for/nepa"],
    ]) {
      const response = await request.get(`${LANDING_URL}${from}`, {
        maxRedirects: 0,
      });
      expect(response.status(), from).toBe(308);
      expect(response.headers().location, from).toMatch(
        new RegExp(`${to.replace(/\//g, "\\/")}$`),
      );
    }
  });

  test("gives every guide page its own title, canonical, one H1 and valid JSON-LD", async ({
    page,
  }) => {
    const titles = new Set<string>();

    for (const path of GUIDE_PATHS) {
      await page.goto(`${LANDING_URL}${path}`);
      await expect(page.locator("h1"), path).toHaveCount(1);

      titles.add(await page.title());
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        /noindex/,
      );
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
      expect(brokenCitations, path).toBe(0);
    }

    expect(titles.size).toBe(GUIDE_PATHS.length);
  });

  test("renders the shared home components on every guide page", async ({
    page,
  }) => {
    for (const path of GUIDE_PATHS) {
      await page.goto(`${LANDING_URL}${path}`);

      // The hero prompt (an h2 under the page's H1) with five example pills.
      // The showcase's mock app screens add no headings to the page outline.
      await expect(page.locator("#draft h2"), path).toHaveCount(1);
      await expect(
        page.locator("#draft :is(h1, h3, h4, h5, h6)"),
        path,
      ).toHaveCount(0);
      await expect(
        page.locator(
          '#draft [data-testid="quick-start-pills"] button:not([aria-label])',
        ),
        path,
      ).toHaveCount(5);

      // The showcase opens on a draft of this page's document.
      await expect(page.getByRole("tab").first(), path).toHaveText(
        /^Create AI draft of /,
      );

      // ePlan vs. by hand, then the home feature sections.
      expect(
        await page.locator("#compare tbody tr").count(),
        path,
      ).toBeGreaterThanOrEqual(6);
      await expect(
        page.getByRole("heading", { name: /Turn a blank page into a/ }),
        path,
      ).toBeVisible();
    }
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
        `${LANDING_URL}/for/nepa-scoping-letter?projectDescription=${encodeURIComponent(description)}`,
      );

      const prompt = page.locator("#project-prompt-input textarea");
      await expect(prompt).toHaveValue(description);

      await page.locator('#project-prompt-input button[type="submit"]').click();
      const dialog = page.getByRole("dialog");
      await expect(dialog).toBeVisible({ timeout: 30_000 });
      await expect(dialog.getByText("Sign up for")).toBeVisible();
      await expect(dialog.locator("textarea").first()).toHaveValue(description);
    });

    test("an example pill fills the prompt with that project and starts signup", async ({
      page,
    }) => {
      // The pills auto-scroll, so Playwright's click never sees a stable target
      // (3/3 timeouts on system Chrome, 2026-10-02). Under reduced motion the
      // carousel holds still, as it does for a visitor who asked for that.
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(`${LANDING_URL}/for/nepa-scoping-letter`);

      await page
        .locator('#draft [data-testid="quick-start-pills"] button', {
          hasText: "Channel Dredging",
        })
        .first()
        .click();
      const prompt = page.locator("#project-prompt-input textarea");
      await expect(prompt).toHaveValue(/maintenance dredging/);

      await page.locator('#project-prompt-input button[type="submit"]').click();
      const dialog = page.getByRole("dialog");
      await expect(dialog).toBeVisible({ timeout: 30_000 });
      await expect(dialog.locator("textarea").first()).toHaveValue(
        /maintenance dredging/,
      );
    });
  });

  test("links the guide hubs and the legal pages from the footer", async ({
    page,
  }) => {
    await page.goto(`${LANDING_URL}/for/nepa`);
    const hrefs = await page
      .getByRole("navigation", { name: "Guides and legal" })
      .getByRole("link")
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    expect(hrefs).toEqual(
      expect.arrayContaining([
        "/for",
        "/for/nepa",
        "/for/ceqa",
        "/for/nepa-scoping-letter",
        "/privacy",
        "/terms",
      ]),
    );
    for (const href of hrefs) {
      if (href && (href === "/for" || GUIDE_PATHS.includes(href))) {
        continue;
      }
      expect(["/privacy", "/terms"]).toContain(href);
    }
  });
});
