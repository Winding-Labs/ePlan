import type { GuidePath } from "../paths";
// Reused source keys (defined in consts/guides/sources.ts or pages/*.ts):
// doeProcedures (the July 13, 2026 DOE NEPA Implementing Procedures), doe1021,
// ceqIfr, ceqFinal (sources.ts); regsDoeIfr (pages/nepa-regulations.ts);
// eisDoeEisList (pages/environmental-impact-statement.ts).
import type { GuideEntry, Source } from "../types";

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

export const entry: GuideEntry<GuidePath> = {
  path: "/for/doe-nepa",
  parent: "/for/nepa",
  family: "agency",
  name: "DOE NEPA",
  title: "DOE NEPA: 10 CFR 1021, Procedures and CXs",
  description:
    "DOE NEPA in 2026: what stays in 10 CFR 1021, the July 2026 DOE NEPA procedures, categorical exclusions including B5.26, and posted CX determinations.",
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
    "DOE NEPA is the process the Department of Energy uses to consider the reasonably foreseeable environmental effects of its proposals, including funding and authorizations for applicants, before it decides [[doeProcedures]]. Since July 3, 2025, 10 CFR 1021 holds only DOE's excepted administrative actions, its existing categorical exclusions and related requirements; the rest of DOE's procedures sit in a guidance document outside the Code of Federal Regulations, last revised July 13, 2026 [[regsDoeIfr]] [[doeProcedures]]. When a categorical exclusion (CX) applies, DOE documents a CX determination and posts it online, generally within two weeks [[doeProcedures]].",
  glance: [
    {
      label: "Procedures",
      value:
        "DOE NEPA Implementing Procedures, July 13, 2026 [[doeProcedures]]",
    },
    {
      label: "Regulation",
      value:
        "10 CFR part 1021: excepted actions (appendix A) and categorical exclusions (appendix B) [[doe1021]]",
    },
    {
      label: "CX determinations",
      value:
        "Documented and posted online, generally within two weeks [[doeProcedures]]",
    },
    { label: "EA limits", value: "75 pages and 1 year [[doeProcedures]]" },
    {
      label: "EIS limits",
      value:
        "150 pages, or 300 if extraordinarily complex, and 2 years [[doeProcedures]]",
    },
    {
      label: "Newest DOE CX",
      value:
        "B5.26, advanced nuclear reactors, effective February 2, 2026 [[doeB526]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I need a CX determination for…",
    examples: [
      {
        emoji: "☀️",
        label: "Rooftop Solar",
        heading: "CX Determination for Rooftop Solar",
        eyebrow: "SOLAR ENERGY",
        prompt:
          "I'm a project officer at a DOE field office reviewing a grant that would put a 250-kW solar array on the roof of a county's existing administration building in Colorado.",
      },
      {
        emoji: "⚡",
        label: "Line Rebuild",
        heading: "CX Determination for a Line Rebuild",
        eyebrow: "POWER TRANSMISSION",
        prompt:
          "I'm the environmental lead at a federal power marketing administration rebuilding 22 miles of an existing 115-kV transmission line within its current right-of-way in eastern Oregon.",
      },
      {
        emoji: "⚛️",
        label: "Advanced Microreactor",
        heading: "CX Determination for a Microreactor",
        eyebrow: "NUCLEAR ENERGY",
        prompt:
          "I'm a NEPA document manager at a DOE site in Idaho reviewing a proposal to build and operate one advanced microreactor on previously disturbed land inside the site boundary.",
      },
      {
        emoji: "🔌",
        label: "EV Charging",
        heading: "CX Determination for EV Chargers",
        eyebrow: "EV CHARGING",
        prompt:
          "I'm a consultant to a city transit agency in Michigan applying for DOE funds to install 12 DC fast chargers in an existing city-owned parking lot.",
      },
      {
        emoji: "🏗️",
        label: "Building Demolition",
        heading: "CX Determination for Building Demolition",
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
      heading:
        "Where DOE's NEPA rules live: 10 CFR 1021 and the DOE NEPA procedures",
      paragraphs: [
        "DOE's regulations were written to supplement CEQ's NEPA regulations, 40 CFR parts 1500-1508, which were removed effective April 11, 2025; CEQ finalized the removal on January 8, 2026 [[regsDoeIfr]] [[ceqIfr]] [[ceqFinal]]. DOE's interim final rule, effective July 3, 2025, cut 10 CFR part 1021 to appendix A, administrative and routine actions excepted from NEPA review; appendix B, its existing categorical exclusions; related requirements; and an emergency provision [[regsDoeIfr]] [[doe1021]].",
        "Everything else moved to the DOE NEPA Implementing Procedures, which DOE describes as guidance, not a regulation, developed in consultation with CEQ. The current version is dated July 13, 2026, and its appendix C now includes a Coast Guard categorical exclusion whose adoption under NEPA section 109 DOE announced that day [[doeProcedures]].",
        "The procedures build in the Supreme Court's Seven County decision: DOE treats NEPA as purely procedural and says its analysis ordinarily should not consider the effects of separate projects, especially those it does not regulate [[doeProcedures]].",
      ],
    },
    {
      heading: "What the DOE NEPA procedures require",
      paragraphs: [
        "DOE first decides whether NEPA applies. The procedures list activities DOE has found are not subject to NEPA, including CERCLA response actions, Presidential permits for cross-border transmission lines, natural gas imports and exports to free-trade-agreement countries, and certain block-grant and State Energy Program funding [[doeProcedures]].",
        "If NEPA applies, DOE applies a categorical exclusion where one fits. Otherwise it considers relying on an existing document, prepares an environmental assessment if a significant effect is unlikely or its significance is unknown, and prepares an EIS if a significant effect is likely [[doeProcedures]].",
        "DOE or an applicant may prepare an EA or EIS, with or without a contractor. DOE alone decides the level of review, conducts government-to-government consultation with Tribes, independently evaluates and takes responsibility for the document, and issues the FONSI or record of decision. An applicant must give DOE its consolidated administrative record within two weeks of a request [[doeProcedures]].",
      ],
    },
    {
      heading:
        "DOE categorical exclusions: appendix B, integral elements and B5.26",
      paragraphs: [
        "Appendix B groups DOE's categorical exclusions by function, from facility operation (B1) through electric power and transmission (B4); conservation, fossil and renewable energy (B5); and environmental restoration and waste management (B6). Any DOE office may apply any of them [[doeProcedures]]. Appendix C lists exclusions DOE has adopted from other agencies under NEPA section 109, including USDA categories adopted June 16, 2026 [[doeProcedures]].",
        "Every appendix B class carries five integral elements. To fit, a proposal must not threaten a violation of environment, safety or health requirements; require siting or major expansion of waste facilities; disturb preexisting hazardous substances so that releases would be uncontrolled or unpermitted; risk significant impacts on environmentally sensitive resources; or involve genetically engineered organisms or invasive species unless contained [[doeProcedures]].",
        "DOE added B5.26, advanced nuclear reactors, effective February 2, 2026. It covers authorizing, siting, building, operating, reauthorizing and decommissioning advanced reactors if DOE finds the project's attributes sufficiently reduce the risk of adverse offsite consequences from releases and its wastes and spent fuel can be managed under applicable requirements. B5.26 sits in the procedures, not in 10 CFR part 1021 [[doeB526]] [[doe1021]]. Other commonly used classes include:",
      ],
      bullets: [
        "B3.6: small-scale research and development, laboratory operations and pilot projects [[doeProcedures]]",
        "B4.13: upgrading and rebuilding existing powerlines [[doeProcedures]]",
        "B5.16: solar photovoltaic systems on a building or other structure, or in a previously disturbed or developed area [[doe1021]]",
        "B5.23: electric vehicle charging stations [[doeProcedures]]",
      ],
    },
    {
      heading: "How DOE makes a categorical exclusion determination",
      paragraphs: [
        "DOE must affirmatively find that the proposal fits one or more classes in appendix B or C, has not been segmented to fit, and presents no extraordinary circumstance likely to cause a reasonably foreseeable significant adverse effect, or one whose effect DOE does not know. An extraordinary circumstance alone does not bar the exclusion, and DOE or the applicant may modify the proposal to avoid significant effects [[doeProcedures]].",
        "DOE documents each determination and posts appendix B determinations online, generally within two weeks, withholding classified, confidential business and other FOIA-exempt information. Recurring work over a set period, such as a year of routine maintenance, may share one determination. DOE may also rely on another agency's determination for substantially the same action, and posts that reliance [[doeProcedures]].",
        "A posted determination form records the proposed action title, office, location and description, the categorical exclusions applied, checkmarks for the three findings, and the NEPA Compliance Officer's signature and date [[doeCxExample]].",
      ],
    },
    {
      heading: "Where to find DOE CX determinations, EAs and EISs",
      paragraphs: [
        "DOE's Office of NEPA Policy and Compliance posts CX determinations that can be browsed by date, by categorical exclusion applied, by location and by DOE office. Not every determination quotes the full text of its exclusions; DOE says to check the regulations in effect when it was signed [[doeCxDeterminations]].",
        "Separate tables list DOE's environmental assessments and EISs, filterable by office and topic and sorted newest first [[doeEaList]] [[eisDoeEisList]]. For example, CX-271092, signed September 25, 2026, applied B3.6, B3.11, B5.15 and B5.16 to ARPA-E funding for solar module research and field testing [[doeCxExample]].",
      ],
    },
    {
      heading:
        "DOE environmental assessments and EISs: page limits and deadlines",
      paragraphs: [
        "An EA briefly covers the purpose and need, the proposed action, alternatives and no action, why some effects are not analyzed further, and the reasonably foreseeable effects. It may not exceed 75 pages, excluding citations and appendices, and is due one year from the start date, normally DOE's determination that an EA is required. It ends in a FONSI or a decision to prepare an EIS, and DOE posts EAs and FONSIs on its website [[doeProcedures]].",
        "An EIS is capped at 150 pages, or 300 for extraordinary complexity, and is due two years from its start date, measured to EPA's notice of availability. The procedures note no statutory requirement to post a draft EIS for comment. DOE files the EIS with EPA and records its decision in a record of decision or another decision document [[doeProcedures]].",
        "When it is unclear whether a change needs a supplement, DOE may prepare a supplement analysis and make it available to the public [[doeProcedures]].",
      ],
    },
  ],
  outline: {
    heading: "Categorical exclusion determination: what DOE's form records",
    intro:
      "DOE's posted form records these elements, as on a September 2026 determination [[doeCxExample]]; the findings come from section 5.4 of DOE's procedures [[doeProcedures]]. Use your office's current form.",
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
          "What will be done, where and with what facilities; recurring work over a set period may be covered once [[doeProcedures]].",
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
          "A finding that none is likely to cause a reasonably foreseeable significant adverse effect, or a note of how the proposal was modified [[doeProcedures]].",
      },
      {
        title: "Segmentation",
        detail:
          "A finding that the proposal was not broken into parts to fit the exclusion [[doeProcedures]].",
      },
      {
        title: "Signature and date",
        detail:
          "The NEPA Compliance Officer's determination, signed and dated [[doeCxExample]].",
      },
      {
        title: "Posting",
        detail:
          "Online, generally within two weeks, without classified, confidential business or other FOIA-exempt information [[doeProcedures]].",
      },
    ],
  },
  faq: [
    {
      question: "What is DOE NEPA?",
      answer:
        "The process the Department of Energy uses to comply with the National Environmental Policy Act: deciding whether NEPA applies to a proposal, then applying a categorical exclusion or preparing an environmental assessment or environmental impact statement before it decides.",
    },
    {
      question: "Is 10 CFR 1021 still in effect?",
      answer:
        "Yes, in reduced form. Since July 3, 2025 it holds DOE's administrative and routine actions excepted from NEPA review, the categorical exclusions DOE had then, related requirements and an emergency provision. The rest of DOE's procedures, including categorical exclusions added or adopted since, are in the DOE NEPA Implementing Procedures, last revised July 13, 2026.",
    },
    {
      question: "What is a categorical exclusion determination?",
      answer:
        "The document recording DOE's finding that a proposal fits one or more categorical exclusions, was not segmented to fit, and presents no extraordinary circumstance likely to cause a significant adverse effect. DOE posts determinations for appendix B exclusions online, generally within two weeks.",
    },
    {
      question: "Where can I find DOE CX determinations?",
      answer:
        "On the DOE Office of NEPA Policy and Compliance website, which lets you browse determinations by date, by the exclusion applied, by location and by DOE office. DOE's environmental assessments and EISs are in separate searchable tables on the same site.",
    },
    {
      question:
        "Does DOE have a categorical exclusion for advanced nuclear reactors?",
      answer:
        "Yes. B5.26, effective February 2, 2026, covers authorizing, siting, building, operating, reauthorizing and decommissioning advanced reactors when DOE finds the project's attributes sufficiently reduce the risk of adverse offsite consequences from releases and its wastes and spent fuel can be managed under applicable requirements. It is in DOE's procedures, not 10 CFR part 1021.",
    },
    {
      question: "Can ePlan draft a DOE CX determination?",
      answer:
        "Yes. Describe the project or upload your office's form, and ePlan drafts the determination in that structure, marking every fact it can't confirm for you to fill in. DOE's NEPA Compliance Officer makes the determination.",
    },
  ],
};
