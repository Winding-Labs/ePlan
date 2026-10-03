import type { GuidePath } from "../paths";
// /for/nepassist. Reused source keys (defined in the shared NEPA sources):
// usc4336, usda1b3, usda1b5, usda1b7, doeProcedures.
import type { GuideEntry, Source } from "../types";

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
  nepassistHudEa: {
    title: "Environmental Assessment: Resources",
    publisher: "U.S. Department of Housing and Urban Development, HUD Exchange",
    url: "https://www.hudexchange.info/programs/environmental-review/environmental-assessment/resources/",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/nepassist",
  parent: "/for/nepa",
  family: "tools",
  name: "NEPAssist",
  title: "NEPAssist: EPA's Environmental Screening Map",
  description:
    "What EPA's NEPAssist screening tool reports, the layers it maps and dropped, and how planners turn its report into an affected environment section.",
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
    "NEPAssist is EPA's web mapping tool that draws environmental data from EPA's GIS databases and web services and gives an immediate screening of a project area you define [[nepassistEpa]]. Its report answers yes-or-no questions about what lies within a buffer of that area, such as a brownfields site, from national and state datasets, and adds a Fish and Wildlife Service species report [[nepassistGuide]]. Planners use it in scoping and to describe the affected environment, since NEPA lets agencies use any reliable data source [[usc4336]]. It screens; it does not decide significance, and EPA asks users to cite each layer's source data rather than NEPAssist [[nepassistGuide]].",
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
      label: "Output",
      value:
        "National and state reports of yes/no questions and an IPaC species report, saved as Excel or PDF [[nepassistGuide]]",
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
    prefix: "Draft an",
    placeholder: "I have a NEPAssist report for…",
    examples: [
      {
        emoji: "💧",
        label: "Water Main",
        heading: "Affected Environment for a Water Main",
        eyebrow: "DRINKING WATER",
        prompt:
          "I'm a consultant preparing an EA for a rural water district's 14-mile water main replacement in eastern Kentucky, funded by USDA Rural Development, and I have a NEPAssist report for the route.",
      },
      {
        emoji: "🌉",
        label: "Bridge Replacement",
        heading: "Affected Environment for a Bridge",
        eyebrow: "HIGHWAY BRIDGE",
        prompt:
          "I'm a state DOT environmental planner writing an EA for replacing a two-lane bridge over a trout stream in western Pennsylvania, and I ran NEPAssist with a half-mile buffer.",
      },
      {
        emoji: "🏘️",
        label: "Affordable Housing",
        heading: "Affected Environment for Housing",
        eyebrow: "HOUSING",
        prompt:
          "I'm the environmental officer for a county housing authority reviewing a 60-unit affordable housing project on a 4-acre infill lot in central Ohio, and I exported the NEPAssist report to Excel.",
      },
      {
        emoji: "✈️",
        label: "Runway Extension",
        heading: "Affected Environment for a Runway",
        eyebrow: "AIRPORTS",
        prompt:
          "I'm an airport planner drafting an EA with our FAA district office for a 1,000-foot runway extension at a general aviation airport in coastal South Carolina.",
      },
      {
        emoji: "🛤️",
        label: "Rail Siding",
        heading: "Affected Environment From NEPAssist",
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
      heading: "What is EPA's NEPAssist?",
      paragraphs: [
        "EPA describes NEPAssist as a tool that facilitates the environmental review process and project planning. The web application draws environmental data dynamically from EPA Geographic Information System databases and web services and screens environmental assessment indicators for an area of interest the user defines, which can raise important environmental issues at the earliest stages of project development [[nepassistEpa]].",
        "EPA's NEPAssist page links the tool, a user guide, a description of the map layers and training videos [[nepassistEpa]]. Agencies point their reviewers to it: HUD lists NEPAssist among its environmental assessment resources [[nepassistHudEa]]. ePlan is not affiliated with EPA and does not run NEPAssist; it reads the report a planner exports and uploads.",
      ],
    },
    {
      heading: "What the EPA NEPAssist report covers",
      paragraphs: [
        "You find a study area by address, airport, ZIP code, city, county, state, coordinates, congressional district or watershed, then draw a point, line, area or rectangle, or enter coordinates. The buffer defaults to 0.5 mile for a point or line and 0 for an area or rectangle; change it before you run the report. You can also report on an existing feature's boundary, but not from EPA facility or water monitoring points [[nepassistGuide]].",
        "The report is a series of yes-or-no questions. The National Report draws on nationally available datasets and the State Reports on datasets from the EPA Regions; a multistate area gets one consolidated report. Clicking a question shows its source and metadata, and clicking an answer shows details, such as the name and distance of each brownfields site, with the option to change the buffer. The report also includes a U.S. Fish and Wildlife Service IPaC report on threatened and endangered species, and saves to Excel or PDF [[nepassistGuide]].",
      ],
    },
    {
      heading: "NEPAssist layers: what data it maps",
      paragraphs: [
        "EPA's layer descriptions list these groups, each with its source and date [[nepassistLayers]]:",
      ],
      bullets: [
        "EPA facilities: hazardous waste (RCRAInfo), air pollution (ICIS-AIR), water dischargers (NPDES), toxic releases (TRI), Superfund (NPL) site boundaries and brownfields (ACRES) [[nepassistLayers]]",
        "Water: impaired waters on the Clean Water Act 303(d) list, streams, water bodies, sole source aquifers, HUC8 and HUC12 watersheds, wild and scenic rivers, and USGS and EPA water monitors [[nepassistLayers]]",
        "Air: nonattainment areas for ozone, PM2.5, PM10, lead, sulfur dioxide, carbon monoxide and nitrogen dioxide, by standard [[nepassistLayers]]",
        "Places and transportation: National Register of Historic Places, schools, places of worship, hospitals, airports and railroads [[nepassistLayers]]",
        "Habitat and hazards: Fish and Wildlife Service critical habitat, NWI wetlands, FEMA flood hazard data, land cover, essential fish habitat, BLM areas of critical environmental concern, and formerly used defense sites [[nepassistLayers]]",
        "Boundaries: federal lands, counties, cities, urban areas, PLSS townships and congressional districts; you can also add a shapefile, ArcGIS.com data or a web map service [[nepassistLayers]] [[nepassistGuide]]",
      ],
    },
    {
      heading:
        "How planners use NEPAssist in scoping and the affected environment",
      paragraphs: [
        "In deciding the level of review, an agency may use any reliable data source and need not do new research unless it is essential to a reasoned choice among alternatives [[usc4336]]. A NEPAssist report is a quick first pass: it shows which resources sit inside the buffer before field studies start, which helps set the study area and the list of issues.",
        "The affected environment then describes those resources. USDA asks for a succinct description of the environment of the areas the alternatives may affect, no longer than needed for context, and lets it be combined with the effects analysis [[usda1b7]] [[usda1b5]]. DOE wants enough to support its significance conclusion, not an encyclopedia, and it need not extend beyond areas with reasonably foreseeable effects [[doeProcedures]]. Several NEPAssist layers match USDA's extraordinary-circumstance resources: critical habitat, floodplains and wetlands, sole-source aquifers, and National Register properties [[usda1b3]].",
      ],
    },
    {
      heading: "How to read and cite a NEPAssist report",
      paragraphs: [
        "Every layer and report question carries metadata: the source, the date the data was generated, accuracy and projection. EPA says to cite the data file and its metadata, not the NEPAssist application, because the layers are updated as newer data arrives. For a hazardous waste site, for example, cite EPA's Envirofacts database, the RCRAInfo system and the last retrieval date [[nepassistGuide]].",
        "Check each layer's vintage before you rely on it. EPA's descriptions date the impaired-water layers to 2020, the land cover layer to change between 2006 and 2019, and the sole source aquifer layer to 2018, and warn that the critical habitat shown does not include all designated critical habitat [[nepassistLayers]].",
      ],
    },
    {
      heading:
        "Environmental screening, not a determination: NEPAssist's limits",
      paragraphs: [
        "EPA calls NEPAssist a screening tool that potentially raises issues early [[nepassistEpa]]. A yes means a mapped feature falls inside your buffer; it does not measure an effect. Under USDA's procedures, the mere presence of a listed resource does not mean an extraordinary circumstance exists; what matters is whether there is a cause-and-effect relationship between the action and the resource [[usda1b3]]. Whether an effect is significant is the responsible official's expert judgment [[usda1b7]].",
        "Some layers switch off at certain map scales, and EPA asks for caution before uploading a shapefile with sensitive or confidential data [[nepassistGuide]]. Where information is incomplete and cannot be obtained at reasonable cost, DOE says the document should make clear that it is lacking [[doeProcedures]]. Follow a screen with the agency consultations and field surveys the project needs.",
      ],
    },
    {
      heading: "Is NEPAssist still online in 2026, and what changed?",
      paragraphs: [
        "Yes. EPA's NEPAssist page was last updated January 20, 2026 [[nepassistEpa]], and the user guide on February 24, 2026 [[nepassistGuide]]. The map application was running when we checked on October 2, 2026, and its start screen notes a February 2025 data update: Superfund sites now show as polygon boundaries instead of points [[nepassistTool]].",
        "Environmental justice data is gone from the layer list. The September 2024 descriptions listed EJScreen Indexes (2024) and a Census demographics option under More Data [[nepassistLayers2024]]; the current descriptions list neither [[nepassistLayers]]. If your agency's procedures still ask for community or demographic information, get it from the original data sources.",
      ],
    },
  ],
  outline: {
    heading: "Affected environment outline built from a NEPAssist report",
    intro:
      "USDA's EA and EIS rules ask for a succinct description of the potentially affected environment [[usda1b5]] [[usda1b7]], and DOE's for one that supports its significance findings [[doeProcedures]]. This outline maps NEPAssist's layer groups to that section [[nepassistLayers]]; follow your agency's resource list.",
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
      question: "What is NEPAssist used for?",
      answer:
        "Screening a project area early in planning. You draw the area, set a buffer and get a report of yes-or-no questions about nearby features such as impaired waters, wetlands, critical habitat, historic properties and contaminated sites, which helps set the study area and the issues for an EA or EIS.",
    },
    {
      question: "Is NEPA Assist the same as NEPAssist?",
      answer:
        "Yes. NEPAssist, often searched as NEPA Assist, is EPA's environmental screening map at nepassisttool.epa.gov. EPA runs it and answers questions at NEPAssisthelp@epa.gov.",
    },
    {
      question: "Is NEPAssist still available in 2026?",
      answer:
        "Yes. EPA updated its NEPAssist page in January 2026 and the user guide in February 2026, and the tool was online in October 2026.",
    },
    {
      question: "Does NEPAssist still include environmental justice data?",
      answer:
        "No. EPA's layer descriptions listed EJScreen indexes and Census demographic data in September 2024, and the current descriptions list neither. Get community data from the original sources if your agency still asks for it.",
    },
    {
      question: "Can I cite NEPAssist in an environmental assessment?",
      answer:
        "EPA says not to. Cite the underlying data file and its metadata, such as EPA's Envirofacts RCRAInfo data and its retrieval date, because NEPAssist's layers are refreshed as newer data arrives.",
    },
    {
      question: "Can ePlan run NEPAssist for me?",
      answer:
        "No. ePlan is not affiliated with EPA and does not run NEPAssist or any agency tool. Run the report on EPA's site, upload the PDF or Excel file, and ePlan drafts the affected environment from it, marking every fact it can't confirm.",
    },
  ],
};
