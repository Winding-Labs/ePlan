import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

// Reused source keys (defined in sources.ts): ceqIfr, ceqFinal,
// ceqProcedures, usc4332, usc4336, usc4336a, usc4336c, usc4336e, fra2023,
// pl11921, sevenCounty, usdaFinal, doiFinal, doe1021, doeProcedures,
// fhwaFinal, army651

const READ = "2026-10-02";

const USC_2023 = "United States Code, 2023 edition (GovInfo)";

export const sources = {
  regsEo14154: {
    title: "Executive Order 14154, Unleashing American Energy, 90 FR 8353",
    publisher: "Executive Office of the President, Federal Register",
    url: "https://www.federalregister.gov/documents/2025/01/29/2025-01956/unleashing-american-energy",
    published: "2025-01-29",
    read: READ,
  },
  regsCeqMemoSept: {
    title:
      "Memorandum for Heads of Federal Departments and Agencies: Implementation of the National Environmental Policy Act (revised guidance and agency procedures template)",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/sites/default/files/documents/Agency-NEPA-Implementation-Guidance.pdf",
    published: "2025-09-29",
    read: READ,
  },
  regsDoeIfr: {
    title:
      "Revision of National Environmental Policy Act Implementing Procedures (DOE interim final rule), 90 FR 29676",
    publisher: "U.S. Department of Energy, Federal Register",
    url: "https://www.federalregister.gov/documents/2025/07/03/2025-12383/revision-of-national-environmental-policy-act-implementing-procedures",
    published: "2025-07-03",
    read: READ,
  },
  regsFast41: {
    title: "42 U.S.C. 4370m - Definitions (FAST-41)",
    publisher: USC_2023,
    url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap55-subchapIV-sec4370m.htm",
    read: READ,
  },
  regsFast41Dashboard: {
    title: "42 U.S.C. 4370m-2 - Permitting process improvement (FAST-41)",
    publisher: USC_2023,
    url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap55-subchapIV-sec4370m-2.htm",
    read: READ,
  },
  regsPermittingProgram: {
    title: "FAST-41 Program",
    publisher:
      "Federal Permitting Improvement Steering Council (permitting.gov)",
    url: "https://www.permitting.gov/projects/title-41-fixing-americas-surface-transportation-act-fast-41",
    read: READ,
  },
  regsSpeedAct: {
    title:
      "H.R. 4776 - SPEED Act (Standardizing Permitting and Expediting Economic Development Act), 119th Congress: actions, titles and summary",
    publisher: "Congress.gov (Library of Congress)",
    url: "https://www.congress.gov/bill/119th-congress/house-bill/4776",
    published: "2025-07-25",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/nepa-regulations",
  title: "NEPA Regulations in 2026: Where the Rules Live",
  description:
    "Where NEPA regulations live after CEQ's rules were removed: agency procedures, the 2023 limits, Seven County and FAST-41.",
  eyebrow: "NEPA regulations",
  h1: "NEPA regulations in 2026: what replaced CEQ's rules",
  primaryKeyword: "nepa regulations",
  secondaryKeywords: [
    "ceq nepa regulations rescinded",
    "agency nepa procedures",
    "seven county infrastructure coalition v eagle county",
    "fiscal responsibility act nepa",
    "speed act",
    "fast-41",
    "permitting reform",
  ],
  document: "NEPA Procedures Memo",
  answer:
    "NEPA regulations are the rules federal agencies follow to carry out the [National Environmental Policy Act](/for/nepa). Since CEQ's government-wide rules were removed in 2025 [[ceqIfr]] [[ceqFinal]], each agency applies the statute through its own NEPA procedures [[usc4332]] [[ceqProcedures]], and courts review its choices with substantial deference [[sevenCounty]].",
  glance: [
    {
      label: "CEQ regulations",
      value:
        "40 CFR parts 1500-1508 removed April 11, 2025; removal final January 8, 2026 [[ceqIfr]] [[ceqFinal]]",
    },
    {
      label: "Governing law",
      value:
        "NEPA as amended in 2023 (BUILDER Act) and 2025 (sponsor opt-in fees) [[fra2023]] [[pl11921]]",
    },
    {
      label: "Page limits and deadlines",
      value:
        "EA 75 pages, 1 year; EIS 150 pages (300 if extraordinarily complex), 2 years [[usc4336a]]",
    },
    {
      label: "FAST-41",
      value:
        "Voluntary federal coordination for covered infrastructure projects, tracked on the public Permitting Dashboard [[regsPermittingProgram]] [[regsFast41Dashboard]]",
    },
    {
      label: "Permitting reform",
      value:
        "SPEED Act passed the House December 18, 2025; not law as of October 2026 [[regsSpeedAct]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder:
      "I'm applying for federal funds for a project and need to know which NEPA procedures apply…",
    examples: [
      {
        emoji: "🌉",
        label: "Bridge Replacement",
        heading: "Procedures Memo for Bridge Replacement",
        eyebrow: "COUNTY PUBLIC WORKS",
        prompt:
          "I'm the grants coordinator for Marten County Public Works, applying for federal-aid highway funds through our state DOT to replace the one-lane Alder Creek bridge on County Road 12.",
      },
      {
        emoji: "💧",
        label: "Water Main Upgrade",
        heading: "Procedures Memo for Water Main Upgrade",
        eyebrow: "RURAL WATER DISTRICT",
        prompt:
          "I'm the engineer for a small water district in Idaho applying for a USDA Rural Development loan to replace 4 miles of water main and add a storage tank.",
      },
      {
        emoji: "⚡",
        label: "Transmission Line",
        heading: "Procedures Memo for Transmission Line",
        eyebrow: "ENERGY INFRASTRUCTURE",
        prompt:
          "I'm a permitting manager at a utility planning a 60-mile transmission line across BLM and Forest Service land in Nevada, and I need to know which agency's procedures lead.",
      },
      {
        emoji: "🚆",
        label: "Park-and-Ride Station",
        heading: "Procedures Memo for Park-and-Ride Station",
        eyebrow: "REGIONAL TRANSIT",
        prompt:
          "I'm a planner at a regional transit agency in Colorado seeking FTA capital funds for a park-and-ride lot and station on an existing commuter rail line.",
      },
      {
        emoji: "🪖",
        label: "Training Range",
        heading: "Procedures Memo for Training Range",
        eyebrow: "ARMY INSTALLATION",
        prompt:
          "I'm an environmental coordinator at an Army installation in Georgia upgrading a small-arms training range within its existing footprint.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the NEPA procedures memo with the lead agency, governing procedures and statutory deadlines filled in; every fact it can't confirm is marked for you.",
    mock: {
      project: "Alder Creek Bridge Replacement",
      documentTitle: "NEPA Procedures for the Alder Creek Bridge Replacement",
      summary:
        "I drafted the procedures memo from your description and FHWA's current 23 CFR part 771. Four details are marked for you, and the project team should confirm the CE category before relying on it.",
      missing: [
        "Grant file number",
        "City, state and ZIP for the letterhead",
        "Whether the State DOT holds NEPA assignment",
        "Listed fish species in Alder Creek",
        "Bridge span and in-water work window",
      ],
      letterhead: {
        left: [
          "Marten County",
          "Department of Public Works",
          "Grants and Capital Projects",
        ],
        right: ["1200 Courthouse Way", "[INSERT: city, state ZIP]"],
      },
      meta: ["File Code: [INSERT: grant file number]", "Date: October 2, 2026"],
      salutation: "To: Alder Creek Bridge project team",
      paragraphs: [
        "Lead agency and procedures. The project would use federal-aid highway funds through the State DOT, so FHWA's NEPA procedures at 23 CFR part 771, as finalized September 1, 2026, apply. The State DOT, as direct recipient, would serve as joint lead agency with FHWA [INSERT: confirm State DOT NEPA assignment status].",
        "Level of review. Replacing the bridge in place likely fits FHWA's categorical exclusion for bridge replacement at 23 CFR 771.117(c)(28), if the project meets the constraints in paragraph (e). If unusual circumstances arise, FHWA studies whether the CE still fits; if not, an EA runs up to 75 pages and one year by statute.",
        "Other reviews. Plan for Section 106 consultation, a Clean Water Act section 404 permit, and Endangered Species Act consultation for [INSERT: listed fish species in Alder Creek]. Every environmental document needs a brief purpose and need statement.",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "A project description or uploaded files; the research agent searches agency project pages, the Federal Register and eCFR",
      manual:
        "Tracking down each agency's current rule, handbook and Federal Register notice by hand",
    },
    {
      label: "Missing facts",
      eplan: "Left as highlighted [INSERT: …] placeholders for you to fill",
      manual: "Easy to carry over from an older memo without noticing",
    },
  ],
  sections: [
    {
      heading: "NEPA regulations timeline: what changed, 2023-2026",
      paragraphs: [],
      bullets: [
        "June 3, 2023: the Fiscal Responsibility Act amends NEPA, adding levels of review, page limits and deadlines [[fra2023]]",
        "January 20, 2025: Executive Order 14154 revokes Executive Order 11991 and directs CEQ to propose rescinding its regulations [[regsEo14154]]",
        "February 25, 2025: CEQ's interim final rule removes its NEPA regulations, effective April 11, 2025 [[ceqIfr]]",
        "July 3, 2025: USDA, Interior, DOE, FHWA, FRA, FTA and the Army revise or rescind their NEPA regulations [[usdaFinal]] [[doiFinal]] [[regsDoeIfr]] [[fhwaFinal]] [[army651]]",
        "September 29, 2025: CEQ issues revised NEPA guidance and a template for agency procedures [[regsCeqMemoSept]]",
        "2026: Interior (February 24), USDA (April 3) and FHWA, FRA and FTA (September 1) finalize their procedures [[doiFinal]] [[usdaFinal]] [[fhwaFinal]]",
      ],
    },
    {
      heading: "Which agency NEPA procedures apply to my project?",
      paragraphs: [
        "The agency taking the action applies its own procedures, developed in consultation with CEQ [[usc4332]]; CEQ's directory lists each agency's procedures and NEPA contact [[ceqProcedures]]. When several agencies participate, they choose a lead agency and, where practicable, share one document [[usc4336a]]. Where the main rules sit now:",
      ],
      bullets: [
        "USDA, including the [Forest Service](/for/usda-forest-service-nepa) and Rural Development: 7 CFR part 1b [[usdaFinal]]",
        "Interior, including BLM: a Departmental Handbook holds most procedures; [43 CFR part 46](/for/interior-blm-nepa) is partly rescinded [[doiFinal]]",
        "DOE: [10 CFR part 1021](/for/doe-nepa) keeps older categorical exclusions; the rest is in guidance revised July 13, 2026 [[doe1021]] [[doeProcedures]]",
        "FHWA, FRA and FTA: [23 CFR part 771](/for/fhwa-nepa), for documents prepared or accepted after July 3, 2025 [[fhwaFinal]]",
        "Army: 32 CFR part 651 was rescinded; Department of Defense-wide procedures now guide its process [[army651]]",
      ],
    },
    {
      heading:
        "Fiscal Responsibility Act NEPA amendments: levels of review, deadlines, fees",
      paragraphs: [
        "Section 321 of the Fiscal Responsibility Act of 2023, the BUILDER Act, wrote NEPA's process into the statute [[fra2023]]: when no environmental document is needed, and three levels of review (categorical exclusion, environmental assessment, environmental impact statement) [[usc4336]]. An agency may extend a deadline only as long as needed, in consultation with the applicant, and a sponsor may petition a court over a missed deadline [[usc4336a]].",
        "Since July 4, 2025, NEPA section 112 lets a sponsor pay 125 percent of anticipated costs for a shorter schedule: an EA within 180 days of payment, or an EIS within one year of the notice of intent [[pl11921]].",
      ],
    },
    {
      heading:
        "Seven County Infrastructure Coalition v Eagle County: what courts review now",
      paragraphs: [
        "Decided May 29, 2025, the case concerned the Surface Transportation Board's EIS for an 88-mile Utah rail line. The Supreme Court held that courts owe agencies substantial deference on an EIS's scope and detail, that the Board need not analyze upstream drilling or downstream refining, separate projects in time or place, and that a deficient EIS does not necessarily require vacating the approval [[sevenCounty]].",
      ],
    },
  ],
  outline: {
    heading: "What a NEPA procedures memo covers",
    intro:
      "No statute prescribes this memo. Its items follow the questions NEPA and agency procedures answer for every project [[usc4336]] [[usc4336a]].",
    items: [
      {
        title: "Federal action",
        detail:
          "The funding, permit or approval that makes this a major Federal action; non-federal projects with no or minimal federal funding are excluded [[usc4336e]].",
      },
      {
        title: "Threshold check",
        detail:
          "Whether any environmental document is needed: final agency action, an exclusion, a conflict with another law, or a nondiscretionary action [[usc4336]].",
      },
      {
        title: "Lead and cooperating agencies",
        detail:
          "Which federal agency leads, set by letter or memorandum when several participate [[usc4336a]].",
      },
      {
        title: "Procedures that apply",
        detail:
          "The lead agency's current rule or handbook and its date, from CEQ's directory and the latest Federal Register notice [[ceqProcedures]].",
      },
      {
        title: "Expected level of review",
        detail:
          "Categorical exclusion (the agency's own or one adopted from another agency), EA or EIS, with the reason [[usc4336]] [[usc4336c]].",
      },
      {
        title: "Page limits and deadlines",
        detail:
          "The limit and deadline for that level of review, and the date the clock starts [[usc4336a]].",
      },
      {
        title: "Sponsor role and fee option",
        detail:
          "Whether the sponsor prepares the document under the lead agency's supervision [[usc4336a]], and whether to pay for a shorter schedule [[pl11921]].",
      },
      {
        title: "FAST-41 eligibility",
        detail:
          "Whether the project falls in a covered sector and could request coverage [[regsFast41]] [[regsFast41Dashboard]].",
      },
      {
        title: "Other reviews and open questions",
        detail:
          "Consultations and permits under other laws to schedule alongside NEPA, and each fact still to confirm with the agency.",
      },
    ],
  },
  faq: [
    {
      question: "Why were the CEQ NEPA regulations rescinded?",
      answer:
        "CEQ had issued them under Executive Order 11991. After Executive Order 14154 revoked that order in January 2025, CEQ concluded it may lack authority to issue binding regulations without it, removed them, and kept the removal unchanged in its January 2026 final rule.",
    },
    {
      question:
        "Which NEPA procedures apply to a review that started before the changes?",
      answer:
        "CEQ's guidance tells agencies to keep applying their existing procedures, adjusted for the amended statute, without delaying ongoing reviews; they may also voluntarily rely on CEQ's removed regulations to finish them. Some agencies, such as FHWA, set their own cutoff date.",
    },
    {
      question: "When does a NEPA deadline start?",
      answer:
        "On the earliest of three dates: the agency's decision on the level of review, its notice to the applicant that a right-of-way application is complete, or its notice of intent.",
    },
    {
      question: "Can ePlan tell me which NEPA procedures apply to my project?",
      answer:
        "ePlan drafts a procedures memo from your project description, naming the lead agency, procedures and deadlines it found, and marks anything it cannot confirm for you to fill in. Your agency's NEPA staff decide which procedures apply.",
    },
  ],
};
