import type { GuidePath } from "../paths";
// /for/hud-environmental-review.
// eCFR sections were read through eCFR's versioner API (text current as of
// 2026-10-01); the eCFR website blocks automated browsing.
import type { GuideContent, Source } from "../types";

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
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/hud-environmental-review",
  title: "24 CFR Part 58: HUD Environmental Review Guide",
  description:
    "How a HUD environmental review works under 24 CFR Part 58: levels of review, the ERR, public notices and the RROF.",
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
    "24 CFR Part 58 lets a state, local government or tribe, as the responsible entity, take on HUD's [NEPA review](/for/nepa) duties for programs such as CDBG and HOME [[hudEcfr581]] [[hudEcfr584]] [[hudOrientation]]. The entity sets each project's level of review, keeps an environmental review record (ERR) and, where required, submits a Request for Release of Funds (HUD-7015.15) before committing funds [[hudEcfr5838]] [[hudEcfr5822]] [[hudOrientation]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "24 CFR part 58; Part 50 applies when HUD does the review itself [[hudEcfr581]] [[hudOrientation]]",
    },
    {
      label: "Signed by",
      value:
        "The responsible entity's Certifying Officer, often the mayor [[hudOrientation]]",
    },
    {
      label: "Levels of review",
      value:
        "Exempt, CENST, CEST, [EA](/for/nepa-environmental-assessment) or EIS [[hudOrientation]]",
    },
    {
      label: "Release of funds",
      value:
        "Approved with an Authority to Use Grant Funds, HUD-7015.16 [[hudOrientation]] [[hudCestFormat]]",
    },
    {
      label: "Online system",
      value:
        "HEROS, HUD's Environmental Review Online System, for Part 50 and Part 58 reviews [[hudHeros]]",
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
      heading: "HUD Part 58 vs Part 50: who does the environmental review?",
      paragraphs: [
        "The funding notice, program regulations or legislation usually says which part applies. Part 50 applies where HUD performs the review, as for FHA housing programs; Part 58 applies where the program's statute lets a responsible entity perform it, as for CDBG, HOME, HOPWA, public housing and NAHASDA grants [[hudOrientation]] [[hudEcfr581]].",
        "For CDBG and HOME the responsible entity is the grant recipient; for public housing agencies and nonprofits it is the local government with land use responsibility for the site [[hudEcfr582]]. Its Certifying Officer signs as the responsible Federal official under NEPA, subject to Federal court jurisdiction and without Department of Justice representation [[hudEcfr5813]].",
      ],
    },
    {
      heading:
        "Levels of review: exempt, categorical exclusions under 24 CFR 58.35, EA and EIS",
      paragraphs: [
        "Extraordinary circumstances, such as an unprecedented action or unusual site conditions, can raise an excluded project to an EA or EIS [[hudEcfr582]] [[hudEcfr5835]]. Even exempt and CENST activities must meet the 58.6 flood insurance, coastal barrier and runway clear zone requirements [[hudEcfr586]].",
        "The 21st Century ROAD to Housing Act directs HUD to move more housing activities into the exempt and excluded levels, but only after it amends Parts 50 and 58 by rule [[hudRoadAct]] [[hudErPage]]. Until then, HUD's five levels are [[hudOrientation]]:",
      ],
      bullets: [
        "Exempt (58.34): studies, administrative costs, public services, inspections, engineering and design; documented in writing [[hudEcfr5834]]",
        "CENST (58.35(b)): tenant-based rental assistance, supportive services and operating costs; no RROF needed [[hudEcfr5835]]",
        "CEST (58.35(a)): no EA, but the 58.5 laws apply; e.g. 1-to-4 unit rehab, same-use facility repairs [[hudEcfr5835]]",
        "EA (58.36): any project that is not exempt or categorically excluded [[hudEcfr5836]]",
        "EIS (58.37): potentially significant impacts, or thresholds such as 2,500 or more housing units [[hudEcfr5837]]",
      ],
    },
    {
      heading:
        "Notices, comment periods and the Request for Release of Funds (HUD-7015.15)",
      paragraphs: [
        "A CEST project that needs no compliance steps or mitigation converts to exempt [[hudCestFormat]] [[hudEcfr5834]]. Where an RROF is needed, no participant may commit HUD funds, or non-HUD funds to an action that would harm the environment or limit alternatives, until HUD or the State approves it [[hudEcfr5822]].",
        "For an EA, the FONSI notice goes to agencies, local media and interested groups, and may be published or combined with the Notice of Intent to Request Release of Funds (NOI-RROF) [[hudEcfr5843]]. After comment, the Certifying Officer signs the RROF and certification; HUD or the State takes objections, on 58.75 grounds only, for 15 days, then approves absent a valid one [[hudEcfr5871]] [[hudEcfr5874]] [[hudEcfr5875]] [[hudEcfr5872]]. Minimum comment periods [[hudEcfr5845]] [[hudEcfr5846]]:",
      ],
      bullets: [
        "FONSI notice: 15 days if published, 18 if mailed and posted",
        "NOI-RROF: 7 days if published, 10 if mailed and posted",
        "Combined FONSI and NOI-RROF: 15 days if published, 18 if mailed and posted",
        "FONSI for a unique, controversial or EIS-like project: 30 days",
      ],
    },
  ],
  outline: {
    heading: "What an environmental review record contains",
    intro:
      "Section 58.38 sets what an ERR must contain [[hudEcfr5838]]. This outline follows HUD's suggested EA format [[hudEaFormat]]; CEST and exempt reviews use shorter ones [[hudCestFormat]]. [ESA section 7](/for/esa-section-7) consultation is one of the related laws the record documents.",
    items: [
      {
        title: "Project information",
        detail:
          "Responsible entity, grant recipient, preparer, Certifying Officer and location [[hudEaFormat]].",
      },
      {
        title: "Project description",
        detail:
          "Every activity in the project, grouped under 58.32, including those HUD does not fund [[hudEcfr5838]] [[hudOrientation]].",
      },
      {
        title: "Purpose, need and existing conditions",
        detail:
          "Why the project is needed, and current conditions and trends at the site [[hudEaFormat]] [[hudEcfr5840]].",
      },
      {
        title: "Funding",
        detail:
          "HUD programs, grant numbers and amounts, and total cost from all sources [[hudEaFormat]].",
      },
      {
        title: "Compliance with 58.5 and 58.6",
        detail:
          "For each law, whether steps or mitigation are needed: [Section 106](/for/section-106), floodplains, wetlands, species, coastal zones, air, farmland, noise, contamination and radon [[hudEaFormat]] [[hudEcfr585]] [[hudRadon]].",
      },
      {
        title: "EA factors",
        detail:
          "An impact code for each land development, socioeconomic, community facility, natural feature and energy factor [[hudEaFormat]].",
      },
      {
        title: "Alternatives and no action",
        detail:
          "Alternatives considered, and the no action alternative [[hudEaFormat]] [[hudEcfr5840]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "Measures to avoid or reduce adverse impacts, written into project contracts [[hudEaFormat]].",
      },
      {
        title: "Determination and signatures",
        detail:
          "FONSI or finding of significant impact, public notices, and the preparer's and Certifying Officer's signatures [[hudEcfr5840]] [[hudEcfr5838]] [[hudEaFormat]].",
      },
    ],
  },
  faq: [
    {
      question: "How long does a Part 58 environmental review take?",
      answer:
        "Part 58 sets minimum notice periods, not a deadline. An EA with a combined, published FONSI and NOI-RROF needs at least 15 days of comment, then 15 days for objections once HUD or the State receives the RROF. Exempt and CENST activities need neither.",
    },
    {
      question: "What is the difference between CEST and CENST?",
      answer:
        "Both are categorical exclusions under 24 CFR 58.35. CENST activities, such as tenant-based rental assistance, are not subject to the laws in 58.5 and need no RROF. CEST activities, such as small housing rehab, must meet 58.5, and need notice and an RROF if any law requires steps or mitigation.",
    },
    {
      question: "Do I have to use HEROS?",
      answer:
        "It depends on who reviews and for which program. HUD staff must use HEROS for many Part 50 reviews. Under Part 58, it is open to CPD entitlement communities for CDBG and HOME reviews and optional for several other programs; HUD Exchange lists the current rules.",
    },
    {
      question: "Can ePlan draft a Part 58 environmental review record?",
      answer:
        "Yes. Describe the project or upload a prior review, and ePlan drafts the ERR narrative and related-law findings, marking every fact it can't confirm. It downloads as Word for your staff to enter in HEROS or keep in the ERR; your Certifying Officer makes the determination.",
    },
  ],
};
