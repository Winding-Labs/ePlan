import type { MetadataRoute } from "next";

import { getSiteUrl, isIndexableDeployment } from "@/lib/seo";

// Not disallowed on purpose: /checkout carries a noindex meta tag, which a
// crawler can only see if it is allowed to fetch the page.
const DISALLOWED_PATHS = [
  // Docs search endpoint
  "/api/",
  // PostHog and Sentry same-origin proxies
  "/ingest/",
  "/monitoring",
];

const robots = (): MetadataRoute.Robots => {
  // Staging and PR previews share production's content on other hosts —
  // keep them out of the index entirely.
  if (!isIndexableDeployment()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  const siteUrl = getSiteUrl();

  return {
    rules: { userAgent: "*", allow: "/", disallow: DISALLOWED_PATHS },
    ...(siteUrl ? { sitemap: new URL("/sitemap.xml", siteUrl).href } : {}),
  };
};

export default robots;
