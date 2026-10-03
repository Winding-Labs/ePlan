import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

// Reused source keys: none. Every CEQA source below is new to this page.

const READ = "2026-10-02";

export const sources = {
  isCcr15070: {
    title:
      "14 CCR § 15070 - Decision to Prepare a Negative or Mitigated Negative Declaration (CEQA Guidelines)",
    publisher: "California Code of Regulations, Title 14 (Westlaw)",
    url: "https://govt.westlaw.com/calregs/Document/I87FDA8465B4D11EC976B000D3A7C4BC3",
    read: READ,
  },
  isCcr15071: {
    title: "14 CCR § 15071 - Contents (negative declaration) (CEQA Guidelines)",
    publisher: "California Code of Regulations, Title 14 (Westlaw)",
    url: "https://govt.westlaw.com/calregs/Document/I8802633B5B4D11EC976B000D3A7C4BC3",
    published: "2005-10-06",
    read: READ,
  },
  isCcr15072: {
    title:
      "14 CCR § 15072 - Notice of Intent to Adopt a Negative Declaration or Mitigated Negative Declaration (CEQA Guidelines)",
    publisher: "California Code of Regulations, Title 14 (Westlaw)",
    url: "https://govt.westlaw.com/calregs/Document/I880C00265B4D11EC976B000D3A7C4BC3",
    published: "2018-12-28",
    read: READ,
  },
  isCcr15073: {
    title:
      "14 CCR § 15073 - Public Review of a Proposed Negative Declaration or Mitigated Negative Declaration (CEQA Guidelines)",
    publisher: "California Code of Regulations, Title 14 (Westlaw)",
    url: "https://govt.westlaw.com/calregs/Document/I881576045B4D11EC976B000D3A7C4BC3",
    published: "2007-07-27",
    read: READ,
  },
  isCcr150735: {
    title:
      "14 CCR § 15073.5 - Recirculation of a Negative Declaration Prior to Adoption (CEQA Guidelines)",
    publisher: "California Code of Regulations, Title 14 (Westlaw)",
    url: "https://govt.westlaw.com/calregs/Document/I881CA1F35B4D11EC976B000D3A7C4BC3",
    published: "2005-10-06",
    read: READ,
  },
  isCcr15074: {
    title:
      "14 CCR § 15074 - Consideration and Adoption of a Negative Declaration or Mitigated Negative Declaration (CEQA Guidelines)",
    publisher: "California Code of Regulations, Title 14 (Westlaw)",
    url: "https://govt.westlaw.com/calregs/Document/I88215CEB5B4D11EC976B000D3A7C4BC3",
    published: "2007-07-27",
    read: READ,
  },
  isCcr15075: {
    title:
      "14 CCR § 15075 - Notice of Determination on a Project for Which a Proposed Negative or Mitigated Negative Declaration Has Been Approved (CEQA Guidelines)",
    publisher: "California Code of Regulations, Title 14 (Westlaw)",
    url: "https://govt.westlaw.com/calregs/Document/I883225CB5B4D11EC976B000D3A7C4BC3",
    published: "2018-12-28",
    read: READ,
  },
  isAppG: {
    title:
      "14 CCR Div. 6, Ch. 3, Appendix G - Environmental Checklist Form (CEQA Guidelines)",
    publisher: "California Code of Regulations, Title 14 (Westlaw)",
    url: "https://govt.westlaw.com/calregs/Document/I8EA91DA75B4D11EC976B000D3A7C4BC3",
    published: "2018-12-28",
    read: READ,
  },
  isPrc210816: {
    title:
      "Public Resources Code § 21081.6 - Mitigation reporting or monitoring program",
    publisher: "California Legislative Information",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=21081.6.&lawCode=PRC",
    published: "1994-10-01",
    read: READ,
  },
  isPrc21091: {
    title:
      "Public Resources Code § 21091 - Public review periods for EIRs and negative declarations",
    publisher: "California Legislative Information",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=21091.&lawCode=PRC",
    published: "2022-01-01",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/ceqa-initial-study",
  parent: "/for/ceqa",
  family: "ceqa",
  name: "Initial study",
  title: "CEQA Initial Study: Appendix G, ND and MND Guide",
  description:
    "What a CEQA initial study contains, the Appendix G checklist, when it leads to a negative declaration, an MND or an EIR, and review periods, cited.",
  eyebrow: "Initial study",
  h1: "The CEQA initial study: Appendix G checklist, negative declarations and MNDs",
  primaryKeyword: "ceqa initial study",
  secondaryKeywords: [
    "mitigated negative declaration",
    "negative declaration",
    "ceqa appendix g",
    "appendix g checklist",
    "mitigation monitoring and reporting program",
    "initial study checklist",
  ],
  document: "Initial Study",
  answer:
    "A CEQA initial study is the preliminary analysis a lead agency conducts, after its preliminary review of a project, to determine whether the project may have a significant effect on the environment; it gives the agency the basis for choosing between an environmental impact report (EIR) and a negative declaration [[eirCcr15063]]. If the study finds no substantial evidence of a significant effect, the agency prepares a negative declaration; if applicant-agreed revisions would clearly avoid or mitigate the effects it identifies, a mitigated negative declaration (MND) [[isCcr15070]]. Substantial evidence that the project may have a significant effect requires an EIR [[eirCcr15064]].",
  glance: [
    {
      label: "Legal basis",
      value: "CEQA Guidelines section 15063, 14 CCR [[eirCcr15063]]",
    },
    {
      label: "Prepared by",
      value:
        "The lead agency, which may use staff, a contractor or an applicant's draft; the released study must reflect its independent judgment [[eirCcr15063]] [[eirCcr15084]]",
    },
    {
      label: "Leads to",
      value:
        "A negative declaration, a mitigated negative declaration or an EIR [[eirCcr15063]] [[isCcr15070]]",
    },
    {
      label: "Checklist",
      value:
        "Appendix G sample form: 20 environmental topics plus mandatory findings of significance [[isAppG]]",
    },
    {
      label: "Public review",
      value:
        "At least 20 days; at least 30 when sent to the State Clearinghouse [[isCcr15073]] [[isPrc21091]]",
    },
    {
      label: "Level of detail",
      value: "Brief; not the level of detail of an EIR [[eirCcr15063]]",
    },
  ],
  hero: {
    prefix: "Draft an",
    placeholder: "I'm preparing an initial study for…",
    examples: [
      {
        emoji: "🍇",
        label: "Winery Expansion",
        heading: "Initial Study for Winery Expansion",
        eyebrow: "COUNTY PLANNING",
        prompt:
          "I'm a senior planner with the Alder County Planning and Building Department preparing an initial study for a winery expanding production to 50,000 cases a year with a new 18,000-square-foot barrel building on a 60-acre vineyard parcel.",
      },
      {
        emoji: "💧",
        label: "Pipeline Replacement",
        heading: "Initial Study for Pipeline Replacement",
        eyebrow: "WATER DISTRICT",
        prompt:
          "I'm an environmental planner at a California water district preparing an initial study for replacing 2 miles of aging water main within existing road rights-of-way.",
      },
      {
        emoji: "🏘️",
        label: "Infill Housing",
        heading: "Initial Study for Infill Housing",
        eyebrow: "CITY PLANNING",
        prompt:
          "I'm a city planner reviewing a 60-unit infill apartment project that misses the AB 130 housing exemption only because it would demolish a locally listed historic building.",
      },
      {
        emoji: "🛣️",
        label: "Shoulder Widening",
        heading: "Initial Study for Shoulder Widening",
        eyebrow: "STATE HIGHWAY",
        prompt:
          "I'm an environmental planner at a Caltrans district office preparing an initial study for widening the shoulders along 4 miles of a rural two-lane state highway.",
      },
      {
        emoji: "🏫",
        label: "Classroom Building",
        heading: "Initial Study for a Classroom Building",
        eyebrow: "SCHOOL DISTRICT",
        prompt:
          "I'm a facilities planner at a unified school district preparing an initial study for a two-story classroom building and an 80-space parking lot on an existing high school campus.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the initial study with the project description, setting and Appendix G checklist; every fact it can't confirm is marked for you.",
    mock: {
      project: "Ridgeline Cellars Winery Expansion",
      documentTitle: "Ridgeline Cellars Winery Expansion — Initial Study",
      summary:
        "The Ridgeline Cellars Winery Expansion — Initial Study draft is ready, following the Appendix G checklist. A few details still need your input:",
      missing: [
        "Planning file number",
        "Zoning district",
        "Biological survey results",
        "Tribal consultation status",
        "Lead agency determination",
      ],
      letterhead: {
        left: ["County of Alder", "Planning and Building Department"],
        right: [
          "Initial Study",
          "Ridgeline Cellars Winery Expansion",
          "Alder County, California",
        ],
      },
      meta: [
        "File No.: [INSERT: planning file number]",
        "Date: October 2, 2026",
      ],
      paragraphs: [
        "Project description: the applicant proposes to expand production at Ridgeline Cellars to 50,000 cases a year and build an 18,000-square-foot barrel building on a 60-acre vineyard parcel zoned [INSERT: zoning district].",
        "Environmental setting: the parcel is surrounded by vineyards and rural residences. Checklist section IV, Biological Resources, relies on [INSERT: biological survey results and date].",
        "Determination: on the basis of this initial evaluation, [INSERT: lead agency determination].",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "A reference initial study from an analog project the research agent finds, for example on CEQAnet",
      manual: "Copy a past initial study and rewrite it by hand",
    },
    {
      label: "Missing facts",
      eplan: "Left as highlighted [INSERT: …] placeholders for you to fill",
      manual: "Tracked by hand in comments or a separate list",
    },
  ],
  sections: [
    {
      heading: "When does a lead agency prepare an initial study?",
      paragraphs: [
        "After its preliminary review of a project, the lead agency conducts an initial study to determine whether the project may have a significant effect on the environment, considering all phases of planning, implementation and operation. If the agency can already tell that an EIR will clearly be required, an initial study is not required, though it may still be useful [[eirCcr15063]].",
        "Once it decides a study is needed, the lead agency consults informally with responsible and trustee agencies on whether an EIR or a negative declaration fits, and may require a private applicant to submit data [[eirCcr15063]]. Before releasing a negative declaration, MND or EIR, it must begin consultation with any traditionally and culturally affiliated California Native American tribe that asked in writing to be notified and requested consultation within 30 days of receiving the agency's formal notice [[ceqaPrc21080dot3dot1]].",
        "Two 2025 laws changed the picture for housing. AB 130 added a statutory exemption for qualifying infill housing projects [[ceqaAb130]]. SB 131 provides that when a housing development project would be exempt but for a single condition, an initial study or EIR need only examine the effects caused solely by that condition [[ceqaSb131]]; the rule, as amended later in 2025, is Public Resources Code section 21080.1(b) [[ceqaPrc21080dot1]].",
      ],
    },
    {
      heading: "What does a CEQA initial study contain?",
      paragraphs: [
        "Section 15063(d) lists six contents, in brief form. The study may rely on expert opinion supported by facts, technical studies or other substantial evidence, but it does not need an EIR's level of detail. A lead agency may also use a NEPA environmental assessment or similar analysis to meet these requirements [[eirCcr15063]].",
        "The agency can prepare the study with its own staff, a contractor, or a draft from the applicant or the applicant's consultant [[eirCcr15084]], but the initial study released for public review must reflect the lead agency's independent judgment [[eirCcr15063]].",
      ],
      bullets: [
        "A description of the project, including its location [[eirCcr15063]]",
        "The environmental setting",
        "The environmental effects, identified by a checklist, matrix or other method, with each entry briefly explained to show some evidence supports it",
        "Ways to mitigate any significant effects identified",
        "Whether the project is consistent with zoning, plans and other land use controls",
        "The names of the people who prepared or participated in the study",
      ],
    },
    {
      heading: "What is the CEQA Appendix G checklist?",
      paragraphs: [
        "Appendix G is the sample environmental checklist form in the CEQA Guidelines. Agencies may tailor it or use a different format, but should normally address the checklist questions relevant to the project, and must also consider substantial evidence of impacts the form does not list. Its sample questions do not necessarily represent thresholds of significance [[isAppG]]. Section 15063(f) points to the sample forms in Appendices G and H, which together can serve as the initial study when each entry is briefly explained [[eirCcr15063]].",
        "Each question is answered in one of four columns: potentially significant impact, less than significant with mitigation incorporated, less than significant impact, or no impact. Every answer needs a brief explanation except a no-impact answer adequately supported by the sources cited, and answers must account for off-site, cumulative, indirect and construction impacts [[isAppG]].",
      ],
      bullets: [
        "Aesthetics, agriculture and forestry resources, air quality, biological resources, cultural resources [[isAppG]]",
        "Energy, geology and soils, greenhouse gas emissions, hazards and hazardous materials, hydrology and water quality",
        "Land use and planning, mineral resources, noise, population and housing, public services",
        "Recreation, transportation, tribal cultural resources, utilities and service systems, wildfire",
        "Mandatory findings of significance",
      ],
    },
    {
      heading: "Negative declaration or mitigated negative declaration?",
      paragraphs: [
        "An agency prepares a proposed negative declaration when the initial study shows no substantial evidence, in light of the whole record, that the project may have a significant effect. It prepares a mitigated negative declaration when the study identifies potentially significant effects, but revisions made or agreed to by the applicant before public release would avoid or mitigate them to a point where clearly no significant effect would occur, and no substantial evidence shows the revised project may still have one [[isCcr15070]] [[ceqaPrc21080]].",
        "The negative declaration circulated for review includes a brief project description, the location and proponent, a proposed finding of no significant effect, the attached initial study, and any mitigation measures included in the project [[isCcr15071]]. Appendix G's determination block also covers an EIR, an EIR limited to effects not addressed earlier, and a finding that nothing further is required because an earlier EIR or negative declaration already covered every potentially significant effect [[isAppG]].",
      ],
    },
    {
      heading: "When is an EIR required instead? The fair argument standard",
      paragraphs: [
        "If there is substantial evidence, in light of the whole record, that a project may have a significant effect, the lead agency prepares an EIR [[ceqaPrc21080]]. The Guidelines put it another way: an agency presented with a fair argument that a project may have a significant effect must prepare an EIR even if it also has other substantial evidence that the project will not [[eirCcr15064]]. On the Appendix G form, one or more potentially significant impact entries at the time of determination means an EIR is required [[isAppG]].",
        "Substantial evidence includes facts, reasonable assumptions predicated on facts, and expert opinion supported by facts; argument, speculation, unsubstantiated opinion and clearly inaccurate evidence do not qualify, and public controversy alone does not require an EIR. In marginal cases, when experts disagree, with facts behind them, about whether an effect is significant, the agency treats it as significant [[eirCcr15064]].",
      ],
    },
    {
      heading: "How long is the public review period for an MND?",
      paragraphs: [
        "The lead agency sends a notice of intent to adopt to the public, responsible and trustee agencies and the county clerk, mails it to anyone who asked in writing, and gives notice in at least one more way: a newspaper notice, posting on and off site, or mail to contiguous owners and occupants [[isCcr15072]]. Review lasts at least 20 days, or at least 30 days when the document goes to the State Clearinghouse for state agency review [[isCcr15073]] [[isPrc21091]].",
        "A negative declaration that must be substantially revised after notice, for example to add mitigation for a new avoidable significant effect, is recirculated before adoption [[isCcr150735]]. The decision-making body adopts it only if the whole record, including comments, shows no substantial evidence of a significant effect and the document reflects the agency's independent judgment [[isCcr15074]].",
        "Within five working days of approving the project, the lead agency files a notice of determination. For a local agency, filing and posting with the county clerk start a 30-day statute of limitations on CEQA challenges [[isCcr15075]].",
      ],
    },
    {
      heading: "The mitigation monitoring and reporting program (MMRP)",
      paragraphs: [
        "When it adopts an MND, the lead agency also adopts a program for reporting on or monitoring the project changes and mitigation measures it required [[isCcr15074]]. The program is designed to ensure compliance during project implementation, and mitigation measures must be fully enforceable through permit conditions, agreements or other measures [[isPrc210816]].",
        "The agency chooses monitoring, reporting or both. Reporting suits readily measurable measures; monitoring suits complex ones such as wetlands restoration or archaeological protection. The agency may delegate the work to another public agency or a private entity, but remains responsible for implementation until the measures are complete [[eirCcr15097]].",
      ],
    },
  ],
  outline: {
    heading: "Initial study checklist: the sections",
    intro:
      "Built from the contents required by CEQA Guidelines section 15063(d) and the Appendix G sample form, which agencies may tailor [[eirCcr15063]] [[isAppG]]. Use your agency's format if it has one.",
    items: [
      {
        title: "Project information and description",
        detail:
          "Title, lead agency, contact, location, sponsor, general plan designation and zoning, and the whole action, including later phases and off-site features [[isAppG]].",
      },
      {
        title: "Environmental setting",
        detail:
          "Surrounding land uses and setting, described briefly [[eirCcr15063]] [[isAppG]].",
      },
      {
        title: "Other approvals and tribal consultation",
        detail:
          "Other public agencies whose approval is required, and whether affiliated tribes requested consultation under Public Resources Code section 21080.3.1 [[isAppG]].",
      },
      {
        title: "Environmental factors potentially affected",
        detail:
          "The topics with at least one potentially significant impact, checked off on the form [[isAppG]].",
      },
      {
        title: "Determination",
        detail:
          "The lead agency's signed choice: negative declaration, MND, EIR, a focused EIR, or reliance on an earlier document [[isAppG]].",
      },
      {
        title: "Evaluation of environmental impacts",
        detail:
          "Each checklist question answered in one of four columns, with a brief explanation, the threshold used and any mitigation identified [[isAppG]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "Ways to mitigate the significant effects identified, and how each brings an effect below significance [[eirCcr15063]] [[isAppG]].",
      },
      {
        title: "Mandatory findings of significance",
        detail:
          "Potential to substantially degrade the environment, including habitat, species and examples of California history or prehistory; cumulatively considerable impacts; and substantial adverse effects on human beings [[isAppG]].",
      },
      {
        title: "Plan consistency, sources and preparers",
        detail:
          "Consistency with zoning, plans and other land use controls, the sources relied on, and who prepared or participated in the study [[eirCcr15063]] [[isAppG]].",
      },
    ],
  },
  faq: [
    {
      question:
        "What is the difference between a negative declaration and a mitigated negative declaration?",
      answer:
        "A negative declaration is adopted when the initial study finds no substantial evidence that the project may have a significant effect. A mitigated negative declaration is used when the study finds potentially significant effects, but revisions the applicant makes or agrees to before public review would clearly avoid or reduce them below significance, and no substantial evidence shows the revised project may still have a significant effect.",
    },
    {
      question:
        "How long is the public review period for an initial study and MND?",
      answer:
        "At least 20 days. It is at least 30 days when the document goes to the State Clearinghouse for state agency review, for example when a state agency is a responsible or trustee agency or the project is of statewide, regional or areawide significance.",
    },
    {
      question: "Is the CEQA Appendix G checklist required?",
      answer:
        "No. Appendix G is a sample form that agencies may tailor or replace with their own format. Agencies should normally address the checklist questions relevant to the project, and each answer needs a brief explanation unless it is a no-impact answer adequately supported by the sources the agency cites.",
    },
    {
      question: "Does every CEQA project need an initial study?",
      answer:
        "No. A project that is exempt from CEQA does not need one, and when a lead agency can already tell that an EIR will clearly be required, it may go straight to the EIR, although an initial study may still be useful.",
    },
    {
      question: "Can a consultant or the applicant prepare an initial study?",
      answer:
        "Yes. The lead agency may use its own staff, contract with another entity, or accept a draft prepared by the applicant or the applicant's consultant. The initial study released for public review must reflect the lead agency's independent judgment.",
    },
    {
      question: "Who signs an initial study drafted in ePlan?",
      answer:
        "Your agency. ePlan drafts the initial study, marks every fact it could not confirm, and downloads it as Word; it does not file anything on CEQAnet. Your staff complete the determination, and the lead agency decides whether to adopt a negative declaration or MND or to prepare an EIR.",
    },
  ],
};
