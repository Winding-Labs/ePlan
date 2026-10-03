import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

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

export const entry: GuideEntry<GuidePath> = {
  path: "/for/new-york-seqr",
  parent: "/for/state-environmental-review",
  family: "state",
  name: "New York SEQRA",
  title: "SEQRA Guide: Full EAF, Type II & 2026 Changes",
  description:
    "New York SEQRA step by step: Type I, Type II and Unlisted actions, the Full EAF Part 1, negative and positive declarations, and the 2026 amendments.",
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
    "SEQRA, New York's State Environmental Quality Review Act (Environmental Conservation Law Article 8), requires state, regional and local agencies to weigh environmental impacts alongside social and economic considerations before they approve, fund or directly undertake a discretionary action [[seqrDec]]. Under 6 NYCRR Part 617, the lead agency classifies the action as Type I, Type II or Unlisted, reviews the sponsor's environmental assessment form (EAF), and issues a negative declaration, a conditioned negative declaration, or a positive declaration that requires an environmental impact statement [[seqrPart617]]. Amendments in 2026 added statutory exemptions for some housing and infrastructure and new deadlines for NYS SEQR reviews [[seqrFactSheet]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "ECL Article 8 and 6 NYCRR Part 617, last amended effective June 11, 2026 [[seqrDec]] [[seqrPart617]]",
    },
    {
      label: "Prepared by",
      value:
        "The project sponsor completes EAF Part 1; the lead agency completes Parts 2 and 3 [[seqrPart617]]",
    },
    {
      label: "Lead agency",
      value:
        "The involved agency principally responsible for the action; with several involved agencies, they agree on one within 30 calendar days [[seqrPart617]]",
    },
    {
      label: "Determination due",
      value:
        "20 calendar days after the lead agency is established or receives the information it needs, whichever is later; by statute, no more than one year after the lead agency is established [[seqrPart617]] [[stateNyEcl80109]]",
    },
    {
      label: "Form length",
      value:
        "Full EAF Part 1 (2026 form): 15 pages, Sections A to G [[seqrFeaf1]]",
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
      heading: "What is SEQRA, and when does SEQR apply?",
      paragraphs: [
        "SEQRA is the State Environmental Quality Review Act, Article 8 of the Environmental Conservation Law, implemented by DEC's regulations at 6 NYCRR Part 617. It requires local, regional and state agencies to examine environmental impacts equally with social and economic considerations during their discretionary review [[seqrDec]]. SEQR applies when an agency directly undertakes, funds or approves an action; an action that needs no discretionary decision from any agency is not subject to it [[seqrPart617]] [[seqrDec]].",
        "Each agency is responsible for following the law itself. DEC issues the statewide regulations, gives informal guidance and resolves lead agency disputes, but it does not review other agencies' SEQR processes. The public can challenge an agency's decision in court under Article 78 of the Civil Practice Law and Rules [[seqrDec]].",
      ],
    },
    {
      heading: "The SEQRA process, step by step",
      paragraphs: [
        "Part 617 sets the order of steps and most of the clocks for a Type I or Unlisted action [[seqrPart617]] [[seqrSteps]]:",
      ],
      bullets: [
        "Classify the action. A Type II action ends the review; everything else is Type I or Unlisted [[seqrPart617]]",
        "The project sponsor completes Part 1 of the environmental assessment form and lists the other involved agencies it can identify [[seqrPart617]]",
        "Establish the lead agency. With more than one involved agency, they must agree within 30 calendar days of the EAF being sent to them; the DEC Commissioner resolves disputes [[seqrPart617]] [[seqrSteps]]",
        "Determine significance within 20 calendar days of becoming lead agency or of receiving all the information reasonably needed, whichever is later [[seqrPart617]]",
        "After a positive declaration: scoping, a draft EIS the lead agency accepts or returns within 45 days, a comment period of at least 30 days, and an optional hearing [[seqrPart617]]",
        "A final EIS within 45 days after the hearing closes or 60 days after the draft is filed, whichever is later [[seqrPart617]]",
        "Written findings no sooner than 10 days after the final EIS; when there is an applicant, the lead agency's findings and decision are due within 30 days of filing the final EIS [[seqrPart617]]",
      ],
    },
    {
      heading: "Type I, Unlisted and SEQR Type II actions",
      paragraphs: [
        "Type I actions, listed in 617.4 and in agencies' own procedures, carry a presumption that they are likely to have a significant adverse impact and may require an EIS, and they require coordinated review. Examples: 200 or more homes on public water and sewer in a municipality of 150,000 people or fewer; nonresidential projects that physically alter 10 acres; and changes to allowable uses affecting 25 or more acres of a zoning district [[seqrPart617]].",
        "Type II actions, listed in 617.5, are not subject to review because they have been determined not to have a significant impact or are otherwise precluded from review. Agencies may adopt their own Type II lists, which bind no other agency. Every action not listed as Type I or Type II is Unlisted [[seqrPart617]].",
        "The 2026 amendments added a Type II category for a building of four or more homes with no more than 10,000 square feet of gross floor area, on an approved lot, connected to existing public water and sewer, and a permitted use subject to site plan review [[seqrPart617]] [[seqrRevisions]]. Actions that need a major renewable energy facility siting permit under Public Service Law article VIII are also Type II [[seqrPart617]].",
      ],
    },
    {
      heading:
        "Short vs. full environmental assessment form, and the EAF Mapper",
      paragraphs: [
        "A full EAF must be used for Type I actions. Unlisted actions use the short EAF, unless it would not give the lead agency enough information to determine significance. In both, the sponsor completes Part 1 and the lead agency prepares Parts 2 and 3 [[seqrPart617]]. DEC describes the short form as meant for Unlisted actions other than large projects just below Type I thresholds [[seqrDec]].",
        "DEC's EAF Mapper is a GIS application that fills in several Part 1 questions once a project location is defined [[seqrDec]]. The SEQR Handbook says it answers seven questions on the short EAF and up to 20 on the full EAF, uses buffers around mapped resources, and that a sponsor who disagrees with an answer can give the agency more specific information [[seqrHandbook]].",
        "The 2026 forms add questions on disadvantaged communities designated under ECL Article 75 and on future physical climate risks, such as projected 100- and 500-year floods and sea level rise [[seqrFeaf1]] [[seqrRevisions]].",
      ],
    },
    {
      heading:
        "Negative declaration, conditioned negative declaration or positive declaration",
      paragraphs: [
        "To require an EIS, the lead agency must find that the action may include the potential for at least one significant adverse environmental impact. It reviews the EAF against the criteria in 617.7(c), thoroughly analyzes the relevant areas of concern, and puts its determination in writing with a reasoned elaboration. Since 2026 the criteria include an action that may cause or increase a disproportionate pollution burden on a disadvantaged community [[seqrPart617]].",
        "A negative declaration states that the action will not result in any significant adverse impacts. A conditioned negative declaration is available only for Unlisted actions with an applicant, after a full EAF and coordinated review, with a notice in DEC's Environmental Notice Bulletin and at least 30 days for comment. A positive declaration identifies the impacts that require an EIS and states how and when scoping will be conducted [[seqrPart617]].",
      ],
    },
    {
      heading: "Scoping, the draft and final EIS, and findings",
      paragraphs: [
        "Scoping is required for every EIS except a supplemental one. The sponsor submits a draft scope, the public gets an opportunity to take part, and the lead agency provides a final written scope within 60 days of receiving the draft [[seqrPart617]].",
        "A draft EIS describes the action and its purpose, need and benefits; the environmental setting; the potential significant adverse impacts; mitigation; and a range of reasonable alternatives, including no action. Where relevant it addresses climate change and impacts on disadvantaged communities, a topic the 2026 rule added to Part 617 [[seqrPart617]] [[stateNyEcl80109]]. Draft and final EISs must be published on a publicly available website [[seqrSteps]].",
        "Each involved agency then adopts its own findings statement, weighing environmental impacts with social, economic and other considerations and certifying that the action avoids or minimizes adverse impacts to the maximum extent practicable [[seqrPart617]].",
      ],
    },
    {
      heading: "What changed in 2026: SEQRA amendments and the new Part 617",
      paragraphs: [
        "Part R of the state's enacted budget amended ECL Article 8, taking effect immediately on May 26, 2026 [[seqrFactSheet]]. It exempts qualified actions, including housing on previously disturbed sites connected to existing water and sewer systems: up to 250 units in New York City (500 in higher-density districts) and, elsewhere, up to 100 units, 300 in Census-defined urban areas and 20 where there is no zoning [[seqrEcl80111]].",
        "Other exemptions cover public parks and multi-use trails on previously disturbed sites, New York City public school facilities, some water and wastewater projects including lead service line replacement, and green infrastructure retrofits. The definition of a previously disturbed site excludes, among others, recently farmed land and coastal erosion hazard areas, and sponsors must document eligibility, including with a Phase I Environmental Site Assessment [[seqrFactSheet]] [[seqrEcl80105]].",
        "The amendments also add clocks: 120 days from a permit application to decide whether an exemption applies, one year from establishing the lead agency to determine significance, and, for permit applications, two years from the decision that an EIS is required to the final EIS, with listed grounds for extension [[seqrEcl80111]] [[stateNyEcl80109]] [[seqrFactSheet]].",
        "Separately, DEC's Part 617 amendments, adopted April 24, 2026, took effect June 11, 2026 [[seqrPart617]]. The SEQR Handbook's current edition dates from 2020 and covers the 2018 amendments, so check it against both 2026 changes [[seqrHandbook]].",
      ],
    },
  ],
  outline: {
    heading: "What the Full EAF Part 1 asks, section by section",
    intro:
      "The project sponsor completes Part 1; the lead agency completes Parts 2 and 3 [[seqrPart617]]. The 2026 Full EAF Part 1 runs 15 pages in seven sections, and items in Sections C, D and E open with a yes-or-no question [[seqrFeaf1]].",
    items: [
      {
        title: "A. Project and applicant/sponsor information",
        detail:
          "Name, location with a general location map, a brief description including purpose or need, and the sponsor, contact and property owner [[seqrFeaf1]].",
      },
      {
        title: "B. Government approvals, funding or sponsorship",
        detail:
          "Every local, county, regional, state and federal approval or funding source, with application dates, plus coastal area questions. Part 617 requires the sponsor to list all involved agencies it can identify with due diligence [[seqrFeaf1]] [[seqrPart617]].",
      },
      {
        title: "C. Planning and zoning",
        detail:
          "Adopted plans (including any that address climate change), zoning and community services. If a plan, local law or rule adoption is the only approval, only Sections C, F and G are completed [[seqrFeaf1]].",
      },
      {
        title: "D.1 Proposed and potential development",
        detail:
          "Nature of the action, site acreage and acres to be disturbed, phasing, subdivisions, residential units, nonresidential structures and impoundments [[seqrFeaf1]].",
      },
      {
        title: "D.2 Project operations",
        detail:
          "Excavation, water demand, wastewater, stormwater, air emissions (including greenhouse gas emissions above 10,000 metric tons CO2e a year), traffic, energy, hours, noise, lighting, odors, petroleum storage, pesticides and waste [[seqrFeaf1]].",
      },
      {
        title: "E.1 to E.3 Site and setting",
        detail:
          "Land uses on and around the site, contamination history, natural resources such as bedrock, soils and groundwater, and designated resources: agricultural districts, critical environmental areas, historic and archaeological sites, scenic resources and wild, scenic and recreational rivers [[seqrFeaf1]].",
      },
      {
        title: "E.4 Disadvantaged communities",
        detail:
          "Whether the project is within or within half a mile of a disadvantaged community designated under ECL Article 75, and whether its noise, emissions, discharges, odors, light or waste may affect one [[seqrFeaf1]].",
      },
      {
        title: "E.5 Future physical climate risks",
        detail:
          "Vulnerability to projected 100- and 500-year floods and sea level rise, and whether the action increases vulnerability to drought, temperature extremes, storms, landslides, coastal erosion or stormwater flooding [[seqrFeaf1]].",
      },
      {
        title: "F. Additional information and G. Verification",
        detail:
          "Attachments that clarify the project, any adverse impacts the sponsor has identified with measures to avoid or minimize them, and the sponsor's signed certification [[seqrFeaf1]].",
      },
    ],
  },
  faq: [
    {
      question: "What is the difference between SEQR and SEQRA?",
      answer:
        "Both refer to New York's State Environmental Quality Review Act, Article 8 of the Environmental Conservation Law, and the review it requires. DEC's implementing regulations are 6 NYCRR Part 617, and DEC uses SEQR as the short name for the law and its process.",
    },
    {
      question: "What are SEQR Type II actions?",
      answer:
        "Actions listed in 6 NYCRR 617.5, or on an agency's own Type II list, that are not subject to further review because they have been determined not to have a significant impact or are otherwise precluded from review. Examples include maintenance or repair with no substantial change to an existing structure and, since June 2026, certain apartment buildings of up to 10,000 square feet on public water and sewer.",
    },
    {
      question: "When does a lead agency issue a positive declaration?",
      answer:
        "When it determines that the action may include the potential for at least one significant adverse environmental impact. The positive declaration requires an environmental impact statement and must state how and when scoping will be conducted.",
    },
    {
      question: "Who fills out the environmental assessment form?",
      answer:
        "The project sponsor completes Part 1 and lists the other involved agencies. The lead agency completes Parts 2 and 3 to assess the impacts and document its determination of significance. Type I actions use the full EAF; most Unlisted actions use the short EAF.",
    },
    {
      question: "What did the 2026 SEQRA amendments change?",
      answer:
        "The state budget enacted in May 2026 exempted qualified housing, park, trail, New York City school, water infrastructure and green infrastructure projects, mostly on previously disturbed sites, and set deadlines: one year to determine significance and, for permit applications, two years to finish the final EIS. DEC's Part 617 amendments, effective June 11, 2026, added a disadvantaged-community significance criterion, a Type II category for small multifamily buildings and updated EAF forms.",
    },
    {
      question: "Can ePlan file SEQR notices or run the EAF Mapper?",
      answer:
        "No. ePlan drafts SEQR documents, such as Full EAF Part 1 answers, from your project description and files, and marks every fact it cannot confirm. It does not run DEC's EAF Mapper or publish notices in the Environmental Notice Bulletin, but it can read a Mapper report you upload. The lead agency makes every SEQR determination.",
    },
  ],
};
