import type { GuidePath } from "../paths";
// /for/eis-database. Reused source keys: eisEpaDatabase, eisEpaFiling,
// eisEpa309, eisEpaCopy (pages/environmental-impact-statement.ts); usc4332,
// usc4336a, usda1b7, ceqIfr (shared NEPA sources).
import type { GuideContent, Source } from "../types";

const READ = "2026-10-02";

export const sources = {
  eisdbEnepaGuide: {
    title:
      "e-NEPA Filing Guidance: Guide on Registration and Preparing an EIS for Electronic Submission",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://www.epa.gov/sites/default/files/2021-01/documents/e-nepa-guide-on-registration-and-preparing-an-eis-for-electronic-submission.pdf",
    published: "2021-01-04",
    read: READ,
  },
  eisdbLastWeek: {
    title: "EIS Database search results: EISs filed during the previous week",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://cdxapps.epa.gov/cdx-enepa-II/public/action/eis/search?search=&commonSearch=lastWeek",
    read: READ,
  },
  eisdbHopeSolar: {
    title:
      "EIS Details: Hope Solar and Storage Project Draft Environmental Impact Statement (EIS No. 20260126)",
    publisher: "U.S. Environmental Protection Agency, EIS Database",
    url: "https://cdxapps.epa.gov/cdx-enepa-II/public/action/eis/details?eisId=573124",
    published: "2026-09-25",
    read: READ,
  },
  eisdbNoa20261002: {
    title:
      "Environmental Impact Statements; Notice of Availability, 91 FR 62728",
    publisher: "Environmental Protection Agency, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/10/02/2026-20240/environmental-impact-statements-notice-of-availability",
    published: "2026-10-02",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/eis-database",
  title: "EIS Database: How to Search EPA's EIS Records",
  description:
    "How to search EPA's EIS database by title, agency and state, read a record, and download the EISs and comment letters it holds.",
  eyebrow: "EIS database",
  h1: "The EPA EIS database: search, read and download environmental impact statements",
  primaryKeyword: "eis database",
  secondaryKeywords: [
    "epa eis database",
    "environmental impact statement database",
    "e-nepa",
    "federal register notice of availability",
  ],
  document: "EIS Outline",
  answer:
    "EPA's EIS database is the public record of the [environmental impact statements](/for/environmental-impact-statement) federal agencies file with EPA, with the EIS documents and EPA's comment letters on them [[eisEpaDatabase]]. Agencies file through e-NEPA, and EPA's weekly Federal Register notice of availability starts each comment or review period [[eisEpaFiling]].",
  glance: [
    {
      label: "Holds",
      value:
        "EIS records since 1987, EPA comment letters since 2001, PDFs since October 2012 [[eisEpaDatabase]]",
    },
    {
      label: "Search by",
      value:
        "Title, CEQ number, agency, state, Federal Register date and comment letter date [[eisEpaDatabase]]",
    },
    {
      label: "Older EISs",
      value:
        "Northwestern University's Transportation Library holds nearly all federal EISs since 1969 [[eisEpaCopy]]",
    },
    {
      label: "Filing deadline",
      value:
        "Monday, 10:00 a.m. Eastern, for that Friday's Federal Register [[eisEpaFiling]]",
    },
    {
      label: "Review periods",
      value:
        "45 days recommended for a draft EIS and 30 for a final, from EPA's notice [[eisEpaFiling]]",
    },
  ],
  hero: {
    prefix: "Draft an EIS Outline From",
    placeholder: "I'm outlining an EIS and need a precedent for…",
    examples: [
      {
        emoji: "☀️",
        label: "Solar and Storage",
        heading: "a Solar Precedent",
        eyebrow: "UTILITY SOLAR",
        prompt:
          "I'm a NEPA specialist at USDA's Rural Utilities Service starting an EIS on a cooperative's 200-MW solar and battery storage project on 1,800 acres of farmland in northern Alabama.",
      },
      {
        emoji: "🚢",
        label: "LNG Expansion",
        heading: "an LNG Precedent",
        eyebrow: "NATURAL GAS",
        prompt:
          "I'm an environmental consultant supporting a FERC application to add a liquefaction train at an existing LNG export terminal on the Louisiana coast.",
      },
      {
        emoji: "✈️",
        label: "Aircraft Basing",
        heading: "a Basing Precedent",
        eyebrow: "MILITARY BASING",
        prompt:
          "I'm a NEPA planner at an Air National Guard base in the Mountain West preparing an EIS for basing 18 new training aircraft and building two hangars.",
      },
      {
        emoji: "⛏️",
        label: "Mine Expansion",
        heading: "a Mine Precedent",
        eyebrow: "HARDROCK MINING",
        prompt:
          "I'm a BLM project lead in central Nevada starting an EIS on a plan of operations to expand an open-pit gold mine onto 1,200 more acres of public land.",
      },
      {
        emoji: "🛣️",
        label: "Highway Corridor",
        heading: "a Highway Precedent",
        eyebrow: "NEW HIGHWAY",
        prompt:
          "I'm an environmental manager at a state DOT working with our FHWA division office on an EIS for a 15-mile, four-lane highway on new location in southern Georgia.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the EIS outline following a precedent EIS from EPA's database, with your project facts in place; every fact it can't confirm is marked for you.",
    mock: {
      project: "200-MW solar and battery storage project",
      documentTitle: "EIS Outline — Solar and Battery Storage Project",
      summary:
        "I built the EIS Outline — Solar and Battery Storage Project on USDA's minimum EIS elements and the chapter order of two solar EISs I found in EPA's EIS database. A few details still need your input:",
      missing: [
        "Cooperative's name",
        "County",
        "Interconnection route",
        "Cooperating agencies",
        "Notice of intent date",
      ],
      letterhead: {
        left: [
          "United States Department of Agriculture",
          "Rural Development",
          "Rural Utilities Service",
        ],
        right: [
          "Environmental Impact Statement Outline",
          "200-MW Solar and Battery Storage Project",
          "[INSERT: county], Alabama",
        ],
      },
      meta: [
        "UIN: [INSERT: unique identification number]",
        "Date: October 2, 2026",
      ],
      paragraphs: [
        "Precedents. This outline follows the chapter order of two recent solar and storage EISs found in EPA's EIS database, adapted to USDA's minimum EIS elements. Their EPA comment letters flagged [INSERT: issues raised by EPA], which chapter 3 addresses up front.",
        "Chapter 1, Purpose and need. RUS's purpose is to decide whether to provide financial assistance to [INSERT: cooperative] for a 200-MW solar and battery storage facility on about 1,800 acres in northern Alabama.",
        "Chapter 2, Alternatives. The EIS will compare the proposed site layout, a layout that avoids [INSERT: resource to avoid], and no action.",
      ],
    },
  },
  comparison: [
    {
      label: "Precedent research",
      eplan:
        "The research agent searches EPA's EIS database, agency project pages and the Federal Register for up to two analog projects",
      manual:
        "Filtering the database by agency and state, then opening each record's PDFs one by one",
    },
    {
      label: "Starting point",
      eplan:
        "An outline that follows the precedent's chapters, with your project facts filled in and gaps marked",
      manual: "A blank outline or your office's last EIS",
    },
  ],
  sections: [
    {
      heading: "What is in EPA's environmental impact statement database?",
      paragraphs: [
        "Besides the EISs, it posts the letters EPA writes on every draft EIS under Clean Air Act section 309 [[eisEpa309]]. Search-page shortcuts list EISs filed the previous week, EISs open for comment, EPA comments from the past 60 days and EISs published in the last 30 days. For questions about a project, EPA sends you to the lead agency [[eisEpaDatabase]].",
        "It holds no [environmental assessments](/for/nepa-environmental-assessment): e-NEPA takes EISs only, not EAs or stand-alone records of decision [[eisdbEnepaGuide]]. Find EAs, FONSIs and decision documents on the preparing agency's project pages.",
      ],
    },
    {
      heading: "How to search the EPA EIS database and read a record",
      paragraphs: [
        "You can include EISs where an agency was co-lead or cooperating, or limit results to EISs with EPA comment letters; a search returns at most 500 records [[eisEpaDatabase]], exportable to CSV, Excel, XML or HTML [[eisdbLastWeek]]. For a [precedent](/for/nepa-examples), search by the agency that does your kind of work and your state, then narrow by title words such as solar, pipeline or highway.",
        "A record shows the document type, Federal Register and comment due dates, the notice of intent date, EPA's letter date, lead agency and a contact. TVA's Hope Solar and Storage draft EIS (No. 20260126), for example, lists a 189-page PDF and EPA's one-page letter. EPA stopped rating draft EISs in October 2018 [[eisdbHopeSolar]].",
      ],
    },
    {
      heading: "How to download EIS documents",
      paragraphs: [
        "On a record's page, complete the ALTCHA check, then download the EIS files and EPA's comment letters, each listed with its page count and size [[eisdbHopeSolar]]. A large EIS may come in several PDFs, because e-NEPA caps each public file at 125 MB and asks agencies to split bigger documents by chapter [[eisdbEnepaGuide]].",
      ],
    },
    {
      heading: "The weekly Federal Register notice of availability",
      paragraphs: [
        "Each Friday, or Thursday if Friday is a federal holiday, EPA publishes a notice of availability listing every EIS filed the week before. Amended notices carry corrections, changed time periods, withdrawals and retractions, and no period ends on a weekend or holiday [[eisEpaFiling]].",
        "The October 2, 2026 notice, for example, lists FERC's final EIS for the Sabine Pass Stage 5 Expansion Project in Texas and NHTSA's final supplemental EIS for the SAFE Vehicles Rule III [[eisdbNoa20261002]].",
      ],
    },
  ],
  outline: {
    heading:
      "EIS outline: the chapters to carry over from a database precedent",
    intro:
      "Take structure and issues from the precedent, and content from your agency's procedures. With CEQ's regulations removed [[ceqIfr]], this outline follows NEPA [[usc4332]] [[usc4336a]] and USDA's minimum EIS elements [[usda1b7]].",
    items: [
      {
        title: "Cover",
        detail:
          "Two pages at most: title, lead and cooperating agencies, location, contact and unique identification number [[usda1b7]]. Copy the precedent's layout, not its agencies.",
      },
      {
        title: "Purpose and need",
        detail:
          "A brief statement of the underlying purpose and need [[usc4336a]], based on your agency's authority or an applicant's goals [[usda1b7]].",
      },
      {
        title: "Proposed action and alternatives",
        detail:
          "A reasonable range of feasible alternatives that meet the purpose and need, plus no action [[usc4332]], with reasons for any eliminated [[usda1b7]].",
      },
      {
        title: "Potentially affected environment",
        detail:
          "A succinct description of the areas the alternatives may affect; it may be combined with the impacts [[usda1b7]].",
      },
      {
        title: "Environmental impacts",
        detail:
          "Reasonably foreseeable and unavoidable adverse effects, short-term uses versus long-term productivity, irreversible commitments of resources [[usc4332]], and means to reduce adverse effects [[usda1b7]].",
      },
      {
        title: "Reviews, permits and consultation",
        detail:
          "Compliance with other laws, the federal permits needed, and the agencies and persons consulted [[usda1b7]].",
      },
      {
        title: "Comments and responses",
        detail:
          "How comments were addressed, which USDA recommends placing in an appendix [[usda1b7]]. A precedent's EPA letter shows what reviewers challenged [[eisEpa309]].",
      },
      {
        title: "Page-limit and deadline statements",
        detail:
          "Certification that the EIS meets the 150-page limit (300 if extraordinarily complex) and the two-year deadline [[usc4336a]] [[usda1b7]].",
      },
    ],
  },
  faq: [
    {
      question: "Do I need an e-NEPA account to search the EIS database?",
      answer:
        "No. Anyone can search it at cdxapps.epa.gov and download EISs and comment letters. Only filers register in e-NEPA: federal employees, and state employees whose agencies hold assigned NEPA authority. Contractors cannot submit EIS documents.",
    },
    {
      question: "What do EPA's comment letters on an EIS cover?",
      answer:
        "On a draft EIS, measures to avoid and mitigate significant impacts and whether the information is adequate. On a final EIS, whether the lead agency took EPA's comments into account; EPA may refer an unsatisfactory project to the Council on Environmental Quality.",
    },
    {
      question: "How do I get a copy of an EIS from before 2012?",
      answer:
        "Ask the lead agency's contact person listed in the database or Northwestern University's Transportation Library, or ask a librarian to borrow EPA's microfiche of EISs filed from 1970 to 1990.",
    },
    {
      question: "Does ePlan file EISs with EPA?",
      answer:
        "No. ePlan is not affiliated with EPA and does not file anything in e-NEPA or the Federal Register. It searches the EIS database for precedent EISs and outlines yours; your agency files the finished EIS.",
    },
  ],
};
