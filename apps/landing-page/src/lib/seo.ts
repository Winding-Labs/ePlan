import type { Metadata } from "next";

import { getAppEnv, getLandingPageEnv } from "@wildfires-org/turboplan-env";

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

export const SITE_TITLE = `${brand.name} — ${SITE_TAGLINE}: Scoping Letters, CEs, EAs`;

export const SITE_DESCRIPTION = `AI for NEPA and CEQA reviews: describe a project and ${brand.name} researches precedent, plans the work and drafts scoping letters, CE decision memos and EAs for review.`;

/**
 * The marketing site's canonical origin (LANDING_URL), or undefined when the
 * deployment didn't set it.
 */
export const getSiteUrl = () =>
  resolveMetadataBase(getLandingPageEnv().LANDING_URL);

/**
 * Absolute URL for a site path (JSON-LD, sitemap). Without a known origin the
 * path stays relative: a guessed localhost origin is worse than none.
 */
export const absoluteUrl = (path: string): string => {
  const siteUrl = getSiteUrl();
  return siteUrl ? new URL(path, siteUrl).href : path;
};

/**
 * Only production may be indexed. An unset APP_ENV (local dev, or a fork that
 * never configured it) counts as production, so a missing variable can never
 * silently block a live site from search engines.
 */
export const isIndexableDeployment = () => {
  const appEnv = getAppEnv();
  return !appEnv || appEnv === "production";
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
