import { expect, test } from "@playwright/test";

/**
 * Guide pages (every /for/<slug>) and SEO basics
 * on the landing page: robots.txt, sitemap.xml, the moved-page redirects,
 * per-page metadata and JSON-LD, the shared home components every guide
 * renders (hero prompt, feature showcase, comparison, feature sections),
 * layout at phone width, and the hero handing its prompt to signup.
 */
const LANDING_URL = process.env.LANDING_PAGE_URL || "http://localhost:3002";
// Only https://eplan.ai is crawlable and indexable (lib/seo.ts PRODUCTION_ORIGIN);
// every other host (local, previews, staging) must be neither. The suite runs on
// both: in CI and after each release against production.
const IS_PRODUCTION = new URL(LANDING_URL).origin === "https://eplan.ai";

const GUIDE_PATHS = [
  "/for/nepa",
  "/for/nepa-categorical-exclusion",
  "/for/nepa-environmental-assessment",
  "/for/environmental-impact-statement",
  "/for/nepa-scoping-letter",
  "/for/nepa-regulations",
  "/for/environmental-impact-assessment",
  "/for/environmental-permitting",
  "/for/environmental-planning",
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
    const robots = await request.get(`${LANDING_URL}/robots.txt`);
    expect(robots.status()).toBe(200);
    const blocksAll = /^Disallow: \/$/m.test(await robots.text());
    expect(blocksAll, `robots.txt Disallow: / on ${LANDING_URL}`).toBe(
      !IS_PRODUCTION,
    );

    const sitemap = await request.get(`${LANDING_URL}/sitemap.xml`);
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    for (const path of GUIDE_PATHS) {
      expect(xml).toContain(`${path}</loc>`);
    }
    // The old top-level /templates pages 308 to /for; catalog project
    // templates (/projects/<org>/<office>/templates/<slug>) are listed.
    expect(xml).not.toMatch(/<loc>https?:\/\/[^/]+\/templates/);
    // Office pages (/projects/<org>/<office>) are noindex, so a sitemap entry
    // for one would be a conflicting signal.
    expect(xml).not.toMatch(
      /<loc>https?:\/\/[^/]+\/projects\/[^/<]+\/[^/<]+<\/loc>/,
    );
  });

  test("permanently redirects the moved guide URLs", async ({ request }) => {
    for (const [from, to] of [
      ["/categorical-exclusions", "/for/nepa-categorical-exclusion"],
      ["/templates/nepa-scoping-letter", "/for/nepa-scoping-letter"],
      ["/nepa/scoping-letter", "/for/nepa-scoping-letter"],
      ["/ceqa/initial-study", "/for/ceqa-initial-study"],
      ["/nepa", "/for/nepa"],
      // Google Ads display paths, one per family (next.config.ts lists all).
      ["/nepa/categorical", "/for/nepa-categorical-exclusion"],
      ["/ceqa/eir", "/for/ceqa-environmental-impact-report"],
      ["/fema/ehp", "/for/fema-ehp"],
      ["/new-york/seqr", "/for/new-york-seqr"],
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
      await expect(page.locator('meta[name="robots"]'), path).toHaveAttribute(
        "content",
        IS_PRODUCTION ? /^index, follow/ : /noindex/,
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
      expect(types).toEqual(["BreadcrumbList", "FAQPage", "Article"]);

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

  // Ads land on guides, mostly on phones: the draft action must be inside the
  // first screen (it sat at y=787-946 on a 664px iPhone 13, eplan-36 audit
  // 2026-10-03), and shown once per breakpoint.
  test("shows the draft action inside a phone's first screen", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 664 });
    for (const path of GUIDE_PATHS) {
      await page.goto(`${LANDING_URL}${path}`);
      const cta = page
        .getByRole("link", { name: "Draft yours with ePlan" })
        .filter({ visible: true });
      await expect(cta, path).toHaveCount(1);
      const box = await cta.boundingBox();
      expect((box?.y ?? Infinity) + (box?.height ?? 0), path).toBeLessThan(664);
    }
  });

  // "Create Project" and "Pricing" used to send a guide's visitor to the home
  // page; they now use the guide's own prompt and pricing section.
  test("keeps the nav's Create Project and Pricing on the guide", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const path = "/for/nepa-scoping-letter";
    await page.goto(`${LANDING_URL}${path}`);
    const nav = page.getByRole("navigation", { name: "Main navigation" });
    await expect(nav.getByRole("link", { name: "Pricing" })).toHaveAttribute(
      "href",
      `${path}#pricing`,
    );

    await nav.getByRole("button", { name: "Create Project" }).click();
    const prompt = page.locator("#project-prompt-input textarea");
    await expect(prompt).toBeFocused();
    await expect(prompt).toBeInViewport();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
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

  test("links every guide, the site and the legal pages from the footer, on every route", async ({
    page,
  }) => {
    // The footer is the one place every page links every guide from, so each
    // guide is one click from home and from every other page.
    for (const path of ["/", "/for/nepa", "/privacy"]) {
      await page.goto(`${LANDING_URL}${path}`);
      const hrefs = await page
        .locator("footer")
        .getByRole("link")
        .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
      expect(hrefs, path).toEqual(
        expect.arrayContaining([...GUIDE_PATHS, "/for", "/privacy", "/terms"]),
      );
    }
  });

  test("links related guides from the article copy and redirects a trailing slash", async ({
    page,
    request,
  }) => {
    await page.goto(`${LANDING_URL}/for/nepa-scoping-letter`);
    const inCopy = await page
      .locator("article a[href^='/for/'], #draft ~ * a[href^='/for/']")
      .count();
    expect(inCopy).toBeGreaterThanOrEqual(2);

    const slash = await request.get(`${LANDING_URL}/for/nepa-scoping-letter/`, {
      maxRedirects: 0,
    });
    expect(slash.status()).toBe(308);
    expect(slash.headers().location).toMatch(/\/for\/nepa-scoping-letter$/);

    const llms = await request.get(`${LANDING_URL}/llms.txt`);
    expect(llms.status()).toBe(200);
    expect(await llms.text()).toContain("/for/nepa-scoping-letter");
  });
});
