import { HOME_DRAFT_MOCK } from "@/consts/draft-mocks";
import type { GuidePath } from "./paths";
import { PRICING_FAQ, PRICING_SUMMARY, PRODUCT_EXAMPLES } from "./shared";
import type { GuideContent } from "./types";

const nepaSoftware: GuideContent<GuidePath> = {
  path: "/for/nepa-software",
  title: "NEPA Software: AI for Environmental Review",
  description:
    "ePlan is NEPA software that drafts scoping letters, CE decision memos and EAs from a reference document, for your team to review.",
  eyebrow: "NEPA software",
  h1: "NEPA software that drafts the document and marks what to check",
  primaryKeyword: "nepa software",
  secondaryKeywords: [
    "nepa ai",
    "environmental review software",
    "ai permitting",
  ],
  document: "NEPA Document",
  answer:
    "ePlan is NEPA software, or environmental review software, for agency staff and environmental consultants. Describe a project and it drafts the scoping letter, categorical exclusion decision memo or [environmental assessment](/for/nepa-environmental-assessment) from a reference document, marking every fact it could not confirm. Your team reviews, edits and signs; ePlan does not make NEPA determinations.",
  sections: [
    {
      heading: "What NEPA software has to keep up with",
      paragraphs: [
        "The 2023 amendments added page limits, deadlines and CE adoption to the statute [[fra2023]] [[usc4336a]] [[usc4336c]]. CEQ's regulations were removed effective April 11, 2025 [[ceqIfr]] [[ceqFinal]], and agencies issued their own procedures through 2026 [[usdaFinal]] [[doiFinal]] [[fhwaFinal]]. A tool that still cites 40 CFR parts 1500-1508 as current law, after they were removed, misleads the people relying on it.",
      ],
    },
    {
      heading: "What ePlan does",
      paragraphs: ["One workspace per project:"],
      bullets: [
        "Research: reads your uploads, finds candidate [categorical exclusions](/for/nepa-categorical-exclusion), and references past decisions and documents, each cited.",
        "Drafting: location and purpose filled in; every citation or detail it can't confirm marked for your team.",
        "Planning: a Gantt of milestones and tasks, from botany surveys to GIS boundaries.",
        "Collaboration: comments and an activity timeline; partners submit project applications, and public projects get a comment page.",
      ],
    },
    {
      heading: "Where AI stops",
      paragraphs: [
        "NEPA keeps responsibility with the agency. When a project sponsor prepares an EA or EIS, the lead agency must independently evaluate it and take responsibility for its contents [[usc4336a]], and Interior bars applicants and contractors from preparing decision documents such as a record of decision [[doi46107]]. ePlan works the same way: it drafts, and people decide.",
      ],
    },
  ],
  outline: {
    heading: "What to check in any NEPA software",
    intro:
      "Questions worth asking before you pilot a tool, ePlan included. For other tools, see [AI tools for NEPA compared](/for/nepa-ai-tools).",
    items: [
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
  glance: [
    {
      label: "Drafts",
      value:
        "[Scoping letters](/for/nepa-scoping-letter), CE decision memos, EAs and CEQA documents",
    },
    {
      label: "Reads",
      value:
        "PDF and Word files, and GIS files (shapefile, GeoJSON, KML, GeoPackage)",
    },
    {
      label: "Researches",
      value:
        "Agency project pages, CEQAnet, the Federal Register, eCFR and EPA's EIS database",
    },
    {
      label: "Plans",
      value: "Free for scoping letters; Max for EAs, EIRs and decision memos",
    },
  ],
  hero: {
    prefix: "Draft NEPA Documents for",
    placeholder: "I'm working on…",
    examples: PRODUCT_EXAMPLES,
  },
  draft: {
    description:
      "Describe a project and ePlan drafts the document it needs from a reference document, with every unconfirmed fact marked for you.",
    mock: HOME_DRAFT_MOCK,
  },
  faq: [
    {
      question: "What can NEPA AI tools do today?",
      answer:
        "They search past NEPA documents, predict review pathways, help process public comments and draft documents. The agency still makes the NEPA determination, and a person reviews and signs every document.",
    },
    {
      question: "Is NEPA software the same as AI permitting software?",
      answer:
        "Not quite. AI permitting tools such as PermitFlow target building and construction permits. NEPA software supports the environmental review an agency completes before it decides; ePlan drafts those documents and does not issue permits.",
    },
    {
      question: "Can NEPA software draft an EIS?",
      answer:
        "ePlan drafts scoping letters, CE decision memos and EAs, not full EISs. On projects headed for an EIS, teams use it for the scoping letter, precedent research and the task plan.",
    },
    PRICING_FAQ,
  ],
};

const compareAiTools: GuideContent<GuidePath> = {
  path: "/for/nepa-ai-tools",
  title: "AI Tools for NEPA Review Compared (2026)",
  description:
    "AI tools for NEPA compared from their own pages: PermitAI, NEPATEC, Radial Spatial, Transect, PermitFlow and ePlan.",
  eyebrow: "Compare",
  h1: "AI tools for NEPA review, compared",
  primaryKeyword: "ai tools for nepa",
  secondaryKeywords: ["permitai", "nepatec", "nepa ai"],
  document: "NEPA Document",
  answer:
    "AI tools for NEPA are still few. PNNL's DOE-funded PermitAI offers search, comment and drafting tools, several in beta for federal users [[permitai]] [[permitaiApps]]; NEPATEC is PNNL's open dataset of NEPA documents [[nepatec2]]. Radial Spatial's NEPA AI predicts review pathways from location [[radial]]. Transect screens sites [[transect]]; PermitFlow handles construction permits [[permitflow]]. [ePlan](/for/nepa-software) drafts scoping letters, CE memos and EAs.",
  tools: [
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
      does: "Drafts NEPA documents from a reference document, marking every fact it could not confirm, in a project workspace with research, tasks, maps and comments",
      nepaDocuments: "Scoping letters, CE decision memos and EAs",
      availability: PRICING_SUMMARY,
    },
  ],
  sections: [
    {
      heading: "PermitAI and NEPATEC",
      paragraphs: [
        "PNNL describes PermitAI as a one-stop data platform and suite of AI tools to streamline reviews for critical federal infrastructure, funded by DOE's Office of Policy and Office of Critical Minerals and Energy Innovation [[permitai]]. SearchNEPA launched in late 2024 and is in beta testing with more than 500 users across federal agencies [[permitaiApps]].",
        "NEPATEC, the NEPA text corpus behind it, is open. Version 1.0 was published under the PolicyAI name and held 28,212 documents from 2,917 projects [[nepatec1]].",
      ],
    },
    {
      heading: "Radial Spatial NEPA AI",
      paragraphs: [
        "Radial Spatial, a service-disabled veteran-owned small business, says NEPA AI cross-references past CATEX, EA and EIS documents from the same watershed to predict NEPA pathways, mitigation requirements and permitting costs [[radial]]. Esri lists it as a partner solution [[radialEsri]].",
      ],
    },
  ],
  outline: {
    heading: "Questions to ask any NEPA AI tool",
    intro:
      "Use these on every tool above, ePlan included. Filed EISs are public in [EPA's EIS database](/for/eis-database), and [NEPA examples](/for/nepa-examples) shows where agencies post EAs and CE records.",
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
  glance: [
    {
      label: "Compared",
      value: "PermitAI, NEPATEC, NEPA AI, Transect, PermitFlow and ePlan",
    },
    { label: "Sources", value: "Each maker's own pages, read October 2, 2026" },
    { label: "Prices", value: "None of the others publishes a price" },
  ],
  hero: {
    prefix: "Draft NEPA Documents for",
    placeholder: "I'm working on…",
    examples: PRODUCT_EXAMPLES,
  },
  draft: {
    description:
      "Describe a project and ePlan drafts the document it needs from a reference document, with every unconfirmed fact marked for you.",
    mock: HOME_DRAFT_MOCK,
  },
  faq: [
    {
      question: "What is PermitAI?",
      answer:
        "A PNNL platform of AI tools for federal environmental review, funded by DOE. Its SearchNEPA and CommentNEPA tools are in beta for federal government users.",
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
  ],
};

export const PRODUCT_GUIDES = [nepaSoftware, compareAiTools];
