import type { GuidePath } from "../paths";
// /for/nepassist. Reused source keys (defined in the shared NEPA sources):
// usc4336, usda1b3, usda1b5, usda1b7, doeProcedures.
import type { GuideContent, Source } from "../types";

const READ = "2026-10-02";

export const sources = {
  nepassistEpa: {
    title: "NEPAssist",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://www.epa.gov/nepa/nepassist",
    published: "2026-01-20",
    read: READ,
  },
  nepassistGuide: {
    title: "NEPAssist Help Document (user guide)",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://nepassisttool.epa.gov/nepassist/help/NEPAssistHelp.pdf",
    published: "2026-02-24",
    read: READ,
  },
  nepassistLayers: {
    title: "NEPAssist Mapping Layer Descriptions",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://nepassisttool.epa.gov/nepassist/help/layersdescription.html",
    read: READ,
  },
  nepassistLayers2024: {
    title:
      "NEPAssist Mapping Layer Descriptions (archived copy of September 28, 2024)",
    publisher: "U.S. Environmental Protection Agency, via the Internet Archive",
    url: "https://web.archive.org/web/20240928004532/https://nepassisttool.epa.gov/nepassist/help/layersdescription.html",
    published: "2024-09-28",
    read: READ,
  },
  nepassistTool: {
    title: "NEPAssist (map application)",
    publisher: "U.S. Environmental Protection Agency",
    url: "https://nepassisttool.epa.gov/nepassist/nepamap.aspx",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/nepassist",
  title: "NEPAssist: EPA's Environmental Screening Map",
  description:
    "What EPA's NEPAssist screening tool reports, the layers it maps, and how to use its report in an affected environment.",
  eyebrow: "NEPAssist",
  h1: "NEPAssist: what EPA's screening map reports and how to use it in a NEPA review",
  primaryKeyword: "nepassist",
  secondaryKeywords: [
    "nepa assist",
    "epa nepassist",
    "environmental screening",
  ],
  document: "Affected Environment Section",
  answer:
    "NEPAssist, also searched as NEPA Assist, is EPA's web mapping tool for environmental screening: it checks a project area you define against data from EPA's GIS databases and web services, raising issues at the earliest stage of planning [[nepassistEpa]]. Its report answers yes-or-no questions about what lies within a buffer of that area [[nepassistGuide]].",
  glance: [
    {
      label: "Run by",
      value: "U.S. EPA, with help at NEPAssisthelp@epa.gov [[nepassistEpa]]",
    },
    {
      label: "Input",
      value:
        "An address, coordinates, county, watershed or a drawn point, line or area, plus a buffer [[nepassistGuide]]",
    },
    {
      label: "Default buffer",
      value:
        "0.5 mile for a point or line; none for a drawn area [[nepassistGuide]]",
    },
    {
      label: "Status",
      value:
        "Online in October 2026; user guide updated February 24, 2026 [[nepassistTool]] [[nepassistGuide]]",
    },
    {
      label: "Environmental justice data",
      value:
        "EJScreen and Census demographic layers no longer listed [[nepassistLayers]] [[nepassistLayers2024]]",
    },
  ],
  hero: {
    prefix: "Draft the Affected Environment for",
    placeholder: "I have a NEPAssist report for…",
    examples: [
      {
        emoji: "💧",
        label: "Water Main",
        heading: "a Water Main",
        eyebrow: "DRINKING WATER",
        prompt:
          "I'm a consultant preparing an EA for a rural water district's 14-mile water main replacement in eastern Kentucky, funded by USDA Rural Development, and I have a NEPAssist report for the route.",
      },
      {
        emoji: "🌉",
        label: "Bridge Replacement",
        heading: "a Bridge",
        eyebrow: "HIGHWAY BRIDGE",
        prompt:
          "I'm a state DOT environmental planner writing an EA for replacing a two-lane bridge over a trout stream in western Pennsylvania, and I ran NEPAssist with a half-mile buffer.",
      },
      {
        emoji: "🏘️",
        label: "Affordable Housing",
        heading: "a Housing Project",
        eyebrow: "HOUSING",
        prompt:
          "I'm the environmental officer for a county housing authority reviewing a 60-unit affordable housing project on a 4-acre infill lot in central Ohio, and I exported the NEPAssist report to Excel.",
      },
      {
        emoji: "✈️",
        label: "Runway Extension",
        heading: "a Runway",
        eyebrow: "AIRPORTS",
        prompt:
          "I'm an airport planner drafting an EA with our FAA district office for a 1,000-foot runway extension at a general aviation airport in coastal South Carolina.",
      },
      {
        emoji: "🛤️",
        label: "Rail Siding",
        heading: "a Rail Siding",
        eyebrow: "FREIGHT RAIL",
        prompt:
          "I'm a consultant to a short-line railroad preparing an EA for a 2-mile passing siding next to wetlands in the Mississippi Delta, and I have a NEPAssist report for the corridor.",
      },
    ],
  },
  draft: {
    description:
      "Upload your NEPAssist report and ePlan drafts the affected environment section with each flagged resource, the buffer and the source datasets; every fact it can't confirm is marked for you.",
    mock: {
      project: "14-mile water main replacement",
      documentTitle: "Affected Environment — Water Main Replacement EA",
      summary:
        "I drafted the Affected Environment — Water Main Replacement EA from the NEPAssist report you uploaded, naming the source dataset behind each finding. A few details still need your input:",
      missing: [
        "Report date",
        "Stream names",
        "Floodplain crossing",
        "RCRA facility count",
        "Wetland delineation",
      ],
      letterhead: {
        left: [
          "United States Department of Agriculture",
          "Rural Development",
          "Rural Utilities Service",
        ],
        right: [
          "Environmental Assessment",
          "14-Mile Water Main Replacement",
          "[INSERT: county], Kentucky",
        ],
      },
      meta: ["Chapter 3: Affected Environment", "Date: October 2, 2026"],
      paragraphs: [
        "3.1 Study area. The study area is the 14-mile pipeline route plus a 0.5-mile buffer, the area screened in EPA's NEPAssist on [INSERT: report date]. The route follows existing county road rights-of-way for most of its length and crosses [INSERT: stream names].",
        "3.2 Water resources. Streams and National Wetlands Inventory wetlands are mapped within the buffer; wetland boundaries will be confirmed by field delineation. The route [INSERT: does or does not] cross a FEMA mapped 100-year floodplain.",
        "3.3 Hazardous materials. EPA's RCRAInfo data, retrieved through NEPAssist, show [INSERT: number] hazardous waste handlers within 0.5 mile. A database listing does not establish contamination; a records review will follow.",
      ],
    },
  },
  comparison: [
    {
      label: "NEPAssist report",
      eplan:
        "Reads the report you upload and turns each flagged resource into affected-environment text, with gaps marked. It does not run NEPAssist for you",
      manual:
        "Copying each yes/no answer into a table, then writing every resource up from scratch",
    },
  ],
  sections: [
    {
      heading: "What the EPA NEPAssist report covers",
      paragraphs: [
        "The report is a series of yes-or-no questions: a National Report from nationally available datasets and State Reports from the EPA Regions' datasets, consolidated for a multistate area. Click a question for its source and metadata, or an answer for details such as each brownfields site's name and distance. It adds a Fish and Wildlife Service [IPaC](/for/ipac) species report and saves to Excel or PDF [[nepassistGuide]].",
      ],
    },
    {
      heading: "NEPAssist layers: what data it maps",
      paragraphs: [
        "EPA dates the impaired-water layers to 2020, land cover to change between 2006 and 2019 and sole source aquifers to 2018, and warns that the critical habitat shown is not all designated critical habitat, so check each layer's vintage [[nepassistLayers]]. The layer groups:",
      ],
      bullets: [
        "EPA facilities: RCRAInfo hazardous waste, ICIS-AIR, NPDES dischargers, TRI, Superfund (NPL) boundaries and ACRES brownfields [[nepassistLayers]]",
        "Water: 303(d) impaired waters, streams, water bodies, sole source aquifers, watersheds, wild and scenic rivers [[nepassistLayers]]",
        "Air: nonattainment areas for ozone, PM2.5, PM10, lead, sulfur dioxide, carbon monoxide and nitrogen dioxide [[nepassistLayers]]",
        "Habitat and flooding: critical habitat, NWI wetlands, essential fish habitat, land cover and FEMA flood hazard data [[nepassistLayers]]",
        "Places: National Register properties, schools, places of worship, hospitals, airports, railroads and formerly used defense sites [[nepassistLayers]]",
        "Boundaries: federal lands, counties, cities, urban areas and PLSS townships [[nepassistLayers]]",
      ],
    },
    {
      heading:
        "How planners use NEPAssist in scoping and the affected environment",
      paragraphs: [
        "NEPA lets an agency use any reliable data source and does not require new research unless it is essential to a reasoned choice among alternatives [[usc4336]]. A NEPAssist report is a quick first pass: it shows which resources sit inside the buffer before field studies start, which helps set the study area and the list of issues.",
        "The affected environment then describes those resources briefly: USDA asks for no more than context requires [[usda1b7]] [[usda1b5]], and DOE for enough to support its significance conclusion, not an encyclopedia [[doeProcedures]]. Several layers match USDA's extraordinary-circumstance resources: critical habitat, floodplains and wetlands, sole source aquifers and National Register properties [[usda1b3]].",
      ],
    },
    {
      heading: "How to read and cite a NEPAssist report",
      paragraphs: [
        "A yes means a mapped feature falls inside your buffer; it does not measure an effect [[nepassistEpa]]. Under USDA's procedures, a resource's presence alone is not an extraordinary circumstance; what matters is cause and effect [[usda1b3]]. Significance is the responsible official's judgment [[usda1b7]].",
        "Cite each dataset and its metadata date, not NEPAssist, because layers are refreshed as newer data arrives; for a hazardous waste site, cite EPA's Envirofacts RCRAInfo data and the retrieval date [[nepassistGuide]]. Where information is incomplete and cannot be obtained at reasonable cost, DOE says the document should make that clear [[doeProcedures]].",
      ],
    },
  ],
  outline: {
    heading: "Affected environment outline built from a NEPAssist report",
    intro:
      "This outline maps NEPAssist's layer groups to an affected environment section [[nepassistLayers]]; follow your agency's resource list where it differs. Use the report for an [EA](/for/nepa-environmental-assessment)'s affected environment, and pair it with an IPaC species list for [ESA section 7](/for/esa-section-7).",
    items: [
      {
        title: "Study area and buffer",
        detail:
          "The project footprint and the buffer you screened, since every yes or no depends on it [[nepassistGuide]].",
      },
      {
        title: "Data sources and dates",
        detail:
          "Each dataset with its metadata date, cited in place of NEPAssist itself [[nepassistGuide]].",
      },
      {
        title: "Air quality",
        detail:
          "Nonattainment or maintenance status for each pollutant and standard [[nepassistLayers]].",
      },
      {
        title: "Water resources",
        detail:
          "Streams, water bodies, impaired waters, sole source aquifers, wild and scenic rivers, FEMA flood hazard areas and NWI wetlands [[nepassistLayers]].",
      },
      {
        title: "Biological resources",
        detail:
          "Critical habitat, essential fish habitat and land cover, plus the IPaC species report [[nepassistLayers]] [[nepassistGuide]].",
      },
      {
        title: "Cultural resources",
        detail:
          "National Register properties in the buffer, as a starting point for historic properties review [[nepassistLayers]].",
      },
      {
        title: "Hazardous materials",
        detail:
          "RCRA handlers, Superfund and brownfields sites, TRI facilities and formerly used defense sites [[nepassistLayers]].",
      },
      {
        title: "Land use and community facilities",
        detail:
          "Federal lands, urban areas, schools, hospitals and places of worship near the project [[nepassistLayers]].",
      },
      {
        title: "Resources not carried forward",
        detail:
          "Resources absent or unaffected, each with a brief reason it is not analyzed further [[doeProcedures]].",
      },
    ],
  },
  faq: [
    {
      question: "Is NEPAssist still available in 2026?",
      answer:
        "Yes. The map application was online when we checked on October 2, 2026. Its start screen notes a February 2025 data update that shows Superfund sites as polygon boundaries instead of points.",
    },
    {
      question: "Does NEPAssist still include environmental justice data?",
      answer:
        "No. EPA's layer descriptions listed EJScreen indexes and Census demographic data in September 2024, and the current descriptions list neither. If your agency still asks for community or demographic information, get it from the original data sources.",
    },
    {
      question: "Can I upload a project boundary to NEPAssist?",
      answer:
        "Yes. You can add a shapefile, ArcGIS.com data or a web map service, and run the report on an existing feature's boundary, though not from EPA facility or water monitoring points. EPA asks for caution before uploading a shapefile with sensitive or confidential data.",
    },
    {
      question: "Can ePlan run NEPAssist for me?",
      answer:
        "No. ePlan is not affiliated with EPA and does not run NEPAssist or any agency tool. Run the report on EPA's site, upload the PDF or Excel file, and ePlan drafts the affected environment from it, marking every fact it can't confirm.",
    },
  ],
};
