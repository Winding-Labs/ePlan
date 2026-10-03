import type { GuidePath } from "./paths";
import { PROMPTS } from "./shared";
import type { GuideContent } from "./types";

const nepaProcess: GuideContent<GuidePath> = {
  path: "/for/nepa",
  title: "What Is NEPA? The NEPA Process, Step by Step",
  description:
    "How a NEPA review works since CEQ's rules were removed: the threshold check, CE, EA and FONSI, EIS and the record of decision.",
  eyebrow: "NEPA process",
  h1: "What is NEPA? The NEPA process, from the first check to the record of decision",
  primaryKeyword: "what is nepa",
  secondaryKeywords: [
    "nepa process",
    "national environmental policy act",
    "record of decision",
    "nepa review",
    "nepa documentation",
    "nepa compliance",
  ],
  document: "NEPA Documents",
  answer:
    "NEPA, the National Environmental Policy Act, requires federal agencies to report on the environmental effects of, and alternatives to, major actions significantly affecting the environment [[usc4332]]. A NEPA review takes one of three paths: a categorical exclusion; an environmental assessment ending in a finding of no significant impact (FONSI) or an EIS; or an environmental impact statement and record of decision [[usc4336]] [[ceqFlowchart]].",
  sections: [
    {
      heading: "Step 1: does NEPA apply?",
      paragraphs: [
        "An agency needs no environmental document if the action is not a final agency action, is excluded by a categorical exclusion or another law, would clearly and fundamentally conflict with another law, or is nondiscretionary [[usc4336]]. A non-federal project with no or minimal federal funding is not a major federal action [[usc4336e]]; it may still need state review, such as [Massachusetts MEPA](/for/massachusetts-mepa) or [Hawaii HEPA](/for/hawaii-hepa).",
      ],
    },
    {
      heading: "Step 2: choose the level of NEPA review",
      paragraphs: [
        "If a [categorical exclusion](/for/nepa-categorical-exclusion) applies, the agency applies it and documents the decision where its procedures call for that [[ceqFlowchart]]. Otherwise it prepares an [environmental assessment](/for/nepa-environmental-assessment) when a significant effect is not reasonably foreseeable or its significance is unknown, and an [environmental impact statement](/for/environmental-impact-statement) when one is [[usc4336]].",
      ],
    },
    {
      heading: "How long does a NEPA review take?",
      paragraphs: [
        "The one-year EA and two-year EIS clocks run from the earliest of the agency's level-of-review determination, its notice that a right-of-way application is complete, or its notice of intent. The agency may extend a deadline only as long as needed, in consultation with the applicant. Page limits exclude citations and appendices [[usc4336a]].",
        "Since July 4, 2025, a project sponsor may pay 125 percent of the anticipated cost to have an EA completed within 180 days of payment, or an EIS within one year of the notice of intent [[pl11921]].",
      ],
    },
    {
      heading: "Where NEPA procedures live now",
      paragraphs: [
        "With CEQ's regulations removed in 2025 [[ceqIfr]], each agency follows its own [NEPA procedures](/for/nepa-regulations), indexed by CEQ on nepa.gov [[ceqProcedures]]. Recent examples:",
      ],
      bullets: [
        "USDA, including the [Forest Service](/for/usda-forest-service-nepa): 7 CFR part 1b, final rule April 3, 2026 [[usdaFinal]]",
        "[Interior](/for/interior-blm-nepa): 43 CFR part 46 plus a Departmental Handbook, final rule February 24, 2026 [[doiFinal]]",
        "[Energy](/for/doe-nepa): 10 CFR part 1021 plus DOE's NEPA Implementing Procedures, revised July 13, 2026 [[doeProcedures]]",
        "[FHWA](/for/fhwa-nepa), FRA and FTA: 23 CFR part 771, final rule September 1, 2026 [[fhwaFinal]]",
        "[FAA](/for/faa-nepa): Order 1050.1G [[faa1050g]]; [FEMA](/for/fema-ehp): Directive 108-1 [[femaDirective]]; [HUD](/for/hud-environmental-review) grantees: 24 CFR Part 58 [[hudEcfr581]]",
      ],
    },
  ],
  outline: {
    heading: "NEPA documentation, in order",
    intro:
      "The documents a review can produce, following CEQ's January 2026 process chart [[ceqFlowchart]]. Many actions stop at the first or second step. Most reviews start with a [scoping letter](/for/nepa-scoping-letter), and past documents for the same kind of action are in [NEPA examples](/for/nepa-examples). ePlan's [NEPA software](/for/nepa-software) drafts these documents, and [AI tools for NEPA](/for/nepa-ai-tools) compares the alternatives. NEPA is the federal [environmental impact assessment](/for/environmental-impact-assessment) process [[stateCeqList]]; our guides to [environmental permitting](/for/environmental-permitting) and [environmental planning](/for/environmental-planning) cover the permits and planning work around it.",
    items: [
      {
        title: "Proposed action, purpose and need",
        detail:
          "What the agency proposes and why; every environmental document states the purpose and need [[usc4336a]].",
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
        detail:
          "A concise public document setting out the basis for a FONSI or an EIS [[usc4336]].",
      },
      {
        title: "FONSI, or a decision to prepare an EIS",
        detail:
          "A FONSI is the agency's determination that the action does not require an EIS [[usc4336e]].",
      },
      {
        title: "Notice of intent and EIS",
        detail:
          "The notice requests public comment on alternatives, impacts and relevant information [[usc4336a]].",
      },
      {
        title: "Record of decision",
        detail:
          "The agency's decision after an EIS; USDA publishes it at the time of decision [[ceqFlowchart]] [[usda1b8]].",
      },
    ],
  },
  glance: [
    {
      label: "The law",
      value: "42 U.S.C. 4332 and 4336–4336e [[usc4332]] [[usc4336]]",
    },
    {
      label: "Environmental assessment",
      value: "Up to 75 pages, due within 1 year [[usc4336a]]",
    },
    {
      label: "Environmental impact statement",
      value:
        "Up to 150 pages (300 if extraordinarily complex), due within 2 years [[usc4336a]]",
    },
    {
      label: "Who prepares",
      value:
        "The agency, or a project sponsor under its supervision [[usc4336a]]",
    },
  ],
  hero: {
    prefix: "Start a NEPA Review for",
    placeholder: "I'm starting the NEPA review for…",
    examples: [
      {
        emoji: "🌉",
        label: "Bridge Replacement",
        heading: "a Bridge",
        eyebrow: "TRANSPORTATION",
        prompt: PROMPTS.bridge,
      },
      {
        emoji: "🥾",
        label: "Trail Reconstruction",
        heading: "Trail Work",
        eyebrow: "PUBLIC LANDS",
        prompt: PROMPTS.trailCe,
      },
      {
        emoji: "🐄",
        label: "Grazing Permit",
        heading: "Grazing",
        eyebrow: "RANGELAND",
        prompt: PROMPTS.grazing,
      },
      {
        emoji: "🌲",
        label: "Forest Restoration",
        heading: "Thinning",
        eyebrow: "FOREST MANAGEMENT",
        prompt: PROMPTS.vegEa,
      },
      {
        emoji: "🌊",
        label: "Flood Repair",
        heading: "Flood Repairs",
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
      question:
        "What does NEPA compliance involve for a federally funded project?",
      answer:
        "The federal agency completes the level of review its procedures require before it decides on the action. A consultant or applicant can draft the documents, but the agency independently evaluates them and takes responsibility for their contents.",
    },
    {
      question: "What is a record of decision?",
      answer:
        "The agency's public decision document after an environmental impact statement, recording what it decided. Each agency's NEPA procedures set its contents and timing.",
    },
    {
      question: "Do CEQ's NEPA regulations still apply?",
      answer:
        "No. CEQ removed 40 CFR parts 1500-1508 effective April 11, 2025, and made the removal final in January 2026. Each agency's own NEPA procedures now set out how it carries out the statute.",
    },
    {
      question: "Does ePlan make NEPA decisions?",
      answer:
        "No. ePlan drafts documents and shows its sources. Your agency's responsible official reviews them and decides.",
    },
  ],
};

const categoricalExclusions: GuideContent<GuidePath> = {
  path: "/for/nepa-categorical-exclusion",
  title: "NEPA Categorical Exclusion Checklist & Examples",
  description:
    "What a NEPA categorical exclusion covers, how extraordinary circumstances are checked, and what a CE decision memo contains.",
  eyebrow: "Categorical exclusions",
  h1: "NEPA categorical exclusions: checklist, examples and the CE decision memo",
  primaryKeyword: "nepa categorical exclusion",
  secondaryKeywords: [
    "categorical exclusion examples",
    "categorical exclusion checklist",
    "decision memo",
    "extraordinary circumstances",
    "23 cfr 771.117",
  ],
  document: "CE Decision Memo",
  answer:
    "A [NEPA](/for/nepa) categorical exclusion (CE) is a category of actions an agency has found normally have no significant environmental effect [[usc4336e]]. An action that fits one needs no [EA](/for/nepa-environmental-assessment) or EIS [[usc4336]], but the agency screens it for extraordinary circumstances [[ceqCeGuidance]] and, for many categories, signs a short record of that finding, which the Forest Service called a decision memo [[usdaFinal]].",
  sections: [
    {
      heading: "Extraordinary circumstances checklist",
      paragraphs: [
        "Before applying a CE, the agency screens for extraordinary circumstances that may make a normally excluded action likely to have a reasonably foreseeable significant adverse effect. Under CEQ's guidance, one being present bars the CE only if the agency's procedures say so; the agency documents its reasoning, and if the CE does not fit, prepares an EA or EIS [[ceqCeGuidance]].",
        "DOE bars segmenting a proposal into small parts to fit a CE [[doeProcedures]]. USDA's procedures list resources to screen, including [[usda1b3]]:",
      ],
      bullets: [
        "Federally listed threatened or endangered species, designated critical habitat, and species or habitat proposed for listing",
        "Floodplains, wetlands and other sensitive areas",
        "Special sources of water, such as sole-source aquifers and municipal watersheds",
        "Designated areas, such as wilderness, wild and scenic rivers and inventoried roadless areas",
        "Historic, archeological or architectural properties, including those eligible for the National Register",
        "American Indian and Alaska Native religious or cultural sites",
      ],
    },
    {
      heading: "Does every CE need a decision memo?",
      paragraphs: [
        "No. USDA splits its list into CEs that need no NEPA documentation (7 CFR 1b.4(c)) and CEs that do (1b.4(d)) [[usda1b4]]. For the second group, the responsible official signs a finding of applicability and no extraordinary circumstance, or FANEC [[usda1b3]]. Moving the Forest Service's CEs into 7 CFR part 1b did not change which categories need one [[usdaFinal]].",
        "DOE documents every CE determination for actions in appendix B and posts it online, generally within two weeks [[doeProcedures]].",
      ],
    },
    {
      heading: "Categorical exclusion examples",
      paragraphs: [
        "Each carries conditions in its full text; read the whole category before relying on it.",
      ],
      bullets: [
        "Forest Service (USDA-26d-USFS): construction and reconstruction of trails [[usda1b4]]",
        "Forest Service (USDA-35d-USFS): live-tree harvest on up to 70 acres, with at most 1/2 mile of temporary road [[usda1b4]]",
        "Forest Service (USDA-47d-USFS): restoration activities, such as prescribed burning and thinning, on up to 2,800 acres [[usda1b4]]",
        "DOE (B5.16): commercially available solar photovoltaic systems on a building or a previously disturbed or developed area [[doe1021]]",
        "FHWA (23 CFR 771.117(c)(8)): signs, fencing, pavement markings or traffic signals, without substantial land acquisition or traffic disruption [[fhwa771117]]",
      ],
    },
  ],
  outline: {
    heading: "What a CE decision memo contains",
    intro:
      "A checklist built on USDA's minimum elements for a FANEC [[usda1b3]]. Other agencies use other formats; follow yours.",
    items: [
      {
        title: "The proposed action",
        detail:
          "What, where and when: location, acres or miles, and activities, in enough detail to show the category fits.",
      },
      {
        title: "The category used",
        detail:
          "The CE's number and text from your agency's procedures, and whether it was adopted from another agency.",
      },
      {
        title: "Fit with the category's conditions",
        detail:
          "Each condition, such as acreage, road miles or a ban on herbicides, checked against the project [[usda1b4]].",
      },
      {
        title: "Resources considered",
        detail:
          "Each resource on the extraordinary-circumstances list above, and what the screening found.",
      },
      {
        title: "The finding",
        detail:
          "That no extraordinary circumstances exist, as informed by interdisciplinary review.",
      },
      {
        title: "Other laws",
        detail:
          "The records for other laws, such as Endangered Species Act consultation and National Historic Preservation Act section 106 review.",
      },
      {
        title: "Date and signature",
        detail: "Dated and signed by the responsible official.",
      },
    ],
  },
  glance: [
    {
      label: "USDA and Forest Service CEs",
      value: "[7 CFR 1b](/for/usda-forest-service-nepa).4 [[usda1b4]]",
    },
    {
      label: "DOE CEs",
      value: "Appendix B to [10 CFR part 1021](/for/doe-nepa) [[doe1021]]",
    },
    {
      label: "Highway and transit CEs",
      value: "[23 CFR 771.117](/for/fhwa-nepa) (FHWA and FTA) [[fhwa771117]]",
    },
    {
      label: "All agencies' CEs",
      value:
        "Over 2,000 in CEQ's CE Explorer, a reference tool, not an authoritative source [[ceqCeGuidance]] [[ceqCePage]]",
    },
    {
      label: "Another agency's CE",
      value: "Can be adopted under 42 U.S.C. 4336c [[usc4336c]]",
    },
  ],
  hero: {
    prefix: "Draft a CE Decision Memo for",
    placeholder: "I need a categorical exclusion for…",
    examples: [
      {
        emoji: "🥾",
        label: "Trail Reconstruction",
        heading: "Trail Work",
        eyebrow: "PUBLIC LANDS",
        prompt: PROMPTS.trailCe,
      },
      {
        emoji: "🚦",
        label: "Traffic Signals",
        heading: "Signals",
        eyebrow: "HIGHWAY SAFETY",
        prompt: PROMPTS.signalsCe,
      },
      {
        emoji: "☀️",
        label: "Rooftop Solar",
        heading: "Solar",
        eyebrow: "ENERGY",
        prompt: PROMPTS.solarCe,
      },
      {
        emoji: "🔥",
        label: "Fuel Break",
        heading: "a Fuel Break",
        eyebrow: "WILDFIRE",
        prompt: PROMPTS.fuelBreakCe,
      },
      {
        emoji: "💡",
        label: "Campground Lighting",
        heading: "Lighting",
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
      question:
        "Categorical exclusion vs environmental assessment: what is the difference?",
      answer:
        "A CE covers a category the agency has already found normally has no significant effect, so no EA or EIS is written. An EA is a concise analysis the agency prepares when no CE applies and a significant effect is not reasonably foreseeable or its significance is unknown.",
    },
    {
      question: "Can an agency use another agency's categorical exclusion?",
      answer:
        "Yes. NEPA section 109 (42 U.S.C. 4336c) lets an agency adopt another agency's CE after identifying it, consulting the agency that established it, telling the public which CE it plans to use, and documenting the adoption.",
    },
    {
      question: "Do CEQ's regulations still define categorical exclusions?",
      answer:
        "No. CEQ's NEPA regulations (40 CFR parts 1500-1508) were removed effective April 11, 2025. The definition now comes from the statute, 42 U.S.C. 4336e(1), and each agency's procedures list its CEs.",
    },
    {
      question: "Does ePlan decide whether my project qualifies for a CE?",
      answer:
        "No. ePlan drafts the memo and shows the category, conditions and sources it used. The responsible official reviews the record and makes the determination.",
    },
  ],
};

const environmentalAssessment: GuideContent<GuidePath> = {
  path: "/for/nepa-environmental-assessment",
  title: "NEPA Environmental Assessment (EA) & FONSI Guide",
  description:
    "What a NEPA environmental assessment (EA) is, when one is required, its 75-page and one-year limits, and what a FONSI contains.",
  eyebrow: "Environmental assessment",
  h1: "NEPA environmental assessments and the FONSI",
  primaryKeyword: "nepa environmental assessment",
  secondaryKeywords: [
    "finding of no significant impact",
    "fonsi",
    "ea vs eis",
    "environmental assessment example",
    "environmental assessment template",
    "environmental assessment",
    "environmental assessments",
  ],
  document: "Environmental Assessment",
  answer:
    "A [NEPA](/for/nepa) environmental assessment (EA) is a concise public document an agency prepares when no categorical exclusion applies and a significant environmental effect is not reasonably foreseeable, or its significance is unknown. It supports either a finding of no significant impact (FONSI) or a decision to prepare an [environmental impact statement](/for/environmental-impact-statement) [[usc4336]].",
  sections: [
    {
      heading: "EA page limit and one-year deadline",
      paragraphs: [
        "The one-year clock runs from the earliest of the agency's determination that an EA is required, its notice that a right-of-way application is complete, or its notice of intent to prepare the EA [[usc4336a]].",
        "Agency procedures add format rules. USDA, for example, specifies 8.5 by 11 inch pages with 12-point single-spaced text and bars appendices from carrying substantive analysis [[usda1b5]].",
      ],
    },
    {
      heading: "What goes in a FONSI",
      paragraphs: [
        "A finding of no significant impact is the agency's determination that the action does not require an EIS [[usc4336e]]. Under USDA's procedures it incorporates the EA by reference, names any selected alternative, explains why there is no reasonably foreseeable significant impact, states the authority for any mitigation relied on, says when implementation should begin, and is dated and signed. It may be bound with the EA [[usda1b6]].",
      ],
    },
    {
      heading: "Public comment on an EA",
      paragraphs: [
        "USDA treats a Federal Register notice of intent for an EA as the exception and leaves soliciting comment to the responsible official [[usda1b5]]. DOE may publish a notice requesting scoping comments on an EA [[doeProcedures]]. Forest Service projects covered by its objection rules need a legal notice of a 30-day opportunity to comment on a proposal analyzed in an EA [[usfs218]].",
      ],
    },
  ],
  outline: {
    heading: "Environmental assessment template: the sections",
    intro:
      "The minimum elements USDA requires in an EA, in order [[usda1b5]]. Other agencies' procedures differ; use yours. [NEPAssist](/for/nepassist) screens the project area for the affected environment, and [EA examples](/for/nepa-examples) from your agency show its format.",
    items: [
      {
        title: "Purpose and need",
        detail:
          "Generally based on the agency's statutory authority, or on the applicant's goals when the agency is reviewing an application.",
      },
      {
        title: "Proposed action, no action and alternatives",
        detail:
          "No action can stand alone or serve as the effects baseline. Other alternatives are needed when conflicts over resource uses are unresolved.",
      },
      {
        title: "Affected environment and effects",
        detail:
          "The environment that may be affected and the reasonably foreseeable effects, with enough evidence to decide between a FONSI and an EIS.",
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
    ],
  },
  glance: [
    {
      label: "Page limit",
      value: "75 pages, not counting citations and appendices [[usc4336a]]",
    },
    { label: "Deadline", value: "1 year [[usc4336a]]" },
    {
      label: "Public comment",
      value:
        "Set by agency procedures; the statute's comment request covers only an EIS notice of intent [[usc4336a]]",
    },
  ],
  hero: {
    prefix: "Draft an EA for",
    placeholder: "I'm preparing an EA for…",
    examples: [
      {
        emoji: "🌲",
        label: "Forest Restoration",
        heading: "Forest Restoration",
        eyebrow: "FOREST MANAGEMENT",
        prompt: PROMPTS.vegEa,
      },
      {
        emoji: "☀️",
        label: "Solar on BLM Land",
        heading: "a Solar Project",
        eyebrow: "RENEWABLE ENERGY",
        prompt: PROMPTS.solarEa,
      },
      {
        emoji: "💧",
        label: "Pipeline Replacement",
        heading: "Pipeline Replacement",
        eyebrow: "WATER INFRASTRUCTURE",
        prompt: PROMPTS.pipelineEa,
      },
      {
        emoji: "🌉",
        label: "Bridge Replacement",
        heading: "Bridge Replacement",
        eyebrow: "TRANSPORTATION",
        prompt: PROMPTS.bridge,
      },
      {
        emoji: "🏕️",
        label: "Campground Expansion",
        heading: "Campground Expansion",
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
        "Agencies post EAs with each project's documents, for example on Forest Service project pages and BLM's ePlanning register. Pick a recent one from your agency for a similar action and follow its structure.",
    },
    {
      question: "EA vs EIS: what is the difference?",
      answer:
        "An EIS is required when significant effects are reasonably foreseeable; an EA when they are not, or their significance is unknown. An EA runs up to 75 pages and one year; an EIS up to 150 pages (300 if extraordinarily complex) and two years.",
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

const scopingLetter: GuideContent<GuidePath> = {
  path: "/for/nepa-scoping-letter",
  title: "NEPA Scoping Letter: Template, Example & Outline",
  description:
    "What a NEPA scoping letter should include, what the law requires for scoping and comment, and an outline to draft from.",
  eyebrow: "Scoping",
  h1: "NEPA scoping letters: what to include",
  primaryKeyword: "scoping letter",
  secondaryKeywords: [
    "nepa scoping",
    "scoping letter template",
    "scoping letter example",
    "public scoping",
  ],
  document: "Scoping Letter",
  answer:
    "A scoping letter is an early notice that describes a proposed action and invites agencies, Tribes, the applicant and the public to say which issues and alternatives the [NEPA review](/for/nepa) should cover [[usda1b7]]. On scoping, the statute requires only that an [EIS](/for/environmental-impact-statement) notice of intent request public comment [[usc4336a]]; agency procedures set the rest, and USDA's make scoping optional [[usda1b7]].",
  sections: [
    {
      heading: "What is NEPA scoping?",
      paragraphs: [
        "DOE defines scoping as the process, internal or public, to identify the scope of the NEPA review [[doeProcedures]]. Under USDA's procedures, scoping for an EIS identifies the substantive issues and sets aside non-substantive issues and alternatives that are not technically or economically feasible or do not meet the purpose and need [[usda1b7]].",
        "An agency that scopes can invite comment, hold scoping meetings or publish scoping information [[usda1b7]]; DOE says early scoping should be driven by the need to begin the review promptly [[doeProcedures]]. A scoping letter is the written invitation.",
      ],
    },
    {
      heading: "Public scoping for an EA",
      paragraphs: [
        "With CEQ's government-wide rules removed in 2025 [[ceqIfr]], each agency's procedures set the details [[ceqProcedures]]. USDA treats a notice of intent for an EA as the exception, for national, regional or otherwise complex proposals, and leaves public comment to the responsible official [[usda1b5]]. DOE may publish a notice requesting scoping comments on an EA [[doeProcedures]].",
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
      label: "Where the rules are",
      value:
        "Your agency's NEPA procedures, such as USDA's 7 CFR 1b.7 [[usda1b7]]",
    },
    {
      label: "Deadline clock",
      value:
        "[EA](/for/nepa-environmental-assessment) (1 year) and EIS (2 years) clocks can start at the notice of intent [[usc4336a]]",
    },
    {
      label: "Forest Service comment notice",
      value:
        "30 days for an EA, 45 for a draft EIS, where objection rules apply [[usfs218]]",
    },
  ],
  hero: {
    prefix: "Draft a Scoping Letter for",
    placeholder: "I need a scoping letter for…",
    examples: [
      {
        emoji: "🚧",
        label: "Guardrail Repair",
        heading: "Guardrail Repair",
        eyebrow: "HIGHWAY SAFETY",
        prompt:
          "I'm an environmental planner with the Eldorado National Forest and need a scoping letter for replacing 2 miles of damaged guardrail along a forest highway near Pollock Pines, California.",
      },
      {
        emoji: "🌊",
        label: "Channel Dredging",
        heading: "Channel Dredging",
        eyebrow: "WATERWAYS",
        prompt:
          "I'm a NEPA coordinator with a port district and need a scoping letter for maintenance dredging of a 1.5-mile navigation channel that needs a Corps of Engineers permit.",
      },
      {
        emoji: "🔥",
        label: "Forest Thinning",
        heading: "Forest Thinning",
        eyebrow: "WILDFIRE",
        prompt: PROMPTS.thinningScoping,
      },
      {
        emoji: "🥾",
        label: "Trail Repair",
        heading: "Trail Repair",
        eyebrow: "NATIONAL PARKS",
        prompt: PROMPTS.trailScoping,
      },
      {
        emoji: "🚜",
        label: "Road Repair",
        heading: "Road Repair",
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
        "Agencies post scoping letters with each project's documents, for example on Forest Service project pages and the National Park Service's PEPC site. Pick a recent one from your office for a similar project.",
    },
    {
      question: "What should a scoping letter include?",
      answer:
        "The project and its location, purpose and need, proposed action and known alternatives, expected level of review and issues, other permits and agencies, schedule, how and by when to comment, and a contact person.",
    },
    {
      question: "How long is a public scoping comment period?",
      answer:
        "NEPA sets no length for scoping, so each agency sets its own. Forest Service projects covered by 36 CFR part 218 must also give a legal notice of a 30-day comment period for an EA, or 45 days for a draft EIS.",
    },
    {
      question: "Does ePlan send the letter for me?",
      answer:
        "No. ePlan drafts the letter and shows where each detail came from. Your team edits it, and your office decides what goes out and to whom.",
    },
  ],
};

export const NEPA_GUIDES = [
  nepaProcess,
  categoricalExclusions,
  environmentalAssessment,
  scopingLetter,
];
