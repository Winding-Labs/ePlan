import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

/**
 * /for/ceqa-and-nepa — when CEQA and NEPA both apply.
 *
 * Reuses existing NEPA source keys (guides/sources.ts): usc4332, usc4336,
 * usc4336a, usc4336e, fra2023, sevenCounty, ceqIfr, ceqProcedures.
 *
 * Reuses source keys defined in ceqa.ts (not redefined here): ceqaPrc21002,
 * ceqaPrc21080, ceqaPrc21081, ceqaPrc21100, ceqaGuide15061, ceqaGuide15063,
 * ceqaGuide15082, ceqaGuide15107, ceqaGuide15108, ceqaGuide15141,
 * ceqaGuide15300.
 *
 * CEQA Guidelines sections are cited to Cornell LII's copy of Cal. Code Regs.,
 * tit. 14, because govt.westlaw.com refuses automated reads.
 */

const READ = "2026-10-02";

const PRC = (section: string, heading: string, published?: string): Source => ({
  title: `Cal. Public Resources Code § ${section} - ${heading}`,
  publisher: "California Legislative Information (leginfo.legislature.ca.gov)",
  url: `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=${section}.&lawCode=PRC`,
  ...(published ? { published } : {}),
  read: READ,
});

const CCR = (section: string, heading: string): Source => ({
  title: `CEQA Guidelines, Cal. Code Regs., tit. 14, § ${section} - ${heading}`,
  publisher:
    "Legal Information Institute (Cornell Law School), California Code of Regulations",
  url: `https://www.law.cornell.edu/regulations/california/14-CCR-${section}`,
  read: READ,
});

