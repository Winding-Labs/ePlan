import type { MetadataRoute } from "next";

// The web app is the signed-in product: login, dashboard and project pages are
// not meant for search results. They are kept out with a `noindex` robots meta
// on every page (root layout), NOT a robots.txt Disallow — a blocked crawler
// never fetches the page, never sees the noindex, and already-indexed URLs
// (e.g. /login) would stay in results. Everything indexable lives on the
// marketing site (LANDING_URL), which serves its own robots.txt and sitemap.
const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: "*", allow: "/" },
});

export default robots;
