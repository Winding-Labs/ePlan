// Reused source keys (defined in the shared NEPA sources): usc4332, usc4336,
// usc4336a, usc4336e, fra2023, ceqIfr, ceqFinal, ceqProcedures, sevenCounty,
// usda1b7, usda1b8, fhwaFinal. DOE is cited to its July 13, 2026 procedures
// (doeProcedures, now repointed to that version).
import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

const READ = "2026-10-02";

const ECFR_FHWA = (section: string, heading: string): Source => ({
  title: `23 CFR ${section} - ${heading} (FHWA, FRA and FTA)`,
  publisher: "Electronic Code of Federal Regulations (eCFR), current",
  url: `https://www.ecfr.gov/current/title-23/chapter-I/subchapter-H/part-771/section-${section}`,
  read: READ,
});

export const sources = {
  eisUsc4336b: {
    title: "42 U.S.C. 4336b - Programmatic environmental document",
    publisher: "United States Code, 2023 edition (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap55-subchapI-sec4336b.htm",
    read: READ,
  },
  eisUsda1b9: {
    title: "7 CFR 1b.9 - Efficient and effective environmental reviews (USDA)",
    publisher: "Electronic Code of Federal Regulations (eCFR), current",
    url: "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.9",
    read: READ,
  },
  eisFhwa771115: ECFR_FHWA("771.115", "Classes of actions"),
  eisFhwa771123: ECFR_FHWA("771.123", "Draft environmental impact statements"),
  eisFhwa771124: ECFR_FHWA(
    "771.124",
    "Final environmental impact statement/record of decision document",
  ),
  eisFhwa771125: ECFR_FHWA("771.125", "Final environmental impact statements"),
  eisFhwa771127: ECFR_FHWA("771.127", "Record of decision"),
  eisFhwa771130: ECFR_FHWA(
    "771.130",
    "Supplemental environmental impact statements",
  ),
  eisFhwa771138: ECFR_FHWA(
    "771.138",
    "Timelines, page limits, and certifications",
  ),
  eisEpaDatabase: {
    title: "Environmental Impact Statement (EIS) Database",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://cdxapps.epa.gov/cdx-enepa-II/public/action/eis/search",
    read: READ,
  },
  eisEpaFiling: {
    title: "Environmental Impact Statement Filing Guidance",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://www.epa.gov/nepa/environmental-impact-statement-filing-guidance",
    published: "2026-05-20",
    read: READ,
  },
  eisEpa309: {
    title: "EPA Review Process under Section 309 of the Clean Air Act",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://www.epa.gov/nepa/epa-review-process-under-section-309-clean-air-act",
    published: "2026-06-24",
    read: READ,
  },
  eisEpaCopy: {
    title: "How to Obtain a Copy of an Environmental Impact Statement",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://www.epa.gov/nepa/how-obtain-copy-environmental-impact-statement",
    published: "2026-09-30",
    read: READ,
  },
  eisNoa20260925: {
    title:
      "Environmental Impact Statements; Notice of Availability, 91 FR 60957",
    publisher: "Environmental Protection Agency, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/09/25/2026-19676/environmental-impact-statements-notice-of-availability",
    published: "2026-09-25",
    read: READ,
  },
  eisCeqTimelines: {
    title: "Environmental Impact Statement Timelines (2010-2018)",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/sites/default/files/documents/CEQ_EIS_Timeline_Report_2020-6-12.pdf",
    published: "2020-06-12",
    read: READ,
  },
  eisCeqLength: {
    title: "Length of Environmental Impact Statements (2013-2018)",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/sites/default/files/documents/CEQ_EIS_Length_Report_2020-6-12.pdf",
    published: "2020-06-12",
    read: READ,
  },
  eisDoeEisList: {
    title: "DOE Environmental Impact Statements",
    publisher: "U.S. Department of Energy",
    url: "https://www.energy.gov/nepa/doe-environmental-impact-statements",
    read: READ,
  },
  eisBlmEplanning: {
    title: "ePlanning (National NEPA Register)",
    publisher: "Bureau of Land Management",
    url: "https://www.blm.gov/programs/planning-and-nepa/eplanning",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/environmental-impact-statement",
  parent: "/for/nepa",
  family: "nepa",
  name: "Environmental impact statement",
  title: "Environmental Impact Statement: Steps & Examples",
  description:
    "What an environmental impact statement covers, when NEPA requires one, page limits, the steps from notice of intent to ROD, and where to find real EISs.",
  eyebrow: "Environmental impact statement",
  h1: "Environmental impact statements: steps, page limits and real examples",
  primaryKeyword: "environmental impact statement",
  secondaryKeywords: [
    "what is an environmental impact statement",
    "environmental impact statement example",
    "record of decision",
    "notice of intent",
    "draft and final EIS",
    "programmatic EIS",
    "supplemental EIS",
    "EIS page limits",
  ],
  document: "EIS Outline",
  answer:
    "An environmental impact statement (EIS) is the detailed written statement NEPA requires for a proposed federal action that has a reasonably foreseeable significant effect on the quality of the human environment [[usc4336e]] [[usc4336]]. It covers the action's reasonably foreseeable effects, unavoidable adverse effects, a reasonable range of feasible alternatives including no action, and any irreversible and irretrievable commitments of federal resources [[usc4332]]. Since 2023 an EIS may not exceed 150 pages, or 300 for an action of extraordinary complexity, not counting citations and appendices, and is due within two years [[usc4336a]]. The agency then records its decision, for example in a record of decision [[usda1b8]] [[doeProcedures]].",
  glance: [
    {
      label: "Legal basis",
      value: "NEPA section 102(2)(C), 42 U.S.C. 4332(2)(C) [[usc4332]]",
    },
    {
      label: "Required when",
      value:
        "A proposed action has a reasonably foreseeable significant effect on the human environment [[usc4336]]",
    },
    {
      label: "Prepared by",
      value:
        "The lead agency, or a project sponsor under its supervision [[usc4336a]]",
    },
    {
      label: "Page limit",
      value:
        "150 pages, or 300 if extraordinarily complex, not counting citations and appendices [[usc4336a]]",
    },
    { label: "Deadline", value: "2 years [[usc4336a]]" },
    {
      label: "Ends with",
      value:
        "A decision document, such as a record of decision (ROD) [[usda1b8]] [[doeProcedures]]",
    },
  ],
  hero: {
    prefix: "Draft an",
    placeholder: "I'm starting an EIS for…",
    examples: [
      {
        emoji: "⚡",
        label: "Transmission Line",
        heading: "EIS Outline for Transmission Line",
        eyebrow: "ENERGY TRANSMISSION",
        prompt:
          "I'm a NEPA project manager at a BLM district office in Idaho starting an EIS on a utility's right-of-way application for a 90-mile, 500-kV transmission line across public land.",
      },
      {
        emoji: "🛣️",
        label: "Highway Bypass",
        heading: "EIS Outline for Highway Bypass",
        eyebrow: "NEW HIGHWAY",
        prompt:
          "I'm an environmental manager at a state DOT working with our FHWA division office on an EIS for a 12-mile, four-lane highway bypass on new location around a small town in eastern Kansas.",
      },
      {
        emoji: "🌲",
        label: "Forest Plan Revision",
        heading: "EIS Outline for Forest Plan Revision",
        eyebrow: "FOREST PLANNING",
        prompt:
          "I'm the planning staff officer on a 2-million-acre national forest in western Montana and need a programmatic EIS for our land management plan revision.",
      },
      {
        emoji: "🚆",
        label: "Light Rail Extension",
        heading: "EIS Outline for Light Rail Extension",
        eyebrow: "PUBLIC TRANSIT",
        prompt:
          "I'm a consultant to a regional transit agency preparing an EIS with FTA for a 9-mile light rail extension on a new alignment outside existing right-of-way in central Arizona.",
      },
      {
        emoji: "💧",
        label: "Reservoir Expansion",
        heading: "EIS Outline for Reservoir Expansion",
        eyebrow: "WATER STORAGE",
        prompt:
          "I'm a Bureau of Reclamation planner in Utah and need an EIS for raising an existing dam 40 feet to add 60,000 acre-feet of reservoir storage.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the EIS outline with the purpose and need, alternatives and schedule, following a precedent EIS; every fact it can't confirm is marked for you.",
    mock: {
      project: "90-mile 500-kV transmission line",
      documentTitle: "EIS Outline — 500-kV Transmission Line",
      summary:
        "I outlined the EIS from NEPA's required contents and two analog transmission-line EISs from EPA's EIS database. A few details still need your input:",
      missing: [
        "Applicant name",
        "Number of alternative routes",
        "Deadline start date",
        "Cooperating agencies",
        "Specialist resource reports",
      ],
      letterhead: {
        left: [
          "United States Department of the Interior",
          "Bureau of Land Management",
          "[INSERT: district office]",
        ],
        right: [
          "Environmental Impact Statement Outline",
          "90-Mile 500-kV Transmission Line",
          "[INSERT: counties], Idaho",
        ],
      },
      meta: ["NEPA No.: [INSERT: NEPA number]", "Date: October 2, 2026"],
      paragraphs: [
        "1. Purpose and need. The BLM's purpose is to respond to [INSERT: applicant]'s application for a right-of-way grant for a 90-mile, 500-kV transmission line across public land in southern Idaho, under Title V of the Federal Land Policy and Management Act.",
        "2. Alternatives. The EIS will compare the applicant's proposed route, [INSERT: number] alternative routes that are technically and economically feasible and meet the purpose and need, and no action. Routes eliminated from detailed study will be listed with the reason for each.",
        "3. Schedule and length. The two-year deadline runs from the earliest of the EIS determination, the notice that the right-of-way application is complete, or the notice of intent: [INSERT: start date]. The EIS text is planned at 150 pages or fewer, excluding citations and appendices.",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "An EIS outline that follows a precedent EIS's structure, with your project facts filled in and gaps marked",
      manual: "A blank document or your office's last EIS",
    },
    {
      label: "Precedent research",
      eplan:
        "The research agent searches EPA's EIS database and agency project pages for up to two analog projects",
      manual: "Searching the EIS database by title, agency and state yourself",
    },
  ],
  sections: [
    {
      heading: "When is an environmental impact statement required?",
      paragraphs: [
        "An agency issues an EIS for a proposed action that needs an environmental document and has a reasonably foreseeable significant effect on the quality of the human environment. If no significant effect is foreseeable, or its significance is unknown, the agency prepares an environmental assessment instead, unless a categorical exclusion applies. No environmental document is needed if the action is not final agency action, is excluded, would clearly and fundamentally conflict with another law, or is nondiscretionary [[usc4336]].",
        "Under USDA's procedures, whether an effect is significant is the responsible official's expert judgment, informed by interdisciplinary analysis [[usda1b7]]. Some agencies list actions that normally need an EIS. FHWA, FRA and FTA name these, among others [[eisFhwa771115]]:",
      ],
      bullets: [
        "A new controlled-access freeway",
        "A highway project of four or more lanes on a new location",
        "Construction or extension of a fixed transit facility, such as light rail or bus rapid transit, not located primarily within an existing transportation right-of-way",
        "New major railroad lines or facilities, such as passenger terminals or freight yards, outside an existing transportation right-of-way",
      ],
    },
    {
      heading: "Who sets the EIS format now that CEQ's regulations are gone?",
      paragraphs: [
        "CEQ's NEPA regulations, 40 CFR parts 1500-1508, were removed effective April 11, 2025, and CEQ finalized the removal on January 8, 2026 [[ceqIfr]] [[ceqFinal]]. Agencies now follow the statute and their own NEPA procedures, which CEQ indexes on nepa.gov [[ceqProcedures]].",
        "USDA lets its subcomponents use any EIS format but sets minimum elements, from a cover of no more than two pages to the responsible official's page-limit and deadline statements [[usda1b7]]. DOE lists what an EIS must show, including any means identified to mitigate adverse effects [[doeProcedures]]. FHWA, FRA and FTA set their EIS steps in 23 CFR part 771, finalized September 1, 2026 [[fhwaFinal]].",
        "In Seven County Infrastructure Coalition v. Eagle County (May 29, 2025), the Supreme Court said agencies make fact-dependent choices about the depth and breadth of their inquiry and the length, content and level of detail of an EIS, and that courts should afford those choices substantial deference [[sevenCounty]].",
      ],
    },
    {
      heading: "EIS page limits and the two-year deadline",
      paragraphs: [
        "The Fiscal Responsibility Act of 2023 wrote page limits and deadlines into NEPA [[fra2023]]. An EIS may not exceed 150 pages, or 300 for a proposed action of extraordinary complexity, not including citations or appendices [[usc4336a]]. USDA and DOE specify 8.5 by 11 inch pages with single-spaced 12-point text and count pages of maps and tables toward the limit [[usda1b7]] [[doeProcedures]]. For projects under 23 U.S.C. 139, FHWA's rule sets 200 pages to the maximum extent practicable, unless it sets a different limit [[eisFhwa771138]].",
        "The lead agency must finish within two years of the earliest of its determination that an EIS is required, its notice that a right-of-way application is complete, or its notice of intent. It may extend the deadline, in consultation with the applicant, only as long as needed, and a project sponsor may petition a court over a missed deadline [[usc4336a]]. FHWA counts from the NOI to the signed record of decision [[eisFhwa771138]]; DOE counts to EPA's notice of availability [[doeProcedures]].",
        "Both limits date from 2023. For EISs completed from 2010 to 2018, CEQ measured an average of 4.5 years from notice of intent to record of decision [[eisCeqTimelines]]. Final EISs from 2013 to 2018 averaged 661 pages, with a median of 447, not counting appendices [[eisCeqLength]].",
      ],
    },
    {
      heading: "Notice of intent and scoping",
      paragraphs: [
        "A notice of intent (NOI) is the Federal Register notice that an agency will prepare an EIS [[usda1b7]]. NEPA requires every NOI to request public comment on alternatives or impacts and on relevant information, studies or analyses, and the NOI's date is one of the dates that can start the two-year clock [[usc4336a]].",
        "USDA's NOI must include the purpose and need, a preliminary description of the proposed action and known alternatives, the substantive issues with expected impacts, anticipated permits, a decision schedule, any scoping process, cooperating agencies, a project website and a contact [[usda1b7]].",
        "Scoping is not a statutory step. USDA makes it optional, with no prescribed process [[usda1b7]]. FHWA, FRA and FTA begin scoping before the NOI to identify the purpose and need, the range of alternatives, reasonably foreseeable impacts and the significant issues to address [[eisFhwa771123]].",
      ],
    },
    {
      heading: "Draft and final EIS, and the record of decision",
      paragraphs: [
        "DOE's procedures say there is no statutory requirement to post a draft EIS for public comment [[doeProcedures]]. Agency procedures decide whether and how a draft circulates. FHWA, FRA and FTA circulate a draft EIS with a comment period of 45 to 60 days unless one is set under 23 U.S.C. 139 [[eisFhwa771123]]. USDA lets the responsible official choose whether to publish a draft, posts it on a USDA website, and files only the completed EIS with EPA [[usda1b7]].",
        "Agencies file EISs with EPA, which publishes a weekly notice of availability in the Federal Register. EPA recommends 45 days of comment on a draft EIS and a 30-day review period for a final, counted from that notice [[eisEpaFiling]]. EPA reviews every draft EIS under Clean Air Act section 309 and posts its comment letters [[eisEpa309]]. Under FHWA's rule, a final EIS names the preferred alternative and responds to substantive comments on the draft [[eisFhwa771125]].",
        "Under USDA's procedures, the record of decision (ROD) incorporates the EIS by reference, states the selected alternative, any mitigation and its authority, and when implementation begins, and is signed; the action may start once EPA's notice is published, the ROD is posted and notifications are sent [[usda1b8]]. FHWA combines the final EIS and ROD where practicable [[eisFhwa771124]]; a separate ROD comes at least 30 days after the final EIS notice or 90 days after the draft notice, whichever is later [[eisFhwa771127]].",
      ],
    },
    {
      heading: "When to prepare a supplemental EIS or a programmatic EIS",
      paragraphs: [
        "FHWA, FRA and FTA must supplement an EIS when changes to the action, or new information or circumstances, would cause significant impacts the EIS did not evaluate. A supplement goes through the same draft, final and ROD steps, without scoping [[eisFhwa771130]]. DOE writes a supplement analysis when it is unclear whether a supplement is needed [[doeProcedures]]. USDA fixes minor changes to a filed EIS with an errata sheet and prepares a supplemental EIS for substantial ones [[eisUsda1b9]].",
        "A programmatic EIS analyzes all or some of the effects of a policy, program, plan or group of related actions [[usc4336e]]. If judicial review of it was available, later documents for related actions may rely on its analysis for five years unless substantial new circumstances or information bear on it, and after five years if the agency reevaluates it [[eisUsc4336b]]. USDA and DOE may frame programmatic reviews geographically, generically, or by stage of technological development [[eisUsda1b9]] [[doeProcedures]].",
      ],
    },
    {
      heading:
        "Environmental impact statement examples: where to find real EISs",
      paragraphs: [
        "Start with EPA's EIS database at cdxapps.epa.gov/cdx-enepa-II. It holds records of all EISs EPA has received since 1987, EPA comment letters since 2001, and PDFs since October 2012. Search by title words, agency (optionally including co-lead and cooperating agencies), state, Federal Register date, or CEQ number; a search returns up to 500 records [[eisEpaDatabase]].",
        "EPA's weekly notice shows what was just filed. The September 25, 2026 notice lists a Tennessee Valley Authority draft EIS for a solar and storage project in Mississippi, an Air Force final EIS for F-35A training basing in Oregon, and a FERC draft EIS for a liquefaction project in Texas [[eisNoa20260925]]. For older EISs, Northwestern University's Transportation Library holds nearly all federal EISs issued since 1969 [[eisEpaCopy]].",
        "To find precedent for your project type, filter the database by the agency that does that work and your state [[eisEpaDatabase]]. Agencies also post their own: DOE's EIS list filters by office and topic [[eisDoeEisList]], and BLM's National NEPA Register searches by project name, NEPA number and keyword [[eisBlmEplanning]]. When you read one, check:",
      ],
      bullets: [
        "The alternatives chapter: what was proposed and which options were compared",
        "The environmental consequences: how each resource's effects were analyzed",
        "The comment responses in the final EIS: what reviewers challenged",
        "EPA's comment letter on the draft, in the same database [[eisEpa309]]",
        "The record of decision: the alternative selected and the mitigation adopted",
      ],
    },
  ],
  outline: {
    heading: "EIS outline: what an environmental impact statement contains",
    intro:
      "NEPA lists what every EIS must address [[usc4332]]. With CEQ's regulations removed [[ceqIfr]], this outline follows the minimum elements in USDA's procedures [[usda1b7]] and DOE's [[doeProcedures]]. Other agencies differ; use yours.",
    items: [
      {
        title: "Cover",
        detail:
          "Two pages at most: the title, the lead and cooperating agencies, the location, a contact and the unique identification number [[usda1b7]].",
      },
      {
        title: "Purpose and need",
        detail:
          "A brief statement of the underlying purpose and need [[usc4336a]], generally based on the agency's authority or, for an application, informed by the applicant's goals [[usda1b7]] [[doeProcedures]].",
      },
      {
        title: "Proposed action and alternatives",
        detail:
          "A reasonable range of technically and economically feasible alternatives that meet the purpose and need, including no action [[usc4332]], with brief reasons for any eliminated from detailed study [[usda1b7]].",
      },
      {
        title: "Affected environment",
        detail:
          "A succinct description of the area the alternatives could affect, which may be combined with the effects analysis [[usda1b7]].",
      },
      {
        title: "Environmental effects",
        detail:
          "Reasonably foreseeable effects, unavoidable adverse effects, short-term uses versus long-term productivity, and irreversible and irretrievable commitments of federal resources [[usc4332]], plus any means identified to mitigate adverse effects [[doeProcedures]].",
      },
      {
        title: "Other laws, permits and consultation",
        detail:
          "Reviews under other laws such as the Endangered Species Act and the National Historic Preservation Act, the federal permits needed, and the agencies and persons consulted [[usda1b7]].",
      },
      {
        title: "Comments and responses",
        detail:
          "In the final EIS, the substantive comments on the draft and the agency's responses [[eisFhwa771125]].",
      },
      {
        title: "Page-limit and deadline statements",
        detail:
          "The responsible official's statements that the EIS meets the page limit and deadline [[usda1b7]] [[doeProcedures]].",
      },
      {
        title: "Appendices",
        detail:
          "Voluminous data such as tables and calculations that support the analysis, not additional analysis [[usda1b7]].",
      },
    ],
  },
  faq: [
    {
      question: "What is an environmental impact statement?",
      answer:
        "The detailed written statement NEPA requires for a proposed federal action with a reasonably foreseeable significant effect on the quality of the human environment (42 U.S.C. 4332(2)(C) and 4336(b)(1)). It analyzes the action's effects and a reasonable range of alternatives, including no action, before the agency decides.",
    },
    {
      question: "How many pages can an EIS be?",
      answer:
        "Since the 2023 amendments to NEPA, 150 pages, or 300 for an action of extraordinary complexity, not counting citations and appendices (42 U.S.C. 4336a(e)). USDA and DOE also specify single-spaced 12-point text on 8.5 by 11 inch pages, and count pages with maps and tables.",
    },
    {
      question: "How long does an EIS take?",
      answer:
        "By statute, no more than two years from the earliest of the agency's decision that an EIS is required, its notice that a right-of-way application is complete, or its notice of intent, with extensions only as long as needed (42 U.S.C. 4336a(g)). Before that limit, CEQ found EISs completed from 2010 to 2018 averaged 4.5 years from notice of intent to record of decision.",
    },
    {
      question: "Is a draft EIS required?",
      answer:
        "It depends on the agency. FHWA, FRA and FTA circulate a draft EIS for 45 to 60 days of comment, USDA lets the responsible official choose whether to publish a draft, and DOE's procedures note there is no statutory requirement to post a draft EIS for comment.",
    },
    {
      question: "Where can I find environmental impact statement examples?",
      answer:
        "EPA's EIS database (cdxapps.epa.gov/cdx-enepa-II) lists every EIS filed with EPA since 1987, with PDFs since October 2012, searchable by title, agency and state. DOE's EIS list and BLM's National NEPA Register post project documents, and Northwestern University's Transportation Library holds nearly all federal EISs since 1969.",
    },
    {
      question: "Can ePlan write my EIS?",
      answer:
        "No. ePlan outlines the EIS from your project description and files, researches precedent EISs, and marks every fact it can't confirm for you to fill. Your team writes the analysis, and the responsible official makes the decision.",
    },
  ],
};
