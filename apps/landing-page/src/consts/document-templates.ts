import { brand } from "@/lib/brand";
import type {
  DocumentTemplate,
  DocumentTemplateLink,
} from "@/types/document-templates";
import { routing } from "@/utils/routing";

// Document-intent landing pages (/templates/<slug>). Each is a document the
// product drafts today — the home FAQ (scoping letters, CE decision memos,
// EAs), the pricing catalog (CEQA/NEPA scoping letters, EA/EIR/decision
// memos), the next-step prompt's NEPA and CEQA lists (EA with FONSI, EIS with
// ROD, Initial Study, MND, MMRP) and the public catalog's categorical-exclusion
// project templates — matched to search demand (see
// docs/plans/2026-10-02-seo-ads-analytics-audit.md). The slugs are shared with
// the ads plan: don't rename them.
//
// Regulatory copy stays general on purpose: CEQ rescinded its NEPA
// regulations in 2025 and agencies have been revising their own procedures,
// so pages describe the statute and agency lists and point readers to the
// current text instead of quoting sections that may have moved.

const SLUGS = {
  categoricalExclusion: "categorical-exclusion-decision-memo",
  scopingLetter: "nepa-scoping-letter",
  environmentalAssessment: "nepa-environmental-assessment",
  ceqaInitialStudy: "ceqa-initial-study",
  environmentalImpactStatement: "environmental-impact-statement",
} as const;

const PURPOSE_AND_NEED_ID = "purpose-and-need";

const RESOURCE_LINKS = {
  quickstart: {
    label: "Quickstart",
    href: `${routing.docs()}/getting-started/quickstart`,
  },
  chatAndSetup: {
    label: "Chat and project setup",
    href: `${routing.docs()}/guides/chat-and-setup`,
  },
  researchAgent: {
    label: "Research agent",
    href: `${routing.docs()}/guides/research-agent`,
  },
  documentsAndSigning: {
    label: "Documents and signing",
    href: `${routing.docs()}/guides/documents-and-signing`,
  },
  tasksAndMilestones: {
    label: "Tasks and milestones",
    href: `${routing.docs()}/guides/tasks-and-milestones`,
  },
  catalogTemplates: {
    label: "Public project templates",
    href: routing.catalogTemplates(),
  },
} satisfies Record<string, DocumentTemplateLink>;

const PURPOSE_AND_NEED_DEFINITION =
  "The need is the underlying problem or opportunity the agency is responding to — often the gap between existing conditions and the desired conditions in a land management plan or program. The purpose is what the action is meant to achieve in response.";

const PURPOSE_AND_NEED_ALTERNATIVES =
  "The statement sets the yardstick for which alternatives are reasonable. As amended in 2023, NEPA describes the alternatives in an EIS as ones that are technically and economically feasible and meet the purpose and need of the proposal — so describe the problem and the objectives, not a single solution.";

