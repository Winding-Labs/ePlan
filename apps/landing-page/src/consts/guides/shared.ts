import { PLAN_ORDER, PLANS } from "@wildfires-org/turboplan-billing/types";

import type { FaqItem } from "@/components/home-v2/faq";
import type { GuideExample, ManualComparisonRow } from "./types";

// --- Pricing, from the billing catalog (packages/modules/turboplan-billing) --

const ORDERED_PLANS = PLAN_ORDER.map((key) => PLANS[key]);
const FREE_PLAN = ORDERED_PLANS.find((plan) => plan.price_usd === 0);

const planPrice = (price: number): string =>
  price === 0 ? "free" : `$${price} a month`;

const seatPrices = ORDERED_PLANS.flatMap((plan) =>
  plan.additional_seat_price_usd === null
    ? []
    : [{ name: plan.name, price: plan.additional_seat_price_usd }],
);

const seatSentence = (): string => {
  if (seatPrices.length === 0) {
    return "";
  }
  const prices = new Set(seatPrices.map((seat) => seat.price));
  if (prices.size === 1) {
    const names = seatPrices.map((seat) => seat.name).join(" and ");
    return ` Extra seats on ${names} are $${seatPrices[0].price} a month each.`;
  }
  return seatPrices
    .map((seat) => ` Extra ${seat.name} seats are $${seat.price} a month each.`)
    .join("");
};

/** e.g. "Starter is free with 3 seats. Pro is $99 a month with 5 seats. ..." */
export const PRICING_SUMMARY = `${ORDERED_PLANS.map(
  (plan) =>
    `${plan.name} is ${planPrice(plan.price_usd)} with ${plan.included_seats} seats.`,
).join(" ")}${seatSentence()}`;

export const FREE_PLAN_LINE = FREE_PLAN
  ? ` The ${FREE_PLAN.name} plan is free.`
  : "";

export const PRICING_FAQ: FaqItem = {
  question: "How much does ePlan cost?",
  answer: `${PRICING_SUMMARY} Each workspace shares a monthly credit pool, and extra seats add credits.`,
};

// --- Prompts (first-person, like the homepage examples; not real projects) --

export const PROMPTS = {
  trailCe:
    "I'm a NEPA planner on the Blue Mountain Ranger District, Malheur National Forest, and I need a categorical exclusion for reconstructing 3 miles of an existing hiking trail near John Day, Oregon.",
  solarCe:
    "I'm a project lead installing rooftop solar panels on a DOE research facility in New Mexico and need the categorical exclusion determination.",
  signalsCe:
    "I'm with a state DOT installing new traffic signals and signs at a rural intersection on a federal-aid highway in Iowa, with no new right-of-way.",
  bridge:
    "I'm an environmental planner with a county public works department starting the NEPA review for a federally funded bridge replacement over a creek in Linn County, Oregon.",
  grazing:
    "I'm a land manager in Colorado renewing a 10-year grazing permit for a 1,500-acre allotment in the San Luis Valley.",
  campground:
    "I'm an NPS planner replacing outdated campground lighting with energy-efficient fixtures in Great Smoky Mountains National Park.",
  vegEa:
    "I'm a silviculturist at Rogue River-Siskiyou NF, preparing an EA for the 1,200-acre Jackson Creek vegetation restoration project to reduce fuels and restore late-successional habitat.",
  solarEa:
    "I'm a consultant preparing an EA for a 40-acre solar project on BLM land in Nevada for a private applicant.",
  pipelineEa:
    "I'm a Bureau of Reclamation planner preparing an EA for replacing 6 miles of an irrigation pipeline in central Washington.",
  thinningScoping:
    "I'm a NEPA coordinator at Shasta-Trinity National Forest and need a scoping letter for a 3,000-acre thinning project to reduce wildfire risk in the wildland-urban interface.",
  trailScoping:
    "I'm an NPS planner at Rocky Mountain National Park and need a scoping letter for repairing a storm-damaged section of the Bear Lake Trail.",
  roadScoping:
    "I'm a NEPA planner at Tahoe National Forest and need a scoping letter for repairing a washed-out section of Forest Road 43 that provides recreation access.",
  fuelBreakCe:
    "I'm a NEPA planner at Umatilla NF, and I'm working on the P52 fuel break which will put a 2500-acre fuel break into WUI at Heppner Ranger District.",
  floodRoad:
    "I'm an environmental consultant preparing NEPA documents for a county applying for federal funds to rebuild a flood-damaged road in Vermont.",
} as const;

