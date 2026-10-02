import type { MetadataRoute } from "next";

import { getSiteUrl, isProductionSite, toAbsoluteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  // Staging and PR previews: nothing to crawl. Only eplan.ai is indexed.
  if (!isProductionSite(siteUrl)) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Checkout is a signed-in flow and /api serves data, not pages.
      disallow: ["/api/", "/checkout"],
    },
    sitemap: toAbsoluteUrl("/sitemap.xml", siteUrl),
  };
}
