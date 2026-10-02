import { PLAN_ORDER, PLANS } from "@wildfires-org/turboplan-billing/types";

import type { FaqItem } from "@/components/home-v2/faq";
import type { SlideType } from "@/components/home-v2/feature-showcase/types";
import type { NepaGuidePath } from "@/consts/nepa-guide-links";

/**
 * Content for the NEPA guide pages (/nepa, /categorical-exclusions, ...).
 * One entry per page, rendered by `components/nepa-page/nepa-page.tsx`.
 *
 * Accuracy rules for anyone editing this file (enforced in part by
 * `nepa-pages.test.ts`):
 * - Every legal or factual claim cites a source with `[[sourceKey]]`, and
 *   every source is a page someone actually read, with the date read.
 * - CEQ's NEPA regulations (40 CFR parts 1500-1508) were removed effective
 *   April 11, 2025. Never cite them as current law.
 * - Never say ePlan output is approved, accepted, legally sufficient or
 *   compliant. ePlan drafts; agency officials decide.
 * - Prices come from the billing catalog, never typed by hand.
 */

export type Source = {
  title: string;
  publisher: string;
  url: string;
  /** Publication or effective date: YYYY-MM-DD or YYYY-MM. */
  published?: string;
  /** When the page was read for this content: YYYY-MM-DD. */
  read: string;
};

export type NepaSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type NepaOutlineItem = {
  title: string;
  detail: string;
};

export type NepaComparisonRow = {
  name: string;
  maker: string;
  audience: string;
  does: string;
  nepaDocuments: string;
  availability: string;
};

export type NepaPageEntry = {
  path: NepaGuidePath;
  parent?: NepaGuidePath;
  /** Short name for breadcrumbs and related-page cards. */
  name: string;
  /** <title>, before the brand suffix. */
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  answer: string;
  sections: NepaSection[];
  comparison?: NepaComparisonRow[];
  outline: {
    heading: string;
    intro: string;
    items: NepaOutlineItem[];
  };
  draft: {
    heading: string;
    lead: string;
    /** Prefills the prompt unless the URL carries `projectDescription`. */
    defaultPrompt: string;
    quickStart: Record<string, string>;
  };
  showcase: SlideType[];
  faq: FaqItem[];
};

/** The date every source below was read. Shown on each page. */
export const NEPA_SOURCES_READ_ON = "2026-10-02";

const READ = NEPA_SOURCES_READ_ON;

const USC = (section: string, heading: string): Source => ({
  title: `42 U.S.C. ${section} - ${heading}`,
  publisher: "United States Code, 2023 edition (GovInfo)",
  url: `https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap55-subchapI-sec${section}.htm`,
  read: READ,
});

const ECFR = (citation: string, heading: string, url: string): Source => ({
  title: `${citation} - ${heading}`,
  publisher: "Electronic Code of Federal Regulations (eCFR), current",
  url,
  read: READ,
});