// --- Shared page parts --------------------------------------------------------

/** "ePlan gets you:" in the text header. Product statements only. */
export const guideBenefits = (document: string): string[] => [
  `A first draft of your ${document}, from a project description or the files you already have`,
  "Precedent research: analog projects and their documents, found for you",
  "Every fact ePlan can't confirm, marked for your team to fill in",
  "A Word download, plus tasks and a Gantt timeline on Pro and Max",
];

/** The shared rows of "How ePlan compares"; a page row with the same label replaces one. */
export const MANUAL_COMPARISON_BASE: ManualComparisonRow[] = [
  {
    label: "Starting point",
    eplan:
      "A plain-language project description, or the PDFs, Word files and GIS files (shapefile, GeoJSON, KML, GeoPackage) you already have",
    manual: "A blank template, or last year's document retyped",
  },
  {
    label: "Precedent research",
    eplan:
      "A research agent searches agency project pages, CEQAnet, the Federal Register, eCFR and EPA's EIS database for your project and up to two analog projects",
    manual: "Searching each agency site and PDF library by hand",
  },
  {
    label: "Missing facts",
    eplan:
      "Every fact ePlan can't confirm stays a highlighted [INSERT] placeholder until someone fills it",
    manual: "Gaps surface in review, or not at all",
  },
  {
    label: "Tasks and timeline",
    eplan:
      "Milestones, surveys and deadlines on a Gantt timeline (Pro and Max)",
    manual: "A separate spreadsheet or calendar",
  },
  {
    label: "Hand-off",
    eplan:
      "Download as Word. Teammates share the project on every plan; contractors and partners join on Max",
    manual: "Email attachments and files named final_v3",
  },
  {
    label: "Cost to start",
    eplan: `Scoping letters are free. EAs, EIRs and decision memos are on Max at $${PLANS.max.price_usd} a month`,
    manual: "Staff or consultant hours for every draft",
  },
];

/**
 * A page's comparison: its rows on topics the shared rows don't cover, then
 * the shared rows, each replaced by the page's row with the same label.
 */
export const comparisonRows = (
  own: ManualComparisonRow[] = [],
): ManualComparisonRow[] => {
  const sharedLabels = new Set(MANUAL_COMPARISON_BASE.map((row) => row.label));
  const byLabel = new Map(own.map((row) => [row.label, row]));
  return [
    ...own.filter((row) => !sharedLabels.has(row.label)),
    ...MANUAL_COMPARISON_BASE.map((row) => byLabel.get(row.label) ?? row),
  ];
};

/** Product-level examples (the software and comparison pages). */
export const PRODUCT_EXAMPLES: GuideExample[] = [
  {
    emoji: "🚜",
    label: "Road Repair",
    heading: "Road Repair",
    eyebrow: "PUBLIC LANDS",
    prompt: PROMPTS.roadScoping,
  },
  {
    emoji: "🥾",
    label: "Trail Reconstruction",
    heading: "Trail Work",
    eyebrow: "CATEGORICAL EXCLUSIONS",
    prompt: PROMPTS.trailCe,
  },
  {
    emoji: "🌲",
    label: "Forest Restoration",
    heading: "Forest Restoration",
    eyebrow: "FOREST MANAGEMENT",
    prompt: PROMPTS.vegEa,
  },
  {
    emoji: "🌉",
    label: "Bridge Replacement",
    heading: "a Bridge",
    eyebrow: "TRANSPORTATION",
    prompt: PROMPTS.bridge,
  },
  {
    emoji: "🌊",
    label: "Flood Repair",
    heading: "Flood Repairs",
    eyebrow: "DISASTER RECOVERY",
    prompt: PROMPTS.floodRoad,
  },
];
