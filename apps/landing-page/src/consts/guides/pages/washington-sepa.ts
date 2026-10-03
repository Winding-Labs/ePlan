import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

// /for/washington-sepa. Reused keys: none (no existing source covers Washington).
// Every source below was opened on 2026-10-02. RCW and WAC pages are the
// Legislature's official online code; `published` is the last effective date
// the page or Ecology states for the section, where one is given.

const READ = "2026-10-02";

const RCW = (section: string, heading: string, published?: string): Source => ({
  title: `RCW ${section}: ${heading}`,
  publisher: "Washington State Legislature (app.leg.wa.gov)",
  url: `https://app.leg.wa.gov/RCW/default.aspx?cite=${section}`,
  ...(published ? { published } : {}),
  read: READ,
});

const WAC = (section: string, heading: string, published: string): Source => ({
  title: `WAC ${section}: ${heading}`,
  publisher: "Washington State Legislature (app.leg.wa.gov)",
  url: `https://app.leg.wa.gov/WAC/default.aspx?cite=${section}`,
  published,
  read: READ,
});

const ECOLOGY = "Washington State Department of Ecology";
const SEPA_PAGES =
  "https://ecology.wa.gov/regulations-permits/sepa/environmental-review";

export const sources = {
  sepaRcw4321c: RCW("43.21C", "State Environmental Policy Act (chapter)"),
  sepaRcw031: RCW("43.21C.031", "Significant impacts"),
  sepaRcw0311: RCW(
    "43.21C.0311",
    "Final environmental impact statements: expeditious manner, time limit, reports",
  ),
  sepaRcw033: RCW(
    "43.21C.033",
    "Threshold determination to be made within ninety days after application is complete",
  ),
  sepaRcw110: RCW(
    "43.21C.110",
    "Content of state environmental policy act rules",
  ),
  sepaRcw229: RCW(
    "43.21C.229",
    "Infill and housing development: categorical exemptions from chapter",
    "2025-07-27",
  ),
  sepaRcw460: RCW(
    "43.21C.460",
    "Environmental checklist: authority of lead agency, limitations of section",
  ),
  sepaRcw495: RCW(
    "43.21C.495",
    "Adoption of ordinances, development regulations, and other nonproject actions: certain actions not subject to administrative or judicial appeals",
    "2025-07-27",
  ),
  sepaRcw503: RCW(
    "43.21C.503",
    "Exempt projects: environmental checklist not required",
  ),
  sepaRcw560: RCW(
    "43.21C.560",
    "Solar energy generation projects exempt from this chapter",
    "2025-07-27",
  ),
  sepaRcw570: RCW(
    "43.21C.570",
    "Residential project permit applications: local government responsible official",
  ),
  sepaWac19711: {
    title: "Chapter 197-11 WAC: SEPA rules",
    publisher: "Washington State Legislature (app.leg.wa.gov)",
    url: "https://app.leg.wa.gov/WAC/default.aspx?cite=197-11",
    read: READ,
  },
  sepaWac310: WAC(
    "197-11-310",
    "Threshold determination required",
    "2003-09-01",
  ),
  sepaWac315: WAC("197-11-315", "Environmental checklist", "2013-01-28"),
  sepaWac340: WAC(
    "197-11-340",
    "Determination of nonsignificance (DNS)",
    "1997-11-10",
  ),
  sepaWac350: WAC("197-11-350", "Mitigated DNS", "1984-04-04"),
  sepaWac355: WAC("197-11-355", "Optional DNS process", "1997-11-10"),
  sepaWac360: WAC(
    "197-11-360",
    "Determination of significance (DS)/initiation of scoping",
    "1984-04-04",
  ),
  sepaWac408: WAC("197-11-408", "Scoping", "1997-11-10"),
  sepaWac455: WAC("197-11-455", "Issuance of DEIS", "1984-04-04"),
  sepaWac460: WAC("197-11-460", "Issuance of FEIS", "1984-04-04"),
  sepaWac508: WAC("197-11-508", "SEPA register", "2014-05-10"),
  sepaWac800: WAC("197-11-800", "Categorical exemptions", "2023-01-20"),
  sepaWac924: WAC("197-11-924", "Determining the lead agency", "1984-04-04"),
  sepaWac926: WAC(
    "197-11-926",
    "Lead agency for governmental proposals",
    "1984-04-04",
  ),
  sepaWac932: WAC(
    "197-11-932",
    "Lead agency for private projects requiring licenses from more than one agency, when one of the agencies is a county/city",
    "1984-04-04",
  ),
  sepaWac960: WAC("197-11-960", "Environmental checklist", "2023-01-20"),
  sepaHandbook: {
    title:
      "State Environmental Policy Act (SEPA) Handbook, 2025 Update (Publication 25-06-009)",
    publisher: `${ECOLOGY}, Shorelands and Environmental Assistance Program`,
    url: "https://apps.ecology.wa.gov/publications/documents/2506009.pdf",
    published: "2025-09",
    read: READ,
  },
  sepaEcology: {
    title: "State Environmental Policy Act (SEPA)",
    publisher: ECOLOGY,
    url: SEPA_PAGES,
    read: READ,
  },
  sepaEcyLaws: {
    title: "SEPA laws and regulations: current & historical revisions",
    publisher: ECOLOGY,
    url: `${SEPA_PAGES}/sepa-laws-rules`,
    read: READ,
  },
  sepaChecklistGuide: {
    title: "SEPA checklist guidance",
    publisher: ECOLOGY,
    url: `${SEPA_PAGES}/sepa-guidance/sepa-checklist-guidance`,
    read: READ,
  },
  sepaTemplates: {
    title: "SEPA document templates (forms)",
    publisher: ECOLOGY,
    url: `${SEPA_PAGES}/sepa-document-templates`,
    read: READ,
  },
  sepaRegister: {
    title: "Statewide SEPA register",
    publisher: ECOLOGY,
    url: `${SEPA_PAGES}/sepa-register`,
    read: READ,
  },
  sepaRegisterSearch: {
    title: "SEPA Register search",
    publisher: ECOLOGY,
    url: "https://apps.ecology.wa.gov/separ/Main/SEPA/Search.aspx",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/washington-sepa",
  parent: "/for/state-environmental-review",
  family: "state",
  name: "Washington SEPA",
  title: "Washington SEPA Checklist, DNS & MDNS Guide",
  description:
    "Washington SEPA step by step: categorical exemptions, the SEPA environmental checklist, DNS, MDNS and DS threshold determinations, and the EIS.",
  eyebrow: "Washington SEPA",
  h1: "Washington SEPA guide: the environmental checklist, threshold determinations and EIS",
  primaryKeyword: "washington sepa",
  secondaryKeywords: [
    "sepa checklist",
    "sepa environmental checklist",
    "sepa dns",
    "threshold determination",
    "mitigated determination of nonsignificance",
  ],
  document: "SEPA Checklist",
  answer:
    "Washington SEPA, the State Environmental Policy Act (chapter 43.21C RCW), requires state and local agencies to consider the environmental impacts of a proposal before deciding on it, and to prepare an environmental impact statement (EIS) for actions with a probable significant, adverse environmental impact [[sepaRcw031]] [[sepaWac960]]. Unless the proposal is exempt, the lead agency reviews a SEPA environmental checklist and makes a threshold determination: a determination of nonsignificance (DNS), a mitigated determination of nonsignificance (MDNS), or a determination of significance (DS) that starts an EIS [[sepaWac310]] [[sepaHandbook]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "Chapter 43.21C RCW and Ecology's SEPA rules, chapter 197-11 WAC [[sepaRcw4321c]] [[sepaWac19711]]",
    },
    {
      label: "Prepared by",
      value:
        "The applicant or the lead agency; the lead agency is responsible for the content either way [[sepaHandbook]]",
    },
    {
      label: "Decided by",
      value: "The lead agency's responsible official [[sepaWac310]]",
    },
    {
      label: "Deadline",
      value:
        "Threshold determination within 90 days of a complete application; the applicant may ask for 30 more [[sepaRcw033]]",
    },
    {
      label: "Comment periods",
      value:
        "14 days on a DNS or MDNS when required, 21 days on a DS, 30 days on a draft EIS [[sepaWac340]] [[sepaWac408]] [[sepaWac455]]",
    },
    {
      label: "Where notices go",
      value:
        "Ecology's SEPA Register, for every document with a comment period and others the rules list [[sepaWac508]] [[sepaRegister]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I'm filling out a SEPA checklist for…",
    examples: [
      {
        emoji: "🏘️",
        label: "Infill Housing",
        heading: "SEPA Checklist for Infill Housing",
        eyebrow: "URBAN HOUSING",
        prompt:
          "I'm a land use consultant preparing the SEPA checklist for a 90-unit apartment building on a 3-acre infill lot in the unincorporated urban growth area of Thurston County.",
      },
      {
        emoji: "🛣️",
        label: "Road Widening",
        heading: "SEPA Checklist for Road Widening",
        eyebrow: "CITY STREETS",
        prompt:
          "I'm an engineer with a city public works department in Snohomish County widening a 0.8-mile arterial to add bike lanes, a center turn lane and a stormwater pond.",
      },
      {
        emoji: "🏭",
        label: "Industrial Warehouse",
        heading: "SEPA Checklist for Industrial Warehouse",
        eyebrow: "INDUSTRIAL",
        prompt:
          "I'm a consultant for a developer proposing a 250,000-square-foot warehouse with 180 truck and car stalls on 18 acres of former pasture in Pierce County.",
      },
      {
        emoji: "🗺️",
        label: "Code Update",
        heading: "SEPA Checklist for Zoning Code Update",
        eyebrow: "NONPROJECT ACTION",
        prompt:
          "I'm a long-range planner at a city in Clark County preparing the nonproject SEPA checklist for zoning code amendments that allow taller mixed-use buildings downtown.",
      },
      {
        emoji: "💧",
        label: "Water Reservoir",
        heading: "SEPA Checklist for Water Reservoir",
        eyebrow: "PUBLIC WATER",
        prompt:
          "I'm a project manager at a water district in Kitsap County building a 2-million-gallon steel reservoir and 1,500 feet of transmission main on a forested 2-acre lot.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the SEPA Checklist answers, question by question, from your description and files, for the lead agency to review; every fact it can't confirm is marked for you.",
    mock: {
      project: "90-unit infill apartments",
      documentTitle: "SEPA Checklist",
      summary:
        "I drafted Sections A and B of the SEPA Checklist for the apartment building from your description, following the WAC 197-11-960 questions. Five details still need your input before you submit it to the county.",
      missing: [
        "Lead agency name and county file number",
        "Street address and parcel number",
        "Steepest slope from the topographic survey",
        "Income levels of the 90 units",
        "Traffic and stormwater reports",
      ],
      letterhead: {
        left: ["SEPA Environmental Checklist", "WAC 197-11-960"],
        right: [
          "[INSERT: applicant name and address]",
          "Thurston County, Washington",
        ],
      },
      meta: [
        "Agency file no.: [INSERT: county file number]",
        "Date: October 2, 2026",
      ],
      paragraphs: [
        "A.5 Agency requesting checklist: [INSERT: county lead agency]. A.11 Proposal: construction of a 90-unit apartment building with parking, stormwater facilities and frontage improvements on a 3-acre infill lot in the unincorporated urban growth area.",
        "A.12 Location: [INSERT: street address and parcel number]; a site plan and vicinity map are attached. B.1.b Steepest slope on the site: about [INSERT: percent slope] percent.",
        "B.9.a Housing: 90 units would be provided, at [INSERT: high, middle or low-income levels].",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "Your project description and files, following the checklist form you upload or it finds",
      manual: "Ecology's Word template, answered question by question",
    },
    {
      label: "Precedent research",
      eplan:
        "Researches agency project pages for your project and up to two similar ones",
      manual: "Search the SEPA Register by hand for comparable checklists",
    },
  ],
  sections: [
    {
      heading: "What is Washington SEPA?",
      paragraphs: [
        "Washington's State Environmental Policy Act, chapter 43.21C RCW, was first enacted in 1971 and modeled on the National Environmental Policy Act [[sepaHandbook]]. It applies to government decisions such as permits for private projects, construction of public facilities, and adoption of regulations, policies and plans, and agencies can use it to modify or deny a proposal to avoid, reduce or compensate for probable impacts [[sepaEcology]].",
        "The Department of Ecology adopts the statewide SEPA rules, chapter 197-11 WAC [[sepaRcw110]]. The environmental impact statement the statute requires is needed only for proposals with a probable significant, adverse environmental impact, and it analyzes only the impacts that are significant [[sepaRcw031]].",
        "The first agency to receive an application for a nonexempt proposal determines the lead agency, and disputes go to Ecology [[sepaWac924]]. An agency that initiates a proposal is its lead agency; for a private project needing nonexempt licenses from more than one agency, one of them a county or city, the lead is the county or city with the largest share of the project area [[sepaWac926]] [[sepaWac932]].",
      ],
    },
    {
      heading: "When is a SEPA checklist required?",
      paragraphs: [
        "A threshold determination is required for any proposal that meets the definition of an action and is not categorically or statutorily exempt; planned actions are handled separately [[sepaWac310]]. Agencies use the environmental checklist, substantially in the form in WAC 197-11-960, to make it, except in cases such as a public proposal for which the lead agency has decided to prepare its own EIS [[sepaWac315]].",
        "An applicant whose project is exempt does not have to file a checklist if other information shows that it qualifies [[sepaRcw503]]. The lead agency may fill out the checklist or require the applicant to, but it is responsible for the content either way and should correct or add information where needed [[sepaHandbook]].",
      ],
    },
    {
      heading: "SEPA categorical exemptions under WAC 197-11-800",
      paragraphs: [
        "Categorical exemptions are exempt from the threshold determination and EIS requirements. By default, the minor new construction exemption covers up to four single-family or four multifamily units, agricultural buildings of 10,000 square feet, and office, school, commercial or storage buildings of 4,000 square feet with parking for 20 cars [[sepaWac800]].",
        "Cities, towns and counties may raise those levels by ordinance after documenting how other rules address the impacts and giving at least 60 days' notice. In the incorporated urban growth area of a fully planning county, the maximums are 30 single-family units (100 if each is under 1,500 square feet), 200 multifamily units, and 30,000 square feet with 90 parking spaces [[sepaWac800]].",
        "The exemption does not apply where the project is wholly or partly on lands covered by water, needs a nonexempt water discharge or air emission license, or needs a land use decision that is not itself exempt [[sepaWac800]].",
      ],
    },
    {
      heading: "Infill housing and other SEPA exemptions, 2023 to 2026",
      paragraphs: [
        "Since 2023, a city or county can make housing in the incorporated part of an urban growth area, and middle housing in the unincorporated part, categorically exempt. It must first find the development consistent with its development regulations and prepare an environmental analysis of the area, including multimodal transportation impacts, after at least 60 days' notice to tribes, agencies and the public [[sepaRcw229]]. Ecology refers to this as the SB 5412 infill exemption [[sepaEcyLaws]].",
        "Later sessions added more:",
      ],
      bullets: [
        "HB 1491 (2025): residential and mixed-use development in a station area, generally within half a mile walking distance of a rail station or a quarter mile of a bus rapid transit stop, is categorically exempt, subject to Ecology's exceptions [[sepaRcw229]] [[sepaEcyLaws]]",
        "SB 5445 (2025): solar arrays under 1,000 square feet on previously disturbed land, solar structures wholly over parking lots, and solar on capped landfills or reclaimed mine land, except on lands covered by water [[sepaRcw560]] [[sepaEcyLaws]]",
        "SB 5148, SB 5471 and HB 1576 (2025): no SEPA appeals of nonproject actions that carry out housing element requirements, county middle housing or the new historic landmark process [[sepaRcw495]] [[sepaEcyLaws]]",
        "HB 2418 (2026): when a fully planning GMA county, city or town is SEPA lead agency for a residential project, its designated permit official must also be the SEPA responsible official [[sepaRcw570]] [[sepaEcyLaws]]",
        "HB 1960 (2026): counties may adopt the Department of Commerce's renewable energy model ordinance without a SEPA review [[sepaEcyLaws]]",
      ],
    },
    {
      heading: "How to fill out the SEPA environmental checklist",
      paragraphs: [
        "The checklist has four parts: A, background; B, sixteen environmental elements from earth and water to transportation and utilities; C, a signature; and D, a supplemental sheet used only for nonproject actions such as plans and regulations. Its questions apply to every part of the proposal, including later phases and other parcels [[sepaWac960]].",
        'The form tells applicants to answer accurately from their own observations or plans, and to write "do not know" or "does not apply" where that is true [[sepaWac960]]. Ecology\'s guidance adds that "not applicable" is not acceptable unless the applicant explains why the question does not apply [[sepaChecklistGuide]]. A lead agency may note questions that local regulations already cover, but it may not delete any [[sepaRcw460]].',
        "Ecology publishes a Word version of the checklist with help links, along with DNS, MDNS and DS templates. Lead agencies may have their own versions, so check with the agency reviewing the proposal [[sepaTemplates]].",
      ],
    },
    {
      heading: "Threshold determination: SEPA DNS, MDNS or DS",
      paragraphs: [
        "The responsible official makes the threshold determination within 90 days after the application and supporting documents are complete, and the applicant may ask for 30 more days; fully planning GMA counties and cities follow their integrated project review timing instead [[sepaRcw033]] [[sepaWac310]].",
        "A DNS is issued when there will be no probable significant adverse environmental impacts [[sepaWac340]]. A mitigated DNS follows when the applicant clarifies, changes or conditions the proposal to include mitigation the lead agency specifies; an applicant may ask early whether a DS is likely and revise the proposal [[sepaWac350]]. A DS is issued when a proposal may have a probable significant adverse impact, and it starts scoping for an EIS [[sepaWac360]].",
        "A DNS has a 14-day comment period, during which the agency may not act, when another agency has jurisdiction, the proposal includes nonexempt demolition or clearing and grading, it is a mitigated DNS, or it is a GMA action [[sepaWac340]] [[sepaHandbook]]. Fully planning GMA counties and cities can instead use the optional DNS process, which runs one comment period for the notice of application and the likely DNS [[sepaWac355]] [[sepaHandbook]].",
        "Ecology's SEPA Register, a web-based list updated daily, carries the documents agencies must send to Ecology [[sepaWac508]]. Every document with a comment period, including DNSs, MDNSs, DSs and draft EISs, must be submitted, and a DNS must include the checklist unless it adopts an existing document [[sepaRegister]]. Anyone can search it by lead agency, proposal, location or applicant [[sepaRegisterSearch]].",
      ],
    },
    {
      heading: "After a determination of significance: scoping and the EIS",
      paragraphs: [
        "The DS describes the main elements of the proposal and the main areas the EIS will discuss, and it starts scoping [[sepaWac360]]. When the agency asks for written comments, agencies, affected tribes and the public get 21 days from the date the DS is issued, or at least 14 days when a GMA county or city issues it with the notice of application [[sepaWac408]].",
        "Anyone has 30 days from issuance to comment on a draft EIS, and the lead agency may grant up to 15 more days on request [[sepaWac455]]. The final EIS is due within 60 days after that comment period ends, unless the proposal is unusually large or complex or comments require extensive changes, and agencies may not act until seven days after it is issued [[sepaWac460]]. The statute asks agencies to aim for a final EIS within 24 months of the DS [[sepaRcw0311]].",
      ],
    },
  ],
  outline: {
    heading: "What the SEPA environmental checklist asks",
    intro:
      "The questions in WAC 197-11-960, which agencies use substantially in that form [[sepaWac960]] [[sepaWac315]]. Ecology's checklist guidance explains each question [[sepaChecklistGuide]].",
    items: [
      {
        title: "Purpose and instructions",
        detail:
          "The checklist helps the agency identify impacts, and ways to reduce or avoid them, and decide whether an EIS is required. Answer briefly with the most precise information known [[sepaWac960]].",
      },
      {
        title: "A. Background (questions 1 to 12)",
        detail:
          "Project and applicant, date, the agency requesting the checklist, timing and phasing, future additions, environmental information prepared, pending applications, approvals needed, a complete description, and the location with a legal description, site plan, vicinity map and topographic map if available [[sepaWac960]].",
      },
      {
        title: "B.1 to B.3 Earth, air and water",
        detail:
          "Slopes, soils, unstable soils, grading and fill, erosion and impervious surface; emissions and odors; surface water within 200 feet, fill and dredge, withdrawals, the 100-year floodplain, discharges, groundwater and stormwater runoff [[sepaWac960]].",
      },
      {
        title: "B.4 to B.7 Plants, animals, energy and environmental health",
        detail:
          "Vegetation removed, threatened and endangered species, noxious weeds and invasive species; wildlife and migration routes; energy use and conservation; contamination, hazardous chemicals, pipelines, emergency services and noise [[sepaWac960]].",
      },
      {
        title: "B.8 and B.9 Land and shoreline use; housing",
        detail:
          "Current uses, working farm and forest land, structures to be demolished, zoning, comprehensive plan and shoreline designations, critical areas, and people housed, employed or displaced; housing units provided or eliminated, with their income level [[sepaWac960]].",
      },
      {
        title:
          "B.10 to B.13 Aesthetics, light, recreation and historic resources",
        detail:
          "Tallest structure and altered views, light and glare, nearby recreation, and structures over 45 years old, evidence of tribal or historic use, and the methods used to assess cultural resources, such as tribal consultation and state historic preservation data [[sepaWac960]].",
      },
      {
        title: "B.14 to B.16 Transportation, public services and utilities",
        detail:
          "Streets and access, transit, new roads, vehicle trips per day with peak volumes and truck share, effects on farm and forest product movement, demand for public services, and utilities available and proposed [[sepaWac960]].",
      },
      {
        title: "C. Signature",
        detail:
          "The signer states that the answers are true and complete and that the lead agency is relying on them to make its decision [[sepaWac960]].",
      },
      {
        title: "D. Supplemental sheet for nonproject actions",
        detail:
          "Seven general questions for plans, policies and regulations, from discharges and emissions to conflicts with environmental laws; not used for project actions [[sepaWac960]].",
      },
    ],
  },
  faq: [
    {
      question: "What is a SEPA DNS?",
      answer:
        "A determination of nonsignificance: the lead agency's decision that a proposal will have no probable significant adverse environmental impacts, so no EIS is required. When another agency has jurisdiction, or the proposal involves nonexempt demolition, clearing and grading or a GMA action, the DNS has a 14-day comment period before the agency acts.",
    },
    {
      question: "What is a mitigated determination of nonsignificance?",
      answer:
        "A DNS issued after the applicant clarifies, changes or conditions the proposal to include mitigation measures the lead agency specifies, so that its impacts are no longer significant. The measures must be enforceable conditions, and an MDNS always has a 14-day comment period.",
    },
    {
      question: "Who fills out the SEPA checklist?",
      answer:
        "Usually the applicant, though the lead agency may fill it out itself. Either way, the lead agency is responsible for its content and may correct it or ask for more information before making the threshold determination.",
    },
    {
      question: "How long does a SEPA threshold determination take?",
      answer:
        "By statute, the responsible official makes it within 90 days after the application and supporting documents are complete, and the applicant may ask for 30 more days. Fully planning GMA cities and counties follow their integrated project review timelines instead.",
    },
    {
      question: "Is Washington SEPA the same as NEPA?",
      answer:
        "No. NEPA applies to federal agency actions; SEPA, modeled on it, applies to state and local decisions in Washington and uses different terms and procedures. A SEPA responsible official can adopt a NEPA environmental assessment in place of a checklist if it meets SEPA's requirements.",
    },
    {
      question: "Does ePlan submit documents to the SEPA Register?",
      answer:
        "No. ePlan drafts SEPA documents, such as checklist answers, from your project description and files, and marks every fact it cannot confirm. The lead agency makes the threshold determination and submits its records to Ecology's SEPA Register.",
    },
  ],
};
