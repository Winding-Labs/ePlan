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

export const SITE_DESCRIPTION = `AI for NEPA and CEQA: describe a project and ${brand.name} researches precedent and drafts scoping letters, CE decision memos and EAs.`;

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

// Arial advance widths in 1/1000 em: Google renders result snippets in Arial.
const ARIAL_WIDTHS: Record<string, number> = {
  " ": 278,
  "!": 278,
  '"': 355,
  "#": 556,
  $: 556,
  "%": 889,
  "&": 667,
  "'": 191,
  "(": 333,
  ")": 333,
  "*": 389,
  "+": 584,
  ",": 278,
  "-": 333,
  ".": 278,
  "/": 278,
  ":": 278,
  ";": 278,
  "?": 556,
  "@": 1015,
  "’": 222,
  "–": 556,
  "—": 1000,
  "§": 556,
  A: 667,
  B: 667,
  C: 722,
  D: 722,
  E: 667,
  F: 611,
  G: 778,
  H: 722,
  I: 278,
  J: 500,
  K: 667,
  L: 556,
  M: 833,
  N: 722,
  O: 778,
  P: 667,
  Q: 778,
  R: 722,
  S: 667,
  T: 611,
  U: 722,
  V: 667,
  W: 944,
  X: 667,
  Y: 667,
  Z: 611,
  a: 556,
  b: 556,
  c: 500,
  d: 556,
  e: 556,
  f: 278,
  g: 556,
  h: 556,
  i: 222,
  j: 222,
  k: 500,
  l: 222,
  m: 833,
  n: 556,
  o: 556,
  p: 556,
  q: 556,
  r: 333,
  s: 500,
  t: 278,
  u: 556,
  v: 500,
  w: 722,
  x: 500,
  y: 500,
  z: 500,
};

/** Width Google shows of a meta description before it cuts it off. */
export const DESCRIPTION_MAX_PX = 920;

/**
 * Estimated rendered width of a result snippet, in px. Arial at 15px tracks
 * the SEOmator estimate within ~1% (1,037 vs 1,033 px measured 2026-10-02);
 * characters not in the table count as a digit.
 */
export const snippetWidthPx = (text: string): number =>
  Math.round(
    ([...text].reduce((sum, char) => sum + (ARIAL_WIDTHS[char] ?? 556), 0) *
      15) /
      1000,
  );

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
      // The brand card is 1200x630; page-specific images (project covers)
      // have unknown dimensions.
      images: [
        image === brand.ogImage
          ? { url: image, width: 1200, height: 630 }
          : { url: image },
      ],
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
