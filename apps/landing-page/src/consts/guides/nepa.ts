import type { GuidePath } from "./paths";
import { PROMPTS } from "./shared";
import type { GuideEntry } from "./types";

const nepaProcess: GuideEntry<GuidePath> = {
  path: "/nepa",
  name: "NEPA process",
  title: "What Is NEPA? The NEPA Process, Step by Step",
  description:
    "How a NEPA review works after the 2023 amendments and the 2025 removal of CEQ's rules: threshold checks, CE, EA and FONSI, EIS and the record of decision.",
  eyebrow: "NEPA process",
  h1: "What is NEPA? The NEPA process, from the first check to the record of decision",
  family: "nepa",
  primaryKeyword: "what is nepa",
  secondaryKeywords: ["nepa process", "national environmental policy act", "record of decision", "nepa review", "nepa documentation", "nepa compliance"],
  document: "NEPA Documents",
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
        "Energy: 10 CFR part 1021 plus DOE's NEPA Implementing Procedures, last revised July 13, 2026 [[doeProcedures]]",
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
  glance: [
    {
      label: "The law",
      value: "42 U.S.C. 4332 and 4336–4336e [[usc4332]] [[usc4336]]",
    },
    {
      label: "Levels of review",
      value:
        "Categorical exclusion, environmental assessment or environmental impact statement [[usc4336]]",
    },
    {
      label: "Deadlines",
      value: "1 year for an EA, 2 years for an EIS [[usc4336a]]",
    },
    {
      label: "Page limits",
      value:
        "75 pages for an EA; 150 for an EIS, or 300 for extraordinary complexity [[usc4336a]]",
    },
    {
      label: "CEQ's regulations",
      value: "40 CFR parts 1500–1508, removed effective April 11, 2025 [[ceqIfr]]",
    },
  ],
  hero: {
    prefix: "Start a",
    placeholder: "I'm starting the NEPA review for…",
    examples: [
      {
        emoji: "🌉",
        label: "Bridge Replacement",
        heading: "NEPA Review for a Bridge",
        eyebrow: "TRANSPORTATION",
        prompt: PROMPTS.bridge,
      },
      {
        emoji: "🥾",
        label: "Trail Reconstruction",
        heading: "NEPA Review for Trail Work",
        eyebrow: "PUBLIC LANDS",
        prompt: PROMPTS.trailCe,
      },
      {
        emoji: "🐄",
        label: "Grazing Permit",
        heading: "NEPA Review for Grazing",
        eyebrow: "RANGELAND",
        prompt: PROMPTS.grazing,
      },
      {
        emoji: "🌲",
        label: "Forest Restoration",
        heading: "NEPA Review for Thinning",
        eyebrow: "FOREST MANAGEMENT",
        prompt: PROMPTS.vegEa,
      },
      {
        emoji: "🌊",
        label: "Flood Repair",
        heading: "NEPA Review for Flood Repairs",
        eyebrow: "DISASTER RECOVERY",
        prompt: PROMPTS.floodRoad,
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan proposes the review pathway, then drafts the first documents (a scoping letter, CE decision memo or EA) from a reference document, with every unconfirmed fact marked for you.",
    mock: {
      project: "Linn County Bridge Replacement",
      documentTitle: "Bridge Replacement — Level of Review Memo",
      summary:
        "The Bridge Replacement — Level of Review Memo is ready. It recommends a pathway for your team to confirm. A few details still need your input:",
      missing: [
        "Bridge number",
        "Creek name",
        "CE category and citation",
        "Lead agency contact",
      ],
      letterhead: {
        left: [
          "Linn County Public Works",
          "Environmental Services",
          "Federal-aid project [INSERT: project number]",
        ],
        right: [
          "[INSERT: office street address]",
          "Albany, OR 97321",
          "[INSERT: office phone]",
        ],
      },
      meta: ["Date: October 2, 2026"],
      paragraphs: [
        "Proposed action: replace bridge [INSERT: bridge number] over [INSERT: creek name] on its existing alignment, with no new right-of-way.",
        "Recommended level of review: a categorical exclusion under [INSERT: CE category and citation from the lead agency's procedures], subject to the extraordinary-circumstances review below.",
      ],
    },
  },
  comparison: [
    {
      label: "Review pathway",
      eplan:
        "Proposes the pathway (CE, EA or EIS) and the documents your project needs, for your team to confirm",
      manual: "Work it out from each agency's procedures and past projects",
    },
  ],
  faq: [
    {
      question: "What does NEPA compliance involve for a federally funded project?",
      answer:
        "The federal agency completes the level of review its procedures require (a categorical exclusion, an environmental assessment or an environmental impact statement) before it decides on the action. An applicant or consultant often prepares the documents, but the agency evaluates them and stays responsible for them.",
    },
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

const categoricalExclusions: GuideEntry<GuidePath> = {
  path: "/nepa/categorical-exclusion",
  parent: "/nepa",
  name: "Categorical exclusions",
  title: "NEPA Categorical Exclusion Checklist & Examples",
  description:
    "What a NEPA categorical exclusion is, how extraordinary circumstances are checked, what a CE decision memo contains, and CE examples, cited to current law.",
  eyebrow: "Categorical exclusions",
  h1: "NEPA categorical exclusions: checklist, examples and the CE decision memo",
  family: "nepa",
  primaryKeyword: "nepa categorical exclusion",
  secondaryKeywords: ["categorical exclusion examples", "categorical exclusion checklist", "decision memo", "extraordinary circumstances", "23 cfr 771.117"],
  document: "CE Decision Memo",
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
  glance: [
    {
      label: "Definition",
      value:
        "Actions an agency has found normally have no significant effect [[usc4336e]]",
    },
    {
      label: "Where the lists live",
      value: "In each agency's NEPA procedures [[ceqCePage]]",
    },
    {
      label: "Screening",
      value: "An extraordinary circumstances review [[ceqCeGuidance]]",
    },
    {
      label: "Another agency's CE",
      value: "Can be adopted under 42 U.S.C. 4336c [[usc4336c]]",
    },
    {
      label: "Highway and transit CEs",
      value: "23 CFR 771.117 (FHWA and FTA) [[fhwa771117]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I need a categorical exclusion for…",
    examples: [
      {
        emoji: "🥾",
        label: "Trail Reconstruction",
        heading: "CE Decision Memo for Trail Work",
        eyebrow: "PUBLIC LANDS",
        prompt: PROMPTS.trailCe,
      },
      {
        emoji: "🚦",
        label: "Traffic Signals",
        heading: "CE Decision Memo for Signals",
        eyebrow: "HIGHWAY SAFETY",
        prompt: PROMPTS.signalsCe,
      },
      {
        emoji: "☀️",
        label: "Rooftop Solar",
        heading: "CE Decision Memo for Solar",
        eyebrow: "ENERGY",
        prompt: PROMPTS.solarCe,
      },
      {
        emoji: "🔥",
        label: "Fuel Break",
        heading: "CE Decision Memo for a Fuel Break",
        eyebrow: "WILDFIRE",
        prompt: PROMPTS.fuelBreakCe,
      },
      {
        emoji: "💡",
        label: "Campground Lighting",
        heading: "CE Decision Memo for Lighting",
        eyebrow: "NATIONAL PARKS",
        prompt: PROMPTS.campground,
      },
    ],
  },
  draft: {
    description:
      "Describe the action and ePlan finds candidate CE categories, then drafts the decision memo in your agency's format, with every unconfirmed fact marked for you.",
    mock: {
      project: "Blue Mountain Trail Reconstruction",
      documentTitle: "Trail Reconstruction — CE Decision Memo",
      summary:
        "The Trail Reconstruction — CE Decision Memo is ready. It follows the structure of the reference memo. A few details still need your input:",
      missing: [
        "Trail name",
        "CE category and citation",
        "Resource surveys on file",
        "Responsible official",
        "Implementation date",
      ],
      letterhead: {
        left: [
          "United States Department of Agriculture",
          "Forest Service",
          "Malheur National Forest — Blue Mountain Ranger District",
        ],
        right: [
          "[INSERT: district office address]",
          "John Day, OR 97845",
          "[INSERT: office phone]",
        ],
      },
      meta: ["File Code: [INSERT: file code]", "Date: October 2, 2026"],
      paragraphs: [
        "Decision memo: [INSERT: trail name] Trail Reconstruction. I have decided to reconstruct about 3 miles of the existing trail on the Blue Mountain Ranger District, Grant County, Oregon.",
        "This action falls within [INSERT: CE category and citation from the agency's current NEPA procedures]. I find no extraordinary circumstances that would preclude its use.",
      ],
    },
  },
  comparison: [
    {
      label: "Category check",
      eplan:
        "Finds candidate CE categories in the agency's procedures and lists the extraordinary circumstances to screen",
      manual: "Search the procedures and past memos for a category that fits",
    },
  ],
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

const environmentalAssessment: GuideEntry<GuidePath> = {
  path: "/nepa/environmental-assessment",
  parent: "/nepa",
  name: "Environmental assessment",
  title: "NEPA Environmental Assessment (EA) & FONSI Guide",
  description:
    "When an EA is required, the 75-page and one-year limits, what an EA and a FONSI contain, and a section-by-section EA outline, cited to current law.",
  eyebrow: "Environmental assessment",
  h1: "NEPA environmental assessments and the FONSI",
  family: "nepa",
  primaryKeyword: "nepa environmental assessment",
  secondaryKeywords: ["finding of no significant impact", "fonsi", "ea vs eis", "environmental assessment example", "environmental assessment template"],
  document: "Environmental Assessment",
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
    heading: "Environmental assessment template: the sections",
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
  glance: [
    {
      label: "When",
      value:
        "No CE applies, and a significant effect is not reasonably foreseeable or is unknown [[usc4336]]",
    },
    {
      label: "Page limit",
      value: "75 pages, not counting citations and appendices [[usc4336a]]",
    },
    { label: "Deadline", value: "1 year [[usc4336a]]" },
    {
      label: "Ends in",
      value: "A FONSI, or a decision to prepare an EIS [[usc4336]]",
    },
  ],
  hero: {
    prefix: "Draft an",
    placeholder: "I'm preparing an EA for…",
    examples: [
      {
        emoji: "🌲",
        label: "Forest Restoration",
        heading: "EA for Forest Restoration",
        eyebrow: "FOREST MANAGEMENT",
        prompt: PROMPTS.vegEa,
      },
      {
        emoji: "☀️",
        label: "Solar on BLM Land",
        heading: "EA for a Solar Project",
        eyebrow: "RENEWABLE ENERGY",
        prompt: PROMPTS.solarEa,
      },
      {
        emoji: "💧",
        label: "Pipeline Replacement",
        heading: "EA for Pipeline Replacement",
        eyebrow: "WATER INFRASTRUCTURE",
        prompt: PROMPTS.pipelineEa,
      },
      {
        emoji: "🌉",
        label: "Bridge Replacement",
        heading: "EA for Bridge Replacement",
        eyebrow: "TRANSPORTATION",
        prompt: PROMPTS.bridge,
      },
      {
        emoji: "🏕️",
        label: "Campground Expansion",
        heading: "EA for Campground Expansion",
        eyebrow: "RECREATION",
        prompt:
          "I'm a recreation planner at Sawtooth National Forest preparing an EA for expanding a 40-site campground near Stanley, Idaho.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the EA section by section, following a reference EA from a similar project, with every unconfirmed fact marked for you.",
    mock: {
      project: "Jackson Creek Restoration",
      documentTitle: "Jackson Creek — Environmental Assessment",
      summary:
        "The Jackson Creek — Environmental Assessment draft is ready, following the reference EA's sections. A few details still need your input:",
      missing: [
        "Ranger district",
        "Stand exam data",
        "Treatment units and acres",
        "Survey dates",
        "Responsible official",
      ],
      letterhead: {
        left: [
          "United States Department of Agriculture",
          "Forest Service",
          "Rogue River-Siskiyou National Forest",
        ],
        right: [
          "Environmental Assessment",
          "Jackson Creek Vegetation Restoration Project",
          "[INSERT: ranger district], Jackson County, Oregon",
        ],
      },
      meta: ["Date: October 2, 2026"],
      paragraphs: [
        "Purpose and need: the [INSERT: ranger district] proposes to treat about 1,200 acres in the Jackson Creek watershed to reduce hazardous fuels and restore late-successional habitat. [INSERT: existing condition data from stand exams]",
        "Alternatives: Alternative 1 (no action) and Alternative 2 (proposed action) are analyzed in detail. [INSERT: treatment units and acres by prescription]",
      ],
    },
  },
  comparison: [
    {
      label: "Structure",
      eplan: "Follows the sections of a reference EA from a similar project",
      manual: "Copy headings from a past EA and adapt them",
    },
  ],
  faq: [
    {
      question: "Where can I find an environmental assessment example?",
      answer:
        "Agencies post EAs on each project's web page, for example on Forest Service project pages and BLM's ePlanning register. ePlan's research agent finds EAs for projects like yours and drafts from one as the reference.",
    },
    {
      question: "EA vs EIS: what is the difference?",
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

const scopingLetter: GuideEntry<GuidePath> = {
  path: "/nepa/scoping-letter",
  parent: "/nepa",
  name: "Scoping letter",
  title: "NEPA Scoping Letter: Template, Example & Outline",
  description:
    "What a NEPA scoping letter should include, what the law requires for scoping and public comment today, and an outline you can draft from.",
  eyebrow: "Scoping",
  h1: "NEPA scoping letters: what to include",
  family: "nepa",
  primaryKeyword: "scoping letter",
  secondaryKeywords: ["nepa scoping", "scoping letter template", "scoping letter example", "public scoping"],
  document: "Scoping Letter",
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
    heading: "Scoping letter template: what it contains",
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
  glance: [
    {
      label: "Purpose",
      value: "Invite input on issues and alternatives early [[usda1b7]]",
    },
    {
      label: "Required for",
      value:
        "Every notice of intent to prepare an EIS requests public comment [[usc4336a]]",
    },
    {
      label: "For EAs and CEs",
      value: "Optional under USDA's procedures [[usda1b7]]",
    },
    { label: "On ePlan's free plan", value: "Yes, scoping letters are included" },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I need a scoping letter for…",
    examples: [
      {
        emoji: "🚧",
        label: "Guardrail Repair",
        heading: "Scoping Letter for Guardrail Repair",
        eyebrow: "HIGHWAY SAFETY",
        prompt:
          "I'm an environmental planner with the Eldorado National Forest and need a scoping letter for replacing 2 miles of damaged guardrail along a forest highway near Pollock Pines, California.",
      },
      {
        emoji: "🌊",
        label: "Channel Dredging",
        heading: "Scoping Letter for Channel Dredging",
        eyebrow: "WATERWAYS",
        prompt:
          "I'm a NEPA coordinator with a port district and need a scoping letter for maintenance dredging of a 1.5-mile navigation channel that needs a Corps of Engineers permit.",
      },
      {
        emoji: "🔥",
        label: "Forest Thinning",
        heading: "Scoping Letter for Forest Thinning",
        eyebrow: "WILDFIRE",
        prompt: PROMPTS.thinningScoping,
      },
      {
        emoji: "🥾",
        label: "Trail Repair",
        heading: "Scoping Letter for Trail Repair",
        eyebrow: "NATIONAL PARKS",
        prompt: PROMPTS.trailScoping,
      },
      {
        emoji: "🚜",
        label: "Road Repair",
        heading: "Scoping Letter for Road Repair",
        eyebrow: "PUBLIC LANDS",
        prompt: PROMPTS.roadScoping,
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the scoping letter in your agency's letter format, following a reference letter, with every unconfirmed fact marked for you.",
    mock: {
      project: "Pacific Ranger District Guardrail Repair",
      documentTitle: "Guardrail Repair — Scoping Letter",
      summary:
        "The Guardrail Repair — Scoping Letter is ready. It follows the structure and tone of the reference letter. A few details still need your input:",
      missing: [
        "Road name and mileposts",
        "Comment deadline",
        "Project contact",
        "District Ranger name",
      ],
      letterhead: {
        left: [
          "United States Department of Agriculture",
          "Forest Service",
          "Eldorado National Forest — Pacific Ranger District",
        ],
        right: [
          "[INSERT: district office street address]",
          "Pollock Pines, CA 95726",
          "[INSERT: office phone]",
        ],
      },
      meta: ["File Code: [INSERT: file code]", "Date: October 2, 2026"],
      salutation: "Dear Interested Party:",
      paragraphs: [
        "The Pacific Ranger District is proposing to replace about 2 miles of damaged guardrail along [INSERT: road name and mileposts] to restore safe access for forest visitors and residents.",
        "We invite your comments on the proposal and the issues it should address. Please submit written comments by [INSERT: comment deadline] to [INSERT: project contact and email].",
      ],
    },
  },
  comparison: [
    {
      label: "Letter format",
      eplan:
        "Follows the letterhead, structure and tone of a reference scoping letter",
      manual: "Copy an old letter and edit it by hand",
    },
  ],
  faq: [
    {
      question: "Where can I find a scoping letter example?",
      answer:
        "Agencies post scoping letters with each project's documents, for example on Forest Service project pages and the National Park Service's PEPC site. ePlan's research agent finds letters for projects like yours and drafts from one as the reference.",
    },
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
      question: "How long is a public scoping comment period?",
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

export const NEPA_GUIDES = [nepaProcess, categoricalExclusions, environmentalAssessment, scopingLetter];
