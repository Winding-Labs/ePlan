import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

/**
 * /ceqa — the CEQA hub page.
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
  ceqaPrc21050: PRC("21050", "Short title (California Environmental Quality Act)"),
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
  ceqaPrc21083: PRC("21083", "Guidelines; review and adoption", "2005-01-01"),
  ceqaPrc21084: PRC(
    "21084",
    "Classes of projects exempt from CEQA (categorical exemptions)",
    "2014-01-01",
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
    title: "Assembly Bill No. 130 (2025-2026), Chapter 22, Statutes of 2025 (Housing), chaptered text",
    publisher: "California Legislative Information (leginfo.legislature.ca.gov)",
    url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB130",
    published: "2025-06-30",
    read: READ,
  },
  ceqaSb131: {
    title:
      "Senate Bill No. 131 (2025-2026), Chapter 24, Statutes of 2025 (Public resources), chaptered text",
    publisher: "California Legislative Information (leginfo.legislature.ca.gov)",
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
  ceqaGuide15132: CCR(
    "15132",
    "Contents of final environmental impact report",
  ),
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
  ceqaLciUpdates: {
    title: "2018 CEQA Guidelines Update",
    publisher: "Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/ceqa/guidelines/updates/",
    published: "2018-12-28",
    read: READ,
  },
  ceqaLciAbout: {
    title: "About the California Office of Land Use and Climate Innovation (LCI)",
    publisher: "Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/about/",
    read: READ,
  },
  ceqaLciNews: {
    title: "CEQA News",
    publisher: "Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/ceqa/news/",
    read: READ,
  },
  ceqaSch: {
    title: "State Clearinghouse",
    publisher: "Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/sch/",
    read: READ,
  },
  ceqaAep2026: {
    title:
      "2026 CEQA Statute & Guidelines (unofficial copy as of January 1, 2026), including Changes Made to CEQA Guidelines in 2025",
    publisher: "Association of Environmental Professionals (AEP)",
    url: "https://www.califaep.org/docs/CEQA_Handbook_2026_rev031926_Updated.pdf",
    published: "2026-03",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/ceqa",
  family: "ceqa",
  name: "CEQA",
  title: "CEQA: California Environmental Quality Act Guide",
  description:
    "What CEQA is, who it applies to, the CEQA process from exemption to EIR, lead agencies, the CEQA Guidelines and the 2025 AB 130 and SB 131 reforms.",
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
    "CEQA, the California Environmental Quality Act, is the state law at Public Resources Code section 21000 and following [[ceqaPrc21050]] [[ceqaLciStart]]. It applies to discretionary projects that public agencies carry out or approve [[ceqaPrc21080]], from state agencies to cities, counties and special districts [[ceqaPrc21063]], and it directs each agency to avoid or mitigate a project's significant environmental effects whenever feasible [[ceqaPrc21002dot1]]. The lead agency decides whether a project is exempt or needs a negative declaration, a mitigated negative declaration or an environmental impact report (EIR) [[ceqaPrc21080dot1]].",
  glance: [
    {
      label: "Legal basis",
      value: "Public Resources Code § 21000 and following [[ceqaLciStart]]",
    },
    {
      label: "Regulations",
      value: "CEQA Guidelines, 14 CCR § 15000 and following [[ceqaLciGuidelines]]",
    },
    {
      label: "Applies to",
      value: "Discretionary projects of public agencies [[ceqaPrc21080]]",
    },
    { label: "Decided by", value: "The lead agency [[ceqaPrc21080dot1]]" },
    {
      label: "Filed with",
      value:
        "The State Clearinghouse (CEQAnet) and the county clerk [[ceqaPrc21152]] [[ceqaSch]]",
    },
    {
      label: "Typical length",
      value:
        "Draft EIR text normally under 150 pages, or 300 if unusually complex [[ceqaGuide15141]]",
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
      label: "Start from",
      eplan: "A project description or uploaded PDFs, Word files and GIS files",
      manual: "A blank template or a past document on the shared drive",
    },
    {
      label: "Precedent",
      eplan: "Searches CEQAnet for the project and up to two analog projects",
      manual: "Search CEQAnet and agency sites by hand",
    },
  ],
  sections: [
    {
      heading: "What is CEQA, and who does it apply to?",
      paragraphs: [
        "CEQA is Division 13 of the Public Resources Code [[ceqaPrc21050]]. It applies to discretionary projects that public agencies carry out or approve, such as zoning changes, conditional use permits and tentative subdivision maps, unless an exemption applies; ministerial projects and emergency repairs are among the activities it excludes [[ceqaPrc21080]].",
        "A project is an activity that may cause a direct, or reasonably foreseeable indirect, physical change in the environment and that an agency undertakes, funds or permits [[ceqaPrc21065]]. Private action is subject to CEQA only when it involves government participation, financing or approval [[ceqaGuide15002]].",
        "The Legislature's policy is that agencies should not approve projects as proposed if feasible alternatives or mitigation measures would substantially lessen their significant effects [[ceqaPrc21002]]. No agency enforces CEQA, LCI included; it is enforced through litigation [[ceqaLciStart]]. A suit must be filed within 30 days after a notice of determination, 35 days after a notice of exemption, or 180 days if no notice of exemption was filed [[ceqaPrc21167]].",
      ],
    },
    {
      heading: "The CEQA process in three steps",
      paragraphs: [
        "The Guidelines describe up to three steps [[ceqaGuide15002]]. First, the lead agency decides whether the project is exempt, by statute or under a categorical exemption class [[ceqaGuide15061]]; those classes are listed in the Guidelines after the Secretary of the Natural Resources Agency finds they do not have a significant effect [[ceqaPrc21084]] [[ceqaGuide15300]]. If the project is exempt, the process stops, and the agency may file a notice of exemption after approval [[ceqaGuide15062]].",
        "Second, the agency prepares an initial study [[ceqaGuide15063]]. If there is no substantial evidence that the project may have a significant effect, it adopts a negative declaration; if revisions the applicant agrees to would clearly avoid the effects, a mitigated negative declaration. Third, if substantial evidence shows the project may have a significant effect, it prepares an EIR [[ceqaPrc21080]].",
        "Public review runs at least 20 days for a proposed negative declaration, or 30 when sent to the State Clearinghouse, and 30 to 60 days for a draft EIR, normally at least 45 through the Clearinghouse [[ceqaGuide15105]]. For a private project, the EIR is due within one year and a negative declaration within 180 days of accepting the application as complete [[ceqaGuide15108]] [[ceqaGuide15107]] [[ceqaPrc21151dot5]].",
      ],
    },
    {
      heading: "Who is the CEQA lead agency?",
      paragraphs: [
        "The lead agency is the public agency with principal responsibility for carrying out or approving the project [[ceqaPrc21067]]. An agency that carries out its own project is the lead; for a private project, it is the agency with the greatest responsibility for supervising or approving the project as a whole, normally a city or county rather than a single-purpose district [[ceqaGuide15051]]. Its choice of exemption, negative declaration or EIR is final for everyone, including responsible agencies, unless challenged in court [[ceqaPrc21080dot1]].",
        "Responsible agencies are the other public agencies with discretionary approval power over the project [[ceqaGuide15381]], and each considers only the effects of the activities it is required by law to carry out or approve [[ceqaPrc21002dot1]]. Trustee agencies have jurisdiction over natural resources held in trust for Californians, such as the State Lands Commission for state sovereign lands and State Parks for the state park system [[ceqaGuide15386]].",
        "The lead agency must independently review every negative declaration and EIR, including any prepared under contract, and find that it reflects its own independent judgment [[ceqaPrc21082dot1]]. Before releasing a negative declaration or EIR, it must begin consultation with any traditionally and culturally affiliated California Native American tribe that asked in writing to be notified and then requests consultation within 30 days [[ceqaPrc21080dot3dot1]].",
      ],
    },
    {
      heading: "What are the CEQA Guidelines?",
      paragraphs: [
        "The CEQA Guidelines are the regulations implementing the statute, at Title 14, Division 6, Chapter 3 of the California Code of Regulations [[ceqaLciGuidelines]], and they are binding on all public agencies in California [[ceqaGuide15000]]. The Governor's Office of Land Use and Climate Innovation (LCI), the Office of Planning and Research until it was renamed on July 1, 2024 [[ceqaLciAbout]], develops them with the Natural Resources Agency [[ceqaLciStart]].",
        "The statute has the office review the Guidelines at least once every two years and recommend changes, which the Secretary of the Natural Resources Agency adopts [[ceqaPrc21083]]. The most recent comprehensive update LCI lists took effect December 28, 2018 [[ceqaLciUpdates]], and the Association of Environmental Professionals' 2026 edition reports no changes to the Guidelines in 2025 [[ceqaAep2026]]. SB 131 requires the Guidelines for streamlined infill review to be updated by January 1, 2027, and at least every two years after that [[ceqaSb131]].",
      ],
    },
    {
      heading: "Where are CEQA documents filed? The State Clearinghouse and CEQAnet",
      paragraphs: [
        "The lead agency submits draft EIRs and proposed negative declarations electronically to the State Clearinghouse and posts them on its own website [[ceqaPrc21082dot1]]. The Clearinghouse, a division of LCI, distributes documents to state agencies for review, and its CEQAnet database holds the documents and notices it has received since 1980 [[ceqaSch]]. Documents are submitted through CEQA Submit for publication on CEQAnet [[ceqaLciStart]].",
        "After approving a project, a local agency files a notice of determination within five working days with the county clerk and the State Clearinghouse, and may file a notice of exemption with both [[ceqaPrc21152]]. A state agency files its notices electronically with LCI [[ceqaPrc21108]] [[ceqaLciAbout]]. Those filings start the short periods for lawsuits [[ceqaPrc21167]].",
      ],
    },
    {
      heading: "CEQA reform in 2025: what AB 130 and SB 131 changed",
      paragraphs: [
        "The Governor signed AB 130 (Chapter 22) and SB 131 (Chapter 24) on June 30, 2025; both took effect immediately [[ceqaAb130]] [[ceqaSb131]]. AB 130 exempts housing development projects on sites of up to 20 acres (4 for builder's remedy projects) in a city or Census urban area that meet conditions on prior urban use, plan and zoning consistency, density, historic structures, tribal consultation and contamination [[ceqaPrc21080dot66]]. It also lets a lead agency mitigate a significant transportation impact by helping fund housing [[ceqaAb130]], under guidance LCI has published [[ceqaLciNews]].",
        "SB 131 limits review of a housing development project that would be exempt but for a single condition to the effects of that condition, with no alternatives or growth-inducing analysis required in an EIR; the limit does not cover distribution centers, oil and gas infrastructure or natural and protected lands. SB 158 amended this provision and the AB 130 exemption in October 2025 [[ceqaPrc21080dot1]] [[ceqaPrc21080dot66]].",
        "SB 131 also removes staff notes and internal agency communications from the record in CEQA lawsuits, except for distribution center and oil and gas projects, has LCI map eligible urban infill sites by July 1, 2027, and adds statutory exemptions, among them [[ceqaSb131]]:",
      ],
      bullets: [
        "Rezonings that implement the schedule of actions in an approved housing element",
        "Wildfire risk reduction projects, such as prescribed fire, defensible space clearance and fuel breaks",
        "New agricultural employee housing and repair or maintenance of existing farmworker housing",
        "Day care centers, rural health clinics and federally qualified health centers, food banks and advanced manufacturing facilities, outside natural and protected lands",
        "Park and nonmotorized trail projects funded by the Safe Drinking Water, Wildfire Prevention, Drought Preparedness, and Clean Air Bond Act of 2024",
        "High-speed rail maintenance facilities and passenger stations that meet set conditions",
      ],
    },
  ],
  outline: {
    heading: "CEQA documents, in order",
    intro:
      "The documents a CEQA review can produce, in the order of the Guidelines' three steps [[ceqaGuide15002]]. Many projects stop at the first or second step; the guides to CEQA exemptions, the initial study and the environmental impact report go deeper, and the CEQA and NEPA guide covers projects with federal involvement.",
    items: [
      {
        title: "Notice of exemption",
        detail:
          "Filed, if at all, after approval: the project and its location, the exemption relied on with its citation, and a brief statement of reasons [[ceqaGuide15062]].",
      },
      {
        title: "Initial study",
        detail:
          "In brief form: the project and its location, the setting, a checklist of effects with short explanations, mitigation, consistency with zoning and plans, and who prepared it [[ceqaGuide15063]].",
      },
      {
        title: "Negative declaration or mitigated negative declaration",
        detail:
          "Adopted when there is no substantial evidence of a significant effect, or when agreed project revisions clearly avoid it [[ceqaPrc21080]]; public review of at least 20 days, or 30 through the State Clearinghouse [[ceqaGuide15105]].",
      },
      {
        title: "Notice of preparation",
        detail:
          "Sent once an EIR is required to the Office of Planning and Research, now LCI [[ceqaLciAbout]], each responsible and trustee agency, and every federal agency involved in approving or funding the project; responsible and trustee agencies have 30 days to say what the EIR must cover [[ceqaGuide15082]].",
      },
      {
        title: "Draft EIR",
        detail:
          "Significant effects, unavoidable and irreversible effects, mitigation measures, alternatives and growth-inducing impact [[ceqaPrc21100]], circulated for 30 to 60 days of public review [[ceqaGuide15105]].",
      },
      {
        title: "Final EIR",
        detail:
          "The draft or a revision, the comments received, a list of commenters and the lead agency's responses [[ceqaGuide15132]]. The lead agency certifies it before approving the project [[ceqaGuide15090]].",
      },
      {
        title: "Findings and statement of overriding considerations",
        detail:
          "A written finding for each significant effect [[ceqaPrc21081]] [[ceqaGuide15091]], and, for effects that remain, the specific benefits that outweigh them [[ceqaGuide15093]].",
      },
      {
        title: "Mitigation monitoring or reporting program",
        detail:
          "Adopted with the findings or a mitigated negative declaration so the measures are carried out [[ceqaGuide15097]].",
      },
      {
        title: "Notice of determination",
        detail:
          "Filed within five working days of approval with the county clerk and the State Clearinghouse [[ceqaPrc21152]]; it starts a 30-day period to sue [[ceqaPrc21167]].",
      },
    ],
  },
  faq: [
    {
      question: "What is CEQA?",
      answer:
        "The California Environmental Quality Act, Public Resources Code section 21000 and following. It requires state and local agencies to identify the significant environmental effects of the discretionary projects they carry out or approve, and to avoid or mitigate those effects when feasible.",
    },
    {
      question: "What is the difference between a negative declaration and an EIR?",
      answer:
        "A negative declaration is a short statement that a project will not have a significant effect, adopted when an initial study finds no substantial evidence of one. A mitigated negative declaration relies on project revisions that clearly avoid the effects. An EIR is required when substantial evidence shows the project may have a significant effect.",
    },
    {
      question: "Does CEQA apply to private projects?",
      answer:
        "Yes, when a private project needs a discretionary permit or approval from a public agency, or public funding. Private action with no government participation, financing or approval is not subject to CEQA, and ministerial permits are not covered.",
    },
    {
      question: "Where are CEQA documents filed?",
      answer:
        "Draft EIRs and proposed negative declarations go to the State Clearinghouse, run by the Governor's Office of Land Use and Climate Innovation, which publishes documents on CEQAnet. Local agencies file notices of determination, and may file notices of exemption, with the county clerk and the State Clearinghouse.",
    },
    {
      question: "What did AB 130 and SB 131 change in 2025?",
      answer:
        "AB 130 created a CEQA exemption for qualifying infill housing projects on sites of up to 20 acres. SB 131 limited review of housing projects that miss an exemption by a single condition, added exemptions such as wildfire risk reduction projects and rezonings that implement a housing element, and narrowed the record in CEQA lawsuits.",
    },
    {
      question: "Does ePlan decide whether a project is exempt or file on CEQAnet?",
      answer:
        "No. ePlan drafts CEQA documents, shows the sources it used and leaves every fact it cannot confirm as a placeholder for you. The lead agency decides on exemptions and files with the State Clearinghouse and the county clerk.",
    },
  ],
};
