import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

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
  exCcr15306: CCR(
    "15306",
    "Information Collection (Class 6)",
    "I8CFA0E1A5B4D11EC976B000D3A7C4BC3",
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

export const entry: GuideEntry<GuidePath> = {
  path: "/for/ceqa-exemptions",
  parent: "/for/ceqa",
  family: "ceqa",
  name: "CEQA exemptions",
  title: "CEQA Exemption Guide: Classes, NOE & 2025 Laws",
  description:
    "How a CEQA exemption works: statutory and categorical exemptions, the exceptions, the Notice of Exemption's 35-day clock, and 2025's AB 130 and SB 131.",
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
    "A CEQA exemption means CEQA's environmental review does not apply to a project: the Legislature exempted it by statute, it falls in a categorical exemption class that no exception bars, or it can be seen with certainty that it cannot have a significant effect on the environment [[exCcr15061]]. The lead agency decides whether a project is exempt, and that decision is final unless challenged in court within CEQA's time limits [[exPrc210801]]. After approving an exempt project, the agency may file a Notice of Exemption, which cuts the time to sue over the exemption from 180 days to 35 [[exPrc21167]] [[exCcr15062]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "Pub. Resources Code §21080(b) (statutory) and §21084 (categorical); CEQA Guidelines §15061 [[exPrc21080]] [[exPrc21084]] [[exCcr15061]]",
    },
    {
      label: "Decided by",
      value: "The lead agency [[exPrc210801]]",
    },
    {
      label: "Document",
      value:
        "Notice of Exemption, filed only after the project is approved; Guidelines Appendix E has a form [[exCcr15062]]",
    },
    {
      label: "Filed with",
      value:
        "County clerk and State Clearinghouse (local agency); Office of Planning and Research, now LCI (state agency) [[exPrc21152]] [[exPrc21108]] [[ceqaLciAbout]]",
    },
    {
      label: "Challenge window",
      value:
        "35 days after the notice is filed; 180 days if none is [[exPrc21167]]",
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
      label: "Precedent",
      eplan:
        "Searches CEQAnet and agency project pages for your project and up to two similar ones",
      manual: "Search CEQAnet by hand for comparable notices",
    },
    {
      label: "Output",
      eplan:
        "Exemption memo and notice text, downloadable as Word, with every gap marked",
      manual: "Fill in the notice form and write the memo from scratch",
    },
  ],
  sections: [
    {
      heading: "What is a CEQA exemption?",
      paragraphs: [
        "CEQA applies to discretionary projects that public agencies carry out or approve, unless the project is exempt [[exPrc21080]]. Once a lead agency decides an activity is a project, it decides whether the project is exempt by statute, falls under a categorical exemption that no exception bars, is covered by the common-sense exemption, or will be rejected or disapproved [[exCcr15061]].",
        "The common-sense exemption, Guidelines §15061(b)(3), rests on the rule that CEQA applies only to projects that could cause a significant effect: where it can be seen with certainty that there is no possibility the activity may have one, the activity is not subject to CEQA. Each agency should list the exempt projects it handles often in its own implementing procedures [[exCcr15061]].",
      ],
    },
    {
      heading: "Statutory exemptions: what the Legislature exempted",
      paragraphs: [
        "Statutory exemptions are granted by the Legislature: some are complete exemptions from CEQA, while others cover only part of its requirements or only its timing [[exCcr15260]]. Article 18 of the Guidelines, beginning with §15260, describes them. Many sit in their own sections, including the 2025 exemptions below [[exPrc2108066]] [[ceqaSb131]]. Section 21080(b) lists these, among others [[exPrc21080]]:",
      ],
      bullets: [
        "Ministerial projects. Unless the governing law has a discretionary provision, building permits, business licenses and final subdivision maps are presumed ministerial [[exCcr15268]]",
        "Emergency repairs to public service facilities necessary to maintain service",
        "Projects to repair, restore or replace facilities damaged in a disaster where the Governor has proclaimed a state of emergency",
        "Specific actions necessary to prevent or mitigate an emergency",
        "Projects a public agency rejects or disapproves",
        "All classes of projects designated as categorically exempt under section 21084",
      ],
    },
    {
      heading: "Categorical exemption classes and examples",
      paragraphs: [
        "Categorical exemptions are classes of projects the Secretary of the Natural Resources Agency has found do not have a significant effect on the environment [[exPrc21084]]. Article 19 of the Guidelines lists them, numbered from Class 1 (§15301) to Class 33 (§15333) [[exCcr15300]] [[exCcr15301]] [[exCcr15333]]. Each agency lists the activities that fit each class in its own procedures, and it may not require an EIR for a project in a class except under the §15300.2 exceptions [[exCcr153004]].",
        "Some of the classes, with limits taken from their text:",
      ],
      bullets: [
        "Class 1, existing facilities (§15301): operation, repair, maintenance, permitting, leasing, licensing or minor alteration of existing structures and facilities with negligible or no expansion of use [[exCcr15301]]",
        "Class 2, replacement or reconstruction (§15302): a new structure on the same site with substantially the same purpose and capacity [[exCcr15302]]",
        "Class 3, new construction or conversion of small structures (§15303): for example one single-family home (up to three in urbanized areas), or a store or office of up to 2,500 square feet of floor area [[exCcr15303]]",
        "Class 4, minor alterations to land (§15304): for example grading on slopes under 10 percent outside waterways, wetlands and other listed areas, new landscaping, and fuel management within 30 feet of structures [[exCcr15304]]",
        "Class 6, information collection (§15306): data collection, research and resource evaluation that do not seriously disturb an environmental resource [[exCcr15306]]",
        "Class 33, small habitat restoration (§15333): projects of up to five acres to maintain, restore or protect habitat, with no significant effect on listed species and no hazardous materials disturbed [[exCcr15333]]",
      ],
    },
    {
      heading: "The Class 32 infill exemption",
      paragraphs: [
        "Class 32 covers in-fill development that meets five conditions: it is consistent with the general plan designation and policies and with zoning; it is within city limits on a site of no more than five acres substantially surrounded by urban uses; the site has no value as habitat for endangered, rare or threatened species; approval would not cause significant traffic, noise, air quality or water quality effects; and the site can be served by all required utilities and public services [[exCcr15332]].",
        "Like every categorical exemption, Class 32 cannot be used where a §15300.2 exception applies [[exCcr15061]]. Since SB 131, a housing development project that would qualify under Class 32, certain other classes or a statutory exemption but for a single condition gets a CEQA review limited to the effects of that condition, with exclusions such as projects on natural and protected lands [[exPrc210801]] [[ceqaSb131]].",
      ],
    },
    {
      heading: "Exceptions to categorical exemptions",
      paragraphs: [
        "Guidelines §15300.2 lists six exceptions; when one applies, the categorical exemption cannot be used [[exCcr153002]]. The statute itself bars categorical exemptions for projects that may damage scenic resources on an official state scenic highway, projects on listed hazardous waste sites, and projects that may cause a substantial adverse change to a historical resource [[exPrc21084]].",
      ],
      bullets: [
        "Location: Classes 3, 4, 5, 6 and 11 do not apply where the project may affect an environmental resource of hazardous or critical concern that is designated, precisely mapped and officially adopted [[exCcr153002]]",
        "Cumulative impact: the exemptions do not apply when successive projects of the same type in the same place have a significant cumulative impact over time [[exCcr153002]]",
        "Significant effect: there is a reasonable possibility of a significant effect due to unusual circumstances [[exCcr153002]]",
        "Scenic highways: the project may damage scenic resources, such as trees, historic buildings or rock outcroppings, within an officially designated state scenic highway [[exCcr153002]]",
        "Hazardous waste sites: the site is on a list compiled under Government Code §65962.5 [[exCcr153002]]",
        "Historical resources: the project may cause a substantial adverse change in the significance of a historical resource [[exCcr153002]]",
      ],
    },
    {
      heading: "Filing a Notice of Exemption and the 35-day clock",
      paragraphs: [
        "Filing is optional for most exemptions, and the notice may be filed only after the project is approved. It contains a brief project description, the location, a finding that the project is exempt citing the Guidelines section or statute, a brief statement of reasons, and the applicant's name [[exCcr15062]].",
        "A local agency files with the county clerk of each county where the project is located and with the State Clearinghouse; a state agency files with the Office of Planning and Research, renamed LCI in 2024. An applicant may file instead, attaching the agency's certificate of determination [[exPrc21152]] [[exPrc21108]] [[ceqaLciAbout]]. LCI runs the State Clearinghouse; notices filed with it go through CEQA Submit and are published on CEQAnet [[ceqaLciStart]] [[exCeqanet]].",
        "Filing starts a 35-day period to challenge the exemption in court. Without a notice, the period is 180 days from the decision to approve the project, or from the start of the project if there was no formal decision [[exPrc21167]] [[exCcr15062]].",
      ],
    },
    {
      heading: "AB 130 and SB 131: the 2025 exemptions",
      paragraphs: [
        "The Governor signed AB 130 (Chapter 22) and SB 131 (Chapter 24) on June 30, 2025, and both took effect immediately [[ceqaAb130]] [[ceqaSb131]]. AB 130 added §21080.66, a statutory exemption for housing development projects on sites of up to 20 acres (four for a builder's remedy project) in a city or Census urban area, previously developed or largely surrounded by urban uses, consistent with the general plan and zoning, at half or more of the density in Government Code §65583.2(c)(3)(B), and demolishing no registered historic structure, among other conditions [[exPrc2108066]].",
        "A project using §21080.66 requires the local government to invite affiliated California Native American tribes to consult, and the lead agency must file a Notice of Exemption. SB 158 added that filing rule in October 2025 and lowered the builder's remedy limit from five acres to four [[exPrc2108066]] [[exSb158]]. SB 131 added these exemptions, each with conditions in its text [[ceqaSb131]]:",
      ],
      bullets: [
        "Rezonings that implement the schedule of actions in an approved housing element, except those allowing distribution centers, oil and gas infrastructure, or construction on natural and protected lands (§21080.085)",
        "Wildfire risk reduction: prescribed fire or fuel reduction of up to 50 contiguous acres within half a mile of a subdivision of 30 or more homes, defensible space along evacuation routes and around structures in high or very high hazard zones, and fuel breaks up to 200 feet from structures (§21080.49)",
        "Day care centers outside residential areas, rural health clinics and federally qualified health centers under 50,000 square feet, and nonprofit food banks and advanced manufacturing on sites zoned only for industrial use, none on natural and protected lands (§21080.69)",
        "New farmworker housing that meets funding and other conditions, and repair or maintenance of existing farmworker housing (renumbered §21080.45 by SB 158) [[exSb158]]",
        "Public park and nonmotorized trail facilities funded in whole or part by the Safe Drinking Water, Wildfire Prevention, Drought Preparedness, and Clean Air Bond Act of 2024, and high-speed rail maintenance facilities and stations that meet conditions tied to earlier EIRs (§§21080.57, 21080.70)",
      ],
    },
  ],
  outline: {
    heading: "What a Notice of Exemption contains",
    intro:
      "The contents Guidelines §15062 requires, with the filing rules from the statute. Appendix E of the Guidelines provides a form [[exCcr15062]].",
    items: [
      {
        title: "Project description",
        detail: "A brief description of the project [[exCcr15062]].",
      },
      {
        title: "Location",
        detail:
          "A street address and cross street in an urbanized area, or a specific map, preferably a USGS 15-minute or 7.5-minute topographic quadrangle [[exCcr15062]].",
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
        title: "Applicant",
        detail: "The applicant's name, if any [[exCcr15062]].",
      },
      {
        title: "Person carrying out the project",
        detail:
          "If different from the applicant, the person receiving public funding, or a lease, permit or other entitlement, for the project [[exCcr15062]].",
      },
      {
        title: "Filing after approval",
        detail:
          "A local agency files with the county clerk and the State Clearinghouse; a state agency files with the Office of Planning and Research [[exCcr15062]] [[exPrc21152]] [[exPrc21108]].",
      },
      {
        title: "Applicant filing",
        detail:
          "An applicant may file the notice instead, attaching the agency's certificate of determination [[exPrc21152]].",
      },
    ],
  },
  faq: [
    {
      question: "What is a CEQA categorical exemption?",
      answer:
        "A class of projects listed in Article 19 of the CEQA Guidelines that the Secretary of the Natural Resources Agency has found do not have a significant effect on the environment, such as Class 1 for existing facilities or Class 32 for in-fill development. A categorical exemption cannot be used when one of the exceptions in Guidelines section 15300.2 applies.",
    },
    {
      question: "Is a Notice of Exemption required?",
      answer:
        "Usually not. Filing is optional for most exemptions, but it shortens the time to challenge the exemption in court from 180 days to 35 days. Since October 2025, the AB 130 housing exemption (Public Resources Code section 21080.66) has required the lead agency to file one.",
    },
    {
      question: "What does the Class 32 infill exemption require?",
      answer:
        "Consistency with the general plan and zoning; a site of no more than five acres within city limits, substantially surrounded by urban uses; no value as habitat for endangered, rare or threatened species; no significant traffic, noise, air quality or water quality effects; and adequate utilities and public services. None of the exceptions in Guidelines section 15300.2 may apply.",
    },
    {
      question: "What exemptions did SB 131 add?",
      answer:
        "Among others: rezonings that carry out an approved housing element; wildfire risk reduction projects such as small prescribed burns, defensible space and fuel breaks; day care centers, rural health clinics and federally qualified health centers; food banks and advanced manufacturing on industrial land; farmworker housing; and some park, trail and high-speed rail projects. Each comes with conditions.",
    },
    {
      question: "What is the common-sense exemption?",
      answer:
        "CEQA Guidelines section 15061(b)(3): where it can be seen with certainty that there is no possibility an activity may have a significant effect on the environment, the activity is not subject to CEQA.",
    },
    {
      question: "Does ePlan file the Notice of Exemption?",
      answer:
        "No. ePlan drafts the exemption memo and the notice text from your project description and marks what it could not confirm. Your lead agency decides whether the project is exempt and files the notice.",
    },
  ],
};
