import type { GuidePath } from "../paths";
// /for/esa-section-7. Reused source keys (defined in the shared NEPA sources):
// usc4332.
import type { GuideEntry, Source } from "../types";

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
  esaCfr40216: CFR402("402.16", "B", "Reinitiation of consultation"),
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

export const entry: GuideEntry<GuidePath> = {
  path: "/for/esa-section-7",
  parent: "/for/nepa",
  family: "federal",
  name: "ESA Section 7",
  title: "ESA Section 7: Consultation Steps & BA Guide",
  description:
    "How ESA section 7 consultation works under 50 CFR part 402: IPaC species lists, biological assessments, informal vs formal consultation and timelines.",
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
    "ESA section 7(a)(2), 16 U.S.C. 1536(a)(2), requires every federal agency, in consultation with the Secretary of the Interior or Commerce, to insure that any action it authorizes, funds or carries out is not likely to jeopardize a listed species or destroy or adversely modify its designated critical habitat [[esaUsc1536]]. The U.S. Fish and Wildlife Service and NOAA's National Marine Fisheries Service run section 7 consultation under 50 CFR part 402 [[esaCfr40201]]. If an action may affect listed species or critical habitat, consultation is formal and ends with a biological opinion, unless the Service concurs in writing that the action is not likely to adversely affect them [[esaCfr40214]] [[esaCfr40213]]. For a major construction activity, the agency first prepares a biological assessment [[esaCfr40212]].",
  glance: [
    {
      label: "Legal basis",
      value: "ESA section 7(a)(2), 16 U.S.C. 1536(a)(2) [[esaUsc1536]]",
    },
    {
      label: "Regulations",
      value:
        "50 CFR part 402, issued jointly by FWS and NMFS [[esaCfr402]] [[esaProposed2025]]",
    },
    {
      label: "Consult with",
      value:
        "The U.S. Fish and Wildlife Service, or NOAA Fisheries for species under its jurisdiction [[esaCfr40201]]",
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
      heading: "What does Endangered Species Act section 7 require?",
      paragraphs: [
        "Section 7(a)(1) directs all federal agencies to use their authorities to carry out programs for the conservation of listed species. Section 7(a)(2) requires each agency, in consultation with the Secretary, to insure its actions are not likely to jeopardize listed species or destroy or adversely modify critical habitat, using the best scientific and commercial data available [[esaUsc1536]].",
        "Agencies must also confer on actions likely to jeopardize species proposed for listing or to destroy or adversely modify proposed critical habitat. Once consultation starts, neither the agency nor the applicant may make an irreversible or irretrievable commitment of resources that forecloses reasonable and prudent alternatives [[esaUsc1536]]. The requirements apply to all actions with discretionary federal involvement or control [[esaCfr40203]].",
        "An action includes granting licenses, contracts, leases, easements, rights-of-way, permits or grants-in-aid, and activities that directly or indirectly modify land, water or air [[esaCfr40202]].",
      ],
    },
    {
      heading: "USFWS or NOAA Fisheries: who handles section 7 consultation?",
      paragraphs: [
        "The U.S. Fish and Wildlife Service (FWS) and the National Marine Fisheries Service (NMFS, or NOAA Fisheries) share responsibility for the Act. If a species is listed under NMFS jurisdiction, the agency contacts NMFS; for all other listed species it contacts FWS [[esaCfr40201]]. NOAA Fisheries consults when a project might affect an ESA-listed marine species or designated critical habitat [[esaNoaaConsultations]].",
        "FWS encourages agencies to contact the nearest Ecological Services field office early in project development for technical assistance [[esaFwsSection7]]. NOAA Fisheries posts the status of section 7 consultations, and of essential fish habitat consultations under the Magnuson-Stevens Act, in its Environmental Consultation Organizer (ECO) portal [[esaNoaaConsultations]].",
      ],
    },
    {
      heading: "Getting an official species list from IPaC",
      paragraphs: [
        "IPaC (Information for Planning and Consultation) is FWS's project planning tool, open to anyone. Logging in and defining a project returns an official species list and an evaluation of potential impacts on resources FWS manages, and its Consultation Package Builder helps assemble a consultation package [[esaIpac]]. FWS encourages agencies to use IPaC to identify species and critical habitat that may be present in the action area [[esaFwsSection7]]. Our [IPaC guide](/for/ipac) explains how to read the output.",
        "Under the regulations, the agency or its designated non-federal representative asks the Service for a list of listed and proposed species and critical habitat that may be present, or tells it which species the assessment will cover, and the Service responds within 30 days. If preparation of the biological assessment does not begin within 90 days of the list, its accuracy must be verified with the Service [[esaCfr40212]].",
        "If the Service advises that no listed species or critical habitat may be present, no biological assessment or further consultation is needed [[esaCfr40212]].",
      ],
    },
    {
      heading: "Informal vs formal section 7 consultation",
      paragraphs: [
        "Informal consultation is an optional process of discussions and correspondence that helps the agency decide whether formal consultation is needed. If the agency determines, with the Service's written concurrence, that the action is not likely to adversely affect listed species or critical habitat, consultation ends. The Service responds to a request for concurrence within 60 days, extendable by mutual consent to no more than 120 days [[esaCfr40213]].",
        "If an action may affect listed species or critical habitat and that concurrence is not given, formal consultation is required [[esaCfr40214]]. If the agency determines the action will not affect any listed species or critical habitat, FWS says no further action is needed [[esaFwsSection7]].",
        "Formal consultation begins with a written request describing the action, the action area, the species and habitat present and the effects, and concludes within 90 days unless extended. With an applicant involved, an extension beyond 60 days needs the applicant's consent. The Service then has 45 days to deliver the biological opinion. An agency may submit existing NEPA documents as the request if it shows where each required element appears [[esaCfr40214]].",
      ],
    },
    {
      heading:
        "What goes in a biological assessment, and when is one required?",
      paragraphs: [
        "A biological assessment evaluates the potential effects of the action on listed and proposed species and designated and proposed critical habitat, and determines whether any are likely to be adversely affected. It is required for major construction activities [[esaCfr40212]]: construction projects that are major federal actions significantly affecting the quality of the human environment under NEPA section 102(2)(C) [[esaCfr40202]] [[usc4332]].",
        "Its contents are at the agency's discretion and may include an on-site inspection, the views of recognized experts, a literature review, an analysis of effects including cumulative effects, and an analysis of alternatives considered [[esaCfr40212]]. It must be completed within 180 days of its start, unless another period is agreed, and before any construction contract or construction begins, and it may be prepared as part of NEPA compliance [[esaUsc1536]] [[esaCfr40212]].",
        "A consultant or applicant can prepare it as the agency's designated non-federal representative, but the agency must supervise it, independently review it and stays responsible for section 7 [[esaCfr40208]]. The Service tells the agency in writing within 30 days whether it concurs with the assessment's findings [[esaCfr40212]].",
      ],
    },
    {
      heading: "Biological opinion and incidental take statement",
      paragraphs: [
        "A biological opinion summarizes the information it relies on, discusses the environmental baseline and the effects of the action, and concludes whether the action is likely to jeopardize listed species or destroy or adversely modify critical habitat. A jeopardy opinion includes reasonable and prudent alternatives, if any exist [[esaCfr40214]].",
        "When the action will not violate section 7(a)(2) and take is reasonably certain to occur, the Service attaches an incidental take statement. It specifies the amount or extent of take, reasonable and prudent measures to minimize its impact, and terms and conditions, including reporting, that the agency or applicant must follow; take that complies with them is not a prohibited taking [[esaCfr40214]] [[esaUsc1536]].",
        "The agency must reinitiate consultation if the take is exceeded, new information reveals effects not previously considered, the action is modified in a way that causes unconsidered effects, or a new species is listed or critical habitat designated that the action may affect [[esaCfr40216]].",
      ],
    },
    {
      heading: "Recent changes to the section 7 regulations",
      paragraphs: [
        "FWS and NMFS revised 50 CFR part 402 in a rule that took effect May 6, 2024 [[esaRule2024]]. On November 21, 2025 they proposed replacing the 2024 provisions with those in place in 2019, except the reinitiation section, and removing the 2024 provisions that allowed offsets in reasonable and prudent measures. Comments closed December 22, 2025 [[esaProposed2025]].",
        "As of October 2, 2026, the eCFR text of part 402 still carries the 2024 amendments [[esaCfr402]]. Check the Federal Register for a final rule before relying on either version.",
      ],
    },
  ],
  outline: {
    heading: "Biological assessment outline: what to include",
    intro:
      "The contents of a biological assessment are at the agency's discretion [[esaCfr40212]]. This outline combines the items 50 CFR 402.12(f) lists with the information a request for formal consultation must contain [[esaCfr40214]], so the assessment can support either a concurrence request or formal consultation.",
    items: [
      {
        title: "Proposed action",
        detail:
          "Purpose, duration and timing, location, components and how they will be carried out, maps or drawings, and any measures to avoid, minimize or offset effects [[esaCfr40214]].",
      },
      {
        title: "Action area",
        detail:
          "All areas affected directly or indirectly by the action, not merely the immediate area involved [[esaCfr40202]].",
      },
      {
        title: "Species list and critical habitat",
        detail:
          "Listed and proposed species and designated and proposed critical habitat that may be present, from the Service's list, verified if more than 90 days old when preparation began [[esaCfr40212]].",
      },
      {
        title: "Species and habitat in the action area",
        detail:
          "Presence, abundance, density or periodic occurrence of each species and the condition and location of its habitat [[esaCfr40214]], with any on-site inspection results [[esaCfr40212]].",
      },
      {
        title: "Expert views and literature",
        detail:
          "Views of recognized experts on the species and a review of the literature and other information [[esaCfr40212]].",
      },
      {
        title: "Effects of the action",
        detail:
          "All consequences to listed species or critical habitat caused by the action, including later or more distant ones, plus cumulative effects of future state or private activities reasonably certain to occur [[esaCfr40202]] [[esaCfr40212]].",
      },
      {
        title: "Alternatives considered",
        detail:
          "An analysis of alternate actions the agency considered for the proposed action [[esaCfr40212]].",
      },
      {
        title: "Determinations",
        detail:
          "For each species and critical habitat, whether the action is likely to adversely affect it, which decides between a concurrence request and formal consultation [[esaCfr40212]] [[esaCfr40213]].",
      },
    ],
  },
  faq: [
    {
      question: "What is ESA section 7 consultation?",
      answer:
        "The process under section 7(a)(2) of the Endangered Species Act (16 U.S.C. 1536) by which a federal agency, working with the U.S. Fish and Wildlife Service or NOAA Fisheries, makes sure an action it authorizes, funds or carries out is not likely to jeopardize a listed species or destroy or adversely modify critical habitat. The procedures are in 50 CFR part 402.",
    },
    {
      question: "When is a biological assessment required?",
      answer:
        "For major construction activities, meaning construction projects that are major federal actions significantly affecting the quality of the human environment under NEPA, when listed species or critical habitat may be present. For other actions, the agency still gives the Service the information listed in 50 CFR 402.14(c) when it requests formal consultation or concurrence.",
    },
    {
      question:
        "What is the difference between informal and formal consultation?",
      answer:
        "Informal consultation is optional discussion with the Service that ends when the Service concurs in writing that the action is not likely to adversely affect listed species or critical habitat. Formal consultation is required when an action may affect them and that concurrence is not given, and it ends with a biological opinion.",
    },
    {
      question: "How long does section 7 consultation take?",
      answer:
        "The Service answers a request for concurrence within 60 days, extendable to 120. Formal consultation concludes within 90 days unless extended, and the Service then has 45 days to deliver the biological opinion. A biological assessment must be finished within 180 days of its start unless another period is agreed.",
    },
    {
      question: "What is an incidental take statement?",
      answer:
        "The statement attached to a biological opinion when take of a listed species is reasonably certain to occur but the action will not violate section 7(a)(2). It sets the amount or extent of take, reasonable and prudent measures to minimize its impact, and terms and conditions; take that follows those terms is not a prohibited taking.",
    },
    {
      question: "Does an IPaC species list complete section 7?",
      answer:
        "No. IPaC gives an official species list and planning tools for resources the Fish and Wildlife Service manages. The agency still decides whether its action may affect listed species and consults the Service where required, and species under NOAA Fisheries' jurisdiction are handled by NOAA Fisheries.",
    },
  ],
};
