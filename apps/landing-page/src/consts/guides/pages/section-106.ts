import type { GuidePath } from "../paths";
// /for/section-106. Cites only the sources defined below.
import type { GuideContent, Source } from "../types";

const READ = "2026-10-02";

const CFR800 = (
  section: string,
  subpart: "A" | "B" | "C",
  heading: string,
): Source => ({
  title: `36 CFR ${section} - ${heading}`,
  publisher: "Electronic Code of Federal Regulations (eCFR), current",
  url: `https://www.ecfr.gov/current/title-36/chapter-VIII/part-800/subpart-${subpart}/section-${section}`,
  read: READ,
});

export const sources = {
  s106Usc306108: {
    title:
      "54 U.S.C. 306108 - Effect of undertaking on historic property (NHPA section 106)",
    publisher: "United States Code, 2024 edition (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCODE-2024-title54/html/USCODE-2024-title54-subtitleIII-divsnA-app-dup4-chap3061-subchapI-sec306108.htm",
    read: READ,
  },
  s106Cfr800: {
    title: "36 CFR part 800 - Protection of Historic Properties",
    publisher: "Electronic Code of Federal Regulations (eCFR), current",
    url: "https://www.ecfr.gov/current/title-36/chapter-VIII/part-800",
    read: READ,
  },
  s106Cfr8002: CFR800("800.2", "A", "Participants in the Section 106 process"),
  s106Cfr8003: CFR800("800.3", "B", "Initiation of the section 106 process"),
  s106Cfr8004: CFR800("800.4", "B", "Identification of historic properties"),
  s106Cfr8005: CFR800("800.5", "B", "Assessment of adverse effects"),
  s106Cfr8006: CFR800("800.6", "B", "Resolution of adverse effects"),
  s106Cfr8007: CFR800("800.7", "B", "Failure to resolve adverse effects"),
  s106Cfr8008: CFR800(
    "800.8",
    "B",
    "Coordination with the National Environmental Policy Act",
  ),
  s106Cfr80011: CFR800("800.11", "B", "Documentation standards"),
  s106Cfr80016: CFR800("800.16", "C", "Definitions"),
  s106AchpOverview: {
    title: "Protecting Historic Properties (Section 106 overview)",
    publisher: "Advisory Council on Historic Preservation",
    url: "https://www.achp.gov/protecting-historic-properties",
    read: READ,
  },
  s106Citizen: {
    title:
      "Protecting Historic Properties: A Citizen's Guide to Section 106 Review",
    publisher: "Advisory Council on Historic Preservation",
    url: "https://www.achp.gov/sites/default/files/documents/2021-01/CitizenGuide2021_011321.pdf",
    published: "2021-01",
    read: READ,
  },
  s106AchpVote: {
    title: "ACHP Votes to Move Forward with Notice of Proposed Rulemaking",
    publisher: "Advisory Council on Historic Preservation",
    url: "https://www.achp.gov/news/achp-votes-move-forward-notice-proposed-rulemaking",
    published: "2026-07-24",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/section-106",
  title: "Section 106: NHPA Review Steps & 36 CFR 800",
  description:
    "What Section 106 of the National Historic Preservation Act requires: the 36 CFR part 800 steps, SHPO and tribal consultation.",
  eyebrow: "Section 106",
  h1: "Section 106 review: the NHPA process, step by step",
  primaryKeyword: "section 106",
  secondaryKeywords: [
    "section 106 review",
    "nhpa section 106",
    "36 cfr part 800",
    "section 106 consultation",
    "section 106 process",
    "shpo review",
    "shpo",
    "state historic preservation officer",
  ],
  document: "Section 106 Consultation Letter",
  answer:
    "Section 106 of the National Historic Preservation Act requires a federal agency to consider a project's effects on historic properties, and let the Advisory Council on Historic Preservation (ACHP) comment, before approving federal funds or a license [[s106Usc306108]]. The process, 36 CFR part 800, is mostly consultation with the State Historic Preservation Officer (SHPO), or the THPO on tribal lands [[s106Cfr800]] [[s106Citizen]].",
  glance: [
    {
      label: "Legal basis",
      value: "NHPA section 106, 54 U.S.C. 306108 [[s106Usc306108]]",
    },
    {
      label: "Regulations",
      value: "36 CFR part 800, issued by the ACHP [[s106Cfr8002]]",
    },
    {
      label: "Applies to",
      value:
        "Undertakings: projects a federal agency carries out, funds, or permits, licenses or approves [[s106Cfr80016]]",
    },
    {
      label: "SHPO/THPO review",
      value: "30 days to respond to a finding or determination [[s106Cfr8003]]",
    },
    {
      label: "Ends with",
      value:
        "No historic properties affected, no adverse effect, a memorandum of agreement, or ACHP comments [[s106Cfr8004]] [[s106Cfr8005]] [[s106Cfr8006]] [[s106Cfr8007]]",
    },
  ],
  hero: {
    prefix: "Draft a Section 106 Letter for",
    placeholder: "I'm starting Section 106 consultation for…",
    examples: [
      {
        emoji: "🌉",
        label: "Bridge Work",
        heading: "Bridge Work",
        eyebrow: "BRIDGE REPLACEMENT",
        prompt:
          "I'm a cultural resources specialist at the Iowa DOT starting Section 106 consultation for an FHWA-funded replacement of a 1950s two-lane bridge over a creek in rural Iowa.",
      },
      {
        emoji: "🏘️",
        label: "Housing Rehab",
        heading: "Housing Rehab",
        eyebrow: "AFFORDABLE HOUSING",
        prompt:
          "I'm a housing program manager for a city in Ohio using HUD HOME funds to rehabilitate a 1920s three-story apartment building in a National Register-listed neighborhood.",
      },
      {
        emoji: "🌊",
        label: "Levee Repair",
        heading: "Levee Repair",
        eyebrow: "FLOOD PROTECTION",
        prompt:
          "I'm a regulatory project manager at a U.S. Army Corps of Engineers district reviewing a permit for a 2-mile levee repair along a river in Missouri with known archaeological sites nearby.",
      },
      {
        emoji: "☀️",
        label: "Solar Project",
        heading: "Solar Project",
        eyebrow: "RENEWABLE ENERGY",
        prompt:
          "I'm an archaeologist at a BLM field office in Nevada reviewing a right-of-way application for a 3,000-acre solar project on public land near historic trail segments.",
      },
      {
        emoji: "✈️",
        label: "Runway Extension",
        heading: "Runway Extension",
        eyebrow: "AIRPORT IMPROVEMENT",
        prompt:
          "I'm an environmental planner at a regional airport in Georgia preparing the Section 106 consultation letter for FAA on a 1,500-foot runway extension near a historic farmstead.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the Section 106 consultation letter with the undertaking, area of potential effects and identification steps; every fact it can't confirm is marked for you.",
    mock: {
      project: "Two-lane bridge replacement",
      documentTitle: "Section 106 Consultation Letter — Bridge Replacement",
      summary:
        "I drafted the Section 106 Consultation Letter from 36 CFR 800.3 and 800.4, following a reference initiation letter's structure. A few details still need your input:",
      missing: [
        "Route and stream names",
        "Year the bridge was built",
        "Eligibility recommendation",
        "Tribes to invite",
        "Area of potential effects map",
      ],
      letterhead: {
        left: [
          "Iowa Department of Transportation",
          "Cultural Resources",
          "On behalf of the Federal Highway Administration",
        ],
        right: [
          "State Historic Preservation Officer",
          "[INSERT: SHPO office]",
          "[INSERT: street address]",
        ],
      },
      meta: ["Project No.: [INSERT: project number]", "Date: October 2, 2026"],
      salutation: "Dear State Historic Preservation Officer:",
      paragraphs: [
        "The Federal Highway Administration proposes to fund replacement of the two-lane bridge carrying [INSERT: route] over [INSERT: stream] in rural Iowa. Federal funding makes the project an undertaking, and on FHWA's behalf we are initiating Section 106 consultation with your office under 36 CFR 800.3.",
        "The area of potential effects includes the bridge, its approaches, and temporary staging and access areas, as shown on the enclosed map. A records search and field survey identified the existing bridge, built in [INSERT: year], which we recommend as [INSERT: eligible or not eligible] for the National Register of Historic Places.",
        "We request your comments on the area of potential effects and our eligibility recommendation within 30 days of receipt. We have also invited the county and the Indian tribes that may attach religious and cultural significance to the area to consult, and will send our assessment of effects when identification is complete.",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "A consultation letter that follows a reference letter's structure, with your project facts filled in and gaps marked",
      manual: "Your office's last SHPO letter, edited by hand",
    },
    {
      label: "Survey and map files",
      eplan:
        "Upload survey reports as PDF or Word and the area of potential effects as a shapefile, GeoJSON or KML, up to 50 MB each",
      manual:
        "Copying survey findings and map references into the letter by hand",
    },
  ],
  sections: [
    {
      heading: "The Section 106 process: four steps in 36 CFR part 800",
      paragraphs: [
        "Historic properties are those listed in or eligible for the National Register of Historic Places, including places of religious and cultural importance to Indian tribes and Native Hawaiian organizations [[s106Cfr80016]]. They need not be listed and are generally at least 50 years old [[s106Citizen]]. If the undertaking is a type of activity with no potential to cause effects on historic properties, the agency has no further obligations [[s106Cfr8003]].",
        "The ACHP voted on July 24, 2026 to propose a rewrite of part 800, last amended in 2004; until a new rule is final, the current text applies [[s106AchpVote]] [[s106AchpOverview]] [[s106Cfr800]]. The four steps:",
      ],
      bullets: [
        "Initiate: confirm the undertaking, identify the SHPO or THPO, plan public involvement and invite consulting parties [[s106Cfr8003]]",
        "Identify: define the area of potential effects, review records, survey as needed and apply the National Register criteria [[s106Cfr8004]]",
        "Assess: apply the criteria of adverse effect, asking whether the undertaking would diminish the integrity of each property [[s106Cfr8005]]",
        "Resolve: consult to avoid, minimize or mitigate adverse effects, usually recorded in a memorandum of agreement [[s106Cfr8006]]",
      ],
    },
    {
      heading: "What is a SHPO? Who takes part in Section 106",
      paragraphs: [
        "The SHPO, or State Historic Preservation Officer, is the official appointed to administer the state historic preservation program; a THPO takes on the SHPO's role on tribal lands [[s106Cfr80016]]. The agency consults the SHPO or THPO and is responsible for every finding, even when an applicant or consultant prepares the analysis [[s106Cfr8002]].",
        "It must make a reasonable and good faith effort to identify and invite tribes and Native Hawaiian organizations that may attach religious and cultural significance to affected properties [[s106Cfr8003]].",
      ],
    },
    {
      heading: "How long does SHPO review take?",
      paragraphs: [
        "If the SHPO/THPO does not respond within its 30 days, the agency may proceed to the next step or consult the ACHP in its place [[s106Cfr8003]]. A finding of no historic properties affected completes Section 106 if the SHPO/THPO does not object within 30 days of receiving adequate documentation [[s106Cfr8004]].",
        "With a finding of no adverse effect, the agency may proceed after 30 days if the SHPO/THPO agreed or did not respond and no consulting party objected; if someone disagrees, the ACHP can review it within 15 days, extendable by 15 [[s106Cfr8005]]. An adverse effect is reported to the ACHP, through its e106 system, and the ACHP has 15 days to decide whether to join [[s106Cfr8006]] [[s106AchpOverview]].",
      ],
    },
    {
      heading: "Section 106 review and NEPA: 36 CFR 800.8",
      paragraphs: [
        "Agencies should coordinate Section 106 with [NEPA](/for/nepa) and consider historic properties early; an adverse effect does not by itself require an EIS. An agency may instead use its EA or EIS process in place of 36 CFR 800.3 through 800.6 if it notifies the SHPO/THPO and the ACHP in advance and meets 800.8(c), including binding mitigation commitments [[s106Cfr8008]].",
      ],
    },
  ],
  outline: {
    heading: "Section 106 consultation letter: what to include",
    intro:
      "This outline follows what 36 CFR part 800 asks for when an agency initiates consultation [[s106Cfr8003]] and the documentation a finding needs [[s106Cfr80011]]. Check whether your SHPO or THPO uses its own form. A [categorical exclusion](/for/nepa-categorical-exclusion) does not end Section 106 review, [ESA section 7](/for/esa-section-7) consultation often runs alongside it, and [HUD](/for/hud-environmental-review) and [FEMA](/for/fema-ehp) cover both in their environmental reviews.",
    items: [
      {
        title: "Undertaking and federal involvement",
        detail:
          "The project, the agency and its funding, permit or license, and why it is an undertaking [[s106Cfr80016]], with maps and photographs [[s106Cfr80011]].",
      },
      {
        title: "Who is consulting",
        detail:
          "The agency official, or the applicant the agency authorized to initiate consultation [[s106Cfr8002]].",
      },
      {
        title: "Area of potential effects",
        detail:
          "Where the undertaking may directly or indirectly alter the character or use of historic properties, shown on a map [[s106Cfr80016]] [[s106Cfr8004]].",
      },
      {
        title: "Identification efforts",
        detail:
          "Records reviewed, surveys, and information sought from consulting parties and tribes [[s106Cfr8004]] [[s106Cfr80011]].",
      },
      {
        title: "Historic properties and eligibility",
        detail:
          "Each property found, the National Register criteria applied and your eligibility recommendation [[s106Cfr8004]].",
      },
      {
        title: "Effects and proposed finding",
        detail:
          "Effects on each property and why the criteria of adverse effect do or do not apply, including conditions that avoid them [[s106Cfr8005]] [[s106Cfr80011]].",
      },
      {
        title: "Consulting parties and tribes",
        detail:
          "The tribes, Native Hawaiian organizations, local governments and others invited, and the views they gave [[s106Cfr8003]] [[s106Cfr80011]].",
      },
      {
        title: "Public involvement",
        detail:
          "How the public was or will be asked for input, possibly through the agency's NEPA procedures [[s106Cfr8002]] [[s106Cfr8003]].",
      },
      {
        title: "Request and review period",
        detail:
          "What you ask the SHPO/THPO to review or agree with, and the 30 days it has to respond [[s106Cfr8003]] [[s106Cfr8005]].",
      },
    ],
  },
  faq: [
    {
      question: "What is a Section 106 consultation letter?",
      answer:
        "The letter in which a federal agency, or an applicant it has authorized, starts consultation with the SHPO or THPO or asks it to review a finding. No federal form is prescribed, though some SHPOs and THPOs have their own.",
    },
    {
      question: "Does a NEPA categorical exclusion cover Section 106?",
      answer:
        "No. Under 36 CFR 800.8(b), the agency must still decide whether a categorically excluded action is an undertaking that needs Section 106 review and, if it is, complete the review.",
    },
    {
      question: "What happens if Section 106 consultation fails?",
      answer:
        "The ACHP comments to the head of the agency, who must take the comments into account and document the final decision. Section 106 encourages preservation but does not mandate it.",
    },
    {
      question: "Can ePlan send my Section 106 letter to the SHPO?",
      answer:
        "No. ePlan drafts the letter and marks every fact it could not confirm; you review, sign and send it. It does not submit anything to a SHPO, a THPO or the ACHP.",
    },
  ],
};
