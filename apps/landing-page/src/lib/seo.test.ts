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
  it("allows crawling and points to the sitemap in production", async () => {
    const { robots } = await loadWithEnv({
      NEXT_PUBLIC_LANDING_URL: "https://example.test",
      NEXT_PUBLIC_APP_ENV: "production",
    });

    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/ingest/", "/monitoring"],
      },
      sitemap: "https://example.test/sitemap.xml",
    });
  });

  it("treats an unset APP_ENV as production", async () => {
    const { seo } = await loadWithEnv({});

    expect(seo.isIndexableDeployment()).toBe(true);
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

    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining([
        "https://example.test/",
        "https://example.test/nepa",
        "https://example.test/nepa/scoping-letter",
        "https://example.test/ceqa/initial-study",
        "https://example.test/docs",
        "https://example.test/docs/guides/quickstart",
      ]),
    );
    expect(new Set(urls).size).toBe(urls.length);
    // Moved pages (308) and the client-rendered, noindex catalog listings
    // stay out of the sitemap.
    expect(urls.some((url) => url.includes("/templates"))).toBe(false);
    expect(urls.some((url) => url.endsWith("/projects"))).toBe(false);
    expect(urls.some((url) => url.includes("/checkout"))).toBe(false);
  });

  it("is empty when the site URL is unknown", async () => {
    const { sitemap } = await loadWithEnv({});

    expect(sitemap()).toEqual([]);
  });
});