export const sources = {
  jointPrc21083dot5: PRC(
    "21083.5",
    "Use of an environmental impact statement in place of an EIR",
  ),
  jointPrc21083dot6: PRC("21083.6", "Combined EIR-EIS; waiver of time limits"),
  jointPrc21083dot7: PRC(
    "21083.7",
    "Projects requiring both an EIR and an EIS; consultation with the federal agency",
    "2000-09-11",
  ),
  jointGuide15124: CCR("15124", "Project description"),
  jointGuide15125: CCR("15125", "Environmental setting"),
  jointGuide15220: CCR("15220", "Projects also subject to NEPA: general"),
  jointGuide15221: CCR("15221", "NEPA document ready before CEQA document"),
  jointGuide15222: CCR("15222", "Preparation of joint documents"),
  jointGuide15223: CCR("15223", "Consultation with federal agencies"),
  jointGuide15224: CCR("15224", "Time limits"),
  jointGuide15225: CCR("15225", "Circulation of documents"),
  jointGuide15229: CCR(
    "15229",
    "Baseline analysis for military base reuse plan EIRs",
  ),
  jointCfr771109: {
    title:
      "23 CFR 771.109 - Applicability and responsibilities (FHWA, FRA and FTA environmental procedures)",
    publisher: "Electronic Code of Federal Regulations (eCFR), current",
    url: "https://www.ecfr.gov/current/title-23/chapter-I/subchapter-H/part-771/section-771.109",
    read: READ,
  },
  jointCaltrans327: {
    title: "NEPA Assignment",
    publisher: "California Department of Transportation (Caltrans)",
    url: "https://dot.ca.gov/programs/environmental-analysis/nepa-assignment",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/ceqa-and-nepa",
  title: "CEQA and NEPA: Joint EIR/EIS and Key Differences",
  description:
    "When CEQA and NEPA both apply, how the two reviews differ, which documents match, and how to prepare a joint EIR/EIS.",
  eyebrow: "CEQA and NEPA",
  h1: "CEQA and NEPA: when both apply and how to prepare one joint document",
  primaryKeyword: "ceqa and nepa",
  secondaryKeywords: [
    "nepa vs ceqa",
    "joint EIS/EIR",
    "difference between ceqa and nepa",
    "federal nexus",
  ],
  document: "Joint CEQA/NEPA Document",
  answer:
    "CEQA and [NEPA](/for/nepa) both apply when a California state or local agency acts on a project that a federal agency also carries out, finances or approves [[jointGuide15220]]. The agencies can then work from one document: the federal [EIS](/for/environmental-impact-statement) or FONSI if it will be ready first, or a joint EIR-EIS or negative declaration-FONSI [[jointGuide15221]] [[jointGuide15222]].",
  glance: [
    {
      label: "CEQA basis",
      value:
        "Pub. Resources Code §§ 21083.5-21083.7; Guidelines §§ 15220-15229 [[jointPrc21083dot5]] [[jointPrc21083dot7]] [[jointGuide15220]] [[jointGuide15229]]",
    },
    {
      label: "NEPA basis",
      value:
        "42 U.S.C. 4332 and 4336-4336e, as amended in 2023 [[usc4332]] [[fra2023]]",
    },
    {
      label: "Federal procedures",
      value:
        "Each federal agency's own NEPA procedures; CEQ's NEPA regulations were removed in 2025 [[ceqProcedures]] [[ceqIfr]]",
    },
    {
      label: "Deadlines, NEPA vs CEQA",
      value:
        "EIS 2 years, EA 1 year; private-project [EIR](/for/ceqa-environmental-impact-report) 1 year, negative declaration 180 days [[usc4336a]] [[ceqaGuide15108]] [[ceqaGuide15107]]",
    },
  ],
  hero: {
    prefix: "Start a Joint Review for",
    placeholder: "I'm preparing CEQA and NEPA documents for…",
    examples: [
      {
        emoji: "🛣️",
        label: "Highway Interchange",
        heading: "Highway Interchange",
        eyebrow: "STATE HIGHWAY",
        prompt:
          "I'm an environmental planner at a county transportation authority in San Joaquin County starting a joint EIR/EIS for a new interchange on a state highway, with Caltrans as NEPA lead.",
      },
      {
        emoji: "🚆",
        label: "Rail Station",
        heading: "Commuter Rail Station",
        eyebrow: "PUBLIC TRANSIT",
        prompt:
          "I'm a planner at a regional transit agency in Alameda County preparing a joint CEQA/NEPA document for a new commuter rail station funded with FTA grants.",
      },
      {
        emoji: "🌊",
        label: "Levee Repair",
        heading: "Levee Improvements",
        eyebrow: "FLOOD CONTROL",
        prompt:
          "I'm with a reclamation district in the Sacramento-San Joaquin Delta preparing an IS/MND and EA for strengthening 3 miles of levee that needs a U.S. Army Corps of Engineers permit.",
      },
      {
        emoji: "🥾",
        label: "Regional Trail",
        heading: "Regional Trail",
        eyebrow: "PARKS AND TRAILS",
        prompt:
          "I'm a park district planner in San Bernardino County preparing CEQA and NEPA documents for a 6-mile regional trail that crosses BLM land.",
      },
      {
        emoji: "✈️",
        label: "Runway Extension",
        heading: "Runway Extension",
        eyebrow: "AIRPORT PLANNING",
        prompt:
          "I'm an environmental consultant for a county airport in Kern County preparing an initial study and EA for a 1,000-foot runway extension that needs FAA approval.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the joint notice of preparation and outlines the joint EIR/EIS, naming the CEQA and NEPA leads; every fact it can't confirm is marked for you.",
    mock: {
      project: "Orchard Lane Interchange",
      documentTitle:
        "Orchard Lane Interchange — Notice of Preparation of a Joint EIR/EIS",
      summary:
        "The Orchard Lane Interchange — Notice of Preparation draft is ready, naming the Authority as CEQA lead and Caltrans as NEPA lead. A few details still need your input:",
      missing: [
        "State route and post miles",
        "Scoping meeting date and venue",
        "Responsible and trustee agencies",
        "Federal agencies to notify",
        "Comment contact",
      ],
      letterhead: {
        left: [
          "Delta Valley Transportation Authority",
          "Environmental Planning",
        ],
        right: ["[INSERT: street address]", "Stockton, CA [INSERT: ZIP code]"],
      },
      meta: ["SCH No.: [INSERT: assigned on filing]", "Date: October 2, 2026"],
      salutation:
        "To responsible, trustee and federal agencies and interested parties:",
      paragraphs: [
        "The Delta Valley Transportation Authority, as CEQA lead agency, and Caltrans, as NEPA lead agency under its assignment of FHWA responsibilities, will prepare a joint EIR/EIS for a new interchange at Orchard Lane and State Route [INSERT: route number] in San Joaquin County.",
        "The document will analyze the build alternatives and a no-build alternative, including effects on traffic, air quality, noise, farmland and biological resources. Please send comments on its scope and content within 30 days of receiving this notice.",
        "A joint CEQA/NEPA scoping meeting will be held on [INSERT: date] at [INSERT: venue].",
      ],
    },
  },
  comparison: [
    {
      label: "Precedent research",
      eplan:
        "Searches CEQAnet, the Federal Register and EPA's EIS database for the project and up to two analog projects",
      manual: "Search state and federal databases one at a time",
    },
    {
      label: "Joint EIS/EIR",
      eplan: "Outlines the joint document and researches precedent EISs",
      manual: "Merge a CEQA and a NEPA template by hand",
    },
  ],
  sections: [
    {
      heading: "What creates a federal nexus for a California project?",
      paragraphs: [
        "NEPA covers major federal actions: those an agency finds subject to substantial federal control and responsibility. Non-federal projects with no or minimal federal funding or involvement are excluded [[usc4336e]].",
        "Since 2007, Caltrans has carried out FHWA's NEPA responsibilities for FHWA-funded highway projects in California, under a 23 U.S.C. 327 agreement renewed in 2022 [[jointCaltrans327]]. A state or local applicant that directly receives federal highway or transit funds serves as joint lead agency with the federal administration [[jointCfr771109]].",
      ],
    },
    {
      heading: "What is the difference between CEQA and NEPA?",
      paragraphs: [
        "The biggest difference is what happens after the analysis. CEQA says agencies should not approve a project as proposed if feasible alternatives or mitigation would substantially lessen its significant effects [[ceqaPrc21002]], and requires a finding for each significant effect an EIR identifies [[ceqaPrc21081]]. NEPA is purely procedural: it mandates no particular result, and an agency may decide other values outweigh environmental costs [[sevenCounty]].",
        "The thresholds differ too: NEPA requires an EIS for a reasonably foreseeable significant effect [[usc4336]], CEQA an EIR whenever substantial evidence shows a project may have one [[ceqaPrc21080]]. Page limits line up: 150 pages, or 300 for complex projects, a cap under NEPA and a norm under CEQA [[usc4336a]] [[ceqaGuide15141]].",
      ],
    },
    {
      heading: "Using an EIS, EA or FONSI for CEQA",
      paragraphs: [
        "When an EIS or FONSI will be finished first and meets the [CEQA Guidelines](/for/ceqa), state and local agencies should use it instead of preparing their own [[jointGuide15221]]; for an EIR, the statute says to use the EIS whenever possible [[jointPrc21083dot7]]. NEPA doesn't require separate discussion of mitigation or growth-inducing impacts, so add them first [[jointGuide15221]].",
        "If the federal agency circulated the document as broadly as state law requires, the lead agency need not recirculate it; it gives notice that it will use it [[jointGuide15225]]. The matching documents:",
      ],
      bullets: [
        "Categorical exclusion and categorical exemption: classes of actions without significant effects; the CEQA lead agency decides separately [[usc4336e]] [[ceqaGuide15300]] [[ceqaGuide15061]]",
        "Environmental assessment and initial study: a NEPA EA can meet CEQA's initial study requirement [[ceqaGuide15063]]",
        "FONSI and negative declaration: a FONSI can be used instead of a negative declaration [[jointGuide15221]]",
        "EIS and EIR: all or part of an EIS can replace an EIR if it meets CEQA [[jointPrc21083dot5]]",
      ],
    },
    {
      heading: "Preparing a joint EIS/EIR",
      paragraphs: [
        "If the federal document won't be ready in time, the lead agency should try a combined EIR-EIS or negative declaration-FONSI with the federal agency, consult it as soon as possible and consider a memorandum of understanding [[jointGuide15222]] [[jointGuide15223]]. NEPA lets federal agencies appoint state or local agencies as joint lead agencies [[usc4336a]].",
        "Send the notice of preparation to every federal agency involved. For a project of statewide, regional or areawide significance, a NEPA scoping meeting in its city or county can satisfy CEQA's scoping requirement if CEQA's notice rules are met [[ceqaGuide15082]]. If the joint document will outrun CEQA's time limits but beat two separate documents, the lead agency may waive those limits at the applicant's request [[jointPrc21083dot6]] [[jointGuide15224]].",
      ],
    },
  ],
  outline: {
    heading: "What a joint EIS/EIR covers",
    intro:
      "The topics that let one document serve as NEPA's detailed statement [[usc4332]] and a CEQA EIR [[ceqaPrc21100]]. Follow the lead agencies' own formats for order.",
    items: [
      {
        title: "Purpose and need, and objectives",
        detail:
          "NEPA documents state the purpose and need [[usc4336a]]; a CEQA project description states the objectives, including the underlying purpose [[jointGuide15124]].",
      },
      {
        title: "Proposed action and alternatives",
        detail:
          "A reasonable range of technically and economically feasible alternatives that meet the purpose and need, plus no action [[usc4332]]; CEQA also requires alternatives [[ceqaPrc21100]].",
      },
      {
        title: "Environmental setting",
        detail:
          "Physical conditions near the project, normally CEQA's baseline for judging significance [[jointGuide15125]].",
      },
      {
        title: "Environmental effects",
        detail:
          "Reasonably foreseeable effects under NEPA [[usc4332]]; under CEQA, all significant effects, with brief reasons others are not significant [[ceqaPrc21100]].",
      },
      {
        title: "Unavoidable adverse effects",
        detail: "Required by both laws [[usc4332]] [[ceqaPrc21100]].",
      },
      {
        title: "Irreversible commitments",
        detail:
          "Irreversible and irretrievable commitments of federal resources (NEPA) and irreversible significant effects (CEQA) [[usc4332]] [[ceqaPrc21100]].",
      },
      {
        title: "Short-term uses and long-term productivity",
        detail:
          "A NEPA topic: local short-term uses of the environment against long-term productivity [[usc4332]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "Measures to minimize significant effects, including wasteful energy use [[ceqaPrc21100]], in their own discussion [[jointGuide15221]].",
      },
      {
        title: "Growth-inducing impact",
        detail:
          "A CEQA topic NEPA does not require separately [[jointGuide15221]] [[ceqaPrc21100]].",
      },
    ],
  },
  faq: [
    {
      question: "Who is the lead agency for a joint EIR/EIS?",
      answer:
        "Each law has its own. A state or local agency leads under CEQA and a federal agency under NEPA; for FHWA-funded highway projects in California, Caltrans fills FHWA's NEPA role. NEPA also lets federal agencies appoint state or local agencies as joint lead agencies.",
    },
    {
      question: "Does a NEPA categorical exclusion count as a CEQA exemption?",
      answer:
        "Not automatically. The CEQA Guidelines' provisions on federal documents cover EISs and FONSIs; the CEQA lead agency decides separately whether a statutory or categorical exemption applies.",
    },
    {
      question: "Do CEQ's NEPA regulations still apply to joint documents?",
      answer:
        "No. CEQ removed its NEPA regulations, 40 CFR parts 1500-1508, effective April 11, 2025. The federal side now follows the NEPA statute and the federal agency's own procedures; for FHWA, FRA and FTA, those are in 23 CFR part 771.",
    },
    {
      question: "Can ePlan prepare a joint CEQA/NEPA document?",
      answer:
        "ePlan outlines a joint EIS/EIR and researches precedent EISs and CEQA documents for similar projects; it does not draft a complete EIS. It drafts documents such as scoping letters and EAs, marking every fact it cannot confirm. The lead agencies review and decide.",
    },
  ],
};