export const SOURCES = {
  usc4332: USC(
    "4332",
    "Cooperation of agencies; reports; availability of information; recommendations; international and national coordination of efforts",
  ),
  usc4336: USC("4336", "Procedure for determination of level of review"),
  usc4336a: USC("4336a", "Timely and unified Federal reviews"),
  usc4336c: USC("4336c", "Adoption of categorical exclusions"),
  usc4336e: USC("4336e", "Definitions"),
  fra2023: {
    title:
      "Fiscal Responsibility Act of 2023, Pub. L. 118-5, section 321 (BUILDER Act)",
    publisher: "GovInfo",
    url: "https://www.govinfo.gov/content/pkg/PLAW-118publ5/html/PLAW-118publ5.htm",
    published: "2023-06-03",
    read: READ,
  },
  pl11921: {
    title:
      "Pub. L. 119-21, section 60026: Project sponsor opt-in fees for environmental reviews (42 U.S.C. 4336f)",
    publisher: "GovInfo",
    url: "https://www.govinfo.gov/content/pkg/PLAW-119publ21/html/PLAW-119publ21.htm",
    published: "2025-07-04",
    read: READ,
  },
  ceqIfr: {
    title:
      "Removal of National Environmental Policy Act Implementing Regulations (interim final rule), 90 FR 10610",
    publisher: "Council on Environmental Quality, Federal Register",
    url: "https://www.federalregister.gov/documents/2025/02/25/2025-03014/removal-of-national-environmental-policy-act-implementing-regulations",
    published: "2025-02-25",
    read: READ,
  },
  ceqFinal: {
    title:
      "Removal of National Environmental Policy Act Implementing Regulations (final rule), 91 FR 618",
    publisher: "Council on Environmental Quality, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/01/08/2026-00178/removal-of-national-environmental-policy-act-implementing-regulations",
    published: "2026-01-08",
    read: READ,
  },
  ceqCeGuidance: {
    title:
      "Establishing, Revising, Adopting, and Applying Categorical Exclusions Under the National Environmental Policy Act (memorandum)",
    publisher: "Council on Environmental Quality",
    url: "https://nepa.gov/sites/default/files/documents/Categorical%20Exclusion%20Guidance%202026.pdf",
    published: "2026-04-09",
    read: READ,
  },
  ceqCePage: {
    title: "Agency Categorical Exclusions",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/agency-nepa-implementation/agency-categorical-exclusions",
    read: READ,
  },
  ceqProcedures: {
    title: "Agency NEPA Procedures and Contacts",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/agency-nepa-implementation/agency-nepa-procedures-and-contacts",
    read: READ,
  },
  ceqFlowchart: {
    title: "The NEPA Process (flowchart)",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/sites/default/files/documents/THE%20NEPA%20PROCESS-Jan2026.pdf",
    published: "2026-01",
    read: READ,
  },
  usda1b3: ECFR(
    "7 CFR 1b.3",
    "Categorical exclusions and findings of applicability and no extraordinary circumstance (USDA)",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.3",
  ),
  usda1b4: ECFR(
    "7 CFR 1b.4",
    "Categorical exclusion of USDA subcomponents and actions",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.4",
  ),
  usda1b5: ECFR(
    "7 CFR 1b.5",
    "Environmental assessments (USDA)",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.5",
  ),
  usda1b6: ECFR(
    "7 CFR 1b.6",
    "Finding of no significant impact (USDA)",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.6",
  ),
  usda1b7: ECFR(
    "7 CFR 1b.7",
    "Environmental impact statements (USDA)",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.7",
  ),
  usda1b8: ECFR(
    "7 CFR 1b.8",
    "Records of decision (USDA)",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.8",
  ),
  usdaFinal: {
    title: "National Environmental Policy Act (USDA final rule), 91 FR 17062",
    publisher: "U.S. Department of Agriculture, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/04/03/2026-06537/national-environmental-policy-act",
    published: "2026-04-03",
    read: READ,
  },
  doiFinal: {
    title:
      "National Environmental Policy Act Implementing Regulations (Interior final rule), 91 FR 8738",
    publisher: "U.S. Department of the Interior, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/02/24/2026-03708/national-environmental-policy-act-implementing-regulations",
    published: "2026-02-24",
    read: READ,
  },
  doi46107: ECFR(
    "43 CFR 46.107",
    "Procedures for applicant-prepared environmental impact statements and environmental assessments (Interior)",
    "https://www.ecfr.gov/current/title-43/subtitle-A/part-46/section-46.107",
  ),
  doeProcedures: {
    title:
      "DOE National Environmental Policy Act (NEPA) Implementing Procedures",
    publisher: "U.S. Department of Energy",
    url: "https://www.energy.gov/sites/default/files/2025-06/2025-06-30-DOE-NEPA-Procedures.pdf",
    published: "2025-06-30",
    read: READ,
  },
  doe1021: ECFR(
    "10 CFR part 1021",
    "National Environmental Policy Act Implementing Procedures (DOE), appendix B to subpart D",
    "https://www.ecfr.gov/current/title-10/chapter-X/part-1021",
  ),
  fhwa771117: ECFR(
    "23 CFR 771.117",
    "FHWA categorical exclusions",
    "https://www.ecfr.gov/current/title-23/chapter-I/subchapter-H/part-771/section-771.117",
  ),
  fhwaFinal: {
    title:
      "National Environmental Policy Act Regulations (FHWA, FRA and FTA final rule), 91 FR 56029",
    publisher: "U.S. Department of Transportation, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/09/01/2026-17904/national-environmental-policy-act-regulations",
    published: "2026-09-01",
    read: READ,
  },
  army651reg: {
    title: "32 CFR 651.19 - Record of environmental consideration (Army)",
    publisher: "eCFR, version in effect on June 1, 2025",
    url: "https://www.ecfr.gov/on/2025-06-01/title-32/section-651.19",
    read: READ,
  },
  army651: {
    title:
      "Environmental Analysis of Army Actions (AR 200-2), interim final rule rescinding 32 CFR part 651, 90 FR 29450",
    publisher: "Department of the Army, Federal Register",
    url: "https://www.federalregister.gov/documents/2025/07/03/2025-12318/environmental-analysis-of-army-actions-ar-200-2",
    published: "2025-07-03",
    read: READ,
  },
  usfs218: ECFR(
    "36 CFR 218.24",
    "Notification of opportunity to comment on proposed projects and activities (Forest Service)",
    "https://www.ecfr.gov/current/title-36/chapter-II/part-218/subpart-B/section-218.24",
  ),
  sevenCounty: {
    title:
      "Seven County Infrastructure Coalition v. Eagle County, No. 23-975 (opinion of the Court)",
    publisher: "Supreme Court of the United States",
    url: "https://www.supremecourt.gov/opinions/24pdf/23-975_m648.pdf",
    published: "2025-05-29",
    read: READ,
  },
  permitai: {
    title: "PermitAI",
    publisher: "Pacific Northwest National Laboratory (PNNL)",
    url: "https://www.pnnl.gov/projects/permitai",
    read: READ,
  },
  permitaiApps: {
    title: "AI Applications (PermitAI)",
    publisher: "Pacific Northwest National Laboratory (PNNL)",
    url: "https://www.pnnl.gov/projects/permitai/ai-applications",
    read: READ,
  },
  nepatec1: {
    title: "PolicyAI/NEPATEC1.0 dataset card",
    publisher: "Hugging Face",
    url: "https://huggingface.co/datasets/PolicyAI/NEPATEC1.0",
    read: READ,
  },
  nepatec2: {
    title:
      "National Environmental Policy Act Text Corpus (NEPATEC2.0) dataset card",
    publisher: "Hugging Face (PNNL)",
    url: "https://huggingface.co/datasets/PNNL/NEPATEC2.0",
    read: READ,
  },
  radial: {
    title: "NEPA AI",
    publisher: "Radial Spatial Ltd.",
    url: "https://www.radialspatial.com/general-9",
    read: READ,
  },
  radialEsri: {
    title: "NEPA AI by Radial Spatial ltd (Esri Partner Solution)",
    publisher: "Esri",
    url: "https://www.esri.com/partners/radial-spatial-ltd-a2TUU0000014HT72AM/nepa-ai-a2dUU000008JcEfYAK",
    read: READ,
  },
  transect: {
    title: "Environmental Risk & Renewable Site Assessment Platform",
    publisher: "Transect",
    url: "https://www.transect.com/",
    read: READ,
  },
  transectNepa: {
    title: "NEPA: Understanding Environmental Impact Assessments",
    publisher: "Transect",
    url: "https://www.transect.com/insights/nepa",
    read: READ,
  },
  permitflow: {
    title: "PermitFlow | Construction Permitting Software",
    publisher: "PermitFlow",
    url: "https://www.permitflow.com/",
    read: READ,
  },
} satisfies Record<string, Source>;

export type SourceKey = keyof typeof SOURCES;

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

const FREE_PLAN_LINE = FREE_PLAN ? ` The ${FREE_PLAN.name} plan is free.` : "";

const PRICING_FAQ: FaqItem = {
  question: "How much does ePlan cost?",
  answer: `${PRICING_SUMMARY} Each workspace shares a monthly credit pool, and extra seats add credits.`,
};

const RESPONSIBLE_OFFICIAL_FAQ: FaqItem = {
  question: "Is an ePlan draft ready to sign?",
  answer:
    "No draft is. ePlan shows the regulation, category and location behind each statement so your team can check them. The responsible official reviews, edits and signs.",
};

// --- Prompts (first-person, like the homepage examples; not real projects) --

