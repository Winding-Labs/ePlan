import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Checkout is a signed-in flow and /api serves data, not pages.
      disallow: ["/api/", "/checkout"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
