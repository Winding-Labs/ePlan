import type { GuidePath } from "../paths";
// /for/hud-environmental-review. Reused source keys (defined in the shared
// NEPA sources): ceqIfr, ceqFinal.
// eCFR sections were read through eCFR's versioner API (text current as of
// 2026-10-01); the eCFR website blocks automated browsing.
import type { GuideEntry, Source } from "../types";

const READ = "2026-10-02";

type Part58Subpart = "A" | "B" | "C" | "D" | "E" | "H";

const ECFR58 = (
  section: string,
  subpart: Part58Subpart,
  heading: string,
): Source => ({
  title: `24 CFR ${section} - ${heading}`,
  publisher: "Electronic Code of Federal Regulations (eCFR), current",
  url: `https://www.ecfr.gov/current/title-24/subtitle-A/part-58/subpart-${subpart}/section-${section}`,
  read: READ,
});

export const sources = {
  hudEcfr581: ECFR58("58.1", "A", "Purpose and applicability"),
  hudEcfr582: ECFR58("58.2", "A", "Terms, abbreviations and definitions"),
  hudEcfr584: ECFR58("58.4", "A", "Assumption authority"),
  hudEcfr585: ECFR58("58.5", "A", "Related Federal laws and authorities"),
  hudEcfr586: ECFR58("58.6", "A", "Other requirements"),
  hudEcfr5813: ECFR58(
    "58.13",
    "B",
    "Responsibilities of the certifying officer",
  ),
  hudEcfr5822: ECFR58(
    "58.22",
    "C",
    "Limitations on activities pending clearance",
  ),
  hudEcfr5834: ECFR58("58.34", "D", "Exempt activities"),
  hudEcfr5835: ECFR58("58.35", "D", "Categorical exclusions"),
  hudEcfr5836: ECFR58("58.36", "D", "Environmental assessments"),
  hudEcfr5837: ECFR58(
    "58.37",
    "D",
    "Environmental impact statement determinations",
  ),
  hudEcfr5838: ECFR58("58.38", "D", "Environmental review record"),
  hudEcfr5840: ECFR58("58.40", "E", "Preparing the environmental assessment"),
  hudEcfr5843: ECFR58(
    "58.43",
    "E",
    "Dissemination and/or publication of the findings of no significant impact",
  ),
  hudEcfr5845: ECFR58("58.45", "E", "Public comment periods"),
  hudEcfr5846: ECFR58(
    "58.46",
    "E",
    "Time delays for exceptional circumstances",
  ),
  hudEcfr5871: ECFR58(
    "58.71",
    "H",
    "Request for release of funds and certification",
  ),
  hudEcfr5872: ECFR58(
    "58.72",
    "H",
    "HUD or State actions on RROFs and certifications",
  ),
  hudEcfr5874: ECFR58("58.74", "H", "Time for objecting"),
  hudEcfr5875: ECFR58("58.75", "H", "Permissible bases for objections"),
  hudOrientation: {
    title: "Orientation to Environmental Reviews",
    publisher: "HUD Exchange, U.S. Department of Housing and Urban Development",
    url: "https://www.hudexchange.info/programs/environmental-review/orientation-to-environmental-reviews/",
    read: READ,
  },
  hudErPage: {
    title:
      "Environmental Review (including the 21st Century ROAD to Housing Act notice)",
    publisher: "HUD Exchange, U.S. Department of Housing and Urban Development",
    url: "https://www.hudexchange.info/programs/environmental-review/",
    read: READ,
  },
  hudHeros: {
    title: "HEROS: HUD Environmental Review Online System",
    publisher: "HUD Exchange, U.S. Department of Housing and Urban Development",
    url: "https://www.hudexchange.info/programs/environmental-review/heros/",
    read: READ,
  },
  hudRadon: {
    title: "HUD's Departmental Radon Policy Notice (Notice CPD-23-103)",
    publisher: "HUD Exchange, U.S. Department of Housing and Urban Development",
    url: "https://www.hudexchange.info/programs/environmental-review/huds-departmental-radon-policy-notice/",
    read: READ,
  },
  hudEaFormat: {
    title:
      "Environmental Assessment: Determinations and Compliance Findings for HUD-assisted Projects, 24 CFR Part 58 (suggested format)",
    publisher: "U.S. Department of Housing and Urban Development",
    url: "https://www.hud.gov/sites/dfiles/CPD/documents/Part-58-EA-Format.pdf",
    read: READ,
  },
  hudCestFormat: {
    title:
      "Environmental Review for Activity/Project that is Categorically Excluded Subject to Section 58.5 (suggested CEST format)",
    publisher: "U.S. Department of Housing and Urban Development",
    url: "https://www.hud.gov/sites/dfiles/CPD/documents/Part-58-CEST-Format.pdf",
    read: READ,
  },
  hudRoadAct: {
    title:
      "21st Century ROAD to Housing Act, Pub. L. 119-101, sections 206 and 501(l)",
    publisher: "GovInfo",
    url: "https://www.govinfo.gov/content/pkg/PLAW-119publ101/html/PLAW-119publ101.htm",
    published: "2026-07-11",
    read: READ,
  },
  hudPart50Ifr: {
    title:
      "Removal of Environmental Clearance Officer Review and Comment for Assessments for Projects Over 200 Lots/Dwelling Units or Beds (interim final rule), 91 FR 30209",
    publisher:
      "U.S. Department of Housing and Urban Development, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/05/22/2026-10356/removal-of-environmental-clearance-officer-review-and-comment-for-assessments-for-projects-over-200",
    published: "2026-05-22",
    read: READ,
  },
  hudNoiseRule: {
    title:
      "Revising HUD's Noise Abatement and Control Regulations (final rule), 91 FR 35624",
    publisher:
      "U.S. Department of Housing and Urban Development, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/06/12/2026-11849/revising-huds-noise-abatement-and-control-regulations",
    published: "2026-06-12",
    read: READ,
  },
  hudFloodProposed: {
    title:
      "Rescission of Floodplain Management and Protection of Wetlands; Minimum Property Standards for Flood Hazard Exposure; Building to the Federal Flood Risk Management Standard (proposed rule), 91 FR 42685",
    publisher:
      "U.S. Department of Housing and Urban Development, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/07/10/2026-13939/rescission-of-floodplain-management-and-protection-of-wetlands-minimum-property-standards-for-flood",
    published: "2026-07-10",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/hud-environmental-review",
  parent: "/for/nepa",
  family: "federal",
  name: "HUD environmental review",
  title: "24 CFR Part 58: HUD Environmental Review Guide",
  description:
    "24 CFR Part 58 explained: responsible entities vs HUD under Part 50, levels of review, the ERR, public notices, the RROF (HUD-7015.15) and HEROS.",
  eyebrow: "HUD environmental review",
  h1: "24 CFR Part 58: how a HUD environmental review works, from exemption to release of funds",
  primaryKeyword: "24 cfr part 58",
  secondaryKeywords: [
    "hud environmental review",
    "environmental review record",
    "part 58 environmental review",
    "24 cfr 58.35",
    "hud part 58",
    "part 50",
  ],
  document: "Environmental Review Record",
  answer:
    "24 CFR Part 58 is HUD's rule under which a responsible entity, such as a state, city, county or tribe, takes on HUD's environmental review responsibilities under NEPA and related laws for programs such as CDBG and HOME [[hudEcfr581]] [[hudEcfr584]] [[hudOrientation]]. The responsible entity sets each project's level of review, from exempt to an environmental impact statement, and keeps an environmental review record (ERR) open to the public [[hudOrientation]] [[hudEcfr5838]]. For CEST reviews that need compliance steps, EAs and EISs, it then publishes notice and submits a Request for Release of Funds, form HUD-7015.15, before funds are committed [[hudOrientation]] [[hudCestFormat]] [[hudEcfr5822]]. When HUD performs the review itself, 24 CFR Part 50 applies [[hudOrientation]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "24 CFR part 58, for programs whose statutes let recipients assume HUD's NEPA duties [[hudEcfr581]]",
    },
    {
      label: "Prepared by",
      value:
        "The responsible entity; its Certifying Officer, often the mayor, signs [[hudOrientation]]",
    },
    {
      label: "Levels of review",
      value: "Exempt, CENST, CEST, EA or EIS [[hudOrientation]]",
    },
    {
      label: "Record",
      value:
        "An environmental review record (ERR), available for public review [[hudEcfr5838]]",
    },
    {
      label: "Release of funds",
      value:
        "RROF and certification on HUD-7015.15; HUD approves with HUD-7015.16 [[hudOrientation]]",
    },
    {
      label: "When HUD reviews",
      value: "Part 50, for example FHA housing programs [[hudOrientation]]",
    },
  ],
  hero: {
    prefix: "Draft an",
    placeholder: "I need a Part 58 environmental review for…",
    examples: [
      {
        emoji: "🏠",
        label: "Home Rehab",
        heading: "Environmental Review Record for Home Rehab",
        eyebrow: "CDBG HOUSING",
        prompt:
          "I'm the housing rehab coordinator in a city community development department in Ohio, using CDBG funds to rehabilitate a 1920s owner-occupied duplex with a new roof, furnace and windows.",
      },
      {
        emoji: "🚰",
        label: "Water Main",
        heading: "Environmental Review Record for Water Main",
        eyebrow: "PUBLIC FACILITIES",
        prompt:
          "I'm a grants administrator for a rural county in Georgia replacing 4,000 feet of aging water main in the same alignment and size with CDBG funds.",
      },
      {
        emoji: "🏘️",
        label: "Infill Townhomes",
        heading: "Environmental Review Record for Townhomes",
        eyebrow: "HOME PROGRAM",
        prompt:
          "I'm a consultant to a nonprofit developer building 16 affordable townhomes with HOME funds on a vacant 2-acre infill lot in a small Indiana city, which is the responsible entity.",
      },
      {
        emoji: "🛏️",
        label: "Motel Shelter",
        heading: "Environmental Review Record for Shelter",
        eyebrow: "HOMELESS SERVICES",
        prompt:
          "I'm on the community development staff of a city in New Mexico reviewing a nonprofit's conversion of a vacant motel into a 40-bed emergency shelter with Emergency Solutions Grant funds.",
      },
      {
        emoji: "🏡",
        label: "Tribal Housing",
        heading: "Environmental Review Record for New Homes",
        eyebrow: "TRIBAL HOUSING",
        prompt:
          "I'm the environmental reviewer for a tribe in South Dakota using Indian Housing Block Grant funds to build eight single-family homes on one site on trust land.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the environmental review record with the project description, level of review and related-law findings; every fact it can't confirm is marked for you.",
    mock: {
      project: "Owner-occupied duplex rehabilitation",
      documentTitle: "Home Rehab — Environmental Review Record (CEST)",
      summary:
        "I drafted the Home Rehab — Environmental Review Record (CEST) following HUD's suggested CEST format and your project description. A few details still need your input:",
      missing: [
        "Property address",
        "Year built",
        "SHPO response",
        "FEMA flood zone",
        "Certifying Officer",
      ],
      letterhead: {
        left: [
          "City of [INSERT: city name], Ohio",
          "Department of Community Development",
          "Responsible Entity, 24 CFR Part 58",
        ],
        right: [
          "[INSERT: office street address]",
          "[INSERT: city], OH [INSERT: ZIP code]",
        ],
      },
      meta: [
        "Level of Review: CEST, 24 CFR 58.35(a)(3)(i)",
        "Date: October 2, 2026",
      ],
      paragraphs: [
        "Project description. The City will use CDBG funds to rehabilitate an owner-occupied duplex at [INSERT: property address], built in [INSERT: year built]: roof replacement, a new furnace and window repair. The building stays at two units and in residential use.",
        "Level of review. The project is categorically excluded under 24 CFR 58.35(a)(3)(i) and subject to the laws and authorities at 58.5. The City has initiated Section 106 consultation with the Ohio State Historic Preservation Office; its finding is [INSERT: SHPO finding and date].",
        "Flood insurance. The property is in FEMA flood zone [INSERT: flood zone]. If that is a special flood hazard area, the owner must obtain and maintain flood insurance as a condition of assistance under 24 CFR 58.6(a).",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "An ERR that follows a reference review you upload or one it finds, with your project facts filled in and gaps marked",
      manual: "A blank CEST or EA format",
    },
    {
      label: "HEROS",
      eplan:
        "Drafts download as Word for your staff to enter in HEROS or keep in the ERR; ePlan does not file in HEROS",
      manual: "Writing each section from scratch in HEROS or a Word format",
    },
  ],
  sections: [
    {
      heading: "Part 58 vs Part 50: who does a HUD environmental review?",
      paragraphs: [
        "The first step is deciding whether HUD assistance falls under Part 58 or Part 50; the funding notice, program regulations or legislation usually says. Part 50 applies where HUD performs the review, such as FHA housing programs, and Part 58 where the program's statute lets a responsible entity perform it [[hudOrientation]]. Programs under Part 58 include CDBG, HOME, the Emergency Shelter Grant program, HOPWA, public housing and NAHASDA grants [[hudEcfr581]].",
        "For CDBG, HOME and the other programs listed in 58.2(a)(7)(i), the responsible entity is the recipient. For public housing agencies and nonprofits, it is the local government with land use responsibility where the project is located, or the county or State if HUD finds that infeasible [[hudEcfr582]]. Public housing agencies cannot assume the role themselves; they work with their local government under Part 58 or directly with HUD under Part 50 [[hudOrientation]].",
        "The Certifying Officer, often the mayor, signs the review and takes legal responsibility for it [[hudOrientation]]. Under Part 58 that official is the responsible Federal official under section 102 of NEPA, is subject to the jurisdiction of the Federal courts and is not represented by the Department of Justice [[hudEcfr5813]]. A tribe may choose not to assume these responsibilities for NAHASDA programs; HUD then keeps them and Part 50 applies [[hudEcfr584]].",
      ],
    },
    {
      heading: "Levels of review: exempt, CENST, CEST, EA and EIS",
      paragraphs: [
        "Extraordinary circumstances, such as an action that is unique or without precedent or unusual physical conditions on the site, can raise an excluded project to an EA or EIS [[hudEcfr582]] [[hudEcfr5835]]. HUD describes five levels of environmental review [[hudOrientation]]:",
      ],
      bullets: [
        "Exempt (58.34): studies and plans, administrative costs, public services with no physical impact, inspections, engineering and design, and similar activities; the determination is documented in writing [[hudEcfr5834]]",
        "Categorically excluded, not subject to 58.5 (CENST, 58.35(b)): tenant-based rental assistance, supportive services, operating costs and homebuyer assistance, among others; no RROF is needed [[hudEcfr5835]]",
        "Categorically excluded, subject to 58.5 (CEST, 58.35(a)): no EA or EIS, but the related laws apply [[hudEcfr5835]]",
        "Environmental assessment: any project that is not exempt or categorically excluded [[hudEcfr5836]]",
        "Environmental impact statement: a potentially significant impact, or thresholds such as 2,500 or more housing units or hospital and nursing home beds [[hudEcfr5837]]",
      ],
    },
    {
      heading: "Categorical exclusions under 24 CFR 58.35: CEST and CENST",
      paragraphs: [
        "For a CEST project, HUD's suggested format records, for each related law, whether formal compliance steps or mitigation are required. If none are, the project converts to exempt under 58.34(a)(12); if any are, the responsible entity completes them, publishes a Notice of Intent to Request Release of Funds and obtains an Authority to Use Grant Funds (HUD-7015.16) before committing funds [[hudCestFormat]] [[hudEcfr5834]].",
        "Section 58.35(a) lists the activities excluded from NEPA analysis that remain subject to the laws and authorities in 58.5 [[hudEcfr5835]]:",
      ],
      bullets: [
        "Repair or replacement of public facilities other than buildings that stay in the same use with no more than a 20 percent change in size or capacity, such as water and sewer lines, curbs, sidewalks and street repaving",
        "Removal of material and architectural barriers to accessibility",
        "Rehabilitation of 1-to-4 unit residential buildings with no density increase beyond four units and no land use change; of multifamily buildings with no more than a 20 percent density change and a rehab cost under 75 percent of replacement cost; and of non-residential structures with no more than a 20 percent change in size or capacity and no land use change",
        "Individual actions on up to four dwelling units on one site, or on scattered sites more than 2,000 feet apart with no more than four units on any site",
        "Acquisition, leasing or disposition of an existing structure, or acquisition of vacant land, retained for the same use",
      ],
    },
    {
      heading: "Related laws under 58.5 and 58.6",
      paragraphs: [
        "For CEST projects, EAs and EISs, the responsible entity must comply with the laws and authorities in 58.5 that would apply to HUD, and certify that it has [[hudEcfr585]] [[hudEcfr5835]] [[hudEcfr5840]]. Section 58.6 adds flood insurance, Coastal Barrier Resources Act and airport runway clear zone requirements, which apply even to exempt and categorically excluded activities and are addressed in the ERR [[hudEcfr586]].",
        "HUD's suggested formats list the 58.5 laws one by one, along with the noise, explosive and flammable hazard, and airport hazard standards of 24 CFR part 51 [[hudCestFormat]]:",
      ],
      bullets: [
        "Historic properties: National Historic Preservation Act section 106 and 36 CFR part 800 [[hudEcfr585]]",
        "Floodplain management and wetland protection: Executive Orders 11988 and 11990, as implemented in 24 CFR part 55 [[hudEcfr585]]",
        "Coastal zone management, sole source aquifers, endangered species, and wild and scenic rivers [[hudEcfr585]]",
        "Clean Air Act conformity and farmland protection [[hudEcfr585]]",
        "Site contamination, which under HUD's radon policy notice must consider radon; the notice took effect April 11, 2024 for most recipients and May 11, 2026 for tribes, TDHEs and the Department of Hawaiian Home Lands [[hudRadon]]",
      ],
    },
    {
      heading:
        "Notices, comment periods and the Request for Release of Funds (HUD-7015.15)",
      paragraphs: [
        "Until HUD or the State approves the RROF, neither the recipient nor any participant may commit HUD funds, or commit non-HUD funds to an activity that would have an adverse environmental impact or limit the choice of reasonable alternatives [[hudEcfr5822]]. After its comment period, the recipient submits the RROF and certification, form HUD-7015.15, executed by the Certifying Officer [[hudOrientation]] [[hudEcfr5871]]. Objections are accepted for 15 days, only on the grounds in 58.75; absent a valid objection, HUD or the State approves after that period [[hudEcfr5874]] [[hudEcfr5875]] [[hudEcfr5872]].",
        "For an EA ending in a finding of no significant impact (FONSI), the responsible entity sends the FONSI notice to interested people and groups, local news media, Tribal, Federal, State and local agencies, EPA's regional office and the HUD field office or State. It may also publish it in a newspaper or on an accessible government website, and may combine it with the Notice of Intent to Request Release of Funds (NOI-RROF) [[hudEcfr5843]]. Minimum comment periods [[hudEcfr5845]] [[hudEcfr5846]]:",
      ],
      bullets: [
        "FONSI notice: 15 days if published, 18 if mailed and posted",
        "NOI-RROF: 7 days if published, 10 if mailed and posted",
        "Combined FONSI and NOI-RROF: 15 days if published, 18 if mailed and posted",
        "30 days for a FONSI when the project draws considerable interest or controversy, resembles projects that normally need an EIS, or is unique",
      ],
    },
    {
      heading: "HEROS: HUD's Environmental Review Online System",
      paragraphs: [
        "HEROS is HUD's online system for developing, documenting and managing environmental reviews at every level, for both Part 50 and Part 58 [[hudHeros]]. It is open to CPD entitlement responsible entities for CDBG and HOME reviews, CPD staff must use it for Part 50 reviews of CPD programs, and partners without access can submit HEROS-compatible worksheets. EAs and categorically excluded projects completed in HEROS are posted online during their comment periods and archived for a year [[hudHeros]].",
        "ePlan does not file in HEROS. It drafts the review narrative and findings as a Word document that your staff enters into HEROS or keeps in the ERR file.",
      ],
    },
    {
      heading: "What changed for HUD environmental reviews in 2025 and 2026?",
      paragraphs: [
        "CEQ's NEPA regulations, 40 CFR parts 1500-1508, were removed effective April 11, 2025, and the removal was finalized on January 8, 2026 [[ceqIfr]] [[ceqFinal]]. Part 58's text still points to those removed regulations, for example in 58.13 [[hudEcfr5813]].",
        "The 21st Century ROAD to Housing Act, enacted July 11, 2026, directs HUD to reclassify more housing activities as exempt or categorically excluded, including some infill projects and small new construction, and makes certain HOME activities statutorily exempt from NEPA [[hudRoadAct]]. HUD says these changes apply only after it amends Parts 50 and 58 by rulemaking, many only to funds appropriated after that; until then, reviews follow the current rules [[hudErPage]].",
        "In Part 50, an interim final rule effective June 22, 2026 stopped sending EAs for projects over 200 units or beds to an Environmental Clearance Officer for review and comment [[hudPart50Ifr]]. A final rule effective July 13, 2026 lets the funding program office approve projects in unacceptable noise zones [[hudNoiseRule]]. A July 10, 2026 proposed rule would generally restore HUD's floodplain and wetland rules to their form before April 23, 2024 [[hudFloodProposed]].",
      ],
    },
  ],
  outline: {
    heading: "What an environmental review record contains",
    intro:
      "Section 58.38 sets what every ERR must contain [[hudEcfr5838]]. This outline follows HUD's suggested Part 58 EA format [[hudEaFormat]]; CEST and exempt reviews use shorter formats [[hudCestFormat]].",
    items: [
      {
        title: "Project information",
        detail:
          "Project name, responsible entity, grant recipient, preparer, Certifying Officer, any consultant and the project location [[hudEaFormat]].",
      },
      {
        title: "Project description",
        detail:
          "Every activity that is part of the project, grouped under 58.32, including activities HUD does not pay for [[hudEcfr5838]] [[hudOrientation]].",
      },
      {
        title: "Purpose, need and existing conditions",
        detail:
          "Why the project is needed, and the existing conditions and trends at the site [[hudEaFormat]] [[hudEcfr5840]].",
      },
      {
        title: "Funding information",
        detail:
          "Grant numbers, HUD programs and amounts, and the estimated total project cost from HUD and non-HUD sources [[hudEaFormat]].",
      },
      {
        title: "Compliance with 50.4, 58.5 and 58.6",
        detail:
          "For each law and authority, whether formal steps or mitigation are required and the determination, backed by traceable source documents [[hudEaFormat]] [[hudEcfr5838]].",
      },
      {
        title: "EA factors",
        detail:
          "An impact code from minor beneficial to significant for each factor under land development, socioeconomic, community facilities and services, natural features and energy [[hudEaFormat]].",
      },
      {
        title: "Alternatives and no action",
        detail:
          "Alternatives considered and the no action alternative [[hudEaFormat]] [[hudEcfr5840]].",
      },
      {
        title: "Mitigation measures and conditions",
        detail:
          "Measures adopted to avoid or reduce adverse impacts, to be written into project contracts and agreements [[hudEaFormat]].",
      },
      {
        title: "Determination, notices and signatures",
        detail:
          "The FONSI or finding of significant impact, the public notices, and the preparer's and Certifying Officer's signatures [[hudEcfr5840]] [[hudEcfr5838]] [[hudEaFormat]].",
      },
    ],
  },
  faq: [
    {
      question: "What is 24 CFR Part 58?",
      answer:
        "HUD's regulation for entities that assume HUD's environmental review responsibilities. Under it, a state, local government or tribe that receives assistance under programs such as CDBG and HOME reviews each project under NEPA and related federal laws, keeps an environmental review record, and requests release of funds from HUD or the State.",
    },
    {
      question: "What is the difference between Part 58 and Part 50?",
      answer:
        "Under Part 58 a responsible entity, usually a unit of local government, state or tribe, performs the review and its Certifying Officer signs it. Under Part 50 HUD performs the review itself, for example for FHA housing programs or when a local government lacks the capacity or declines to act for a non-recipient.",
    },
    {
      question: "Who does a HUD Part 58 review?",
      answer:
        "The responsible entity. For CDBG and HOME that is the grant recipient; for public housing agencies and nonprofits it is the local government with land use responsibility where the project sits. Staff or consultants prepare the review, and the Certifying Officer, often the mayor, signs it.",
    },
    {
      question: "How long does a Part 58 environmental review take?",
      answer:
        "The regulation sets minimum notice periods rather than a deadline. An EA with a combined FONSI and NOI-RROF published in a newspaper or on a government website needs at least 15 days of public comment, and HUD or the State then takes objections for 15 days after receiving the Request for Release of Funds. Exempt and CENST activities need no notice or RROF.",
    },
    {
      question: "Do I have to use HEROS?",
      answer:
        "It depends on who performs the review and for which program. HUD requires its own staff to use HEROS for many Part 50 reviews. For Part 58, HEROS is open to CPD entitlement communities for CDBG and HOME reviews and optional for several other programs; HUD Exchange's HEROS page lists the current rules by program.",
    },
    {
      question: "Can ePlan file my review in HEROS?",
      answer:
        "No. ePlan drafts the environmental review record narrative and findings from your project description and files, marks every fact it can't confirm, and downloads as Word. Your staff enters it into HEROS or keeps it in the ERR, and your Certifying Officer makes the determination.",
    },
  ],
};
