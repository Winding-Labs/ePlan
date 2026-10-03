import type { MetadataRoute } from "next";

import { GUIDE_SOURCES_READ_ON, GUIDES } from "@/consts/guides";
import { getCatalogSitemapPaths } from "@/lib/catalog-sitemap";
import { getSiteUrl } from "@/lib/seo";
import { source } from "@/lib/source";
import { routing } from "@/utils/routing";

type SitemapEntry = MetadataRoute.Sitemap[number];

// Home, the guides, the catalog index, the legal pages and the docs come from
// the build. Public organizations, offices, projects and project templates
// come from the public API on each request, so the sitemap follows the
// catalog without a deploy.
export const dynamic = "force-dynamic";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
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
    toEntry(routing.catalog(), 0.7),
    toEntry(routing.privacy(), 0.2),
    toEntry(routing.terms(), 0.2),
    ...GUIDES.map((guide) =>
      toEntry(guide.path, guide.parent ? 0.8 : 0.9, GUIDE_SOURCES_READ_ON),
    ),
    ...source
      .getPages()
      .map((page) => toEntry(page.url, page.url === "/docs" ? 0.7 : 0.5)),
    ...(
      await getCatalogSitemapPaths().catch((error) => {
        // An unexpected API shape must not cost the static entries.
        console.error("catalog sitemap failed", error);
        return [];
      })
    ).map(({ path, priority, lastModified }) =>
      toEntry(path, priority, lastModified),
    ),
  ];
};

export default sitemap;
