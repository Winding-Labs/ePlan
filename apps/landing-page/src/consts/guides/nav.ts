import type { GuidePath } from "./paths";
import type { GuideFamily } from "./types";

/** A guide's place in the site: its short name, its family and the hub above it. */
export type GuideNav = {
  /** Short name for breadcrumbs, guide cards and the footer. */
  name: string;
  family: GuideFamily;
  /** Hub this page sits under, for breadcrumbs. */
  parent?: GuidePath;
};

/** Families in the order the /for index and the footer list them. */
export const GUIDE_FAMILIES: { family: GuideFamily; title: string }[] = [
  { family: "nepa", title: "NEPA documents" },
  { family: "ceqa", title: "CEQA documents" },
  { family: "federal", title: "Reviews alongside NEPA" },
  { family: "agency", title: "Agency NEPA procedures" },
  { family: "state", title: "State environmental review" },
  { family: "tools", title: "Research tools and examples" },
  { family: "product", title: "ePlan" },
];

/**
 * Every guide's name, family and hub. No page content lives here, so client
 * components (the footer) can link every guide without bundling the pages;
 * keyed by path, so the compiler refuses a registered page left out.
 */
export const GUIDE_NAV: Record<GuidePath, GuideNav> = {
  "/for/nepa": { name: "NEPA process", family: "nepa" },
  "/for/nepa-categorical-exclusion": {
    name: "Categorical exclusions",
    family: "nepa",
    parent: "/for/nepa",
  },
  "/for/nepa-environmental-assessment": {
    name: "Environmental assessment",
    family: "nepa",
    parent: "/for/nepa",
  },
  "/for/environmental-impact-statement": {
    name: "Environmental impact statement",
    family: "nepa",
    parent: "/for/nepa",
  },
  "/for/nepa-scoping-letter": {
    name: "Scoping letter",
    family: "nepa",
    parent: "/for/nepa",
  },
  "/for/nepa-regulations": {
    name: "NEPA regulations",
    family: "nepa",
    parent: "/for/nepa",
  },
  "/for/ceqa": { name: "CEQA", family: "ceqa" },
  "/for/ceqa-initial-study": {
    name: "Initial study",
    family: "ceqa",
    parent: "/for/ceqa",
  },
  "/for/ceqa-exemptions": {
    name: "CEQA exemptions",
    family: "ceqa",
    parent: "/for/ceqa",
  },
  "/for/ceqa-environmental-impact-report": {
    name: "Environmental impact report",
    family: "ceqa",
    parent: "/for/ceqa",
  },
  "/for/ceqa-and-nepa": {
    name: "CEQA and NEPA",
    family: "ceqa",
    parent: "/for/ceqa",
  },
  "/for/section-106": {
    name: "Section 106",
    family: "federal",
    parent: "/for/nepa",
  },
  "/for/hud-environmental-review": {
    name: "HUD environmental review",
    family: "federal",
    parent: "/for/nepa",
  },
  "/for/esa-section-7": {
    name: "ESA Section 7",
    family: "federal",
    parent: "/for/nepa",
  },
  "/for/state-environmental-review": {
    name: "State environmental review",
    family: "state",
  },
  "/for/new-york-seqr": {
    name: "New York SEQRA",
    family: "state",
    parent: "/for/state-environmental-review",
  },
  "/for/washington-sepa": {
    name: "Washington SEPA",
    family: "state",
    parent: "/for/state-environmental-review",
  },
  "/for/massachusetts-mepa": {
    name: "Massachusetts MEPA",
    family: "state",
    parent: "/for/state-environmental-review",
  },
  "/for/hawaii-hepa": {
    name: "Hawaii HEPA",
    family: "state",
    parent: "/for/state-environmental-review",
  },
  "/for/usda-forest-service-nepa": {
    name: "Forest Service NEPA",
    family: "agency",
    parent: "/for/nepa",
  },
  "/for/interior-blm-nepa": {
    name: "Interior and BLM NEPA",
    family: "agency",
    parent: "/for/nepa",
  },
  "/for/fhwa-nepa": {
    name: "FHWA NEPA",
    family: "agency",
    parent: "/for/nepa",
  },
  "/for/doe-nepa": { name: "DOE NEPA", family: "agency", parent: "/for/nepa" },
  "/for/faa-nepa": { name: "FAA NEPA", family: "agency", parent: "/for/nepa" },
  "/for/fema-ehp": {
    name: "FEMA EHP review",
    family: "agency",
    parent: "/for/nepa",
  },
  "/for/nepa-examples": {
    name: "NEPA examples",
    family: "tools",
    parent: "/for/nepa",
  },
  "/for/eis-database": {
    name: "EIS database",
    family: "tools",
    parent: "/for/nepa",
  },
  "/for/nepassist": { name: "NEPAssist", family: "tools", parent: "/for/nepa" },
  "/for/ipac": { name: "IPaC", family: "tools", parent: "/for/nepa" },
  "/for/ceqanet": { name: "CEQAnet", family: "tools", parent: "/for/ceqa" },
  "/for/nepa-software": { name: "NEPA software", family: "product" },
  "/for/nepa-ai-tools": { name: "AI tools for NEPA", family: "product" },
};
