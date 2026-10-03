import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

/**
 * /for/state-environmental-review — the state environmental policy acts hub.
 *
 * Reused source keys (defined elsewhere, not redefined here):
 * - guides/sources.ts: sevenCounty
 * - pages/ceqa.ts: ceqaPrc21002
 * - pages/massachusetts-mepa.ts: mepaMgl61, mepaMgl62b, mepaRegs
 * - pages/hawaii-hepa.ts: hepaHrs3432, hepaHrs3435
 *
 * Prose links to sibling guides use `[label](/for/slug)`.
 */

const READ = "2026-10-02";

export const sources = {
  stateCeqList: {
    title: "State, Tribe, and Local Government Information",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/additional-resources/state-tribe-and-local-government-information",
    read: READ,
  },
  stateNyEcl80109: {
    title:
      "N.Y. Environmental Conservation Law § 8-0109 - Preparation of environmental impact statement",
    publisher: "New York State Senate, Open Legislation",
    url: "https://www.nysenate.gov/legislation/laws/ENV/8-0109",
    published: "2026-05-29",
    read: READ,
  },
  stateRcw030: {
    title:
      "RCW 43.21C.030 - Guidelines for state agencies, local governments; statements; reports; advice; information",
    publisher: "Washington State Legislature",
    url: "https://app.leg.wa.gov/RCW/default.aspx?cite=43.21C.030",
    read: READ,
  },
  stateRcw060: {
    title:
      "RCW 43.21C.060 - Chapter supplementary; conditioning or denial of governmental action",
    publisher: "Washington State Legislature",
    url: "https://app.leg.wa.gov/RCW/default.aspx?cite=43.21C.060",
    read: READ,
  },
  stateMn116d04: {
    title: "Minn. Stat. § 116D.04 - Environmental impact statements (2025)",
    publisher: "Minnesota Office of the Revisor of Statutes",
    url: "https://www.revisor.mn.gov/statutes/cite/116D.04",
    read: READ,
  },
  stateMnR4410: {
    title: "Minn. R. ch. 4410 - Environmental Review",
    publisher: "Minnesota Office of the Revisor of Statutes",
    url: "https://www.revisor.mn.gov/rules/4410/",
    read: READ,
  },
  stateMnR1000: {
    title: "Minn. R. 4410.1000 - Projects requiring EAW",
    publisher: "Minnesota Office of the Revisor of Statutes",
    url: "https://www.revisor.mn.gov/rules/4410.1000/",
    read: READ,
  },
  stateMnR1700: {
    title: "Minn. R. 4410.1700 - Decision on need for EIS",
    publisher: "Minnesota Office of the Revisor of Statutes",
    url: "https://www.revisor.mn.gov/rules/4410.1700/",
    read: READ,
  },
  stateEqbAbout: {
    title: "About Environmental Review",
    publisher: "Minnesota Environmental Quality Board",
    url: "https://www.eqb.state.mn.us/environmental-review/about",
    read: READ,
  },
  stateEqbEawForm: {
    title: "Environmental Assessment Worksheet form (December 2022 version)",
    publisher: "Minnesota Environmental Quality Board",
    url: "https://www.eqb.state.mn.us/sites/eqb/files/December%202022%20EAW%20form_1.docx",
    published: "2022-12",
    read: READ,
  },
  stateMt102: {
    title: "Mont. Code Ann. § 75-1-102 - Intent; purpose or procedural policy",
    publisher: "Montana Legislature, Montana Code Annotated",
    url: "https://mca.legmt.gov/bills/mca/title_0750/chapter_0010/part_0010/section_0020/0750-0010-0010-0020.html",
    read: READ,
  },
  stateMt201: {
    title:
      "Mont. Code Ann. § 75-1-201 - General directions; environmental impact statements",
    publisher: "Montana Legislature, Montana Code Annotated",
    url: "https://mca.legmt.gov/bills/mca/title_0750/chapter_0010/part_0020/section_0010/0750-0010-0020-0010.html",
    read: READ,
  },
  stateMt211: {
    title: "Mont. Code Ann. § 75-1-211 - Greenhouse gas assessment",
    publisher: "Montana Legislature, Montana Code Annotated",
    url: "https://mca.legmt.gov/bills/mca/title_0750/chapter_0010/part_0020/section_0110/0750-0010-0020-0110.html",
    read: READ,
  },
  stateHeld: {
    title: "Held v. State of Montana, 2024 MT 312, No. DA 23-0575 (opinion)",
    publisher: "Supreme Court of the State of Montana",
    url: "https://juddocumentservice.mt.gov/getDocByCTrackId?DocId=500371",
    published: "2024-12-18",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/state-environmental-review",
  title: "State Environmental Policy Acts: Little NEPAs",
  description:
    "Which states have a little NEPA, how state environmental policy acts differ from NEPA, and how CEQA, SEQR and SEPA work.",
  eyebrow: "State review",
  h1: "State environmental policy acts: which states have a little NEPA and how they work",
  primaryKeyword: "state environmental policy acts",
  secondaryKeywords: [
    "little nepa",
    "state environmental review",
    "minnesota environmental assessment worksheet",
    "montana mepa",
  ],
  document: "State Environmental Review Document",
  answer:
    "State environmental policy acts, or little NEPAs, are state laws requiring NEPA-style environmental review of a state or local government's own actions and decisions [[stateCeqList]]. Unlike [NEPA](/for/nepa), which is purely procedural [[sevenCounty]], several also require agencies to avoid or mitigate significant effects, or let them deny a project [[ceqaPrc21002]] [[stateRcw060]].",
  glance: [
    {
      label: "On CEQ's list",
      value:
        "19 requirements: 16 states, DC, New York City and the Tahoe region [[stateCeqList]]",
    },
    {
      label: "First document",
      value:
        "An EAW in Minnesota, an ENF in Massachusetts, an EA in Hawaii [[stateMnR1000]] [[mepaRegs]] [[hepaHrs3435]]",
    },
    {
      label: "Who decides",
      value:
        "The state or local agency acting on it: Minnesota's RGU, Hawaii's proposing or approving agency [[stateEqbAbout]] [[hepaHrs3435]]",
    },
  ],
  hero: {
    prefix: "Start a",
    placeholder: "I'm starting state environmental review for…",
    examples: [
      {
        emoji: "🚌",
        label: "Transit Line",
        heading: "State Review for a Transit Line",
        eyebrow: "REGIONAL TRANSIT",
        prompt:
          "I'm an environmental planner at a Minnesota regional transit agency starting an environmental assessment worksheet for a 7-mile arterial bus rapid transit line with 14 stations.",
      },
      {
        emoji: "🏘️",
        label: "Housing Project",
        heading: "State Review for a Housing Project",
        eyebrow: "VILLAGE PLANNING",
        prompt:
          "I'm the planning consultant to a New York village planning board starting SEQR review of a 180-unit apartment project on a 12-acre former nursery site.",
      },
      {
        emoji: "⛏️",
        label: "Gravel Pit",
        heading: "State Review for a Gravel Pit",
        eyebrow: "STATE PERMITTING",
        prompt:
          "I'm an environmental specialist at a Montana state agency starting MEPA review of a permit application for a 40-acre gravel pit along a county road.",
      },
      {
        emoji: "🛣️",
        label: "Road Widening",
        heading: "State Review for a Road Widening",
        eyebrow: "CITY PUBLIC WORKS",
        prompt:
          "I'm a project engineer at a Washington city public works department starting SEPA review for widening 1.5 miles of a two-lane arterial to add a center turn lane and sidewalks.",
      },
      {
        emoji: "🌊",
        label: "Seawall Repair",
        heading: "State Review for a Seawall Repair",
        eyebrow: "COUNTY PARKS",
        prompt:
          "I'm a planner with a Hawaii county parks department starting Chapter 343 review for repairing a 250-foot seawall at a beach park on county land.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the state review document, here a Minnesota EAW, with the project description and the items your state's form asks for; every fact it can't confirm is marked for you.",
    mock: {
      project: "Larch Avenue Bus Rapid Transit",
      documentTitle:
        "Larch Avenue Bus Rapid Transit — Environmental Assessment Worksheet",
      summary:
        "The Larch Avenue Bus Rapid Transit — Environmental Assessment Worksheet draft is ready, following the EQB's EAW form. A few details still need your input:",
      missing: [
        "Reason for EAW preparation",
        "Total project acreage",
        "Climate trends data source",
        "Responsible governmental unit",
        "Historic properties review",
      ],
      letterhead: {
        left: ["Prairie Lakes Regional Transit", "Environmental Planning"],
        right: [
          "Environmental Assessment Worksheet",
          "Larch Avenue Bus Rapid Transit",
          "RGU: [INSERT: responsible governmental unit]",
        ],
      },
      meta: ["EAW No.: [INSERT: file number]", "Date: October 2, 2026"],
      paragraphs: [
        "Project summary for the EQB Monitor: the proposer would run bus rapid transit along 7 miles of Larch Avenue, with 14 stations, transit signal priority and platform improvements inside the existing right-of-way.",
        "Reason for EAW preparation: [INSERT: mandatory category under Minn. R. 4410.4300, or RGU discretion]. Total project acreage is [INSERT: acreage], including station platforms and one park-and-ride lot.",
        "Climate adaptation and resilience: [INSERT: climate trends data source] informs this item; the draft describes how station drainage would respond to heavier rainfall in the corridor.",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "A reference document in your state's format, such as an EAW, ENF, EA or SEPA checklist, that you upload or the research agent finds",
      manual: "Find a past document in your state's format and rewrite it",
    },
    {
      label: "Missing facts",
      eplan: "Left as highlighted [INSERT: …] placeholders for you to fill",
      manual: "Tracked by hand in comments or a separate list",
    },
  ],
  sections: [
    {
      heading: "Which states have a little NEPA?",
      paragraphs: [
        "CEQ lists these state and local requirements similar to NEPA, and encourages agencies to coordinate them with NEPA reviews to avoid duplication [[stateCeqList]]; for California, see [CEQA and NEPA](/for/ceqa-and-nepa).",
      ],
      bullets: [
        "California (CEQA), Connecticut (CEPA), the District of Columbia (DCEPA), Georgia (GEPA) and Hawaii (HEPA) [[stateCeqList]]",
        "Indiana (IEPA), Maryland (MEPA), Massachusetts (MEPA), Minnesota and Montana (each also MEPA)",
        "New Jersey (Executive Order 215), New York State (SEQRA) and New York City (CEQR)",
        "North Carolina (SEPA), South Dakota (SDEPA), Virginia's environmental impact report procedure, Washington (SEPA) and Wisconsin (WEPA)",
        "The Tahoe Regional Planning Compact",
      ],
    },
    {
      heading: "How do state environmental policy acts differ from NEPA?",
      paragraphs: [
        "Montana's act is procedural, like NEPA [[stateMt102]], and [Hawaii's HEPA](/for/hawaii-hepa) defines its EIS as an informational document [[hepaHrs3432]]. Others add a duty or power to act on what the review finds:",
      ],
      bullets: [
        "[California's CEQA](/for/ceqa): no approval as proposed if feasible alternatives or mitigation would substantially lessen significant effects [[ceqaPrc21002]]",
        "[New York's SEQR](/for/new-york-seqr): agencies must choose alternatives that minimize or avoid adverse effects to the maximum extent practicable [[stateNyEcl80109]]",
        "[Washington's SEPA](/for/washington-sepa): agencies may condition a proposal to mitigate identified impacts, or deny it [[stateRcw060]]",
        "[Massachusetts' MEPA](/for/massachusetts-mepa): agencies must find all feasible measures were taken to avoid or minimize impact [[mepaMgl61]]",
        "Minnesota: no state action likely to pollute, impair or destroy natural resources if a feasible, prudent alternative exists [[stateMn116d04]]",
      ],
    },
    {
      heading: "What is a Minnesota environmental assessment worksheet (EAW)?",
      paragraphs: [
        "An EAW is a brief document setting out the basic facts needed to decide whether an EIS is required [[stateMn116d04]]. It is mandatory for projects in a category of Minn. R. 4410.4300, and can also be ordered by petition, by a governmental unit or at the proposer's request [[stateMnR1000]] [[stateMnR4410]]. The responsible governmental unit (RGU) prepares it with the proposer on the EQB's form [[stateEqbAbout]], which includes climate and greenhouse gas items [[stateEqbEawForm]].",
        "After notice, comments on the need for an EIS run 30 days, and the RGU decides within 15 days after they close unless the EQB chair extends the deadline [[stateMn116d04]]. Its decision, a negative or positive declaration, is published in the EQB Monitor [[stateMnR1700]].",
      ],
    },
    {
      heading: "Montana MEPA: what the act requires today",
      paragraphs: [
        "Montana MEPA requires a detailed statement on major state actions significantly affecting the environment [[stateMt201]]. In Held v. State (2024), the Montana Supreme Court affirmed that the act's limit on greenhouse gas review was unconstitutional [[stateHeld]]; as amended in 2025, the act lets an agency include a greenhouse gas assessment when necessary and requires one for fossil fuel activities [[stateMt201]] [[stateMt211]]. Only commenters may challenge a review, on issues they raised, within 60 days [[stateMt201]].",
      ],
    },
  ],
  outline: {
    heading: "What a state EIS covers: the common elements",
    intro:
      "Drawn from the New York, Washington, Montana, Massachusetts, Minnesota and Hawaii statutes; each state adds its own items, and an EAW, ENF or EA is shorter [[stateNyEcl80109]] [[stateRcw030]] [[stateMt201]] [[mepaMgl62b]].",
    items: [
      {
        title: "Project description and setting",
        detail:
          "The proposed action and its environmental setting [[stateNyEcl80109]] [[mepaMgl62b]].",
      },
      {
        title: "Environmental impacts",
        detail:
          "Short- and long-term impacts in New York; proximate impacts in Montana [[stateNyEcl80109]] [[stateRcw030]] [[stateMt201]].",
      },
      {
        title: "Unavoidable adverse effects",
        detail:
          "Adverse effects that cannot be avoided if the proposal goes ahead [[stateNyEcl80109]] [[stateRcw030]] [[mepaMgl62b]].",
      },
      {
        title: "Alternatives",
        detail:
          "Alternatives to the action; Montana requires reasonable, economically feasible ones and a no-action analysis [[stateRcw030]] [[stateMt201]] [[stateMn116d04]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "Measures to minimize or mitigate adverse impacts [[stateNyEcl80109]] [[mepaMgl62b]] [[stateMn116d04]].",
      },
      {
        title: "Irreversible commitments of resources",
        detail:
          "Irreversible and irretrievable commitments of resources [[stateNyEcl80109]] [[stateRcw030]] [[stateMt201]].",
      },
      {
        title: "Economic, social and cultural effects",
        detail:
          "Economic, employment and sociological effects in Minnesota; effects on economic and social welfare and cultural practices in Hawaii [[stateMn116d04]] [[hepaHrs3432]].",
      },
      {
        title: "State-specific topics",
        detail:
          "Growth-inducing, energy and disadvantaged-community effects in New York, environmental justice in Massachusetts, private property in Montana [[stateNyEcl80109]] [[mepaMgl62b]] [[stateMt201]].",
      },
      {
        title: "Comments and responses",
        detail:
          "Substantive comments received and the agency's responses [[stateNyEcl80109]] [[hepaHrs3432]].",
      },
    ],
  },
  faq: [
    {
      question: "Does state environmental review apply to private projects?",
      answer:
        "Often, when a state or local agency approves, permits or funds them. Massachusetts reviews projects needing a state permit, financial assistance or land transfer, and Hawaii requires an applicant to prepare an assessment when its action needs agency approval and meets a trigger.",
    },
    {
      question: "Does a NEPA document satisfy state environmental review?",
      answer:
        "Not automatically. Each state applies its own rules: Hawaii's, for example, say a federal FONSI does not by itself satisfy Chapter 343, though a federal EIS that meets Hawaii's content requirements can be used.",
    },
    {
      question:
        "What is the difference between Montana MEPA and Massachusetts MEPA?",
      answer:
        "They are separate laws that share an acronym. Montana's covers state agency actions and is procedural. Massachusetts' is threshold-based: a project needing a state agency action that meets a review threshold files an Environmental Notification Form, and the Secretary decides whether an environmental impact report is required.",
    },
    {
      question:
        "Can ePlan draft documents for any state's environmental review?",
      answer:
        "Yes. From your project description and a reference document it finds or you upload, ePlan drafts any agency document by name, such as an EAW, ENF, Hawaii EA or SEPA checklist, and marks every fact it could not confirm. It files nothing; the agency makes every determination.",
    },
  ],
};
