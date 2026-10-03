import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

/**
 * /for/hawaii-hepa — the Hawaii Environmental Policy Act (HRS Chapter 343).
 *
 * Reused source keys: none. Every source below is new. The state hub
 * (state-environmental-review.ts) cites hepaHrs3432, hepaHrs3435 and hepaHar
 * without redefining them.
 *
 * HRS sections are cited to the Legislature's data.capitol.hawaii.gov host
 * because www.capitol.hawaii.gov refuses automated reads (HTTP 403); the text
 * is the same current HRS. The program moved from the Department of Health
 * (OEQC) to the Office of Planning and Sustainable Development (ERP) under
 * Act 152 of 2021, so its pages now live on planning.hawaii.gov.
 */

const READ = "2026-10-02";

const HRS = (section: string, heading: string): Source => ({
  title: `Haw. Rev. Stat. § 343-${section} - ${heading}`,
  publisher: "Hawaii State Legislature (data.capitol.hawaii.gov)",
  url: `https://data.capitol.hawaii.gov/hrscurrent/Vol06_Ch0321-0344/HRS0343/HRS_0343-000${section}.htm`,
  read: READ,
});

export const sources = {
  hepaHrs3432: HRS("2", "Definitions"),
  hepaHrs3433: HRS("3", "Public records and notice"),
  hepaHrs3435: HRS("5", "Applicability and requirements"),
  hepaHrs3436: HRS("6", "Rules"),
  hepaHrs3437: HRS("7", "Limitation of actions"),
  hepaHar: {
    title:
      "Hawaii Administrative Rules, Chapter 11-200.1, Environmental Impact Statement Rules (signed rules)",
    publisher: "State of Hawaii, Environmental Review Program",
    url: "https://files.hawaii.gov/dbedt/erp/Laws/2019-HAR-11-200.1-Signed.pdf",
    published: "2019-08-09",
    read: READ,
  },
  hepaErp: {
    title: "Environmental Review Program",
    publisher:
      "State of Hawaii, Office of Planning and Sustainable Development",
    url: "https://planning.hawaii.gov/erp/",
    read: READ,
  },
  hepaOeqc: {
    title: "Office of Environmental Quality Control (transfer notice)",
    publisher: "Hawaii State Department of Health",
    url: "https://health.hawaii.gov/oeqc/",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/hawaii-hepa",
  title: "HEPA Hawaii: Chapter 343 EA and EIS Guide",
  description:
    "HEPA Hawaii: what triggers HRS Chapter 343 review, its exemptions, the environmental assessment, and a FONSI or an EISPN.",
  eyebrow: "Hawaii HEPA",
  h1: "HEPA Hawaii: when HRS Chapter 343 requires an environmental assessment",
  primaryKeyword: "hepa hawaii",
  secondaryKeywords: [
    "hawaii environmental policy act",
    "hrs chapter 343",
    "hawaii environmental assessment",
  ],
  document: "Hawaii Environmental Assessment",
  answer:
    "HEPA Hawaii review, under the Hawaii Environmental Policy Act (HRS Chapter 343), requires an [environmental assessment](/for/nepa-environmental-assessment) (EA) when an action triggers section 343-5, such as using state or county lands or funds or any use in a shoreline area [[hepaErp]] [[hepaHrs3435]]. It ends in a finding of no significant impact (FONSI) or, if effects may be significant, an EIS preparation notice (EISPN) [[hepaHrs3432]] [[hepaHar]].",
  glance: [
    {
      label: "Rules",
      value:
        "HAR Chapter 11-200.1, in effect since August 9, 2019 [[hepaHar]] [[hepaErp]]",
    },
    {
      label: "Administered by",
      value:
        "The Environmental Review Program (ERP), Office of Planning and Sustainable Development [[hepaErp]] [[hepaOeqc]]",
    },
    {
      label: "Prepared by",
      value:
        "The proposing agency, or the applicant when its action needs agency approval [[hepaHrs3435]]",
    },
    {
      label: "Comment periods",
      value:
        "Draft EA 30 days; EISPN 30 days, extendable by 30; draft EIS 45 days [[hepaHrs3435]] [[hepaHar]]",
    },
    {
      label: "Published in",
      value:
        "The Environmental Notice, 8th and 23rd of each month; submit five business days ahead [[hepaErp]] [[hepaHrs3433]] [[hepaHar]]",
    },
  ],
  hero: {
    prefix: "Draft a Hawaii EA for",
    placeholder: "I'm preparing a draft EA for…",
    examples: [
      {
        emoji: "🌊",
        label: "Shoreline Project",
        heading: "a Shoreline Project",
        eyebrow: "SHORELINE AREA",
        prompt:
          "I'm a planner at an environmental consulting firm preparing a draft EA for a homeowners' association replacing a failing 400-foot rock revetment in the shoreline area on Maui's north shore.",
      },
      {
        emoji: "💧",
        label: "Wastewater Plant",
        heading: "a Wastewater Plant",
        eyebrow: "COUNTY WASTEWATER",
        prompt:
          "I'm an engineer with a county wastewater division preparing a draft EA for upgrading a treatment plant that serves 3,000 homes on Hawaii Island to produce recycled water.",
      },
      {
        emoji: "🏫",
        label: "School Expansion",
        heading: "a School Expansion",
        eyebrow: "STATE FUNDS",
        prompt:
          "I'm a facilities planner with a state agency preparing a draft EA for a state-funded two-story classroom building on an existing high school campus on Oahu.",
      },
      {
        emoji: "🏨",
        label: "Waikiki Hotel",
        heading: "a Waikiki Hotel Upgrade",
        eyebrow: "WAIKIKI DISTRICT",
        prompt:
          "I'm a land use consultant preparing a draft EA for a hotel owner renovating a 300-room tower and adding a rooftop pool deck in the Waikiki Special District.",
      },
      {
        emoji: "🌿",
        label: "Watershed Fence",
        heading: "a Watershed Fence",
        eyebrow: "CONSERVATION DISTRICT",
        prompt:
          "I'm a natural resource manager with a state watershed program preparing a draft EA for 6 miles of ungulate-exclusion fence in a conservation district on Kauai.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the Hawaii EA with the trigger, project description, affected environment and anticipated determination; every fact it can't confirm is marked for you.",
    mock: {
      project: "Kalua Point Revetment Replacement",
      documentTitle:
        "Kalua Point Revetment Replacement — Draft Environmental Assessment",
      summary:
        "The Kalua Point Revetment Replacement — Draft Environmental Assessment is ready, organized by the draft EA contents in HAR section 11-200.1-18. A few details still need your input:",
      missing: [
        "Tax map key",
        "Approving agency",
        "Construction duration",
        "Agencies and groups consulted",
        "Anticipated determination",
      ],
      letterhead: {
        left: [
          "Draft Environmental Assessment",
          "Chapter 343, Hawaii Revised Statutes",
        ],
        right: [
          "Kalua Point Revetment Replacement",
          "Maui, Hawaii",
          "TMK: [INSERT: tax map key]",
        ],
      },
      meta: ["Anticipated FONSI", "Date: October 2, 2026"],
      paragraphs: [
        "Applicant and approving agency: the Kalua Point Homeowners Association proposes the action, and [INSERT: approving agency] is the approving agency. Chapter 343 review applies because the work is a use within the shoreline area under section 343-5(a)(3).",
        "Description of the action: replacement of about 400 feet of failing rock revetment fronting 12 residential lots, with work staged from the landward side over [INSERT: construction duration].",
        "Anticipated determination: applying the significance criteria in HAR section 11-200.1-13, [INSERT: anticipated determination and reasons].",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "A reference EA you upload, or one from an analog project the research agent finds on agency project pages",
      manual: "Copy a past EA from the ERP library and rewrite it by hand",
    },
    {
      label: "Missing facts",
      eplan:
        "Left as highlighted [INSERT: …] placeholders, such as the tax map key and consultation list",
      manual: "Tracked by hand in comments or a separate list",
    },
  ],
  sections: [
    {
      heading: "What triggers HRS Chapter 343 review?",
      paragraphs: [
        "Section 343-5(a) lists nine categories that trigger an EA unless an exemption applies; an applicant's action must also need a discretionary approval from an agency [[hepaHrs3435]] [[hepaHrs3432]].",
      ],
      bullets: [
        "Use of state or county lands or funds, except feasibility or planning studies and some unimproved land purchases [[hepaHrs3435]]",
        "Any use in a conservation district, shoreline area or historic site on the National or Hawaii Register",
        "Any use in the Waikiki Special District, or reclassification of conservation district land",
        "County general plan amendments to designations other than agriculture, conservation or preservation, unless the county initiates them",
        "New or expanded helicopter facilities that may affect a conservation district, shoreline area or historic site",
        "Wastewater treatment units (except some small systems), waste-to-energy facilities, landfills, oil refineries and power-generating facilities",
      ],
    },
    {
      heading: "Which actions are exempt from a Hawaii EA?",
      paragraphs: [
        "HAR section 11-200.1-15 lists ten general types of exempt actions with minimal or no significant effects, such as repairing existing facilities, same-site replacement, single small new structures, minor land alterations, basic data collection and some affordable housing [[hepaHrs3436]] [[hepaHar]]. No exemption applies to successive actions with a significant cumulative impact, or to a possibly significant action in a particularly sensitive environment [[hepaHar]].",
        "Each agency also keeps an exemption list, which the Environmental Advisory Council reviews at least every seven years. An exemption under the general types needs a documented exemption notice, listed in The Environmental Notice of the 8th of the following month [[hepaHar]] [[hepaErp]].",
      ],
    },
    {
      heading: "How does a Hawaii EA lead to a FONSI or an EISPN?",
      paragraphs: [
        "The agency or applicant consults early, then prepares a draft EA [[hepaHar]]. If the agency anticipates a FONSI, the draft EA is published with that notice for public comment, and the final EA answers every substantive comment in writing [[hepaHrs3435]] [[hepaHar]].",
        "After the final EA, the agency issues the FONSI or EISPN; for an applicant action, the approving agency decides within 30 days of receiving it [[hepaHar]]. An agency that expects an EIS may skip the EA and start with an EISPN [[hepaHrs3435]]. A lawsuit challenging a FONSI must be filed within 30 days after public notice [[hepaHrs3437]].",
      ],
    },
    {
      heading: "How does an agency decide if an effect is significant?",
      paragraphs: [
        "The agency weighs the sum of effects across every phase of the action, including proposed mitigation. In most instances, an action is significant if it may [[hepaHar]]:",
      ],
      bullets: [
        "Irrevocably commit a natural, cultural or historic resource, or curtail the range of beneficial uses of the environment [[hepaHar]]",
        "Conflict with the State's long-term environmental policies, or substantially harm community economic or social welfare or cultural practices",
        "Substantially harm public health, air or water quality, ambient noise, scenic vistas, or rare, threatened or endangered species",
        "Involve adverse secondary impacts or substantial degradation, or be cumulatively significant",
        "Substantially affect, or likely be damaged in, a flood plain, tsunami zone or sea level rise exposure area",
        "Require substantial energy consumption or emit substantial greenhouse gases",
      ],
    },
  ],
  outline: {
    heading: "Hawaii environmental assessment: the contents",
    intro:
      "Built from the draft EA contents in HAR section 11-200.1-18(d); the final EA adds the agency's determination, findings and reasons [[hepaHar]]. HEPA is one of the [state environmental policy acts](/for/state-environmental-review) similar to [NEPA](/for/nepa).",
    items: [
      {
        title: "Proposing agency or applicant",
        detail:
          "Who proposes the action and, for an applicant action, which agency is the approving agency [[hepaHar]].",
      },
      {
        title: "Permits and approvals",
        detail:
          "Every required state, federal and county permit and approval and, for applicants, which approval triggers Chapter 343 review [[hepaHar]].",
      },
      {
        title: "Consultation",
        detail:
          "Agencies, citizen groups and individuals consulted, including the county agency responsible for the general plan [[hepaHar]].",
      },
      {
        title: "Description of the action",
        detail:
          "The action's technical, economic, social, cultural, historical and environmental characteristics [[hepaHar]].",
      },
      {
        title: "Affected environment",
        detail:
          "A summary with regional, location and site maps, such as Flood Insurance Rate Maps, USGS topographic maps or sea level rise exposure area maps [[hepaHar]].",
      },
      {
        title: "Impacts and alternatives",
        detail:
          "The impacts and the alternatives considered, analyzed against the significance criteria in section 11-200.1-13 [[hepaHar]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "The measures proposed to reduce the impacts identified [[hepaHar]].",
      },
      {
        title: "Anticipated determination",
        detail:
          "The findings and reasons supporting an anticipated FONSI, if that is the expected outcome [[hepaHar]].",
      },
      {
        title: "Comments and responses",
        detail:
          "Written comments from early consultation and public review, with the responses [[hepaHar]].",
      },
    ],
  },
  faq: [
    {
      question: "What happens if Hawaii requires an EIS?",
      answer:
        "The EISPN opens scoping, with at least one public scoping meeting on the island most affected. The final EIS responds to comments on the draft, and the governor or mayor, or for an applicant action the approving agency, must accept it before the action proceeds.",
    },
    {
      question: "Does a federal NEPA FONSI satisfy HRS Chapter 343?",
      answer:
        "Not automatically. The state or county agency may consider a federal exemption or FONSI, but it does not by itself meet Chapter 343. A federal EIS can serve both laws if it also meets Hawaii's content rules, including cultural impacts.",
    },
    {
      question: "Is OEQC still the office for Hawaii environmental review?",
      answer:
        "No. Act 152 of 2021 moved the Office of Environmental Quality Control from the Department of Health to the Office of Planning and Sustainable Development and renamed it the Environmental Review Program, which now publishes The Environmental Notice.",
    },
    {
      question: "Can ePlan publish my EA in The Environmental Notice?",
      answer:
        "No. ePlan drafts the EA from your project description and a reference EA, marks every fact it could not confirm, and downloads the draft as Word. Your agency files it with the Environmental Review Program and makes the FONSI or EISPN determination.",
    },
  ],
};
