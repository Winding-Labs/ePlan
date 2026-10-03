import type { GuidePath } from "../paths";
// /for/eis-database. Reused source keys: eisEpaDatabase, eisEpaFiling,
// eisEpa309, eisEpaCopy, eisNoa20260925 (pages/environmental-impact-statement.ts); usc4332,
// usc4336a, usda1b7, ceqIfr (shared NEPA sources).
import type { GuideEntry, Source } from "../types";

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
  eisdb309Memo: {
    title:
      "Clean Air Act Section 309 and National Environmental Policy Act Section 102(2)(C) Implementation (memorandum)",
    publisher: "U.S. Environmental Protection Agency, Deputy Administrator",
    url: "https://www.epa.gov/system/files/documents/2026-06/caasection309nepasection102-2-c-implementation_0.pdf",
    published: "2026-06-24",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/eis-database",
  parent: "/for/nepa",
  family: "tools",
  name: "EIS database",
  title: "EIS Database: How to Search EPA's EIS Records",
  description:
    "How to search EPA's EIS database by title, agency and state, read a record, download EISs and comment letters, and track weekly notices.",
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
    "EPA's EIS database is the public record of the environmental impact statements federal agencies file with EPA: every EIS received since 1987, EPA's comment letters since 2001, and PDFs of the EISs since October 2012 [[eisEpaDatabase]]. Agencies file through EPA's e-NEPA system, and EPA publishes a weekly notice of availability in the Federal Register that starts each comment or review period [[eisEpaFiling]]. The database is also where EPA posts the letters it writes on draft EISs under Clean Air Act section 309 [[eisEpa309]].",
  glance: [
    {
      label: "Run by",
      value:
        "EPA, which administers EIS filing on behalf of the Council on Environmental Quality [[eisEpaFiling]]",
    },
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
    prefix: "Draft an",
    placeholder: "I'm outlining an EIS and need a precedent for…",
    examples: [
      {
        emoji: "☀️",
        label: "Solar and Storage",
        heading: "EIS Outline From a Solar Precedent",
        eyebrow: "UTILITY SOLAR",
        prompt:
          "I'm a NEPA specialist at USDA's Rural Utilities Service starting an EIS on a cooperative's 200-MW solar and battery storage project on 1,800 acres of farmland in northern Alabama.",
      },
      {
        emoji: "🚢",
        label: "LNG Expansion",
        heading: "EIS Outline From an LNG Precedent",
        eyebrow: "NATURAL GAS",
        prompt:
          "I'm an environmental consultant supporting a FERC application to add a liquefaction train at an existing LNG export terminal on the Louisiana coast.",
      },
      {
        emoji: "✈️",
        label: "Aircraft Basing",
        heading: "EIS Outline From a Basing Precedent",
        eyebrow: "MILITARY BASING",
        prompt:
          "I'm a NEPA planner at an Air National Guard base in the Mountain West preparing an EIS for basing 18 new training aircraft and building two hangars.",
      },
      {
        emoji: "⛏️",
        label: "Mine Expansion",
        heading: "EIS Outline From a Mine Precedent",
        eyebrow: "HARDROCK MINING",
        prompt:
          "I'm a BLM project lead in central Nevada starting an EIS on a plan of operations to expand an open-pit gold mine onto 1,200 more acres of public land.",
      },
      {
        emoji: "🛣️",
        label: "Highway Corridor",
        heading: "EIS Outline From a Highway Precedent",
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
      heading: "What is in the EPA EIS database?",
      paragraphs: [
        "The database covers EISs prepared by federal agencies and EPA's comments on them: records of all EISs EPA has received since 1987, EPA comment letters since 2001, and PDFs since October 2012. Shortcuts on the search page list EISs filed the previous week, EISs open for comment, EPA comments issued in the past 60 days, and EISs published in the last 30 days. For questions about a project, EPA sends you to the lead agency [[eisEpaDatabase]].",
        "It does not hold environmental assessments. e-NEPA, the filing system behind the database, is for EISs only, not EAs or stand-alone records of decision [[eisdbEnepaGuide]]. Find EAs, FONSIs and decision documents on the preparing agency's own project pages.",
      ],
    },
    {
      heading: "How to search the EIS database",
      paragraphs: [
        "The search form takes title words (joined with and/or), the CEQ number, the unique identification number, a Federal Register date range, an EPA comment letter date range, the agency, and the state or territory. You can include EISs where your agency was a co-lead or federal cooperating agency, or limit results to EISs with EPA comment letters. A search returns at most 500 records [[eisEpaDatabase]].",
        "Results list each EIS's title, CEQ number, document type, EPA comment letter date, Federal Register date, unique identification number, lead agency, federal cooperating agencies and state, with download links, and export to CSV, Excel, XML or HTML [[eisdbLastWeek]]. To find a precedent, search by the agency that does your kind of work and your state, then narrow by title words such as solar, pipeline or highway.",
      ],
    },
    {
      heading: "Reading an EIS record",
      paragraphs: [
        "Each record shows the EIS title and number, unique identification number, document type, Federal Register date, comment due or review period date, any amended notice, the date of the notice of intent, EPA's comment letter date, state, lead agency and a contact. EPA stopped rating draft EISs in October 2018 [[eisdbHopeSolar]].",
        "Take TVA's Hope Solar and Storage Project in Mississippi: EIS No. 20260126, a draft with a Federal Register date of September 25, 2026 and a notice of intent dated March 13, 2025. The record lists a 189-page draft EIS PDF and EPA's one-page comment letter [[eisdbHopeSolar]]. The same EIS appears in that week's Federal Register notice [[eisNoa20260925]].",
      ],
    },
    {
      heading: "How to download EIS documents",
      paragraphs: [
        "On a record's page, complete the ALTCHA check, then download the EIS files and EPA's comment letters; each file is listed with its page count and size [[eisdbHopeSolar]]. A large EIS may come in several PDFs, because e-NEPA caps each public file at 125 MB and asks agencies to split bigger documents by chapter [[eisdbEnepaGuide]].",
        "For an EIS from before October 2012, contact the preparing agency's contact person listed in the database, or Northwestern University's Transportation Library, which holds nearly all federal EISs issued since 1969. Your librarian can also borrow EPA Headquarters Repository microfiche of final EISs from 1970 to 1977 and all EISs from 1978 to 1990 [[eisEpaCopy]].",
      ],
    },
    {
      heading: "The weekly Federal Register notice of availability",
      paragraphs: [
        "EPA prepares a weekly report of every EIS filed the week before and publishes it each Friday in the Federal Register as a notice of availability, on Thursday if Friday is a federal holiday. Agencies must file by 10:00 a.m. Eastern on Monday to make that week's notice. Amended notices carry corrections, changed time periods, withdrawals and retractions. Comment and review periods run from the notice: 45 days recommended for a draft EIS, 30 for a final, never ending on a weekend or holiday [[eisEpaFiling]].",
        "The October 2, 2026 notice covers EISs filed September 21 to 28: FERC's final EIS for the Sabine Pass Stage 5 Expansion Project in Texas and NHTSA's final supplemental EIS for the SAFE Vehicles Rule III. An amended notice moves the end of the review period for an adopted final EIS on the Anderson Dam Hydroelectric Project in California to October 19, 2026 [[eisdbNoa20261002]].",
      ],
    },
    {
      heading: "How agencies file an EIS through e-NEPA",
      paragraphs: [
        "Federal agencies file the complete EIS, appendices included, through e-NEPA on EPA's Central Data Exchange. Registration is open only to federal employees, or state employees whose agencies hold assigned NEPA authority, and every required approval must be in hand before filing. The lead agency remains responsible for distributing the EIS and for making its PDFs accessible under Section 508 [[eisEpaFiling]].",
        "EPA's e-NEPA guide adds that contractors cannot submit, that every PDF must be searchable, with title, subject, author and keywords in its properties, and that chapters should be bookmarked [[eisdbEnepaGuide]]. An agency adopting another agency's EIS without having been a cooperating agency must republish and refile it; an agency that served as a cooperating agency only notifies EPA, which then notes the adoption in its weekly notice [[eisEpaFiling]].",
      ],
    },
    {
      heading: "EPA's Clean Air Act section 309 comment letters",
      paragraphs: [
        "EPA reviews all draft EISs, and certain other federal actions, under section 309 of the Clean Air Act and makes its reviews public by posting the comment letters in the EIS database. Its draft EIS reviews focus on measures to avoid and mitigate significant impacts and on the adequacy of the information; its final EIS reviews check that the lead agency took EPA's comments into account, and EPA may refer an unsatisfactory project to CEQ [[eisEpa309]].",
        "A June 24, 2026 EPA memo tells reviewers to keep letters focused on EPA's statutory authorities, such as the Clean Air, Clean Water and Safe Drinking Water Acts and Superfund, to group comments by topic, and on a final EIS to focus on new, potentially significant impacts [[eisdb309Memo]]. Read the letter on a precedent EIS to see which issues EPA raised for that kind of project.",
      ],
    },
  ],
  outline: {
    heading:
      "EIS outline: the chapters to carry over from a database precedent",
    intro:
      "Use a precedent from the database for structure and issues, and your agency's procedures for content. With CEQ's regulations removed [[ceqIfr]], this outline follows NEPA [[usc4332]] [[usc4336a]] and USDA's minimum EIS elements [[usda1b7]].",
    items: [
      {
        title: "Cover",
        detail:
          "Two pages at most: title, lead and cooperating agencies, location, contact and unique identification number [[usda1b7]]. Copy the precedent's layout, not its agencies.",
      },
      {
        title: "Purpose and need",
        detail:
          "A brief statement of the underlying purpose and need [[usc4336a]], based on your agency's authority or, for an application, the applicant's goals [[usda1b7]].",
      },
      {
        title: "Proposed action and alternatives",
        detail:
          "A reasonable range of technically and economically feasible alternatives that meet the purpose and need, plus no action [[usc4332]], with reasons for any eliminated [[usda1b7]].",
      },
      {
        title: "Potentially affected environment",
        detail:
          "A succinct description of the areas the alternatives may affect, which may be combined with the impacts [[usda1b7]].",
      },
      {
        title: "Environmental impacts",
        detail:
          "Reasonably foreseeable effects, unavoidable adverse effects, short-term uses versus long-term productivity, and irreversible commitments of federal resources [[usc4332]], plus any means to reduce adverse effects [[usda1b7]].",
      },
      {
        title: "Reviews, permits and consultation",
        detail:
          "Compliance with other laws, the federal permits needed and the agencies and persons consulted [[usda1b7]].",
      },
      {
        title: "Comments and responses",
        detail:
          "How comments were addressed, which USDA recommends placing in an appendix [[usda1b7]]. A precedent's final EIS and EPA's letter show what reviewers challenged [[eisEpa309]].",
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
      question: "What is in the environmental impact statement database?",
      answer:
        "Records of every EIS filed with EPA since 1987, EPA's comment letters since 2001 and PDFs of the EISs since October 2012, each with its Federal Register date, lead agency, state and contact. Anyone can search it at cdxapps.epa.gov without an account.",
    },
    {
      question: "Can I find environmental assessments in the EIS database?",
      answer:
        "No. EPA's e-NEPA filing system takes EISs only, not EAs or stand-alone records of decision. Look for EAs and FONSIs on the preparing agency's project pages, such as BLM's National NEPA Register or a national forest's project list.",
    },
    {
      question: "When does EPA publish EIS notices of availability?",
      answer:
        "Every Friday in the Federal Register, or Thursday when Friday is a federal holiday, for EISs filed by 10:00 a.m. Eastern that Monday. The notice date starts the comment period on a draft EIS and the review period on a final.",
    },
    {
      question: "How do I get a copy of an EIS from before 2012?",
      answer:
        "Ask the lead agency's contact person listed in the database, contact Northwestern University's Transportation Library, which holds nearly all federal EISs since 1969, or ask a librarian to borrow EPA's microfiche of EISs filed from 1970 to 1990.",
    },
    {
      question: "Who can file an EIS in e-NEPA?",
      answer:
        "Federal agency employees, and state employees whose agencies hold assigned NEPA authority. EPA's e-NEPA guide says contractors cannot submit EIS documents.",
    },
    {
      question: "Does ePlan file EISs with EPA?",
      answer:
        "No. ePlan is not affiliated with EPA and does not file anything in e-NEPA or the Federal Register. It searches the EIS database for precedent EISs and outlines yours, and your agency files the finished EIS.",
    },
  ],
};
