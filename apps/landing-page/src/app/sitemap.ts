import type { MetadataRoute } from "next";

import { GUIDE_SOURCES_READ_ON, GUIDES } from "@/consts/guides";
import { getSiteUrl } from "@/lib/seo";
import { source } from "@/lib/source";
import { routing } from "@/utils/routing";

type SitemapEntry = MetadataRoute.Sitemap[number];

// Indexable, server-rendered pages only: home, every guide and the docs. The
// /projects listings render client-side and are noindex (app/projects/
// layout.tsx); their detail pages come from the API at request time.
const sitemap = (): MetadataRoute.Sitemap => {
  const siteUrl = getSiteUrl();

  // A sitemap needs absolute URLs; without the site's origin there is nothing
  // correct to emit.
  if (!siteUrl) {
    return [];
  }

  const toEntry = (
    path: string,
    priority: number,
    lastModified?: string,
  ): SitemapEntry => ({
    url: new URL(path, siteUrl).href,
    priority,
    ...(lastModified ? { lastModified } : {}),
  });

  return [
    toEntry(routing.home(), 1),
    toEntry("/for", 0.9),
    ...GUIDES.map((guide) =>
      toEntry(guide.path, guide.parent ? 0.8 : 0.9, GUIDE_SOURCES_READ_ON),
    ),
    ...source
      .getPages()
      .map((page) => toEntry(page.url, page.url === "/docs" ? 0.7 : 0.5)),
  ];
};

export default sitemap;
