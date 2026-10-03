import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

/**
 * /for/state-environmental-review — the state environmental policy acts hub.
 *
 * Reused source keys (defined elsewhere, not redefined here):
 * - guides/sources.ts: sevenCounty
 * - pages/ceqa.ts: ceqaPrc21002
 * - pages/massachusetts-mepa.ts: mepaMgl61, mepaMgl62b, mepaRegs
 * - pages/hawaii-hepa.ts: hepaHrs3432, hepaHrs3435, hepaHar
 *
 * Prose links to sibling guides use `[label](/for/slug)`; the page renderer
 * must turn them into links (CitedText does not parse them yet).
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
  stateMt2023: {
    title: "2023 Natural Resource Legislation Summary",
    publisher: "Montana Legislature",
    url: "https://archive.legmt.gov/content/Committees/Interim/2023-2024/Energy-and-Telecommunications/Meetings/aug-1-2023/3-2023NATURAL_RESOURCE_LEGISLATION_SUMMARY.pdf",
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

export const entry: GuideEntry<GuidePath> = {
  path: "/for/state-environmental-review",
  family: "state",
  name: "State environmental review",
  title: "State Environmental Policy Acts: Little NEPAs",
  description:
    "State environmental policy acts explained: which states have a little NEPA, how they differ from NEPA, and how CEQA, SEQR, SEPA, MEPA and HEPA work.",
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
    "State environmental policy acts are state laws that require an environmental impact assessment, similar to NEPA's, for a state or local government's own activities and decisions; CEQ lists 19 such state, local and regional requirements, from California's CEQA to Washington's SEPA [[stateCeqList]]. NEPA itself is purely procedural [[sevenCounty]], and so, by its own terms, is Montana's act [[stateMt102]]. Others go further: California's law says agencies should not approve projects as proposed when feasible alternatives or mitigation would substantially lessen significant effects [[ceqaPrc21002]], and Washington's lets agencies condition a proposal to mitigate identified impacts, or deny it [[stateRcw060]].",
  glance: [
    {
      label: "On CEQ's list",
      value:
        "19 state, local and regional requirements, including New York City's CEQR and the Tahoe Regional Planning Compact [[stateCeqList]]",
    },
    {
      label: "Substantive rules",
      value:
        "A duty or power to avoid, mitigate or deny in California, New York, Washington, Massachusetts and Minnesota law [[ceqaPrc21002]] [[stateNyEcl80109]] [[stateRcw060]] [[mepaMgl61]] [[stateMn116d04]]",
    },
    {
      label: "Procedural only",
      value: "Montana's MEPA, by statute [[stateMt102]]",
    },
    {
      label: "First document",
      value:
        "An EAW in Minnesota, an ENF in Massachusetts, an EA in Hawaii [[stateMnR1000]] [[mepaRegs]] [[hepaHrs3435]]",
    },
    {
      label: "Who decides",
      value:
        "The state or local agency acting on the project: an RGU in Minnesota, the proposing or approving agency in Hawaii [[stateEqbAbout]] [[hepaHrs3435]]",
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
        "NEPA sets the environmental review process for federal agency decisions. A number of states, tribes and localities have their own laws requiring similar environmental impact assessment for their own activities or decisions, and CEQ keeps a list of the state and local requirements that are similar to NEPA [[stateCeqList]]:",
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
        "NEPA is a purely procedural statute: it requires agencies to study effects, not to choose a particular result [[sevenCounty]]. Montana's act says the same of itself [[stateMt102]], and Hawaii defines its environmental impact statement as an informational document [[hepaHrs3432]]. Several other states add a substantive duty or authority to act on what the review finds:",
      ],
      bullets: [
        "California: agencies should not approve projects as proposed if feasible alternatives or mitigation measures would substantially lessen significant effects [[ceqaPrc21002]]",
        "New York: consistent with social, economic and other essential considerations, agencies must choose alternatives that minimize or avoid adverse effects to the maximum extent practicable, and make an explicit finding saying so [[stateNyEcl80109]]",
        "Washington: agencies may condition a proposal to mitigate specific impacts identified in the review, or deny it when a final EIS finds significant impacts that reasonable mitigation cannot address [[stateRcw060]]",
        "Massachusetts: every agency determination must find that all feasible measures have been taken to avoid or minimize the impact [[mepaMgl61]]",
        "Minnesota: no state action that is likely to pollute, impair or destroy natural resources may be allowed while a feasible and prudent alternative exists [[stateMn116d04]]",
      ],
    },
    {
      heading: "CEQA, SEQR and SEPA: California, New York and Washington",
      paragraphs: [
        "[California's CEQA](/for/ceqa) pairs its review procedures with a stated policy that agencies should not approve projects as proposed when feasible alternatives or mitigation would substantially lessen their significant effects [[ceqaPrc21002]].",
        "Under [New York's SEQR](/for/new-york-seqr), agencies prepare an environmental impact statement on any action they propose or approve that may have a significant effect. The statement covers the setting, impacts, unavoidable effects, alternatives, mitigation and effects on disadvantaged communities [[stateNyEcl80109]].",
        "[Washington's SEPA](/for/washington-sepa) requires a detailed statement on major actions significantly affecting the quality of the environment [[stateRcw030]], and lets agencies condition or deny proposals on the basis of policies they have formally designated [[stateRcw060]].",
      ],
    },
    {
      heading: "Massachusetts MEPA and Hawaii HEPA",
      paragraphs: [
        "[Massachusetts' MEPA](/for/massachusetts-mepa) is threshold-driven: a project that needs a state agency action and meets a review threshold in 301 CMR 11.03 files an Environmental Notification Form, and the Secretary of Energy and Environmental Affairs decides in a Certificate whether an environmental impact report is required [[mepaRegs]]. Projects near environmental justice populations face added EIR requirements [[mepaMgl62b]].",
        "[Hawaii's HEPA](/for/hawaii-hepa) is trigger-driven: an environmental assessment is required for actions such as using state or county lands or funds, or any use in a conservation district, shoreline area or historic site, and the assessment decides whether a full EIS follows [[hepaHrs3435]].",
      ],
    },
    {
      heading: "What is a Minnesota environmental assessment worksheet (EAW)?",
      paragraphs: [
        "An EAW is a brief document that sets out the basic facts needed to decide whether an EIS is required [[stateMn116d04]]. It is mandatory for projects that meet a category in Minn. R. 4410.4300, and may also be ordered by a governmental unit, by petition or at the proposer's request [[stateMnR1000]] [[stateMnR4410]]. A responsible governmental unit (RGU) prepares it with the proposer, using the EQB's standard form [[stateEqbAbout]], whose December 2022 version includes climate adaptation and greenhouse gas items [[stateEqbEawForm]].",
        "After notice, comments on the need for an EIS run for 30 days, and the RGU must decide within 15 days after they close, unless the EQB chair extends the deadline [[stateMn116d04]]. Its decision is a negative or positive declaration, published in the EQB Monitor [[stateMnR1700]]. An EIS, when ordered, must be analytical rather than encyclopedic, and its adequacy determined within 280 days unless extended [[stateMn116d04]].",
      ],
    },
    {
      heading: "Montana MEPA after the 2023 amendments",
      paragraphs: [
        "Montana MEPA requires a detailed statement on major state actions significantly affecting the environment, covering proximate impacts, reasonable and economically feasible alternatives, regulatory impacts on private property, and irreversible commitments of resources [[stateMt201]]. In 2023 the Legislature passed HB 971, excluding greenhouse gas emissions from MEPA analyses, and SB 557, limiting who may challenge a review and providing that a challenge may not vacate or delay a permit without an injunction [[stateMt2023]].",
        "On December 18, 2024, the Montana Supreme Court in Held v. State affirmed a ruling that declared unconstitutional the MEPA limitation on greenhouse gas review in section 75-1-201(2)(a) and a 2023 provision limiting remedies in greenhouse gas challenges [[stateHeld]]. As amended in 2025, the statute lets an agency include a greenhouse gas assessment when it finds one necessary and requires one for fossil fuel activities [[stateMt201]] [[stateMt211]]. Challenges are limited to commenters and the issues they raised, and must be filed within 60 days [[stateMt201]].",
      ],
    },
    {
      heading: "When a project needs both NEPA and state environmental review",
      paragraphs: [
        "A federal decision can require both a NEPA review and a state, tribal or local review, and CEQ has long encouraged agencies to coordinate the two to avoid duplication [[stateCeqList]]. Hawaii requires its agencies to cooperate with federal agencies, including through joint EISs, so that one document meets all applicable laws [[hepaHrs3435]], but a federal FONSI does not automatically satisfy its law [[hepaHar]]. Minnesota's RGUs must avoid duplication between state and federal review where practicable [[stateMn116d04]]. For California, see [CEQA and NEPA](/for/ceqa-and-nepa).",
      ],
    },
  ],
  outline: {
    heading: "What a state EIS covers: the common elements",
    intro:
      "Compiled from the detailed-statement requirements in New York, Washington, Montana, Massachusetts, Minnesota and Hawaii law. Each state adds items of its own, and first-stage documents such as an EAW, ENF or EA are shorter [[stateNyEcl80109]] [[stateRcw030]] [[stateMt201]] [[mepaMgl62b]].",
    items: [
      {
        title: "Project description and setting",
        detail:
          "The proposed action and its environmental setting, or the nature and extent of the project [[stateNyEcl80109]] [[mepaMgl62b]].",
      },
      {
        title: "Environmental impacts",
        detail:
          "The environmental impact of the action, short- and long-term in New York, proximate impacts in Montana [[stateNyEcl80109]] [[stateRcw030]] [[stateMt201]].",
      },
      {
        title: "Unavoidable adverse effects",
        detail:
          "Adverse effects that cannot be avoided if the proposal goes ahead [[stateNyEcl80109]] [[stateRcw030]] [[mepaMgl62b]].",
      },
      {
        title: "Alternatives",
        detail:
          "Alternatives to the proposed action; Montana requires them to be reasonable and economically feasible, plus a no-action analysis [[stateRcw030]] [[stateMt201]] [[stateMn116d04]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "Measures proposed to minimize or mitigate adverse impacts [[stateNyEcl80109]] [[mepaMgl62b]] [[stateMn116d04]].",
      },
      {
        title: "Irreversible commitments of resources",
        detail:
          "Irreversible and irretrievable commitments of resources the action would involve [[stateNyEcl80109]] [[stateRcw030]] [[stateMt201]].",
      },
      {
        title: "Economic, social and cultural effects",
        detail:
          "Economic, employment and sociological effects in Minnesota; effects on economic welfare, social welfare and cultural practices in Hawaii [[stateMn116d04]] [[hepaHrs3432]].",
      },
      {
        title: "State-specific topics",
        detail:
          "Such as growth-inducing, energy and disadvantaged-community effects in New York, environmental justice in Massachusetts, and private property impacts in Montana [[stateNyEcl80109]] [[mepaMgl62b]] [[stateMt201]].",
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
      question: "What is a little NEPA?",
      answer:
        "It is an informal name for a state environmental policy act: a state law that, like the National Environmental Policy Act, requires environmental review of government actions, in this case the state's or a local government's own decisions. Examples include California's CEQA, New York's SEQRA and Washington's SEPA.",
    },
    {
      question: "Which states have their own environmental policy act?",
      answer:
        "CEQ's list includes California, Connecticut, the District of Columbia, Georgia, Hawaii, Indiana, Maryland, Massachusetts, Minnesota, Montana, New Jersey, New York, North Carolina, South Dakota, Virginia, Washington and Wisconsin, plus New York City and the Tahoe Regional Planning Compact. The requirements range from full statutes to an executive order.",
    },
    {
      question: "Does state environmental review apply to private projects?",
      answer:
        "Often, when a state or local agency approves, permits or funds them. Massachusetts reviews projects that need a state permit, financial assistance or a land transfer; Hawaii requires an applicant to prepare an assessment when its action needs agency approval and meets a trigger; and New York covers actions agencies approve as well as their own.",
    },
    {
      question: "Does a NEPA document satisfy state environmental review?",
      answer:
        "Not automatically. Hawaii's rules, for example, say a federal FONSI does not by itself satisfy Chapter 343, though a federal EIS can be used if it meets Hawaii's content requirements. Hawaii and California, among others, allow joint documents so one review can serve both laws.",
    },
    {
      question:
        "What is the difference between Montana MEPA and Massachusetts MEPA?",
      answer:
        "They are separate laws that share an acronym. Montana's act is procedural and covers state agency actions, requiring a detailed statement for major actions that significantly affect the environment. The Massachusetts act is threshold-based: projects needing a state agency action file an Environmental Notification Form, and agencies acting on a project must find that all feasible measures were taken to avoid or minimize damage.",
    },
    {
      question:
        "Can ePlan draft documents for any state's environmental review?",
      answer:
        "ePlan drafts any agency document by name from your project description and a reference document it finds or you upload, such as an EAW, an ENF, a Hawaii EA or a SEPA checklist response. It marks every fact it could not confirm and downloads the draft as Word. It does not file anything, and the responsible agency makes every determination.",
    },
  ],
};
