import type { Metadata } from "next";

import { getLandingPageEnv } from "@wildfires-org/turboplan-env";

import { resolveMetadataBase } from "@/lib/metadata-base";

/**
 * The site origin for canonical URLs, the sitemap, robots.txt and JSON-LD.
 * Same source as the root layout's `metadataBase`, so the tags and the
 * sitemap always agree.
 */
export const getSiteUrl = (): URL | undefined =>
  resolveMetadataBase(getLandingPageEnv().LANDING_URL);

/**
 * Absolute URL for a site path. Without an origin the path is returned as-is
 * and a warning is logged: a guessed origin (localhost) in a sitemap is worse
 * than none.
 */
export const toAbsoluteUrl = (
  path: string,
  siteUrl: URL | undefined,
): string => {
  if (!siteUrl) {
    console.warn(
      `LANDING_URL is not set; "${path}" stays relative in canonical/sitemap output`,
    );
    return path;
  }
  return new URL(path, siteUrl).toString();
};

export const absoluteUrl = (path: string): string =>
  toAbsoluteUrl(path, getSiteUrl());

/**
 * The only origin search engines should index. Staging and PR previews are
 * served from other hosts and must stay out of search results, or they
 * compete with eplan.ai for the same queries.
 */
export const PRODUCTION_ORIGIN = "https://eplan.ai";

// Lengths Google shows in a result before truncating.
export const TITLE_MAX_LENGTH = 60;
export const DESCRIPTION_MAX_LENGTH = 155;

export const isProductionSite = (siteUrl: URL | undefined): boolean =>
  siteUrl?.origin === PRODUCTION_ORIGIN;

/** `robots` metadata for an indexable page: index only on production. */
export const indexableRobots = (
  siteUrl: URL | undefined = getSiteUrl(),
): NonNullable<Metadata["robots"]> =>
  isProductionSite(siteUrl)
    ? { index: true, follow: true }
    : { index: false, follow: false };
