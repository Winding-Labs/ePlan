import { HOME_DRAFT_MOCK } from "@/consts/draft-mocks";
import type { GuidePath } from "./paths";
import {
  PRICING_FAQ,
  PRICING_SUMMARY,
  PRODUCT_EXAMPLES,
  RESPONSIBLE_OFFICIAL_FAQ,
} from "./shared";
import type { GuideEntry } from "./types";

const nepaSoftware: GuideEntry<GuidePath> = {
  path: "/for/nepa-software",
  name: "NEPA software",
  title: "NEPA Software: AI for Environmental Review",
  description:
    "ePlan drafts scoping letters, CE decision memos and EAs from a reference document and marks every fact it could not confirm. People review and decide.",
  eyebrow: "NEPA software",
  h1: "NEPA software that drafts the document and marks what to check",
  family: "product",
  primaryKeyword: "nepa software",
  secondaryKeywords: [
    "nepa ai",
    "environmental review software",
    "ai permitting",
  ],
  document: "NEPA Document",
  answer:
    "ePlan is NEPA software, or environmental review software, for agency staff and environmental consultants. Describe a project and it drafts the scoping letter, categorical exclusion decision memo or environmental assessment from a reference document, marking every fact it could not confirm for your team to fill in. Research, tasks, maps and comments sit in the same workspace. Your team reviews, edits and signs; ePlan does not make NEPA determinations.",
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
  glance: [
    {
      label: "Drafts",
      value: "Scoping letters, CE decision memos, EAs and CEQA documents",
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
    prefix: "Draft",
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
        "They search past NEPA documents, suggest review pathways and draft documents. ePlan drafts scoping letters, CE decision memos, EAs and CEQA documents from a project description, and marks every fact it could not confirm. A person still reviews and signs every document.",
    },
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

const compareAiTools: GuideEntry<GuidePath> = {
  path: "/for/nepa-ai-tools",
  name: "AI tools for NEPA",
  title: "AI Tools for NEPA Review Compared (2026)",
  description:
    "PNNL's PermitAI, NEPATEC, Radial Spatial, Transect, PermitFlow and ePlan compared from their own public pages: who each is for and what it does.",
  eyebrow: "Compare",
  h1: "AI tools for NEPA review, compared",
  family: "product",
  primaryKeyword: "ai tools for nepa",
  secondaryKeywords: ["permitai", "nepatec", "nepa ai"],
  document: "NEPA Document",
  answer:
    "Few AI tools aim at NEPA itself. PNNL's PermitAI, funded by DOE, offers NEPA search, comment and drafting tools to agencies, several in beta for federal users [[permitai]] [[permitaiApps]]. NEPATEC is PNNL's open dataset of NEPA documents [[nepatec2]]. Radial Spatial's NEPA AI predicts likely NEPA pathways from a project's location [[radial]]. Transect screens sites for energy developers [[transect]], and PermitFlow is an AI platform for construction permitting, not NEPA [[permitflow]]. ePlan drafts scoping letters, CE decision memos and EAs.",
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
        "ePlan drafts the documents themselves: scoping letters, CE decision memos and EAs, each following a reference document and marking every fact it could not confirm, inside a project workspace with research, tasks, maps and comments. Your team reviews and signs.",
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
  glance: [
    {
      label: "Compared",
      value: "PermitAI, NEPATEC, NEPA AI, Transect, PermitFlow and ePlan",
    },
    { label: "Sources", value: "Each maker's own pages, read October 2, 2026" },
    { label: "Prices", value: "None of the others publishes a price" },
  ],
  hero: {
    prefix: "Draft",
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

export const PRODUCT_GUIDES = [nepaSoftware, compareAiTools];
