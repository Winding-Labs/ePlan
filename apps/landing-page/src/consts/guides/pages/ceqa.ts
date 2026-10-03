import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

/**
 * /for/ceqa — the CEQA hub page.
 *
 * Reuses no existing source keys. Defines the shared CEQA sources: the
 * ceqa-and-nepa page (ceqa-and-nepa.ts) cites several of the keys below
 * without redefining them.
 *
 * CEQA Guidelines sections are cited to Cornell LII's copy of Cal. Code Regs.,
 * tit. 14, because govt.westlaw.com refuses automated reads; LCI's own
 * Guidelines page points readers to an unofficial full-text copy as well.
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
  ceqaPrc21050: PRC(
    "21050",
    "Short title (California Environmental Quality Act)",
  ),
  ceqaPrc21002: PRC(
    "21002",
    "Approval of projects; feasible alternatives or mitigation measures",
  ),
  ceqaPrc21002dot1: PRC(
    "21002.1",
    "Use of environmental impact reports; policy",
    "1994-09-30",
  ),
  ceqaPrc21063: PRC("21063", "Public agency"),
  ceqaPrc21065: PRC("21065", "Project", "1994-09-30"),
  ceqaPrc21067: PRC("21067", "Lead agency"),
  ceqaPrc21080: PRC(
    "21080",
    "Projects subject to CEQA; negative declarations; environmental impact reports",
    "2025-09-17",
  ),
  ceqaPrc21080dot1: PRC(
    "21080.1",
    "Lead agency determination; housing projects ineligible for an exemption by a single condition",
    "2025-10-11",
  ),
  ceqaPrc21080dot3dot1: PRC(
    "21080.3.1",
    "Consultation with California Native American tribes",
    "2015-01-01",
  ),
  ceqaPrc21080dot66: PRC(
    "21080.66",
    "Exemption for housing development projects on infill sites",
    "2025-10-11",
  ),
  ceqaPrc21081: PRC(
    "21081",
    "Findings required before approving a project with significant effects",
    "1994-10-01",
  ),
  ceqaPrc21082dot1: PRC(
    "21082.1",
    "Preparation of environmental documents; independent judgment; State Clearinghouse submission",
    "2022-01-01",
  ),
  ceqaPrc21100: PRC(
    "21100",
    "Environmental impact report; required contents",
    "1994-09-30",
  ),
  ceqaPrc21108: PRC(
    "21108",
    "State agencies; notice of determination and notice of exemption",
    "2023-01-01",
  ),
  ceqaPrc21151dot5: PRC(
    "21151.5",
    "Local agencies; time limits for environmental impact reports and negative declarations",
    "1997-01-01",
  ),
  ceqaPrc21152: PRC(
    "21152",
    "Local agencies; notice of determination and notice of exemption",
    "2024-01-01",
  ),
  ceqaPrc21167: PRC(
    "21167",
    "Time limits for actions challenging agency decisions",
    "2023-01-01",
  ),
  ceqaAb130: {
    title:
      "Assembly Bill No. 130 (2025-2026), Chapter 22, Statutes of 2025 (Housing), chaptered text",
    publisher:
      "California Legislative Information (leginfo.legislature.ca.gov)",
    url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB130",
    published: "2025-06-30",
    read: READ,
  },
  ceqaSb131: {
    title:
      "Senate Bill No. 131 (2025-2026), Chapter 24, Statutes of 2025 (Public resources), chaptered text",
    publisher:
      "California Legislative Information (leginfo.legislature.ca.gov)",
    url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB131",
    published: "2025-06-30",
    read: READ,
  },
  ceqaGuide15000: CCR("15000", "Authority"),
  ceqaGuide15002: CCR("15002", "General concepts"),
  ceqaGuide15051: CCR("15051", "Criteria for identifying the lead agency"),
  ceqaGuide15061: CCR("15061", "Review for exemption"),
  ceqaGuide15062: CCR("15062", "Notice of exemption"),
  ceqaGuide15063: CCR("15063", "Initial study"),
  ceqaGuide15082: CCR(
    "15082",
    "Notice of preparation and determination of scope of EIR",
  ),
  ceqaGuide15090: CCR("15090", "Certification of the final EIR"),
  ceqaGuide15091: CCR("15091", "Findings"),
  ceqaGuide15093: CCR("15093", "Statement of overriding considerations"),
  ceqaGuide15097: CCR("15097", "Mitigation monitoring or reporting"),
  ceqaGuide15105: CCR(
    "15105",
    "Public review period for a draft EIR or a proposed negative declaration or mitigated negative declaration",
  ),
  ceqaGuide15107: CCR(
    "15107",
    "Completion of negative declaration for certain private projects",
  ),
  ceqaGuide15108: CCR("15108", "Completion and certification of EIR"),
  ceqaGuide15132: CCR("15132", "Contents of final environmental impact report"),
  ceqaGuide15141: CCR("15141", "Page limits"),
  ceqaGuide15300: CCR("15300", "Categorical exemptions"),
  ceqaGuide15381: CCR("15381", "Responsible agency"),
  ceqaGuide15386: CCR("15386", "Trustee agency"),
  ceqaLciStart: {
    title: "Getting Started with CEQA",
    publisher: "Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/ceqa/getting-started/",
    read: READ,
  },
  ceqaLciGuidelines: {
    title: "CEQA Guidelines",
    publisher: "Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/ceqa/guidelines/",
    read: READ,
  },
  ceqaLciAbout: {
    title:
      "About the California Office of Land Use and Climate Innovation (LCI)",
    publisher: "Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/about/",
    read: READ,
  },
  ceqaSch: {
    title: "State Clearinghouse",
    publisher: "Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/sch/",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/ceqa",
  title: "CEQA: California Environmental Quality Act Guide",
  description:
    "What CEQA is, who it applies to, its process from exemption to EIR, the lead agency, and where CEQA documents are filed.",
  eyebrow: "CEQA",
  h1: "CEQA: the California Environmental Quality Act, step by step",
  primaryKeyword: "ceqa",
  secondaryKeywords: [
    "what is ceqa",
    "california environmental quality act",
    "ceqa guidelines",
    "ceqa process",
    "ceqa documents",
    "ceqa lead agency",
    "ceqa reform",
  ],
  document: "CEQA Document",
  answer:
    "CEQA, the California Environmental Quality Act, requires state and local agencies to avoid or mitigate, whenever feasible, the significant environmental effects of discretionary projects they carry out or approve [[ceqaPrc21050]] [[ceqaPrc21080]] [[ceqaPrc21063]] [[ceqaPrc21002dot1]]. The lead agency decides whether a project is exempt or needs a negative declaration, a mitigated negative declaration or an environmental impact report (EIR) [[ceqaPrc21080dot1]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "Public Resources Code § 21000 and following; CEQA Guidelines, 14 CCR § 15000 and following [[ceqaLciStart]] [[ceqaLciGuidelines]] [[ceqaGuide15000]]",
    },
    {
      label: "Filed with",
      value:
        "The State Clearinghouse ([CEQAnet](/for/ceqanet)) and the county clerk [[ceqaPrc21152]] [[ceqaSch]]",
    },
    {
      label: "Deadline",
      value:
        "Private projects: EIR within one year, negative declaration within 180 days of a complete application [[ceqaGuide15108]] [[ceqaGuide15107]] [[ceqaPrc21151dot5]]",
    },
    {
      label: "Typical length",
      value:
        "Draft EIR text normally under 150 pages, or 300 if unusually complex [[ceqaGuide15141]]",
    },
    {
      label: "2025 CEQA reform",
      value:
        "AB 130 and SB 131 added exemptions for infill housing, wildfire risk reduction and more [[ceqaAb130]] [[ceqaPrc21080dot66]] [[ceqaSb131]]",
    },
  ],
  hero: {
    prefix: "Start a",
    placeholder: "I'm starting CEQA review for…",
    examples: [
      {
        emoji: "🏫",
        label: "School Expansion",
        heading: "CEQA Review for School Expansion",
        eyebrow: "SCHOOL FACILITIES",
        prompt:
          "I'm a facilities planner at a unified school district in Fresno County starting CEQA review for adding 12 permanent classrooms to an existing elementary school campus.",
      },
      {
        emoji: "🏘️",
        label: "Infill Housing",
        heading: "CEQA Review for Infill Housing",
        eyebrow: "CITY PLANNING",
        prompt:
          "I'm a city planner in Sacramento County reviewing a 60-unit apartment building on a 2-acre infill lot and need to know whether a CEQA exemption applies.",
      },
      {
        emoji: "💧",
        label: "Water Main",
        heading: "CEQA Review for Water Main Replacement",
        eyebrow: "WATER DISTRICT",
        prompt:
          "I'm an environmental planner at a county water district in San Luis Obispo County preparing an initial study for replacing 4 miles of aging water main under existing roads.",
      },
      {
        emoji: "🔥",
        label: "Fuel Break",
        heading: "CEQA Review for Fuel Break",
        eyebrow: "WILDFIRE RISK",
        prompt:
          "I'm a consultant to a fire protection district in Sonoma County preparing the CEQA document for a 300-acre shaded fuel break along a ridgeline road.",
      },
      {
        emoji: "🛣️",
        label: "Road Widening",
        heading: "CEQA Review for Road Widening",
        eyebrow: "PUBLIC WORKS",
        prompt:
          "I'm with a county public works department in Riverside County starting the EIR for widening 2 miles of a two-lane county road to four lanes.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the CEQA document it needs, from an initial study to EIR sections, following a reference document from a similar project; every fact it can't confirm is marked for you.",
    mock: {
      project: "Classroom Expansion",
      documentTitle: "Classroom Expansion — Initial Study",
      summary:
        "The Classroom Expansion — Initial Study draft is ready. Twelve classrooms is over the Class 14 limit, so I set it up as an initial study. A few details still need your input:",
      missing: [
        "School name and parcel number",
        "Current and added student capacity",
        "Drop-off traffic counts",
        "Distance to nearest homes",
        "Tribal notification requests on file",
      ],
      letterhead: {
        left: [
          "Cedar Hollow Unified School District",
          "Facilities Planning and Construction",
        ],
        right: [
          "Initial Study",
          "[INSERT: school name] Classroom Expansion",
          "Fresno County, California",
        ],
      },
      meta: ["SCH No.: [INSERT: assigned on filing]", "Date: October 2, 2026"],
      paragraphs: [
        "Project description: Cedar Hollow Unified School District proposes to add 12 permanent classrooms on the existing campus of [INSERT: school name] Elementary School. The District will carry out the project and is the lead agency under CEQA.",
        "Exemption review: the addition exceeds the ten-classroom limit of the Class 14 categorical exemption (CEQA Guidelines § 15314), so the District has prepared this initial study to determine whether the project may have a significant effect on the environment.",
        "Transportation: drop-off and pick-up traffic on Cedar Avenue would add [INSERT: peak-hour trips]. Noise: construction would occur within [INSERT: distance] of the nearest homes; Mitigation Measure NOI-1 limits work hours.",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan: "A project description or uploaded PDFs, Word files and GIS files",
      manual: "A blank template or a past document on the shared drive",
    },
    {
      label: "Precedent research",
      eplan: "Searches CEQAnet for the project and up to two analog projects",
      manual: "Search CEQAnet and agency sites by hand",
    },
  ],
  sections: [
    {
      heading: "What is CEQA, and who does it apply to?",
      paragraphs: [
        "CEQA applies to projects: activities an agency carries out, funds or permits that may cause a direct, or reasonably foreseeable indirect, physical change in the environment [[ceqaPrc21065]]. That covers discretionary approvals such as zoning changes, conditional use permits and tentative subdivision maps, but not ministerial projects or emergency repairs [[ceqaPrc21080]]. Private development is covered only when it needs government approval, permits or funding [[ceqaGuide15002]].",
      ],
    },
    {
      heading: "The CEQA process in three steps",
      paragraphs: [
        "First, the lead agency checks whether a statutory or categorical exemption applies; if one does, review stops [[ceqaGuide15061]] [[ceqaGuide15300]] [[ceqaGuide15002]]. Second, it prepares an initial study [[ceqaGuide15063]]. Third, it prepares an EIR if substantial evidence shows the project may have a significant effect; otherwise it adopts a negative declaration, or a mitigated negative declaration when revisions the applicant agrees to clearly avoid the effects [[ceqaPrc21080]].",
      ],
    },
    {
      heading: "Who is the CEQA lead agency?",
      paragraphs: [
        "The lead agency has principal responsibility for carrying out or approving the project [[ceqaPrc21067]]: the agency running its own project or, for a private project, the one with the greatest responsibility for approving it as a whole, normally a city or county [[ceqaGuide15051]]. Its choice of document is final, including for responsible agencies, unless challenged in court [[ceqaPrc21080dot1]].",
        "Responsible agencies hold other discretionary approvals over the project [[ceqaGuide15381]]; trustee agencies, such as the State Lands Commission, hold natural resources in trust for Californians [[ceqaGuide15386]]. The lead agency must independently review every negative declaration and EIR, including any a contractor prepares [[ceqaPrc21082dot1]]. Before releasing either, it must begin consultation with any affiliated California Native American tribe that asked in writing to be notified and then requests it [[ceqaPrc21080dot3dot1]].",
      ],
    },
    {
      heading: "Where are CEQA documents filed?",
      paragraphs: [
        "Draft EIRs and proposed negative declarations go electronically to the State Clearinghouse, through CEQA Submit, and on the lead agency's website [[ceqaPrc21082dot1]] [[ceqaLciStart]]. The Clearinghouse, part of LCI, circulates them to state agencies, and its CEQAnet database holds documents and notices received since 1980 [[ceqaSch]].",
        "A state agency files its notices with LCI rather than the county clerk [[ceqaPrc21108]] [[ceqaLciAbout]]. No agency enforces CEQA; lawsuits do [[ceqaLciStart]], and they must be filed within 30 days of a notice of determination, 35 days of a notice of exemption, or 180 days if no notice was filed [[ceqaPrc21167]].",
      ],
    },
  ],
  outline: {
    heading: "CEQA documents, in order",
    intro:
      "The documents a CEQA review can produce, following the three steps [[ceqaGuide15002]]. Many projects stop at the first or second step. [CEQA exemptions](/for/ceqa-exemptions), the [initial study](/for/ceqa-initial-study) and the [EIR](/for/ceqa-environmental-impact-report) each have their own guide. When a federal agency also acts on the project, see [CEQA and NEPA](/for/ceqa-and-nepa) for joint documents. Other states have similar laws, including [New York's SEQR](/for/new-york-seqr) and [Washington's SEPA](/for/washington-sepa).",
    items: [
      {
        title: "Notice of exemption",
        detail:
          "Optional, filed after approval: the project and its location, the exemption relied on and a brief statement of reasons [[ceqaGuide15062]].",
      },
      {
        title: "Initial study",
        detail:
          "The project and setting, a checklist of effects with brief explanations, mitigation, consistency with zoning and plans, and the preparers [[ceqaGuide15063]].",
      },
      {
        title: "Negative declaration or mitigated negative declaration",
        detail:
          "Circulated for public review of at least 20 days, or 30 through the State Clearinghouse, before the agency adopts it [[ceqaGuide15105]].",
      },
      {
        title: "Notice of preparation",
        detail:
          "Tells LCI and the responsible, trustee and involved federal agencies an EIR is coming; responsible and trustee agencies have 30 days to comment on scope [[ceqaGuide15082]] [[ceqaLciAbout]].",
      },
      {
        title: "Draft EIR",
        detail:
          "Significant and unavoidable effects, mitigation measures, alternatives and growth-inducing impact [[ceqaPrc21100]], circulated for 30 to 60 days of public review [[ceqaGuide15105]].",
      },
      {
        title: "Final EIR",
        detail:
          "The draft, the comments, a list of commenters and the lead agency's responses [[ceqaGuide15132]], certified before the project is approved [[ceqaGuide15090]].",
      },
      {
        title: "Findings and statement of overriding considerations",
        detail:
          "A written finding for each significant effect [[ceqaPrc21081]] [[ceqaGuide15091]] and, for effects that remain, the specific benefits that outweigh them [[ceqaGuide15093]].",
      },
      {
        title: "Mitigation monitoring or reporting program",
        detail:
          "Adopted with the findings or a mitigated negative declaration so the measures are carried out [[ceqaGuide15097]].",
      },
      {
        title: "Notice of determination",
        detail:
          "Filed within five working days of approval with the county clerk and the State Clearinghouse [[ceqaPrc21152]]; it starts the 30-day period to sue [[ceqaPrc21167]].",
      },
    ],
  },
  faq: [
    {
      question: "What are the CEQA Guidelines?",
      answer:
        "The regulations that implement CEQA, at Title 14, section 15000 and following, of the California Code of Regulations. They bind every public agency in California and set out the review steps, the categorical exemption classes and what each CEQA document must contain.",
    },
    {
      question: "How long does CEQA review take?",
      answer:
        "Public review alone runs at least 20 or 30 days for a negative declaration and 30 to 60 days for a draft EIR. For a private project, the agency must finish a negative declaration within 180 days, and an EIR within one year, of accepting the application as complete.",
    },
    {
      question: "Does CEQA apply to private projects?",
      answer:
        "Yes, when a private project needs a discretionary permit or approval from a public agency, or public funding. Ministerial permits are excluded, and private action with no government participation, financing or approval is outside CEQA.",
    },
    {
      question:
        "Does ePlan decide whether a project is exempt or file on CEQAnet?",
      answer:
        "No. ePlan drafts CEQA documents, shows the sources it used and leaves every fact it cannot confirm as a placeholder for you. The lead agency decides on exemptions and files with the State Clearinghouse and the county clerk.",
    },
  ],
};
