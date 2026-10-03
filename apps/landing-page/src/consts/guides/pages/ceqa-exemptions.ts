import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

// /for/ceqa-exemptions. Reused keys from nepa-pages.ts SOURCES: none.
// Sources defined here and reused by ceqa-eir.ts: exPrc21080, exPrc21108,
// exPrc21152, exPrc21167, exCeqanet, exLciAbout.

const READ = "2026-10-02";

const PRC = (section: string, about: string, published: string): Source => ({
  title: `Public Resources Code § ${section}: ${about}`,
  publisher: "California Legislative Information (leginfo.legislature.ca.gov)",
  url: `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PRC&sectionNum=${section}`,
  published,
  read: READ,
});

const CCR = (
  section: string,
  heading: string,
  id: string,
  published?: string,
): Source => ({
  title: `CEQA Guidelines, 14 CCR § ${section}: ${heading}`,
  publisher:
    "California Code of Regulations (Office of Administrative Law, Westlaw)",
  url: `https://govt.westlaw.com/calregs/Document/${id}`,
  ...(published ? { published } : {}),
  read: READ,
});

export const sources = {
  exPrc21080: PRC(
    "21080",
    "projects CEQA applies to, statutory exemptions and when an EIR is required",
    "2025-09-17",
  ),
  exPrc210801: PRC(
    "21080.1",
    "lead agency determination; limited review for housing projects that miss an exemption by a single condition",
    "2025-10-11",
  ),
  exPrc2108066: PRC(
    "21080.66",
    "exemption for housing development projects (added by AB 130)",
    "2025-10-11",
  ),
  exPrc21084: PRC(
    "21084",
    "categorical exemption classes and the statutory exceptions",
    "2014-01-01",
  ),
  exPrc21108: PRC(
    "21108",
    "state agency notices of determination and exemption",
    "2023-01-01",
  ),
  exPrc21152: PRC(
    "21152",
    "local agency notices of determination and exemption",
    "2024-01-01",
  ),
  exPrc21167: PRC("21167", "time limits for CEQA lawsuits", "2023-01-01"),
  exSb158: {
    title: "SB 158, Land use (Chapter 650, Statutes of 2025), chaptered text",
    publisher:
      "California Legislative Information (leginfo.legislature.ca.gov)",
    url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB158",
    published: "2025-10-11",
    read: READ,
  },
  exCcr15061: CCR(
    "15061",
    "Review for Exemption",
    "I878DA8645B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  exCcr15062: CCR(
    "15062",
    "Notice of Exemption",
    "I87971E4E5B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  exCcr15260: CCR(
    "15260",
    "General (Article 18, Statutory Exemptions)",
    "I8C152C535B4D11EC976B000D3A7C4BC3",
  ),
  exCcr15268: CCR(
    "15268",
    "Ministerial Projects",
    "I8C3D9BE95B4D11EC976B000D3A7C4BC3",
  ),
  exCcr15300: CCR(
    "15300",
    "Categorical Exemptions (Article 19)",
    "I8CB27DCD5B4D11EC976B000D3A7C4BC3",
  ),
  exCcr153002: CCR(
    "15300.2",
    "Exceptions",
    "I8CBBF3A85B4D11EC976B000D3A7C4BC3",
    "1998-10-26",
  ),
  exCcr153004: CCR(
    "15300.4",
    "Application by Public Agencies",
    "I8CC801935B4D11EC976B000D3A7C4BC3",
  ),
  exCcr15301: CCR(
    "15301",
    "Existing Facilities (Class 1)",
    "I8CD1777B5B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  exCcr15302: CCR(
    "15302",
    "Replacement or Reconstruction (Class 2)",
    "I8CDD5E5E5B4D11EC976B000D3A7C4BC3",
  ),
  exCcr15303: CCR(
    "15303",
    "New Construction or Conversion of Small Structures (Class 3)",
    "I8CE6FB435B4D11EC976B000D3A7C4BC3",
    "1998-10-26",
  ),
  exCcr15304: CCR(
    "15304",
    "Minor Alterations to Land (Class 4)",
    "I8CEE273B5B4D11EC976B000D3A7C4BC3",
    "1998-10-26",
  ),
  exCcr15332: CCR(
    "15332",
    "In-Fill Development Projects (Class 32)",
    "I8D95B1D65B4D11EC976B000D3A7C4BC3",
    "1998-12-23",
  ),
  exCcr15333: CCR(
    "15333",
    "Small Habitat Restoration Projects (Class 33)",
    "I8D9CDDC35B4D11EC976B000D3A7C4BC3",
    "2004-09-07",
  ),
  exCeqanet: {
    title: "About CEQAnet",
    publisher:
      "State Clearinghouse, Governor's Office of Land Use and Climate Innovation (CEQAnet)",
    url: "https://ceqanet.lci.ca.gov/Home/About",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/ceqa-exemptions",
  title: "CEQA Exemption Guide: Classes, NOE & 2025 Laws",
  description:
    "How CEQA exemptions work: statutory and categorical exemptions, the exceptions, the Notice of Exemption and AB 130 and SB 131.",
  eyebrow: "CEQA exemptions",
  h1: "CEQA exemption guide: statutory and categorical exemptions and the Notice of Exemption",
  primaryKeyword: "ceqa exemption",
  secondaryKeywords: [
    "ceqa categorical exemption",
    "notice of exemption",
    "statutory exemptions",
    "class 32 infill exemption",
    "sb 131",
    "ab 130",
    "exceptions to categorical exemptions",
  ],
  document: "Notice of Exemption",
  answer:
    "A project qualifies for a CEQA exemption when the Legislature exempted it by statute, it falls in a categorical class that no exception bars, or it can be seen with certainty it cannot have a significant effect [[exCcr15061]]. The lead agency decides [[exPrc210801]], and after approval may file a Notice of Exemption, cutting the time to sue from 180 days to 35 [[exPrc21167]] [[exCcr15062]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "Pub. Resources Code §21080(b) (statutory) and §21084 (categorical); [CEQA Guidelines](/for/ceqa) §15061 [[exPrc21080]] [[exPrc21084]] [[exCcr15061]]",
    },
    {
      label: "Categorical classes",
      value:
        "Class 1 to Class 33, CEQA Guidelines §§15301–15333 [[exCcr15300]]",
    },
    {
      label: "Notice of Exemption",
      value:
        "Optional for most exemptions; filed only after approval; Guidelines Appendix E has a form [[exCcr15062]]",
    },
    {
      label: "Filed with",
      value:
        "County clerk and State Clearinghouse (local agency); LCI, formerly OPR (state agency) [[exPrc21152]] [[exPrc21108]] [[ceqaLciAbout]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I'm a city planner and need a Notice of Exemption for…",
    examples: [
      {
        emoji: "🏘️",
        label: "Infill Housing",
        heading: "Notice of Exemption for Infill Housing",
        eyebrow: "URBAN HOUSING",
        prompt:
          "I'm a planner with a city planning department in Sacramento County reviewing a 48-unit apartment building on a 1.2-acre infill lot, and I need the exemption memo and Notice of Exemption.",
      },
      {
        emoji: "🛣️",
        label: "Culvert Repair",
        heading: "Notice of Exemption for Culvert Repair",
        eyebrow: "ROAD MAINTENANCE",
        prompt:
          "I'm an environmental planner with a county public works department replacing a failing culvert under a rural road in Sonoma County, entirely within the existing right-of-way.",
      },
      {
        emoji: "🔥",
        label: "Fuel Reduction",
        heading: "Notice of Exemption for Fuel Reduction",
        eyebrow: "WILDFIRE RISK",
        prompt:
          "I'm the CEQA coordinator at a fire protection district planning a 40-acre prescribed burn within half a mile of a 200-home subdivision in the Sierra Nevada foothills.",
      },
      {
        emoji: "🏥",
        label: "Health Clinic",
        heading: "Notice of Exemption for Health Clinic",
        eyebrow: "HEALTH CARE",
        prompt:
          "I'm a consultant for a community health center building a 12,000-square-foot federally qualified health center on a commercial lot in Fresno County.",
      },
      {
        emoji: "🌿",
        label: "Creek Restoration",
        heading: "Notice of Exemption for Creek Restoration",
        eyebrow: "HABITAT RESTORATION",
        prompt:
          "I'm a planner at a resource conservation district revegetating 3 acres of eroding creek bank with native plants in Santa Cruz County.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the exemption memo and Notice of Exemption text from your project description, for your agency to review and file; every fact it can't confirm is marked for you.",
    mock: {
      project: "48-unit infill apartments",
      documentTitle: "Notice of Exemption",
      summary:
        "I drafted the exemption memo and Notice of Exemption under Class 32, the in-fill exemption, from your description. Five details still need your input before your agency files it.",
      missing: [
        "Street address and parcel number",
        "Applicant name",
        "Planning file number",
        "Traffic, noise, air and water quality studies",
        "Date of the hazardous waste site list search",
      ],
      letterhead: {
        left: ["Planning Division", "Community Development Department"],
        right: ["[INSERT: city hall address]", "Sacramento County, California"],
      },
      meta: [
        "File No.: [INSERT: planning file number]",
        "Date: October 2, 2026",
      ],
      salutation: "To: County Clerk, County of Sacramento; State Clearinghouse",
      paragraphs: [
        "Project: construction of a 48-unit apartment building on a 1.2-acre vacant infill parcel at [INSERT: street address and APN], within city limits and surrounded by residential and commercial uses. Applicant: [INSERT: applicant name].",
        "Exempt status: Categorical Exemption, Class 32, In-Fill Development Projects (CEQA Guidelines §15332). The project is consistent with the general plan designation and zoning, the site is under five acres, and all required utilities and public services are available.",
        "Reasons: the site has no value as habitat for endangered, rare or threatened species, and the project would not have significant traffic, noise, air or water quality effects [INSERT: study citations]. No exception in §15300.2 applies; the site is not on a Government Code §65962.5 list as of [INSERT: search date].",
      ],
    },
  },
  comparison: [
    {
      label: "Precedent research",
      eplan:
        "Searches CEQAnet and agency project pages for your project and up to two similar ones",
      manual: "Search CEQAnet by hand for comparable notices",
    },
    {
      label: "Exemption memo and notice",
      eplan:
        "Exemption memo and notice text, downloadable as Word, with every gap marked",
      manual: "Fill in the notice form and write the memo from scratch",
    },
  ],
  sections: [
    {
      heading: "Statutory exemptions: what the Legislature exempted",
      paragraphs: [
        "Statutory exemptions come from the Legislature and may cover all of CEQA or only part of it [[exCcr15260]]. Many have their own code sections, like the 2025 exemptions below; section 21080(b) lists these, among others [[exPrc21080]]:",
      ],
      bullets: [
        "Ministerial projects; building permits, business licenses and final subdivision maps are presumed ministerial [[exCcr15268]]",
        "Emergency repairs to public service facilities, and actions to prevent or mitigate an emergency",
        "Repairing or replacing facilities damaged in a disaster for which the Governor proclaimed a state of emergency",
        "Projects a public agency rejects or disapproves",
      ],
    },
    {
      heading:
        "CEQA categorical exemption classes and the Class 32 infill exemption",
      paragraphs: [
        "Categorical exemptions are classes of projects the Secretary of the Natural Resources Agency has found do not have a significant effect [[exPrc21084]] [[exCcr15300]]. An agency may not require an EIR for a project in a class unless a §15300.2 exception applies [[exCcr153004]].",
        "Class 32 covers infill development that is consistent with the general plan and zoning; within city limits on a site of five acres or less, substantially surrounded by urban uses; of no value as habitat for endangered, rare or threatened species; free of significant traffic, noise, air or water quality effects; and served by all required utilities and public services [[exCcr15332]]. Other classes include:",
      ],
      bullets: [
        "Class 1, existing facilities: repair, maintenance or minor alteration with negligible or no expansion of use [[exCcr15301]]",
        "Class 2, replacement: a new structure on the same site, with substantially the same purpose and capacity [[exCcr15302]]",
        "Class 3, small structures: one home (three in urbanized areas), or a store up to 2,500 square feet [[exCcr15303]]",
        "Class 4, minor alterations to land, such as grading on slopes under 10 percent and new landscaping [[exCcr15304]]",
        "Class 33, small habitat restoration: up to five acres, with no significant effect on listed species [[exCcr15333]]",
      ],
    },
    {
      heading: "Exceptions to categorical exemptions",
      paragraphs: [
        "If any of the six exceptions in Guidelines §15300.2 applies, the categorical exemption cannot be used [[exCcr153002]]. The last three are also written into the statute [[exPrc21084]].",
      ],
      bullets: [
        "Location (Classes 3, 4, 5, 6, 11): may affect an officially designated, mapped resource of critical concern",
        "Cumulative impact: successive projects of the same type in the same place add up to a significant impact",
        "Unusual circumstances: a reasonable possibility of a significant effect due to unusual circumstances",
        "Scenic highways: may damage scenic resources, such as trees or rock outcroppings, on an official state scenic highway",
        "Hazardous waste sites: the site is on a list compiled under Government Code §65962.5",
        "Historical resources: may cause a substantial adverse change in a historical resource's significance",
      ],
    },
    {
      heading: "AB 130 and SB 131: the 2025 exemptions",
      paragraphs: [
        "AB 130 added §21080.66, exempting housing on urban sites of up to 20 acres that meet conditions on prior use, zoning, density and historic structures; a lead agency using it must file a Notice of Exemption [[ceqaAb130]] [[exPrc2108066]] [[exSb158]]. SB 131 limits review of housing that misses an exemption by a single condition to that condition's effects [[exPrc210801]], and added these exemptions, each with conditions [[ceqaSb131]]:",
      ],
      bullets: [
        "Rezonings that implement an approved housing element (§21080.085)",
        "Wildfire risk reduction near homes, such as prescribed fire, defensible space and fuel breaks (§21080.49)",
        "Day care centers, health clinics, food banks and advanced manufacturing (§21080.69)",
        "Farmworker housing, new or repaired (§21080.45) [[exSb158]]",
        "Bond-funded parks and trails; high-speed rail facilities (§§21080.57, 21080.70)",
      ],
    },
  ],
  outline: {
    heading: "What a Notice of Exemption contains",
    intro:
      "The contents Guidelines §15062 requires; Appendix E of the Guidelines has a form [[exCcr15062]]. Notices filed with the State Clearinghouse are published on [CEQAnet](/for/ceqanet) [[ceqaLciStart]] [[exCeqanet]]. A project that is not exempt usually starts with an [initial study](/for/ceqa-initial-study).",
    items: [
      {
        title: "Project description",
        detail: "A brief description of the project [[exCcr15062]].",
      },
      {
        title: "Location",
        detail:
          "A street address and cross street in an urbanized area, otherwise a specific map, preferably a USGS topographic quadrangle [[exCcr15062]].",
      },
      {
        title: "Exemption claimed",
        detail:
          "A finding that the project is exempt, citing the Guidelines section or statute it relies on [[exCcr15062]].",
      },
      {
        title: "Statement of reasons",
        detail:
          "A brief statement supporting the finding. For a categorical exemption, address the §15300.2 exceptions, since any one of them bars the exemption [[exCcr153002]].",
      },
      {
        title: "Applicant and other parties",
        detail:
          "The applicant's name, if any, and, if different, the person receiving public funding, a lease, permit or other entitlement for the project [[exCcr15062]].",
      },
      {
        title: "Filing",
        detail:
          "After approval, by the lead agency, or by the applicant with the agency's certificate of determination attached [[exPrc21152]] [[exPrc21108]].",
      },
    ],
  },
  faq: [
    {
      question: "Is a Notice of Exemption required?",
      answer:
        "Usually not. Filing is optional for most exemptions, but without a notice the time to challenge the exemption is 180 days instead of 35. A lead agency using the AB 130 housing exemption must file one.",
    },
    {
      question: "What is the common-sense exemption?",
      answer:
        "CEQA Guidelines section 15061(b)(3): where it can be seen with certainty that there is no possibility an activity may have a significant effect on the environment, the activity is not subject to CEQA.",
    },
    {
      question: "Where can I find past notices of exemption?",
      answer:
        "On CEQAnet, the State Clearinghouse's public database, which publishes the notices filed with the Clearinghouse. Search it for similar projects to see which exemption other agencies relied on.",
    },
    {
      question: "Does ePlan file the Notice of Exemption?",
      answer:
        "No. ePlan drafts the exemption memo and the notice text from your project description and marks what it could not confirm. Your lead agency decides whether the project is exempt and files the notice.",
    },
  ],
};
