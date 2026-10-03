import type { GuidePath } from "../paths";
import { PROMPTS } from "../shared";
import type { GuideContent, Source } from "../types";

/**
 * /for/environmental-planning — what environmental planning is, what
 * environmental planners do day to day, and where ePlan fits (drafting).
 * The topical home for the home page's "Accelerate your environmental
 * planning", without repeating the home page.
 *
 * Reused source keys (defined elsewhere, not redefined here):
 * - guides/sources.ts: usc4332, usc4336, usc4336a, ceqFlowchart
 * - pages/ceqa.ts: ceqaGuide15063, ceqaGuide15105
 * - pages/ceqa-initial-study.ts: isPrc210816
 * - pages/esa-section-7.ts: esaUsc1536
 * - pages/section-106.ts: s106Usc306108
 * - pages/state-environmental-review.ts: stateCeqList
 * - pages/environmental-permitting.ts: permitUsaceIfr, permitUsace333
 *
 * BLS publishes no "environmental planner" occupation page; its urban and
 * regional planner figures are cited as a related occupation only.
 */

const READ = "2026-10-02";

export const sources = {
  planUsc4331: {
    title:
      "42 U.S.C. 4331 - Congressional declaration of national environmental policy",
    publisher: "United States Code, 2023 edition (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap55-subchapI-sec4331.htm",
    read: READ,
  },
  planFhwaPel: {
    title: "Planning and Environment Linkages (PEL)",
    publisher: "Federal Highway Administration, Environmental Review Toolkit",
    url: "https://www.environment.fhwa.dot.gov/env_initiatives/PEL.aspx",
    read: READ,
  },
  planBlsPlanners: {
    title: "Urban and Regional Planners, Occupational Outlook Handbook",
    publisher: "U.S. Bureau of Labor Statistics",
    url: "https://www.bls.gov/ooh/life-physical-and-social-science/urban-and-regional-planners.htm",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/environmental-planning",
  title: "What Is Environmental Planning? What Planners Do",
  description:
    "What environmental planning is, and what environmental planners do day to day: NEPA and CEQA documents, consultation and permits.",
  eyebrow: "Environmental planning",
  h1: "Environmental planning: what it is and what environmental planners do",
  primaryKeyword: "environmental planning",
  secondaryKeywords: [
    "what is environmental planning",
    "environmental planner",
  ],
  document: "Scoping Letter",
  answer:
    "Environmental planning means weighing environmental effects in plans and decisions before they are made. For federal agencies, NEPA requires it: a systematic, interdisciplinary approach to planning and decisionmaking that may affect the environment [[usc4332]]. Environmental planners do that work through [NEPA](/for/nepa) and [CEQA](/for/ceqa) reviews, agency consultation, permit coordination and public involvement.",
  glance: [
    {
      label: "Federal basis",
      value:
        "NEPA section 102(2)(A): a systematic, interdisciplinary approach to planning [[usc4332]]",
    },
    {
      label: "Core documents",
      value:
        "[Categorical exclusions](/for/nepa-categorical-exclusion), EAs and EISs; CEQA initial studies and EIRs [[usc4336]] [[ceqaGuide15063]]",
    },
    {
      label: "Transportation",
      value:
        "FHWA's Planning and Environment Linkages carry planning work into environmental review [[planFhwaPel]]",
    },
    {
      label: "Planner jobs (BLS)",
      value:
        "About 45,800 urban and regional planner jobs in 2025 [[planBlsPlanners]]",
    },
    {
      label: "Where planners work",
      value:
        "Local government 74%, state government 9%, architecture and engineering firms 9% [[planBlsPlanners]]",
    },
  ],
  hero: {
    prefix: "Start Environmental Planning for",
    placeholder: "I'm planning the environmental review for…",
    examples: [
      {
        emoji: "🚜",
        label: "Road Repair",
        heading: "Road Repair",
        eyebrow: "PUBLIC LANDS",
        prompt: PROMPTS.roadScoping,
      },
      {
        emoji: "🌲",
        label: "Thinning Project",
        heading: "Thinning",
        eyebrow: "WILDFIRE RISK",
        prompt: PROMPTS.thinningScoping,
      },
      {
        emoji: "🚌",
        label: "Transit Line",
        heading: "a Transit Line",
        eyebrow: "PUBLIC TRANSIT",
        prompt:
          "I'm an environmental planner at a regional transit agency in Colorado planning a 9-mile bus rapid transit line with FTA funding and two creek crossings.",
      },
      {
        emoji: "🥾",
        label: "River Trail",
        heading: "a River Trail",
        eyebrow: "PARKS AND TRAILS",
        prompt:
          "I'm a park district planner in Washington planning a 4-mile paved trail along a river, with a state grant and one wetland crossing.",
      },
      {
        emoji: "🌉",
        label: "Bridge Replacement",
        heading: "a Bridge",
        eyebrow: "TRANSPORTATION",
        prompt: PROMPTS.bridge,
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the first document of the review, here a scoping letter, from a reference document; every fact it can't confirm is marked for you.",
    mock: {
      project: "Forest Road 43 Repair",
      documentTitle: "Forest Road 43 Repair — Scoping Letter",
      summary:
        "The Forest Road 43 Repair — Scoping Letter is ready, with the permits and consultations to plan for. A few details still need your input:",
      missing: [
        "Ranger district",
        "Repair length",
        "Stream name",
        "Comment deadline",
        "Contact person",
      ],
      letterhead: {
        left: [
          "United States Department of Agriculture",
          "Forest Service",
          "Tahoe National Forest",
        ],
        right: [
          "[INSERT: district office address]",
          "[INSERT: city], CA [INSERT: ZIP code]",
          "[INSERT: office phone]",
        ],
      },
      meta: ["File Code: [INSERT: file code]", "Date: October 2, 2026"],
      salutation: "Dear Interested Party:",
      paragraphs: [
        "The [INSERT: ranger district] is seeking comments on a proposal to repair a washed-out section of Forest Road 43, which provides recreation access to [INSERT: destination].",
        "Proposed action: rebuild about [INSERT: repair length] of road and replace the failed culvert at [INSERT: stream name]. The work may need a Clean Water Act Section 404 permit and consultation on [INSERT: species or historic properties].",
        "Please send comments by [INSERT: comment deadline] to [INSERT: contact person and email].",
      ],
    },
  },
  comparison: [
    {
      label: "Consultation documents",
      eplan:
        "Drafts documents such as a biological assessment or a Section 106 letter to the SHPO, for your team to review, sign and send",
      manual: "Write each one from a past example",
    },
  ],
  sections: [
    {
      heading: "What is environmental planning?",
      paragraphs: [
        'It starts before a project is fixed. NEPA sets a national policy of creating and maintaining "conditions under which man and nature can exist in productive harmony" [[planUsc4331]]. In transportation, FHWA\'s Planning and Environment Linkages approach considers environmental, community and economic goals early in planning and carries that work into environmental review [[planFhwaPel]].',
        "For a specific project, environmental planning becomes environmental review: choosing the level of review and producing the document. Under NEPA that is a categorical exclusion, an EA or an EIS [[usc4336]]; under CEQA, an initial study leading to a negative declaration or an EIR [[ceqaGuide15063]]. Both laws are forms of [environmental impact assessment](/for/environmental-impact-assessment) [[stateCeqList]].",
      ],
    },
    {
      heading: "What environmental planners do day to day",
      paragraphs: [
        "The recurring tasks on a project, and the law behind each:",
      ],
      bullets: [
        "Drafting NEPA and CEQA documents, within limits such as 75 pages and one year for an EA [[usc4336a]]",
        "Agency consultation: NEPA requires consulting agencies with jurisdiction or special expertise before an EIS [[usc4332]]",
        "[ESA section 7](/for/esa-section-7) and [Section 106](/for/section-106) consultation on effects to listed species and historic properties [[esaUsc1536]] [[s106Usc306108]]",
        "Permit coordination: listing the [environmental permits](/for/environmental-permitting) and consultations other laws require, and how they will be met [[permitUsace333]]",
        "Public involvement: comments on an EIS notice of intent; a 30- to 60-day draft EIR review [[usc4336a]] [[ceqaGuide15105]]",
        "Mitigation follow-up: under CEQA, a reporting or monitoring program for the mitigation an agency adopts [[isPrc210816]]",
      ],
    },
    {
      heading: "Where environmental planners work",
      paragraphs: [
        "BLS publishes figures for urban and regional planners, a related occupation: about 45,800 jobs in 2025, 74 percent in local government, 9 percent in state government and 9 percent in architectural, engineering and related services. It lists a master's degree as the typical entry-level education [[planBlsPlanners]].",
        "On federal projects the work splits between agency and applicant. A lead agency supervises the environmental document, and a project sponsor may prepare it under that supervision while the agency independently evaluates it [[usc4336a]]. So environmental planners work as agency staff who review and decide, and as consultants and applicants who may draft.",
      ],
    },
    {
      heading: "Where ePlan fits in environmental planning",
      paragraphs: [
        "ePlan handles the drafting. Describe a project or upload what you have, and it researches precedent and drafts scoping letters, categorical exclusion decision memos, EAs and CEQA documents, marking every fact it can't confirm. Consultations, permit applications, public meetings and decisions stay with your team and the agencies. See [NEPA software](/for/nepa-software) for what it drafts on each plan.",
      ],
    },
  ],
  outline: {
    heading: "An environmental planning workflow for one project",
    intro:
      "The steps for a federally funded or permitted project, with the law behind each. Your agency's procedures set the details.",
    items: [
      {
        title: "Purpose and need",
        detail:
          "Every environmental document states the underlying purpose and need for the proposed action [[usc4336a]].",
      },
      {
        title: "Does NEPA apply?",
        detail:
          "Not if the action is not final, is categorically excluded, would clearly conflict with another law, or is nondiscretionary [[usc4336]].",
      },
      {
        title: "Level of review",
        detail:
          "An EIS if significant effects are reasonably foreseeable; an EA if they are not or their significance is unknown [[usc4336]].",
      },
      {
        title: "Scoping and early coordination",
        detail:
          "A [scoping letter](/for/nepa-scoping-letter), calls to agencies with jurisdiction, and pre-application talks with permitting offices such as the Army Corps [[usc4332]] [[permitUsaceIfr]].",
      },
      {
        title: "Consultations",
        detail:
          "Species and historic properties reviews, run alongside the environmental document rather than after it [[permitUsace333]] [[esaUsc1536]] [[s106Usc306108]].",
      },
      {
        title: "Analysis and draft",
        detail:
          "Reasonably foreseeable effects, unavoidable adverse effects and a reasonable range of alternatives, within the page limits [[usc4332]] [[usc4336a]].",
      },
      {
        title: "Decision and follow-up",
        detail:
          "The agency decides, then carries out the commitments in its decision; CEQA adds a mitigation monitoring or reporting program [[ceqFlowchart]] [[isPrc210816]].",
      },
    ],
  },
  faq: [
    {
      question:
        "What is the difference between environmental planning and environmental review?",
      answer:
        "Environmental review is the process a law such as NEPA or CEQA requires for a specific action. Environmental planning is broader: it includes earlier choices about where and how to build, and the consultations, permits and public involvement around the review.",
    },
    {
      question:
        "Is environmental planning the same as environmental impact assessment?",
      answer:
        "Not quite. Environmental impact assessment is the process of identifying and evaluating a proposal's effects before a decision; in the US, NEPA and state laws such as CEQA carry it out. Environmental planning covers that work and the planning around it.",
    },
    {
      question: "Do environmental planners handle permits?",
      answer:
        "They coordinate them. An Army Corps NEPA document, for example, may list the permits and consultations other laws require and how the applicant will meet them. The permitting agency decides on each permit.",
    },
    {
      question: "Does ePlan replace environmental planners?",
      answer:
        "No. ePlan drafts documents and researches precedent, so planners spend less time on first drafts. Planners still check every fact and run consultations and public involvement, and the responsible official decides.",
    },
  ],
};
