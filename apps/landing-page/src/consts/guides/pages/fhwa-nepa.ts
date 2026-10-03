import type { GuidePath } from "../paths";
// Reused source keys (defined in consts/guides/sources.ts or pages/*.ts):
// fhwa771117, fhwaFinal (sources.ts); eisFhwa771115, eisFhwa771123,
// eisFhwa771124, eisFhwa771138 (pages/environmental-impact-statement.ts);
// jointCfr771109 (pages/ceqa-and-nepa.ts).
import type { GuideContent, Source } from "../types";

const READ = "2026-10-02";

const ECFR_771 = (section: string, heading: string): Source => ({
  title: `23 CFR ${section} - ${heading} (FHWA, FRA and FTA)`,
  publisher: "Electronic Code of Federal Regulations (eCFR), current",
  url: `https://www.ecfr.gov/current/title-23/chapter-I/subchapter-H/part-771/section-${section}`,
  read: READ,
});

export const sources = {
  fhwa771111: ECFR_771(
    "771.111",
    "Early coordination, public involvement, and project development",
  ),
  fhwa771113: ECFR_771(
    "771.113",
    "Timing of Administration activities when NEPA applies",
  ),
  fhwa771118: ECFR_771("771.118", "FTA categorical exclusions"),
  fhwa771119: ECFR_771("771.119", "Environmental assessments"),
  fhwa771121: ECFR_771("771.121", "Findings of no significant impact"),
  fhwa771129: ECFR_771("771.129", "Re-evaluations"),
  fhwa771139: ECFR_771("771.139", "Limitations on actions"),
  fhwa774: {
    title:
      "23 CFR part 774 - Parks, recreation areas, wildlife and waterfowl refuges, and historic sites (Section 4(f))",
    publisher: "Electronic Code of Federal Regulations (eCFR), current",
    url: "https://www.ecfr.gov/current/title-23/chapter-I/subchapter-H/part-774",
    read: READ,
  },
  fhwaUsc326: {
    title:
      "23 U.S.C. 326 - State assumption of responsibility for categorical exclusions",
    publisher: "United States Code, 2024 edition (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCODE-2024-title23/html/USCODE-2024-title23-chap3-sec326.htm",
    read: READ,
  },
  fhwaUsc327: {
    title: "23 U.S.C. 327 - Surface transportation project delivery program",
    publisher: "United States Code, 2024 edition (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCODE-2024-title23/html/USCODE-2024-title23-chap3-sec327.htm",
    read: READ,
  },
  fhwaAssignment: {
    title: "National Environmental Policy Act (NEPA) Assignment",
    publisher: "Federal Highway Administration, Environmental Review Toolkit",
    url: "https://www.environment.fhwa.dot.gov/nepa/assignment.aspx",
    read: READ,
  },
  fhwaProgramAssignment: {
    title: "Program Assignment (23 U.S.C. 327)",
    publisher: "Federal Highway Administration, Environmental Review Toolkit",
    url: "https://www.environment.fhwa.dot.gov/nepa/program_assignment.aspx",
    read: READ,
  },
  fhwaPce: {
    title: "Programmatic Categorical Exclusion Agreements",
    publisher: "Federal Highway Administration, Environmental Review Toolkit",
    url: "https://www.environment.fhwa.dot.gov/nepa/programmatic_ce.aspx",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/fhwa-nepa",
  title: "FHWA NEPA: 23 CFR 771 CEs, EAs and EISs",
  description:
    "FHWA NEPA under 23 CFR part 771: FHWA and FTA categorical exclusions, CE agreements, NEPA assignment, EAs and EISs.",
  eyebrow: "FHWA and FTA",
  h1: "FHWA NEPA: 23 CFR 771 categorical exclusions, EAs and EISs",
  primaryKeyword: "fhwa nepa",
  secondaryKeywords: [
    "23 cfr 771.117",
    "fhwa categorical exclusion",
    "fta categorical exclusion",
    "23 cfr 771",
    "programmatic agreement",
  ],
  document: "CE Determination",
  answer:
    "FHWA NEPA is the Federal Highway Administration's NEPA process under 23 CFR part 771, the procedures it shares with FRA and FTA, finalized September 1, 2026 [[fhwaFinal]]. Each action is a [categorical exclusion](/for/nepa-categorical-exclusion) (CE), listed for FHWA in 23 CFR 771.117, an [environmental assessment](/for/nepa-environmental-assessment) (EA) or an [environmental impact statement](/for/environmental-impact-statement) (EIS) [[eisFhwa771115]] [[fhwa771117]].",
  glance: [
    {
      label: "Prepared by",
      value:
        "The applicant receiving the funds, as joint lead agency, with agency guidance [[jointCfr771109]]",
    },
    {
      label: "CE lists",
      value:
        "771.117 (FHWA), 771.118 (FTA): (c) normally needs no further approval; (d) needs documented approval [[fhwa771117]] [[fhwa771118]]",
    },
    { label: "EA limits", value: "75 pages and 1 year [[eisFhwa771138]]" },
    {
      label: "EIS deadline",
      value:
        "2 years from notice of intent to signed record of decision [[eisFhwa771138]]",
    },
    {
      label: "NEPA assignment",
      value:
        "23 U.S.C. 326 (CEs only) and 327 (full program) [[fhwaUsc326]] [[fhwaUsc327]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I'm documenting a CE for…",
    examples: [
      {
        emoji: "🚦",
        label: "Signal Upgrade",
        heading: "CE Determination for a Signal Upgrade",
        eyebrow: "TRAFFIC SAFETY",
        prompt:
          "I'm an environmental planner at a state DOT district office documenting a CE for upgrading signals at 14 intersections along a 3-mile urban arterial with federal-aid safety funds.",
      },
      {
        emoji: "🌉",
        label: "Bridge Replacement",
        heading: "CE Determination for Bridge Replacement",
        eyebrow: "BRIDGE PROGRAM",
        prompt:
          "I'm a consultant to a county highway department replacing a 60-foot single-span bridge over a trout stream on the same alignment, funded through our state DOT's federal-aid bridge program.",
      },
      {
        emoji: "🚲",
        label: "Shared-Use Path",
        heading: "CE Determination for a Shared-Use Path",
        eyebrow: "ACTIVE TRANSPORTATION",
        prompt:
          "I'm a city transportation planner documenting a CE for a 2.4-mile shared-use path along an abandoned rail corridor, funded with a federal-aid grant our state DOT administers.",
      },
      {
        emoji: "🚆",
        label: "Platform Extension",
        heading: "CE Determination for a Platform Extension",
        eyebrow: "PUBLIC TRANSIT",
        prompt:
          "I'm the environmental manager at a regional transit agency extending four light rail platforms by 90 feet within our existing right-of-way, with FTA capital funds.",
      },
      {
        emoji: "🌊",
        label: "Flood Repair",
        heading: "CE Determination for Flood Repair",
        eyebrow: "EMERGENCY REPAIR",
        prompt:
          "I'm a state DOT environmental coordinator documenting a CE to rebuild 1.5 miles of a state highway washed out in a presidentially declared flood, on the same alignment and right-of-way.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the CE determination with the project description, CE category and unusual-circumstances check; every fact it can't confirm is marked for you.",
    mock: {
      project: "Traffic signal upgrade, 14 intersections",
      documentTitle: "CE Determination — Traffic Signal Upgrade",
      summary:
        "I drafted the CE determination from your description and the CE lists in 23 CFR 771.117. A few details still need your input:",
      missing: [
        "Federal-aid project number",
        "Corridor, city and state",
        "Section 4(f) screening of adjacent parks",
        "Approving official under the PCE agreement",
        "Work-zone traffic control plan",
      ],
      letterhead: {
        left: [
          "State Department of Transportation",
          "District 4 Environmental Office",
        ],
        right: [
          "Categorical Exclusion Determination",
          "Traffic Signal Upgrade",
          "[INSERT: corridor, city and state]",
        ],
      },
      meta: [
        "Project No.: [INSERT: federal-aid project number]",
        "Date: October 2, 2026",
      ],
      paragraphs: [
        "Proposed action. The project would replace controllers, signal heads and vehicle detection at 14 signalized intersections along a 3-mile urban arterial, entirely within existing right-of-way, using federal-aid highway safety funds. Work would occur at night under [INSERT: traffic control plan].",
        "CE category. The action fits 23 CFR 771.117(c)(8), installation of traffic signals where no substantial land acquisition or traffic disruption will occur, and (c)(21), traffic control and detector devices. No unusual circumstances under 771.117(b) were identified, pending [INSERT: Section 4(f) screening of adjacent parks].",
        "Determination. Under the programmatic CE agreement between FHWA and the Department, the action is classified as a categorical exclusion. [INSERT: approving official, title and signature]",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "A CE determination that follows your State's CE form or a precedent you upload, with your project facts filled in and gaps marked",
      manual: "Your office's last CE form, copied and edited by hand",
    },
    {
      label: "Precedent research",
      eplan:
        "The research agent searches agency project pages, the Federal Register and eCFR for your project and up to two analog projects",
      manual: "Searching State DOT project pages for comparable CEs yourself",
    },
  ],
  sections: [
    {
      heading:
        "FHWA categorical exclusions: the (c) and (d) lists in 23 CFR 771.117",
      paragraphs: [
        "Actions on the (d) list, such as new rest areas or changes in access control, qualify only after FHWA approves the applicant's documentation, directly or under a programmatic agreement. Any CE needs further study if unusual circumstances arise: significant impacts, substantial controversy, effects on Section 4(f) or [Section 106](/for/section-106) properties, or inconsistency with environmental laws [[fhwa771117]]. Final design, property acquisition and construction wait until the action is classified as a CE [[fhwa771113]].",
        "Modernization, safety and bridge CEs on the (c) list move to (d) if they need more than minor right-of-way, a Coast Guard bridge permit or work outside a Corps general permit, or have an adverse effect on historic properties, a more than de minimis Section 4(f) use or likely adverse effects on listed species [[fhwa771117]]. Examples from the (c) list:",
      ],
      bullets: [
        "(c)(3): bicycle and pedestrian lanes, paths and facilities [[fhwa771117]]",
        "(c)(8): signs, markings, signals and railroad warning devices, without substantial land acquisition or traffic disruption [[fhwa771117]]",
        "(c)(22): projects entirely within the existing operational right-of-way [[fhwa771117]]",
        "(c)(23): projects with limited federal funding, under thresholds adjusted annually for inflation [[fhwa771117]]",
        "(c)(28): bridge rehabilitation, reconstruction or replacement that meets the paragraph (e) constraints [[fhwa771117]]",
      ],
    },
    {
      heading: "FTA categorical exclusions in 23 CFR 771.118",
      paragraphs: [
        "FTA's CEs follow the same (c) and (d) model. Its (c) list includes utilities along transportation right-of-way, stand-alone bicycle and pedestrian facilities, and reconstruction on the same footprint, such as platform extensions; its (d) list includes right-of-way acquisition [[fhwa771118]]. FHWA and FTA may each use the other's list, or FRA's, when its requirements are met [[fhwa771117]] [[fhwa771118]].",
      ],
    },
    {
      heading: "Programmatic agreements and NEPA assignment",
      paragraphs: [
        "Under 23 CFR 771.117(g), a programmatic agreement lets a State DOT make CE determinations on FHWA's behalf for the CEs it names. It lasts up to five years, is renewable, and sets documentation, quality control and FHWA monitoring [[fhwa771117]]. FHWA posts its model agreement and executed agreements; others are on State DOT websites [[fhwaPce]].",
        "Under NEPA assignment, the State acts as FHWA [[fhwaFinal]]. Through 23 U.S.C. 326 it assumes CE determinations only, as California, Utah and Alaska do [[fhwaUsc326]] [[fhwaAssignment]]; through 327 it assumes the full NEPA role, consents to federal court jurisdiction and is solely liable. FHWA lists 327 agreements for Alaska, Arizona, California, Florida, Maine, Nebraska, Ohio, Texas and Utah [[fhwaUsc327]] [[fhwaProgramAssignment]].",
      ],
    },
    {
      heading: "FHWA EAs and EISs: 23 CFR 771.119 and 771.123",
      paragraphs: [
        "EA: when an action is not a CE and no significant effect is foreseeable, or significance is unknown, the applicant prepares an EA, which the Administration approves for 30 days of public availability; a finding of no significant impact (FONSI) follows if warranted [[fhwa771119]] [[fhwa771121]].",
        "EIS: scoping precedes the notice of intent, the draft EIS gets 45 to 60 days of comment, and the final EIS and record of decision are combined where practicable [[eisFhwa771123]] [[eisFhwa771124]]. After a limitations notice, claims must be filed within 150 days [[fhwa771139]].",
      ],
    },
  ],
  outline: {
    heading: "FHWA CE determination outline: what to document",
    intro:
      "Part 771 has no CE form; a programmatic agreement sets how a State DOT documents its determinations [[fhwa771117]]. This outline follows what part 771 asks a documented CE to show. Section 4(f) binds every DOT agency; see [FAA NEPA](/for/faa-nepa) for airports.",
    items: [
      {
        title: "Project description and termini",
        detail:
          "Location, limits and work, with logical termini and independent utility [[fhwa771111]].",
      },
      {
        title: "Lead agency and authority",
        detail:
          "The federal funds or approval involved, and who acts: the Administration, or the State under an agreement or assignment [[fhwa771117]] [[fhwaUsc327]].",
      },
      {
        title: "CE category",
        detail:
          "The 771.117 or 771.118 paragraph; for a (d)-list CE, documentation that its conditions are met [[fhwa771117]] [[fhwa771118]].",
      },
      {
        title: "Paragraph (e) constraints",
        detail:
          "For modernization, safety and bridge CEs: right-of-way, permits, historic properties, Section 4(f), listed species, traffic, access control and floodplains [[fhwa771117]].",
      },
      {
        title: "Unusual circumstances",
        detail:
          "Findings on significant impacts, controversy, Section 4(f) and Section 106 properties, and consistency with environmental laws [[fhwa771117]].",
      },
      {
        title: "Section 4(f)",
        detail:
          "Any use of a park, refuge or historic site, with its avoidance or de minimis finding, in a separate document for a CE [[fhwa774]].",
      },
      {
        title: "Mitigation commitments",
        detail:
          "Measures the sponsor must carry out unless the Administration agrees in writing to change them [[jointCfr771109]].",
      },
      {
        title: "Approval and re-evaluation",
        detail:
          "Signature by FHWA, FTA or the State DOT, and a validity check before later major approvals [[fhwa771117]] [[fhwa771129]].",
      },
    ],
  },
  faq: [
    {
      question:
        "What is the difference between a c-list and a d-list categorical exclusion?",
      answer:
        "A (c)-list action normally needs no further NEPA approval once it fits the listed category and no unusual circumstances arise. A (d)-list action needs documentation that its conditions are met and approval from FHWA or FTA, or from a State DOT acting under a programmatic agreement.",
    },
    {
      question: "When does an FHWA CE need a re-evaluation?",
      answer:
        "Before later major approvals, such as right-of-way acquisition or approval of final plans, the applicant consults FHWA or FTA on whether the CE, FONSI or record of decision is still valid.",
    },
    {
      question: "How many pages can an FHWA EIS be?",
      answer:
        "For projects under 23 U.S.C. 139, the EIS text is held to 200 pages where practicable. Otherwise the limit is 150 pages, or 300 for extraordinary complexity.",
    },
    {
      question: "Can ePlan draft an FHWA CE determination?",
      answer:
        "Yes. Describe the project or upload your State's CE form, and ePlan drafts the determination in that structure, marking every fact it can't confirm for you to fill in. FHWA, FTA or the State DOT acting under its agreement makes the determination.",
    },
  ],
};