export const DOCUMENT_TEMPLATES: DocumentTemplate[] = [
  {
    slug: SLUGS.categoricalExclusion,
    name: "Categorical Exclusion Decision Memo",
    framework: "NEPA",
    metaTitle:
      "NEPA Categorical Exclusion (CE) Decision Memo Template & Examples",
    metaDescription:
      "NEPA categorical exclusion decision memo: typical sections, extraordinary circumstances and agency CE lists (23 CFR 771.117, 43 CFR 46.210, 10 CFR 1021).",
    heading: "NEPA categorical exclusion decision memo",
    lead: `A decision memo records an agency's decision to proceed with a project under a NEPA categorical exclusion. ${brand.name} drafts one from your project description, the category you expect to use and your project files, and flags every fact it can't confirm.`,
    promptPlaceholder:
      "Describe the project you need a categorical exclusion for — agency, location and the work planned…",
    overview: [
      "Under the National Environmental Policy Act (NEPA), a categorical exclusion (CE) is a category of actions that an agency has determined normally does not significantly affect the human environment. An action that fits an established category, where no extraordinary circumstances are present, can proceed without an environmental assessment (EA) or an environmental impact statement (EIS).",
      "Agencies document that determination in different ways. Some, such as the USDA Forest Service, record certain categorical exclusions in a signed decision memo; others use a CE checklist, a record of environmental consideration or a memo to file. A decision memo explains what will be done, which category applies and why no extraordinary circumstances prevent its use.",
    ],
    whenUsed: [
      "When a proposed action fits a category in the lead agency's NEPA procedures and those procedures call for the decision to be documented.",
      "After scoping and the review for extraordinary circumstances, once the responsible official is ready to decide.",
      "Whether a memo is required, and its format, depends on the agency and the category. Agencies revised their NEPA procedures in 2025, so confirm the current procedures and category citation for your agency.",
    ],
    sections: [
      {
        title: "Decision and project description",
        description:
          "What will be done, where, and the area affected — usually with a vicinity map.",
      },
      {
        title: "Purpose and need",
        description: "Why the agency is proposing the action.",
      },
      {
        title: "Category of exclusion",
        description:
          "The specific categorical exclusion relied on and its citation in the agency's NEPA procedures.",
      },
      {
        title: "Extraordinary circumstances",
        description:
          "The resource conditions considered — for example listed species, wetlands and floodplains, designated areas and cultural resources — and why none prevents use of the category.",
      },
      {
        title: "Public involvement",
        description:
          "How the project was scoped, who was contacted and how comments were considered.",
      },
      {
        title: "Findings required by other laws",
        description:
          "Consistency with the land management plan and with laws such as the Endangered Species Act and the National Historic Preservation Act.",
      },
      {
        title: "Review opportunity and implementation",
        description:
          "Any objection or appeal process that applies, when implementation can begin and who to contact.",
      },
      {
        title: "Signature",
        description: "The responsible official's signature and date.",
      },
    ],
    topics: [
      {
        id: "agency-categorical-exclusions",
        title: "Categorical exclusion examples by agency",
        paragraphs: [
          "Each agency lists its own categories, so the same kind of work can fall under different categories at different agencies. Three of the most-used lists:",
        ],
        bullets: [
          "Federal Highway Administration — 23 CFR 771.117. The “c-list” covers actions that normally qualify, such as bicycle and pedestrian facilities, landscaping and highway signage, some subject to conditions; the “d-list” covers actions that can qualify once documentation shows they meet the CE criteria. Many state DOTs make these determinations under a programmatic agreement with FHWA.",
          "Department of the Interior — 43 CFR 46.210 lists department-wide categories, such as routine and continuing government business and nondestructive data collection, inventory, research and monitoring; the extraordinary circumstances are in 46.215. Bureaus such as the BLM, the National Park Service and the Fish and Wildlife Service add their own categories in the Departmental Manual (516 DM).",
          "Department of Energy — 10 CFR part 1021, subpart D: appendix A lists categories for general agency actions and appendix B for specific kinds of projects, and section 1021.410 sets the conditions for applying them, including that no extraordinary circumstances are present.",
        ],
        link: RESOURCE_LINKS.catalogTemplates,
      },
      {
        id: "adopting-categorical-exclusions",
        title: "Before you cite a category",
        paragraphs: [
          "Interior, Energy and other agencies revised their NEPA procedures in 2025, and since 2023 NEPA section 109 also lets an agency adopt another agency's categorical exclusion. Check the current text of the category — and any conditions attached to it — before the memo cites it.",
        ],
      },
    ],
    helpfulInputs: [
      "The categorical exclusion category you expect to use, if you know it",
      "Specialist input or survey results for the resources reviewed",
      "A previous decision memo from your office, as a format reference",
    ],
    examplePrompt:
      "I'm a NEPA planner on a national forest preparing a decision memo for a 400-acre roadside fuel break along an existing forest road, under a categorical exclusion for hazardous fuels reduction.",
    faqs: [
      {
        question: "Is a decision memo the same as a categorical exclusion?",
        answer:
          "No. The categorical exclusion is a category of actions defined in an agency's NEPA procedures; the decision memo is the record of the decision to use it for a specific project. Not every categorical exclusion needs a decision memo — that depends on the agency's procedures and the category.",
      },
      {
        question: "What are extraordinary circumstances?",
        answer:
          "They are conditions, defined in each agency's NEPA procedures, under which a normally excluded action may have significant effects — for example effects on listed species, wetlands or historic properties. If they are present, the agency may need an EA or an EIS instead of a categorical exclusion.",
      },
      {
        question: `Can ${brand.name} suggest the right category?`,
        answer:
          "It compares your project description with CE categories and past decisions from the same agency, then shows the suggested match with its citation. The determination stays with your agency: the draft marks it for confirmation instead of stating it as fact.",
      },
      {
        question: "Are there examples or templates to start from?",
        answer:
          "Yes. The public catalog includes categorical exclusion project templates — for example for fuel breaks, road maintenance and post-fire rehabilitation — and the research agent finds published decision memos from comparable projects to use as precedent.",
      },
      {
        question: `Does ${brand.name} sign or issue the memo?`,
        answer: `No. ${brand.name} prepares a draft for your team. The responsible official reviews, signs and issues the decision under the agency's procedures; you can route the final document for signature with the Signing module.`,
      },
    ],
    resources: [
      RESOURCE_LINKS.catalogTemplates,
      RESOURCE_LINKS.chatAndSetup,
      RESOURCE_LINKS.documentsAndSigning,
    ],
  },
  {
    slug: SLUGS.scopingLetter,
    name: "NEPA Scoping Letter",
    framework: "NEPA",
    metaTitle: "NEPA Scoping Letter Template and Guide",
    metaDescription: `What goes in a NEPA scoping letter, when agencies send one, and how ${brand.name} drafts it from your proposed action, purpose and need, and project files.`,
    heading: "NEPA scoping letter",
    lead: `A scoping letter invites agencies, tribes and the public to comment early on a proposed action. Describe your project below and ${brand.name} drafts the letter — proposed action, purpose and need, location and how to comment — ready for your review.`,
    promptPlaceholder:
      "Describe the proposed action you're scoping — agency, location and what you plan to do…",
    overview: [
      "Scoping is the early, open process an agency uses to decide which issues its environmental review should address and to identify the significant issues related to a proposed action. For an environmental impact statement, scoping formally begins with a notice of intent; many agencies also scope projects reviewed through an environmental assessment or a categorical exclusion.",
      "A scoping letter — sometimes called a scoping notice or proposed action letter — is how many agencies start that conversation. It describes what the agency proposes to do, why and where, the level of review expected, and how and by when to submit comments.",
    ],
    whenUsed: [
      "At the start of the environmental review, once the proposed action and the purpose and need are defined well enough for people to comment on them.",
      "To reach other agencies, tribes, permittees, neighboring landowners, interested groups and the public — often alongside a project web page or a public meeting.",
      "The comment period, distribution list and format are set by the lead agency's procedures and the project; there is no single required template.",
    ],
    sections: [
      {
        title: "Letterhead, date and file code",
        description: "The issuing office and its reference numbers.",
      },
      {
        title: "Project name and location",
        description: "Where the action would happen, usually with a map.",
      },
      {
        title: "Proposed action",
        description: "What the agency proposes to do, in plain language.",
      },
      {
        title: "Purpose and need",
        description: "The problem or opportunity the action responds to.",
      },
      {
        title: "Preliminary issues",
        description: "Resources and concerns identified so far.",
      },
      {
        title: "Anticipated level of review",
        description:
          "For example a categorical exclusion, an EA or an EIS, when it is known.",
      },
      {
        title: "How to comment",
        description:
          "The deadline, where to send comments and what makes a comment useful.",
      },
      {
        title: "Contact and signature",
        description: "The project lead and the responsible official.",
      },
    ],
    topics: [],
    helpfulInputs: [
      "A short description of the proposed action and its location",
      "A previous scoping letter from your office, as a format reference",
      "Known issues, partners or a project web page",
    ],
    examplePrompt:
      "I'm a project lead at a BLM field office starting public scoping for the reconstruction of a 5-mile trail segment damaged by erosion. I need a scoping letter for agencies, tribes and the public.",
    faqs: [
      {
        question: "Is scoping required for every NEPA project?",
        answer:
          "Scoping is a standard step for environmental impact statements. For environmental assessments and categorical exclusions, whether and how to scope is set by the agency's procedures and the project — many agencies scope these projects too, at a smaller scale.",
      },
      {
        question:
          "What is the difference between a scoping letter and a notice of intent?",
        answer:
          "A notice of intent is published in the Federal Register when an agency decides to prepare an EIS, and it begins formal scoping. A scoping letter is correspondence sent directly to interested parties and is used at any level of review.",
      },
      {
        question: "Can it draft scoping documents for CEQA projects?",
        answer: `Yes. Tell ${brand.name} which framework applies when you describe the project. Under CEQA the comparable step for an EIR is a Notice of Preparation, and ${brand.name} drafts scoping correspondence for CEQA as well as NEPA projects.`,
      },
      {
        question: `What does ${brand.name} need to draft the letter?`,
        answer:
          "A short description of the proposed action, its location and its purpose. Contact details, dates and deadlines it can't confirm are left as highlighted placeholders for you to fill in rather than guessed.",
      },
      {
        question: "Can I reuse my office's letter format?",
        answer: `Yes. Upload a previous scoping letter as a reference and ${brand.name} follows its structure and length while using the new project's facts. It doesn't carry over the old project's names, dates or contacts.`,
      },
    ],
    resources: [
      RESOURCE_LINKS.quickstart,
      RESOURCE_LINKS.chatAndSetup,
      RESOURCE_LINKS.documentsAndSigning,
    ],
  },
  {
    slug: SLUGS.environmentalAssessment,
    name: "NEPA Environmental Assessment and FONSI",
    framework: "NEPA",
    metaTitle:
      "NEPA Environmental Assessment (EA) & FONSI Template and Outline",
    metaDescription: `What a NEPA environmental assessment is, its outline, EA vs EIS, and when an agency issues a FONSI — plus how ${brand.name} drafts the EA from your project files.`,
    heading: "NEPA environmental assessment (EA) and FONSI",
    lead: `An environmental assessment analyzes whether a proposed federal action may have significant environmental effects, and leads either to a finding of no significant impact (FONSI) or to an EIS. ${brand.name} helps you find comparable EAs, organize the analysis and draft the document for specialist review.`,
    notice:
      "Looking for a Phase I environmental site assessment? That is a different document — a real-estate due-diligence report on potential contamination. This page covers the environmental assessment federal agencies prepare under NEPA.",
    promptPlaceholder:
      "Describe the federal action your EA covers — agency, location, scale and the alternatives you're weighing…",
    overview: [
      "An environmental assessment (EA) is a concise public document a federal agency prepares under NEPA when a proposed action is not categorically excluded and is not clearly expected to have significant effects. It provides the analysis for deciding whether to prepare an environmental impact statement (EIS) or to issue a finding of no significant impact (FONSI).",
      "Since the 2023 amendments to NEPA, the statute itself sets a 75-page limit for an EA, not counting citations and appendices, and a one-year deadline that can be extended in some circumstances. Agency procedures add their own requirements for format, public involvement and the decision document.",
    ],
    whenUsed: [
      "When an action doesn't fit a categorical exclusion — or extraordinary circumstances rule one out — and its effects are not clearly significant.",
      "When the significance of effects is unknown and the agency needs analysis to decide between a FONSI and an EIS.",
      "Some agencies' procedures list kinds of actions that normally require an EA.",
    ],
    sections: [
      {
        title: "Purpose and need",
        description: "Why the agency is proposing action.",
      },
      {
        title: "Proposed action and alternatives",
        description:
          "The proposed action, the no-action alternative and any other alternatives considered.",
      },
      {
        title: "Affected environment",
        description:
          "Current conditions of the resources the action could affect.",
      },
      {
        title: "Environmental consequences",
        description:
          "The effects of each alternative, resource by resource, including reasonably foreseeable effects.",
      },
      {
        title: "Mitigation and design features",
        description: "Measures that avoid or reduce effects.",
      },
      {
        title: "Consultation and coordination",
        description:
          "The agencies, tribes and members of the public consulted.",
      },
      {
        title: "Preparers and references",
        description: "Who prepared the analysis and the sources it relies on.",
      },
      {
        title: "FONSI or decision to prepare an EIS",
        description:
          "The decision document that closes the EA, issued with the agency's decision record.",
      },
    ],
    topics: [
      {
        id: "fonsi",
        title: "Finding of no significant impact (FONSI)",
        paragraphs: [
          "When the EA shows the proposed action will not have significant effects, the agency issues a FONSI: a short document explaining why an EIS is not needed. It summarizes or attaches the EA and identifies any mitigation the finding depends on, which the agency then commits to carrying out.",
          "Some agencies pair the FONSI with a separate decision document — the Forest Service, for example, issues a decision notice with it. If the EA instead shows effects may be significant, the agency prepares an EIS.",
        ],
      },
      {
        id: "ea-vs-eis",
        title: "EA vs EIS",
        paragraphs: [
          "Both are NEPA documents; they differ in when they are used and how much they cover.",
        ],
        bullets: [
          "Purpose — an EA determines whether effects may be significant; an EIS analyzes an action whose significant effects are reasonably foreseeable.",
          "Length — NEPA sets 75 pages for an EA and 150 pages for an EIS (300 for actions of extraordinary complexity), not counting citations and appendices.",
          "Time — one year for an EA and two years for an EIS, with extensions possible.",
          "Outcome — an EA ends in a FONSI or a decision to prepare an EIS; an EIS ends in a record of decision.",
        ],
        link: {
          label: "Environmental impact statement guide",
          href: routing.documentTemplate({
            slug: SLUGS.environmentalImpactStatement,
          }),
        },
      },
      {
        id: PURPOSE_AND_NEED_ID,
        title: "Purpose and need",
        paragraphs: [
          PURPOSE_AND_NEED_DEFINITION,
          `${PURPOSE_AND_NEED_ALTERNATIVES} In an EA it is usually a few paragraphs, and the same wording carries into the scoping letter and the FONSI.`,
        ],
        link: {
          label: "Purpose and need in an EIS",
          href: `${routing.documentTemplate({ slug: SLUGS.environmentalImpactStatement })}#${PURPOSE_AND_NEED_ID}`,
        },
      },
    ],
    helpfulInputs: [
      "Resource surveys and specialist reports for the project area",
      "The alternatives you are considering, including no action",
      "EAs from comparable projects, for structure and precedent",
    ],
    examplePrompt:
      "I'm a silviculturist on a national forest preparing an EA for a 1,200-acre vegetation restoration project to reduce fuels and restore late-successional habitat.",
    faqs: [
      {
        question: "What is an environmental assessment under NEPA?",
        answer:
          "It is a concise public analysis a federal agency prepares to decide whether a proposed action may have significant environmental effects. If not, the agency issues a FONSI; if so, it prepares an environmental impact statement.",
      },
      {
        question: "What is a FONSI?",
        answer:
          "A finding of no significant impact is the document an agency issues when the EA shows the action will not have significant effects. It explains why an EIS is not needed and identifies any mitigation the finding relies on.",
      },
      {
        question: "Is a NEPA EA the same as a Phase I ESA?",
        answer:
          "No. A Phase I environmental site assessment is a due-diligence report on potential contamination, usually prepared for a property transaction. A NEPA environmental assessment analyzes the effects of a proposed federal action.",
      },
      {
        question: "Where can I find environmental assessment examples?",
        answer:
          "Agencies publish EAs on their project pages — for example Forest Service project pages and BLM's National NEPA Register. The research agent looks for comparable projects and their published EAs so you can use them as precedent; you review each one before it is added to the project.",
      },
      {
        question: `Can ${brand.name} write the specialist analyses?`,
        answer: `${brand.name} drafts the EA's structure and narrative from the information you provide and the research you confirm. Analyses that depend on field data — wildlife, botany, cultural resources, hydrology — need your specialists' input; where it is missing, the draft leaves placeholders instead of inventing findings.`,
      },
    ],
    resources: [
      RESOURCE_LINKS.researchAgent,
      RESOURCE_LINKS.tasksAndMilestones,
      RESOURCE_LINKS.documentsAndSigning,
    ],
  },
  {
    slug: SLUGS.ceqaInitialStudy,
    name: "CEQA Initial Study and MND",
    framework: "CEQA",
    metaTitle:
      "CEQA Initial Study & Mitigated Negative Declaration (Appendix G Checklist)",
    metaDescription: `How a CEQA initial study works, the Appendix G environmental checklist, and when it leads to a negative declaration, an MND or an EIR — and how ${brand.name} drafts it.`,
    heading: "CEQA initial study and mitigated negative declaration",
    lead: `An initial study is the lead agency's first look at whether a California project may have significant environmental effects, and often the basis for a mitigated negative declaration (MND). ${brand.name} drafts the study around the Appendix G checklist and flags each finding for your review.`,
    promptPlaceholder:
      "Describe the California project you're reviewing — lead agency, location and what it involves…",
    overview: [
      "Under the California Environmental Quality Act (CEQA), a lead agency prepares an initial study for a project that is not exempt, to decide which environmental document it needs. If there is no substantial evidence that the project may have a significant effect, the agency can adopt a negative declaration; if revisions the applicant agrees to would avoid or reduce potentially significant effects below significance, a mitigated negative declaration (MND); otherwise an environmental impact report (EIR).",
      "The CEQA Guidelines (section 15063) describe what an initial study contains, and their Appendix G provides a sample environmental checklist that many agencies adapt.",
    ],
    whenUsed: [
      "After the lead agency determines that an activity is a project subject to CEQA and that no exemption applies.",
      "Before choosing between a negative declaration, an MND and an EIR — the study documents the basis for that choice.",
      "When the agency proposes a negative declaration or MND, the initial study is circulated with it for public review.",
    ],
    sections: [
      {
        title: "Project description",
        description:
          "Location, objectives and all the activities that make up the project.",
      },
      {
        title: "Environmental setting",
        description: "Existing conditions on and around the site.",
      },
      {
        title: "Environmental checklist",
        description:
          "The Appendix G topics, answered with the evidence behind each finding.",
      },
      {
        title: "Mitigation measures",
        description: "Ways to avoid or reduce potentially significant effects.",
      },
      {
        title: "Plan and zoning consistency",
        description:
          "Compatibility with the general plan, zoning and other applicable plans.",
      },
      {
        title: "Mandatory findings of significance",
        description: "The overall conclusions CEQA requires.",
      },
      {
        title: "Determination",
        description:
          "The lead agency's choice: negative declaration, MND or EIR.",
      },
      {
        title: "Preparers",
        description: "Who prepared or participated in the study.",
      },
    ],
    topics: [
      {
        id: "appendix-g-checklist",
        title: "The Appendix G environmental checklist",
        paragraphs: [
          "Appendix G of the CEQA Guidelines is a sample initial study checklist. For each topic it asks a set of questions and records one of four answers — potentially significant impact, less than significant with mitigation incorporated, less than significant impact, or no impact — and every answer needs a brief explanation supported by evidence. Its topics:",
        ],
        bullets: [
          "Aesthetics; agriculture and forestry resources; air quality",
          "Biological resources; cultural resources; energy",
          "Geology and soils; greenhouse gas emissions; hazards and hazardous materials",
          "Hydrology and water quality; land use and planning; mineral resources",
          "Noise; population and housing; public services; recreation",
          "Transportation; tribal cultural resources; utilities and service systems; wildfire",
          "Mandatory findings of significance",
        ],
      },
      {
        id: "mitigated-negative-declaration",
        title: "Mitigated negative declaration (MND)",
        paragraphs: [
          "An MND fits when the initial study identifies potentially significant effects, but revisions to the project that the applicant agrees to before public review would avoid them or reduce them to clearly less than significant — and there is no substantial evidence that the revised project may still have a significant effect.",
          "The proposed MND and the initial study are circulated for public review — at least 20 days, or 30 days when state agencies review them through the State Clearinghouse — before the lead agency adopts the MND together with a mitigation monitoring and reporting program (MMRP). If substantial evidence supports a fair argument that the project may have a significant effect, an EIR is required instead.",
        ],
      },
    ],
    helpfulInputs: [
      "The project description and site plans",
      "Technical studies — biological, cultural, noise or traffic — when you have them",
      "A previous initial study from your agency, as a format reference",
    ],
    examplePrompt:
      "I'm an environmental planner at a California water district preparing an initial study for replacing two miles of aging pipeline within existing road rights-of-way.",
    faqs: [
      {
        question: "Does every CEQA project need an initial study?",
        answer:
          "No. Exempt projects don't need one, and a lead agency that can already tell an EIR will be required may go straight to the EIR. The initial study is the usual route when the right document isn't yet clear.",
      },
      {
        question: "What is an MND in CEQA?",
        answer:
          "A mitigated negative declaration is the document a lead agency adopts when the initial study finds potentially significant effects that agreed project revisions and mitigation measures reduce below significance. It is shorter than an EIR and comes with a mitigation monitoring and reporting program.",
      },
      {
        question:
          "What is the difference between a negative declaration and an MND?",
        answer:
          "A negative declaration says the project will not have a significant effect. A mitigated negative declaration says potentially significant effects have been avoided or reduced below significance by revisions and mitigation measures the applicant has agreed to.",
      },
      {
        question: "Does the study cover tribal consultation?",
        answer: `The checklist includes tribal cultural resources. Separately, AB 52 requires lead agencies to offer consultation to California Native American tribes that have asked to be notified, for projects with a negative declaration, MND or EIR. ${brand.name} can draft the consultation letters in the same project.`,
      },
      {
        question: "What is an MMRP?",
        answer: `A mitigation monitoring and reporting program describes how adopted mitigation measures will be carried out and tracked. CEQA requires one when an agency adopts an MND, or certifies an EIR, with mitigation measures. ${brand.name} can draft it from the measures in your study.`,
      },
      {
        question: "What if the project also needs NEPA review?",
        answer: `Tell ${brand.name} about the federal nexus — for example federal funding or a federal permit — and it plans both reviews. Agencies often prepare joint CEQA and NEPA documents in that case.`,
      },
    ],
    resources: [
      RESOURCE_LINKS.quickstart,
      RESOURCE_LINKS.researchAgent,
      RESOURCE_LINKS.documentsAndSigning,
    ],
  },
  {
    slug: SLUGS.environmentalImpactStatement,
    name: "Environmental Impact Statement",
    framework: "NEPA",
    metaTitle:
      "Environmental Impact Statement (EIS) Template, Outline & Examples",
    metaDescription: `What an environmental impact statement is, when NEPA requires one, a standard EIS outline from purpose and need to the record of decision, and how ${brand.name} helps.`,
    heading: "Environmental impact statement (EIS)",
    lead: `An environmental impact statement is the most detailed level of NEPA review, prepared when a federal action is expected to have significant environmental effects. ${brand.name} helps you plan the EIS, find comparable statements and draft chapters and notices for your team to review.`,
    promptPlaceholder:
      "Describe the proposed action that needs an EIS — agency, location and scope…",
    overview: [
      "Under the National Environmental Policy Act (NEPA), a federal agency prepares an environmental impact statement (EIS) for a proposed action that has a reasonably foreseeable significant effect on the quality of the human environment. The statement analyzes the effects of the proposed action and a reasonable range of alternatives, and informs both the agency's decision and the public.",
      "NEPA requires the statement to address the reasonably foreseeable effects of the proposed action, any adverse effects that cannot be avoided, a reasonable range of technically and economically feasible alternatives that meet the purpose and need (including the effects of not acting), the relationship between short-term uses and long-term productivity, and any irreversible and irretrievable commitments of federal resources. Since 2023 the statute also sets a 150-page limit (300 for actions of extraordinary complexity), not counting citations and appendices, and a two-year deadline.",
    ],
    whenUsed: [
      "When significant effects are reasonably foreseeable from the start, or when an EA finds that effects may be significant.",
      "For actions that an agency's NEPA procedures list as normally requiring an EIS — often large infrastructure, energy or land management projects.",
      "Formal scoping begins with a notice of intent in the Federal Register; a draft EIS is issued for public comment before the final EIS and the record of decision.",
    ],
    sections: [
      {
        title: "Cover sheet and summary",
        description:
          "The lead and cooperating agencies, the action, and the major conclusions and areas of controversy.",
      },
      {
        title: "Purpose and need",
        description: "Why the agency is proposing action.",
      },
      {
        title: "Alternatives",
        description:
          "The proposed action, no action and other reasonable alternatives, plus those dropped from detailed study and why.",
      },
      {
        title: "Affected environment",
        description:
          "Current conditions of the resources the alternatives could affect.",
      },
      {
        title: "Environmental consequences",
        description:
          "The reasonably foreseeable effects of each alternative, resource by resource.",
      },
      {
        title: "Mitigation and monitoring",
        description: "Measures that avoid, minimize or offset effects.",
      },
      {
        title: "Consultation and preparers",
        description:
          "The agencies, tribes and public consulted, and who prepared the statement.",
      },
      {
        title: "Comments and responses",
        description:
          "In the final EIS, the agency's responses to substantive comments on the draft.",
      },
    ],
    topics: [
      {
        id: "eis-process",
        title: "The EIS process at a glance",
        paragraphs: [
          "Agencies set the details in their own procedures, but most EISs follow the same arc:",
        ],
        bullets: [
          "Notice of intent and scoping — the agency announces the EIS in the Federal Register and gathers issues and alternatives.",
          "Draft EIS — the full analysis, released for public comment.",
          "Final EIS — revised analysis with responses to comments.",
          "Record of decision — the agency's decision and the commitments that come with it.",
        ],
      },
      {
        id: "record-of-decision",
        title: "Record of decision (ROD)",
        paragraphs: [
          "After the final EIS, the agency issues a record of decision: a concise public document stating what it decided, the alternatives it considered, the factors it weighed, and the mitigation and monitoring it commits to. Agencies set its timing and format in their own procedures, and some issue a combined final EIS and record of decision.",
        ],
      },
      {
        id: PURPOSE_AND_NEED_ID,
        title: "Purpose and need",
        paragraphs: [
          PURPOSE_AND_NEED_DEFINITION,
          PURPOSE_AND_NEED_ALTERNATIVES,
        ],
        link: {
          label: "Purpose and need in an EA",
          href: `${routing.documentTemplate({ slug: SLUGS.environmentalAssessment })}#${PURPOSE_AND_NEED_ID}`,
        },
      },
    ],
    helpfulInputs: [
      "The proposed action and the alternatives already on the table",
      "Existing studies, data and specialist reports for the affected resources",
      "Published EISs for comparable projects, as precedent",
    ],
    examplePrompt:
      "I'm the NEPA lead for a proposed 12-mile highway bypass that our FHWA division office expects will need an EIS. I need to plan the EIS and draft the notice of intent and the purpose and need chapter.",
    faqs: [
      {
        question: "What is an environmental impact statement?",
        answer:
          "It is the detailed analysis a federal agency prepares under NEPA for a proposed action with reasonably foreseeable significant environmental effects. It compares the proposed action with reasonable alternatives, including no action, before the agency decides.",
      },
      {
        question: "What is the difference between an EIS and an EA?",
        answer:
          "An EA is a shorter analysis used to determine whether effects may be significant, and ends in a FONSI or a decision to prepare an EIS. An EIS is prepared when significant effects are reasonably foreseeable, with formal scoping, a public draft and a record of decision.",
      },
      {
        question: "Where can I find EIS examples?",
        answer: `EPA keeps a public database of the EISs federal agencies file, and agencies post their statements on project pages. ${brand.name}'s research agent looks for EISs from comparable projects so you can use them as precedent; you review each one before it is added.`,
      },
      {
        question: "What is a record of decision?",
        answer:
          "It is the public document an agency issues after the final EIS, stating its decision, the alternatives considered and the mitigation it commits to.",
      },
      {
        question: `Can ${brand.name} write a whole EIS?`,
        answer: `It helps plan the work and drafts chapters, notices and correspondence from confirmed project facts and your specialists' data; the analysis and conclusions remain your team's. Gaps are left as placeholders instead of invented findings.`,
      },
    ],
    resources: [
      RESOURCE_LINKS.researchAgent,
      RESOURCE_LINKS.tasksAndMilestones,
      RESOURCE_LINKS.documentsAndSigning,
    ],
  },
];

export const getDocumentTemplate = (slug: string) =>
  DOCUMENT_TEMPLATES.find((template) => template.slug === slug);
