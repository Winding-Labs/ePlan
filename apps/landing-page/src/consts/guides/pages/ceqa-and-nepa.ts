import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

/**
 * /for/ceqa-and-nepa — when CEQA and NEPA both apply.
 *
 * Reuses existing NEPA source keys (guides/sources.ts): usc4332, usc4336,
 * usc4336a, usc4336e, fra2023, sevenCounty, ceqIfr, ceqFinal, ceqProcedures.
 *
 * Reuses source keys defined in ceqa.ts (not redefined here): ceqaPrc21002,
 * ceqaPrc21002dot1, ceqaPrc21080, ceqaPrc21081, ceqaPrc21100,
 * ceqaPrc21151dot5, ceqaGuide15061, ceqaGuide15063, ceqaGuide15082,
 * ceqaGuide15107, ceqaGuide15108, ceqaGuide15141, ceqaGuide15300, ceqaSch.
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
  jointGuide15110: CCR("15110", "Projects with federal involvement"),
  jointGuide15124: CCR("15124", "Project description"),
  jointGuide15125: CCR("15125", "Environmental setting"),
  jointGuide15220: CCR("15220", "Projects also subject to NEPA: general"),
  jointGuide15221: CCR("15221", "NEPA document ready before CEQA document"),
  jointGuide15222: CCR("15222", "Preparation of joint documents"),
  jointGuide15223: CCR("15223", "Consultation with federal agencies"),
  jointGuide15224: CCR("15224", "Time limits"),
  jointGuide15225: CCR("15225", "Circulation of documents"),
  jointGuide15226: CCR("15226", "Joint activities"),
  jointGuide15228: CCR("15228", "Where federal agency will not cooperate"),
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

export const entry: GuideEntry<GuidePath> = {
  path: "/for/ceqa-and-nepa",
  parent: "/for/ceqa",
  family: "ceqa",
  name: "CEQA and NEPA",
  title: "CEQA and NEPA: Joint EIR/EIS and Key Differences",
  description:
    "When CEQA and NEPA both apply, how they differ, which documents match, and how to prepare a joint EIS/EIR in California, cited to current law.",
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
    "CEQA and NEPA both apply when a California state or local agency acts on a project that a federal agency also carries out, finances or approves [[jointGuide15220]]. NEPA is a purely procedural statute that does not mandate particular results [[sevenCounty]], while CEQA directs agencies to avoid or mitigate significant effects whenever feasible [[ceqaPrc21002dot1]]. When both apply, the CEQA lead agency should use the federal EIS or FONSI if it will be ready first, or else prepare a joint EIR-EIS or negative declaration-FONSI with the federal agency [[jointGuide15221]] [[jointGuide15222]].",
  glance: [
    {
      label: "CEQA basis",
      value:
        "Pub. Resources Code §§ 21083.5-21083.7 [[jointPrc21083dot5]] [[jointPrc21083dot7]]",
    },
    {
      label: "CEQA Guidelines",
      value:
        "Article 14, 14 CCR §§ 15220-15229 [[jointGuide15220]] [[jointGuide15229]]",
    },
    {
      label: "NEPA basis",
      value:
        "42 U.S.C. 4332 and 4336-4336e, as amended in 2023 [[usc4332]] [[fra2023]]",
    },
    {
      label: "Applies when",
      value:
        "A federal agency carries out, finances or approves a project a state or local agency also acts on [[jointGuide15220]]",
    },
    { label: "NEPA deadlines", value: "EIS 2 years, EA 1 year [[usc4336a]]" },
    {
      label: "CEQA deadlines",
      value:
        "EIR 1 year, negative declaration 180 days, for private projects [[ceqaGuide15108]] [[ceqaGuide15107]]",
    },
  ],
  hero: {
    prefix: "Start a",
    placeholder: "I'm preparing CEQA and NEPA documents for…",
    examples: [
      {
        emoji: "🛣️",
        label: "Highway Interchange",
        heading: "Joint Review for Highway Interchange",
        eyebrow: "STATE HIGHWAY",
        prompt:
          "I'm an environmental planner at a county transportation authority in San Joaquin County starting a joint EIR/EIS for a new interchange on a state highway, with Caltrans as NEPA lead.",
      },
      {
        emoji: "🚆",
        label: "Rail Station",
        heading: "Joint Review for Commuter Rail Station",
        eyebrow: "PUBLIC TRANSIT",
        prompt:
          "I'm a planner at a regional transit agency in Alameda County preparing a joint CEQA/NEPA document for a new commuter rail station funded with FTA grants.",
      },
      {
        emoji: "🌊",
        label: "Levee Repair",
        heading: "Joint Review for Levee Improvements",
        eyebrow: "FLOOD CONTROL",
        prompt:
          "I'm with a reclamation district in the Sacramento-San Joaquin Delta preparing an IS/MND and EA for strengthening 3 miles of levee that needs a U.S. Army Corps of Engineers permit.",
      },
      {
        emoji: "🥾",
        label: "Regional Trail",
        heading: "Joint Review for Regional Trail",
        eyebrow: "PARKS AND TRAILS",
        prompt:
          "I'm a park district planner in San Bernardino County preparing CEQA and NEPA documents for a 6-mile regional trail that crosses BLM land.",
      },
      {
        emoji: "✈️",
        label: "Runway Extension",
        heading: "Joint Review for Runway Extension",
        eyebrow: "AIRPORT PLANNING",
        prompt:
          "I'm an environmental consultant for a county airport in Kern County preparing an initial study and EA for a 1,000-foot runway extension that needs FAA approval.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the joint CEQA/NEPA document from a reference document's structure, with both laws' requirements side by side; every fact it can't confirm is marked for you.",
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
      label: "Research",
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
        "The CEQA Guidelines' joint-review article covers projects that involve both a state or local agency and a federal agency; NEPA applies to projects that federal agencies carry out, finance or approve in whole or in part [[jointGuide15220]]. Under NEPA, a major federal action is one the agency determines is subject to substantial federal control and responsibility, and the term excludes non-federal projects with no or minimal federal funding or involvement [[usc4336e]].",
        "Transportation is the common case. Since 2007, Caltrans has carried out FHWA's NEPA responsibilities for FHWA-funded highway projects in California, approving EAs and EISs under a 23 U.S.C. 327 agreement renewed for 10 years on May 27, 2022 [[jointCaltrans327]]. Under DOT's procedures, a state or local applicant that directly receives federal highway or transit funds for the action serves as a joint lead agency with the federal administration [[jointCfr771109]].",
      ],
    },
    {
      heading: "NEPA vs CEQA: the main differences",
      paragraphs: [
        "The biggest difference is what each law requires after the analysis. CEQA declares that agencies should not approve projects as proposed if feasible alternatives or mitigation measures would substantially lessen significant effects [[ceqaPrc21002]]. Before approving a project whose EIR identifies significant effects, an agency must find, for each effect, that it is mitigated, is another agency's responsibility, or cannot feasibly be mitigated, and in that last case that the project's benefits outweigh it [[ceqaPrc21081]].",
        "NEPA works differently. In Seven County Infrastructure Coalition v. Eagle County (2025), the Supreme Court called NEPA purely procedural: it does not mandate particular results, an agency may decide that other values outweigh environmental costs, and courts should give substantial deference to an agency's choices about the scope and detail of an EIS [[sevenCounty]].",
        "The thresholds differ too. NEPA requires an EIS for an action with a reasonably foreseeable significant effect [[usc4336]]; CEQA requires an EIR whenever substantial evidence shows a project may have a significant effect [[ceqaPrc21080]]. NEPA caps an EIS at 150 pages, or 300 for extraordinary complexity [[usc4336a]], while CEQA says draft EIR text should normally be under 150 pages, or 300 for unusual scope [[ceqaGuide15141]].",
      ],
    },
    {
      heading: "Matching documents: CE, EA, FONSI and EIS",
      paragraphs: [
        "Each NEPA level of review has a CEQA counterpart, and the Guidelines let agencies use some federal documents directly [[jointGuide15221]]:",
      ],
      bullets: [
        "Categorical exclusion and categorical exemption: both are classes of actions found not to have significant effects [[usc4336e]] [[ceqaGuide15300]]. The CEQA lead agency still decides whether a CEQA exemption applies [[ceqaGuide15061]].",
        "Environmental assessment and initial study: a NEPA EA can meet CEQA's initial study requirement [[ceqaGuide15063]].",
        "FONSI and negative declaration: a FONSI can be used instead of a negative declaration [[jointGuide15221]].",
        "EIS and EIR: all or part of an EIS can be submitted in place of an EIR if it meets CEQA's requirements [[jointPrc21083dot5]].",
      ],
    },
    {
      heading: "Using a NEPA document for CEQA (Guidelines § 15221)",
      paragraphs: [
        "When an EIS or FONSI will be finished before the EIR or negative declaration would be, and it meets the CEQA Guidelines, state and local agencies should use it rather than prepare their own [[jointGuide15221]]. For EIRs the statute says more: whenever possible the lead agency shall use the EIS as the EIR, consult the federal agency and tell it about any scoping meeting [[jointPrc21083dot7]].",
        "NEPA does not require separate discussion of mitigation measures or growth-inducing impacts, so those must be added before an EIS can serve as an EIR [[jointGuide15221]]. If the federal agency circulated the document as broadly as state law requires, with equivalent notice, the lead agency need not recirculate it; it gives notice that it will use the federal document and believes it meets CEQA's requirements [[jointGuide15225]].",
        "If the federal agency will not cooperate, a local agency should try to involve a state agency in preparing the CEQA document [[jointGuide15228]], since NEPA lets a state agency with statewide jurisdiction prepare an EIS for a federal grant program under federal guidance and independent evaluation [[usc4332]].",
      ],
    },
    {
      heading: "Preparing a joint EIS/EIR",
      paragraphs: [
        "If the federal document will not be ready when the lead agency needs its own, the Guidelines tell it to try a combined EIR-EIS or negative declaration-FONSI, involve the federal agency in preparing it, and consider a memorandum of understanding [[jointGuide15222]]. Agencies should cooperate on joint planning, research, hearings and documents [[jointGuide15226]], and the lead agency consults the federal agency as soon as possible [[jointGuide15223]].",
        "NEPA makes room for this. Federal agencies may appoint state or local agencies as joint lead agencies, and a lead agency may designate a state or local agency with jurisdiction or special expertise as a cooperating agency. When more than one federal agency must act, the lead and cooperating agencies evaluate the proposal in a single environmental document to the extent practicable [[usc4336a]].",
        "On the CEQA side, the notice of preparation goes to every federal agency involved in approving or funding the project, and for projects of statewide, regional or areawide significance a NEPA scoping meeting in the project's city or county satisfies CEQA's scoping meeting requirement if CEQA's notice rules are met [[ceqaGuide15082]]. LCI's State Clearinghouse also coordinates the review of NEPA documents in California [[ceqaSch]].",
      ],
    },
    {
      heading: "Timelines after the Fiscal Responsibility Act of 2023",
      paragraphs: [
        "The Fiscal Responsibility Act of 2023 added deadlines to NEPA [[fra2023]]: two years for an EIS and one year for an EA, counted from the earliest of the level-of-review determination, notice that a right-of-way application is complete, or the notice of intent. The lead agency may extend a deadline, in consultation with the applicant, only as long as needed, and a project sponsor may petition a court over a missed deadline [[usc4336a]].",
        "CEQA's clocks for a private project run from acceptance of a complete application: one year to certify an EIR and 180 days for a negative declaration, and lead agency procedures may allow one extension of up to 90 days with the applicant's consent [[ceqaGuide15108]] [[ceqaGuide15107]] [[ceqaPrc21151dot5]].",
        "When a combined EIR-EIS or negative declaration-FONSI will take longer than CEQA allows but less time than two separate documents, the lead agency may waive CEQA's time limits at the applicant's request [[jointPrc21083dot6]] [[jointGuide15110]] [[jointGuide15224]].",
      ],
    },
    {
      heading: "Joint documents after CEQ's NEPA rules were removed",
      paragraphs: [
        "The reference notes in the Guidelines' joint-review article still cite CEQ's NEPA regulations, 40 CFR parts 1500-1508 (including § 1506.2), which CEQ removed effective April 11, 2025, and finalized removing on January 8, 2026 [[jointGuide15220]] [[jointGuide15226]] [[ceqIfr]] [[ceqFinal]]. The federal half of a joint document now follows the NEPA statute and the federal agency's own procedures, which CEQ indexes on nepa.gov [[ceqProcedures]]; for FHWA, FRA and FTA those are in 23 CFR part 771 [[jointCfr771109]].",
        "The article itself also covers military base reuse plans, letting a lead agency measure significance against conditions when the federal closure decision became final [[jointGuide15229]].",
      ],
    },
  ],
  outline: {
    heading: "What a joint EIS/EIR covers",
    intro:
      "The topics a joint document carries so it works under both laws: NEPA's detailed statement [[usc4332]] and CEQA's EIR contents [[ceqaPrc21100]], with mitigation and growth-inducing impacts discussed separately because NEPA does not require that [[jointGuide15221]]. Follow the lead agencies' own formats for order.",
    items: [
      {
        title: "Purpose and need, and objectives",
        detail:
          "Every NEPA environmental document states the purpose and need [[usc4336a]]; a CEQA project description states the objectives, including the underlying purpose [[jointGuide15124]].",
      },
      {
        title: "Proposed action and alternatives",
        detail:
          "A reasonable range of technically and economically feasible alternatives that meet the purpose and need, including no action [[usc4332]]; CEQA also requires alternatives [[ceqaPrc21100]].",
      },
      {
        title: "Environmental setting",
        detail:
          "The physical conditions near the project, which normally form CEQA's baseline for judging significance [[jointGuide15125]].",
      },
      {
        title: "Environmental effects",
        detail:
          "Reasonably foreseeable effects under NEPA [[usc4332]]; all significant effects under CEQA, with brief reasons why other effects are not significant [[ceqaPrc21100]].",
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
          "NEPA's detailed statement covers the relationship between local short-term uses of the environment and long-term productivity [[usc4332]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "Measures to minimize significant effects, including measures to reduce wasteful energy use [[ceqaPrc21100]], in their own discussion [[jointGuide15221]].",
      },
      {
        title: "Growth-inducing impact",
        detail:
          "A CEQA topic NEPA does not require separately; add it before an EIS serves as an EIR [[jointGuide15221]] [[ceqaPrc21100]].",
      },
    ],
  },
  faq: [
    {
      question: "What is the difference between CEQA and NEPA?",
      answer:
        "NEPA governs federal agencies and is procedural: it requires analysis and disclosure but not particular results. CEQA governs California state and local agencies and adds a substantive duty: an agency should not approve a project as proposed if feasible alternatives or mitigation would substantially lessen its significant effects, and it must make findings for each significant effect identified in an EIR.",
    },
    {
      question: "Can an EIS be used as an EIR?",
      answer:
        "Yes. California law tells the lead agency to use the EIS as the EIR whenever possible, as long as it meets CEQA's requirements. Mitigation measures and growth-inducing impacts must be added if the EIS does not discuss them separately.",
    },
    {
      question: "Does a NEPA categorical exclusion count as a CEQA exemption?",
      answer:
        "Not automatically. The CEQA Guidelines' provisions on federal documents cover EISs and FONSIs; the CEQA lead agency decides separately whether a statutory or categorical exemption applies under CEQA.",
    },
    {
      question: "Who is the lead agency for a joint EIR/EIS?",
      answer:
        "Each law has its own. A state or local agency leads under CEQA, and the federal agency leads under NEPA; for FHWA-funded highway projects in California, Caltrans carries out FHWA's NEPA role under NEPA assignment. NEPA also lets federal agencies appoint state or local agencies as joint lead agencies.",
    },
    {
      question: "Do CEQ's NEPA regulations still govern joint documents?",
      answer:
        "No. CEQ removed its NEPA regulations, 40 CFR parts 1500-1508, effective April 11, 2025, and finalized the removal on January 8, 2026. The federal side now follows the NEPA statute and the federal agency's own procedures.",
    },
    {
      question: "Can ePlan prepare a joint CEQA/NEPA document?",
      answer:
        "ePlan outlines a joint EIS/EIR and researches precedent EISs and CEQA documents for similar projects; it does not draft a complete EIS. It drafts documents such as scoping letters and EAs from a reference document's structure, marking every fact it cannot confirm. The lead agencies review and decide.",
    },
  ],
};
