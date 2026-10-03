import type { GuidePath } from "../paths";
// /for/esa-section-7. Reused source keys (defined in the shared NEPA sources):
// usc4332.
import type { GuideContent, Source } from "../types";

const READ = "2026-10-02";

const CFR402 = (
  section: string,
  subpart: "A" | "B",
  heading: string,
): Source => ({
  title: `50 CFR ${section} - ${heading}`,
  publisher: "Electronic Code of Federal Regulations (eCFR), current",
  url: `https://www.ecfr.gov/current/title-50/chapter-IV/subchapter-A/part-402/subpart-${subpart}/section-${section}`,
  read: READ,
});

export const sources = {
  esaUsc1536: {
    title: "16 U.S.C. 1536 - Interagency cooperation (ESA section 7)",
    publisher: "United States Code, 2024 edition (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCODE-2024-title16/html/USCODE-2024-title16-chap35-sec1536.htm",
    read: READ,
  },
  esaCfr402: {
    title:
      "50 CFR part 402 - Interagency Cooperation—Endangered Species Act of 1973, as Amended",
    publisher: "Electronic Code of Federal Regulations (eCFR), current",
    url: "https://www.ecfr.gov/current/title-50/chapter-IV/subchapter-A/part-402",
    read: READ,
  },
  esaCfr40201: CFR402("402.01", "A", "Scope"),
  esaCfr40202: CFR402("402.02", "A", "Definitions"),
  esaCfr40203: CFR402("402.03", "A", "Applicability"),
  esaCfr40208: CFR402(
    "402.08",
    "A",
    "Designation of non-Federal representative",
  ),
  esaCfr40212: CFR402("402.12", "B", "Biological assessments"),
  esaCfr40213: CFR402("402.13", "B", "Informal consultation"),
  esaCfr40214: CFR402("402.14", "B", "Formal consultation"),
  esaRule2024: {
    title:
      "Endangered and Threatened Wildlife and Plants; Regulations for Interagency Cooperation (final rule), 89 FR 24268",
    publisher:
      "U.S. Fish and Wildlife Service and National Marine Fisheries Service, Federal Register",
    url: "https://www.federalregister.gov/documents/2024/04/05/2024-06902/endangered-and-threatened-wildlife-and-plants-regulations-for-interagency-cooperation",
    published: "2024-04-05",
    read: READ,
  },
  esaProposed2025: {
    title:
      "Endangered and Threatened Wildlife and Plants; Interagency Cooperation Regulations (proposed rule), 90 FR 52600",
    publisher:
      "U.S. Fish and Wildlife Service and National Marine Fisheries Service, Federal Register",
    url: "https://www.federalregister.gov/documents/2025/11/21/2025-20551/endangered-and-threatened-wildlife-and-plants-interagency-cooperation-regulations",
    published: "2025-11-21",
    read: READ,
  },
  esaFwsSection7: {
    title: "ESA Section 7 Consultation",
    publisher: "U.S. Fish and Wildlife Service",
    url: "https://www.fws.gov/services/consultation-and-technical-assistance/esa-section-7-consultation",
    published: "2026-09-21",
    read: READ,
  },
  esaNoaaConsultations: {
    title: "Consultations",
    publisher: "NOAA Fisheries",
    url: "https://www.fisheries.noaa.gov/topic/consultations/endangered-species-act-consultations",
    read: READ,
  },
  esaIpac: {
    title: "IPaC: Information for Planning and Consultation",
    publisher: "U.S. Fish and Wildlife Service",
    url: "https://ipac.ecosphere.fws.gov/",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/esa-section-7",
  title: "ESA Section 7: Consultation Steps & BA Guide",
  description:
    "How ESA section 7 consultation works: IPaC species lists, biological assessments, informal vs formal consultation, timelines.",
  eyebrow: "ESA Section 7",
  h1: "ESA section 7 consultation: biological assessments, opinions and timelines",
  primaryKeyword: "esa section 7",
  secondaryKeywords: [
    "section 7 consultation",
    "biological assessment",
    "endangered species act section 7",
    "biological opinion",
    "ipac",
  ],
  document: "Biological Assessment",
  answer:
    "ESA section 7(a)(2) requires every federal agency to insure that any action it authorizes, funds or carries out is not likely to jeopardize a listed species or destroy or adversely modify its critical habitat [[esaUsc1536]]. If an action may affect them, the agency consults the U.S. Fish and Wildlife Service or NOAA Fisheries, ending in written concurrence or a biological opinion [[esaCfr40201]] [[esaCfr40213]] [[esaCfr40214]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "Endangered Species Act section 7(a)(2), 16 U.S.C. 1536(a)(2) [[esaUsc1536]]",
    },
    {
      label: "Regulations",
      value:
        "50 CFR part 402 (2024 text); a 2025 proposal would largely restore the 2019 rules [[esaCfr402]] [[esaRule2024]] [[esaProposed2025]]",
    },
    {
      label: "Biological assessment",
      value:
        "Required for major construction activities; due within 180 days [[esaCfr40212]]",
    },
    {
      label: "Formal consultation",
      value:
        "90 days, then 45 days to deliver the biological opinion [[esaCfr40214]]",
    },
    {
      label: "Prepared by",
      value:
        "The federal agency or its designated non-federal representative [[esaCfr40208]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I'm writing a biological assessment for…",
    examples: [
      {
        emoji: "🥾",
        label: "Trail Work",
        heading: "Biological Assessment for Trail Work",
        eyebrow: "RECREATION TRAILS",
        prompt:
          "I'm a wildlife biologist on a ranger district in western Oregon writing a biological assessment for a 4-mile trail reroute and footbridge replacement in spotted owl habitat.",
      },
      {
        emoji: "🐟",
        label: "Fish Passage",
        heading: "Biological Assessment for Fish Passage",
        eyebrow: "CULVERT REPLACEMENT",
        prompt:
          "I'm an environmental coordinator at a state DOT in Washington preparing a biological assessment for FHWA on replacing a culvert with a bridge on a salmon-bearing stream.",
      },
      {
        emoji: "⚓",
        label: "Dock Permit",
        heading: "Biological Assessment for Dock Permit",
        eyebrow: "COASTAL PERMIT",
        prompt:
          "I'm a consultant preparing a biological assessment for a Corps permit to build a 300-foot marina dock in a Florida lagoon used by manatees and sea turtles.",
      },
      {
        emoji: "🌬️",
        label: "Wind Project",
        heading: "Biological Assessment for Wind Project",
        eyebrow: "WIND ENERGY",
        prompt:
          "I'm the NEPA lead at a BLM field office in Wyoming preparing a biological assessment for a 200-turbine wind project on public land.",
      },
      {
        emoji: "💧",
        label: "Canal Lining",
        heading: "Biological Assessment for Canal Lining",
        eyebrow: "WATER DELIVERY",
        prompt:
          "I'm a Bureau of Reclamation biologist in California writing a biological assessment for lining 12 miles of an irrigation canal near giant garter snake habitat.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the biological assessment with the proposed action, action area and species sections; every fact it can't confirm is marked for you.",
    mock: {
      project: "4-mile trail reroute and footbridge",
      documentTitle: "Biological Assessment — Ridge Trail Reroute",
      summary:
        "I drafted the Biological Assessment following 50 CFR 402.12 and a reference BA's structure. A few details still need your input:",
      missing: [
        "Creek name",
        "Work window dates",
        "Official species list date",
        "Survey results",
        "Effect determinations",
      ],
      letterhead: {
        left: [
          "United States Department of Agriculture",
          "Forest Service",
          "Pacific Northwest Region",
        ],
        right: [
          "Biological Assessment",
          "Ridge Trail Reroute and Footbridge",
          "[INSERT: national forest], Oregon",
        ],
      },
      meta: ["File Code: [INSERT: file code]", "Date: October 2, 2026"],
      paragraphs: [
        "1. Proposed action. The Forest Service proposes to reroute 4 miles of the Ridge Trail and replace the footbridge over [INSERT: creek name]. Crews would use hand tools and small mechanized equipment between [INSERT: work window], with conservation measures to limit noise near nesting habitat.",
        "2. Action area. The action area includes the trail corridor, the bridge site, staging areas and the surrounding area where equipment noise could reach nesting habitat, not merely the trail footprint.",
        "3. Species considered. The official species list obtained through IPaC on [INSERT: date] identifies the listed species and critical habitat that may be present in the action area. Each is evaluated in section 4, with a determination of whether the action is likely to adversely affect it.",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "A biological assessment that follows a reference BA's structure, with your project facts filled in and gaps marked",
      manual: "A blank template or your office's last BA",
    },
    {
      label: "Species list",
      eplan:
        "Upload the official species list you downloaded from IPaC and ePlan reads it into the draft; it does not run IPaC or submit anything",
      manual: "Retyping the species list into each section by hand",
    },
  ],
  sections: [
    {
      heading: "USFWS or NOAA Fisheries: who handles section 7 consultation?",
      paragraphs: [
        "Consult NOAA Fisheries for species listed under its jurisdiction, generally marine species, and the U.S. Fish and Wildlife Service (FWS) for all others [[esaCfr40201]] [[esaNoaaConsultations]]. FWS asks agencies to contact the nearest Ecological Services field office early in project development [[esaFwsSection7]]. Consultation covers every action with discretionary federal involvement or control [[esaCfr40203]], including permits, licenses, leases, rights-of-way and grants [[esaCfr40202]].",
      ],
    },
    {
      heading: "Getting an official species list from IPaC",
      paragraphs: [
        "The agency or its non-federal representative asks the Service which listed and proposed species and critical habitat may be present, and the Service responds within 30 days. If none may be present, no biological assessment or further consultation is needed [[esaCfr40212]].",
        "FWS encourages agencies to get that list from IPaC, its online planning tool, which returns an official species list for a defined project [[esaFwsSection7]] [[esaIpac]]. If the assessment does not begin within 90 days of the list, verify the list with the Service [[esaCfr40212]]. Our [IPaC guide](/for/ipac) explains how to read the output.",
      ],
    },
    {
      heading: "Informal vs formal section 7 consultation",
      paragraphs: [
        "Informal consultation is optional discussion with the Service. It ends when the Service concurs in writing, within 60 days of the request (extendable to 120), that the action is not likely to adversely affect listed species or critical habitat [[esaCfr40213]]. Otherwise, an action that may affect them needs formal consultation [[esaCfr40214]]. If the agency finds no effect, FWS says no further action is needed [[esaFwsSection7]].",
        "Formal consultation ends with a biological opinion on whether the action is likely to jeopardize listed species or destroy or adversely modify critical habitat. A jeopardy opinion includes reasonable and prudent alternatives, if any exist, and an opinion that expects take carries an incidental take statement [[esaCfr40214]].",
      ],
    },
    {
      heading:
        "What goes in a biological assessment, and when is one required?",
      paragraphs: [
        "A biological assessment evaluates the action's potential effects on listed and proposed species and critical habitat and determines whether any are likely to be adversely affected. It is required for major construction activities: construction that is a major federal action significantly affecting the human environment under NEPA [[esaCfr40212]] [[esaCfr40202]] [[usc4332]].",
        "It must be finished before any construction contract is signed or construction begins [[esaUsc1536]]. A consultant or applicant may prepare it as the designated non-federal representative, but the agency must independently review it and stays responsible for section 7 [[esaCfr40208]]. The Service tells the agency within 30 days whether it concurs with the findings [[esaCfr40212]].",
      ],
    },
  ],
  outline: {
    heading: "Biological assessment outline: what to include",
    intro:
      "The contents are at the agency's discretion [[esaCfr40212]]. This outline combines the items 50 CFR 402.12(f) lists with what a request for formal consultation must contain [[esaCfr40214]], so it supports either a concurrence request or formal consultation. A biological assessment often accompanies an [EA](/for/nepa-environmental-assessment) or EIS, and [Section 106](/for/section-106) review often runs in parallel.",
    items: [
      {
        title: "Proposed action",
        detail:
          "Purpose, timing, location, components and how they will be carried out, with maps, and measures to avoid, minimize or offset effects [[esaCfr40214]].",
      },
      {
        title: "Action area",
        detail:
          "All areas affected directly or indirectly by the action, not merely the immediate area involved [[esaCfr40202]].",
      },
      {
        title: "Species list and critical habitat",
        detail:
          "Listed and proposed species and critical habitat that may be present, from the Service's list, verified if over 90 days old [[esaCfr40212]].",
      },
      {
        title: "Species and habitat in the action area",
        detail:
          "Presence, abundance or periodic occurrence of each species and the condition of its habitat [[esaCfr40214]], with on-site inspection results [[esaCfr40212]].",
      },
      {
        title: "Expert views and literature",
        detail:
          "Views of recognized experts on the species and a review of the literature and other information [[esaCfr40212]].",
      },
      {
        title: "Effects of the action",
        detail:
          "All consequences to listed species or critical habitat caused by the action, plus cumulative effects of future state or private activities [[esaCfr40202]] [[esaCfr40212]].",
      },
      {
        title: "Alternatives considered",
        detail:
          "An analysis of alternate actions the agency considered for the proposed action [[esaCfr40212]].",
      },
      {
        title: "Determinations",
        detail:
          "For each species and critical habitat, whether the action is likely to adversely affect it; this decides concurrence request versus formal consultation [[esaCfr40212]] [[esaCfr40213]].",
      },
    ],
  },
  faq: [
    {
      question:
        "What is the difference between a biological assessment and a biological opinion?",
      answer:
        "The agency, or its designated non-federal representative, prepares the biological assessment to evaluate effects on listed species and critical habitat. The Service writes the biological opinion at the end of formal consultation, deciding whether the action is likely to jeopardize species or destroy or adversely modify critical habitat.",
    },
    {
      question: "What is an incidental take statement?",
      answer:
        "Part of a biological opinion, issued when take of a listed species is reasonably certain but the action will not violate section 7(a)(2). It sets the amount or extent of take, measures to minimize it, and terms and conditions; take that follows them is not prohibited.",
    },
    {
      question: "Can a NEPA document serve as the biological assessment?",
      answer:
        "Yes. A biological assessment may be prepared as part of the agency's NEPA compliance, and an agency may submit existing NEPA documents as its request for formal consultation if it shows where each required element appears.",
    },
    {
      question: "Does an IPaC species list complete section 7?",
      answer:
        "No. It shows which species and critical habitat managed by the Fish and Wildlife Service may be present. The agency still decides whether its action may affect them and consults where required; NOAA Fisheries handles the species under its jurisdiction.",
    },
  ],
};
