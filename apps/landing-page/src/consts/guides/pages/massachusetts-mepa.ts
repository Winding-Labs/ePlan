import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

/**
 * /for/massachusetts-mepa — the Massachusetts Environmental Policy Act.
 *
 * Reused source keys: none. Every source below is new. The state hub
 * (state-environmental-review.ts) cites mepaMgl61, mepaMgl62b and mepaRegs
 * without redefining them.
 *
 * mass.gov refuses automated reads (HTTP 403), so the mass.gov pages below
 * were read in a browser. 301 CMR 11.00 is cited to the MEPA Office's page for
 * the current regulations (amended effective January 30, 2026); its text was
 * read from the PDF linked there.
 */

const READ = "2026-10-02";

const MGL = (section: string, heading: string): Source => ({
  title: `M.G.L. c. 30, § ${section} - ${heading}`,
  publisher: "The 194th General Court of the Commonwealth of Massachusetts",
  url: `https://malegislature.gov/Laws/GeneralLaws/PartI/TitleIII/Chapter30/Section${section}`,
  read: READ,
});

export const sources = {
  mepaMgl61: MGL(
    "61",
    "Determination of impact by agencies; damages to environment; prevention or minimization; foreseeable climate change impacts",
  ),
  mepaMgl62: MGL("62", "Definitions"),
  mepaMgl62a: MGL(
    "62A",
    "Notification of secretary of environmental affairs; certificate; scope of environmental impact report",
  ),
  mepaMgl62b: MGL(
    "62B",
    "Environmental impact reports; preparation; contents; environmental justice populations",
  ),
  mepaMgl62c: MGL(
    "62C",
    "Submission of reports; public notice; comments; review periods",
  ),
  mepaAct2021: {
    title:
      "An Act Creating a Next-Generation Roadmap for Massachusetts Climate Policy, Acts of 2021, Chapter 8",
    publisher: "The 194th General Court of the Commonwealth of Massachusetts",
    url: "https://malegislature.gov/Laws/SessionLaws/Acts/2021/Chapter8",
    published: "2021-03-26",
    read: READ,
  },
  mepaRegs: {
    title: "301 CMR 11.00: MEPA Regulations (current regulations and PDF)",
    publisher: "Massachusetts Environmental Policy Act Office, Mass.gov",
    url: "https://www.mass.gov/regulations/301-CMR-1100-mepa-regulations",
    published: "2026-01-30",
    read: READ,
  },
  mepaOffice: {
    title: "Massachusetts Environmental Policy Act Office (MEPA)",
    publisher: "Executive Office of Energy and Environmental Affairs, Mass.gov",
    url: "https://www.mass.gov/orgs/massachusetts-environmental-policy-act-office",
    read: READ,
  },
  mepaFiling: {
    title: "Filing with MEPA",
    publisher: "Massachusetts Environmental Policy Act Office, Mass.gov",
    url: "https://www.mass.gov/filing-with-mepa",
    read: READ,
  },
  mepaReady: {
    title: "Ready to File?",
    publisher: "Massachusetts Environmental Policy Act Office, Mass.gov",
    url: "https://www.mass.gov/ready-to-file",
    read: READ,
  },
  mepaEnfGuide: {
    title: "Environmental Notification Form (ENF) Preparation and Filing",
    publisher: "Massachusetts Environmental Policy Act Office, Mass.gov",
    url: "https://www.mass.gov/guides/environmental-notification-form-enf-preparation-and-filing",
    read: READ,
  },
  mepaHousing: {
    title: "Streamlined Process for Qualifying Housing Projects",
    publisher: "Massachusetts Environmental Policy Act Office, Mass.gov",
    url: "https://www.mass.gov/info-details/streamlined-process-for-qualifying-housing-projects",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/massachusetts-mepa",
  parent: "/for/state-environmental-review",
  family: "state",
  name: "Massachusetts MEPA",
  title: "MEPA Massachusetts: ENF, EIR and Thresholds",
  description:
    "How MEPA review works in Massachusetts: the review thresholds, the Environmental Notification Form, EIRs, Certificates and environmental justice rules.",
  eyebrow: "Massachusetts MEPA",
  h1: "MEPA in Massachusetts: the Environmental Notification Form, EIRs and review thresholds",
  primaryKeyword: "mepa",
  secondaryKeywords: [
    "mepa massachusetts",
    "environmental notification form",
    "mepa review",
    "mepa thresholds",
  ],
  document: "Environmental Notification Form",
  answer:
    "MEPA, the Massachusetts Environmental Policy Act (M.G.L. c. 30, §§ 61–62L), requires state agencies to review, evaluate and determine the environmental impact of their projects and to find that all feasible measures have been taken to avoid or minimize it [[mepaMgl61]]. MEPA review is required when a project needs an agency action, such as a permit, financial assistance or a land transfer, and meets or exceeds a review threshold in 301 CMR 11.03 [[mepaFiling]]. It begins with an Environmental Notification Form (ENF), on which the Secretary of Energy and Environmental Affairs issues a Certificate stating whether an environmental impact report (EIR) is required [[mepaRegs]] [[mepaOffice]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "M.G.L. c. 30, §§ 61–62L and 301 CMR 11.00 [[mepaMgl62]] [[mepaRegs]]",
    },
    {
      label: "Administered by",
      value:
        "The MEPA Office, part of the Executive Office of Energy and Environmental Affairs [[mepaOffice]]",
    },
    {
      label: "Prepared by",
      value:
        "The proponent: the agency undertaking the project, or the person seeking the permit or financial assistance [[mepaRegs]] [[mepaMgl62b]]",
    },
    {
      label: "ENF review",
      value:
        "30 days, including a 20-day comment period; 37 days for an expanded ENF [[mepaRegs]] [[mepaEnfGuide]]",
    },
    {
      label: "EIR review",
      value:
        "37 days, with 30 days for comments, then a Certificate on adequacy [[mepaRegs]]",
    },
    {
      label: "Filing",
      value:
        "Online through the MEPA e-Filing Portal, mandatory since July 1, 2025 [[mepaReady]]",
    },
  ],
  hero: {
    prefix: "Draft an",
    placeholder: "I'm preparing an ENF for…",
    examples: [
      {
        emoji: "🏙️",
        label: "Mixed-Use Project",
        heading: "ENF for a Mixed-Use Project",
        eyebrow: "PRIVATE DEVELOPMENT",
        prompt:
          "I'm an environmental consultant preparing an ENF for a developer's 320-unit mixed-use project with a 1,100-space garage on a 9-acre former mill site in a Massachusetts city.",
      },
      {
        emoji: "💧",
        label: "Water Treatment",
        heading: "ENF for a Water Treatment Plant",
        eyebrow: "MUNICIPAL WATER",
        prompt:
          "I'm the project manager for a Massachusetts town water department preparing an ENF for a new 2-million-gallon-per-day drinking water treatment plant and 3 miles of new water main.",
      },
      {
        emoji: "☀️",
        label: "Solar Array",
        heading: "ENF for a Solar Array",
        eyebrow: "CLEAN ENERGY",
        prompt:
          "I'm a permitting lead at a renewable energy developer preparing an ENF for a 30-megawatt ground-mounted solar array that would clear 120 acres of forest in central Massachusetts.",
      },
      {
        emoji: "⚓",
        label: "Harbor Dredging",
        heading: "ENF for Harbor Dredging",
        eyebrow: "COASTAL WORKS",
        prompt:
          "I'm a coastal engineer for a Massachusetts harbor town preparing an ENF for deepening the town mooring basin, removing 45,000 cubic yards of sediment.",
      },
      {
        emoji: "🚆",
        label: "Rail Layover Yard",
        heading: "ENF for a Rail Layover Yard",
        eyebrow: "STATE TRANSIT",
        prompt:
          "I'm an environmental planner at a state transit agency preparing an ENF for a commuter rail layover yard for six trainsets on 14 acres beside an existing line.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the ENF narrative with the project description, review thresholds, alternatives and impacts; every fact it can't confirm is marked for you.",
    mock: {
      project: "Riverside Mill Mixed-Use Project",
      documentTitle:
        "Riverside Mill Mixed-Use Project — Environmental Notification Form",
      summary:
        "The Riverside Mill Mixed-Use Project — Environmental Notification Form draft is ready, organized around the review thresholds the project meets. A few details still need your input:",
      missing: [
        "New average daily trips",
        "State agency actions required",
        "EJ populations within 1 mile",
        "Newspaper notice and date",
        "Outreach completed before filing",
      ],
      letterhead: {
        left: [
          "Environmental Notification Form",
          "M.G.L. c. 30, §§ 61–62L; 301 CMR 11.00",
        ],
        right: [
          "Riverside Mill Mixed-Use Project",
          "City of Ashbury, Massachusetts",
          "Proponent: [INSERT: proponent name]",
        ],
      },
      meta: ["EEA No.: [INSERT: assigned at filing]", "Date: October 2, 2026"],
      paragraphs: [
        "Project description: the proponent proposes 320 residential units, 18,000 square feet of ground-floor retail and a 1,100-space structured garage on a 9-acre former mill site along the Ashbury River.",
        "Review thresholds: the 1,100 new parking spaces exceed the ENF and Mandatory EIR threshold at 301 CMR 11.03(6)(a)7. The project would generate [INSERT: new average daily trips] and requires [INSERT: state agency actions].",
        "Environmental justice: [INSERT: EJ populations within the Designated Geographic Area], identified with the EEA EJ Maps Viewer, and the outreach completed before filing are described below.",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "A reference ENF you upload, or one from an analog project the research agent finds on agency project pages",
      manual: "Copy a past ENF and rewrite it by hand",
    },
    {
      label: "Missing facts",
      eplan:
        "Left as highlighted [INSERT: …] placeholders, such as trip counts and EJ populations",
      manual: "Tracked by hand in comments or a separate list",
    },
  ],
  sections: [
    {
      heading: "What is MEPA review in Massachusetts?",
      paragraphs: [
        "Section 61 directs every state agency, department, board, commission and authority to review, evaluate and determine the environmental impact of its works, projects and activities, and to use all practicable means to minimize damage to the environment. Any determination must include a finding that all feasible measures have been taken to avoid or minimize the impact, and agencies must also consider reasonably foreseeable climate change impacts, including greenhouse gas emissions and sea level rise [[mepaMgl61]].",
        "MEPA covers state agencies and authorities created under special or general law, and projects they undertake, fund or permit [[mepaMgl62]]. The MEPA Office runs the process day to day on behalf of the Secretary [[mepaOffice]]. MEPA review happens before agencies act, but it is not a permitting process and does not itself result in approval or denial of a project [[mepaFiling]].",
      ],
    },
    {
      heading: "What are the MEPA thresholds?",
      paragraphs: [
        "MEPA review is required when a project meets or exceeds one or more review thresholds in 301 CMR 11.03 and the subject matter of at least one threshold is within MEPA jurisdiction. Each threshold says whether review consists of an ENF and a mandatory EIR, or an ENF and other review if the Secretary so requires. Jurisdiction is broad when an agency undertakes or funds the project, and limited to the subject matter of the permits or land transfer when a private party only needs those [[mepaRegs]].",
        "The thresholds cover land; state-listed species; wetlands, waterways and tidelands; water; wastewater; transportation; energy; air; solid and hazardous waste; historical and archaeological resources; Areas of Critical Environmental Concern; and regulations and planning. They do not apply to lawfully existing structures, routine maintenance or replacement projects [[mepaRegs]].",
      ],
      bullets: [
        "Land: direct alteration of 50 or more acres, or 10 or more acres of new impervious area, means an ENF and mandatory EIR; 25 acres or 5 acres of impervious area means an ENF [[mepaRegs]]",
        "Transportation: 1,000 or more new parking spaces or 3,000 or more new average daily trips at a single location means a mandatory EIR; 300 spaces or 2,000 trips means an ENF",
        "Energy: a new electric generating facility of 100 MW or more means a mandatory EIR; 25 MW or more means an ENF",
        "Water: a new drinking water treatment plant with a capacity of 1,000,000 or more gallons per day means an ENF",
        "Waterways: dredging 10,000 or more cubic yards of material means an ENF",
      ],
    },
    {
      heading: "What goes in an Environmental Notification Form?",
      paragraphs: [
        "The ENF gives a concise but accurate description of the project and its alternatives, identifies the thresholds it may meet and the agency actions it may require, presents the proponent's initial assessment of impacts, and proposes mitigation. It assesses environmental and public health impacts separately, names its sources, states whether the project is likely to negatively affect an environmental justice population, and may include a proposed Scope for an EIR [[mepaRegs]].",
        "The MEPA Office expects the current ENF form, effective February 3, 2026, plus a project narrative with an alternatives analysis, which it calls a significant component of MEPA review. Required attachments include a USGS locus map, existing and proposed site plans, the circulation list, an output report from the RMAT Climate Resilience Design Standards Tool, and a map of environmental justice populations within 1 and 5 miles [[mepaEnfGuide]]. A private proponent files the ENF no later than ten days after its first permit or financial assistance application [[mepaMgl62a]] [[mepaRegs]].",
      ],
    },
    {
      heading: "How long does MEPA review take?",
      paragraphs: [
        "Publication of the ENF in the Environmental Monitor starts a 30-day review period with a 20-day comment period, usually including a site visit and public consultation session. On or before the last day, the Secretary issues a Certificate stating whether an EIR is required and, if so, its Scope [[mepaRegs]]. An expanded ENF asking for a single EIR, rollover EIR or Special Review Procedure gets 37 days, with 30 for comments [[mepaRegs]] [[mepaEnfGuide]].",
        "An EIR's review period is 37 days from notice in the Environmental Monitor, with comments due within 30 days; within seven days after comments close, the Secretary certifies whether the EIR adequately and properly complies with MEPA [[mepaRegs]] [[mepaMgl62c]]. The Environmental Monitor is published twice a month, for filings received by the 15th and by the last day of each month [[mepaRegs]]. Filing has been online-only since July 1, 2025 [[mepaReady]].",
      ],
    },
    {
      heading: "Expanded ENF, single EIR and waivers",
      paragraphs: [
        "A proponent may file an expanded ENF with more detailed analysis, and must when asking for a single EIR, a Special Review Procedure or a waiver. The Secretary ordinarily requires a draft and final EIR, but may allow a single EIR if the expanded ENF analyzes all aspects of the project and all feasible alternatives, provides a detailed baseline, and shows the design uses all feasible means to avoid impacts [[mepaRegs]].",
        "A waiver of an EIR requirement needs findings that strict compliance would cause undue hardship and would not serve to avoid or minimize damage to the environment. A rollover EIR, in which a proposed EIR filed with the ENF is reviewed as the final EIR, is available only to projects that must file an EIR because of their location near environmental justice populations [[mepaEnfGuide]] [[mepaRegs]].",
      ],
    },
    {
      heading: "MEPA environmental justice requirements",
      paragraphs: [
        "The 2021 climate law, approved March 26, 2021, amended MEPA so that an EIR is required for any project likely to cause damage to the environment within 1 mile of an environmental justice population, or within 5 miles for a project affecting air quality [[mepaAct2021]] [[mepaMgl62b]]. An environmental justice population is a census block group meeting income, minority or English-proficiency criteria set in the statute [[mepaMgl62]].",
        "Under the regulations, a proponent must provide public involvement opportunities for environmental justice populations within the project's Designated Geographic Area, generally 1 mile, before filing. Projects that meet mandatory EIR thresholds or seek a single or rollover EIR must also give advance notification 45 to 90 days before filing the ENF. Outside the categories listed in 301 CMR 11.01(2)(c), the Secretary must require an EIR for any project in a Designated Geographic Area [[mepaRegs]] [[mepaEnfGuide]].",
      ],
    },
    {
      heading: "Section 61 Findings and the 2026 housing streamlining",
      paragraphs: [
        "An agency that takes action on a project for which the Secretary required an EIR issues Section 61 Findings specifying all feasible means to avoid, minimize and mitigate damage to the environment, including any actions to reduce unfair or inequitable effects on environmental justice populations. The findings become part of the permit or other approval document and are filed with the MEPA Office [[mepaRegs]].",
        "Amendments effective January 30, 2026 provide that qualifying housing projects are not presumed likely to cause damage to the environment, even when they exceed review thresholds. Criteria include devoting at least 67 percent of floor area to housing, minimum densities, limits on altering undeveloped land, and siting outside the highest flood and erosion hazard areas. The proponent still files an ENF, and the Secretary decides whether an EIR is needed [[mepaRegs]] [[mepaHousing]].",
      ],
    },
  ],
  outline: {
    heading: "Environmental Notification Form: the sections",
    intro:
      "Built from the ENF contents required by 301 CMR 11.05 and the MEPA Office's ENF guide. File on the current ENF form from the MEPA Office, revised effective February 3, 2026 [[mepaRegs]] [[mepaEnfGuide]].",
    items: [
      {
        title: "Project information and thresholds",
        detail:
          "Project name, location and proponent, each review threshold the project may meet or exceed, and each agency action it may require [[mepaRegs]] [[mepaEnfGuide]].",
      },
      {
        title: "Project description",
        detail:
          "A concise but accurate description of the whole project, including likely future expansion; a proponent may not phase or segment a project to evade MEPA review [[mepaRegs]].",
      },
      {
        title: "Alternatives analysis",
        detail:
          "The project purpose, the criteria for choosing the preferred alternative, and the impacts of each alternative, such as other sites, uses or building configurations [[mepaEnfGuide]].",
      },
      {
        title: "Environmental and public health impacts",
        detail:
          "The proponent's initial assessment, with environmental and public health impacts assessed separately and the sources of each assessment identified [[mepaRegs]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "Proposed measures to avoid, minimize and mitigate the impacts identified [[mepaRegs]] [[mepaEnfGuide]].",
      },
      {
        title: "Environmental justice",
        detail:
          "Environmental justice populations in the Designated Geographic Area, whether the project is likely to negatively affect them, outreach done before filing, and languages spoken by residents with limited English in nearby census tracts [[mepaRegs]].",
      },
      {
        title: "Climate resilience",
        detail:
          "The output report from the RMAT Climate Resilience Design Standards Tool, attached to the ENF [[mepaEnfGuide]].",
      },
      {
        title: "Requests",
        detail:
          "Whether the proponent asks for a single EIR, a Special Review Procedure or a waiver, each of which calls for an expanded ENF [[mepaRegs]].",
      },
      {
        title: "Attachments, circulation and notice",
        detail:
          "USGS locus map, site plans, environmental justice map, the list of agencies and persons the ENF went to, and certification of the newspaper notice [[mepaRegs]] [[mepaEnfGuide]].",
      },
    ],
  },
  faq: [
    {
      question: "What is an Environmental Notification Form in Massachusetts?",
      answer:
        "The ENF is the filing that starts MEPA review. It describes the project and its alternatives, lists the review thresholds it meets and the state agency actions it needs, gives the proponent's initial assessment of impacts, and proposes mitigation. The Secretary of Energy and Environmental Affairs reviews it and issues a Certificate stating whether an environmental impact report is required.",
    },
    {
      question: "Does every Massachusetts project need MEPA review?",
      answer:
        "No. MEPA review applies when a project needs a state agency action, such as a permit, financial assistance or a land transfer, or is undertaken by an agency, and it meets or exceeds a review threshold in 301 CMR 11.03. Lawfully existing structures, routine maintenance and replacement projects fall outside the thresholds.",
    },
    {
      question: "When is an EIR required under MEPA?",
      answer:
        "An EIR is required when a project meets an ENF and Mandatory EIR threshold, when the Secretary requires one after reviewing the ENF, and for projects located within the Designated Geographic Area around an environmental justice population, apart from categories such as qualifying housing projects that the 2026 amendments carved out.",
    },
    {
      question: "How long is the MEPA comment period on an ENF?",
      answer:
        "Twenty days from publication in the Environmental Monitor, within a 30-day review period. For an expanded ENF that asks for a single EIR, a rollover EIR or a Special Review Procedure, the comment period is 30 days within a 37-day review period.",
    },
    {
      question:
        "Is Massachusetts MEPA the same as Montana's or Maryland's MEPA?",
      answer:
        "No. Montana and Maryland each have their own environmental policy act, also abbreviated MEPA, with different triggers and procedures. This page covers the Massachusetts Environmental Policy Act, M.G.L. c. 30, sections 61 to 62L.",
    },
    {
      question: "Can ePlan file my ENF with the MEPA Office?",
      answer:
        "No. ePlan drafts the ENF narrative from your project description and a reference ENF, marks every fact it could not confirm, and downloads the draft as Word. You file through the MEPA e-Filing Portal, and the Secretary decides whether an EIR is required.",
    },
  ],
};
