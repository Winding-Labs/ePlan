import type { GuidePath } from "../paths";
// Reused source keys (defined in consts/guides/sources.ts or pages/*.ts):
// doeProcedures (the July 13, 2026 DOE NEPA Implementing Procedures), doe1021
// (sources.ts); regsDoeIfr (pages/nepa-regulations.ts); eisDoeEisList
// (pages/environmental-impact-statement.ts).
import type { GuideContent, Source } from "../types";

const READ = "2026-10-02";

export const sources = {
  doeB526: {
    title: "Categorical Exclusion for Advanced Nuclear Reactors, 91 FR 4550",
    publisher: "U.S. Department of Energy, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/02/02/2026-02071/categorical-exclusion-for-advanced-nuclear-reactors",
    published: "2026-02-02",
    read: READ,
  },
  doeCxDeterminations: {
    title: "DOE Categorical Exclusion (CX) Determinations",
    publisher:
      "U.S. Department of Energy, Office of NEPA Policy and Compliance",
    url: "https://www.energy.gov/nepa/doe-categorical-exclusion-cx-determinations",
    read: READ,
  },
  doeCxExample: {
    title:
      "CX-271092: Categorical Exclusion Determination Form, Tandem PV, Inc. (ARPA-E)",
    publisher: "U.S. Department of Energy",
    url: "https://www.energy.gov/sites/default/files/2026-09/CX-271092.pdf",
    published: "2026-09-25",
    read: READ,
  },
  doeEaList: {
    title: "DOE Environmental Assessments",
    publisher:
      "U.S. Department of Energy, Office of NEPA Policy and Compliance",
    url: "https://www.energy.gov/nepa/doe-environmental-assessments",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/doe-nepa",
  title: "DOE NEPA: 10 CFR 1021, Procedures and CXs",
  description:
    "DOE NEPA in 2026: what stays in 10 CFR 1021, the DOE NEPA procedures, categorical exclusions and CX determinations.",
  eyebrow: "Department of Energy",
  h1: "DOE NEPA: 10 CFR 1021, the 2026 procedures and CX determinations",
  primaryKeyword: "doe nepa",
  secondaryKeywords: [
    "10 cfr 1021",
    "doe categorical exclusions",
    "doe nepa procedures",
    "categorical exclusion determination",
  ],
  document: "CX Determination",
  answer:
    "DOE NEPA is how the Department of Energy considers the reasonably foreseeable environmental effects of its proposals, including funding and authorizations for applicants, before it decides [[doeProcedures]]. 10 CFR 1021 now holds only DOE's excepted actions, its existing [categorical exclusions](/for/nepa-categorical-exclusion) and related requirements; the rest is in the DOE NEPA Implementing Procedures, last revised July 13, 2026 [[regsDoeIfr]] [[doeProcedures]].",
  glance: [
    {
      label: "CX determination",
      value: "Signed by DOE's NEPA Compliance Officer [[doeCxExample]]",
    },
    {
      label: "Posting",
      value:
        "Online, generally within two weeks, browsable by exclusion, location and office [[doeProcedures]] [[doeCxDeterminations]]",
    },
    {
      label: "EA limits",
      value:
        "75 pages, 1 year; ends in a FONSI or a decision to prepare an [EIS](/for/environmental-impact-statement) [[doeProcedures]]",
    },
    {
      label: "EIS limits",
      value:
        "150 pages, or 300 if extraordinarily complex, and 2 years [[doeProcedures]]",
    },
    {
      label: "EA and EIS lists",
      value:
        "Separate DOE tables, filterable by office and topic [[doeEaList]] [[eisDoeEisList]]",
    },
  ],
  hero: {
    prefix: "Draft a CX Determination for",
    placeholder: "I need a CX determination for…",
    examples: [
      {
        emoji: "☀️",
        label: "Rooftop Solar",
        heading: "Rooftop Solar",
        eyebrow: "SOLAR ENERGY",
        prompt:
          "I'm a project officer at a DOE field office reviewing a grant that would put a 250-kW solar array on the roof of a county's existing administration building in Colorado.",
      },
      {
        emoji: "⚡",
        label: "Line Rebuild",
        heading: "a Line Rebuild",
        eyebrow: "POWER TRANSMISSION",
        prompt:
          "I'm the environmental lead at a federal power marketing administration rebuilding 22 miles of an existing 115-kV transmission line within its current right-of-way in eastern Oregon.",
      },
      {
        emoji: "⚛️",
        label: "Advanced Microreactor",
        heading: "a Microreactor",
        eyebrow: "NUCLEAR ENERGY",
        prompt:
          "I'm a NEPA document manager at a DOE site in Idaho reviewing a proposal to build and operate one advanced microreactor on previously disturbed land inside the site boundary.",
      },
      {
        emoji: "🔌",
        label: "EV Charging",
        heading: "EV Chargers",
        eyebrow: "EV CHARGING",
        prompt:
          "I'm a consultant to a city transit agency in Michigan applying for DOE funds to install 12 DC fast chargers in an existing city-owned parking lot.",
      },
      {
        emoji: "🏗️",
        label: "Building Demolition",
        heading: "Building Demolition",
        eyebrow: "SITE CLEANUP",
        prompt:
          "I'm the environmental manager at a DOE cleanup site in Tennessee planning to demolish three vacant 1990s storage buildings and dispose of the debris at an existing permitted landfill.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the CX determination with the action description, the categorical exclusion applied and the extraordinary-circumstances check; every fact it can't confirm is marked for you.",
    mock: {
      project: "250-kW rooftop solar array",
      documentTitle: "CX Determination — Rooftop Solar Array",
      summary:
        "I drafted the CX determination in the format of DOE's posted determinations, using appendix B of DOE's NEPA procedures. A few details still need your input:",
      missing: [
        "Building name and address",
        "National Register status of the building",
        "Award number",
        "NEPA Compliance Officer",
        "Roof structural review",
      ],
      letterhead: {
        left: [
          "U.S. Department of Energy",
          "Categorical Exclusion Determination Form",
        ],
        right: [
          "Proposed Action: County Rooftop Solar Array",
          "Location: [INSERT: city and county], Colorado",
        ],
      },
      meta: ["Award No.: [INSERT: award number]", "Date: October 2, 2026"],
      paragraphs: [
        "Proposed action description. DOE financial assistance would support installing a commercially available 250-kW solar photovoltaic system on the roof of [INSERT: building name], an existing county administration building, with inverters and interconnection in the existing electrical room. No ground disturbance is proposed.",
        "Categorical exclusion applied. B5.16, Solar photovoltaic systems, for a system located on a building. The proposal fits the class, including the integral elements in appendix B of DOE's NEPA Implementing Procedures, and has not been segmented to meet the definition of a categorical exclusion.",
        "Extraordinary circumstances. None identified, subject to [INSERT: National Register eligibility of the building]. NEPA Compliance Officer: [INSERT: name, signature and date].",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "A CX determination that follows a posted DOE determination or the form you upload, with your project facts filled in and gaps marked",
      manual: "A past determination, copied and edited by hand",
    },
    {
      label: "Precedent research",
      eplan:
        "The research agent searches agency project pages, the Federal Register and eCFR for your project and up to two analog projects",
      manual:
        "Browsing DOE's CX determinations by exclusion, location or office yourself",
    },
  ],
  sections: [
    {
      heading: "10 CFR 1021 and the DOE NEPA procedures: what each holds",
      paragraphs: [
        "Since July 3, 2025, 10 CFR part 1021 holds appendix A, routine actions excepted from NEPA review; appendix B, DOE's categorical exclusions as of then; related requirements; and an emergency provision [[regsDoeIfr]] [[doe1021]]. Everything else, including exclusions added or adopted since, is in the procedures, which DOE describes as guidance developed with CEQ, not a regulation [[doeProcedures]].",
        "DOE first decides whether NEPA applies; CERCLA response actions and Presidential permits for cross-border transmission lines, for example, are not subject to it. If NEPA applies, DOE uses a categorical exclusion where one fits. Otherwise it may rely on an existing document, or it prepares an [EA](/for/nepa-environmental-assessment) when a significant effect is unlikely or unknown and an EIS when one is likely [[doeProcedures]].",
      ],
    },
    {
      heading: "DOE categorical exclusions: appendix B and integral elements",
      paragraphs: [
        "Appendix B groups DOE's exclusions by function, from facility operation (B1) through environmental restoration and waste management (B6), and any DOE office may apply them. Appendix C lists exclusions adopted from other agencies under NEPA section 109 [[doeProcedures]].",
        "Every appendix B class carries five integral elements: the proposal must not threaten a violation of environment, safety or health requirements; require siting or major expansion of waste facilities; disturb preexisting hazardous substances so releases would be uncontrolled or unpermitted; risk significant impacts on environmentally sensitive resources; or involve uncontained genetically engineered organisms or invasive species [[doeProcedures]]. Common classes:",
      ],
      bullets: [
        "B3.6: small-scale research and development, laboratory operations and pilot projects [[doeProcedures]]",
        "B4.13: upgrading and rebuilding existing powerlines [[doeProcedures]]",
        "B5.16: solar photovoltaic systems on a building or other structure, or in a previously disturbed or developed area [[doe1021]]",
        "B5.23: electric vehicle charging stations [[doeProcedures]]",
        "B5.26: advanced nuclear reactors, effective February 2, 2026 [[doeB526]]",
      ],
    },
    {
      heading: "How DOE makes a categorical exclusion determination",
      paragraphs: [
        "DOE must affirmatively find that the proposal fits one or more classes in appendix B or C, was not segmented to fit, and presents no extraordinary circumstance likely to cause a reasonably foreseeable significant adverse effect, or one whose effect DOE does not know. An extraordinary circumstance alone does not bar the exclusion, and DOE or the applicant may modify the proposal to avoid significant effects [[doeProcedures]].",
        "DOE may rely on another agency's determination for substantially the same action, and posts that reliance [[doeProcedures]]. Not every posted determination quotes the full exclusion text; check the rules in effect when it was signed [[doeCxDeterminations]].",
      ],
    },
  ],
  outline: {
    heading: "Categorical exclusion determination: what DOE's form records",
    intro:
      "These elements follow a September 2026 posted determination [[doeCxExample]], with the findings from DOE's procedures [[doeProcedures]]. Use your office's current form. DOE's procedures are among the [agency NEPA procedures](/for/nepa-regulations) that replaced CEQ's rules in 2025.",
    items: [
      {
        title: "Proposed action title and office",
        detail:
          "The project name and the DOE program or field office acting [[doeCxExample]].",
      },
      {
        title: "Location",
        detail:
          "City, county and state for each place the work occurs [[doeCxExample]].",
      },
      {
        title: "Proposed action description",
        detail:
          "What will be done, where and with what facilities [[doeCxExample]].",
      },
      {
        title: "Categorical exclusions applied",
        detail:
          "Each appendix B or C class by number and title; when several apply, DOE considers the full scope together [[doeProcedures]].",
      },
      {
        title: "Integral elements",
        detail:
          "A finding that the proposal meets the five conditions built into every appendix B class [[doeProcedures]].",
      },
      {
        title: "Extraordinary circumstances",
        detail:
          "A finding that none is likely to cause a significant adverse effect, or how the proposal was modified [[doeProcedures]].",
      },
      {
        title: "Segmentation",
        detail:
          "A finding that the proposal was not broken into parts to fit the exclusion [[doeProcedures]].",
      },
      {
        title: "Signature and date",
        detail:
          "The NEPA Compliance Officer's signature and the date [[doeCxExample]].",
      },
    ],
  },
  faq: [
    {
      question:
        "Does DOE have a categorical exclusion for advanced nuclear reactors?",
      answer:
        "Yes. B5.26 covers authorizing, siting, building, operating, reauthorizing and decommissioning advanced reactors when DOE finds the project's attributes sufficiently reduce the risk of adverse offsite consequences from releases, and its wastes and spent fuel can be managed under applicable requirements. It is in DOE's procedures, not 10 CFR part 1021.",
    },
    {
      question: "Can one CX determination cover recurring work?",
      answer:
        "Yes. Recurring work over a set period, such as a year of routine maintenance, may share one determination.",
    },
    {
      question: "Can an applicant prepare a DOE EA or EIS?",
      answer:
        "Yes, with or without a contractor. DOE alone decides the level of review, consults Tribes, independently evaluates and takes responsibility for the document, and issues the FONSI or record of decision. The applicant must give DOE its consolidated administrative record within two weeks of a request.",
    },
    {
      question: "Can ePlan draft a DOE CX determination?",
      answer:
        "Yes. Describe the project or upload your office's form, and ePlan drafts the determination in that structure, marking every fact it can't confirm for you to fill in. DOE's NEPA Compliance Officer makes the determination.",
    },
  ],
};
