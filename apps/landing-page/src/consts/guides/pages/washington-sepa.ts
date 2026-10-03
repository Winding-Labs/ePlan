import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

// /for/washington-sepa. Reused keys: none (no existing source covers Washington).
// Every source below was opened on 2026-10-02. RCW and WAC pages are the
// Legislature's official online code; `published` is the last effective date
// the page or Ecology states for the section, where one is given.

const READ = "2026-10-02";

const RCW = (section: string, heading: string, published?: string): Source => ({
  title: `RCW ${section}: ${heading}`,
  publisher: "Washington State Legislature (app.leg.wa.gov)",
  url: `https://app.leg.wa.gov/RCW/default.aspx?cite=${section}`,
  ...(published ? { published } : {}),
  read: READ,
});

const WAC = (section: string, heading: string, published: string): Source => ({
  title: `WAC ${section}: ${heading}`,
  publisher: "Washington State Legislature (app.leg.wa.gov)",
  url: `https://app.leg.wa.gov/WAC/default.aspx?cite=${section}`,
  published,
  read: READ,
});

const ECOLOGY = "Washington State Department of Ecology";
const SEPA_PAGES =
  "https://ecology.wa.gov/regulations-permits/sepa/environmental-review";

export const sources = {
  sepaRcw4321c: RCW("43.21C", "State Environmental Policy Act (chapter)"),
  sepaRcw031: RCW("43.21C.031", "Significant impacts"),
  sepaRcw033: RCW(
    "43.21C.033",
    "Threshold determination to be made within ninety days after application is complete",
  ),
  sepaRcw229: RCW(
    "43.21C.229",
    "Infill and housing development: categorical exemptions from chapter",
    "2025-07-27",
  ),
  sepaRcw460: RCW(
    "43.21C.460",
    "Environmental checklist: authority of lead agency, limitations of section",
  ),
  sepaRcw503: RCW(
    "43.21C.503",
    "Exempt projects: environmental checklist not required",
  ),
  sepaRcw560: RCW(
    "43.21C.560",
    "Solar energy generation projects exempt from this chapter",
    "2025-07-27",
  ),
  sepaWac19711: {
    title: "Chapter 197-11 WAC: SEPA rules",
    publisher: "Washington State Legislature (app.leg.wa.gov)",
    url: "https://app.leg.wa.gov/WAC/default.aspx?cite=197-11",
    read: READ,
  },
  sepaWac310: WAC(
    "197-11-310",
    "Threshold determination required",
    "2003-09-01",
  ),
  sepaWac315: WAC("197-11-315", "Environmental checklist", "2013-01-28"),
  sepaWac340: WAC(
    "197-11-340",
    "Determination of nonsignificance (DNS)",
    "1997-11-10",
  ),
  sepaWac350: WAC("197-11-350", "Mitigated DNS", "1984-04-04"),
  sepaWac360: WAC(
    "197-11-360",
    "Determination of significance (DS)/initiation of scoping",
    "1984-04-04",
  ),
  sepaWac408: WAC("197-11-408", "Scoping", "1997-11-10"),
  sepaWac455: WAC("197-11-455", "Issuance of DEIS", "1984-04-04"),
  sepaWac460: WAC("197-11-460", "Issuance of FEIS", "1984-04-04"),
  sepaWac508: WAC("197-11-508", "SEPA register", "2014-05-10"),
  sepaWac800: WAC("197-11-800", "Categorical exemptions", "2023-01-20"),
  sepaWac924: WAC("197-11-924", "Determining the lead agency", "1984-04-04"),
  sepaWac932: WAC(
    "197-11-932",
    "Lead agency for private projects requiring licenses from more than one agency, when one of the agencies is a county/city",
    "1984-04-04",
  ),
  sepaWac960: WAC("197-11-960", "Environmental checklist", "2023-01-20"),
  sepaHandbook: {
    title:
      "State Environmental Policy Act (SEPA) Handbook, 2025 Update (Publication 25-06-009)",
    publisher: `${ECOLOGY}, Shorelands and Environmental Assistance Program`,
    url: "https://apps.ecology.wa.gov/publications/documents/2506009.pdf",
    published: "2025-09",
    read: READ,
  },
  sepaEcology: {
    title: "State Environmental Policy Act (SEPA)",
    publisher: ECOLOGY,
    url: SEPA_PAGES,
    read: READ,
  },
  sepaEcyLaws: {
    title: "SEPA laws and regulations: current & historical revisions",
    publisher: ECOLOGY,
    url: `${SEPA_PAGES}/sepa-laws-rules`,
    read: READ,
  },
  sepaChecklistGuide: {
    title: "SEPA checklist guidance",
    publisher: ECOLOGY,
    url: `${SEPA_PAGES}/sepa-guidance/sepa-checklist-guidance`,
    read: READ,
  },
  sepaTemplates: {
    title: "SEPA document templates (forms)",
    publisher: ECOLOGY,
    url: `${SEPA_PAGES}/sepa-document-templates`,
    read: READ,
  },
  sepaRegister: {
    title: "Statewide SEPA register",
    publisher: ECOLOGY,
    url: `${SEPA_PAGES}/sepa-register`,
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/washington-sepa",
  title: "Washington SEPA Checklist, DNS & MDNS Guide",
  description:
    "Washington SEPA step by step: exemptions, the SEPA environmental checklist, DNS, MDNS and DS determinations, and the EIS.",
  eyebrow: "Washington SEPA",
  h1: "Washington SEPA guide: the environmental checklist, threshold determinations and EIS",
  primaryKeyword: "washington sepa",
  secondaryKeywords: [
    "sepa checklist",
    "sepa environmental checklist",
    "sepa dns",
    "threshold determination",
    "mitigated determination of nonsignificance",
  ],
  document: "SEPA Checklist",
  answer:
    "Washington SEPA, the State Environmental Policy Act (chapter 43.21C RCW), requires state and local agencies to consider environmental impacts before deciding on a proposal [[sepaRcw031]]. Unless it is exempt, the lead agency reviews a SEPA environmental checklist and makes a threshold determination: a DNS, a mitigated determination of nonsignificance (MDNS), or a determination of significance (DS) requiring an [EIS](/for/environmental-impact-statement) [[sepaWac310]] [[sepaWac960]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "Chapter 43.21C RCW and Ecology's SEPA rules, chapter 197-11 WAC [[sepaRcw4321c]] [[sepaWac19711]]",
    },
    {
      label: "Prepared by",
      value:
        "The applicant or the lead agency; the lead agency is responsible for the content [[sepaHandbook]]",
    },
    {
      label: "Decided by",
      value: "The lead agency's responsible official [[sepaWac310]]",
    },
    {
      label: "Deadline",
      value:
        "Threshold determination within 90 days of a complete application; the applicant may ask for 30 more [[sepaRcw033]]",
    },
    {
      label: "Where notices go",
      value:
        "Ecology's SEPA Register, for every document with a comment period [[sepaWac508]] [[sepaRegister]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I'm filling out a SEPA checklist for…",
    examples: [
      {
        emoji: "🏘️",
        label: "Infill Housing",
        heading: "SEPA Checklist for Infill Housing",
        eyebrow: "URBAN HOUSING",
        prompt:
          "I'm a land use consultant preparing the SEPA checklist for a 90-unit apartment building on a 3-acre infill lot in the unincorporated urban growth area of Thurston County.",
      },
      {
        emoji: "🛣️",
        label: "Road Widening",
        heading: "SEPA Checklist for Road Widening",
        eyebrow: "CITY STREETS",
        prompt:
          "I'm an engineer with a city public works department in Snohomish County widening a 0.8-mile arterial to add bike lanes, a center turn lane and a stormwater pond.",
      },
      {
        emoji: "🏭",
        label: "Industrial Warehouse",
        heading: "SEPA Checklist for Industrial Warehouse",
        eyebrow: "INDUSTRIAL",
        prompt:
          "I'm a consultant for a developer proposing a 250,000-square-foot warehouse with 180 truck and car stalls on 18 acres of former pasture in Pierce County.",
      },
      {
        emoji: "🗺️",
        label: "Code Update",
        heading: "SEPA Checklist for Zoning Code Update",
        eyebrow: "NONPROJECT ACTION",
        prompt:
          "I'm a long-range planner at a city in Clark County preparing the nonproject SEPA checklist for zoning code amendments that allow taller mixed-use buildings downtown.",
      },
      {
        emoji: "💧",
        label: "Water Reservoir",
        heading: "SEPA Checklist for Water Reservoir",
        eyebrow: "PUBLIC WATER",
        prompt:
          "I'm a project manager at a water district in Kitsap County building a 2-million-gallon steel reservoir and 1,500 feet of transmission main on a forested 2-acre lot.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the SEPA Checklist answers, question by question, from your description and files, for the lead agency to review; every fact it can't confirm is marked for you.",
    mock: {
      project: "90-unit infill apartments",
      documentTitle: "SEPA Checklist",
      summary:
        "I drafted Sections A and B of the SEPA Checklist for the apartment building from your description, following the WAC 197-11-960 questions. Five details still need your input before you submit it to the county.",
      missing: [
        "Lead agency name and county file number",
        "Street address and parcel number",
        "Steepest slope from the topographic survey",
        "Income levels of the 90 units",
        "Traffic and stormwater reports",
      ],
      letterhead: {
        left: ["SEPA Environmental Checklist", "WAC 197-11-960"],
        right: [
          "[INSERT: applicant name and address]",
          "Thurston County, Washington",
        ],
      },
      meta: [
        "Agency file no.: [INSERT: county file number]",
        "Date: October 2, 2026",
      ],
      paragraphs: [
        "A.5 Agency requesting checklist: [INSERT: county lead agency]. A.11 Proposal: construction of a 90-unit apartment building with parking, stormwater facilities and frontage improvements on a 3-acre infill lot in the unincorporated urban growth area.",
        "A.12 Location: [INSERT: street address and parcel number]; a site plan and vicinity map are attached. B.1.b Steepest slope on the site: about [INSERT: percent slope] percent.",
        "B.9.a Housing: 90 units would be provided, at [INSERT: high, middle or low-income levels].",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "Your project description and files, following the checklist form you upload or it finds",
      manual: "Ecology's Word template, answered question by question",
    },
    {
      label: "Precedent research",
      eplan:
        "Researches agency project pages for your project and up to two similar ones",
      manual: "Search the SEPA Register by hand for comparable checklists",
    },
  ],
  sections: [
    {
      heading: "When is a SEPA checklist required?",
      paragraphs: [
        "SEPA applies to agency decisions such as permits for private projects, building public facilities, and adopting regulations, policies and plans [[sepaEcology]]. Agencies use the checklist substantially in the form of WAC 197-11-960 to make the threshold determination [[sepaWac315]]. An applicant whose project is exempt need not file one if other information shows it qualifies [[sepaRcw503]].",
        "The first agency to receive an application for a nonexempt proposal determines the lead agency [[sepaWac924]]. For a private project licensed by several agencies, including a county or city, it is the county or city with the largest share of the site [[sepaWac932]].",
      ],
    },
    {
      heading: "Which projects are exempt from SEPA?",
      paragraphs: [
        "Categorically exempt projects need no threshold determination or EIS. By default, minor new construction covers up to four single-family or four multifamily units, agricultural buildings of 10,000 square feet, and office, school, commercial or storage buildings of 4,000 square feet with 20 parking spaces. Cities and counties may raise these levels by ordinance [[sepaWac800]].",
        "The exemption does not apply on lands covered by water, or where a nonexempt discharge or emission license or land use decision is needed [[sepaWac800]]. Exemptions the Legislature has added since 2023 [[sepaEcyLaws]]:",
      ],
      bullets: [
        "SB 5412: cities and counties may exempt urban-growth-area housing after an environmental analysis of the area [[sepaRcw229]]",
        "HB 1491: housing and mixed use near rail stations and bus rapid transit stops, with exceptions [[sepaRcw229]]",
        "SB 5445: solar over parking lots, on capped landfills or reclaimed mines, and small arrays on disturbed land [[sepaRcw560]]",
      ],
    },
    {
      heading: "Threshold determination: SEPA DNS, MDNS or DS",
      paragraphs: [
        "A DNS means no probable significant adverse impacts [[sepaWac340]]; an MDNS, that the applicant changed or conditioned the proposal to include mitigation the lead agency specified [[sepaWac350]]. A DNS has a 14-day comment period, during which the agency may not act, when another agency has jurisdiction, the proposal includes nonexempt demolition or clearing and grading, it is an MDNS, or it is a GMA action [[sepaWac340]] [[sepaHandbook]].",
        "A DS means the proposal may have a probable significant adverse impact; it starts scoping, with 21 days for comment [[sepaWac360]] [[sepaWac408]]. The draft EIS gets 30 days of comment, the final EIS is generally due 60 days after that, and agencies may not act until seven days after it issues [[sepaWac455]] [[sepaWac460]].",
      ],
    },
    {
      heading: "How to fill out the SEPA environmental checklist",
      paragraphs: [
        'Answer briefly and accurately from your own observations or plans, writing "do not know" or "does not apply" where true, and cover every part of the proposal, including later phases and other parcels [[sepaWac960]]. Ecology\'s guidance says to explain why a question does not apply [[sepaChecklistGuide]]. A lead agency may note questions local rules already cover, but may not delete any [[sepaRcw460]].',
        "Ecology publishes a Word version with help links, plus DNS, MDNS and DS templates; lead agencies may use their own version, so check with the agency reviewing the proposal [[sepaTemplates]].",
      ],
    },
  ],
  outline: {
    heading: "What the SEPA environmental checklist asks",
    intro:
      "The questions in WAC 197-11-960 [[sepaWac960]], each explained in Ecology's checklist guidance [[sepaChecklistGuide]]. SEPA is one of the [state environmental policy acts](/for/state-environmental-review) similar to [NEPA](/for/nepa).",
    items: [
      {
        title: "A. Background (questions 1 to 12)",
        detail:
          "Applicant, timing and phasing, prior environmental information, pending applications, approvals needed, a full description, and the location with maps [[sepaWac960]].",
      },
      {
        title: "B.1 to B.3 Earth, air and water",
        detail:
          "Slopes, soils, grading, erosion and impervious surface; emissions and odors; surface water within 200 feet, floodplain, discharges, groundwater and stormwater [[sepaWac960]].",
      },
      {
        title: "B.4 to B.7 Plants, animals, energy and environmental health",
        detail:
          "Vegetation removed, threatened and endangered species, invasive species; wildlife and migration routes; energy use; contamination, hazardous chemicals, pipelines and noise [[sepaWac960]].",
      },
      {
        title: "B.8 and B.9 Land and shoreline use; housing",
        detail:
          "Current uses, farm and forest land, demolition, zoning, plan and shoreline designations, critical areas, people displaced, and housing units with their income levels [[sepaWac960]].",
      },
      {
        title:
          "B.10 to B.13 Aesthetics, light, recreation and historic resources",
        detail:
          "Tallest structure and views, light and glare, recreation, structures over 45 years old, tribal or historic use, and how cultural resources were assessed [[sepaWac960]].",
      },
      {
        title: "B.14 to B.16 Transportation, public services and utilities",
        detail:
          "Access, transit, new roads, vehicle trips per day with peak volumes, farm and forest product movement, public services and utilities [[sepaWac960]].",
      },
      {
        title: "C. Signature",
        detail:
          "The signer states the answers are true and complete and that the lead agency relies on them to decide [[sepaWac960]].",
      },
      {
        title: "D. Supplemental sheet for nonproject actions",
        detail:
          "Seven general questions for plans, policies and regulations; not used for project actions [[sepaWac960]].",
      },
    ],
  },
  faq: [
    {
      question: "Can I ask the lead agency whether a DS is likely?",
      answer:
        "Yes. Before the threshold determination, an applicant may ask whether a DS is likely and then clarify, change or condition the proposal to mitigate the impacts, which can lead to an MDNS instead.",
    },
    {
      question: "Can an agency deny a project under SEPA?",
      answer:
        "Yes. Agencies can use SEPA to modify or deny a proposal to avoid, reduce or compensate for its probable impacts, based on policies they have formally designated.",
    },
    {
      question: "Is Washington SEPA the same as NEPA?",
      answer:
        "No. SEPA, enacted in 1971 and modeled on NEPA, covers state and local decisions in Washington, with its own terms and procedures. A responsible official can adopt a NEPA environmental assessment in place of a checklist if it meets SEPA's requirements.",
    },
    {
      question: "Does ePlan submit documents to the SEPA Register?",
      answer:
        "No. ePlan drafts SEPA documents, such as checklist answers, from your project description and files, marking every fact it cannot confirm. The lead agency makes the threshold determination and submits its records to the SEPA Register.",
    },
  ],
};
