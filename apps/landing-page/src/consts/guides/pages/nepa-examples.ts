import type { GuidePath } from "../paths";
// /for/nepa-examples. Reused source keys: eisEpaDatabase, eisEpaCopy,
// eisNoa20260925, eisDoeEisList, eisBlmEplanning
// (pages/environmental-impact-statement.ts); doeEaList (pages/doe-nepa.ts);
// exCeqanet (pages/ceqa-exemptions.ts); ceqIfr, ceqProcedures, usdaFinal,
// usda1b4, usda1b5, usc4336a, usc4336e, doeProcedures (shared NEPA sources).
import type { GuideContent, Source } from "../types";

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

export const entry: GuideContent<GuidePath> = {
  path: "/for/nepa-examples",
  title: "EIS Examples, EAs and CE Memos to Model On",
  description:
    "Real EIS, EA and CE decision memo examples from 2024 to 2026, where each is published, and how to pick a precedent.",
  eyebrow: "NEPA examples",
  h1: "EIS examples, environmental assessments and CE records: real NEPA documents to model a draft on",
  primaryKeyword: "eis examples",
  secondaryKeywords: [
    "environmental assessment examples",
    "nepa examples",
    "categorical exclusion examples",
    "environmental impact statement examples",
  ],
  document: "EA Modeled on a Precedent",
  answer:
    "EIS examples are [environmental impact statements](/for/environmental-impact-statement) agencies have filed for real projects; planners use them, along with [environmental assessments](/for/nepa-environmental-assessment) (EAs) and [categorical exclusion](/for/nepa-categorical-exclusion) (CE) records, as models for new NEPA documents. EPA's database holds the EISs [[eisEpaDatabase]]; EAs and CE records stay on the preparing agency's site [[eisBlmEplanning]].",
  glance: [
    {
      label: "EISs",
      value:
        "EPA's [EIS database](/for/eis-database) (records since 1987, PDFs since October 2012) and agency lists such as DOE's [[eisEpaDatabase]] [[eisDoeEisList]]",
    },
    {
      label: "EAs and CE records",
      value:
        "BLM's National NEPA Register, Forest Service project pages, the Park Service's PEPC, DOE's EA list [[eisBlmEplanning]] [[ex2FsTrail]] [[ex2NpsPepc]] [[doeEaList]]",
    },
    {
      label: "Newest EISs",
      value:
        "EPA's weekly notice of availability in the Federal Register [[eisNoa20260925]]",
    },
    {
      label: "Older EISs",
      value:
        "Northwestern University's Transportation Library holds nearly all federal EISs since 1969 [[eisEpaCopy]]",
    },
    {
      label: "California",
      value:
        "[CEQAnet](/for/ceqanet) also carries some NEPA documents sent to the State Clearinghouse [[exCeqanet]]",
    },
  ],
  hero: {
    prefix: "Draft an EA Modeled on a",
    placeholder: "I'm drafting an EA and need a precedent to model it on for…",
    examples: [
      {
        emoji: "🔥",
        label: "Fuels EA",
        heading: "Fuels Precedent",
        eyebrow: "FOREST FUELS",
        prompt:
          "I'm the NEPA planner on a ranger district in northeast Oregon drafting an EA for thinning and prescribed burning on 9,000 acres around a city's municipal watershed, and I want to follow a recent fuels EA.",
      },
      {
        emoji: "🥾",
        label: "Trail EA",
        heading: "Trail Precedent",
        eyebrow: "TRAIL CONSTRUCTION",
        prompt:
          "I'm a recreation planner on a national forest in western North Carolina drafting an EA for 14 miles of new mountain bike trail and a trailhead, and I want to follow a recent trail EA.",
      },
      {
        emoji: "🛣️",
        label: "Highway EA",
        heading: "Highway Precedent",
        eyebrow: "STATE HIGHWAY",
        prompt:
          "I'm an environmental planner at a state DOT drafting an EA with our FHWA division office to widen 3 miles of a two-lane US highway to four lanes through a small town in Nebraska.",
      },
      {
        emoji: "⚡",
        label: "Transmission EA",
        heading: "Transmission Precedent",
        eyebrow: "ENERGY TRANSMISSION",
        prompt:
          "I'm a BLM project manager in Wyoming drafting an EA on a right-of-way application for a 25-mile, 230-kV transmission line across public land, and I want a recent transmission EA to follow.",
      },
      {
        emoji: "🏜️",
        label: "Park Road EA",
        heading: "Park Road Precedent",
        eyebrow: "NATIONAL PARKS",
        prompt:
          "I'm a compliance specialist at a national park in Utah drafting an EA, with FHWA's Federal Lands office, to rehabilitate 18 miles of paved park road and add two scenic pullouts.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan finds an analog project, then drafts the EA following the precedent's structure with your facts in place; every fact it can't confirm is marked for you.",
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
      heading: "Environmental impact statement examples (2024 to 2026)",
      paragraphs: [
        "Read a final EIS with its record of decision: the precedent is the analysis and the decision together.",
      ],
      bullets: [
        "Transmission line: BLM's Greenlink West in Nevada, a 472-mile line; record of decision signed September 9, 2024 [[ex2GreenlinkRod]]",
        "Solar and storage, draft EIS: TVA's Hope Solar and Storage Project in Mississippi, EIS No. 20260126 [[eisNoa20260925]]",
        "Military basing, final EIS: the Air Force's F-35A training unit at Kingsley Field, Oregon, EIS No. 20260127 [[eisNoa20260925]]",
      ],
    },
    {
      heading: "Environmental assessment examples with a FONSI",
      paragraphs: [
        "Read each EA with its finding of no significant impact (FONSI); FTA's Valley Link FONSI, for example, incorporates the EA by reference [[ex2ValleyLinkFonsi]].",
      ],
      bullets: [
        "Forest fuels: the Forest Service's Baker City Watershed Fuels project in Oregon; decision notice signed June 6, 2025 [[ex2FsFuels]] [[ex2FsFuelsDn]]",
        "Park road: Park Service rehabilitation of about 42 miles of Mojave National Preserve roads; FONSI July 18, 2025 [[ex2NpsPepc]] [[ex2MojaveFonsi]]",
        "Highway: FHWA and Iowa DOT's U.S. 75 in Hinton, a 0.7-mile four-lane rebuild; FONSI November 4, 2025 [[ex2IowaHinton]] [[ex2IowaHintonFonsi]]",
        "Passenger rail: FTA's Valley Link FONSI, 22 miles from Dublin/Pleasanton BART to Mountain House, May 2025 [[ex2ValleyLink]] [[ex2ValleyLinkFonsi]]",
      ],
    },
    {
      heading: "Categorical exclusion examples: decision memos and CE records",
      paragraphs: [
        "The Forest Service's decision memo for rebuilding 17 miles of the Virginia Creeper Trail after Hurricane Helene, signed February 21, 2025, used the trail construction and reconstruction category [[ex2FsTrail]], now at 7 CFR 1b.4(d)(26) [[usda1b4]]. USDA's April 2026 rule moved Forest Service categories into 7 CFR part 1b and dropped the term decision memo [[usdaFinal]].",
        "DOE posts its CE determinations for appendix B actions online, generally within two weeks [[doeProcedures]]. Many CEs need no written record at all [[usda1b4]], so expect fewer published examples than for EAs.",
      ],
    },
    {
      heading: "NEPA examples: how to pick a precedent for your project",
      paragraphs: [
        "Use a precedent for structure and issues, not findings. Rank candidates by:",
      ],
      bullets: [
        "Same agency, or one under the same procedures: each agency now sets its own [[ceqProcedures]]",
        "Same action type and scale: a 0.7-mile highway rebuild and a new corridor raise different issues [[ex2IowaHintonFonsi]]",
        "Same region and resources: the Mojave project added desert tortoise fencing and crossings designed with FWS [[ex2MojaveFonsi]]",
        "Recent: a November 2025 FHWA FONSI already states its EA fits the statutory timeline and page limits [[ex2IowaHintonFonsi]]",
      ],
    },
  ],
  outline: {
    heading: "EA outline: the sections to carry over from a precedent",
    intro:
      "With CEQ's regulations removed in 2025 [[ceqIfr]], each agency sets EA contents in its own procedures [[ceqProcedures]]. This outline follows USDA's minimum elements [[usda1b5]]; match your precedent's order to your agency's list.",
    items: [
      {
        title: "Purpose and need",
        detail:
          "Required in every environmental document [[usc4336a]]; based on the agency's authority or, for an application, the applicant's goals [[usda1b5]].",
      },
      {
        title: "No action, proposed action and any alternatives",
        detail:
          "No action need not be a separate alternative, but its consequences belong in the effects analysis [[usda1b5]].",
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
          "Determinations under laws such as the Endangered Species Act and National Historic Preservation Act, which may inform the FONSI [[usda1b5]].",
      },
      {
        title: "Page-limit and deadline certification",
        detail:
          "75 pages of text at most, not counting citations or appendices, finished within one year [[usc4336a]], with the responsible official's statement [[usda1b5]].",
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
      question: "How do I find EIS examples for my type of project?",
      answer:
        "Filter EPA's EIS database by the agency that does that work and your state, then narrow by title words such as solar, pipeline or highway. DOE's EIS list filters by office and topic, and BLM's National NEPA Register searches by project name and keyword.",
    },
    {
      question: "Are NEPA documents from before 2025 still good examples?",
      answer:
        "For structure and issues, yes. Check the rules they cite: CEQ's regulations were removed in 2025, agencies such as USDA have issued new procedures since, and documents since the 2023 amendments must meet NEPA's page limits and deadlines.",
    },
    {
      question: "Can I reuse another agency's NEPA document?",
      answer:
        "Sometimes. DOE's procedures, for example, let it rely on another federal agency's EA or EIS that meets NEPA's standards and republish it when the actions are substantially the same. Otherwise, use a precedent as a model, not as a source of findings.",
    },
    {
      question: "Can ePlan find NEPA examples for my project?",
      answer:
        "Yes. Its research agent searches agency project pages, CEQAnet, the Federal Register and EPA's EIS database for up to two analog projects, then drafts from the precedent's structure and marks every fact it can't confirm. ePlan is not affiliated with any of those agencies.",
    },
  ],
};
