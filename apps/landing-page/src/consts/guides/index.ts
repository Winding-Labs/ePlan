import { NEPA_GUIDES } from "./nepa";
import * as ceqa from "./pages/ceqa";
import * as ceqaAndNepa from "./pages/ceqa-and-nepa";
import * as ceqaEir from "./pages/ceqa-eir";
import * as ceqaExemptions from "./pages/ceqa-exemptions";
import * as ceqaInitialStudy from "./pages/ceqa-initial-study";
import * as environmentalImpactStatement from "./pages/environmental-impact-statement";
import * as nepaRegulations from "./pages/nepa-regulations";
import { GUIDE_PATHS, type GuidePath } from "./paths";
import { PRODUCT_GUIDES } from "./product";
import { NEPA_SOURCES } from "./sources";
import type { GuideEntry, Source } from "./types";

export { GUIDE_HUBS, GUIDE_PATHS, type GuidePath } from "./paths";
export { GUIDE_SOURCES_READ_ON } from "./sources";

// Pages written one per module (`pages/*.ts`): each exports its entry and
// the sources only it cites.
const PAGE_MODULES = [
  environmentalImpactStatement,
  nepaRegulations,
  ceqa,
  ceqaInitialStudy,
  ceqaExemptions,
  ceqaEir,
  ceqaAndNepa,
];

/** Every source any guide page cites, keyed for `[[key]]` markers. */
export const SOURCES: Record<string, Source> = Object.assign(
  {},
  NEPA_SOURCES,
  ...PAGE_MODULES.map((module) => module.sources),
);

const ENTRIES: GuideEntry<GuidePath>[] = [
  ...NEPA_GUIDES,
  ...PAGE_MODULES.map((module) => module.entry),
  ...PRODUCT_GUIDES,
];

const BY_PATH = new Map(ENTRIES.map((entry) => [entry.path, entry]));

/** Every guide page that has content, in registry order. */
export const GUIDES: GuideEntry<GuidePath>[] = GUIDE_PATHS.flatMap((path) => {
  const entry = BY_PATH.get(path);
  return entry ? [entry] : [];
});

export const getGuide = (path: GuidePath): GuideEntry<GuidePath> => {
  const entry = BY_PATH.get(path);
  if (!entry) {
    throw new Error(`No guide page content for ${path}`);
  }
  return entry;
};
