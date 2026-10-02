// Env is read when modules load (brand.name) and cached by turboplan-env, so
// each test sets it first and imports fresh modules.
const REQUIRED_ENV = {
  NEXT_PUBLIC_LINKEDIN_URL: "https://linkedin.example.test",
  NEXT_PUBLIC_TURBOPLAN_URL: "https://app.example.test",
  NEXT_PUBLIC_SERVER_URL: "https://api.example.test",
  AUTH_SECRET: "test-secret",
  NEXT_PUBLIC_APP_NAME: "Example.test",
};

jest.mock("./source", () => ({
  source: {
    getPages: () => [{ url: "/docs" }, { url: "/docs/guides/quickstart" }],
  },
}));

const originalEnv = process.env;

const loadWithEnv = async (env: Record<string, string | undefined>) => {
  jest.resetModules();
  process.env = {
    ...originalEnv,
    LANDING_URL: undefined,
    NEXT_PUBLIC_LANDING_URL: undefined,
    APP_ENV: undefined,
    NEXT_PUBLIC_APP_ENV: undefined,
    ...REQUIRED_ENV,
    ...env,
  };

  return {
    seo: await import("./seo"),
    robots: (await import("../app/robots")).default,
    sitemap: (await import("../app/sitemap")).default,
  };
};

afterEach(() => {
  process.env = originalEnv;
});

describe("buildPageMetadata", () => {
  it("emits a canonical and og:url when the site URL is known", async () => {
    const { seo } = await loadWithEnv({
      NEXT_PUBLIC_LANDING_URL: "https://example.test",
    });

    const metadata = seo.buildPageMetadata({
      title: "Quickstart",
      description: "Get started.",
      path: "/docs/quickstart",
    });

    expect(metadata.title).toBe("Quickstart");
    expect(metadata.alternates?.canonical).toBe("/docs/quickstart");
    expect(metadata.openGraph).toMatchObject({
      title: "Quickstart | Example.test",
      url: "/docs/quickstart",
      siteName: "Example.test",
    });
  });

  it("omits the canonical rather than letting it resolve to localhost", async () => {
    const { seo } = await loadWithEnv({});

    const metadata = seo.buildPageMetadata({
      title: "Quickstart",
      description: "Get started.",
      path: "/docs/quickstart",
    });

    expect(metadata.alternates).toBeUndefined();
    expect(metadata.openGraph).not.toHaveProperty("url");
  });

  it("doesn't append the brand to a title that already names it", async () => {
    const { seo } = await loadWithEnv({});

    const metadata = seo.buildPageMetadata({
      title: "Example.test Documentation",
      description: "Docs.",
      path: "/docs",
    });

    expect(metadata.title).toEqual({ absolute: "Example.test Documentation" });
    expect(metadata.openGraph?.title).toBe("Example.test Documentation");
  });
});

describe("robots", () => {
  it("allows crawling and points to the sitemap on https://eplan.ai", async () => {
    const { robots } = await loadWithEnv({
      NEXT_PUBLIC_LANDING_URL: "https://eplan.ai",
    });

    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/ingest/", "/monitoring"],
      },
      sitemap: "https://eplan.ai/sitemap.xml",
    });
  });

  it("is indexable only when the site URL is https://eplan.ai", async () => {
    expect((await loadWithEnv({})).seo.isIndexableDeployment()).toBe(false);
    expect(
      (
        await loadWithEnv({
          NEXT_PUBLIC_LANDING_URL:
            "https://turboplan-landing-pr-35.ilya-496.workers.dev",
          NEXT_PUBLIC_APP_ENV: "production",
        })
      ).seo.isIndexableDeployment(),
    ).toBe(false);
    expect(
      (
        await loadWithEnv({ NEXT_PUBLIC_LANDING_URL: "https://eplan.ai" })
      ).seo.isIndexableDeployment(),
    ).toBe(true);
  });

  it("blocks every crawler on staging and previews", async () => {
    const { robots } = await loadWithEnv({
      NEXT_PUBLIC_LANDING_URL: "https://staging.example.test",
      NEXT_PUBLIC_APP_ENV: "develop",
    });

    expect(robots()).toEqual({ rules: { userAgent: "*", disallow: "/" } });
  });
});

describe("sitemap", () => {
  it("lists static pages, document templates and docs as absolute URLs", async () => {
    const { sitemap } = await loadWithEnv({
      NEXT_PUBLIC_LANDING_URL: "https://example.test",
    });

    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining([
        "https://example.test/",
        "https://example.test/templates",
        "https://example.test/templates/nepa-scoping-letter",
        "https://example.test/templates/environmental-impact-statement",
        "https://example.test/projects",
        "https://example.test/docs",
        "https://example.test/docs/guides/quickstart",
      ]),
    );
    expect(urls).toEqual(
      expect.arrayContaining([
        "https://example.test/nepa",
        "https://example.test/categorical-exclusions",
        "https://example.test/compare/nepa-ai-tools",
      ]),
    );
    // Client-rendered lists are noindex, so they stay out of the sitemap.
    expect(urls).not.toContain("https://example.test/projects/projects");
    expect(urls).not.toContain("https://example.test/projects/templates");
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.some((url) => url.includes("purpose-and-need"))).toBe(false);
    expect(urls.some((url) => url.includes("/checkout"))).toBe(false);
  });

  it("is empty when the site URL is unknown", async () => {
    const { sitemap } = await loadWithEnv({});

    expect(sitemap()).toEqual([]);
  });
});

describe("isProductionSite and indexableRobots", () => {
  it("index https://eplan.ai only", async () => {
    const { seo } = await loadWithEnv({});

    expect(seo.isProductionSite(new URL("https://eplan.ai/nepa"))).toBe(true);
    expect(seo.indexableRobots(new URL("https://eplan.ai"))).toEqual({
      index: true,
      follow: true,
    });

    for (const url of [
      "https://turboplan-landing-pr-35.ilya-496.workers.dev",
      "https://turboplan-landing-staging.ilya-496.workers.dev",
      "https://www.eplan.ai",
      "http://eplan.ai",
      "http://localhost:3002",
    ]) {
      expect(seo.isProductionSite(new URL(url))).toBe(false);
      expect(seo.indexableRobots(new URL(url))).toEqual({
        index: false,
        follow: false,
      });
    }
    expect(seo.isProductionSite(undefined)).toBe(false);
  });
});

describe("toAbsoluteUrl", () => {
  it("joins a path onto the site origin", async () => {
    const { seo } = await loadWithEnv({});

    expect(
      seo.toAbsoluteUrl("/nepa/scoping-letter", new URL("https://eplan.ai")),
    ).toBe("https://eplan.ai/nepa/scoping-letter");
  });

  it("keeps the path relative, with a warning, without an origin", async () => {
    const { seo } = await loadWithEnv({});
    const warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});

    expect(seo.toAbsoluteUrl("/nepa", undefined)).toBe("/nepa");
    expect(warnSpy).toHaveBeenCalled();

    warnSpy.mockRestore();
  });
});

describe("home title and description", () => {
  it("fit Google's limits", async () => {
    const { seo } = await loadWithEnv({ NEXT_PUBLIC_APP_NAME: "ePlan.ai" });

    expect(seo.SITE_TITLE.length).toBeLessThanOrEqual(seo.TITLE_MAX_LENGTH);
    expect(seo.SITE_DESCRIPTION.length).toBeLessThanOrEqual(
      seo.DESCRIPTION_MAX_LENGTH,
    );
  });
});
