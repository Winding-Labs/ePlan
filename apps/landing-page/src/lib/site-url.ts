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
