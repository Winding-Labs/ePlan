import type { GuidePath } from "../paths";
// /for/section-106. Reused source keys (defined in the shared NEPA sources):
// usc4336, ceqIfr, ceqFinal, ceqProcedures.
import type { GuideEntry, Source } from "../types";

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
  s106Cfr80014: CFR800("800.14", "C", "Federal agency program alternatives"),
  s106Cfr80016: CFR800("800.16", "C", "Definitions"),
  s106AchpIntro: {
    title: "An Introduction to Section 106",
    publisher: "Advisory Council on Historic Preservation",
    url: "https://www.achp.gov/protecting-historic-properties/section-106-process/introduction-section-106",
    read: READ,
  },
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
  s106Agenda: {
    title:
      "Amendments to the Implementing Regulations for Section 106 of the National Historic Preservation Act (RIN 3010-AA10)",
    publisher:
      "Advisory Council on Historic Preservation, Unified Agenda (reginfo.gov)",
    url: "https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=3010-AA10",
    read: READ,
  },
  s106AchpVote: {
    title: "ACHP Votes to Move Forward with Notice of Proposed Rulemaking",
    publisher: "Advisory Council on Historic Preservation",
    url: "https://www.achp.gov/news/achp-votes-move-forward-notice-proposed-rulemaking",
    published: "2026-07-24",
    read: READ,
  },
  s106PcHousing: {
    title:
      "Program Comment on Certain Housing, Building, and Transportation Undertakings, 90 FR 14526",
    publisher: "Advisory Council on Historic Preservation, Federal Register",
    url: "https://www.federalregister.gov/documents/2025/04/02/2025-05438/program-comment-on-certain-housing-building-and-transportation-undertakings",
    published: "2025-04-02",
    read: READ,
  },
  s106PcArmy: {
    title:
      "Notice of Issuance of the Department of the Army Program Comment for Army Warfighting Readiness and Associated Infrastructure, 91 FR 24249",
    publisher: "Advisory Council on Historic Preservation, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/05/05/2026-08674/notice-of-issuance-of-the-department-of-the-army-program-comment-for-army-warfighting-readiness-and",
    published: "2026-05-05",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/section-106",
  parent: "/for/nepa",
  family: "federal",
  name: "Section 106",
  title: "Section 106: NHPA Review Steps & 36 CFR 800",
  description:
    "What Section 106 of the NHPA requires, the 36 CFR part 800 steps, SHPO and tribal consultation, how it runs with NEPA and the ACHP's 2026 rule proposal.",
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
  ],
  document: "Section 106 Consultation Letter",
  answer:
    "Section 106 of the National Historic Preservation Act (NHPA), 54 U.S.C. 306108, requires a federal agency to take into account the effects of a project it carries out, funds or licenses on historic properties, and to give the Advisory Council on Historic Preservation (ACHP) a reasonable opportunity to comment, before it approves federal funds or issues the license [[s106Usc306108]]. The ACHP's regulations, 36 CFR part 800, set the Section 106 process: initiate consultation, identify historic properties, assess adverse effects and resolve them, usually in a memorandum of agreement [[s106Cfr800]] [[s106Cfr8006]] [[s106Citizen]]. Most Section 106 review takes place between the agency and the State or Tribal Historic Preservation Officer [[s106Citizen]].",
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
      label: "Consult with",
      value:
        "The SHPO or THPO, Indian tribes and Native Hawaiian organizations, local governments, applicants and others with a demonstrated interest [[s106Cfr8002]]",
    },
    {
      label: "SHPO/THPO review",
      value:
        "30 days for a finding of no historic properties affected or no adverse effect [[s106Cfr8004]] [[s106Cfr8005]]",
    },
    {
      label: "Ends with",
      value:
        "A finding of no historic properties affected or no adverse effect, a memorandum of agreement, or ACHP comments to the agency head [[s106Cfr8004]] [[s106Cfr8006]] [[s106Cfr8007]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I'm starting Section 106 consultation for…",
    examples: [
      {
        emoji: "🌉",
        label: "Bridge Work",
        heading: "Section 106 Letter for Bridge Work",
        eyebrow: "BRIDGE REPLACEMENT",
        prompt:
          "I'm a cultural resources specialist at the Iowa DOT starting Section 106 consultation for an FHWA-funded replacement of a 1950s two-lane bridge over a creek in rural Iowa.",
      },
      {
        emoji: "🏘️",
        label: "Housing Rehab",
        heading: "Section 106 Letter for Housing Rehab",
        eyebrow: "AFFORDABLE HOUSING",
        prompt:
          "I'm a housing program manager for a city in Ohio using HUD HOME funds to rehabilitate a 1920s three-story apartment building in a National Register-listed neighborhood.",
      },
      {
        emoji: "🌊",
        label: "Levee Repair",
        heading: "Section 106 Letter for Levee Repair",
        eyebrow: "FLOOD PROTECTION",
        prompt:
          "I'm a regulatory project manager at a U.S. Army Corps of Engineers district reviewing a permit for a 2-mile levee repair along a river in Missouri with known archaeological sites nearby.",
      },
      {
        emoji: "☀️",
        label: "Solar Project",
        heading: "Section 106 Letter for Solar Project",
        eyebrow: "RENEWABLE ENERGY",
        prompt:
          "I'm an archaeologist at a BLM field office in Nevada reviewing a right-of-way application for a 3,000-acre solar project on public land near historic trail segments.",
      },
      {
        emoji: "✈️",
        label: "Runway Extension",
        heading: "Section 106 Letter for Runway Extension",
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
      heading: "What is NHPA Section 106?",
      paragraphs: [
        "Section 106 applies when a federal agency has direct or indirect jurisdiction over a federal or federally assisted undertaking, or authority to license one. Before it approves spending federal funds or issues the license, the agency must take into account the undertaking's effect on any historic property and give the ACHP a reasonable opportunity to comment [[s106Usc306108]].",
        "An undertaking is a project, activity or program funded in whole or in part under a federal agency's jurisdiction, including work carried out by or for the agency, with federal financial assistance, or requiring a federal permit, license or approval. A historic property is a district, site, building, structure or object included in, or eligible for, the National Register of Historic Places, including properties of traditional religious and cultural importance to an Indian tribe or Native Hawaiian organization that meet the National Register criteria [[s106Cfr80016]].",
        "A property need not be formally listed: a consensus that it is eligible is enough, and properties are generally at least 50 years old. Section 106 review encourages, but does not mandate, preservation; it makes agencies weigh preservation values in their decisions and be publicly accountable for them [[s106Citizen]].",
      ],
    },
    {
      heading: "The Section 106 process: four steps in 36 CFR part 800",
      paragraphs: [
        "The ACHP issues the regulations that implement Section 106 and oversees the process [[s106Cfr8002]]. If an undertaking is a type of activity with no potential to cause effects on historic properties, the agency has no further obligations. The agency and the SHPO/THPO may agree to address several steps in one consultation, as long as consulting parties and the public can still express their views [[s106Cfr8003]].",
        "Every determination, finding or agreement needs enough documentation for reviewers to understand its basis, and 36 CFR 800.11 lists what each type of finding must include [[s106Cfr80011]]. The four steps:",
      ],
      bullets: [
        "Initiate: establish the undertaking, identify the SHPO and any THPO, plan public involvement and invite consulting parties [[s106Cfr8003]]",
        "Identify: define and document the area of potential effects, review existing information, survey as needed and apply the National Register criteria [[s106Cfr8004]]",
        "Assess: apply the criteria of adverse effect, which ask whether the undertaking would diminish the integrity of a property's location, design, setting, materials, workmanship, feeling or association [[s106Cfr8005]]",
        "Resolve: consult to avoid, minimize or mitigate adverse effects, and record the outcome in a memorandum of agreement [[s106Cfr8006]]",
      ],
    },
    {
      heading: "Who takes part in Section 106 consultation?",
      paragraphs: [
        "The federal agency is legally responsible. It may use applicants, consultants or designees to prepare information and analyses, but the agency official remains responsible for every finding and determination [[s106Cfr8002]]. The SHPO, appointed by the governor, coordinates the state's preservation program and consults with agencies [[s106Citizen]]. On tribal lands where a tribe has assumed the SHPO's duties, the agency consults the THPO instead of the SHPO [[s106Cfr8002]].",
        "The agency must make a reasonable and good faith effort to identify Indian tribes and Native Hawaiian organizations that might attach religious and cultural significance to historic properties in the area of potential effects and invite them; one that asks in writing to be a consulting party is one [[s106Cfr8003]]. Local governments and applicants are entitled to consult, others with a demonstrated interest may join, and the agency must seek the public's views [[s106Cfr8002]].",
        "The ACHP enters an individual review when it decides its involvement is needed, guided by the criteria in appendix A to part 800 [[s106Cfr8002]]. It must be invited when an undertaking has an adverse effect on a National Historic Landmark or a programmatic agreement will be prepared [[s106Cfr8006]].",
      ],
    },
    {
      heading: "How long does SHPO review take?",
      paragraphs: [
        "The SHPO/THPO has 30 days to respond to a request to review a finding or determination. If it does not respond, the agency may proceed to the next step or consult the ACHP in its place [[s106Cfr8003]].",
        "For a finding of no historic properties affected, the agency's Section 106 responsibilities are fulfilled if the SHPO/THPO does not object within 30 days of receiving adequate documentation [[s106Cfr8004]]. For a proposed finding of no adverse effect, the agency may proceed after 30 days if the SHPO/THPO agreed or did not respond and no consulting party objected. If someone disagrees, the ACHP can review the finding within 15 days, extendable by 15 [[s106Cfr8005]].",
        "When an adverse effect is found, the agency notifies the ACHP, which has 15 days to say whether it will join the consultation [[s106Cfr8006]]. The ACHP asks agencies to submit adverse effect notices through its e106 electronic system [[s106AchpOverview]].",
      ],
    },
    {
      heading: "Section 106 review and NEPA: 36 CFR 800.8",
      paragraphs: [
        "The regulations encourage agencies to coordinate Section 106 with NEPA and to consider historic properties as early as possible in the NEPA process. A finding of adverse effect does not necessarily require an environmental impact statement [[s106Cfr8008]].",
        "A categorical exclusion under an agency's NEPA procedures does not end Section 106: the agency still decides whether the action is an undertaking that needs review. An agency may instead use its EA or EIS process in place of 36 CFR 800.3 through 800.6 if it notifies the SHPO/THPO and the ACHP in advance and meets the standards in 800.8(c), with binding mitigation commitments in the record of decision or a memorandum of agreement [[s106Cfr8008]].",
        "Section 800.8 still refers to EAs, FONSIs, EISs and RODs. CEQ's NEPA regulations, 40 CFR parts 1500-1508, were removed [[ceqIfr]] [[ceqFinal]], so agencies prepare those documents under the NEPA statute and their own procedures [[usc4336]] [[ceqProcedures]].",
      ],
    },
    {
      heading:
        "Memorandum of agreement, programmatic agreements and program comments",
      paragraphs: [
        "If the agency and the SHPO/THPO agree on how to resolve adverse effects, they sign a memorandum of agreement (MOA), and the ACHP signs too when it participated. The agency must submit the executed MOA to the ACHP before approving the undertaking, and the MOA then governs the undertaking [[s106Cfr8006]]. If consultation fails, the ACHP comments to the head of the agency, who must take the comments into account and document the decision [[s106Cfr8007]].",
        "For programs and complex projects, the ACHP and an agency may negotiate a programmatic agreement, and an agency may ask the ACHP for program comments on a category of undertakings instead of reviewing each one [[s106Cfr80014]]. One program comment, in effect since December 20, 2024, gives all federal agencies an alternative review for certain housing, building and transportation undertakings [[s106PcHousing]]. Another, effective April 3, 2026, covers Army warfighting readiness activities on Army installations [[s106PcArmy]].",
      ],
    },
    {
      heading:
        "What changed in 2026: the ACHP's proposed rewrite of 36 CFR part 800",
      paragraphs: [
        "The Section 106 regulations were last amended in 2004 [[s106AchpOverview]]. The ACHP listed a proposed rule amending 36 CFR part 800 in the Unified Agenda, designated deregulatory under Executive Order 14192, with a notice of proposed rulemaking targeted for July 2026 [[s106Agenda]].",
        "On July 24, 2026, ACHP members voted to move forward with that notice of proposed rulemaking. The draft goes to interagency review at the Office of Information and Regulatory Affairs before publication in the Federal Register [[s106AchpVote]]. The ACHP has paused its training program for fall and winter 2026 because of the revision [[s106AchpIntro]]. Until a new rule is final, plan reviews under the current text of part 800 [[s106Cfr800]].",
      ],
    },
  ],
  outline: {
    heading: "Section 106 consultation letter: what to include",
    intro:
      "No form is prescribed for a Section 106 consultation letter. This outline follows what 36 CFR part 800 asks an agency to do when it initiates consultation [[s106Cfr8003]] and the documentation it requires for a finding [[s106Cfr80011]]. Check whether your SHPO or THPO uses its own form.",
    items: [
      {
        title: "Undertaking and federal involvement",
        detail:
          "What the project is, the agency and its funding, permit or license, and why it is an undertaking [[s106Cfr80016]], described with photographs, maps and drawings as needed [[s106Cfr80011]].",
      },
      {
        title: "Who is consulting",
        detail:
          "The agency official, and any applicant the agency has authorized to initiate consultation; the agency stays responsible for all findings [[s106Cfr8002]].",
      },
      {
        title: "Area of potential effects",
        detail:
          "The area where the undertaking may directly or indirectly alter the character or use of historic properties, documented with a map [[s106Cfr80016]] [[s106Cfr8004]].",
      },
      {
        title: "Identification efforts",
        detail:
          "Records reviewed, surveys, and information sought from consulting parties and tribes, at a reasonable and good faith level of effort [[s106Cfr8004]] [[s106Cfr80011]].",
      },
      {
        title: "Historic properties and eligibility",
        detail:
          "Each property in the area of potential effects, the National Register criteria applied, and the eligibility recommendation for the SHPO/THPO to agree with [[s106Cfr8004]].",
      },
      {
        title: "Effects and proposed finding",
        detail:
          "The undertaking's effects on each property and why the criteria of adverse effect do or do not apply, including any conditions to avoid adverse effects [[s106Cfr8005]] [[s106Cfr80011]].",
      },
      {
        title: "Consulting parties and tribes",
        detail:
          "The Indian tribes, Native Hawaiian organizations, local governments and others invited, and the views they provided [[s106Cfr8003]] [[s106Cfr80011]].",
      },
      {
        title: "Public involvement",
        detail:
          "How the public has been or will be informed and asked for input, which may use the agency's NEPA public involvement procedures [[s106Cfr8002]] [[s106Cfr8003]].",
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
      question: "What is Section 106 review?",
      answer:
        "The review that Section 106 of the National Historic Preservation Act (54 U.S.C. 306108) requires before a federal agency funds, carries out or licenses an undertaking. The agency identifies historic properties that could be affected, assesses effects, and consults the SHPO or THPO and others on ways to avoid, minimize or mitigate adverse effects, following the ACHP's regulations at 36 CFR part 800.",
    },
    {
      question: "What is a Section 106 consultation letter?",
      answer:
        "The letter in which a federal agency, or an applicant it has authorized, starts consultation with the SHPO or THPO or asks it to review a finding. It usually describes the undertaking and the federal involvement, the area of potential effects, the identification work done, the historic properties found and the proposed finding.",
    },
    {
      question: "How long does the SHPO have to respond under Section 106?",
      answer:
        "30 days from receipt of a request to review a finding or determination. If the SHPO or THPO does not respond in that time, the agency may move to the next step or consult the ACHP in its place.",
    },
    {
      question: "Does a NEPA categorical exclusion cover Section 106?",
      answer:
        "No. Under 36 CFR 800.8(b), the agency must still decide whether a categorically excluded action is an undertaking that needs Section 106 review and, if it is, complete the review.",
    },
    {
      question: "Is Section 106 changing in 2026?",
      answer:
        "The ACHP voted on July 24, 2026 to move forward with a proposed rule revising 36 CFR part 800. The draft goes through review at the Office of Management and Budget and then to the Federal Register for public comment. The regulations in force were last amended in 2004.",
    },
    {
      question: "Can ePlan send my Section 106 letter to the SHPO?",
      answer:
        "No. ePlan drafts the letter and marks every fact it could not confirm; you review, sign and send it. It does not submit anything to a SHPO, a THPO or the ACHP.",
    },
  ],
};
