import type { Metadata } from "next";

import { getLandingPageEnv } from "@wildfires-org/turboplan-env";

import { brand } from "@/lib/brand";
import { resolveMetadataBase } from "@/lib/metadata-base";

interface PageMetadataOptions {
  /** The page's own title; the root layout's template appends the brand. */
  title: string;
  description: string;
  /** Site-relative path of the page's canonical URL, e.g. "/docs". */
  path: string;
  type?: "website" | "article";
  image?: string;
}

// Shared by the root layout's defaults and the home page. NEPA/CEQA lead the
// copy: Google's keyword tooling read the old "plan projects in minutes"
// wording as project-management software.
export const SITE_TAGLINE = "AI for NEPA & CEQA Documents";

// Kept within TITLE_MAX_LENGTH / DESCRIPTION_MAX_LENGTH (see seo.test.ts).
export const SITE_TITLE = `${brand.name} — AI for NEPA & CEQA: Scoping Letters, CEs, EAs`;

export const SITE_DESCRIPTION = `AI for NEPA and CEQA reviews: describe a project and ${brand.name} researches precedent and drafts scoping letters, CE decision memos and EAs.`;

/**
 * The marketing site's canonical origin (LANDING_URL), or undefined when the
 * deployment didn't set it.
 */
export const getSiteUrl = () =>
  resolveMetadataBase(getLandingPageEnv().LANDING_URL);

/**
 * The only origin search engines should index. Staging and PR previews serve
 * the same pages from other hosts and must stay out of search results, or
 * they compete with eplan.ai for the same queries. (A fork serving its own
 * domain changes this constant.)
 */
export const PRODUCTION_ORIGIN = "https://eplan.ai";

// Lengths Google shows in a result before truncating.
export const TITLE_MAX_LENGTH = 60;
export const DESCRIPTION_MAX_LENGTH = 155;

export const isProductionSite = (siteUrl: URL | undefined): boolean =>
  siteUrl?.origin === PRODUCTION_ORIGIN;

/** Only production may be indexed: robots.txt and the root `robots` meta. */
export const isIndexableDeployment = () => isProductionSite(getSiteUrl());

/** Root `robots` metadata: index on production, noindex everywhere else. */
export const indexableRobots = (
  siteUrl: URL | undefined = getSiteUrl(),
): NonNullable<Metadata["robots"]> =>
  isProductionSite(siteUrl)
    ? { index: true, follow: true }
    : { index: false, follow: false };

/**
 * For pages whose content renders in the browser (catalog lists, office
 * pages): out of the index, but crawlers still follow their links.
 */
export const THIN_PAGE_ROBOTS = {
  index: false,
  follow: true,
} as const satisfies Metadata["robots"];

/**
 * Absolute URL for a site path, for JSON-LD and the sitemap. Without an
 * origin the path stays relative and a warning is logged: a guessed origin
 * (localhost) is worse than none.
 */
export const toAbsoluteUrl = (
  path: string,
  siteUrl: URL | undefined = getSiteUrl(),
): string => {
  if (!siteUrl) {
    console.warn(
      `LANDING_URL is not set; "${path}" stays relative in structured data`,
    );
    return path;
  }
  return new URL(path, siteUrl).toString();
};

/**
 * Complete per-page metadata: title, description, canonical and social cards.
 * Next merges metadata shallowly, so a page that sets `openGraph` replaces the
 * root layout's block entirely — this always fills in siteName and the image.
 *
 * The canonical is only emitted when the site URL is known: without
 * metadataBase Next resolves relative URLs against localhost, and a canonical
 * pointing there is worse than none.
 */
export const buildPageMetadata = ({
  title,
  description,
  path,
  type = "website",
  image = brand.ogImage,
}: PageMetadataOptions): Metadata => {
  // A title that already names the brand ("ePlan.ai Documentation") skips the
  // template instead of repeating it.
  const isBranded = title.includes(brand.name);
  const socialTitle = isBranded ? title : `${title} | ${brand.name}`;
  const hasSiteUrl = Boolean(getSiteUrl());

  return {
    title: isBranded ? { absolute: title } : title,
    description,
    ...(hasSiteUrl ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title: socialTitle,
      description,
      siteName: brand.name,
      type,
      images: [{ url: image }],
      ...(hasSiteUrl ? { url: path } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
};