const PROMPTS = {
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

// --- Pages -------------------------------------------------------------------

const categoricalExclusions: NepaPageEntry = {
  path: "/categorical-exclusions",
  name: "Categorical exclusions",
  title: "NEPA Categorical Exclusion Checklist & Examples",
  description:
    "What a NEPA categorical exclusion is, how extraordinary circumstances are checked, what a CE decision memo contains, and CE examples, cited to current law.",
  eyebrow: "Categorical exclusions",
  h1: "NEPA categorical exclusions: checklist, examples and the CE decision memo",
  answer:
    "A categorical exclusion (CE) is a category of actions that a federal agency has determined normally does not significantly affect the quality of the human environment [[usc4336e]]. When a proposed action fits one of the agency's CEs, or another agency's CE it has adopted, the agency does not prepare an environmental assessment or environmental impact statement [[usc4336]]. It still screens the action for extraordinary circumstances [[ceqCeGuidance]] and, for many categories, signs a short record of that finding, which the Forest Service's former rules called a decision memo [[usdaFinal]].",
  sections: [
    {
      heading: "What the statute says",
      paragraphs: [
        "The Fiscal Responsibility Act of 2023 wrote categorical exclusions into NEPA itself [[fra2023]]. NEPA now defines a CE [[usc4336e]] and lists it as a reason an agency need not prepare an environmental document: the action is excluded under the agency's own CEs, another agency's CEs adopted under section 109, or another provision of law [[usc4336]].",
        "To adopt another agency's CE, an agency identifies it, consults the agency that established it, tells the public which CE it plans to use, and documents the adoption [[usc4336c]].",
      ],
    },
    {
      heading: "Where the CE lists live after 2025",
      paragraphs: [
        "CEQ's NEPA regulations (40 CFR parts 1500-1508) were removed effective April 11, 2025, by an interim final rule, and CEQ adopted the removal as final on January 8, 2026 [[ceqIfr]] [[ceqFinal]]. Each agency's CEs are in its own NEPA procedures: USDA's, now including the Forest Service's, at 7 CFR 1b.4 [[usda1b4]]; DOE's in appendix B to 10 CFR part 1021 [[doe1021]]; FHWA's at 23 CFR 771.117 [[fhwa771117]].",
        "CEQ's April 9, 2026 guidance counts over 2,000 CEs from over 80 agencies in its Categorical Exclusion Explorer, launched June 5, 2025. CEQ calls the Explorer a reference tool, not an authoritative source: check the establishing agency's published procedures [[ceqCeGuidance]] [[ceqCePage]].",
      ],
    },
    {
      heading: "Extraordinary circumstances",
      paragraphs: [
        "Before applying a CE, the agency evaluates the action for extraordinary circumstances that may indicate a normally excluded action is likely to have a reasonably foreseeable significant adverse effect. Under CEQ's guidance, the mere presence of an extraordinary circumstance does not bar the CE unless the agency's procedures say so; the agency documents its reasoning, and if the CE does not fit, it prepares an EA or EIS [[ceqCeGuidance]].",
        "DOE adds that a proposal may not be segmented, broken into small parts, to fit a CE [[doeProcedures]]. USDA's procedures list resources to screen, including [[usda1b3]]:",
      ],
      bullets: [
        "Federally listed threatened or endangered species, designated critical habitat, and species or habitat proposed for listing",
        "Floodplains, wetlands and other sensitive areas",
        "Special sources of water, such as sole-source aquifers and municipal watersheds",
        "Designated areas, such as wilderness, wild and scenic rivers, inventoried roadless areas and national recreation areas",
        "Historic, archeological or architectural properties, including those eligible for the National Register of Historic Places",
        "American Indian and Alaska Native religious or cultural sites",
      ],
    },
    {
      heading: "Documenting a CE",
      paragraphs: [
        "Not every CE needs a written record. USDA splits its list into CEs that need no NEPA documentation (7 CFR 1b.4(c)) and CEs that do (1b.4(d)) [[usda1b4]]. For the second group, the responsible official signs a finding of applicability and no extraordinary circumstance, or FANEC [[usda1b3]].",
        "When USDA moved the Forest Service's CEs from 36 CFR 220.6 into 7 CFR part 1b, it dropped Forest Service terms such as decision memo; the categories that need documentation did not change [[usdaFinal]]. DOE documents every CE determination for actions in appendix B and posts it online, generally within two weeks [[doeProcedures]]. The Army called its record a record of environmental consideration, or REC [[army651reg]]; that regulation was rescinded on July 3, 2025, and the Army now follows Department of Defense-wide procedures [[army651]].",
      ],
    },
    {
      heading: "Categorical exclusion examples",
      paragraphs: [
        "A few CEs from current agency procedures. Each carries conditions in its full text; read the whole category before relying on it.",
      ],
      bullets: [
        "Forest Service (USDA-26d-USFS): construction and reconstruction of trails [[usda1b4]]",
        "Forest Service (USDA-35d-USFS): harvest of live trees on up to 70 acres, with no more than 1/2 mile of temporary road construction [[usda1b4]]",
        "Forest Service (USDA-47d-USFS): restoration and resilience activities, such as prescribed burning and thinning, on up to 2,800 acres [[usda1b4]]",
        "DOE (B5.16): installing commercially available solar photovoltaic systems on a building or in a previously disturbed or developed area [[doe1021]]",
        "FHWA (23 CFR 771.117(c)(8)): installing fencing, signs, pavement markings, small passenger shelters, traffic signals and railroad warning devices where no substantial land acquisition or traffic disruption will occur [[fhwa771117]]",
      ],
    },
  ],
  outline: {
    heading: "What a CE decision memo contains",
    intro:
      "A checklist to work through, built on USDA's minimum elements for a FANEC [[usda1b3]]. Other agencies use other formats; follow your agency's procedures.",
    items: [
      {
        title: "The proposed action",
        detail:
          "What, where and when: location, acres or miles, and the activities, described well enough to show the category fits.",
      },
      {
        title: "The category used",
        detail:
          "The CE's number and text from your agency's procedures, noting whether it was adopted from another agency.",
      },
      {
        title: "Fit with the category's conditions",
        detail:
          "Each condition in the category, such as acreage, road miles or a ban on herbicides, checked against the project [[usda1b4]].",
      },
      {
        title: "Resources considered",
        detail:
          "The resources screened for extraordinary circumstances: species, wetlands, water sources, designated areas, historic properties and Tribal sites.",
      },
      {
        title: "The finding",
        detail:
          "A statement that no extraordinary circumstances exist, as informed by interdisciplinary review.",
      },
      {
        title: "Other laws",
        detail:
          "References to the records for other laws, such as Endangered Species Act consultation and National Historic Preservation Act section 106 review.",
      },
      {
        title: "Date and signature",
        detail: "Issued, dated and signed by the responsible official.",
      },
    ],
  },
  draft: {
    heading: "Draft your CE decision memo",
    lead: "Describe the project. ePlan compares it with CE categories and past decisions from the same agency, drafts the memo with each citation, and marks the details it still needs from you.",
    defaultPrompt: PROMPTS.trailCe,
    quickStart: {
      "Trail reconstruction CE": PROMPTS.trailCe,
      "Rooftop solar CE (DOE)": PROMPTS.solarCe,
      "Traffic signals CE (DOT)": PROMPTS.signalsCe,
    },
  },
  showcase: ["research", "draft"],
  faq: [
    {
      question: "What is a categorical exclusion under NEPA?",
      answer:
        "A category of actions that a federal agency has determined normally does not significantly affect the quality of the human environment (42 U.S.C. 4336e(1)). If a proposed action fits a CE and no extraordinary circumstance applies, the agency does not prepare an EA or EIS.",
    },
    {
      question: "Does every categorical exclusion need a decision memo?",
      answer:
        "No. It depends on the category and the agency. USDA, for example, lists CEs that need no documentation (7 CFR 1b.4(c)) and CEs that need a signed finding (7 CFR 1b.4(d)). DOE documents its appendix B CE determinations and posts them online.",
    },
    {
      question: "Can an agency use another agency's categorical exclusion?",
      answer:
        "Yes. Since 2023, NEPA section 109 (42 U.S.C. 4336c) lets an agency adopt another agency's CE after identifying it, consulting the agency that established it, telling the public, and documenting the adoption.",
    },
    {
      question: "Do CEQ's regulations still define categorical exclusions?",
      answer:
        "No. CEQ removed all of its NEPA regulations (40 CFR parts 1500-1508) effective April 11, 2025, and finalized the removal on January 8, 2026. The definition now comes from the statute, 42 U.S.C. 4336e(1), and each agency's procedures list its CEs.",
    },
    {
      question: "Does ePlan decide whether my project qualifies for a CE?",
      answer:
        "No. ePlan drafts the memo and shows the category, conditions and sources it used. The responsible official reviews the record and makes the determination.",
    },
  ],
};

const nepaProcess: NepaPageEntry = {
  path: "/nepa",
  name: "NEPA process",
  title: "NEPA Process & Documentation: CE, EA, EIS, ROD",
  description:
    "How a NEPA review works after the 2023 amendments and the 2025 removal of CEQ's rules: threshold checks, CE, EA and FONSI, EIS and the record of decision.",
  eyebrow: "NEPA process",
  h1: "The NEPA process: from the first check to the record of decision",
  answer:
    "NEPA, the National Environmental Policy Act, requires federal agencies to prepare a detailed statement on the reasonably foreseeable environmental effects of, and alternatives to, major federal actions significantly affecting the quality of the human environment [[usc4332]]. A NEPA review takes one of three paths: a categorical exclusion; an environmental assessment that ends in a finding of no significant impact (FONSI) or a decision to prepare an EIS; or an environmental impact statement followed by the agency's decision, such as a record of decision (ROD) [[usc4336]] [[ceqFlowchart]].",
  sections: [
    {
      heading: "Step 1: does NEPA apply?",
      paragraphs: [
        "An agency does not need an environmental document if the action is not a final agency action, is excluded by a categorical exclusion or another law, would clearly and fundamentally conflict with another law, or is nondiscretionary [[usc4336]]. The statute also lists actions that are not major federal actions, such as non-federal projects with no or minimal federal funding [[usc4336e]].",
      ],
    },
    {
      heading: "Step 2: choose the level of review",
      paragraphs: [
        "If a categorical exclusion applies, the agency applies it and documents the decision where its procedures call for that [[ceqFlowchart]]. Otherwise the agency prepares an environmental assessment when the action does not have a reasonably foreseeable significant effect or the significance is unknown, and an environmental impact statement when it does [[usc4336]].",
      ],
    },
    {
      heading: "Page limits and deadlines",
      paragraphs: [
        "Since the Fiscal Responsibility Act of 2023 [[fra2023]], an EA may not exceed 75 pages and an EIS 150 pages, or 300 for an action of extraordinary complexity, not counting citations and appendices. A lead agency has one year to complete an EA and two years for an EIS, measured from the earliest of its level-of-review determination, its notice that a right-of-way application is complete, or its notice of intent. It may extend a deadline only by as much time as needed, in consultation with the applicant [[usc4336a]].",
        "Every environmental document states the purpose and need for the action, and every notice of intent to prepare an EIS asks for public comment on alternatives, impacts and relevant information [[usc4336a]]. Since July 4, 2025, a project sponsor may pay a fee of 125 percent of the anticipated cost to have an EA completed within 180 days of payment, or an EIS within one year of the notice of intent [[pl11921]].",
      ],
    },
    {
      heading: "Where the procedures live after 2025",
      paragraphs: [
        "CEQ removed its NEPA regulations, 40 CFR parts 1500-1508, effective April 11, 2025, and adopted the removal as final on January 8, 2026 [[ceqIfr]] [[ceqFinal]]. Agencies now follow their own NEPA procedures, which CEQ indexes on nepa.gov [[ceqProcedures]]. For example:",
      ],
      bullets: [
        "USDA, including the Forest Service: 7 CFR part 1b, final rule April 3, 2026 [[usdaFinal]]",
        "Interior: 43 CFR part 46 plus a Departmental Handbook, final rule February 24, 2026 [[doiFinal]]",
        "Energy: 10 CFR part 1021 plus DOE's NEPA Implementing Procedures of June 30, 2025 [[doeProcedures]]",
        "FHWA, FRA and FTA: 23 CFR part 771, final rule September 1, 2026 [[fhwaFinal]]",
      ],
    },
    {
      heading: "What the courts say",
      paragraphs: [
        "In Seven County Infrastructure Coalition v. Eagle County, decided May 29, 2025, the Supreme Court called NEPA a purely procedural statute that does not mandate particular results, and told courts to give agencies substantial deference on their NEPA determinations [[sevenCounty]].",
      ],
    },
    {
      heading: "The record of decision",
      paragraphs: [
        "After an EIS, the agency records its decision. USDA, for example, has the lead agency prepare and publish a record of decision at the time of its decision [[usda1b8]]. Interior lets applicants and their contractors help prepare an EA or EIS under supervision, but not decision documents such as a record of decision [[doi46107]].",
      ],
    },
  ],
  outline: {
    heading: "NEPA documentation, in order",
    intro:
      "The documents a review can produce, following CEQ's January 2026 process chart [[ceqFlowchart]]. Many actions stop at the first or second step.",
    items: [
      {
        title: "Proposed action, purpose and need",
        detail:
          "What the agency proposes and why. Every environmental document includes a statement of purpose and need [[usc4336a]].",
      },
      {
        title: "Threshold check",
        detail: "Whether NEPA applies at all [[usc4336]].",
      },
      {
        title: "Categorical exclusion record",
        detail:
          "The category used and the extraordinary-circumstances review, signed when the category requires it [[ceqCeGuidance]].",
      },
      {
        title: "Environmental assessment",
        detail: "Up to 75 pages, due within one year [[usc4336a]].",
      },
      {
        title: "FONSI, or a decision to prepare an EIS",
        detail:
          "A FONSI is the agency's determination that the action does not require an EIS [[usc4336e]].",
      },
      {
        title: "Notice of intent and EIS",
        detail:
          "The notice asks for public comment; the EIS runs up to 150 pages (300 if extraordinarily complex) and is due within two years [[usc4336a]].",
      },
      {
        title: "Record of decision",
        detail: "The agency's decision after an EIS [[ceqFlowchart]].",
      },
    ],
  },
  draft: {
    heading: "Start your NEPA documentation",
    lead: "Describe the project and ePlan drafts the first document it needs, a scoping letter, CE decision memo or EA, with every citation shown.",
    defaultPrompt: PROMPTS.bridge,
    quickStart: {
      "Bridge replacement (FHWA)": PROMPTS.bridge,
      "Grazing permit renewal (BLM)": PROMPTS.grazing,
      "Campground lighting (NPS)": PROMPTS.campground,
    },
  },
  showcase: ["research", "draft", "plan", "collab"],
  faq: [
    {
      question: "What are the steps of the NEPA process?",
      answer:
        "Check whether NEPA applies, then pick the level of review: a categorical exclusion; an environmental assessment that ends in a FONSI or a decision to prepare an EIS; or an environmental impact statement followed by the agency's decision, such as a record of decision.",
    },
    {
      question: "How long can a NEPA review take?",
      answer:
        "By statute, a lead agency has one year to complete an EA and two years for an EIS, with extensions only as long as needed and in consultation with the applicant (42 U.S.C. 4336a(g)).",
    },
    {
      question: "Do CEQ's NEPA regulations still apply?",
      answer:
        "No. CEQ removed 40 CFR parts 1500-1508 effective April 11, 2025, and finalized the removal on January 8, 2026. Each agency's own NEPA procedures now set out how it carries out the statute.",
    },
    {
      question: "What is a record of decision?",
      answer:
        "The agency's public decision document after an environmental impact statement. Agency procedures set its contents; USDA, for example, requires the lead agency to prepare and publish one at the time of its decision.",
    },
    {
      question: "Does ePlan make NEPA decisions?",
      answer:
        "No. ePlan drafts documents and shows its sources. Your agency's responsible official reviews them and decides.",
    },
  ],
};

const environmentalAssessment: NepaPageEntry = {
  path: "/nepa/environmental-assessment",
  parent: "/nepa",
  name: "Environmental assessment",
  title: "NEPA Environmental Assessment (EA) & FONSI Guide",
  description:
    "When an EA is required, the 75-page and one-year limits, what an EA and a FONSI contain, and a section-by-section EA outline, cited to current law.",
  eyebrow: "Environmental assessment",
  h1: "NEPA environmental assessments and the FONSI",
  answer:
    "An environmental assessment (EA) is a concise public document an agency prepares when a proposed action does not have a reasonably foreseeable significant effect on the environment, or the significance is unknown, and no categorical exclusion applies. It sets out the basis for a finding of no significant impact (FONSI) or a decision that an environmental impact statement is needed [[usc4336]]. An EA may not exceed 75 pages, not counting citations and appendices, and is due within one year [[usc4336a]].",
  sections: [
    {
      heading: "When an EA is required",
      paragraphs: [
        "NEPA calls for an EA when an action that needs an environmental document does not have a reasonably foreseeable significant effect, or its significance is unknown, unless a categorical exclusion or another law applies. If significant effects are reasonably foreseeable, the agency prepares an EIS instead [[usc4336]].",
      ],
    },
    {
      heading: "The 75-page limit and the one-year deadline",
      paragraphs: [
        "The 75-page cap excludes citations and appendices. The one-year clock runs from the earliest of three dates: the agency's determination that an EA is required, its notice to the applicant that a right-of-way application is complete, or its notice of intent to prepare the EA [[usc4336a]].",
        "Agency procedures add detail. USDA, for example, specifies 8.5 by 11 inch pages with 12-point single-spaced text, bars appendices from carrying substantive analysis, and has the responsible official certify the page limit and deadline in the EA [[usda1b5]].",
      ],
    },
    {
      heading: "The FONSI",
      paragraphs: [
        "A finding of no significant impact is the agency's determination that the action does not require an EIS [[usc4336e]]. Under USDA's procedures the FONSI incorporates the EA by reference, names the selected alternative if alternatives were analyzed, explains why there is no reasonably foreseeable significant impact, states the authority for any mitigation relied on, says when implementation is expected to begin, and is dated and signed. It may be bound into the same document as the EA [[usda1b6]].",
      ],
    },
    {
      heading: "Public involvement",
      paragraphs: [
        "Requirements differ by agency. USDA treats a Federal Register notice of intent for an EA as the exception and leaves soliciting public comment to the responsible official [[usda1b5]]. DOE may publish a notice requesting scoping comments on an EA [[doeProcedures]]. Forest Service projects covered by its objection rules still need a legal notice of a 30-day opportunity to comment on a proposal analyzed in an EA [[usfs218]].",
      ],
    },
    {
      heading: "Who prepares it",
      paragraphs: [
        "A project sponsor may prepare an EA under the lead agency's supervision; the agency independently evaluates the document and takes responsibility for its contents [[usc4336a]]. Interior requires the same independent evaluation and bars applicants and their contractors from preparing decision documents [[doi46107]].",
      ],
    },
  ],
  outline: {
    heading: "EA template: the sections",
    intro:
      "The minimum elements USDA requires in an EA and its FONSI, in order [[usda1b5]] [[usda1b6]]. Other agencies' procedures differ; use yours.",
    items: [
      {
        title: "Purpose and need",
        detail:
          "Generally based on the agency's statutory authority, or on the applicant's goals when the agency is reviewing an application.",
      },
      {
        title: "Proposed action, no action and alternatives",
        detail:
          "No action can be a stand-alone alternative or the baseline inside the effects analysis. Other alternatives are needed when there are unresolved conflicts over uses of resources.",
      },
      {
        title: "Affected environment and effects",
        detail:
          "A brief description of the environment that may be affected and the reasonably foreseeable effects, with enough evidence to decide between a FONSI and an EIS.",
      },
      {
        title: "Agencies and persons consulted",
        detail: "A short list.",
      },
      {
        title: "Other environmental reviews",
        detail:
          "Determinations under other laws, such as the Endangered Species Act, the National Historic Preservation Act and the Clean Water Act.",
      },
      {
        title: "Certification and identification number",
        detail:
          "The responsible official's page-limit and deadline certification, and the EA's unique identification number.",
      },
      {
        title: "FONSI",
        detail:
          "Why there is no significant impact, the selected alternative, any mitigation and its authority, the expected start date, and the official's signature.",
      },
    ],
  },
  draft: {
    heading: "Draft your EA",
    lead: "Describe the project and ePlan outlines the EA, drafts each section with its citations, and marks the details your team still has to supply.",
    defaultPrompt: PROMPTS.vegEa,
    quickStart: {
      "Vegetation restoration EA (USFS)": PROMPTS.vegEa,
      "Solar project EA (BLM)": PROMPTS.solarEa,
      "Irrigation pipeline EA": PROMPTS.pipelineEa,
    },
  },
  showcase: ["draft", "research", "plan"],
  faq: [
    {
      question: "What is the difference between an EA and an EIS?",
      answer:
        "An EA is the shorter review for actions without a reasonably foreseeable significant effect, or whose significance is unknown; it ends in a FONSI or a decision to prepare an EIS. An EIS is required when significant effects are reasonably foreseeable. By statute an EA is capped at 75 pages and one year, an EIS at 150 pages (300 if extraordinarily complex) and two years.",
    },
    {
      question: "What is a FONSI?",
      answer:
        "A finding of no significant impact: the agency's determination, based on the EA, that the action does not require an environmental impact statement (42 U.S.C. 4336e(7)).",
    },
    {
      question: "Does an EA need a public comment period?",
      answer:
        "It depends on the agency. NEPA's comment requirement covers the notice of intent for an EIS; the statute sets none for an EA. USDA leaves EA comment to the responsible official, while Forest Service projects covered by 36 CFR part 218 still need a legal notice of a 30-day comment opportunity.",
    },
    {
      question: "Can a consultant or applicant write the EA?",
      answer:
        "Yes, under the lead agency's supervision. The agency must independently evaluate the EA and takes responsibility for its contents (42 U.S.C. 4336a(f)).",
    },
    {
      question: "Who signs off on an EA drafted in ePlan?",
      answer:
        "Your agency. ePlan drafts the EA and cites the sources it used; your team reviews it against your agency's procedures, and the responsible official signs the FONSI or decides to prepare an EIS.",
    },
  ],
};

const scopingLetter: NepaPageEntry = {
  path: "/nepa/scoping-letter",
  parent: "/nepa",
  name: "Scoping letter",
  title: "NEPA Scoping Letter: What to Include + Outline",
  description:
    "What a NEPA scoping letter should include, what the law requires for scoping and public comment today, and an outline you can draft from.",
  eyebrow: "Scoping",
  h1: "NEPA scoping letters: what to include",
  answer:
    "A scoping letter is an early notice that describes a proposed action and invites agencies, Tribes, the applicant and the public to say which issues and alternatives the NEPA review should cover [[usda1b7]]. Agency procedures, not the statute, define scoping: NEPA requires every notice of intent to prepare an EIS to request public comment [[usc4336a]], while USDA's procedures make scoping optional, with no prescribed process [[usda1b7]].",
  sections: [
    {
      heading: "What scoping is for",
      paragraphs: [
        "DOE defines scoping as the process, internal or public, to identify the scope of the NEPA review [[doeProcedures]]. Under USDA's procedures, scoping for an EIS identifies the substantive issues and sets aside non-substantive issues and alternatives that are not technically or economically feasible or do not meet the purpose and need [[usda1b7]].",
        "If an agency chooses to scope, USDA's procedures let it invite affected federal, state, Tribal and local agencies, the applicant and interested people; hold scoping meetings; or publish scoping information [[usda1b7]]. A scoping letter is the written form of that invitation.",
      ],
    },
    {
      heading: "What the law requires",
      paragraphs: [
        "NEPA requires each notice of intent to prepare an EIS to request public comment on alternatives or impacts and on relevant information, studies or analyses [[usc4336a]]. CEQ's government-wide NEPA regulations, which used to set scoping rules for every agency, were removed in 2025 [[ceqIfr]], so the details now come from each agency's procedures [[ceqProcedures]].",
      ],
    },
    {
      heading: "Scoping for EAs and CEs",
      paragraphs: [
        "USDA treats a notice of intent for an EA as the exception, for national, regional or otherwise complex proposals, and leaves public comment to the responsible official [[usda1b5]]. DOE may publish a notice requesting scoping comments on an EA [[doeProcedures]]. Separately, Forest Service projects covered by its objection rules need a legal notice of the opportunity to comment: 30 days for an EA and 45 days for a draft EIS [[usfs218]].",
      ],
    },
    {
      heading: "Timing",
      paragraphs: [
        "Deadlines can start at the notice of intent. An EIS is due within two years and an EA within one, counted from the earliest of the agency's level-of-review determination, a complete right-of-way application, or the notice of intent [[usc4336a]]. DOE's procedures say early scoping should be driven by the need to begin the review promptly and should avoid steps that do not demonstrably improve efficiency [[doeProcedures]].",
      ],
    },
  ],
  outline: {
    heading: "What a scoping letter contains",
    intro:
      "Built from the notice-of-intent contents in USDA's and DOE's procedures [[usda1b7]] [[doeProcedures]]. Adapt it to your agency's template.",
    items: [
      {
        title: "Project, location and lead office",
        detail:
          "The project name, a map or description of the location, the lead agency and office, and the responsible official.",
      },
      {
        title: "Purpose and need",
        detail: "Why the agency is acting.",
      },
      {
        title: "Proposed action and known alternatives",
        detail:
          "What would happen, where and how much: acres, miles, structures and timing.",
      },
      {
        title: "Expected review and issues",
        detail:
          "Whether the agency expects a CE, an EA or an EIS, and the effects it expects to analyze.",
      },
      {
        title: "Permits and other agencies",
        detail:
          "Other authorizations the project needs, and any cooperating or participating agencies.",
      },
      {
        title: "Schedule",
        detail: "The timeline for the decision.",
      },
      {
        title: "How to comment",
        detail:
          "Where to send comments, the deadline, and the input that helps most: alternatives, effects, and relevant information or studies.",
      },
      {
        title: "Contact",
        detail: "A person who can answer questions about the proposal.",
      },
    ],
  },
  draft: {
    heading: "Draft your scoping letter",
    lead: "Describe the project and ePlan drafts the letter with the location, purpose and need and comment instructions filled in, and marks the details it still needs, such as the comment deadline.",
    defaultPrompt: PROMPTS.thinningScoping,
    quickStart: {
      "Thinning project (USFS)": PROMPTS.thinningScoping,
      "Trail repair (NPS)": PROMPTS.trailScoping,
      "Forest road repair (USFS)": PROMPTS.roadScoping,
    },
  },
  showcase: ["draft", "research"],
  faq: [
    {
      question: "Is scoping required under NEPA?",
      answer:
        "The statute requires a request for public comment in every notice of intent to prepare an EIS. Beyond that, scoping is set by agency procedures; USDA's, for example, make it optional with no prescribed process.",
    },
    {
      question: "What should a scoping letter include?",
      answer:
        "The project and its location, the purpose and need, the proposed action and known alternatives, the expected level of review and issues, other permits and agencies involved, the schedule, how and by when to comment, and a contact person.",
    },
    {
      question: "How long is a scoping comment period?",
      answer:
        "NEPA sets no length for scoping, so agencies set their own. Separately, Forest Service projects covered by 36 CFR part 218 must offer a 30-day comment period for an EA (45 days for a draft EIS) through a legal notice.",
    },
    {
      question: "Does ePlan send the letter for me?",
      answer:
        "No. ePlan drafts the letter and shows where each detail came from. Your team edits it, and your office decides what goes out and to whom.",
    },
  ],
};

const nepaSoftware: NepaPageEntry = {
  path: "/nepa-software",
  name: "NEPA software",
  title: "NEPA Software: AI Drafting for Environmental Review",
  description:
    "ePlan drafts scoping letters, CE decision memos and EAs that cite the regulation and project location they come from. People review and decide.",
  eyebrow: "NEPA software",
  h1: "NEPA software that drafts the document and shows its sources",
  answer:
    "ePlan is NEPA software for agency staff and environmental consultants. Describe a project and it drafts the scoping letter, categorical exclusion decision memo or environmental assessment, citing the regulation and the project location each draft was built from. Research, tasks, maps and comments sit in the same workspace. Your team reviews, edits and signs; ePlan does not make NEPA determinations.",
  sections: [
    {
      heading: "What NEPA software has to keep up with",
      paragraphs: [
        "The rules moved twice in three years. The Fiscal Responsibility Act of 2023 added page limits, deadlines and CE adoption to the statute [[fra2023]] [[usc4336a]] [[usc4336c]]. CEQ then removed its government-wide regulations, effective April 11, 2025 [[ceqIfr]] [[ceqFinal]], and agencies issued their own procedures through 2026 [[usdaFinal]] [[doiFinal]] [[fhwaFinal]]. A tool that still cites 40 CFR parts 1500-1508 as current law, after they were removed, misleads the people relying on it.",
      ],
    },
    {
      heading: "What ePlan does",
      paragraphs: ["One workspace per project:"],
      bullets: [
        "Research: reads your uploads, finds candidate categorical exclusions, and references past decisions and documents, each with its citation.",
        "Drafting: scoping letters, CE decision memos and EAs, with the location, purpose and citations filled in and the details it still needs marked.",
        "Planning: a Gantt of milestones and tasks, from botany surveys to GIS boundaries.",
        "Collaboration: members, comments and an activity timeline; partners can submit project applications to your agency, and public projects get a comment page.",
      ],
    },
    {
      heading: "Where AI stops",
      paragraphs: [
        "NEPA keeps responsibility with the agency. When a project sponsor prepares an EA or EIS, the lead agency must independently evaluate it and take responsibility for its contents [[usc4336a]], and Interior bars applicants and contractors from preparing decision documents such as a record of decision [[doi46107]]. ePlan works the same way: it drafts, and people decide.",
      ],
    },
    {
      heading: "Looking for EIS software?",
      paragraphs: [
        "ePlan drafts scoping letters, CE decision memos and EAs. On projects headed for an EIS, teams use it for the scoping letter, precedent research and the task plan. By statute an EIS is capped at 150 pages, or 300 for extraordinary complexity, and two years [[usc4336a]].",
      ],
    },
  ],
  outline: {
    heading: "What to check in any NEPA software",
    intro: "Questions worth asking before you pilot a tool, ePlan included.",
    items: [
      {
        title: "Current law",
        detail:
          "Does it cite the amended statute and your agency's procedures, not CEQ's removed regulations?",
      },
      {
        title: "Sources you can check",
        detail:
          "Can you see the regulation, CE number or data source behind each statement?",
      },
      {
        title: "Your agency's categories",
        detail:
          "Does it work from your agency's CE list and documentation rules?",
      },
      {
        title: "Page limits and deadlines",
        detail:
          "Does it help you stay within 75 pages for an EA and 150 for an EIS [[usc4336a]]?",
      },
      {
        title: "People decide",
        detail:
          "Does the workflow leave review and signature with the responsible official?",
      },
      {
        title: "The project record",
        detail: "Are tasks, comments and documents kept together?",
      },
      {
        title: "Price",
        detail: "What does a seat cost, and what is included?",
      },
    ],
  },
  draft: {
    heading: "Try it on your project",
    lead: `Describe a real project. ePlan drafts the first document and shows every source.${FREE_PLAN_LINE}`,
    defaultPrompt: PROMPTS.floodRoad,
    quickStart: {
      "Road rebuild (consultant)": PROMPTS.floodRoad,
      "Fuel break CE (USFS)": PROMPTS.fuelBreakCe,
      "Vegetation EA (USFS)": PROMPTS.vegEa,
    },
  },
  showcase: ["research", "draft", "plan", "collab"],
  faq: [
    {
      question: "What is NEPA software?",
      answer:
        "Software that helps agencies and consultants prepare NEPA reviews: finding the right categorical exclusion, drafting scoping letters, CE records and EAs, tracking the work, and keeping the project record together.",
    },
    {
      question: "Is ePlan AI permitting software?",
      answer:
        "ePlan focuses on NEPA environmental review: it drafts scoping letters, CE decision memos and EAs and tracks the work around them. It does not issue permits; agencies do.",
    },
    {
      question: "Who is ePlan for?",
      answer:
        "Federal agency staff, and the consultants and applicants who prepare NEPA documents with them.",
    },
    PRICING_FAQ,
    RESPONSIBLE_OFFICIAL_FAQ,
  ],
};

const compareAiTools: NepaPageEntry = {
  path: "/compare/nepa-ai-tools",
  name: "AI tools for NEPA",
  title: "AI Tools for NEPA Review Compared (2026)",
  description:
    "PNNL's PermitAI, NEPATEC, Radial Spatial, Transect, PermitFlow and ePlan compared from their own public pages: who each is for and what it does.",
  eyebrow: "Compare",
  h1: "AI tools for NEPA review, compared",
  answer:
    "Few AI tools aim at NEPA itself. PNNL's PermitAI, funded by DOE, offers NEPA search, comment and drafting tools to agencies, several in beta for federal users [[permitai]] [[permitaiApps]]. NEPATEC is PNNL's open dataset of NEPA documents [[nepatec2]]. Radial Spatial's NEPA AI predicts likely NEPA pathways from a project's location [[radial]]. Transect screens sites for energy developers [[transect]], and PermitFlow is an AI platform for construction permitting, not NEPA [[permitflow]]. ePlan drafts scoping letters, CE decision memos and EAs.",
  comparison: [
    {
      name: "PermitAI",
      maker: "Pacific Northwest National Laboratory, funded by DOE",
      audience: "Local, state and federal agencies [[permitai]]",
      does: "A data platform and AI tools for environmental review: SearchNEPA (search and questions over NEPA documents), CommentNEPA (public comment processing), WriteNEPA (drafting help for EIS and EA content) and PermitCE (guided CE evaluations) [[permitaiApps]]",
      nepaDocuments:
        "Works with EISs, EAs and CEs, including past reviews [[permitai]]",
      availability:
        "SearchNEPA and CommentNEPA are in beta for federal government users; no public price found [[permitaiApps]]",
    },
    {
      name: "NEPATEC",
      maker: "Pacific Northwest National Laboratory",
      audience: "Anyone building or studying NEPA tools; it is a dataset",
      does: "Version 2.0 holds more than 120,000 documents from 60,000 projects prepared by more than 60 agencies [[nepatec2]]",
      nepaDocuments: "CE, EA and EIS documents [[nepatec2]]",
      availability:
        "Free, released under a CC0 public domain dedication [[nepatec2]]",
    },
    {
      name: "NEPA AI",
      maker: "Radial Spatial Ltd.",
      audience: "NEPA professionals [[radial]]",
      does: "Predicts the likely level of NEPA review, mitigation and permitting costs from a project's location, using geospatial data and past CATEX, EA and EIS documents [[radial]] [[radialEsri]]",
      nepaDocuments:
        "Predicts the review pathway; drafting documents is not described on the pages we read",
      availability:
        "The vendor's page describes it in future tense and links to a web app; no public price found [[radial]]",
    },
    {
      name: "Transect",
      maker: "Transect",
      audience:
        "Solar, storage, wind, data center, EPC, utility, environmental consulting and midstream teams [[transect]]",
      does: "Site assessment with expert-curated environmental, permitting and community sentiment data, including site-specific, NEPA-focused data, regulations and permits [[transect]] [[transectNepa]]",
      nepaDocuments:
        "Drafting NEPA documents is not described on the pages we read",
      availability:
        "Demo and a free mini-report on request; no public price found [[transect]]",
    },
    {
      name: "PermitFlow",
      maker: "PermitFlow",
      audience:
        "Home services and commercial contractors, home builders, developers and architects [[permitflow]]",
      does: "An AI pre-construction platform for construction permitting [[permitflow]]",
      nepaDocuments:
        "None described; it targets building and construction permits",
      availability: "Demo on request; no public price found [[permitflow]]",
    },
    {
      name: "ePlan",
      maker: "ePlan.ai",
      audience: "Agency NEPA staff, consultants and applicants",
      does: "Drafts NEPA documents that cite the regulation and project location they were built from, in a project workspace with research, tasks, maps and comments",
      nepaDocuments: "Scoping letters, CE decision memos and EAs",
      availability: PRICING_SUMMARY,
    },
  ],
  sections: [
    {
      heading: "How we compared",
      paragraphs: [
        "We read each tool's own public pages and list only what those pages state, with links. Where a page gives no price, we say so rather than guess. Products change; check the vendor's page before you decide.",
      ],
    },
    {
      heading: "PermitAI and NEPATEC",
      paragraphs: [
        "PNNL describes PermitAI as a combined one-stop data platform and suite of AI tools to streamline reviews for critical federal infrastructure, funded by DOE's Office of Policy and Office of Critical Minerals and Energy Innovation [[permitai]]. Its applications page says SearchNEPA launched in late 2024 and is in beta testing with more than 500 users across federal agencies [[permitaiApps]].",
        "NEPATEC, the NEPA text corpus behind it, is open. Version 1.0 was published under the PolicyAI name and held 28,212 documents from 2,917 projects [[nepatec1]]; version 2.0 covers CE, EA and EIS documents from more than 60 agencies [[nepatec2]].",
      ],
    },
    {
      heading: "Radial Spatial NEPA AI",
      paragraphs: [
        "Radial Spatial, a service-disabled veteran-owned small business, describes NEPA AI as a geospatial AI platform that cross-references past CATEX, EA and EIS documents from the same watershed to predict NEPA pathways, mitigation requirements and permitting costs [[radial]]. Esri lists it as a partner solution [[radialEsri]].",
      ],
    },
    {
      heading: "Transect and PermitFlow",
      paragraphs: [
        "Transect helps developers identify and assess project sites [[transect]], and its NEPA article says the platform gives site-specific, NEPA-focused data, regulations and permits for a project [[transectNepa]]. PermitFlow calls itself an AI pre-construction platform for construction and trades [[permitflow]]; we found no NEPA documents described on its site.",
      ],
    },
    {
      heading: "ePlan",
      paragraphs: [
        "ePlan drafts the documents themselves: scoping letters, CE decision memos and EAs, each citing the regulation and project location it was built from, inside a project workspace with research, tasks, maps and comments. Your team reviews and signs.",
      ],
    },
  ],
  outline: {
    heading: "Questions to ask any NEPA AI tool",
    intro: "Use these on every tool above, ePlan included.",
    items: [
      {
        title: "Which documents does it produce?",
        detail:
          "Search results and summaries, or a draft CE record, EA or scoping letter you can edit?",
      },
      {
        title: "Who can use it today?",
        detail: "Federal beta users only, or anyone who signs up?",
      },
      {
        title: "Can you check its sources?",
        detail:
          "Does each statement link to the regulation, record or data it came from?",
      },
      {
        title: "Is it current?",
        detail:
          "Does it follow the 2023 amendments and your agency's procedures rather than CEQ's removed regulations?",
      },
      {
        title: "Where does your data go?",
        detail: "Who can see your uploads and drafts?",
      },
      {
        title: "What does it cost?",
        detail: "Per seat, per project, or a contract?",
      },
    ],
  },
  draft: {
    heading: "Compare it on your own project",
    lead: "Describe a project and see what ePlan drafts, with its sources.",
    defaultPrompt: PROMPTS.fuelBreakCe,
    quickStart: {
      "Fuel break CE (USFS)": PROMPTS.fuelBreakCe,
      "Bridge replacement (FHWA)": PROMPTS.bridge,
      "Thinning scoping letter": PROMPTS.thinningScoping,
    },
  },
  showcase: ["research", "draft"],
  faq: [
    {
      question: "What is PermitAI?",
      answer:
        "A PNNL platform of AI tools for federal environmental review, funded by DOE's Office of Policy and Office of Critical Minerals and Energy Innovation. Its SearchNEPA and CommentNEPA tools are in beta for federal government users.",
    },
    {
      question: "What is NEPATEC?",
      answer:
        "PNNL's open NEPA text corpus. Version 2.0 contains more than 120,000 documents from 60,000 projects prepared by more than 60 agencies, released under a CC0 public domain dedication.",
    },
    {
      question: "Is PermitFlow a NEPA tool?",
      answer:
        "Its public site describes construction permitting for contractors, home builders, developers and architects; we found no NEPA documents described there.",
    },
    {
      question: "How is ePlan different?",
      answer:
        "ePlan drafts the NEPA documents themselves (scoping letters, CE decision memos and EAs) with their citations, in a project workspace your team and partners share.",
    },
    PRICING_FAQ,
  ],
};

export const NEPA_PAGES: NepaPageEntry[] = [
  nepaProcess,
  categoricalExclusions,
  environmentalAssessment,
  scopingLetter,
  nepaSoftware,
  compareAiTools,
];

export const getNepaPage = (path: NepaGuidePath): NepaPageEntry => {
  const page = NEPA_PAGES.find((entry) => entry.path === path);
  if (!page) {
    throw new Error(`No NEPA guide content for ${path}`);
  }
  return page;
};
