import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

/**
 * /for/environmental-permitting — how NEPA and state review fit with the
 * federal and state permits a project needs.
 *
 * Reused source keys (defined elsewhere, not redefined here):
 * - guides/sources.ts: usc4336a, usc4336e
 * - pages/esa-section-7.ts: esaUsc1536, esaCfr40214
 * - pages/section-106.ts: s106Usc306108, s106Cfr80016
 * - pages/ceqa.ts: ceqaPrc21065
 * - pages/state-environmental-review.ts: stateCeqList
 *
 * eCFR and the Federal Register refuse automated reads, so the Corps rule was
 * read as GovInfo's PDF of the Federal Register and 33 CFR part 333 through
 * the eCFR API (unamended since July 3, 2025, as of the read date).
 *
 * ePlan drafts the environmental review documents. It never obtains, files or
 * handles permits.
 */

const READ = "2026-10-02";

const EPA = "U.S. Environmental Protection Agency";

const USC = (title: string, url: string): Source => ({
  title,
  publisher: "United States Code, 2023 edition (GovInfo)",
  url,
  read: READ,
});

export const sources = {
  permitEpaAbout: {
    title: "About EPA Permitting",
    publisher: EPA,
    url: "https://www.epa.gov/permits/about-epa-permitting",
    published: "2026-06-29",
    read: READ,
  },
  permitEpa404: {
    title: "Permit Program under CWA Section 404",
    publisher: EPA,
    url: "https://www.epa.gov/cwa-404/permit-program-under-cwa-section-404",
    published: "2026-02-17",
    read: READ,
  },
  permitEpa401: {
    title: "Overview of CWA Section 401 Certification",
    publisher: EPA,
    url: "https://www.epa.gov/cwa-401/overview-cwa-section-401-certification",
    published: "2026-05-19",
    read: READ,
  },
  permitEpaNpdes: {
    title: "About NPDES",
    publisher: EPA,
    url: "https://www.epa.gov/npdes/about-npdes",
    published: "2026-02-03",
    read: READ,
  },
  permitEpaNsr: {
    title: "New Source Review (NSR) Permitting",
    publisher: EPA,
    url: "https://www.epa.gov/nsr",
    published: "2026-09-28",
    read: READ,
  },
  permitEpaTitleV: {
    title: "Basic Information about Operating Permits (Title V)",
    publisher: EPA,
    url: "https://www.epa.gov/title-v-operating-permits/basic-information-about-operating-permits",
    published: "2025-12-08",
    read: READ,
  },
  permitUsc793: USC(
    "15 U.S.C. 793 - Protection of public health and environment (subsection (c)(1): Clean Air Act actions and NEPA)",
    "https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap16C-sec793.htm",
  ),
  permitUsc1371: USC(
    "33 U.S.C. 1371 - Authority under other laws and regulations (subsection (c)(1): Clean Water Act actions and NEPA)",
    "https://www.govinfo.gov/content/pkg/USCODE-2023-title33/html/USCODE-2023-title33-chap26-subchapV-sec1371.htm",
  ),
  permitUsc1456: USC(
    "16 U.S.C. 1456 - Coordination and cooperation (Coastal Zone Management Act section 307, federal consistency)",
    "https://www.govinfo.gov/content/pkg/USCODE-2023-title16/html/USCODE-2023-title16-chap33-sec1456.htm",
  ),
  permitUsaceIfr: {
    title:
      "Procedures for Implementing NEPA; Processing of Department of the Army Permits (interim final rule), 90 FR 29465",
    publisher: "U.S. Army Corps of Engineers, Federal Register (GovInfo PDF)",
    url: "https://www.govinfo.gov/content/pkg/FR-2025-07-03/pdf/2025-12360.pdf",
    published: "2025-07-03",
    read: READ,
  },
  permitUsace333: {
    title:
      "33 CFR part 333 - Processing of Department of the Army Permits and 33 U.S.C. 408 Permissions, National Environmental Policy Act Implementing Procedures",
    publisher: "Electronic Code of Federal Regulations (eCFR), current",
    url: "https://www.ecfr.gov/current/title-33/chapter-II/part-333",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/environmental-permitting",
  title: "Environmental Permitting: Federal Permits & NEPA",
  description:
    "What environmental permitting is, how NEPA review fits with federal permits such as CWA 404, and the usual permits to plan for.",
  eyebrow: "Environmental permitting",
  h1: "Environmental permitting: how NEPA review fits with federal and state permits",
  primaryKeyword: "environmental permitting",
  secondaryKeywords: [
    "what is environmental permitting",
    "how nepa affects environmental permitting",
    "environmental planning and permitting",
    "environmental permitting and compliance",
  ],
  document: "Environmental Review Document",
  answer:
    "Environmental permitting is getting the permits environmental laws require; permits limit emissions, discharges and disturbances and set monitoring and reporting conditions [[permitEpaAbout]]. In the US, a federal permit usually triggers [NEPA](/for/nepa) review first: an Army Corps permit decision needs an EA or EIS unless a categorical exclusion applies [[permitUsaceIfr]].",
  glance: [
    {
      label: "Wetlands and waters",
      value:
        "Clean Water Act Section 404 permit from the Army Corps or an approved state or tribe [[permitEpa404]]",
    },
    {
      label: "Water quality",
      value:
        "Section 401 certification from the state or tribe, within one year [[permitEpa401]]",
    },
    {
      label: "Discharges",
      value:
        "NPDES permits, issued by 47 authorized states and one territory, or EPA [[permitEpaNpdes]]",
    },
    {
      label: "Air",
      value:
        "Preconstruction (NSR) and Title V operating permits, mostly from state or local agencies [[permitEpaNsr]] [[permitEpaTitleV]]",
    },
    {
      label: "Corps NEPA procedures",
      value:
        "33 CFR part 333, in effect since July 3, 2025 [[permitUsaceIfr]] [[permitUsace333]]",
    },
  ],
  hero: {
    prefix: "Plan Environmental Review for",
    placeholder: "I'm planning the environmental review and permits for…",
    examples: [
      {
        emoji: "🎣",
        label: "Fishing Pier",
        heading: "a Fishing Pier",
        eyebrow: "COASTAL PERMITS",
        prompt:
          "I'm a consultant for a county parks department in North Carolina planning a 200-foot public fishing pier on the sound that needs an Army Corps permit.",
      },
      {
        emoji: "🛢️",
        label: "Gas Pipeline",
        heading: "a Gas Pipeline",
        eyebrow: "UTILITY CORRIDOR",
        prompt:
          "I'm an environmental specialist at a gas utility replacing 8 miles of pipeline in Ohio with 14 stream crossings that need Clean Water Act Section 404 and 401 approvals.",
      },
      {
        emoji: "🐟",
        label: "Culvert Replacement",
        heading: "a Culvert",
        eyebrow: "FISH PASSAGE",
        prompt:
          "I'm an environmental planner at a state DOT replacing a perched culvert with a bridge on a salmon stream in Oregon, with federal-aid funds and a Corps permit.",
      },
      {
        emoji: "🖥️",
        label: "Data Center",
        heading: "a Data Center",
        eyebrow: "INDUSTRIAL SITE",
        prompt:
          "I'm a permitting manager for a data center campus in Virginia that would fill 3 acres of wetlands and needs air permits for its backup generators.",
      },
      {
        emoji: "🌾",
        label: "Levee Repair",
        heading: "a Levee Repair",
        eyebrow: "FLOOD CONTROL",
        prompt:
          "I'm with a levee district in Missouri repairing 2 miles of levee along the Missouri River, with a Corps permit and a state floodplain development permit.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the environmental document with its permits and consultations section, here a Corps EA; every fact it can't confirm is marked for you.",
    mock: {
      project: "Clear Fork Pipeline Replacement",
      documentTitle:
        "Clear Fork Pipeline Replacement — Environmental Assessment",
      summary:
        "The Clear Fork Pipeline Replacement — Environmental Assessment draft is ready, with a permits and consultations section for your team to confirm. A few details still need your input:",
      missing: [
        "Corps district",
        "Applicant name",
        "Stream names",
        "State certifying agency",
        "Species list date",
      ],
      letterhead: {
        left: [
          "U.S. Army Corps of Engineers",
          "[INSERT: district] District, Regulatory Division",
        ],
        right: [
          "Environmental Assessment",
          "Clear Fork Pipeline Replacement",
          "Applicant: [INSERT: applicant name]",
        ],
      },
      meta: [
        "Application No.: [INSERT: application number]",
        "Date: October 2, 2026",
      ],
      paragraphs: [
        "5. Permits and consultations. The pipeline crosses [INSERT: stream names] at 14 locations. Each crossing would place fill in waters of the United States and needs a Clean Water Act Section 404 permit, [INSERT: individual or general permit].",
        "Section 401 water quality certification from [INSERT: state certifying agency] is needed before the Corps can issue the permit.",
        "Endangered Species Act section 7: the official species list dated [INSERT: species list date] identifies the listed species to evaluate. National Historic Preservation Act Section 106: [INSERT: consultation status].",
      ],
    },
  },
  comparison: [
    {
      label: "Permits and consultations",
      eplan:
        "Drafts the document's permits and consultations section, such as Section 404, Section 7 and Section 106, with each item marked for your team to confirm",
      manual: "Rebuild the list from past documents and calls to each agency",
    },
  ],
  sections: [
    {
      heading: "What is environmental permitting?",
      paragraphs: [
        "EPA's permit programs come from six statutes, including the Clean Air Act and the Clean Water Act. Many states, territories, tribes and municipalities run those federal programs on EPA's behalf, with EPA overseeing them [[permitEpaAbout]]. In California, issuing a permit for an activity that may change the environment makes it a [CEQA](/for/ceqa) project [[ceqaPrc21065]], and other [state laws](/for/state-environmental-review) require review of state and local decisions [[stateCeqList]].",
      ],
    },
    {
      heading: "How NEPA affects environmental permitting",
      paragraphs: [
        "NEPA, the federal form of [environmental impact assessment](/for/environmental-impact-assessment), covers major federal actions [[usc4336e]], and a permit decision usually is one. Under the Army Corps' procedures, which replaced its appendix B on July 3, 2025, most permits not covered by a categorical exclusion normally need only an EA. The review informs the permit decision, and until it ends the applicant should take no action that would limit the choice of reasonable alternatives [[permitUsaceIfr]] [[permitUsace333]].",
        "Not every federal permit triggers NEPA. Clean Air Act actions are not deemed major federal actions significantly affecting the environment [[permitUsc793]], and neither are EPA's Clean Water Act actions, except new-source NPDES permits and grants to build publicly owned treatment works [[permitUsc1371]]. When several federal agencies must act, they evaluate the proposal in a single environmental document to the extent practicable [[usc4336a]].",
      ],
    },
    {
      heading: "The usual federal permits and consultations",
      paragraphs: [
        "A Corps NEPA document may list the permits and consultations other laws require and how the applicant has met or will meet them [[permitUsace333]]. The ones that come up most:",
      ],
      bullets: [
        "Clean Water Act Section 404: discharges of dredged or fill material into waters of the US, including wetlands [[permitEpa404]]",
        "Section 401 water quality certification: required before a federal permit for activities that may discharge into them [[permitEpa401]]",
        "NPDES (Section 402): point-source discharges of pollutants, with technology-based and water quality-based limits [[permitEpaNpdes]]",
        "Clean Air Act: preconstruction (New Source Review) permits, and Title V operating permits, mainly for major sources [[permitEpaNsr]] [[permitEpaTitleV]]",
        "[ESA section 7](/for/esa-section-7) and [Section 106](/for/section-106) consultation: both cover projects that need a federal permit [[esaUsc1536]] [[s106Cfr80016]]",
        "CZMA consistency: a federal permit affecting a state's coastal zone waits for the state's concurrence, or six months [[permitUsc1456]]",
      ],
    },
    {
      heading: "Environmental planning and permitting: the usual order",
      paragraphs: [
        "Coordination starts before the application. The Corps' regulatory staff advise potential applicants on the studies and information later federal action will need, including any environmental document [[permitUsaceIfr]]. For the planner's side of that work, see [environmental planning](/for/environmental-planning).",
        "The environmental document is then prepared alongside the analyses other federal laws require, and the NEPA decision document informs the permit decision but is not the final agency action [[permitUsace333]]. Once a permit issues, its monitoring and reporting conditions carry the work into construction and operation [[permitEpaAbout]].",
      ],
    },
  ],
  outline: {
    heading:
      "Permits and consultations checklist for an environmental document",
    intro:
      "Questions to answer while drafting, so the document's permits section matches what the agencies will ask for [[permitUsace333]]. Each answer depends on your project; confirm it with the permitting agency.",
    items: [
      {
        title: "Waters and wetlands",
        detail:
          "Will the project place dredged or fill material in waters of the US? Then a Section 404 permit, individual or general [[permitEpa404]].",
      },
      {
        title: "Water quality certification",
        detail:
          "Will a federal permit cover an activity that may discharge into those waters? The state or tribe certifies within a year [[permitEpa401]].",
      },
      {
        title: "Point-source discharges",
        detail:
          "Will the project discharge pollutants from a point source? Check NPDES coverage with your state or EPA [[permitEpaNpdes]].",
      },
      {
        title: "Air emissions",
        detail:
          "Does a new or modified source need a preconstruction (NSR) permit, or a Title V operating permit? [[permitEpaNsr]] [[permitEpaTitleV]]",
      },
      {
        title: "Listed species",
        detail:
          "May the federal action affect listed species or critical habitat? Then [ESA section 7](/for/esa-section-7) consultation before the agency acts [[esaUsc1536]] [[esaCfr40214]].",
      },
      {
        title: "Historic properties",
        detail:
          "Does the project need a federal permit? Then it is an undertaking, and the agency must consider its effects on historic properties first [[s106Cfr80016]] [[s106Usc306108]].",
      },
      {
        title: "Coastal zone",
        detail:
          "In a coastal state, does the activity affect coastal uses or resources? Then a consistency certification goes with the application [[permitUsc1456]].",
      },
      {
        title: "State permits and review",
        detail:
          "Which state permits apply, and does a state law such as CEQA require review of the permit decision [[ceqaPrc21065]] [[stateCeqList]]?",
      },
      {
        title: "Lead agency",
        detail:
          "If several federal agencies must act, which one leads, and can one environmental document serve all of them [[usc4336a]]?",
      },
    ],
  },
  faq: [
    {
      question: "What does environmental permitting and compliance involve?",
      answer:
        "Getting the permit is the start. Permits limit emissions, discharges or disturbances and carry monitoring and reporting conditions. Under CEQA, an agency that approves a project with significant effects also adopts a program to report on or monitor the mitigation it requires.",
    },
    {
      question: "Is a NEPA document a permit?",
      answer:
        "No. A NEPA document analyzes effects and alternatives; it does not authorize anything. For an Army Corps permit, the NEPA decision document informs the permit decision, and the permit decision is the final agency action.",
    },
    {
      question: "Does a state permit trigger NEPA?",
      answer:
        "Not by itself. NEPA covers major federal actions, and non-federal actions with no or minimal federal funding or involvement are excluded. A state permit can trigger state review instead, such as CEQA in California.",
    },
    {
      question: "Does ePlan obtain or file environmental permits?",
      answer:
        "No. ePlan drafts the environmental review documents, such as a CE decision memo, EA or CEQA initial study, including the list of permits and consultations to plan for. Your team and the permitting agencies handle every application and decision.",
    },
  ],
};
