import type { GuidePath } from "../paths";
// /for/nepa-examples. Reused source keys: eisEpaDatabase, eisEpaCopy,
// eisNoa20260925, eisDoeEisList, eisBlmEplanning
// (pages/environmental-impact-statement.ts); doeEaList (pages/doe-nepa.ts); exCeqanet (pages/ceqa-exemptions.ts);
// eirCeqanetSearch (pages/ceqa-eir.ts); ceqIfr, ceqFinal, ceqProcedures,
// usdaFinal, doiFinal, usda1b4, usda1b5, usc4336a, usc4336e, doeProcedures
// (shared NEPA sources).
import type { GuideEntry, Source } from "../types";

const READ = "2026-10-02";

export const sources = {
  ex2FsTrail: {
    title:
      "Virginia Creeper National Recreation Trail Reconstruction Project (#67511)",
    publisher:
      "USDA Forest Service, George Washington and Jefferson National Forests",
    url: "https://www.fs.usda.gov/r08/gwj/projects/67511",
    published: "2025-02-21",
    read: READ,
  },
  ex2FsFuels: {
    title: "Baker City Watershed Fuels Management Project (#58480)",
    publisher: "USDA Forest Service, Wallowa-Whitman National Forest",
    url: "https://www.fs.usda.gov/r06/wallowa-whitman/projects/58480",
    published: "2025-07-31",
    read: READ,
  },
  ex2FsFuelsDn: {
    title:
      "Revised Final Baker City Watershed Fuels Management Project Decision Notice",
    publisher:
      "USDA Forest Service, Wallowa-Whitman National Forest (Pinyon Public)",
    url: "https://usfs-public.app.box.com/v/PinyonPublic/file/1885532435508",
    published: "2025-06-06",
    read: READ,
  },
  ex2NpsPepc: {
    title:
      "Rehabilitation of South Kelbaker and Kelso-Cima Road (PEPC project 112970)",
    publisher:
      "National Park Service, Planning, Environment and Public Comment (PEPC)",
    url: "https://parkplanning.nps.gov/projectHome.cfm?parkID=322&projectID=112970",
    read: READ,
  },
  ex2MojaveFonsi: {
    title:
      "Finding of No Significant Impact: Kelso-Cima Road and South Kelbaker Road Rehabilitation",
    publisher: "National Park Service, Mojave National Preserve",
    url: "https://parkplanning.nps.gov/showFile.cfm?sfid=807714&projectID=112970",
    published: "2025-07-18",
    read: READ,
  },
  ex2IowaHinton: {
    title: "U.S. 75 Hinton Reconstruction (NEPA project documents)",
    publisher: "Iowa Department of Transportation",
    url: "https://iowadot.gov/nepa-compliance/nepa-projects-documents/us-75-hinton-reconstruction",
    read: READ,
  },
  ex2IowaHintonFonsi: {
    title:
      "Finding of No Significant Impact and Individual Section 4(f) for the U.S. 75 in Hinton Project",
    publisher:
      "Federal Highway Administration and Iowa Department of Transportation",
    url: "https://iowadot.gov/media/12708/download?inline=",
    published: "2025-11-04",
    read: READ,
  },
  ex2ValleyLink: {
    title:
      "Valley Link Rail Project: Dublin/Pleasanton to Mountain House Community Finding of No Significant Impact (SCH 2018092027)",
    publisher: "CEQAnet, State Clearinghouse",
    url: "https://ceqanet.lci.ca.gov/2018092027/9",
    published: "2025-06-04",
    read: READ,
  },
  ex2ValleyLinkFonsi: {
    title: "Finding of No Significant Impact: Valley Link Rail Project",
    publisher: "Federal Transit Administration (posted on CEQAnet)",
    url: "https://ceqanet.lci.ca.gov/2018092027/9/Attachment/-31uZF",
    published: "2025-05",
    read: READ,
  },
  ex2GreenlinkRod: {
    title:
      "Notice of Availability of the Record of Decision and Approved Resource Management Plan Amendment for the Greenlink West Transmission Project, 89 FR 74981",
    publisher: "Bureau of Land Management, Federal Register",
    url: "https://www.federalregister.gov/documents/2024/09/13/2024-20864/notice-of-availability-of-the-record-of-decision-and-approved-resource-management-plan-amendment-for",
    published: "2024-09-13",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/nepa-examples",
  parent: "/for/nepa",
  family: "tools",
  name: "NEPA examples",
  title: "EIS Examples, EAs and CE Memos to Model On",
  description:
    "EIS examples, EAs with FONSIs and CE decision memos from 2024 to 2026, where each type is published, and how to pick a precedent for your NEPA document.",
  eyebrow: "NEPA examples",
  h1: "EIS examples, environmental assessments and CE records: real NEPA documents to model a draft on",
  primaryKeyword: "eis examples",
  secondaryKeywords: [
    "environmental assessment examples",
    "nepa examples",
    "categorical exclusion examples",
    "environmental impact statement examples",
  ],
  document: "NEPA Document",
  answer:
    "EIS examples, like examples of environmental assessments and categorical exclusion records, are the NEPA documents agencies publish for real projects. EISs are filed with EPA, whose database holds every EIS received since 1987 and the PDFs since October 2012 [[eisEpaDatabase]]. EAs and CE records stay with the agency that prepared them, on sites such as BLM's National NEPA Register [[eisBlmEplanning]], Forest Service project pages [[ex2FsTrail]] and the Park Service's PEPC [[ex2NpsPepc]]. The most useful precedent comes from the same agency, for the same kind of action, under the procedures now in force [[ceqProcedures]].",
  glance: [
    {
      label: "EISs",
      value:
        "EPA's EIS database: records since 1987, PDFs since October 2012 [[eisEpaDatabase]]",
    },
    {
      label: "EAs and CE records",
      value:
        "The preparing agency's site, such as BLM's National NEPA Register [[eisBlmEplanning]]",
    },
    {
      label: "Newest EISs",
      value:
        "EPA's weekly notice of availability in the Federal Register [[eisNoa20260925]]",
    },
    {
      label: "California",
      value:
        "CEQAnet also carries some NEPA documents sent to the State Clearinghouse [[exCeqanet]]",
    },
    {
      label: "Older EISs",
      value:
        "Northwestern University's Transportation Library holds nearly all federal EISs since 1969 [[eisEpaCopy]]",
    },
  ],
  hero: {
    prefix: "Draft",
    placeholder: "I need a precedent to model my NEPA document on for…",
    examples: [
      {
        emoji: "🔥",
        label: "Fuels EA",
        heading: "an EA Modeled on a Fuels Precedent",
        eyebrow: "FOREST FUELS",
        prompt:
          "I'm the NEPA planner on a ranger district in northeast Oregon drafting an EA for thinning and prescribed burning on 9,000 acres around a city's municipal watershed, and I want to follow a recent fuels EA.",
      },
      {
        emoji: "🥾",
        label: "Trail CE Memo",
        heading: "a CE Memo Modeled on a Trail Precedent",
        eyebrow: "TRAIL REPAIR",
        prompt:
          "I'm a recreation planner on a national forest in western North Carolina documenting a categorical exclusion to rebuild 6 miles of storm-damaged trail and two footbridges.",
      },
      {
        emoji: "🛣️",
        label: "Highway EA",
        heading: "an EA Modeled on a Highway Precedent",
        eyebrow: "STATE HIGHWAY",
        prompt:
          "I'm an environmental planner at a state DOT drafting an EA with our FHWA division office to widen 3 miles of a two-lane US highway to four lanes through a small town in Nebraska.",
      },
      {
        emoji: "⚡",
        label: "Transmission EIS",
        heading: "an EIS Outline From a Transmission EIS",
        eyebrow: "ENERGY TRANSMISSION",
        prompt:
          "I'm a BLM project manager in Wyoming outlining an EIS on a right-of-way application for a 280-mile, 500-kV transmission line across public and private land.",
      },
      {
        emoji: "🏜️",
        label: "Park Road EA",
        heading: "an EA Modeled on a Park Road Precedent",
        eyebrow: "NATIONAL PARKS",
        prompt:
          "I'm a compliance specialist at a national park in Utah drafting an EA, with FHWA's Federal Lands office, to rehabilitate 18 miles of paved park road and add two scenic pullouts.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan finds an analog project, then drafts the NEPA document following the precedent's structure with your facts in place; every fact it can't confirm is marked for you.",
    mock: {
      project: "9,000-acre watershed fuels project",
      documentTitle:
        "Environmental Assessment — Watershed Fuels Reduction Project",
      summary:
        "I drafted the Environmental Assessment — Watershed Fuels Reduction Project following the chapter order of a recent Forest Service fuels EA I found on a national forest's project page. A few details still need your input:",
      missing: [
        "Ranger district",
        "City and watershed name",
        "Commercial thinning acres",
        "Eliminated alternatives",
        "Specialist reports",
      ],
      letterhead: {
        left: [
          "United States Department of Agriculture",
          "Forest Service",
          "[INSERT: ranger district]",
        ],
        right: [
          "Environmental Assessment",
          "Watershed Fuels Reduction Project",
          "[INSERT: county], Oregon",
        ],
      },
      meta: [
        "UIN: [INSERT: unique identification number]",
        "Date: October 2, 2026",
      ],
      paragraphs: [
        "1.1 Purpose and need. The purpose of the project is to reduce hazardous fuels between the [INSERT: city] municipal watershed and adjacent private land, so that a wildfire is less likely to burn at high intensity and firefighters have safer places to engage it.",
        "2.1 Proposed action. The district proposes commercial thinning from below on about [INSERT: acres] acres, non-commercial thinning, and prescribed burning across the 9,000-acre project area, with design criteria for riparian areas and the municipal water supply.",
        "2.2 No action and alternatives. The EA compares the proposed action with no action. [INSERT: alternatives considered but eliminated] are listed with the reason each was dropped.",
      ],
    },
  },
  comparison: [
    {
      label: "Precedent research",
      eplan:
        "The research agent searches agency project pages, CEQAnet, the Federal Register and EPA's EIS database for up to two analog projects",
      manual: "Searching each agency's project site, one keyword at a time",
    },
    {
      label: "Starting point",
      eplan:
        "A draft that follows the precedent's structure, with your project facts and every unconfirmed fact marked",
      manual: "Copying an old document and deleting the last project's details",
    },
  ],
  sections: [
    {
      heading: "Where to find NEPA examples by document type",
      paragraphs: [
        "Each kind of NEPA document lives somewhere different. EPA's database covers EISs only [[eisEpaDatabase]]; EAs, findings of no significant impact (FONSIs) and categorical exclusion records are published by the agency that wrote them.",
      ],
      bullets: [
        "EISs and EPA comment letters: EPA's EIS database, searchable by title, agency, state and date [[eisEpaDatabase]]",
        "BLM: the National NEPA Register (ePlanning), searchable by project name, NEPA number and keyword [[eisBlmEplanning]]",
        "Forest Service: each forest's project pages, which show the analysis type, milestones, the decision date and the documents [[ex2FsTrail]] [[ex2FsFuels]]",
        "National Park Service: the PEPC site, with a document list for each project [[ex2NpsPepc]]",
        "Department of Energy: EIS and EA lists filterable by DOE office and topic [[eisDoeEisList]] [[doeEaList]]",
        "Highway projects: the state DOT's NEPA project pages, such as Iowa DOT's [[ex2IowaHinton]]",
        "California: CEQAnet, which also holds some federal NEPA documents [[exCeqanet]]",
      ],
    },
    {
      heading: "Environmental impact statement examples (2024 to 2026)",
      paragraphs: [
        "Three recent EISs, from three agencies. Where a record of decision has been issued, read it with the final EIS: the precedent is the analysis and the decision together.",
      ],
      bullets: [
        "Transmission line, EIS and record of decision: BLM's Greenlink West Transmission Project in Nevada, a 472-mile line. The record of decision was signed September 9, 2024, and also covers decisions by the National Park Service, Bureau of Indian Affairs and DOE's National Nuclear Security Administration [[ex2GreenlinkRod]]",
        "Solar and battery storage, draft EIS: the Tennessee Valley Authority's Hope Solar and Storage Project in Mississippi, EIS No. 20260126, in EPA's September 25, 2026 notice [[eisNoa20260925]]",
        "Military basing, final EIS: the Air Force's F-35A Lightning II Formal Training Unit at Kingsley Field Air National Guard Base in Klamath Falls, Oregon, EIS No. 20260127, in the same notice [[eisNoa20260925]]",
      ],
    },
    {
      heading: "Environmental assessment examples with a FONSI",
      paragraphs: [
        "Four EAs from 2025, from four agencies. Read each EA with its FONSI: FTA's Valley Link FONSI, for example, incorporates the EA by reference [[ex2ValleyLinkFonsi]].",
      ],
      bullets: [
        "Forest fuels: the Forest Service's Baker City Watershed Fuels Management Project in Oregon. The decision notice, signed June 6, 2025, rests on the EA and FONSI and authorizes commercial thinning on 2,665 acres and prescribed burning of activity fuels on 22,477 acres [[ex2FsFuels]] [[ex2FsFuelsDn]]",
        "Park road: the Park Service's rehabilitation of about 42 miles of Kelso-Cima and South Kelbaker Roads in Mojave National Preserve, California, with FHWA as a cooperating agency. The FONSI was signed July 18, 2025 [[ex2NpsPepc]] [[ex2MojaveFonsi]]",
        "Highway: FHWA and Iowa DOT's U.S. 75 in Hinton Project, about 0.7 mile rebuilt as a four-lane divided highway. FHWA signed the FONSI and Individual Section 4(f) document November 4, 2025 [[ex2IowaHinton]] [[ex2IowaHintonFonsi]]",
        "Passenger rail: the Federal Transit Administration's FONSI for the Valley Link Rail Project, 22 miles from the Dublin/Pleasanton BART station to Mountain House, dated May 2025 and posted to CEQAnet June 4, 2025 [[ex2ValleyLink]] [[ex2ValleyLinkFonsi]]",
      ],
    },
    {
      heading: "Categorical exclusion examples: decision memos and CE records",
      paragraphs: [
        "On the George Washington and Jefferson National Forests, the Virginia Creeper National Recreation Trail Reconstruction Project covers 17 miles of trail damaged by Hurricane Helene. Its decision memo was signed February 21, 2025, under the trail construction and reconstruction category then at 36 CFR 220.6(e)(1) [[ex2FsTrail]].",
        "That category now sits at 7 CFR 1b.4(d)(26) [[usda1b4]]. USDA's April 2026 rule moved the Forest Service's categories into 7 CFR part 1b and dropped Forest Service terms such as decision memo; the categories that need documentation did not change [[usdaFinal]]. DOE posts its CE determinations for actions in appendix B online, generally within two weeks [[doeProcedures]]. Many CEs need no written record at all; USDA lists those separately [[usda1b4]], so expect fewer published examples than for EAs.",
      ],
    },
    {
      heading: "How to pick a precedent for your project",
      paragraphs: [
        "A precedent is a model for structure and issues, not a source of findings. DOE, for example, may rely on another federal agency's EA or EIS that meets NEPA's standards, and should cite and briefly describe any portion it relies on [[doeProcedures]]. Rank candidates on four things:",
      ],
      bullets: [
        "Same agency, or one under the same procedures: each agency now sets its own NEPA procedures [[ceqProcedures]]",
        "Same action type and scale: a 0.7-mile highway rebuild and a new corridor raise different issues [[ex2IowaHintonFonsi]]",
        "Same region and resources: the Mojave road project added desert tortoise fencing and crossings designed with the Fish and Wildlife Service [[ex2MojaveFonsi]]",
        "Recent, and within the 2023 limits: an EA may run 75 pages and an EIS 150, or 300 if extraordinarily complex, not counting citations and appendices [[usc4336a]]",
      ],
    },
    {
      heading: "Why the date on a NEPA example matters in 2026",
      paragraphs: [
        "CEQ's NEPA regulations were removed effective April 11, 2025, and the removal was finalized January 8, 2026 [[ceqIfr]] [[ceqFinal]]. Documents from the transition say which rules they followed. The Park Service's July 2025 Mojave FONSI cites Interior's procedures and CEQ's February 2025 memo telling agencies to keep following CEQ's regulations, since removed, for ongoing reviews [[ex2MojaveFonsi]]. FTA's May 2025 Valley Link FONSI says analysis under the rescinded executive orders and removed CEQ regulations did not inform its finding [[ex2ValleyLinkFonsi]].",
        "Agencies then finalized new NEPA rules of their own: Interior on February 24, 2026 [[doiFinal]] and USDA on April 3, 2026 [[usdaFinal]]. A November 2025 FHWA FONSI already states that its EA fits the statutory timeline and page limits [[ex2IowaHintonFonsi]]. Use an older document for its structure and issues, then check every cited rule against your agency's current procedures.",
      ],
    },
    {
      heading: "California: NEPA examples on CEQAnet",
      paragraphs: [
        "CEQAnet, the State Clearinghouse database, holds key information on CEQA documents since 1990, and some federal NEPA documents submitted for state review; full text is available since March 2019. It is not complete, because not every document goes to the Clearinghouse [[exCeqanet]]. Its advanced search filters by document type, including environmental assessment, draft EIS, FONSI and joint document [[eirCeqanetSearch]]. FTA's Valley Link FONSI, for example, is posted there with Attachments A through D [[ex2ValleyLink]].",
      ],
    },
  ],
  outline: {
    heading: "EA outline: the sections to carry over from a precedent",
    intro:
      "Each agency now sets EA contents in its own procedures [[ceqProcedures]]. This outline follows USDA's minimum elements [[usda1b5]]; match your precedent's section order to your agency's list, not the other way round.",
    items: [
      {
        title: "Purpose and need",
        detail:
          "Required in every environmental document [[usc4336a]]; based on the agency's authority or, for an application, the applicant's goals [[usda1b5]].",
      },
      {
        title: "No action, proposed action and any alternatives",
        detail:
          "No action need not be a separate alternative, but its consequences belong in the effects analysis; other alternatives as NEPA requires [[usda1b5]].",
      },
      {
        title: "Potentially affected environment and impacts",
        detail:
          "A succinct description, which may be combined with the effects, with enough evidence to decide between an EIS and a FONSI [[usda1b5]].",
      },
      {
        title: "Agencies and persons consulted",
        detail: "A succinct list [[usda1b5]].",
      },
      {
        title: "Other environmental reviews",
        detail:
          "Determinations under other laws, such as the Endangered Species Act and National Historic Preservation Act, which may inform the FONSI [[usda1b5]].",
      },
      {
        title: "Page-limit and deadline certification",
        detail:
          "75 pages of text at most, not counting citations or appendices, finished within one year [[usc4336a]], with the responsible official's certifying statement [[usda1b5]].",
      },
      {
        title: "Unique identification number",
        detail: "On the EA itself [[usda1b5]].",
      },
      {
        title: "FONSI or decision to prepare an EIS",
        detail:
          "A FONSI is the agency's determination that the action does not require an EIS [[usc4336e]].",
      },
    ],
  },
  faq: [
    {
      question: "What is an example of an environmental impact statement?",
      answer:
        "BLM's Greenlink West Transmission Project EIS in Nevada is a recent one: a 472-mile transmission line whose record of decision, signed September 9, 2024, also covered the National Park Service, Bureau of Indian Affairs and DOE's National Nuclear Security Administration. EPA's EIS database lists every EIS filed since 1987.",
    },
    {
      question: "Where can I find environmental assessment examples?",
      answer:
        "On the website of the agency that prepared them: BLM's National NEPA Register, Forest Service project pages, the Park Service's PEPC site, DOE's EA list and state DOT project pages. EAs are not filed in EPA's EIS database, which holds EISs.",
    },
    {
      question: "What is an example of a categorical exclusion?",
      answer:
        "The Forest Service's February 2025 decision memo for rebuilding 17 miles of the Virginia Creeper Trail after Hurricane Helene used the trail construction and reconstruction category. Each agency lists its categories in its own NEPA procedures; USDA's are now at 7 CFR 1b.4.",
    },
    {
      question: "Can I reuse another agency's NEPA document?",
      answer:
        "Sometimes. DOE's procedures, for example, let it rely on another federal agency's EA or EIS that meets NEPA's standards and republish it when the actions are substantially the same. Otherwise, use a precedent as a model for structure and issues, not as a source of findings.",
    },
    {
      question: "Are NEPA documents from before 2025 still good examples?",
      answer:
        "For structure and issues, yes. Check the rules they cite: CEQ's regulations were removed in 2025, Interior, USDA and other agencies issued new procedures in 2026, and documents since the 2023 amendments must meet NEPA's page limits and deadlines.",
    },
    {
      question: "Can ePlan find NEPA examples for my project?",
      answer:
        "Yes. Its research agent searches agency project pages, CEQAnet, the Federal Register and EPA's EIS database for your project and up to two analog projects, then drafts from the precedent's structure and marks every fact it can't confirm. ePlan is not affiliated with any of those agencies.",
    },
  ],
};
