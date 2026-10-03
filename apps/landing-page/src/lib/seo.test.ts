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

// The sitemap asks the public API for the catalog. By default it answers
// with empty lists; tests that need catalog URLs install their own answers.
const CATALOG_API = {
  organizations: [{ slug: "usfs" }],
  projects: [
    {
      slug: "caldor-fire-restoration",
      office: { slug: "eldorado-nf" },
      organization: { slug: "usfs" },
      updatedAt: "2026-09-01T00:00:00.000Z",
    },
  ],
  "templates?limit=500": {
    templates: [
      {
        slug: "fuel-break-ce",
        office: { slug: "eldorado-nf" },
        organization: { slug: "usfs" },
      },
    ],
  },
} as const;

const mockPublicApi = (answers: Record<string, unknown> | "down") => {
  jest.spyOn(global, "fetch").mockImplementation(async (input) => {
    if (answers === "down") {
      throw new Error("connect ECONNREFUSED");
    }
    const path = String(input).split("/api/public/")[1] ?? "";
    const empty = path.startsWith("templates") ? { templates: [] } : [];
    const body = answers[path] ?? empty;
    return new Response(JSON.stringify(body), { status: 200 });
  });
};

beforeEach(() => {
  mockPublicApi({});
});

afterEach(() => {
  process.env = originalEnv;
  jest.restoreAllMocks();
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

describe("clampDescription", () => {
  it("cuts a long description to the snippet width at a word boundary", async () => {
    const { seo } = await loadWithEnv({});
    const long = Array.from(
      { length: 60 },
      (_, index) => `restoration${index},`,
    ).join("\n  ");

    const clamped = seo.clampDescription(long);

    expect(seo.snippetWidthPx(clamped)).toBeLessThanOrEqual(
      seo.DESCRIPTION_MAX_PX,
    );
    expect(clamped).toMatch(/restoration\d+…$/);
    expect(clamped).not.toContain("\n");
    expect(
      seo.buildPageMetadata({ title: "T", description: long, path: "/p" })
        .description,
    ).toBe(clamped);
  });

  it("leaves a description that fits unchanged", async () => {
    const { seo } = await loadWithEnv({ NEXT_PUBLIC_APP_NAME: "ePlan.ai" });

    expect(seo.clampDescription(seo.SITE_DESCRIPTION)).toBe(
      seo.SITE_DESCRIPTION,
    );
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
  it("lists home, every guide page and docs as absolute URLs", async () => {
    const { sitemap } = await loadWithEnv({
      NEXT_PUBLIC_LANDING_URL: "https://example.test",
    });

    const urls = (await sitemap()).map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining([
        "https://example.test/",
        "https://example.test/for",
        "https://example.test/for/nepa",
        "https://example.test/for/nepa-categorical-exclusion",
        "https://example.test/for/nepa-scoping-letter",
        "https://example.test/for/ceqa-initial-study",
        "https://example.test/for/nepa-ai-tools",
        "https://example.test/projects",
        "https://example.test/docs",
        "https://example.test/docs/guides/quickstart",
      ]),
    );
    // Client-rendered lists are noindex, so they stay out of the sitemap.
    expect(urls).not.toContain("https://example.test/projects/projects");
    expect(urls).not.toContain("https://example.test/projects/templates");
    expect(new Set(urls).size).toBe(urls.length);
    // Moved pages (308) stay out of the sitemap.
    expect(
      urls.some((url) => url.startsWith("https://example.test/templates")),
    ).toBe(false);
    expect(urls.some((url) => url.includes("/checkout"))).toBe(false);
  });

  it("is empty when the site URL is unknown", async () => {
    const { sitemap } = await loadWithEnv({});

    expect(await sitemap()).toEqual([]);
  });

  it("adds every public organization, project and template", async () => {
    mockPublicApi(CATALOG_API);
    const { sitemap } = await loadWithEnv({
      NEXT_PUBLIC_LANDING_URL: "https://example.test",
    });

    const entries = await sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining([
        "https://example.test/projects/usfs",
        "https://example.test/projects/usfs/eldorado-nf/caldor-fire-restoration",
        "https://example.test/projects/usfs/eldorado-nf/templates/fuel-break-ce",
      ]),
    );
    // Office pages are noindex, so they stay out of the sitemap.
    expect(urls).not.toContain(
      "https://example.test/projects/usfs/eldorado-nf",
    );
    expect(
      entries.find((entry) => entry.url.endsWith("caldor-fire-restoration"))
        ?.lastModified,
    ).toBe("2026-09-01T00:00:00.000Z");
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("still lists the static pages when the public API is down", async () => {
    mockPublicApi("down");
    jest.spyOn(console, "error").mockImplementation(() => {});
    const { sitemap } = await loadWithEnv({
      NEXT_PUBLIC_LANDING_URL: "https://example.test",
    });

    const urls = (await sitemap()).map((entry) => entry.url);

    expect(urls).toContain("https://example.test/for/nepa");
    expect(urls.some((url) => url.includes("/projects/usfs"))).toBe(false);
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
    expect(seo.snippetWidthPx(seo.SITE_DESCRIPTION)).toBeLessThanOrEqual(
      seo.DESCRIPTION_MAX_PX,
    );
  });
});

describe("snippetWidthPx", () => {
  // SEOmator measured this description at 1,033px on 2026-10-02.
  it("tracks the SEOmator snippet estimate within 1%", async () => {
    const { seo } = await loadWithEnv({});
    const width = seo.snippetWidthPx(
      "What CEQA is, who it applies to, the CEQA process from exemption to EIR, lead agencies, the CEQA Guidelines and the 2025 AB 130 and SB 131 reforms.",
    );
    expect(Math.abs(width - 1033)).toBeLessThanOrEqual(11);
  });
});
