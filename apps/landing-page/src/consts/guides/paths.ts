/**
 * Every guide page, at /for/<slug>, in the order the /for index, footer and
 * related-guide cards list them. Hubs come first in their family. Adding a
 * page means adding its path here and its entry under consts/guides; the one
 * route (app/for/[slug]) renders it.
 */
export const GUIDE_PATHS = [
  "/for/nepa",
  "/for/nepa-categorical-exclusion",
  "/for/nepa-environmental-assessment",
  "/for/environmental-impact-statement",
  "/for/nepa-scoping-letter",
  "/for/nepa-regulations",
  "/for/ceqa",
  "/for/ceqa-initial-study",
  "/for/ceqa-exemptions",
  "/for/ceqa-environmental-impact-report",
  "/for/ceqa-and-nepa",
  "/for/section-106",
  "/for/hud-environmental-review",
  "/for/esa-section-7",
  "/for/state-environmental-review",
  "/for/new-york-seqr",
  "/for/washington-sepa",
  "/for/massachusetts-mepa",
  "/for/hawaii-hepa",
  "/for/usda-forest-service-nepa",
  "/for/interior-blm-nepa",
  "/for/fhwa-nepa",
  "/for/doe-nepa",
  "/for/faa-nepa",
  "/for/fema-ehp",
  "/for/nepa-examples",
  "/for/eis-database",
  "/for/nepassist",
  "/for/ipac",
  "/for/ceqanet",
  "/for/nepa-software",
  "/for/nepa-ai-tools",
] as const;

export type GuidePath = (typeof GUIDE_PATHS)[number];

/** The slug after /for/ for each guide page. */
export const guideSlug = (path: GuidePath): string =>
  path.slice("/for/".length);
