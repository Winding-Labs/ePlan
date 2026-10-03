import type { GuidePath } from "../paths";
// Reused source keys (defined in consts/guides/sources.ts or pages/*.ts):
// fhwa771117, fhwaFinal, ceqIfr, ceqFinal (sources.ts); eisFhwa771115,
// eisFhwa771123, eisFhwa771124, eisFhwa771138 (pages/environmental-impact-statement.ts);
// jointCfr771109 (pages/ceqa-and-nepa.ts).
// fhwa774 below is also cited by the FAA page (faa-nepa.ts).
import type { GuideEntry, Source } from "../types";

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
  fhwa771141: ECFR_771("771.141", "Reliance and adoption efficiencies"),
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

export const entry: GuideEntry<GuidePath> = {
  path: "/for/fhwa-nepa",
  parent: "/for/nepa",
  family: "agency",
  name: "FHWA NEPA",
  title: "FHWA NEPA: 23 CFR 771 CEs, EAs and EISs",
  description:
    "FHWA NEPA under 23 CFR part 771 as finalized in 2026: FHWA and FTA categorical exclusions, programmatic CE agreements, NEPA assignment, EA and EIS steps.",
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
    "FHWA NEPA is the process the Federal Highway Administration follows under 23 CFR part 771, the NEPA procedures it shares with FRA and FTA, finalized on September 1, 2026 [[fhwaFinal]]. Each action falls into one of three classes: a categorical exclusion (CE), an environmental assessment (EA) or an environmental impact statement (EIS) [[eisFhwa771115]]. FHWA's CEs are listed in 23 CFR 771.117 and FTA's in 771.118, each split into a (c) list that normally needs no further NEPA approval and a (d) list that needs documentation and agency approval [[fhwa771117]] [[fhwa771118]].",
  glance: [
    {
      label: "Regulation",
      value:
        "23 CFR part 771, final rule effective September 1, 2026 [[fhwaFinal]]",
    },
    {
      label: "Applies to",
      value:
        "Highway, transit and railroad actions of FHWA, FTA and FRA [[fhwaFinal]]",
    },
    {
      label: "CE lists",
      value:
        "FHWA: 771.117(c) and (d); FTA: 771.118(c) and (d); FRA: 771.116 [[eisFhwa771115]]",
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
        "What changed in 23 CFR part 771 after CEQ's rules were removed?",
      paragraphs: [
        "FHWA's NEPA regulations date to 1974, and after 1978 they served as a supplement to CEQ's regulations [[fhwaFinal]]. CEQ's regulations, 40 CFR parts 1500-1508, were removed effective April 11, 2025, and CEQ finalized the removal on January 8, 2026 [[ceqIfr]] [[ceqFinal]]. FHWA, FRA and FTA revised part 771 by interim final rule on July 3, 2025 and finalized it with minor technical changes on September 1, 2026; the agencies say part 771 now stands on its own [[fhwaFinal]].",
        "The rule reflects the 2023 NEPA amendments, 2021 changes to 23 U.S.C. 139 and the Supreme Court's Seven County decision, and it updated the funding thresholds in the CE for projects with limited federal assistance [[fhwaFinal]]. Environmental documents prepared or accepted after July 3, 2025 follow the revised part 771 [[jointCfr771109]].",
        "A State or local applicant that directly receives title 23 or transit funds serves as joint lead agency with FHWA, FRA or FTA, and may prepare the environmental documents if the agency furnishes guidance and independently evaluates them [[jointCfr771109]].",
      ],
    },
    {
      heading:
        "FHWA categorical exclusions: the (c) and (d) lists in 23 CFR 771.117",
      paragraphs: [
        "FHWA CEs are actions that, based on FHWA's experience, normally involve no significant environmental impacts. Actions on the (c) list normally need no further NEPA approval from FHWA. Actions on the (d) list, such as new rest areas, changes in access control or hardship acquisitions, qualify only after FHWA approval, or under a programmatic agreement, once the applicant documents that their conditions are met [[fhwa771117]].",
        "Three (c) CEs, highway modernization such as resurfacing or added auxiliary lanes, safety and traffic operations projects, and bridge rehabilitation or replacement, carry constraints in paragraph (e). A project that needs more than minor right-of-way, a Coast Guard bridge permit, or work outside a Corps nationwide or general permit, or that causes an adverse effect on historic properties, a Section 4(f) use beyond de minimis or likely adverse effects on listed species, moves to the (d) list [[fhwa771117]].",
        "Any CE can still trigger studies of unusual circumstances: significant impacts, substantial controversy on environmental grounds, significant impacts on Section 4(f) or Section 106 properties, or inconsistency with environmental laws [[fhwa771117]]. Final design, property acquisition and construction wait until the action is classified as a CE [[fhwa771113]]. Examples from the (c) list:",
      ],
      bullets: [
        "(c)(3): bicycle and pedestrian lanes, paths and facilities [[fhwa771117]]",
        "(c)(8): fencing, signs, pavement markings, small passenger shelters, traffic signals and railroad warning devices, where no substantial land acquisition or traffic disruption occurs [[fhwa771117]]",
        "(c)(22): projects entirely within the existing operational right-of-way [[fhwa771117]]",
        "(c)(23): projects with limited federal funding, under thresholds adjusted annually for inflation [[fhwa771117]]",
        "(c)(28): bridge rehabilitation, reconstruction or replacement that meets the paragraph (e) constraints [[fhwa771117]]",
      ],
    },
    {
      heading: "FTA categorical exclusions in 23 CFR 771.118",
      paragraphs: [
        "FTA's CEs follow the same model. Its (c) list covers, among others, utilities within or next to transportation right-of-way; stand-alone recreation, pedestrian and bicycle facilities; vehicles and equipment that existing facilities can accommodate; and maintenance or reconstruction of facilities on substantially the same footprint, such as platform extensions and passing track [[fhwa771118]].",
        "FTA's (d) list, which needs FTA approval of the applicant's documentation, includes right-of-way acquisition, facility modernization and minor expansions of transit structures outside existing right-of-way [[fhwa771118]]. FHWA and FTA may each approve a CE from the other's list, or from FRA's list in 771.116, when its requirements are met [[fhwa771117]] [[fhwa771118]].",
      ],
    },
    {
      heading: "What is a programmatic agreement for FHWA CEs?",
      paragraphs: [
        "Under 23 CFR 771.117(g), FHWA may sign a programmatic agreement letting a State DOT make CE determinations and approvals on FHWA's behalf for (c) and (d) CEs named in the agreement. The agreement must set the State DOT's documentation and quality-control duties, last no more than five years (it may be renewed), provide for FHWA monitoring and corrective action, and address amendment, termination and public availability [[fhwa771117]].",
        "The authority traces to MAP-21 section 1318(d). FHWA publishes a model agreement and the executed agreements it holds, including those of Connecticut, Oregon, Washington and Wisconsin; others are posted on State DOT websites [[fhwaPce]].",
      ],
    },
    {
      heading: "NEPA assignment under 23 U.S.C. 326 and 327",
      paragraphs: [
        "Under 23 U.S.C. 326, a State can assume FHWA's responsibility for CE determinations through a memorandum of understanding of up to three years, or five once it has held the role for ten years [[fhwaUsc326]]. FHWA's toolkit lists California, Utah and Alaska in this program [[fhwaAssignment]].",
        "Under 23 U.S.C. 327, a State can assume the Secretary's NEPA responsibilities for highway projects and, at its request, railroad, transit or multimodal projects. It consents to federal court jurisdiction and becomes solely responsible and solely liable for what it assumes; agreements run up to five years, or ten for States with ten years in the program [[fhwaUsc327]].",
        "FHWA lists assignment MOUs for Alaska, Arizona, California, Florida, Maine, Nebraska, Ohio, Texas and Utah; Maine's was signed January 30, 2026 and Nebraska's February 23, 2026 [[fhwaProgramAssignment]]. Under part 771 an assigned State functions as FHWA, but it may not create a new CE by adopting another agency's [[fhwaFinal]] [[fhwa771141]].",
      ],
    },
    {
      heading:
        "FHWA environmental assessments and EISs: 23 CFR 771.119 and 771.123",
      paragraphs: [
        "When an action cannot be categorically excluded and no significant effect is foreseeable, or significance is unknown, the applicant prepares an EA in consultation with the Administration, after early coordination or scoping. The Administration must approve the EA before it is released; it is then available for 30 days with a newspaper notice. If no significant impacts are found, the applicant recommends a finding of no significant impact (FONSI), and the Administration issues one if it agrees [[fhwa771119]] [[fhwa771121]].",
        "An EA is due within one year of the class-of-action determination and may not exceed 75 pages, excluding citations and appendices [[eisFhwa771138]].",
        "For an EIS, scoping begins before the notice of intent and identifies the purpose and need, alternatives, impacts and significant issues; the draft EIS has a 45- to 60-day comment period; and the final EIS and record of decision are combined where practicable [[eisFhwa771123]] [[eisFhwa771124]]. The EIS is due within two years of the notice of intent [[eisFhwa771138]]. After a limitations notice, claims against FHWA or FTA decisions must be filed within 150 days [[fhwa771139]].",
      ],
    },
    {
      heading: "Section 4(f), re-evaluations and mitigation commitments",
      paragraphs: [
        "Section 4(f) protects public parks, recreation areas, wildlife and waterfowl refuges, and historic sites. FHWA, FRA and FTA may approve a use only if there is no feasible and prudent avoidance alternative and the action includes all possible planning to minimize harm, or if the use has a de minimis impact. For a CE, the Section 4(f) documentation goes in a separate document [[fhwa774]].",
        "Before later major approvals, such as right-of-way acquisition or final plans, the applicant consults the Administration on whether the CE, FONSI or ROD remains valid [[fhwa771129]]. Mitigation commitments in the environmental document bind the project sponsor unless the Administration agrees in writing to change them [[jointCfr771109]].",
      ],
    },
  ],
  outline: {
    heading: "FHWA CE determination outline: what to document",
    intro:
      "Part 771 prescribes no CE form; a programmatic agreement sets how a State DOT documents its determinations [[fhwa771117]]. This outline follows what part 771 asks a documented CE to show. Use your State's format.",
    items: [
      {
        title: "Project description and termini",
        detail:
          "Location, limits and work, showing logical termini and independent utility [[fhwa771111]].",
      },
      {
        title: "Lead agency and authority",
        detail:
          "The federal funds or approval involved and the Administration acting, or the State acting under a programmatic agreement or assignment [[fhwa771117]] [[fhwaUsc327]].",
      },
      {
        title: "CE category",
        detail:
          "The 771.117 or 771.118 paragraph used; for a (d)-list CE, documentation that its conditions are met and significant effects will not result [[fhwa771117]] [[fhwa771118]].",
      },
      {
        title: "Paragraph (e) constraints",
        detail:
          "For modernization, safety and bridge CEs, a check of each constraint: right-of-way, permits, historic properties, Section 4(f), listed species, traffic, access control and floodplains [[fhwa771117]].",
      },
      {
        title: "Unusual circumstances",
        detail:
          "The finding on significant impacts, substantial controversy, Section 4(f) and Section 106 properties, and consistency with environmental laws [[fhwa771117]].",
      },
      {
        title: "Section 4(f) and other findings",
        detail:
          "Any Section 4(f) approval, documented separately for a CE [[fhwa774]], and the historic-property and listed-species findings the (e) constraints depend on [[fhwa771117]].",
      },
      {
        title: "Mitigation commitments",
        detail:
          "Measures the project sponsor commits to, which it must carry out unless the Administration agrees in writing to change them [[jointCfr771109]].",
      },
      {
        title: "Approval and re-evaluation",
        detail:
          "Signature by FHWA, FTA or the State DOT acting under an agreement, and a note that later major approvals need a validity check [[fhwa771117]] [[fhwa771129]].",
      },
    ],
  },
  faq: [
    {
      question: "What is FHWA NEPA?",
      answer:
        "The National Environmental Policy Act process the Federal Highway Administration follows, set out in 23 CFR part 771, which it shares with FRA and FTA. The agencies revised part 771 by interim final rule on July 3, 2025 and finalized it on September 1, 2026.",
    },
    {
      question:
        "What is the difference between a c-list and a d-list categorical exclusion?",
      answer:
        "Actions on the (c) list in 23 CFR 771.117 or 771.118 normally need no further NEPA approval. Actions on the (d) list qualify only after FHWA or FTA approves the applicant's documentation showing the conditions are met; for FHWA, a programmatic agreement can let the State DOT make that call.",
    },
    {
      question:
        "What is a programmatic agreement for FHWA categorical exclusions?",
      answer:
        "An agreement under 23 CFR 771.117(g) that lets a State DOT make CE determinations and approvals on FHWA's behalf for the CEs it names. It runs up to five years, is renewable, and must cover documentation, quality control, FHWA monitoring, amendment, termination and public availability.",
    },
    {
      question: "Which states have NEPA assignment?",
      answer:
        "FHWA lists full NEPA assignment memoranda under 23 U.S.C. 327 for Alaska, Arizona, California, Florida, Maine, Nebraska, Ohio, Texas and Utah. Under 23 U.S.C. 326 a State can instead assume only CE determinations; FHWA's toolkit lists California, Utah and Alaska in that program.",
    },
    {
      question: "How long can an FHWA EA or EIS take?",
      answer:
        "An EA is limited to one year and 75 pages, excluding citations and appendices. An EIS must be finished within two years from the notice of intent to the signed record of decision; for projects under 23 U.S.C. 139 the text is held to 200 pages where practicable, and otherwise to 150 pages, or 300 for extraordinary complexity.",
    },
    {
      question: "Can ePlan draft an FHWA CE determination?",
      answer:
        "Yes. Describe the project or upload your State's CE form, and ePlan drafts the determination in that structure, marking every fact it can't confirm for you to fill in. FHWA, FTA or the State DOT acting under its agreement makes the determination.",
    },
  ],
};
