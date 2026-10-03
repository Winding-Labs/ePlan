import type { GuidePath } from "../paths";
// Reused source keys: fhwa774 (23 CFR part 774, defined in this round's
// fhwa-nepa.ts). No FAA sources existed in consts/guides before this page.
import type { GuideEntry, Source } from "../types";

const READ = "2026-10-02";

export const sources = {
  faa1050g: {
    title:
      "FAA Order 1050.1G, FAA National Environmental Policy Act Implementing Procedures",
    publisher: "Federal Aviation Administration",
    url: "https://www.faa.gov/documentLibrary/media/Order/FAA_Order_1050.1G.pdf",
    published: "2025-06-30",
    read: READ,
  },
  faa1050gFr: {
    title:
      "Notice of Rescission of FAA Order 1050.1F, Availability of FAA Order 1050.1G, Request for Comments, 90 FR 29615",
    publisher: "Federal Aviation Administration, Federal Register",
    url: "https://www.federalregister.gov/documents/2025/07/03/2025-12362/notice-of-rescission-of-faa-order-10501f-availability-of-faa-order-10501g-request-for-comments",
    published: "2025-07-03",
    read: READ,
  },
  faaEnvPolicy: {
    title: "Environmental Policy & Guidance",
    publisher:
      "Federal Aviation Administration, Office of Environment and Energy",
    url: "https://www.faa.gov/about/office_org/headquarters_offices/apl/aee/env_policy",
    published: "2026-09-28",
    read: READ,
  },
  faaArpNepa: {
    title: "Airport Environmental Review Process (NEPA)",
    publisher: "Federal Aviation Administration, Office of Airports",
    url: "https://www.faa.gov/airports/environmental/nepa",
    published: "2026-05-29",
    read: READ,
  },
  faaOrder5050: {
    title:
      "Order 5050.4B - National Environmental Policy Act (NEPA) Implementing Instructions for Airport Actions",
    publisher: "Federal Aviation Administration, Orders & Notices",
    url: "https://www.faa.gov/regulations_policies/orders_notices/index.cfm/go/document.current/documentnumber/5050.4",
    published: "2006-04-28",
    read: READ,
  },
  faaUsc303: {
    title:
      "49 U.S.C. 303 - Policy on lands, wildlife and waterfowl refuges, and historic sites (Section 4(f))",
    publisher: "United States Code, 2024 edition (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCODE-2024-title49/html/USCODE-2024-title49-subtitleI-chap3-subchapI-sec303.htm",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/faa-nepa",
  parent: "/for/nepa",
  family: "agency",
  name: "FAA NEPA",
  title: "FAA NEPA: Order 1050.1G, CATEXs & Airport EAs",
  description:
    "FAA NEPA under Order 1050.1G, which replaced 1050.1F in 2025: when NEPA applies, FAA categorical exclusions, airport EAs, Order 5050.4 and Section 4(f).",
  eyebrow: "FAA and airports",
  h1: "FAA NEPA: Order 1050.1G, categorical exclusions and airport environmental assessments",
  primaryKeyword: "faa nepa",
  secondaryKeywords: [
    "faa order 1050.1f",
    "faa categorical exclusion",
    "airport environmental review",
    "order 5050.4",
  ],
  document: "Environmental Assessment",
  answer:
    "FAA NEPA is how the Federal Aviation Administration reviews the environmental effects of its actions, from airport grants and airport layout plan approvals to air traffic procedures and commercial space licenses [[faa1050g]]. Since June 30, 2025, FAA Order 1050.1G, FAA National Environmental Policy Act Implementing Procedures, has replaced Order 1050.1F; projects already underway then continue under 1050.1F [[faa1050gFr]] [[faaEnvPolicy]]. Most airport environmental documents are prepared by airport sponsors under FAA supervision [[faaArpNepa]] [[faa1050g]].",
  glance: [
    {
      label: "Procedures",
      value: "FAA Order 1050.1G, effective June 30, 2025 [[faa1050g]]",
    },
    {
      label: "Replaced",
      value:
        "Order 1050.1F (2015), still followed for projects already underway [[faaEnvPolicy]]",
    },
    {
      label: "Airport instructions",
      value:
        "Order 5050.4B (2006), with portions superseded [[faaOrder5050]] [[faaArpNepa]]",
    },
    {
      label: "Prepared by",
      value:
        "Mostly airport sponsors, under FAA supervision [[faaArpNepa]] [[faa1050g]]",
    },
    { label: "EA limits", value: "75 pages and 1 year [[faa1050g]]" },
    {
      label: "EIS limits",
      value:
        "150 pages, or 300 if extraordinarily complex, and 2 years [[faa1050g]]",
    },
  ],
  hero: {
    prefix: "Draft an",
    placeholder: "I'm preparing an airport EA for…",
    examples: [
      {
        emoji: "✈️",
        label: "Runway Extension",
        heading: "Airport EA for a Runway Extension",
        eyebrow: "GENERAL AVIATION",
        prompt:
          "I'm the airport manager for a city-owned general aviation airport in rural Montana, and we need an EA for a 1,200-foot extension of our primary runway funded with an AIP grant.",
      },
      {
        emoji: "🛩️",
        label: "New GA Airport",
        heading: "Airport EA for a New GA Airport",
        eyebrow: "NEW AIRPORT",
        prompt:
          "I'm a consultant to a county in central Texas preparing an EA for a new general aviation airport with one 5,000-foot runway on 300 acres of farmland.",
      },
      {
        emoji: "🗼",
        label: "Control Tower",
        heading: "Airport EA for a New Control Tower",
        eyebrow: "AIR TRAFFIC FACILITIES",
        prompt:
          "I'm an environmental specialist at an FAA service area office preparing an EA to replace a radar-equipped airport traffic control tower on a new site at a regional airport in Georgia.",
      },
      {
        emoji: "🧭",
        label: "Approach Procedures",
        heading: "FAA EA for New Approach Procedures",
        eyebrow: "AIRSPACE",
        prompt:
          "I'm a NEPA specialist in FAA's Air Traffic Organization preparing an EA for new instrument approach procedures that would route jets over residential areas below 3,000 feet near a mid-size airport in Ohio.",
      },
      {
        emoji: "🚀",
        label: "Spaceport License",
        heading: "FAA EA for a Spaceport License",
        eyebrow: "COMMERCIAL SPACE",
        prompt:
          "I'm an environmental consultant to a municipal airport in New Mexico applying to FAA for a commercial space launch site operator license to launch from the existing airfield.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the airport EA with the purpose and need, alternatives and resource analysis, following a precedent EA; every fact it can't confirm is marked for you.",
    mock: {
      project: "1,200-foot runway extension",
      documentTitle: "Draft EA — Runway 9/27 Extension",
      summary:
        "I drafted the EA from your description, the EA elements in FAA Order 1050.1G and a precedent general aviation runway EA. A few details still need your input:",
      missing: [
        "Critical aircraft and runway design code",
        "Alternatives carried forward",
        "Noise modeling results",
        "Section 4(f) properties near the runway ends",
        "EA start date",
      ],
      letterhead: {
        left: [
          "U.S. Department of Transportation",
          "Federal Aviation Administration",
          "[INSERT: Airports District Office]",
        ],
        right: [
          "Draft Environmental Assessment",
          "Runway 9/27 Extension",
          "[INSERT: airport name], Montana",
        ],
      },
      meta: ["Sponsor: [INSERT: city]", "Date: October 2, 2026"],
      paragraphs: [
        "Purpose and need. The FAA's purpose is to act on the City's request for airport layout plan approval and Airport Improvement Program funding for a 1,200-foot extension of Runway 9/27. The need reflects the City's goal of serving [INSERT: critical aircraft] at full operating weight.",
        "Alternatives. The EA evaluates the proposed eastward extension, [INSERT: number] other alternatives that meet the purpose and need, and no action. Alternatives eliminated from detailed study are listed with the reason for each.",
        "Noise. A significant impact would occur if a noise-sensitive area at or above DNL 65 dB had an increase of DNL 1.5 dB or more compared with no action for the same timeframe. Results: [INSERT: noise modeling results].",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "An EA that follows the structure of a precedent airport EA or one you upload, with your project facts filled in and gaps marked",
      manual: "A consultant's last airport EA, copied and edited by hand",
    },
    {
      label: "Precedent research",
      eplan:
        "The research agent searches agency project pages, the Federal Register, eCFR and EPA's EIS database for your airport and up to two analog projects",
      manual: "Searching airport and FAA web pages for comparable EAs yourself",
    },
  ],
  sections: [
    {
      heading: "What replaced FAA Order 1050.1F?",
      paragraphs: [
        "FAA Order 1050.1G took effect June 30, 2025 and cancels Order 1050.1F, issued July 16, 2015 [[faa1050g]]. FAA issued it after CEQ's NEPA regulations at 40 CFR parts 1500-1508 were removed, to align with the 2023 NEPA amendments and the Supreme Court's Seven County decision, and took public comment through August 4, 2025 [[faa1050gFr]].",
        "The order applies to actions initiated on or after its effective date and does not alter earlier decisions [[faa1050g]]. FAA's environmental policy page says projects already underway continue to follow 1050.1F, the 1050.1 Desk Reference is being updated, and a crosswalk tool posted September 28, 2026 maps 1050.1G to 1050.1F and DOT Order 5610.1D [[faaEnvPolicy]].",
        "FAA's notice says the reorganization renumbered the CATEXs without revising them, added two statutory CATEX presumptions from section 788 of the FAA Reauthorization Act of 2024, and kept the significance thresholds with one minor change [[faa1050gFr]].",
      ],
    },
    {
      heading: "When does NEPA apply to an FAA action?",
      paragraphs: [
        "FAA presumes that airport layout plan (ALP) approvals within its authority, airport development funded with federal grants or passenger facility charges, and commercial space launch site and vehicle licenses are major Federal actions. It presumes that projects with FAA funding of 14 percent or less and little ongoing federal control are not, except airport development funded by those grants or charges, and treats advisory actions such as 14 CFR part 77 airspace determinations as outside NEPA [[faa1050g]].",
        "If NEPA applies, FAA applies a CATEX where one fits, prepares an EA if significant effects are unlikely or their significance is unknown, and prepares an EIS if significant effects are likely and cannot be reduced below significance. Every NEPA document considers thirteen resource categories, from air quality and biological resources to noise, Section 4(f) and water resources [[faa1050g]].",
      ],
    },
    {
      heading:
        "FAA categorical exclusions (CATEXs) and extraordinary circumstances",
      paragraphs: [
        "FAA's CATEXs are listed in appendix B of Order 1050.1G, grouped as administrative, certification, equipment, facility, procedural and regulatory actions. FAA may apply several CATEXs to one action if no extraordinary circumstances arise for the project as a whole [[faa1050g]].",
        "An extraordinary circumstance exists when an action involves a listed circumstance, such as an adverse effect on historic properties, an effect on Section 4(f) resources or listed species, noise in noise-sensitive areas, or high controversy on environmental grounds, and may have a significant effect. FAA may still use the CATEX if further analysis shows no potential for significance or the action is modified. Documentation has no prescribed format but should be concise and name the CATEX used [[faa1050g]]. Airport examples:",
      ],
      bullets: [
        "B-2.4(e): building, extending or widening a taxiway, apron or runway safety area, or reconstructing or extending an existing runway, without significant erosion, noise or air quality effects [[faa1050g]]",
        "B-2.4(f): hangars, storage buildings, small parking areas, signs, fences and similar minor development [[faa1050g]]",
        "B-2.4(bb): land purchase or an avigation easement for a runway protection zone, with no land disturbance [[faa1050g]]",
        "B-2.4(gg): airport projects with limited federal funding, under dollar thresholds FAA updates each year for inflation [[faa1050g]] [[faaArpNepa]]",
        "B-2.4(hh): presumed coverage for repair or reconstruction of facilities damaged in a declared emergency, in the same location and design, begun within two years [[faa1050g]]",
      ],
    },
    {
      heading:
        "Airport environmental review: the sponsor's role and Order 5050.4",
      paragraphs: [
        "FAA says most airport environmental documents are prepared by airport sponsors, while block-grant states or FAA prepare some, depending on the funding arrangement and level of impact [[faaArpNepa]]. An airport sponsor is a public agency, or the private owner of a public-use airport, that applies for federal airport development grants [[faa1050g]].",
        "Under Part 5 of the order, an applicant or its contractor prepares the document under FAA supervision. FAA helps define the purpose and need and alternatives, sets the schedule with the applicant, takes part in contractor selection and the scope of work, and independently evaluates and takes responsibility for the content. Before FAA sets the EA's start date, an applicant must supply a sufficient scope of work and its consultants' credentials and, for grant-funded airport projects, show it can fund the non-federal share [[faa1050g]].",
        "Order 5050.4B, NEPA Implementing Instructions for Airport Actions, dates to April 28, 2006 and is still listed as active [[faaOrder5050]]. FAA notes that portions are superseded by recent executive orders, CEQ guidance and the latest 1050.1 update, to be folded into a future 5050.4 [[faaArpNepa]]; 1050.1G prevails over line-of-business orders where they conflict [[faa1050g]].",
      ],
    },
    {
      heading: "FAA environmental assessments: contents, 75 pages and one year",
      paragraphs: [
        "An FAA EA briefly discusses the purpose and need, based on FAA's authority and informed by an applicant's goals; the proposed action and alternatives; reasonably foreseeable effects; and anything else the responsible official needs to decide between a FONSI, a mitigated FONSI or an EIS [[faa1050g]].",
        "Actions that normally need an EA include a new general aviation airport, a new runway at an airport outside a metropolitan statistical area, runway strengthening that could significantly increase off-airport noise, and new air traffic procedures routing aircraft over noise-sensitive areas below 3,000 feet [[faa1050g]].",
        "The text may not exceed 75 pages, excluding citations and appendices, and the EA is due one year from the earliest statutory trigger. A responsible official adds declarations on the page limit and the deadline to the EA. A FONSI states its reasons and any mitigation, and notice may run in the Federal Register, local media or on a project website [[faa1050g]].",
      ],
    },
    {
      heading: "When does an airport project need an EIS?",
      paragraphs: [
        "FAA presumes an EIS for ALP approval of, or federal funding for, a new commercial service airport in a metropolitan statistical area, a new air carrier runway at a commercial service airport there, or a major runway extension, and for a launch or reentry site license that requires building on undeveloped land [[faa1050g]].",
        "For noise, a significant impact is an increase of DNL 1.5 dB or more for a noise-sensitive area exposed at or above DNL 65 dB, or newly exposed at that level, compared with no action [[faa1050g]]. An EIS is limited to 150 pages, or 300 for extraordinary complexity, and is due two years from the notice of intent to the Federal Register notice of availability of the final EIS; FAA files it with EPA [[faa1050g]].",
      ],
    },
    {
      heading: "Section 4(f) for FAA and other DOT agencies",
      paragraphs: [
        "Section 4(f), now 49 U.S.C. 303, lets the Secretary of Transportation approve a project that uses a significant public park, recreation area, wildlife or waterfowl refuge, or historic site only if there is no prudent and feasible alternative and the project includes all possible planning to minimize harm, unless the impact is de minimis [[faaUsc303]].",
        "FHWA, FRA and FTA carry this out through 23 CFR part 774 [[fhwa774]]. FAA's order lists Section 4(f) among the resources every NEPA document considers, requires reporting on its status, and treats an effect on Section 4(f) resources as a possible extraordinary circumstance for a CATEX [[faa1050g]].",
      ],
    },
  ],
  outline: {
    heading: "Airport EA outline: what an FAA environmental assessment covers",
    intro:
      "Order 1050.1G sets these elements for every FAA EA [[faa1050g]]. Airport sponsors also use the Office of Airports' Order 5050.4B, parts of which FAA says are superseded [[faaArpNepa]].",
    items: [
      {
        title: "Purpose and need",
        detail:
          "Based on FAA's statutory authority and, for a sponsor's request, informed by the sponsor's goals [[faa1050g]].",
      },
      {
        title: "Proposed action and alternatives",
        detail:
          "The project, such as the ALP change and grant request, and alternatives to the extent NEPA requires [[faa1050g]].",
      },
      {
        title: "Affected environment",
        detail:
          "The thirteen resource categories, from air quality to water resources, focused on those the project could affect [[faa1050g]].",
      },
      {
        title: "Environmental consequences",
        detail:
          "Reasonably foreseeable effects of each alternative, measured against FAA's significance thresholds, such as the DNL 1.5 dB noise threshold [[faa1050g]].",
      },
      {
        title: "Scope of analysis",
        detail:
          "Where and how FAA drew a reasonable line on effects outside the project area or later in time [[faa1050g]].",
      },
      {
        title: "Special purpose laws",
        detail:
          "Status of Endangered Species Act section 7, National Historic Preservation Act section 106, Section 4(f) and Coastal Zone Management Act consultations [[faa1050g]].",
      },
      {
        title: "Mitigation",
        detail:
          "Measures that avoid, minimize or compensate for effects, with their authority, if FAA is to issue a mitigated FONSI [[faa1050g]].",
      },
      {
        title: "Declarations",
        detail:
          "The responsible official's page-limit and deadline declarations, incorporated into the EA [[faa1050g]].",
      },
      {
        title: "Appendices",
        detail:
          "Voluminous data such as tables and calculations that support the analysis, not additional analysis [[faa1050g]].",
      },
    ],
  },
  faq: [
    {
      question: "What is FAA Order 1050.1G?",
      answer:
        "FAA's National Environmental Policy Act implementing procedures, effective June 30, 2025. It cancels Order 1050.1F and sets how FAA decides whether NEPA applies, uses categorical exclusions, and prepares environmental assessments and environmental impact statements.",
    },
    {
      question: "Is FAA Order 1050.1F still used?",
      answer:
        "Only for projects that were already underway when Order 1050.1G took effect on June 30, 2025, according to FAA's environmental policy page. Projects started on or after that date follow 1050.1G.",
    },
    {
      question: "Who prepares an airport environmental assessment?",
      answer:
        "Usually the airport sponsor, often with a consultant. FAA supervises the work, helps define the purpose and need and alternatives, independently evaluates the document and takes responsibility for its content. Block-grant states or FAA prepare some documents, depending on funding and impact.",
    },
    {
      question: "What is an FAA categorical exclusion?",
      answer:
        "A category of actions FAA has found normally has no significant effect, listed in appendix B of Order 1050.1G, such as taxiway and apron work, hangars and runway protection zone land purchases. FAA checks each action for extraordinary circumstances before applying one.",
    },
    {
      question: "How long can an FAA environmental assessment be?",
      answer:
        "No more than 75 pages of text, excluding citations and appendices, single-spaced in 12-point type, and it is due within one year. An EIS is limited to 150 pages, or 300 for extraordinary complexity, and two years.",
    },
    {
      question: "Can ePlan draft an airport EA?",
      answer:
        "Yes. Describe the project or upload a precedent EA, and ePlan drafts the EA in that structure, researches analog projects and marks every fact it can't confirm for you to fill in. FAA independently evaluates the EA and decides whether to issue a FONSI.",
    },
  ],
};
