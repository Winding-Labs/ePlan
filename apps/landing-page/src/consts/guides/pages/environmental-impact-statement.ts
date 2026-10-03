// Reused source keys (defined in the shared NEPA sources): usc4332, usc4336,
// usc4336a, usc4336e, ceqIfr, ceqProcedures, sevenCounty, usda1b7, usda1b8.
// DOE is cited to its July 13, 2026 procedures (doeProcedures). Some keys
// defined here are cited only by other pages (eisEpaDatabase, eisEpaCopy,
// eisDoeEisList, eisBlmEplanning, eisUsda1b9).
import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

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

export const entry: GuideContent<GuidePath> = {
  path: "/for/environmental-impact-statement",
  title: "Environmental Impact Statement: Steps & Examples",
  description:
    "What an environmental impact statement covers, when NEPA requires one, page limits, the steps to a ROD and real examples.",
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
    "An environmental impact statement (EIS) is the detailed statement [NEPA](/for/nepa) requires for a proposed federal action with a reasonably foreseeable significant effect on the quality of the human environment [[usc4336e]] [[usc4336]]. It analyzes the action's effects and a reasonable range of alternatives, including no action [[usc4332]], and ends in the agency's decision, such as a record of decision [[usda1b8]] [[doeProcedures]].",
  glance: [
    {
      label: "Legal basis",
      value: "NEPA section 102(2)(C), 42 U.S.C. 4332(2)(C) [[usc4332]]",
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
    {
      label: "Deadline",
      value:
        "2 years from the EIS determination, complete right-of-way application or NOI, whichever is first [[usc4336a]]",
    },
    {
      label: "Filed with",
      value:
        "EPA, which publishes a weekly notice of availability in the Federal Register [[eisEpaFiling]]",
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
      heading:
        "What is an environmental impact statement, and when is one required?",
      paragraphs: [
        "If no significant effect is reasonably foreseeable, or its significance is unknown, the agency prepares an environmental assessment instead, unless a categorical exclusion applies. No environmental document is needed if the action is not final agency action, is excluded, would clearly and fundamentally conflict with another law, or is nondiscretionary [[usc4336]].",
        "Recent filings show the range: EPA's September 25, 2026 notice lists EISs for a TVA solar and storage project, Air Force F-35A training basing and a FERC liquefaction project [[eisNoa20260925]]. Some agencies list actions that normally need one; FHWA, FRA and FTA name these, among others [[eisFhwa771115]]:",
      ],
      bullets: [
        "A new controlled-access freeway",
        "A highway of four or more lanes on a new location",
        "A new or extended fixed transit facility, such as light rail, not primarily within existing transportation right-of-way",
        "A new major railroad line or facility outside existing transportation right-of-way",
      ],
    },
    {
      heading:
        "EIS steps: notice of intent, draft and final EIS, record of decision",
      paragraphs: [
        "With CEQ's regulations at 40 CFR parts 1500-1508 removed in 2025 [[ceqIfr]], the statute and each agency's NEPA procedures set the steps [[ceqProcedures]]. The usual sequence:",
      ],
      bullets: [
        "Notice of intent: a Federal Register notice that must request comment on alternatives, impacts and relevant information [[usda1b7]] [[usc4336a]]",
        "[Scoping](/for/nepa-scoping-letter): optional under USDA; FHWA, FRA and FTA scope before the NOI [[usda1b7]] [[eisFhwa771123]]",
        "Draft EIS: agency procedures decide whether it circulates; EPA recommends 45 days of comment [[doeProcedures]] [[eisEpaFiling]]",
        "EPA review: EPA comments on every draft EIS under Clean Air Act section 309 and posts its letters [[eisEpa309]]",
        "Final EIS: responds to comments and, under FHWA's rule, names the preferred alternative; EPA recommends 30 days' review [[eisFhwa771125]] [[eisEpaFiling]]",
        "Record of decision: states the selected alternative and mitigation; FHWA combines it with the final EIS where practicable [[usda1b8]] [[eisFhwa771124]]",
      ],
    },
    {
      heading: "EIS page limits and the two-year deadline",
      paragraphs: [
        "USDA and DOE count 8.5 by 11 inch pages of single-spaced 12-point text, including pages of maps and tables [[usda1b7]] [[doeProcedures]].",
        "The lead agency may extend the deadline, in consultation with the applicant, only as long as needed, and a project sponsor may petition a court over a missed deadline [[usc4336a]]. FHWA stops the clock at the signed record of decision [[eisFhwa771138]]; DOE at EPA's notice of availability [[doeProcedures]].",
      ],
    },
    {
      heading: "Supplemental EIS and programmatic EIS",
      paragraphs: [
        "FHWA, FRA and FTA supplement an EIS when changes to the action, or new information or circumstances, would cause significant impacts it did not evaluate [[eisFhwa771130]]. DOE writes a supplement analysis when it is unclear whether one is needed [[doeProcedures]].",
        "A programmatic EIS analyzes the effects of a policy, program, plan or group of related actions [[usc4336e]]. Where judicial review of it was available, later reviews of related actions may rely on it for five years unless substantial new circumstances or information bear on it, and after that if the agency reevaluates it [[eisUsc4336b]].",
      ],
    },
  ],
  outline: {
    heading: "EIS outline: what an environmental impact statement contains",
    intro:
      "NEPA lists what every EIS must address [[usc4332]]; agencies set the rest, with substantial deference from courts [[sevenCounty]]. This outline follows USDA's [[usda1b7]] and DOE's [[doeProcedures]] minimum elements. Filed EISs are in [EPA's EIS database](/for/eis-database); [NEPA examples](/for/nepa-examples) lists recent ones by type.",
    items: [
      {
        title: "Cover",
        detail:
          "Two pages at most: title, lead and cooperating agencies, location, contact and unique identification number [[usda1b7]].",
      },
      {
        title: "Purpose and need",
        detail:
          "A brief statement of the underlying purpose and need [[usc4336a]], based on the agency's authority or an applicant's goals [[usda1b7]] [[doeProcedures]].",
      },
      {
        title: "Proposed action and alternatives",
        detail:
          "A reasonable range of feasible alternatives that meet the purpose and need, plus no action [[usc4332]], with reasons for any eliminated [[usda1b7]].",
      },
      {
        title: "Affected environment",
        detail:
          "A succinct description of the area the alternatives could affect; it may be combined with the effects [[usda1b7]].",
      },
      {
        title: "Environmental effects",
        detail:
          "Reasonably foreseeable and unavoidable adverse effects, short-term uses versus long-term productivity, irreversible commitments of resources [[usc4332]], and any mitigation identified [[doeProcedures]].",
      },
      {
        title: "Other laws, permits and consultation",
        detail:
          "Reviews under laws such as the Endangered Species Act and National Historic Preservation Act, federal permits needed, and agencies and persons consulted [[usda1b7]].",
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
          "Supporting data such as tables and calculations, not additional analysis [[usda1b7]].",
      },
    ],
  },
  faq: [
    {
      question: "Is a draft EIS required?",
      answer:
        "It depends on the agency. FHWA, FRA and FTA circulate one for 45 to 60 days of comment, USDA lets the responsible official decide, and DOE's procedures note that no statute requires posting a draft EIS for comment.",
    },
    {
      question: "Where can I find environmental impact statement examples?",
      answer:
        "EPA's EIS database (cdxapps.epa.gov/cdx-enepa-II) lists every EIS filed with EPA since 1987, with PDFs since October 2012, searchable by title, agency and state. DOE and BLM post their own, and Northwestern University's Transportation Library holds nearly all federal EISs since 1969.",
    },
    {
      question: "Who decides how detailed an EIS must be?",
      answer:
        "The agency. In Seven County Infrastructure Coalition v. Eagle County (2025), the Supreme Court called an EIS's depth, length, content and level of detail fact-dependent agency choices that courts should treat with substantial deference.",
    },
    {
      question: "Can ePlan write my EIS?",
      answer:
        "No. ePlan outlines the EIS from your project description and files, finds precedent EISs, and marks every fact it can't confirm. Your team writes the analysis, and the responsible official decides.",
    },
  ],
};
