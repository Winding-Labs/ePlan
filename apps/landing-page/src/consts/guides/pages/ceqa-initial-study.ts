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
    "A CEQA initial study is the lead agency's preliminary analysis of whether a project may have a significant environmental effect [[eirCcr15063]]. It leads to a negative declaration if there is no substantial evidence of such an effect, a mitigated negative declaration (MND) if revisions the applicant agrees to clearly avoid it [[isCcr15070]], or an environmental impact report (EIR) if such evidence exists [[eirCcr15064]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "CEQA Guidelines §§ 15063 (initial study) and 15070–15075 (negative declarations), 14 CCR [[eirCcr15063]] [[isCcr15070]]",
    },
    {
      label: "Prepared by",
      value:
        "Agency staff, a contractor or the applicant; it must reflect the lead agency's independent judgment [[eirCcr15084]] [[eirCcr15063]]",
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
      label: "After approval",
      value:
        "Notice of determination within five working days; starts a 30-day limit on lawsuits [[isCcr15075]]",
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
      heading: "What is the CEQA Appendix G checklist?",
      paragraphs: [
        "Appendix G is the CEQA Guidelines' sample checklist; with each entry briefly explained, the sample forms can serve as the initial study [[eirCcr15063]]. Agencies may tailor it, but should answer the questions relevant to the project and consider impacts it does not list; its questions are not necessarily thresholds of significance [[isAppG]].",
        "Each question is answered in one of four columns: potentially significant impact, less than significant with mitigation incorporated, less than significant impact, or no impact. Every answer needs a brief explanation, except a no-impact answer the cited sources adequately support, and must account for off-site, cumulative, indirect and construction impacts. The topics [[isAppG]]:",
      ],
      bullets: [
        "Aesthetics, agriculture and forestry resources, air quality, biological resources, cultural resources",
        "Energy, geology and soils, greenhouse gas emissions, hazards and hazardous materials, hydrology and water quality",
        "Land use and planning, mineral resources, noise, population and housing, public services",
        "Recreation, transportation, tribal cultural resources, utilities and service systems, wildfire",
        "Mandatory findings of significance",
      ],
    },
    {
      heading: "How long is the public review period for an MND?",
      paragraphs: [
        "Review lasts at least 20 days, or 30 when state agencies review it through the State Clearinghouse [[isCcr15073]] [[isPrc21091]]. The proposed negative declaration or MND circulates with the initial study attached [[isCcr15071]], under a notice of intent to adopt sent to the public, responsible and trustee agencies and the county clerk, plus a newspaper notice, site posting or mail to neighbors [[isCcr15072]].",
        "A document substantially revised after notice, for example to add new mitigation, is recirculated [[isCcr150735]]. The decision-making body adopts it only if the whole record, comments included, shows no substantial evidence of a significant effect and the document reflects the agency's independent judgment [[isCcr15074]].",
      ],
    },
    {
      heading: "The mitigation monitoring and reporting program (MMRP)",
      paragraphs: [
        "When it adopts an MND, the lead agency also adopts a program for reporting on or monitoring the mitigation it required [[isCcr15074]], and each measure must be fully enforceable through permit conditions, agreements or other means [[isPrc210816]]. Reporting suits readily measurable measures, monitoring complex ones such as wetlands restoration, and the agency stays responsible even if it delegates the work [[eirCcr15097]].",
      ],
    },
    {
      heading: "When is an EIR required instead of an MND?",
      paragraphs: [
        "An agency presented with a fair argument, backed by substantial evidence, that a project may have a significant effect must prepare an EIR, even if other substantial evidence says it will not [[eirCcr15064]] [[ceqaPrc21080]]. On the Appendix G form, any potentially significant impact left at the time of determination means an EIR [[isAppG]]. If an EIR is clearly required from the start, the initial study can be skipped [[eirCcr15063]].",
        "Substantial evidence means facts, reasonable assumptions based on facts and expert opinion supported by facts, not argument, speculation or public controversy alone. Where experts disagree, with facts behind them, the agency treats the effect as significant [[eirCcr15064]].",
      ],
    },
  ],
  outline: {
    heading: "Initial study checklist: the sections",
    intro:
      "Built from CEQA Guidelines section 15063(d) and the Appendix G sample form, and kept brief: an initial study does not need an EIR's level of detail [[eirCcr15063]] [[isAppG]]. Use your agency's format if it has one.",
    items: [
      {
        title: "Project information and description",
        detail:
          "Title, lead agency, location, sponsor, general plan designation and zoning, and the whole action, including later phases and off-site features [[isAppG]].",
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
          "Each checklist question answered with a brief explanation, the threshold used and any mitigation identified [[isAppG]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "Ways to mitigate the significant effects identified, and how each brings an effect below significance [[eirCcr15063]] [[isAppG]].",
      },
      {
        title: "Mandatory findings of significance",
        detail:
          "Potential to substantially degrade the environment, cumulatively considerable impacts, and substantial adverse effects on human beings [[isAppG]].",
      },
      {
        title: "Plan consistency, sources and preparers",
        detail:
          "Consistency with zoning and plans, the sources relied on, and who prepared the study [[eirCcr15063]] [[isAppG]].",
      },
    ],
  },
  faq: [
    {
      question: "Does every CEQA project need an initial study?",
      answer:
        "No. A project that is exempt from CEQA does not need one, and when a lead agency can already tell that an EIR will clearly be required, it may go straight to the EIR.",
    },
    {
      question: "Is the CEQA Appendix G checklist required?",
      answer:
        "No. It is a sample form that agencies may tailor or replace with their own format, as long as the study covers the questions relevant to the project and explains each answer briefly.",
    },
    {
      question: "Can a consultant or the applicant prepare an initial study?",
      answer:
        "Yes. The lead agency may use its own staff, a contractor, or a draft from the applicant or its consultant, but the study it releases must reflect its own independent judgment.",
    },
    {
      question: "Who signs an initial study drafted in ePlan?",
      answer:
        "Your agency. ePlan drafts the initial study as a Word file and marks every fact it could not confirm; it files nothing on CEQAnet. Your staff complete the determination, and the lead agency decides what to adopt or prepare.",
    },
  ],
};
