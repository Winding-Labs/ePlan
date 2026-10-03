import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

/**
 * /for/ipac — USFWS IPaC (Information for Planning and Consultation).
 *
 * Reused source keys, defined in esa-section-7.ts (same URLs, written in the
 * same round; not redefined here): esaIpac (the IPaC home page and its FAQ),
 * esaFwsSection7, esaUsc1536, esaCfr40202, esaCfr40212, esaCfr40214.
 * No key from the worktree's sources.ts or pages/*.ts is reused.
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
  ipacOhioInstr: {
    title:
      "Instructions for Submitting Endangered Species Act Project Review Requests Using IPaC",
    publisher:
      "U.S. Fish and Wildlife Service, Ohio Ecological Services Field Office",
    url: "https://www.fws.gov/sites/default/files/documents/Instructions%20for%20Submitting%20Endangered%20Species%20Act%20Project%20Review%20Requests%20Using%20IPaC_0.pdf",
    published: "2023-04",
    read: READ,
  },
  ipacNoaaMapper: {
    title: "The Greater Atlantic Region ESA Section 7 Mapper",
    publisher: "NOAA Fisheries, Greater Atlantic Regional Fisheries Office",
    url: "https://www.fisheries.noaa.gov/resource/map/greater-atlantic-region-esa-section-7-mapper",
    published: "2026-02-10",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/ipac",
  parent: "/for/nepa",
  family: "tools",
  name: "IPaC",
  title: "USFWS IPaC: Species Lists, DKeys and Section 7",
  description:
    "How USFWS IPaC works: official species list vs. resource list, the 90-day validity, critical habitat, NWI wetlands, determination keys and section 7.",
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
    "USFWS IPaC (Information for Planning and Consultation) is the U.S. Fish and Wildlife Service's online project planning tool for finding out whether a project may affect federally listed species, designated critical habitat or other resources the Service manages [[ipacFwsService]]. Anyone can map a location and print an informational resource list; a federal project needs an official species list, a letter from the local USFWS field office naming the species and critical habitat to consider under section 7 of the Endangered Species Act [[esaIpac]] [[esaUsc1536]]. An official species list is valid for 90 days [[esaIpac]].",
  glance: [
    {
      label: "Run by",
      value: "U.S. Fish and Wildlife Service, on its ECOS system [[esaIpac]]",
    },
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
        heading: "Species List Review for a Pipeline",
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
      heading: "What is USFWS IPaC?",
      paragraphs: [
        "IPaC is a digital project planning tool from the U.S. Fish and Wildlife Service that helps project proponents determine whether a project will affect federally listed species, designated critical habitat or other sensitive resources the Service manages [[ipacFwsService]]. It is one of the Service's ECOS applications, and anyone can use it, private citizens and public employees alike [[esaIpac]]. Its information is generated by USFWS field offices, so it matches what a field office would tell you, available whenever you need it [[esaIpac]].",
        "IPaC covers the Service's trust resources: species and critical habitat listed or proposed under the Endangered Species Act, migratory birds, inter-jurisdictional fishes, certain marine mammals, wetlands, coastal barrier units and National Wildlife Refuge lands [[esaIpac]]. Exploring a location needs no account; requesting an official species list means logging in through login.gov and defining a project [[esaIpac]].",
      ],
    },
    {
      heading: "Official species list vs. resource list",
      paragraphs: [
        "Draw a location and IPaC produces a resource list: an automatically generated list of species, critical habitat and other trust resources known or expected on or near the area, built mainly from each species' known or expected range plus areas where it could be affected indirectly [[ipacResourceList]]. It is for informational purposes only, does not analyze project-level impacts, and is not official USFWS correspondence for ESA consultation [[ipacResourceList]] [[esaIpac]].",
        "Section 7 of the Endangered Species Act requires a federal agency to ask whether any listed or proposed species may be present in the area of a proposed action [[esaUsc1536]]. In IPaC, the answer is the official species list: a letter from the local USFWS office listing the species and critical habitat to consider under section 7, with a project tracking number. Projects a federal agency conducts, permits, funds or licenses must use it rather than the resource list [[esaIpac]].",
        "Unless it says otherwise, an official species list from IPaC counts as an official USFWS response under the ESA; you contact the field office only if you believe the list is wrong. Requesting one does not start the consultation clock [[esaIpac]].",
      ],
    },
    {
      heading: "How long is an official species list valid?",
      paragraphs: [
        "IPaC treats an official species list as valid for 90 days, the same as a list obtained from a field office; after that, request an updated list from the project's home page [[esaIpac]]. The 90 days come from the Services' consultation rules: if preparation of a biological assessment does not begin within 90 days of receiving the list, the agency must verify with the Service that the list is still accurate when it starts [[esaCfr40212]].",
        "Species data change. When a species on an existing list gets a range update, IPaC flags the project with a species update notice and recommends requesting an updated list, and a list last obtained before May 2015 cannot be updated at all: you create a new project [[esaIpac]].",
      ],
    },
    {
      heading: "Critical habitat and NWI wetlands in an IPaC report",
      paragraphs: [
        "IPaC cross-references your location with USFWS species range maps, designated critical habitat and listing status. Its species list covers listed, proposed and candidate species, experimental populations and species listed for similarity of appearance [[esaIpac]]. For each species, the report says whether final or proposed critical habitat exists and whether your location overlaps it, and notes that effects to critical habitat must be analyzed along with the species [[ipacResourceList]].",
        "Wetlands appear under the heading Wetlands in the National Wetlands Inventory (NWI), each with its type and NWI code. The report warns that impacts to these wetlands may be regulated under Section 404 of the Clean Water Act, that the NWI data may be out of date, and that a site visit should confirm the actual extent of wetlands [[ipacResourceList]].",
        "The NWI is reconnaissance-level mapping from high-altitude imagery that uses a biological definition of wetlands, which may not match Clean Water Act boundaries. FWS says the data should not be read as showing the presence, absence or extent of regulated wetlands, and points project proponents to the local Army Corps of Engineers regulatory office [[ipacNwiLimits]].",
      ],
    },
    {
      heading: "Determination keys and the Consultation Package Builder",
      paragraphs: [
        "After the official species list, IPaC offers determination keys (DKeys) where they exist for your species, project type and area. A DKey can assist with, and for some species and activities conclude, consultation, and the Technical Assistance letters it generates are official USFWS correspondence that say whether you need further contact with the Service [[esaIpac]].",
        "Rules differ by region and field office. In Region 5, a federal project that receives a not-likely-to-adversely-affect concurrence verification letter waits 15 days for most projects using the northern long-eared and tricolored bat range-wide key, or 30 days for the Northeast key, while the field office may audit it [[ipacDkeyFaq]]. In its April 2023 instructions, Ohio's field office advised against using the range-wide northern long-eared bat key for Ohio projects [[ipacOhioInstr]].",
        "For species no key covers, the Consultation Package Builder walks you through the project site, activities, stressors and action area, then an effect determination for each species, and generates a biological analysis suitable for use as a biological assessment. You download it and send it to the field office by email or letter to initiate consultation [[esaIpac]].",
      ],
    },
    {
      heading: "How the species list feeds ESA section 7 consultation",
      paragraphs: [
        "The official species list is the first step of section 7 review; the [ESA section 7 consultation guide](/for/esa-section-7) covers the rest. Federal agencies must ensure their actions are not likely to jeopardize listed species or destroy or adversely modify critical habitat, and FWS encourages them to use IPaC to identify what may be in the action area [[esaFwsSection7]]. If an action may affect a listed species or critical habitat, formal consultation follows unless the Service concurs in writing that it is not likely to adversely affect them [[esaCfr40214]].",
        "If the Service advises that listed species may be present, the agency conducts a biological assessment, completed within 180 days unless otherwise agreed and before construction begins; it may be done as part of the agency's NEPA compliance [[esaUsc1536]] [[esaCfr40212]]. The rules require one for major construction activities, meaning construction that is a major federal action significantly affecting the human environment under NEPA [[esaCfr40212]] [[esaCfr40202]]. Formal consultation may last up to 90 days, and the Service then has 45 days to write its biological opinion [[esaFwsSection7]].",
        "IPaC does not show species or critical habitat under the sole jurisdiction of NOAA Fisheries, generally marine mammals, sea turtles, marine and anadromous fish, and marine invertebrates and plants; USFWS covers sea turtles on land, manatees and sea otters [[esaIpac]]. Ask NOAA Fisheries for its species. Some of its regions publish a section 7 mapper as a first-step technical assistance tool, which does not replace consultation [[ipacNoaaMapper]].",
      ],
    },
    {
      heading: "How ePlan uses IPaC output",
      paragraphs: [
        "ePlan does not run IPaC, request species lists or submit anything to the Fish and Wildlife Service, and it is not affiliated with the Service. It reads IPaC's outputs when you upload them as PDFs, such as the official species list, a resource list, DKey letters or a Consultation Package Builder report, along with your project boundary as a shapefile, KML/KMZ or GeoJSON.",
        "From your project description and those files, ePlan drafts the biological assessment, or the ESA section of an EA, by following a reference document's structure: a precedent assessment its research agent finds on agency project pages, or one you upload. Every fact it cannot confirm, from the list date to survey results, is left as a highlighted placeholder for you to fill, and the draft downloads as Word.",
      ],
    },
  ],
  outline: {
    heading: "Biological assessment: the sections",
    intro:
      "The contents of a biological assessment are at the federal agency's discretion and depend on the action [[esaCfr40212]]. This order follows what the Services' rules list for an assessment and for a request to initiate formal consultation [[esaCfr40212]] [[esaCfr40214]], which IPaC's Consultation Package Builder also walks through [[esaIpac]].",
    items: [
      {
        title: "Proposed action and conservation measures",
        detail:
          "The purpose, duration and timing, location and components of the action, with maps, and any measures to avoid, minimize or offset its effects [[esaCfr40214]].",
      },
      {
        title: "Action area",
        detail:
          "All areas affected directly or indirectly by the action, not just the immediate project site [[esaCfr40202]]. FWS recommends drawing this area as the project location in IPaC [[esaIpac]].",
      },
      {
        title: "Species and critical habitat considered",
        detail:
          "The listed and proposed species and designated and proposed critical habitat on the official species list; candidate species are listed too, though they have no legal status under the Act [[esaCfr40212]].",
      },
      {
        title: "Species and habitat in the action area",
        detail:
          "Presence, abundance, density or periodic occurrence of the species and the condition of their habitat [[esaCfr40214]], drawing on on-site inspection, expert views and the literature [[esaCfr40212]].",
      },
      {
        title: "Effects of the action",
        detail:
          "All consequences caused by the proposed action, including those of other activities it causes, that would not occur but for it and are reasonably certain to occur [[esaCfr40202]], with cumulative effects [[esaCfr40212]].",
      },
      {
        title: "Alternatives considered",
        detail:
          "An analysis of alternate actions the federal agency considered [[esaCfr40212]].",
      },
      {
        title: "Effect determinations",
        detail:
          "For each species and critical habitat: no effect, may affect but not likely to adversely affect, or likely to adversely affect [[esaIpac]] [[ipacDkeyFaq]]. A not-likely-to-adversely-affect finding with the Service's written concurrence ends the need for formal consultation [[esaCfr40214]].",
      },
      {
        title: "Supporting documents",
        detail:
          "The official species list and any determination key analyses [[esaIpac]], plus relevant reports such as EAs and EISs [[esaCfr40214]].",
      },
    ],
  },
  faq: [
    {
      question: "What is USFWS IPaC?",
      answer:
        "IPaC, Information for Planning and Consultation, is the U.S. Fish and Wildlife Service's online project planning tool. You map a project location and it lists the listed species, critical habitat, migratory birds, wetlands and other resources the Service manages that may be affected; for federal projects it issues an official species list.",
    },
    {
      question: "How long is an IPaC official species list valid?",
      answer:
        "90 days. After that, request an updated list for the project in IPaC. Under the Services' consultation rules, if a biological assessment is not begun within 90 days of receiving the list, the agency must verify with the Service that the list is still accurate.",
    },
    {
      question: "Is an IPaC resource list enough for section 7?",
      answer:
        "No. The resource list is informational and is not official correspondence for ESA consultation. Projects that a federal agency conducts, permits, funds or licenses need an official species list, requested after logging in to IPaC and defining a project.",
    },
    {
      question: "Does IPaC include NOAA Fisheries species?",
      answer:
        "No. IPaC shows only species and critical habitat that the Fish and Wildlife Service manages alone or jointly with NOAA Fisheries. For species under NOAA Fisheries' sole jurisdiction, generally marine species, contact NOAA Fisheries.",
    },
    {
      question: "How do I log in to IPaC FWS?",
      answer:
        "IPaC signs you in through login.gov. Create a login.gov account with the same email address you use for IPaC; federal employees associate their PIV card with it. You only need to log in to define a project and request an official species list; the informational resource list needs no account.",
    },
    {
      question:
        "Does ePlan run IPaC or submit to the Fish and Wildlife Service?",
      answer:
        "No. ePlan is not affiliated with the Service and does not run IPaC or send consultation requests. Upload your official species list, resource list or DKey letters and ePlan drafts the biological assessment from them, marking every fact it cannot confirm for you to fill.",
    },
  ],
};
