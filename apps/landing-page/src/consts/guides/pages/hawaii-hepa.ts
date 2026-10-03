import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

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
  hepaHrs3431: HRS("1", "Findings and purpose"),
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

export const entry: GuideEntry<GuidePath> = {
  path: "/for/hawaii-hepa",
  parent: "/for/state-environmental-review",
  family: "state",
  name: "Hawaii HEPA",
  title: "HEPA Hawaii: Chapter 343 EA and EIS Guide",
  description:
    "HEPA Hawaii guide: what triggers HRS Chapter 343 review, exemptions, the environmental assessment, FONSI or EISPN, and The Environmental Notice.",
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
    "HEPA Hawaii review is the environmental review process under the Hawaii Environmental Policy Act, HRS Chapter 343 [[hepaErp]]. It requires an environmental assessment (EA) for actions that trigger section 343-5, such as using state or county lands or funds, or any use within a conservation district, shoreline area or historic site [[hepaHrs3435]]. The EA determines whether the action may have a significant effect: if not, the agency issues a finding of no significant impact (FONSI); if so, it issues an environmental impact statement preparation notice (EISPN) and an EIS follows [[hepaHrs3432]] [[hepaHar]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "HRS Chapter 343, and HAR Chapter 11-200.1, in effect since August 9, 2019 [[hepaHrs3435]] [[hepaErp]]",
    },
    {
      label: "Administered by",
      value:
        "The Environmental Review Program in the Office of Planning and Sustainable Development, formerly OEQC [[hepaErp]] [[hepaOeqc]]",
    },
    {
      label: "Prepared by",
      value:
        "The proposing agency, or the applicant when an applicant's action needs agency approval [[hepaHrs3435]]",
    },
    {
      label: "Draft EA review",
      value: "30 days for public comment [[hepaHrs3435]] [[hepaHar]]",
    },
    {
      label: "Draft EIS review",
      value: "45 days for public comment [[hepaHrs3435]]",
    },
    {
      label: "Published in",
      value:
        "The Environmental Notice, issued on the 8th and 23rd of each month [[hepaErp]] [[hepaHar]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I'm preparing a draft EA for…",
    examples: [
      {
        emoji: "🌊",
        label: "Shoreline Project",
        heading: "Hawaii EA for a Shoreline Project",
        eyebrow: "SHORELINE AREA",
        prompt:
          "I'm a planner at an environmental consulting firm preparing a draft EA for a homeowners' association replacing a failing 400-foot rock revetment in the shoreline area on Maui's north shore.",
      },
      {
        emoji: "💧",
        label: "Wastewater Plant",
        heading: "Hawaii EA for a Wastewater Plant",
        eyebrow: "COUNTY WASTEWATER",
        prompt:
          "I'm an engineer with a county wastewater division preparing a draft EA for upgrading a treatment plant that serves 3,000 homes on Hawaii Island to produce recycled water.",
      },
      {
        emoji: "🏫",
        label: "School Expansion",
        heading: "Hawaii EA for a School Expansion",
        eyebrow: "STATE FUNDS",
        prompt:
          "I'm a facilities planner with a state agency preparing a draft EA for a state-funded two-story classroom building on an existing high school campus on Oahu.",
      },
      {
        emoji: "🏨",
        label: "Waikiki Hotel",
        heading: "Hawaii EA for a Waikiki Hotel Upgrade",
        eyebrow: "WAIKIKI DISTRICT",
        prompt:
          "I'm a land use consultant preparing a draft EA for a hotel owner renovating a 300-room tower and adding a rooftop pool deck in the Waikiki Special District.",
      },
      {
        emoji: "🌿",
        label: "Watershed Fence",
        heading: "Hawaii EA for a Watershed Fence",
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
        "An action is any program or project initiated by an agency or an applicant [[hepaHrs3432]]. Unless an exemption applies, an EA is required when an action falls into one of nine categories in section 343-5(a). For an applicant, the action must also need a discretionary approval from an agency [[hepaHrs3435]] [[hepaHrs3432]].",
      ],
      bullets: [
        "Use of state or county lands or funds, apart from feasibility or planning studies and some purchases of unimproved land [[hepaHrs3435]]",
        "Any use within a conservation district, a shoreline area as defined in section 205A-41, or a historic site on the National or Hawaii Register",
        "Any use within the Waikiki Special District",
        "County general plan amendments that would result in designations other than agriculture, conservation or preservation, unless the county initiates them",
        "Reclassification of conservation district land",
        "New or expanded helicopter facilities that may affect a conservation district, shoreline area or historic site",
        "Wastewater treatment units (with exceptions for small systems), waste-to-energy facilities, landfills, oil refineries and power-generating facilities",
      ],
    },
    {
      heading: "Which actions are exempt from a Hawaii EA?",
      paragraphs: [
        "Chapter 343 directs the rules to declare exempt specific types of actions that will probably have minimal or no significant effects [[hepaHrs3436]]. HAR section 11-200.1-15 lists ten general types, including operation and repair of existing facilities, replacement on the same site, single new small structures, minor land alterations, basic data collection, and some affordable housing. No exemption applies when successive actions in the same place would have a significant cumulative impact, or when the action may be significant in a particularly sensitive environment [[hepaHar]].",
        "Each agency may adopt an exemption list in two parts: routine activities it treats as de minimis, and actions within the general types. Lists go to the Environmental Advisory Council for concurrence at least every seven years [[hepaHar]] [[hepaErp]]. For an exemption under the general types, the agency documents its analysis and the advice of outside agencies or experts in an exemption notice, and lists those notices for The Environmental Notice published on the 8th of the following month [[hepaHar]] [[hepaErp]].",
      ],
    },
    {
      heading: "How a Hawaii EA leads to a FONSI or an EISPN",
      paragraphs: [
        "The proposing agency, or the applicant, consults early with the county planning agency, agencies with jurisdiction or expertise, and affected groups, then prepares a draft EA [[hepaHar]]. If the agency anticipates a FONSI, the draft EA is published with that notice for 30 days of public comment, and every substantive comment gets a written response in the final EA [[hepaHrs3435]] [[hepaHar]].",
        "After the final EA, the agency issues a FONSI if the action is not likely to have a significant effect, or an EISPN if it may; for an applicant action, the approving agency decides within 30 days of receiving the final EA [[hepaHar]]. An agency that expects an EIS may skip the EA and start with an EISPN [[hepaHrs3435]]. A lawsuit challenging a determination that no EIS is required must be filed within 30 days after the public is notified [[hepaHrs3437]].",
      ],
    },
    {
      heading: "How does an agency decide if an effect is significant?",
      paragraphs: [
        "The agency weighs the sum of effects on the quality of the environment, considering every phase of the action, the expected impacts and the proposed mitigation. In most instances, an action is significant if it may do any of the following [[hepaHar]]:",
      ],
      bullets: [
        "Irrevocably commit a natural, cultural or historic resource, or curtail the range of beneficial uses of the environment [[hepaHar]]",
        "Conflict with the State's long-term environmental policies or goals, or substantially harm the economic welfare, social welfare or cultural practices of the community",
        "Have a substantial adverse effect on public health, air or water quality, ambient noise, scenic vistas, or rare, threatened or endangered species or their habitat",
        "Involve adverse secondary impacts or substantial degradation, or be cumulatively significant",
        "Substantially affect, or be likely to suffer damage from being in, an environmentally sensitive area such as a flood plain, tsunami zone, sea level rise exposure area or erosion-prone area",
        "Require substantial energy consumption or emit substantial greenhouse gases",
      ],
    },
    {
      heading: "What happens if an EIS is required?",
      paragraphs: [
        "The EISPN describes the action, the affected environment, possible alternatives and the proposed scoping process. Agencies and the public have 30 days to comment, extendable by up to 30 more, and at least one public scoping meeting is held on the island most affected [[hepaHar]]. The draft EIS then gets 45 days of public review, and the final EIS responds to the comments [[hepaHrs3435]].",
        "An EIS is an informational document that discloses environmental effects and effects on the economic welfare, social welfare and cultural practices of the community and State, along with mitigation and alternatives [[hepaHrs3432]]. For agency actions, the governor or the mayor, or their representative, decides on acceptance; for applicant actions, the agency that received the request does, within 30 days or the statement is deemed accepted. Acceptance is a condition precedent to the action [[hepaHrs3435]].",
      ],
    },
    {
      heading: "The Environmental Review Program and The Environmental Notice",
      paragraphs: [
        "Act 152 of 2021 transferred the Office of Environmental Quality Control from the Department of Health to the Office of Planning and Sustainable Development and renamed it the Environmental Review Program (ERP) [[hepaOeqc]]. ERP facilitates the HEPA process and publishes The Environmental Notice on the 8th and 23rd of each month, with EAs, EISs, exemption lists, habitat conservation plans, shoreline notices and some federal NEPA documents [[hepaErp]] [[hepaHrs3433]].",
        "Anything to be published must reach the office electronically before the close of business five business days before the issue date [[hepaHar]]; ERP treats close of business as 11:59 p.m. [[hepaErp]]. Chapter 343 states its purpose as making sure environmental concerns get appropriate consideration in decision making along with economic and technical considerations [[hepaHrs3431]].",
      ],
    },
    {
      heading: "When HEPA and NEPA both apply",
      paragraphs: [
        "When an action is subject to both NEPA and Chapter 343, state agencies must cooperate with federal agencies to reduce duplication, including joint EISs with concurrent review, so that one document meets all applicable laws [[hepaHrs3435]]. A federal NEPA exemption or FONSI does not automatically satisfy Chapter 343, though the state agency may consider it. A federal EIS may be submitted if it meets Hawaii's content requirements, including cultural impacts [[hepaHar]].",
      ],
    },
  ],
  outline: {
    heading: "Hawaii environmental assessment: the contents",
    intro:
      "Built from the draft EA contents required by HAR section 11-200.1-18(d). The final EA adds the agency's determination with its findings and reasons, and the comments and responses from public review [[hepaHar]].",
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
          "A summary with regional, location and site maps, such as Flood Insurance Rate Maps, USGS topographic maps or state sea level rise exposure area maps [[hepaHar]].",
      },
      {
        title: "Impacts and alternatives",
        detail:
          "Identification and analysis of impacts and the alternatives considered, measured against the significance criteria in section 11-200.1-13 [[hepaHar]].",
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
      question: "What does HEPA stand for in Hawaii?",
      answer:
        "HEPA is the common name for the Hawaii Environmental Policy Act, the environmental review law in Chapter 343 of the Hawaii Revised Statutes. Its rules are in Hawaii Administrative Rules Chapter 11-200.1, and the Environmental Review Program in the Office of Planning and Sustainable Development runs the process.",
    },
    {
      question: "What is the difference between an EA and an EIS in Hawaii?",
      answer:
        "An environmental assessment is a written evaluation to determine whether an action may have a significant effect. If it finds the action is not likely to, the agency issues a finding of no significant impact. If the action may have a significant effect, the agency issues an EIS preparation notice and a full environmental impact statement follows, with scoping, a 45-day draft review and acceptance before the action can proceed.",
    },
    {
      question: "How long is the comment period for a draft EA in Hawaii?",
      answer:
        "Thirty days from publication in The Environmental Notice. The comment period on an EIS preparation notice is also 30 days and can be extended by up to 30 more, and a draft EIS is open for 45 days.",
    },
    {
      question: "Is OEQC still the office for Hawaii environmental review?",
      answer:
        "No. Act 152 of 2021 moved the Office of Environmental Quality Control from the Department of Health to the Office of Planning and Sustainable Development and renamed it the Environmental Review Program, which now publishes The Environmental Notice.",
    },
    {
      question: "Does a federal NEPA FONSI satisfy HRS Chapter 343?",
      answer:
        "Not automatically. Under the HEPA rules, a federal exemption or FONSI does not by itself meet Chapter 343, though the state or county agency may consider it. A federal EIS can be used if it also meets Hawaii's content requirements, including cultural impacts.",
    },
    {
      question: "Can ePlan publish my EA in The Environmental Notice?",
      answer:
        "No. ePlan drafts the EA from your project description and a reference EA, marks every fact it could not confirm, and downloads the draft as Word. Your agency files it with the Environmental Review Program and makes the FONSI or EISPN determination.",
    },
  ],
};
