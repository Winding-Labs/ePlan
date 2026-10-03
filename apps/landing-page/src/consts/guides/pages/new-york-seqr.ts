import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

// /for/new-york-seqr. Reused keys: stateNyEcl80109 (ECL § 8-0109, defined in
// pages/state-environmental-review.ts; same URL, so not redefined here).
// Every source below was opened on 2026-10-02. The DEC PDFs were read in full;
// the ECL sections were read on nysenate.gov (last updated 2026-05-29).

const READ = "2026-10-02";

const ECL = (section: string, heading: string): Source => ({
  title: `Environmental Conservation Law § ${section}: ${heading}`,
  publisher: "New York State Senate, Consolidated Laws of New York",
  url: `https://www.nysenate.gov/legislation/laws/ENV/${section}`,
  published: "2026-05-29",
  read: READ,
});

export const sources = {
  seqrDec: {
    title: "State Environmental Quality Review Act (SEQR)",
    publisher: "New York State Department of Environmental Conservation (DEC)",
    url: "https://dec.ny.gov/regulatory/permits-licenses/seqr",
    read: READ,
  },
  seqrSteps: {
    title: "Stepping Through The SEQR Process",
    publisher: "New York State Department of Environmental Conservation (DEC)",
    url: "https://dec.ny.gov/regulatory/permits-licenses/seqr/stepping-through-process",
    read: READ,
  },
  seqrPart617: {
    title:
      "6 NYCRR Part 617, State Environmental Quality Review (reproduction; revisions adopted April 24, 2026, effective June 11, 2026)",
    publisher:
      "New York State Department of Environmental Conservation, Division of Environmental Permits",
    url: "https://dec.ny.gov/sites/default/files/2026-08/part617seqr.pdf",
    published: "2026-06-11",
    read: READ,
  },
  seqrRevisions: {
    title: "State Environmental Quality Review Act (SEQR) Regulatory Revisions",
    publisher: "New York State Department of Environmental Conservation (DEC)",
    url: "https://dec.ny.gov/regulatory/regulations/proposed-emergency-recently-adopted-regulations/state-environmental-quality-review-act-regulatory-revisions",
    published: "2026-04-24",
    read: READ,
  },
  seqrFactSheet: {
    title: "SEQR Amendments (fact sheet on Part R of the enacted state budget)",
    publisher: "New York State Department of Environmental Conservation (DEC)",
    url: "https://dec.ny.gov/sites/default/files/2026-08/seqramndmntsfactsheet.pdf",
    published: "2026-05-26",
    read: READ,
  },
  seqrEcl80105: ECL("8-0105", "Definitions"),
  seqrEcl80111: ECL(
    "8-0111",
    "Coordination of reporting; limitations; lead agency",
  ),
  seqrFeaf1: {
    title:
      "Full Environmental Assessment Form, Part 1: Project and Setting (FEAF 2026)",
    publisher: "New York State Department of Environmental Conservation (DEC)",
    url: "https://dec.ny.gov/sites/default/files/2024-08/feafpart1.pdf",
    read: READ,
  },
  seqrHandbook: {
    title: "The SEQR Handbook, Fourth Edition",
    publisher:
      "New York State Department of Environmental Conservation, Division of Environmental Permits",
    url: "https://dec.ny.gov/sites/default/files/2025-09/seqrhandbook.pdf",
    published: "2020-03",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/new-york-seqr",
  title: "SEQRA Guide: Full EAF, Type II & 2026 Changes",
  description:
    "New York SEQRA step by step: Type I, Type II and Unlisted actions, the Full EAF, declarations and the 2026 amendments.",
  eyebrow: "New York SEQRA",
  h1: "SEQRA guide: New York's environmental review, from the Full EAF to findings",
  primaryKeyword: "seqra",
  secondaryKeywords: [
    "seqr",
    "seqra process",
    "nys seqr",
    "seqr type ii actions",
    "environmental assessment form",
    "positive declaration",
  ],
  document: "Full EAF Part 1",
  answer:
    "SEQRA, New York's State Environmental Quality Review Act (ECL Article 8), requires state, regional and local agencies to weigh environmental impacts before they approve, fund or undertake a discretionary action [[seqrDec]]. Under 6 NYCRR Part 617, the lead agency classifies the action, reviews the sponsor's environmental assessment form (EAF), and issues a negative declaration or positive declaration requiring an [EIS](/for/environmental-impact-statement) [[seqrPart617]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "ECL Article 8 and 6 NYCRR Part 617, last amended effective June 11, 2026 [[seqrDec]] [[seqrPart617]]",
    },
    {
      label: "Prepared by",
      value:
        "The sponsor completes EAF Part 1; the lead agency completes Parts 2 and 3 [[seqrPart617]]",
    },
    {
      label: "Lead agency",
      value:
        "The involved agency principally responsible for the action [[seqrPart617]]",
    },
    {
      label: "Challenges",
      value:
        "In court under CPLR Article 78; DEC does not review other agencies' SEQR processes [[seqrDec]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I'm preparing a Full EAF Part 1 for…",
    examples: [
      {
        emoji: "☀️",
        label: "Solar Farm",
        heading: "Full EAF for Solar Farm",
        eyebrow: "COMMUNITY SOLAR",
        prompt:
          "I'm an environmental consultant preparing the Full EAF Part 1 for a 5-megawatt community solar farm on 28 acres of hayfield in Ulster County that needs a town planning board special use permit and site plan approval.",
      },
      {
        emoji: "🏘️",
        label: "Townhouse Community",
        heading: "Full EAF for Townhouse Community",
        eyebrow: "NEW HOUSING",
        prompt:
          "I'm a consultant for a developer preparing the Full EAF Part 1 for a 240-unit townhouse community on 60 wooded acres in Saratoga County that will connect to public water and sewer.",
      },
      {
        emoji: "🏭",
        label: "Distribution Warehouse",
        heading: "Full EAF for Distribution Warehouse",
        eyebrow: "LOGISTICS",
        prompt:
          "I'm a civil engineer preparing the Full EAF Part 1 for a 300,000-square-foot distribution warehouse with 400 truck and car spaces on 35 acres in Orange County.",
      },
      {
        emoji: "💧",
        label: "Water Treatment",
        heading: "Full EAF for Water Treatment Plant",
        eyebrow: "PUBLIC WATER",
        prompt:
          "I'm the project engineer for a Long Island water district planning a new 4-million-gallon-per-day wellfield and treatment plant on 12 acres in Suffolk County.",
      },
      {
        emoji: "🗺️",
        label: "Corridor Rezoning",
        heading: "Full EAF for Zoning Amendment",
        eyebrow: "LAND USE",
        prompt:
          "I'm a town planner in Dutchess County preparing the Full EAF for a town board rezoning that would allow mixed-use development on 120 acres along a state highway corridor.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the Full EAF Part 1 answers, from the project description and approvals table to the site facts, for the sponsor to review and sign; every fact it can't confirm is marked for you.",
    mock: {
      project: "5 MW community solar farm",
      documentTitle: "Full EAF Part 1",
      summary:
        "I drafted Sections A through D of the Full EAF Part 1 for the solar farm from your description and left the site facts for the county records and the EAF Mapper to confirm. Five details still need your input.",
      missing: [
        "Tax map number and total parcel acreage",
        "Planning board application date",
        "Agricultural district name and number",
        "EAF Mapper report for the parcel",
        "Route of the line to the utility interconnection",
      ],
      letterhead: {
        left: [
          "Full Environmental Assessment Form",
          "Part 1 - Project and Setting",
        ],
        right: [
          "[INSERT: sponsor name and address]",
          "Ulster County, New York",
        ],
      },
      meta: ["Project: [INSERT: project name]", "Date: October 2, 2026"],
      paragraphs: [
        "A. Brief description of proposed action: construction and operation of a 5-megawatt (AC) community solar farm with fixed-tilt arrays, inverters, a gravel access road and perimeter fencing on about 28 acres of a [INSERT: total parcel acreage]-acre parcel now in hay production. The purpose is to supply subscribers through the local utility's distribution system.",
        "B. Government approvals: City, Town or Village Planning Board, yes: special use permit and site plan approval, application date [INSERT: application date]. City, Town or Village Zoning Board of Appeals, no. Federal agencies, no.",
        "D.1.b. Total acreage to be physically disturbed: 28 acres. E.3.a. Certified agricultural district (Agriculture and Markets Law Article 25-AA): [INSERT: district name and number, or none]. EAF Mapper results are attached.",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "Your project description and files, following the Full EAF Part 1 you upload or it finds",
      manual: "A blank 15-page form, answered question by question",
    },
    {
      label: "Precedent research",
      eplan:
        "Researches agency project pages for your project and up to two similar ones",
      manual: "Search town agendas and DEC notices by hand for comparable EAFs",
    },
  ],
  sections: [
    {
      heading: "The SEQRA process, step by step",
      paragraphs: [
        "Part 617 sets the steps and clocks for a Type I or Unlisted action [[seqrPart617]] [[seqrSteps]]:",
      ],
      bullets: [
        "Classify the action; a Type II action ends the review [[seqrPart617]]",
        "Establish the lead agency: involved agencies agree within 30 days of receiving the EAF; DEC's Commissioner resolves disputes [[seqrPart617]] [[seqrSteps]]",
        "Determine significance within 20 days of becoming lead agency or receiving needed information, whichever is later [[seqrPart617]]",
        "After a positive declaration: scoping, a draft EIS posted online, 30+ days of comment, optional hearing [[seqrPart617]] [[seqrSteps]]",
        "Final EIS: within 45 days after the hearing or 60 after the draft is filed, whichever is later [[seqrPart617]]",
        "Written findings at least 10 days after the final EIS; due within 30 when there is an applicant [[seqrPart617]]",
      ],
    },
    {
      heading: "Type I, Unlisted and SEQR Type II actions",
      paragraphs: [
        "Type I actions, listed in 617.4 and agencies' own procedures, are presumed likely to have a significant adverse impact, may require an EIS and need coordinated review. Examples: 200 or more homes on public water and sewer in a municipality of 150,000 or fewer; a nonresidential project physically altering 10 acres; use changes on 25 or more acres of a zoning district [[seqrPart617]].",
        "Type II actions, listed in 617.5 or on an agency's own list, are not subject to review. Every other action is Unlisted [[seqrPart617]].",
      ],
    },
    {
      heading:
        "Negative declaration, conditioned negative declaration or positive declaration",
      paragraphs: [
        "The lead agency reviews the EAF against the criteria in 617.7(c) and explains its determination in writing. If the action may include the potential for at least one significant adverse environmental impact, it issues a positive declaration, which requires an EIS and states how and when scoping will happen [[seqrPart617]].",
        "A negative declaration states there will be no significant adverse impacts. A conditioned negative declaration, only for Unlisted actions with an applicant, needs a full EAF, coordinated review, notice in DEC's Environmental Notice Bulletin and at least 30 days for comment [[seqrPart617]].",
      ],
    },
    {
      heading: "What changed in NYS SEQR in 2026",
      paragraphs: [
        "Budget amendments effective May 26, 2026 exempt qualified housing, parks and trails on previously disturbed sites, and some school, water and green infrastructure projects [[seqrFactSheet]] [[seqrEcl80111]] [[seqrEcl80105]]. They also set clocks: one year from establishing the lead agency to determine significance and, for permit applications, two years from a positive declaration to the final EIS [[seqrEcl80111]] [[stateNyEcl80109]].",
        "DEC's Part 617 amendments, effective June 11, 2026, added a significance criterion for disproportionate pollution burdens on disadvantaged communities, a Type II category for small multifamily buildings (up to 10,000 square feet) on existing water and sewer, and new EAF forms [[seqrPart617]] [[seqrRevisions]]. The SEQR Handbook (2020) predates both changes [[seqrHandbook]].",
      ],
    },
  ],
  outline: {
    heading: "What the Full EAF Part 1 asks, section by section",
    intro:
      "Type I actions use the full EAF; most Unlisted actions use the short EAF [[seqrPart617]]. The 2026 Full EAF Part 1 runs 15 pages in seven sections [[seqrFeaf1]]. SEQR is one of the [state environmental policy acts](/for/state-environmental-review) similar to [NEPA](/for/nepa).",
    items: [
      {
        title: "A. Project and applicant/sponsor information",
        detail:
          "Name, location map, a brief description with purpose or need, and the sponsor, contact and property owner [[seqrFeaf1]].",
      },
      {
        title: "B. Government approvals, funding or sponsorship",
        detail:
          "Every approval or funding source, local to federal, with application dates; list every involved agency you can identify [[seqrFeaf1]] [[seqrPart617]].",
      },
      {
        title: "C. Planning and zoning",
        detail:
          "Adopted plans (including any on climate change), zoning and community services; a plan, law or rule adoption alone completes only C, F and G [[seqrFeaf1]].",
      },
      {
        title: "D.1 Proposed and potential development",
        detail:
          "Nature of the action, site acreage and acres disturbed, phasing, subdivisions, residential units, nonresidential structures and impoundments [[seqrFeaf1]].",
      },
      {
        title: "D.2 Project operations",
        detail:
          "Excavation, water, wastewater, stormwater, air emissions (greenhouse gases above 10,000 metric tons CO2e a year), traffic, energy, noise, lighting and waste [[seqrFeaf1]].",
      },
      {
        title: "E.1 to E.3 Site and setting",
        detail:
          "Land uses, contamination history, soils, groundwater, and designated resources such as agricultural districts, historic sites and critical environmental areas [[seqrFeaf1]].",
      },
      {
        title: "E.4 Disadvantaged communities",
        detail:
          "In or within half a mile of a disadvantaged community (ECL Article 75), and whether its emissions, noise or waste may affect one [[seqrFeaf1]].",
      },
      {
        title: "E.5 Future physical climate risks",
        detail:
          "Projected 100- and 500-year floods and sea level rise, and whether the action increases vulnerability to drought, temperature extremes, storms, erosion or flooding [[seqrFeaf1]].",
      },
      {
        title: "F. Additional information and G. Verification",
        detail:
          "Attachments, any adverse impacts the sponsor identified with measures to avoid or minimize them, and the sponsor's signed certification [[seqrFeaf1]].",
      },
    ],
  },
  faq: [
    {
      question: "What is the difference between SEQR and SEQRA?",
      answer:
        "None in substance. DEC uses SEQR as the short name for SEQRA, the State Environmental Quality Review Act, and for the review it requires.",
    },
    {
      question: "What are examples of SEQR Type II actions?",
      answer:
        "The 617.5 list includes maintenance or repair involving no substantial change to an existing structure. Agencies may also adopt their own Type II lists, which bind no other agency.",
    },
    {
      question: "Does the EAF Mapper answer the whole form?",
      answer:
        "No. DEC's EAF Mapper, a GIS application, answers seven questions on the short EAF and up to 20 on the full EAF from the project location. If you disagree with an answer, give the lead agency more specific information.",
    },
    {
      question: "Can ePlan draft a Full EAF Part 1?",
      answer:
        "Yes. ePlan drafts Full EAF Part 1 answers from your project description, files and any EAF Mapper report you upload, marking every fact it cannot confirm. It files and publishes nothing; the lead agency makes every SEQR determination.",
    },
  ],
};
