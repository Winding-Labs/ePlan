import type { GuidePath } from "../paths";
import { PROMPTS } from "../shared";
import type { GuideContent, Source } from "../types";

/**
 * /for/environmental-impact-assessment — EIA as the general concept, and the
 * US systems that carry it out (NEPA, CEQA and other state laws).
 *
 * Reused source keys (defined elsewhere, not redefined here):
 * - guides/sources.ts: usc4332, usc4336, usc4336a, usc4336e, ceqFlowchart
 * - pages/ceqa.ts: ceqaPrc21080, ceqaPrc21081, ceqaPrc21082dot1,
 *   ceqaGuide15061, ceqaGuide15063, ceqaGuide15105
 * - pages/ceqa-initial-study.ts: isPrc210816
 * - pages/state-environmental-review.ts: stateCeqList
 * - pages/environmental-permitting.ts: permitUsace333
 *
 * ePlan drafts NEPA and CEQA documents. It does not prepare ESIAs or other
 * countries' EIAs; the ESIA section is context only.
 */

const READ = "2026-10-02";

export const sources = {
  eiaIaiaPrinciples: {
    title: "Principles of Environmental Impact Assessment Best Practice",
    publisher:
      "International Association for Impact Assessment (IAIA), with the Institute of Environmental Assessment, UK",
    url: "https://www.iaia.org/uploads/pdf/principlesEA_1.pdf",
    published: "1999-01",
    read: READ,
  },
  eiaWbEsf: {
    title: "Environmental and Social Framework (ESF)",
    publisher: "World Bank",
    url: "https://www.worldbank.org/en/projects-operations/environmental-and-social-framework",
    read: READ,
  },
  eiaWbEss: {
    title: "Environmental and Social Standards (ESS)",
    publisher: "World Bank",
    url: "https://www.worldbank.org/en/projects-operations/environmental-and-social-framework/brief/environmental-and-social-standards",
    read: READ,
  },
  eiaIfcPs1: {
    title:
      "Performance Standard 1: Assessment and Management of Environmental and Social Risks and Impacts",
    publisher: "International Finance Corporation (IFC), World Bank Group",
    url: "https://www.ifc.org/content/dam/ifc/doc/2010/2012-ifc-performance-standard-1-en.pdf",
    published: "2012-01-01",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/environmental-impact-assessment",
  title: "What Is an Environmental Impact Assessment (EIA)?",
  description:
    "What an environmental impact assessment (EIA) is, the EIA process step by step, and how NEPA and CEQA carry it out in the US.",
  eyebrow: "Environmental impact assessment",
  h1: "What is an environmental impact assessment? EIA steps, documents and US law",
  primaryKeyword: "environmental impact assessment",
  secondaryKeywords: [
    "what is an environmental impact assessment",
    "environmental impact assessment process",
    "environmental and social impact assessment",
    "how to do an environmental impact assessment",
    "who does environmental impact assessment",
  ],
  document: "NEPA or CEQA Document",
  answer:
    "An environmental impact assessment (EIA) is the process of identifying, predicting, evaluating and mitigating the biophysical, social and other relevant effects of a development proposal before major decisions are taken [[eiaIaiaPrinciples]]. In the US, federal agencies do it under [NEPA](/for/nepa), and states such as California under their own laws, like [CEQA](/for/ceqa) [[stateCeqList]].",
  glance: [
    {
      label: "Federal EIA law",
      value: "NEPA, 42 U.S.C. 4332 and 4336 [[usc4332]] [[usc4336]]",
    },
    {
      label: "NEPA documents",
      value:
        "[Categorical exclusion](/for/nepa-categorical-exclusion), [EA](/for/nepa-environmental-assessment) and FONSI, or [EIS](/for/environmental-impact-statement) and record of decision [[usc4336]] [[ceqFlowchart]]",
    },
    {
      label: "CEQA documents",
      value:
        "An [initial study](/for/ceqa-initial-study), then a negative declaration or an [EIR](/for/ceqa-environmental-impact-report) [[ceqaGuide15063]] [[ceqaPrc21080]]",
    },
    {
      label: "State EIA laws",
      value:
        "19 state and local requirements on CEQ's list, including 16 states [[stateCeqList]]",
    },
    {
      label: "Lender standards",
      value:
        "World Bank ESS1 and IFC Performance Standard 1 [[eiaWbEss]] [[eiaIfcPs1]]",
    },
  ],
  hero: {
    prefix: "Start an Impact Assessment for",
    placeholder: "I'm starting the environmental review for…",
    examples: [
      {
        emoji: "☀️",
        label: "Solar Farm",
        heading: "a Solar Farm",
        eyebrow: "RENEWABLE ENERGY",
        prompt: PROMPTS.solarEa,
      },
      {
        emoji: "💧",
        label: "Water Main",
        heading: "a Water Main",
        eyebrow: "WATER UTILITIES",
        prompt:
          "I'm an environmental planner at a California water district starting CEQA review for replacing 3 miles of water main under existing city streets.",
      },
      {
        emoji: "🌲",
        label: "Forest Restoration",
        heading: "Forest Restoration",
        eyebrow: "FOREST MANAGEMENT",
        prompt: PROMPTS.vegEa,
      },
      {
        emoji: "🏘️",
        label: "Housing Project",
        heading: "a Housing Project",
        eyebrow: "CITY PLANNING",
        prompt:
          "I'm a city planner in Sacramento County preparing an initial study for a 150-unit apartment project on a 9-acre infill site.",
      },
      {
        emoji: "🚰",
        label: "Irrigation Pipeline",
        heading: "a Pipeline",
        eyebrow: "WATER DELIVERY",
        prompt: PROMPTS.pipelineEa,
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan proposes the level of review under NEPA or CEQA, then drafts the document, here an EA, from a reference document; every fact it can't confirm is marked for you.",
    mock: {
      project: "Sagebrush Flat Solar Project",
      documentTitle: "Sagebrush Flat Solar — Environmental Assessment",
      summary:
        "The Sagebrush Flat Solar — Environmental Assessment draft is ready, following the structure of a reference BLM EA. A few details still need your input:",
      missing: [
        "Applicant name",
        "Field office",
        "EA number",
        "Resources from scoping",
        "Survey dates",
      ],
      letterhead: {
        left: [
          "United States Department of the Interior",
          "Bureau of Land Management",
          "[INSERT: field office], Nevada",
        ],
        right: [
          "Environmental Assessment",
          "Sagebrush Flat Solar Project",
          "DOI-BLM-NV-[INSERT: EA number]",
        ],
      },
      meta: ["Date: October 2, 2026"],
      paragraphs: [
        "1. Purpose and need. The BLM's purpose is to respond to [INSERT: applicant name]'s application for a right-of-way to build and operate a 40-acre solar photovoltaic facility near [INSERT: nearest town], Nevada.",
        "2. Alternatives. The EA analyzes the proposed action and a no action alternative, under which the BLM would deny the right-of-way application.",
        "3. Affected environment and effects. Resources analyzed in detail: [INSERT: resources from scoping], using biological surveys completed on [INSERT: survey dates].",
      ],
    },
  },
  comparison: [
    {
      label: "Level of review",
      eplan:
        "Proposes the NEPA level (CE, EA or EIS) or the CEQA document (exemption, negative declaration or EIR), for your team to confirm",
      manual:
        "Work it out from the statute, agency procedures and past projects",
    },
  ],
  sections: [
    {
      heading: "The environmental impact assessment process, step by step",
      paragraphs: [
        "The International Association for Impact Assessment lists these stages in its best-practice principles [[eiaIaiaPrinciples]]. The outline below shows the document each one produces under NEPA and CEQA.",
      ],
      bullets: [
        "Screening: whether a proposal needs an EIA, and at what level of detail",
        "Scoping: the issues and impacts likely to matter, and the terms of reference",
        "Alternatives and impact analysis: the preferred option, and the likely environmental, social and other effects",
        "Mitigation and significance: measures to avoid, minimize or offset adverse effects, and how much the residual impacts matter",
        "The report and its review: impacts, mitigation and public concerns, checked against the terms of reference",
        "Decision and follow-up: approve or reject, set conditions, then monitor impacts and mitigation",
      ],
    },
    {
      heading: "EIA in the United States: NEPA, CEQA and other state laws",
      paragraphs: [
        "NEPA covers major federal actions: those the agency finds subject to substantial federal control and responsibility [[usc4336e]]. The agency prepares an environmental impact statement when significant effects are reasonably foreseeable, an environmental assessment when they are not or their significance is unknown, and neither when a categorical exclusion applies [[usc4336]].",
        "A number of states, tribes and localities run their own EIA processes for their own actions and decisions; CEQ lists 19 [state and local requirements](/for/state-environmental-review) similar to NEPA [[stateCeqList]]. Under CEQA, the lead agency uses an initial study to decide between a negative declaration and an EIR [[ceqaGuide15063]]. When both laws apply, see [CEQA and NEPA](/for/ceqa-and-nepa).",
      ],
    },
    {
      heading: "Environmental and social impact assessment (ESIA)",
      paragraphs: [
        "An environmental and social impact assessment covers changes to the physical, natural and cultural environment and impacts on nearby communities and workers [[eiaIfcPs1]]. World Bank investment projects started on or after October 1, 2018 follow its Environmental and Social Framework [[eiaWbEsf]], whose ESS1 requires borrowers to assess, manage and monitor those risks and impacts at each project stage [[eiaWbEss]].",
        "IFC's Performance Standard 1 calls for a comprehensive ESIA, including alternatives where appropriate, for greenfield developments or large expansions likely to generate significant environmental or social impacts [[eiaIfcPs1]]. ePlan does not prepare ESIAs or other countries' EIAs; it drafts US documents under NEPA and CEQA.",
      ],
    },
    {
      heading: "Who does environmental impact assessment in the US?",
      paragraphs: [
        "The agency deciding on the action. Under NEPA, a lead agency supervises the environmental document; a project sponsor may prepare it under that supervision, but the agency must independently evaluate it and takes responsibility for its contents [[usc4336a]]. Under CEQA, a public agency prepares the document directly or under contract and must independently review it [[ceqaPrc21082dot1]].",
        "[ePlan](/for/nepa-software) drafts NEPA and CEQA documents for agency staff and consultants; the agency still decides. For the work around the documents, see [environmental planning](/for/environmental-planning).",
      ],
    },
  ],
  outline: {
    heading:
      "How to do an environmental impact assessment in the US: NEPA and CEQA documents",
    intro:
      "Each EIA stage and the document it produces under each law [[ceqFlowchart]] [[ceqaGuide15063]]. Your agency's procedures set the format. For an Army Corps permit, the NEPA review informs the permit decision; see [environmental permitting](/for/environmental-permitting) [[permitUsace333]].",
    items: [
      {
        title: "Screening",
        detail:
          "NEPA: the threshold check, then a [categorical exclusion](/for/nepa-categorical-exclusion) if one fits [[usc4336]]. CEQA: an exemption, if one applies [[ceqaGuide15061]].",
      },
      {
        title: "First-level assessment",
        detail:
          "NEPA: an environmental assessment when significant effects are not reasonably foreseeable or are unknown [[usc4336]]. CEQA: an initial study [[ceqaGuide15063]].",
      },
      {
        title: "No significant effect",
        detail:
          "NEPA: a finding of no significant impact (FONSI) [[usc4336e]]. CEQA: a negative declaration, or a mitigated one when revisions avoid the effects [[ceqaPrc21080]].",
      },
      {
        title: "Full assessment",
        detail:
          "NEPA: an EIS, up to 150 pages (300 if extraordinarily complex) [[usc4336a]]. CEQA: an EIR when substantial evidence shows a significant effect may occur [[ceqaPrc21080]].",
      },
      {
        title: "Public review",
        detail:
          "NEPA: the EIS notice of intent requests public comment [[usc4336a]]. CEQA: 30 to 60 days for a draft EIR, at least 20 for a negative declaration [[ceqaGuide15105]].",
      },
      {
        title: "Decision",
        detail:
          "NEPA: the final agency decision, such as a record of decision [[ceqFlowchart]]. CEQA: findings on each significant effect an EIR identifies [[ceqaPrc21081]].",
      },
      {
        title: "Follow-up",
        detail:
          "NEPA: the action proceeds with the commitments in the decision [[ceqFlowchart]]. CEQA: a reporting or monitoring program for adopted mitigation [[isPrc210816]].",
      },
    ],
  },
  faq: [
    {
      question:
        "What is an environmental impact assessment, and how is it different from an EIS?",
      answer:
        "An EIA is the overall process of assessing a proposal's effects. An environmental impact statement is one document that process can produce: under NEPA, the detailed statement a federal agency prepares when significant effects of its action are reasonably foreseeable.",
    },
    {
      question:
        "Is an environmental assessment the same as an environmental impact assessment?",
      answer:
        "No. Under NEPA, an environmental assessment (EA) is a specific document, prepared when significant effects are not reasonably foreseeable or their significance is unknown. It ends in a FONSI or a decision to prepare an EIS. EIA is the general term for the whole process.",
    },
    {
      question: "Does a US project need an ESIA?",
      answer:
        "Not under NEPA or CEQA, which call for their own documents. ESIAs come from lender standards, such as the World Bank's Environmental and Social Framework and IFC's Performance Standard 1, for the projects those institutions finance.",
    },
    {
      question: "Can ePlan do an environmental impact assessment?",
      answer:
        "ePlan drafts the documents of a US environmental review, such as scoping letters, categorical exclusion decision memos, EAs and CEQA documents, and marks every fact it can't confirm. It does not prepare ESIAs or full EISs, and the agency makes every determination.",
    },
  ],
};
