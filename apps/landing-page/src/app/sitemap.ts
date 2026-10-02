import type { MetadataRoute } from "next";

import { DOCUMENT_TEMPLATES } from "@/consts/document-templates";
import { NEPA_PAGES } from "@/consts/nepa-pages";
import { getSiteUrl } from "@/lib/seo";
import { source } from "@/lib/source";
import { routing } from "@/utils/routing";

// Merge of #34 and #35; replaced by the guide registry in the next commit.
const sitemap = (): MetadataRoute.Sitemap => {
  const siteUrl = getSiteUrl();
  if (!siteUrl) {
    return [];
  }
  const toEntry = (path: string, priority: number) => ({
    url: new URL(path, siteUrl).href,
    priority,
  });
  return [
    toEntry(routing.home(), 1),
    ...NEPA_PAGES.map((page) => toEntry(page.path, 0.8)),
    ...DOCUMENT_TEMPLATES.map((template) =>
      toEntry(routing.documentTemplate({ slug: template.slug }), 0.8),
    ),
    ...source
      .getPages()
      .map((page) => toEntry(page.url, page.url === "/docs" ? 0.7 : 0.5)),
  ];
};

export default sitemap;
