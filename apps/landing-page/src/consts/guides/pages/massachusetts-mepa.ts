import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

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

export const entry: GuideContent<GuidePath> = {
  path: "/for/massachusetts-mepa",
  title: "MEPA Massachusetts: ENF, EIR and Thresholds",
  description:
    "How MEPA review works in Massachusetts: the review thresholds, the Environmental Notification Form, EIRs and Certificates.",
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
    "MEPA, the Massachusetts Environmental Policy Act, requires state agencies to evaluate and minimize the environmental impact of projects they undertake, fund or permit [[mepaMgl61]] [[mepaMgl62]]. A project that meets a review threshold in 301 CMR 11.03 files an Environmental Notification Form (ENF), and the Secretary of Energy and Environmental Affairs issues a Certificate deciding whether an [environmental impact report](/for/ceqa-environmental-impact-report) (EIR) is required [[mepaFiling]] [[mepaRegs]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "M.G.L. c. 30, §§ 61–62L; regulations at 301 CMR 11.00 [[mepaMgl62]] [[mepaRegs]]",
    },
    {
      label: "Prepared by",
      value:
        "The proponent: the agency doing the project, or the party seeking its permit or funding [[mepaRegs]] [[mepaMgl62b]]",
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
      label: "Filed with",
      value:
        "The MEPA Office (EEA), online through the e-Filing Portal, required since July 1, 2025 [[mepaOffice]] [[mepaReady]]",
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
      heading: "What are the MEPA thresholds?",
      paragraphs: [
        "Each 301 CMR 11.03 threshold sets the review level: an ENF and a mandatory EIR, or an ENF with an EIR only if the Secretary requires one. Jurisdiction is broad when an agency undertakes or funds the project, and limited to the subject matter of the permits or land transfer when a private party needs only those. Lawfully existing structures, routine maintenance and replacement projects fall outside the thresholds [[mepaRegs]].",
      ],
      bullets: [
        "Land: 50+ acres altered or 10+ acres of new impervious area, mandatory EIR; 25 or 5 acres, ENF [[mepaRegs]]",
        "Transportation: 1,000+ new parking spaces or 3,000+ new average daily trips, mandatory EIR; 300 or 2,000, ENF",
        "Energy: a new electric generating facility of 100+ MW, mandatory EIR; 25+ MW, ENF",
        "Water: a new drinking water treatment plant of 1,000,000+ gallons per day, ENF",
        "Waterways: dredging 10,000+ cubic yards of material, ENF",
      ],
    },
    {
      heading: "How does MEPA review work?",
      paragraphs: [
        "A private proponent files the ENF no later than ten days after its first application for a permit or financial assistance [[mepaMgl62a]] [[mepaRegs]]. Review then runs in this order [[mepaRegs]]:",
      ],
      bullets: [
        "Notice in the Environmental Monitor, published twice monthly for filings received by the 15th and month-end, starts review [[mepaRegs]]",
        "Comment period, usually with a site visit and a public consultation session",
        "The Secretary's Certificate, by the end of review: whether an EIR is required and, if so, its Scope",
        "Draft and final EIR, each certified for adequacy within seven days after comments close [[mepaMgl62c]]",
        "Section 61 Findings: after an EIR, each acting agency writes the mitigation into its permit or approval",
      ],
    },
    {
      heading: "When is an EIR required under MEPA?",
      paragraphs: [
        "An EIR is required when a project meets a mandatory EIR threshold, when the Secretary requires one after reviewing the ENF, and for any project likely to damage the environment within 1 mile of an environmental justice population, or 5 miles for air quality impacts [[mepaRegs]] [[mepaAct2021]] [[mepaMgl62b]].",
        "Before filing, the proponent must offer public involvement to environmental justice populations in the Designated Geographic Area, generally 1 mile; projects meeting mandatory EIR thresholds, or seeking a single or rollover EIR, also give notice 45 to 90 days ahead [[mepaRegs]] [[mepaEnfGuide]]. Since January 30, 2026, qualifying housing projects are not presumed likely to cause damage, even above thresholds, though they still file an ENF [[mepaRegs]] [[mepaHousing]].",
      ],
    },
  ],
  outline: {
    heading: "What goes in an Environmental Notification Form?",
    intro:
      "Built from 301 CMR 11.05 and the MEPA Office's ENF guide; file on the current ENF form, effective February 3, 2026 [[mepaRegs]] [[mepaEnfGuide]]. MEPA is one of the [state environmental policy acts](/for/state-environmental-review) similar to [NEPA](/for/nepa).",
    items: [
      {
        title: "Project information and thresholds",
        detail:
          "Name, location and proponent, each review threshold the project may meet, and each agency action it may require [[mepaRegs]] [[mepaEnfGuide]].",
      },
      {
        title: "Project description",
        detail:
          "The whole project, including likely future expansion; phasing or segmenting a project to evade MEPA review is not allowed [[mepaRegs]].",
      },
      {
        title: "Alternatives analysis",
        detail:
          "The purpose, the criteria for the preferred alternative, and the impacts of each alternative, such as other sites or uses; a significant component of review [[mepaEnfGuide]].",
      },
      {
        title: "Environmental and public health impacts",
        detail:
          "The proponent's initial assessment, with environmental and public health impacts assessed separately and the sources of each identified [[mepaRegs]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "Proposed measures to avoid, minimize and mitigate the impacts identified [[mepaRegs]] [[mepaEnfGuide]].",
      },
      {
        title: "Environmental justice",
        detail:
          "Environmental justice populations in the Designated Geographic Area, likely negative effects on them, outreach before filing, and languages spoken by nearby limited-English residents [[mepaRegs]].",
      },
      {
        title: "Climate resilience",
        detail:
          "The output report from the RMAT Climate Resilience Design Standards Tool, attached to the ENF [[mepaEnfGuide]].",
      },
      {
        title: "Requests",
        detail:
          "Any request for a single EIR, a Special Review Procedure or a waiver, each of which calls for an expanded ENF [[mepaRegs]].",
      },
      {
        title: "Attachments, circulation and notice",
        detail:
          "USGS locus map, existing and proposed site plans, environmental justice map (1 and 5 miles), circulation list and newspaper notice certification [[mepaRegs]] [[mepaEnfGuide]].",
      },
    ],
  },
  faq: [
    {
      question: "Is MEPA review a permit?",
      answer:
        "No. MEPA review happens before state agencies act, but it is not a permitting process and does not itself approve or deny a project. The agencies decide on their own permits, financial assistance or land transfers afterward.",
    },
    {
      question: "Can I file a single EIR instead of a draft and final EIR?",
      answer:
        "Only if the Secretary allows it. File an expanded ENF that analyzes all aspects of the project and all feasible alternatives, with a detailed baseline. A rollover EIR, reviewed as the final EIR, is only for projects that need an EIR because they are near environmental justice populations.",
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
