import { NEPA_GUIDES } from "./nepa";
import * as ceqa from "./pages/ceqa";
import * as ceqaAndNepa from "./pages/ceqa-and-nepa";
import * as ceqaEir from "./pages/ceqa-eir";
import * as ceqaExemptions from "./pages/ceqa-exemptions";
import * as ceqaInitialStudy from "./pages/ceqa-initial-study";
import * as doeNepa from "./pages/doe-nepa";
import * as environmentalImpactStatement from "./pages/environmental-impact-statement";
import * as esaSection7 from "./pages/esa-section-7";
import * as faaNepa from "./pages/faa-nepa";
import * as femaEhp from "./pages/fema-ehp";
import * as fhwaNepa from "./pages/fhwa-nepa";
import * as hudEnvironmentalReview from "./pages/hud-environmental-review";
import * as interiorBlmNepa from "./pages/interior-blm-nepa";
import * as nepaRegulations from "./pages/nepa-regulations";
import * as section106 from "./pages/section-106";
import * as usdaForestServiceNepa from "./pages/usda-forest-service-nepa";
import { GUIDE_PATHS, type GuidePath } from "./paths";
import { PRODUCT_GUIDES } from "./product";
import { NEPA_SOURCES } from "./sources";
import type { GuideEntry, Source } from "./types";

export { GUIDE_PATHS, type GuidePath, guideSlug } from "./paths";
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
  femaEhp,
  hudEnvironmentalReview,
  faaNepa,
  doeNepa,
  fhwaNepa,
  interiorBlmNepa,
  usdaForestServiceNepa,
  esaSection7,
  section106,
];

/**
 * Every source any guide page cites, keyed for `[[key]]` markers. A key
 * defined by two modules is an error: one would silently replace the other.
 */
export const SOURCES: Record<string, Source> = [
  NEPA_SOURCES,
  ...PAGE_MODULES.map((module) => module.sources),
].reduce<Record<string, Source>>((all, table) => {
  for (const [key, source] of Object.entries(table)) {
    if (key in all) {
      throw new Error(`Guide source "${key}" is defined twice`);
    }
    all[key] = source;
  }
  return all;
}, {});

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
