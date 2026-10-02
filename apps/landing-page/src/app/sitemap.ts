import type { MetadataRoute } from "next";

import { DOCUMENT_TEMPLATES } from "@/consts/document-templates";
import { getSiteUrl } from "@/lib/seo";
import { source } from "@/lib/source";
import { routing } from "@/utils/routing";

type SitemapEntry = MetadataRoute.Sitemap[number];

// Every route here is enumerable at build time without the API. Public
// organizations, offices, projects and templates under /projects/* come from
// the API at request time, so only their static index pages are listed.
const STATIC_PATHS: Array<{ path: string; priority: number }> = [
  { path: routing.home(), priority: 1 },
  { path: routing.documentTemplates(), priority: 0.9 },
  { path: routing.catalog(), priority: 0.7 },
  { path: routing.catalogProjects(), priority: 0.6 },
  { path: routing.catalogTemplates(), priority: 0.6 },
];

const sitemap = (): MetadataRoute.Sitemap => {
  const siteUrl = getSiteUrl();

  // A sitemap needs absolute URLs; without the site's origin there is nothing
  // correct to emit.
  if (!siteUrl) {
    return [];
  }

  const toEntry = (path: string, priority: number): SitemapEntry => ({
    url: new URL(path, siteUrl).href,
    priority,
  });

  return [
    ...STATIC_PATHS.map(({ path, priority }) => toEntry(path, priority)),
    ...DOCUMENT_TEMPLATES.map((template) =>
      toEntry(routing.documentTemplate({ slug: template.slug }), 0.8),
    ),
    ...source
      .getPages()
      .map((page) => toEntry(page.url, page.url === "/docs" ? 0.7 : 0.5)),
  ];
};

export default sitemap;
