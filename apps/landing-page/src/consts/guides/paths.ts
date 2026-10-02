/**
 * Every guide page, in the order the footer and related-guide cards list
 * them. Hubs come first in their family. Adding a page means adding its path
 * here, its entry in the family file and its route under src/app.
 */
export const GUIDE_PATHS = [
  "/nepa",
  "/nepa/categorical-exclusion",
  "/nepa/environmental-assessment",
  "/nepa/environmental-impact-statement",
  "/nepa/scoping-letter",
  "/nepa/regulations",
  "/ceqa",
  "/ceqa/initial-study",
  "/ceqa/exemptions",
  "/ceqa/environmental-impact-report",
  "/ceqa/ceqa-and-nepa",
  "/nepa-software",
  "/compare/nepa-ai-tools",
] as const;

export type GuidePath = (typeof GUIDE_PATHS)[number];

/** Hub pages: linked from the footer on every page. */
export const GUIDE_HUBS: GuidePath[] = ["/nepa", "/ceqa", "/nepa-software"];
