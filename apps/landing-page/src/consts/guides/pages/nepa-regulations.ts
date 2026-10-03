import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

// Reused existing source keys (defined in nepa-pages.ts SOURCES):
// ceqIfr, ceqFinal, ceqProcedures, ceqCeGuidance, usc4332, usc4336, usc4336a,
// usc4336c, usc4336e, fra2023, pl11921, sevenCounty, usdaFinal, doiFinal,
// doeProcedures, fhwaFinal, army651

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
  regsCeqMemoFeb: {
    title:
      "Memorandum for Heads of Federal Departments and Agencies: Implementation of the National Environmental Policy Act",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/sites/default/files/documents/CEQ%20Memo-Implementation%20of%20NEPA%2002.19.2025.pdf",
    published: "2025-02-19",
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
  regsCeqEmergencies: {
    title:
      "Memorandum for Heads of Federal Departments and Agencies: Guidance on Emergencies and the National Environmental Policy Act",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/sites/default/files/documents/Emergencies%20and%20NEPA%20Guidance%202026.pdf",
    published: "2026-01-21",
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
  regsFast41Sunset: {
    title:
      "42 U.S.C. 4370m-12 - Repealed (former FAST-41 termination provision)",
    publisher: USC_2023,
    url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap55-subchapIV-sec4370m-12.htm",
    read: READ,
  },
  regsPermittingProgram: {
    title: "FAST-41 Program",
    publisher:
      "Federal Permitting Improvement Steering Council (permitting.gov)",
    url: "https://www.permitting.gov/projects/title-41-fixing-americas-surface-transportation-act-fast-41",
    read: READ,
  },
  regsPermittingAbout: {
    title: "About the Permitting Council",
    publisher:
      "Federal Permitting Improvement Steering Council (permitting.gov)",
    url: "https://www.permitting.gov/about/our-mission",
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

export const entry: GuideEntry<GuidePath> = {
  path: "/for/nepa-regulations",
  parent: "/for/nepa",
  family: "nepa",
  name: "NEPA regulations",
  title: "NEPA Regulations in 2026: Where the Rules Live",
  description:
    "NEPA regulations after CEQ's rules were rescinded in 2025: the amended statute, agency NEPA procedures, Seven County, FAST-41 and the SPEED Act.",
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
    "NEPA regulations are the rules federal agencies use to carry out the National Environmental Policy Act, and since 2025 they no longer come from one place. CEQ's government-wide regulations, 40 CFR parts 1500-1508, were removed effective April 11, 2025, and the removal was made final on January 8, 2026 [[ceqIfr]] [[ceqFinal]]. Agencies now apply the statute as amended by the Fiscal Responsibility Act of 2023 [[fra2023]] through their own procedures, developed in consultation with CEQ [[usc4332]] [[ceqProcedures]], and courts review their choices with substantial deference under Seven County Infrastructure Coalition v. Eagle County [[sevenCounty]].",
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
      label: "Agency rules",
      value:
        "Each agency's own NEPA procedures, listed by CEQ [[ceqProcedures]]",
    },
    {
      label: "Page limits",
      value:
        "EA 75 pages; EIS 150, or 300 if extraordinarily complex [[usc4336a]]",
    },
    {
      label: "Deadlines",
      value: "EA 1 year; EIS 2 years [[usc4336a]]",
    },
    {
      label: "SPEED Act",
      value:
        "Passed the House December 18, 2025; referred to a Senate committee the same day [[regsSpeedAct]]",
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
      label: "Start from",
      eplan:
        "A project description or uploaded files; the research agent searches agency project pages, the Federal Register and eCFR",
      manual:
        "Tracking down each agency's current rule, handbook and Federal Register notice by hand",
    },
    {
      label: "Unconfirmed facts",
      eplan: "Left as highlighted [INSERT: …] placeholders for you to fill",
      manual: "Easy to carry over from an older memo without noticing",
    },
  ],
  sections: [
    {
      heading: "What changed: NEPA regulations timeline, 2023-2026",
      paragraphs: [
        "The rules moved in three places at once: Congress amended the statute, the White House and CEQ withdrew the government-wide regulations, and each agency rewrote its own procedures. Dates below come from the Federal Register, the statute, CEQ's memoranda, the Supreme Court and Congress.gov, checked October 2, 2026.",
      ],
      bullets: [
        "June 3, 2023 — The Fiscal Responsibility Act, section 321 (the BUILDER Act), amends NEPA: levels of review, lead agency rules, page limits, deadlines, CE adoption and definitions [[fra2023]] [[usc4336a]]",
        "January 20, 2025 — Executive Order 14154 revokes Executive Order 11991 and directs CEQ to issue NEPA guidance and propose rescinding its regulations within 30 days [[regsEo14154]]",
        "February 19, 2025 — CEQ tells agencies to revise their NEPA procedures within 12 months and not to delay ongoing reviews in the meantime [[regsCeqMemoFeb]]",
        "February 25, 2025 — CEQ publishes an interim final rule under which its NEPA regulations, 40 CFR parts 1500-1508, are removed, effective April 11, 2025 [[ceqIfr]]",
        "April 11, 2025 — All iterations of CEQ's NEPA regulations are removed from the Code of Federal Regulations [[ceqIfr]]",
        "May 29, 2025 — The Supreme Court decides Seven County Infrastructure Coalition v. Eagle County [[sevenCounty]]",
        "June 30, 2025 — DOE issues its NEPA Implementing Procedures as a document outside the Code of Federal Regulations [[regsDoeIfr]]",
        "July 3, 2025 — USDA, Interior, DOE, FHWA/FRA/FTA and the Army publish interim final rules revising or rescinding their NEPA regulations [[usdaFinal]] [[doiFinal]] [[regsDoeIfr]] [[fhwaFinal]] [[army651]]",
        "July 4, 2025 — Pub. L. 119-21, section 60026, adds NEPA section 112: sponsor opt-in fees for shorter EA and EIS deadlines [[pl11921]]",
        "September 29, 2025 — CEQ replaces its February guidance with revised guidance and a template for agency procedures [[regsCeqMemoSept]]",
        "December 18, 2025 — The House passes the SPEED Act, H.R. 4776, 221-196; the Senate refers it to the Committee on Environment and Public Works [[regsSpeedAct]]",
        "January 8, 2026 — CEQ's final rule adopts the removal of its regulations without changes [[ceqFinal]]",
        "January 21, 2026 — CEQ replaces its earlier guidance on emergencies and NEPA [[regsCeqEmergencies]]",
        "February 24, 2026 — Interior's final rule takes effect; most of its procedures now sit in a Departmental Handbook [[doiFinal]]",
        "April 3, 2026 — USDA's final rule takes effect for its department-wide procedures at 7 CFR part 1b [[usdaFinal]]",
        "April 9, 2026 — CEQ issues guidance on establishing, adopting and applying categorical exclusions, replacing its 2010 guidance [[ceqCeGuidance]]",
        "July 13, 2026 — DOE revises its procedures, adding a Coast Guard categorical exclusion adopted under NEPA section 109 [[doeProcedures]]",
        "September 1, 2026 — FHWA, FRA and FTA finalize their revised procedures at 23 CFR part 771 [[fhwaFinal]]",
      ],
    },
    {
      heading:
        "CEQ NEPA regulations rescinded: what happened and what still applies",
      paragraphs: [
        "CEQ first issued its NEPA regulations in 1978, citing Executive Order 11991 as its authority [[ceqIfr]]. Executive Order 14154 revoked that order on January 20, 2025 [[regsEo14154]]. CEQ then concluded it may lack authority to issue binding rules without it and removed all iterations of 40 CFR parts 1500-1508, effective April 11, 2025 [[ceqIfr]]. The January 8, 2026 final rule adopted that removal without changes [[ceqFinal]].",
        "For reviews already underway, CEQ tells agencies to keep applying their existing procedures, adjusted to match the amended statute, and not to delay pending analyses. Agencies may also voluntarily rely on CEQ's removed regulations to finish ongoing reviews or defend reviews completed while those regulations were in effect [[regsCeqMemoSept]]. The September 29, 2025 guidance replaced the February 19 memo [[regsCeqMemoFeb]], and CEQ says neither it nor its template is binding on agencies [[regsCeqMemoSept]].",
      ],
    },
    {
      heading: "Which agency NEPA procedures apply to my project?",
      paragraphs: [
        "The agency taking the federal action applies its own procedures, which NEPA directs agencies to develop in consultation with CEQ [[usc4332]]. CEQ keeps a directory of each agency's procedures and NEPA contact [[ceqProcedures]]. Some agencies kept codified rules; CEQ's 2025 guidance notes that others may issue procedures as handbooks or guidance, which are quicker to update [[regsCeqMemoSept]]. When two or more federal agencies participate, they choose a lead agency by letter or memorandum and, where practicable, share one environmental document [[usc4336a]]. Where the main rules sit today:",
      ],
      bullets: [
        "USDA, including the Forest Service and Rural Development: department-wide procedures at 7 CFR part 1b; interim final rule July 3, 2025, final rule April 3, 2026 [[usdaFinal]] [[ceqProcedures]]",
        "Interior, including BLM, the Fish and Wildlife Service, the National Park Service and Reclamation: a partly rescinded 43 CFR part 46 plus a Departmental Handbook holding most procedures; final rule February 24, 2026 [[doiFinal]] [[ceqProcedures]]",
        "Energy: 10 CFR part 1021 keeps DOE's excepted actions and the categorical exclusions it had in July 2025; the rest of its procedures, including categorical exclusions added or adopted since, are in a guidance document last revised July 13, 2026 [[regsDoeIfr]] [[doe1021]] [[doeProcedures]]",
        "FHWA, FRA and FTA: 23 CFR part 771, interim final rule July 3, 2025, finalized September 1, 2026 [[fhwaFinal]]",
        "Army: its regulation at 32 CFR part 651 was rescinded July 3, 2025, and Department of Defense-wide procedures now guide the Army's process [[army651]]",
      ],
    },
    {
      heading:
        "Fiscal Responsibility Act NEPA amendments: page limits, deadlines, lead agency",
      paragraphs: [
        "Section 321 of the Fiscal Responsibility Act of 2023, the BUILDER Act, wrote much of NEPA's process into the statute [[fra2023]]. It lists when no environmental document is needed and sets the levels of review: categorical exclusion, environmental assessment and environmental impact statement [[usc4336]] [[regsCeqMemoSept]].",
        "An EIS may not exceed 150 pages, or 300 for an action of extraordinary complexity, and an EA 75 pages, not counting citations and appendices. A lead agency has two years for an EIS and one year for an EA, counted from the earliest trigger date, and may extend a deadline only as long as needed, in consultation with the applicant. A project sponsor may petition a court over a missed deadline [[usc4336a]].",
        "Since July 4, 2025, NEPA section 112 lets a sponsor pay a fee of 125 percent of anticipated costs for a shorter schedule: an EA within 180 days of payment, or an EIS within one year of the notice of intent [[pl11921]].",
      ],
    },
    {
      heading:
        "Seven County Infrastructure Coalition v Eagle County: what courts review now",
      paragraphs: [
        "Decided May 29, 2025, the case concerned an 88-mile rail line in Utah's Uinta Basin that the Surface Transportation Board approved after a 3,600-page EIS. The Supreme Court held that the D.C. Circuit failed to give the Board the substantial deference NEPA cases require, and that the Board did not have to analyze effects of upstream oil drilling and downstream refining, separate projects in time or place [[sevenCounty]].",
        "The Court called NEPA a purely procedural statute and said even a deficient EIS does not necessarily require vacating a project approval, absent reason to believe the agency might disapprove the project [[sevenCounty]]. CEQ's September 2025 guidance says agency procedures must take the opinion into account [[regsCeqMemoSept]], and FHWA, FRA and FTA cite it in their revised 23 CFR part 771 [[fhwaFinal]].",
      ],
    },
    {
      heading: "FAST-41 and the Permitting Council",
      paragraphs: [
        "Title 41 of the FAST Act of 2015 created the Federal Permitting Improvement Steering Council to make federal reviews of certain infrastructure projects more transparent and predictable [[regsPermittingProgram]]. Its Executive Director chairs it, with 15 other members, including deputy secretaries from 13 agencies, the CEQ Chair and the OMB Director [[regsPermittingAbout]]. A covered project is generally an infrastructure project subject to NEPA in a listed sector, such as energy, transmission, surface transportation, broadband, pipelines or manufacturing, that meets size, sponsor or complexity criteria [[regsFast41]].",
        "Participation is voluntary: a sponsor requests coverage with a FAST-41 Initiation Notice, and FAST-41 does not change any environmental law or predetermine any decision [[regsPermittingProgram]]. The Executive Director keeps an online Permitting Dashboard with an entry for each covered project, and the lead agency sets a coordinated project plan with a permitting timetable [[regsFast41Dashboard]]. FAST-41's original seven-year termination provision was repealed in 2021 [[regsFast41Sunset]].",
      ],
    },
    {
      heading: "The SPEED Act and permitting reform in Congress",
      paragraphs: [
        "The SPEED Act, H.R. 4776, the Standardizing Permitting and Expediting Economic Development Act, was introduced by Rep. Bruce Westerman on July 25, 2025. The House passed it 221-196 on December 18, 2025, and the Senate received it and referred it to the Committee on Environment and Public Works the same day. As of October 2, 2026, Congress.gov lists that referral as the latest action; the bill is not law [[regsSpeedAct]].",
        "Congress.gov's summary of the version reported to the House says it would limit NEPA's scope: an action would not be a major federal action based solely on federal funding, agencies would consider only effects proximately caused by the project, and judicial review of NEPA cases would be limited [[regsSpeedAct]]. Until a bill is enacted, the statute as amended in 2023 and 2025 governs [[fra2023]] [[pl11921]].",
      ],
    },
  ],
  outline: {
    heading: "What a NEPA procedures memo covers",
    intro:
      "No statute prescribes this memo. The items follow the questions NEPA and agency procedures answer for every project, in the order a reviewer meets them [[usc4336]] [[usc4336a]].",
    items: [
      {
        title: "Federal action",
        detail:
          "The funding, permit or approval that makes this a major Federal action. Non-federal projects with no or minimal federal funding are excluded [[usc4336e]].",
      },
      {
        title: "Threshold check",
        detail:
          "Whether any environmental document is needed: final agency action, an applicable categorical exclusion or other law, a conflict with another law, or a nondiscretionary action [[usc4336]].",
      },
      {
        title: "Lead and cooperating agencies",
        detail:
          "Which federal agency leads, set by letter or memorandum when several participate, and whether they share one document [[usc4336a]].",
      },
      {
        title: "Procedures that apply",
        detail:
          "The lead agency's current rule or handbook and its date, from CEQ's directory and the agency's latest Federal Register notice [[ceqProcedures]].",
      },
      {
        title: "Expected level of review",
        detail:
          "Categorical exclusion (the agency's own, or one adopted from another agency), EA or EIS, with the reason [[usc4336]] [[usc4336c]].",
      },
      {
        title: "Page limits and deadlines",
        detail:
          "75 pages and one year for an EA; 150 pages (300 if extraordinarily complex) and two years for an EIS, and the date the clock starts [[usc4336a]].",
      },
      {
        title: "Sponsor role and fee option",
        detail:
          "Whether the sponsor prepares the EA or EIS under the lead agency's supervision [[usc4336a]], and whether to request an opt-in fee for a shorter schedule [[pl11921]].",
      },
      {
        title: "FAST-41 eligibility",
        detail:
          "Whether the project falls in a covered sector and could request coverage and a Permitting Dashboard entry [[regsFast41]] [[regsFast41Dashboard]].",
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
        "Executive Order 14154 revoked Executive Order 11991, the 1977 order CEQ had relied on to issue its NEPA regulations, and directed CEQ to propose rescinding them. CEQ concluded it may lack authority to issue binding rules without that order, removed 40 CFR parts 1500-1508 effective April 11, 2025, and finalized the removal on January 8, 2026.",
    },
    {
      question: "What replaced CEQ's NEPA regulations?",
      answer:
        "No single government-wide rule. Agencies apply the statute, as amended by the Fiscal Responsibility Act of 2023, through their own NEPA procedures, which they develop in consultation with CEQ. CEQ also issues non-binding guidance, including a September 2025 template for agency procedures.",
    },
    {
      question:
        "Which NEPA procedures apply to a review that started before the changes?",
      answer:
        "CEQ's guidance tells agencies to keep applying their existing procedures, adjusted for the amended statute, and not to delay ongoing reviews; agencies may also voluntarily rely on CEQ's removed regulations to finish them. Some agencies set their own cutoff: FHWA, FRA and FTA apply the revised 23 CFR part 771 to environmental documents prepared or accepted after July 3, 2025.",
    },
    {
      question: "Is the SPEED Act law?",
      answer:
        "No. As of October 2, 2026, Congress.gov shows that H.R. 4776 passed the House 221-196 on December 18, 2025, and was referred to the Senate Committee on Environment and Public Works the same day, with no later action listed.",
    },
    {
      question: "What is FAST-41?",
      answer:
        "Title 41 of the FAST Act of 2015, which created the Federal Permitting Improvement Steering Council. Sponsors of eligible infrastructure projects can request coverage, which brings a public entry on the Permitting Dashboard, a permitting timetable and agency coordination. It does not change environmental laws or decide outcomes.",
    },
    {
      question: "Can ePlan tell me which NEPA procedures apply to my project?",
      answer:
        "ePlan drafts a procedures memo from your project description, naming the lead agency, procedures and deadlines it found, and marks anything it cannot confirm for you to fill in. Your agency's NEPA staff decide which procedures apply.",
    },
  ],
};
