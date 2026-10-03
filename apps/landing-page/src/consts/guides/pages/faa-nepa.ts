import type { GuidePath } from "../paths";
// /for/faa-nepa. No FAA sources existed in consts/guides before this page.
import type { GuideContent, Source } from "../types";

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
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/faa-nepa",
  title: "FAA NEPA: Order 1050.1G, CATEXs & Airport EAs",
  description:
    "FAA NEPA under Order 1050.1G: when NEPA applies to FAA actions, categorical exclusions (CATEXs), and airport EAs and EISs.",
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
    "FAA NEPA is how the Federal Aviation Administration reviews the environmental effects of its actions, such as airport grants, airport layout plan approvals, air traffic procedures and commercial space licenses [[faa1050g]]. Its procedures are FAA Order 1050.1G, which replaced FAA Order 1050.1F on June 30, 2025; projects already underway continue under 1050.1F [[faa1050gFr]] [[faaEnvPolicy]].",
  glance: [
    {
      label: "Categorical exclusions",
      value: "Appendix B of Order 1050.1G [[faa1050g]]",
    },
    { label: "EA limits", value: "75 pages and 1 year [[faa1050g]]" },
    {
      label: "EIS limits",
      value:
        "150 pages, or 300 if extraordinarily complex, and 2 years [[faa1050g]]",
    },
    {
      label: "Significant noise",
      value:
        "A DNL 1.5 dB or greater increase in noise-sensitive areas at or above DNL 65 dB [[faa1050g]]",
    },
    {
      label: "Notice and filing",
      value:
        "FONSI notice in local media, Federal Register or project website; [EISs](/for/environmental-impact-statement) filed with EPA [[faa1050g]]",
    },
  ],
  hero: {
    prefix: "Draft an FAA EA for",
    placeholder: "I'm preparing an airport EA for…",
    examples: [
      {
        emoji: "✈️",
        label: "Runway Extension",
        heading: "a Runway Extension",
        eyebrow: "GENERAL AVIATION",
        prompt:
          "I'm the airport manager for a city-owned general aviation airport in rural Montana, and we need an EA for a 1,200-foot extension of our primary runway funded with an AIP grant.",
      },
      {
        emoji: "🛩️",
        label: "New GA Airport",
        heading: "a New GA Airport",
        eyebrow: "NEW AIRPORT",
        prompt:
          "I'm a consultant to a county in central Texas preparing an EA for a new general aviation airport with one 5,000-foot runway on 300 acres of farmland.",
      },
      {
        emoji: "🗼",
        label: "Control Tower",
        heading: "a New Control Tower",
        eyebrow: "AIR TRAFFIC FACILITIES",
        prompt:
          "I'm an environmental specialist at an FAA service area office preparing an EA to replace a radar-equipped airport traffic control tower on a new site at a regional airport in Georgia.",
      },
      {
        emoji: "🧭",
        label: "Approach Procedures",
        heading: "New Approach Procedures",
        eyebrow: "AIRSPACE",
        prompt:
          "I'm a NEPA specialist in FAA's Air Traffic Organization preparing an EA for new instrument approach procedures that would route jets over residential areas below 3,000 feet near a mid-size airport in Ohio.",
      },
      {
        emoji: "🚀",
        label: "Spaceport License",
        heading: "a Spaceport License",
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
      heading: "When does NEPA apply to an FAA action?",
      paragraphs: [
        "FAA presumes that airport layout plan (ALP) approvals, airport development funded with federal grants or passenger facility charges, and commercial space launch site and vehicle licenses are major Federal actions. Other projects with 14 percent or less FAA funding and little federal control are presumed not to be, and advisory actions such as 14 CFR part 77 airspace determinations fall outside NEPA [[faa1050g]].",
        "Where NEPA applies, FAA uses a CATEX if one fits, an [EA](/for/nepa-environmental-assessment) if significant effects are unlikely or unknown, and an EIS if they are likely [[faa1050g]].",
      ],
    },
    {
      heading:
        "FAA categorical exclusions (CATEXs) and extraordinary circumstances",
      paragraphs: [
        "Order 1050.1G renumbered the CATEXs without revising them [[faa1050gFr]]; FAA's crosswalk maps the new numbers to 1050.1F [[faaEnvPolicy]]. Several CATEXs may cover one action if no extraordinary circumstance arises for the project as a whole [[faa1050g]].",
        "An extraordinary circumstance is a listed condition, such as an adverse effect on historic properties, effects on Section 4(f) resources or listed species, noise in noise-sensitive areas, or high environmental controversy, that may cause a significant effect; further analysis or project changes can still allow the CATEX. Documentation has no set format but names the CATEX used [[faa1050g]]. Airport examples:",
      ],
      bullets: [
        "B-2.4(e): taxiway, apron and safety area work, or runway extensions, without significant noise, erosion or air impacts [[faa1050g]]",
        "B-2.4(f): hangars, storage buildings, small parking areas, signs, fences and similar minor development [[faa1050g]]",
        "B-2.4(bb): land or avigation easements for a runway protection zone, with no land disturbance [[faa1050g]]",
        "B-2.4(gg): airport projects with limited federal funding, under inflation-adjusted dollar thresholds [[faa1050g]] [[faaArpNepa]]",
        "B-2.4(hh): presumed for rebuilding facilities damaged in a declared emergency, same location and design, within two years [[faa1050g]]",
      ],
    },
    {
      heading:
        "Airport environmental review: the sponsor's role and Order 5050.4",
      paragraphs: [
        "Most airport environmental documents are prepared by the airport sponsor, the public agency or private owner of a public-use airport seeking federal grants; block-grant states or FAA prepare some [[faaArpNepa]] [[faa1050g]]. FAA helps define the purpose, need and alternatives, takes part in consultant selection and scope, and independently evaluates and takes responsibility for the content [[faa1050g]].",
        "Before FAA sets the EA's start date, the sponsor must supply a sufficient scope of work and its consultants' credentials and, for grant-funded projects, show it can fund the non-federal share [[faa1050g]]. Order 5050.4B, FAA's 2006 NEPA instructions for airport actions, is still active, but FAA says parts are superseded; 1050.1G prevails where they conflict [[faaOrder5050]] [[faaArpNepa]] [[faa1050g]].",
      ],
    },
    {
      heading: "Which airport projects need an EA or an EIS?",
      paragraphs: [
        "Actions that normally need an EA include a new general aviation airport, a new runway at an airport outside a metropolitan statistical area, runway strengthening that could significantly increase off-airport noise, and new procedures routing aircraft over noise-sensitive areas below 3,000 feet [[faa1050g]].",
        "FAA presumes an EIS for ALP approval of, or funding for, a new commercial service airport or new air carrier runway in a metropolitan statistical area, a major runway extension, and a launch or reentry site license that requires building on undeveloped land [[faa1050g]].",
      ],
    },
  ],
  outline: {
    heading: "Airport EA outline: what an FAA environmental assessment covers",
    intro:
      "Order 1050.1G sets these elements for every FAA EA [[faa1050g]]. FAA calls its [categorical exclusions](/for/nepa-categorical-exclusion) CATEXs, and Section 4(f) binds [FHWA](/for/fhwa-nepa) projects too.",
    items: [
      {
        title: "Purpose and need",
        detail:
          "Based on FAA's statutory authority and informed by the sponsor's goals [[faa1050g]].",
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
          "Reasonably foreseeable effects of each alternative, measured against FAA's significance thresholds [[faa1050g]].",
      },
      {
        title: "Scope of analysis",
        detail:
          "Where FAA drew a reasonable line on effects outside the project area or later in time [[faa1050g]].",
      },
      {
        title: "Special purpose laws",
        detail:
          "Status of ESA section 7, NHPA section 106, Section 4(f) and Coastal Zone Management Act consultations [[faa1050g]].",
      },
      {
        title: "Mitigation",
        detail:
          "Measures that avoid, minimize or compensate for effects, with their authority, for a mitigated FONSI [[faa1050g]].",
      },
      {
        title: "Declarations",
        detail:
          "The responsible official's page-limit and deadline declarations [[faa1050g]].",
      },
      {
        title: "Appendices",
        detail:
          "Supporting data such as tables and calculations, not additional analysis [[faa1050g]].",
      },
    ],
  },
  faq: [
    {
      question: "How long can an FAA environmental assessment be?",
      answer:
        "No more than 75 pages of text, excluding citations and appendices, single-spaced in 12-point type. It is due within one year of the earliest statutory trigger, and the responsible official adds declarations on both limits to the EA.",
    },
    {
      question: "Does every airport project need an environmental assessment?",
      answer:
        "No. Minor projects such as hangars, apron and taxiway work, and runway protection zone land purchases can fit a categorical exclusion if no extraordinary circumstance arises. An EA is for actions whose effects are unknown or unlikely to be significant; an EIS for those likely to be significant.",
    },
    {
      question: "Who prepares an airport environmental assessment?",
      answer:
        "Usually the airport sponsor, often with a consultant. FAA supervises the work, helps define the purpose and need and alternatives, independently evaluates the document and takes responsibility for its content.",
    },
    {
      question: "Can ePlan draft an airport EA?",
      answer:
        "Yes. Describe the project or upload a precedent EA, and ePlan drafts the EA in that structure, researches analog projects and marks every fact it can't confirm for you to fill in. FAA independently evaluates the EA and decides whether to issue a FONSI.",
    },
  ],
};
