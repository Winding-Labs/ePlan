import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

/**
 * /for/ipac — USFWS IPaC (Information for Planning and Consultation).
 *
 * Reused source keys, defined in esa-section-7.ts (same URLs; not redefined
 * here): esaIpac (the IPaC home page and its FAQ), esaUsc1536, esaCfr40202,
 * esaCfr40212, esaCfr40214. No key from sources.ts is reused.
 *
 * The example resource list (ipacResourceList) is a public IPaC location page
 * for Utah County, Utah, read on the date below; it shows the report's
 * standard sections, not a project.
 */

const READ = "2026-10-02";

export const sources = {
  ipacFwsService: {
    title: "Information for Planning and Consultation",
    publisher: "U.S. Fish and Wildlife Service",
    url: "https://www.fws.gov/service/information-planning-and-consultation",
    read: READ,
  },
  ipacResourceList: {
    title:
      "IPaC: Explore Location resources (resource list for Utah County, Utah)",
    publisher: "U.S. Fish and Wildlife Service (IPaC)",
    url: "https://ipac.ecosphere.fws.gov/location/XLDO5HM6Y5AVLAHKSKHL5JRPFE/resources",
    read: READ,
  },
  ipacNwiLimits: {
    title:
      "Wetlands Data Limitations, Exclusions and Precautions (National Wetlands Inventory)",
    publisher: "U.S. Fish and Wildlife Service",
    url: "https://www.fws.gov/page/wetlands-data-limitations-exclusions-and-precautions",
    read: READ,
  },
  ipacDkeyFaq: {
    title:
      "IPaC Determination Key Letters and the Consultation Process: Frequently Asked Questions",
    publisher: "U.S. Fish and Wildlife Service, Region 5",
    url: "https://www.fws.gov/sites/default/files/documents/2025-06/faq-for-ipac-determination-letters-and-consultation-process_04.02.25_0.pdf",
    published: "2025-04-02",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/ipac",
  title: "USFWS IPaC: Species Lists, DKeys and Section 7",
  description:
    "How USFWS IPaC works: official species lists vs resource lists, 90-day validity, critical habitat and determination keys.",
  eyebrow: "IPaC",
  h1: "USFWS IPaC: reading an official species list and using it in section 7 review",
  primaryKeyword: "usfws ipac",
  secondaryKeywords: [
    "ipac",
    "ipac fws",
    "official species list",
    "information for planning and consultation",
  ],
  document: "Biological Assessment",
  answer:
    "USFWS IPaC (Information for Planning and Consultation) is the Fish and Wildlife Service's online tool for checking whether a project may affect listed species, critical habitat or other resources the Service manages [[ipacFwsService]]. Federal projects use it to get an official species list: the field office letter naming what to consider under ESA section 7 [[esaIpac]] [[esaUsc1536]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "ESA section 7(c), 16 U.S.C. 1536(c), and 50 CFR 402.12 [[esaUsc1536]] [[esaCfr40212]]",
    },
    {
      label: "Returns",
      value:
        "A resource list, an official species list, determination key letters and a consultation package [[esaIpac]]",
    },
    {
      label: "List valid for",
      value: "90 days, then request an updated list [[esaIpac]]",
    },
    {
      label: "Not covered",
      value: "Species under NOAA Fisheries' sole jurisdiction [[esaIpac]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I'm preparing a biological assessment for…",
    examples: [
      {
        emoji: "🛢️",
        label: "Gas Pipeline",
        heading: "Biological Assessment for a Pipeline",
        eyebrow: "GAS PIPELINE",
        prompt:
          "I'm an environmental consultant for a gas utility preparing the biological assessment for replacing 12 miles of natural gas pipeline in western Pennsylvania that needs an Army Corps Section 404 permit, starting from our IPaC official species list.",
      },
      {
        emoji: "🌉",
        label: "Bridge Replacement",
        heading: "Biological Assessment for a Bridge",
        eyebrow: "HIGHWAY BRIDGE",
        prompt:
          "I'm a biologist at a state DOT district office preparing a biological assessment for an FHWA-funded replacement of a two-lane bridge over a creek with listed freshwater mussels in Tennessee.",
      },
      {
        emoji: "☀️",
        label: "Solar Farm",
        heading: "Biological Assessment for a Solar Farm",
        eyebrow: "RENEWABLE ENERGY",
        prompt:
          "I'm a consultant preparing the biological assessment for a 400-acre solar project on BLM land in southern Nevada within desert tortoise habitat.",
      },
      {
        emoji: "🌊",
        label: "Levee Repair",
        heading: "Biological Assessment for a Levee Repair",
        eyebrow: "FLOOD CONTROL",
        prompt:
          "I'm an environmental planner at an Army Corps of Engineers district drafting the biological assessment for repairing 2 miles of levee along a river in California's Central Valley.",
      },
      {
        emoji: "🌲",
        label: "Forest Thinning",
        heading: "Biological Assessment for Forest Thinning",
        eyebrow: "FOREST MANAGEMENT",
        prompt:
          "I'm a Forest Service wildlife biologist preparing the biological assessment for 1,200 acres of commercial thinning on a national forest in western Oregon with northern spotted owl habitat.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and upload your IPaC outputs, and ePlan drafts the Biological Assessment with the action area, species list review and effects analysis; every fact it can't confirm is marked for you.",
    mock: {
      project: "Line 14 Replacement",
      documentTitle: "Line 14 Replacement — Biological Assessment",
      summary:
        "The Line 14 Replacement — Biological Assessment draft is ready. I built the species section from the official species list you uploaded; if it is more than 90 days old when you begin the assessment, verify it with the Service. A few details still need your input:",
      missing: [
        "IPaC project code and list date",
        "Acres of tree clearing in the right-of-way",
        "Stream crossing methods",
        "Bat survey results, if any",
        "Corps district and permit number",
      ],
      letterhead: {
        left: ["Allegheny Hollow Gas Transmission", "Environmental Permitting"],
        right: [
          "Biological Assessment",
          "Line 14 Replacement Project",
          "[INSERT: county], Pennsylvania",
        ],
      },
      meta: [
        "IPaC Project Code: [INSERT: project code]",
        "Date: October 2, 2026",
      ],
      paragraphs: [
        "Purpose: this biological assessment evaluates the effects of replacing 12 miles of natural gas pipeline on listed and proposed species and critical habitat in the action area. It supports the U.S. Army Corps of Engineers' Section 404 permit review; Allegheny Hollow Gas Transmission prepared it as the Corps' designated non-federal representative.",
        "Species list review: the official species list dated [INSERT: list date] identifies the Indiana bat and the northern long-eared bat, and no critical habitat in the action area. The action area covers the right-of-way, access roads and staging yards, plus the downstream reaches of three stream crossings.",
        "Effects: tree clearing of [INSERT: acres] acres would remove potential summer roosting habitat. Conservation measure BAT-1 limits clearing to the bats' inactive season, [INSERT: clearing window].",
      ],
    },
  },
  comparison: [
    {
      label: "Species list",
      eplan:
        "Reads the official species list, resource list and DKey letters you upload as PDFs",
      manual: "Retype species and critical habitat from the IPaC PDF",
    },
    {
      label: "Starting point",
      eplan:
        "A precedent assessment its research agent finds on agency project pages, or one you upload",
      manual: "A past biological assessment on the shared drive",
    },
  ],
  sections: [
    {
      heading: "Official species list vs. resource list",
      paragraphs: [
        "Draw a location and IPaC produces a resource list of species, critical habitat and other trust resources known or expected on or near it, built mainly from range data [[ipacResourceList]]. It is informational only, does not analyze project impacts and is not official correspondence for ESA consultation [[ipacResourceList]] [[esaIpac]].",
        "Projects a federal agency conducts, permits, funds or licenses must use the official species list instead, requested after logging in and defining a project. Unless it says otherwise, it is an official USFWS response; contact the field office only if you believe it is wrong [[esaIpac]].",
      ],
    },
    {
      heading: "When does an official species list need updating?",
      paragraphs: [
        "If preparation of a biological assessment does not begin within 90 days of receiving the list, the agency must verify with the Service that it is still accurate [[esaCfr40212]]; IPaC lets you request an updated list from the project's home page. When a listed species' range changes, IPaC flags the project with a species update notice and recommends an updated list [[esaIpac]].",
      ],
    },
    {
      heading: "Critical habitat and NWI wetlands in an IPaC report",
      paragraphs: [
        "The species list covers listed, proposed and candidate species, experimental populations and species listed for similarity of appearance [[esaIpac]]. For each, the report says whether final or proposed critical habitat exists and whether your location overlaps it; effects to critical habitat must be analyzed with the species [[ipacResourceList]].",
        "Wetlands come from the National Wetlands Inventory (NWI), which may be out of date; the report says a site visit should confirm their extent and that impacts may be regulated under Clean Water Act Section 404 [[ipacResourceList]]. NWI maps a biological definition of wetlands that may not match Clean Water Act boundaries, so check with the Army Corps regulatory office [[ipacNwiLimits]].",
      ],
    },
    {
      heading: "Determination keys and the Consultation Package Builder",
      paragraphs: [
        "Where a determination key (DKey) exists for your species, project type and area, it can assist with, and for some species and activities conclude, consultation; its letters are official USFWS correspondence [[esaIpac]]. Field offices set their own rules: in Region 5, most projects using the range-wide northern long-eared and tricolored bat key wait 15 days after a not-likely-to-adversely-affect letter while the office may audit it [[ipacDkeyFaq]].",
        "For species no key covers, the Consultation Package Builder walks through the site, activities, stressors, action area and an effect determination per species, and generates a biological analysis usable as a biological assessment, which you send to the field office to initiate consultation [[esaIpac]]. The [ESA section 7 guide](/for/esa-section-7) covers what follows.",
      ],
    },
  ],
  outline: {
    heading: "Biological assessment: the sections",
    intro:
      "Contents are at the federal agency's discretion [[esaCfr40212]]. This order follows what the Services' rules list for an assessment and a formal consultation request [[esaCfr40212]] [[esaCfr40214]], which IPaC's Consultation Package Builder also walks through [[esaIpac]]. [NEPAssist](/for/nepassist) screens the same project area for other resources.",
    items: [
      {
        title: "Proposed action and conservation measures",
        detail:
          "Purpose, duration and timing, location and components, with maps, and any measures to avoid, minimize or offset effects [[esaCfr40214]].",
      },
      {
        title: "Action area",
        detail:
          "All areas affected directly or indirectly, not just the project site [[esaCfr40202]]; draw this area as the project location in IPaC [[esaIpac]].",
      },
      {
        title: "Species and critical habitat considered",
        detail:
          "The listed and proposed species and designated and proposed critical habitat on the official species list [[esaCfr40212]].",
      },
      {
        title: "Species and habitat in the action area",
        detail:
          "Presence, abundance, density or periodic occurrence of each species and its habitat condition [[esaCfr40214]], from site inspection, expert views and literature [[esaCfr40212]].",
      },
      {
        title: "Effects of the action",
        detail:
          "All consequences reasonably certain to occur that would not occur but for the action [[esaCfr40202]], plus cumulative effects [[esaCfr40212]].",
      },
      {
        title: "Alternatives considered",
        detail:
          "An analysis of alternate actions the federal agency considered [[esaCfr40212]].",
      },
      {
        title: "Effect determinations",
        detail:
          "For each species and critical habitat: no effect, not likely to adversely affect, or likely to adversely affect [[esaIpac]] [[ipacDkeyFaq]].",
      },
      {
        title: "Supporting documents",
        detail:
          "The official species list and any determination key analyses [[esaIpac]], plus relevant reports such as [EAs](/for/nepa-environmental-assessment) and EISs [[esaCfr40214]].",
      },
    ],
  },
  faq: [
    {
      question: "How do I log in to IPaC FWS?",
      answer:
        "IPaC signs you in through login.gov, using the same email address you use for IPaC; federal employees associate their PIV card with it. You need to log in only to define a project and request an official species list; the resource list needs no account.",
    },
    {
      question: "Does requesting an official species list start consultation?",
      answer:
        "No. Requesting a list does not start the consultation clock. You initiate consultation by sending the field office your request, such as the package IPaC's Consultation Package Builder generates.",
    },
    {
      question: "Does IPaC include NOAA Fisheries species?",
      answer:
        "Only species the Fish and Wildlife Service manages jointly with NOAA Fisheries. For species under NOAA Fisheries' sole jurisdiction, generally marine mammals, marine and anadromous fish, and sea turtles in the water, contact NOAA Fisheries.",
    },
    {
      question:
        "Does ePlan run IPaC or submit to the Fish and Wildlife Service?",
      answer:
        "No. ePlan is not affiliated with the Service and does not run IPaC or send consultation requests. Upload your official species list, resource list or DKey letters and ePlan drafts the biological assessment from them, marking every fact it cannot confirm.",
    },
  ],
};
