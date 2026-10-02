import type { MetadataRoute } from "next";

import { NEPA_PAGES, NEPA_SOURCES_READ_ON } from "@/consts/nepa-pages";
import { absoluteUrl } from "@/lib/site-url";
import { source } from "@/lib/source";

// Server-rendered marketing and docs pages only. The /projects catalog is
// left out: its listings render client-side and are noindex (see
// app/projects/layout.tsx).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    ...NEPA_PAGES.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: NEPA_SOURCES_READ_ON,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...source.getPages().map((page) => ({
      url: absoluteUrl(page.url),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
