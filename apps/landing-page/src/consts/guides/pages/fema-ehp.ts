import type { GuidePath } from "../paths";
// /for/fema-ehp. Reused source key (defined in the shared NEPA sources):
// usc4336c.
import type { GuideContent, Source } from "../types";

const READ = "2026-10-02";

export const sources = {
  femaDirective: {
    title:
      "FEMA Directive 108-1: Environmental Planning and Historic Preservation Responsibilities and Program Requirements",
    publisher: "Federal Emergency Management Agency",
    url: "https://www.fema.gov/sites/default/files/documents/fema_ehp_requirements_08072025.pdf",
    published: "2025-08-07",
    read: READ,
  },
  femaInstruction: {
    title:
      "FEMA Instruction 108-1-1: Implementation of the Environmental Planning and Historic Preservation Responsibilities and Program Requirements",
    publisher: "Federal Emergency Management Agency",
    url: "https://www.fema.gov/sites/default/files/documents/fema_ehp_instructions_implementation_08072025.pdf",
    published: "2025-08",
    read: READ,
  },
  femaDhsManual: {
    title:
      "DHS Instruction Manual 023-01-001-01, Revision 01: Implementation of the National Environmental Policy Act (NEPA)",
    publisher: "U.S. Department of Homeland Security (hosted by FEMA)",
    url: "https://www.fema.gov/sites/default/files/2020-07/fema_dhs_instruction-manual_023-01-001-01.pdf",
    read: READ,
  },
  femaDhs109Jun2025: {
    title:
      "Notice of Adoption of Categorical Exclusions Under Section 109 of the National Environmental Policy Act, 90 FR 25350",
    publisher: "Department of Homeland Security, Federal Register",
    url: "https://www.federalregister.gov/documents/2025/06/16/2025-10994/notice-of-adoption-of-categorical-exclusions-under-section-109-of-the-national-environmental-policy",
    published: "2025-06-16",
    read: READ,
  },
  femaDhs109Aug2026: {
    title:
      "Notice of Adoption of Categorical Exclusions Under Section 109 of the National Environmental Policy Act, 91 FR 55104",
    publisher: "Department of Homeland Security, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/08/26/2026-17364/notice-of-adoption-of-categorical-exclusions-under-section-109-of-the-national-environmental-policy",
    published: "2026-08-26",
    read: READ,
  },
  femaUsc5159: {
    title:
      "42 U.S.C. 5159 - Protection of environment (Stafford Act section 316)",
    publisher: "United States Code, 2023 edition (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap68-subchapIII-sec5159.htm",
    read: READ,
  },
  femaEhpGuidance: {
    title:
      "Environmental & Historic Preservation Guidance for FEMA Grant Applications",
    publisher: "Federal Emergency Management Agency",
    url: "https://www.fema.gov/grants/guidance-tools/environmental-historic",
    published: "2025-03-25",
    read: READ,
  },
  femaStatexPage: {
    title: "FEMA Statutory Exclusions",
    publisher: "Federal Emergency Management Agency",
    url: "https://www.fema.gov/emergency-managers/practitioners/environmental-historic/laws/nepa/statutory-exclusions",
    published: "2020-06-20",
    read: READ,
  },
  femaCatexPage: {
    title: "FEMA Categorical Exclusions",
    publisher: "Federal Emergency Management Agency",
    url: "https://www.fema.gov/emergency-managers/practitioners/environmental-historic/laws/nepa/categorical-exclusion",
    published: "2020-07-28",
    read: READ,
  },
  femaLawsPage: {
    title:
      "Descriptions of All Policies (environmental planning and historic preservation laws and executive orders)",
    publisher: "Federal Emergency Management Agency",
    url: "https://www.fema.gov/emergency-managers/practitioners/environmental-historic/laws/descriptions",
    published: "2026-09-10",
    read: READ,
  },
  femaRepo: {
    title: "National Environmental Policy Act Repository",
    publisher: "Federal Emergency Management Agency",
    url: "https://www.fema.gov/emergency-managers/practitioners/environmental-historic/nepa-repository",
    read: READ,
  },
  femaPappg: {
    title:
      "Public Assistance Program and Policy Guide, Version 5.0 Amended (FP 104-009-2), Chapter 10: Environmental and Historic Preservation",
    publisher: "Federal Emergency Management Agency",
    url: "https://www.fema.gov/sites/default/files/documents/fema_pa_pappg-5.0-amended.pdf",
    published: "2025-01-06",
    read: READ,
  },
  femaHmaGuide: {
    title: "Hazard Mitigation Assistance Program and Policy Guide, Version 2.1",
    publisher: "Federal Emergency Management Agency",
    url: "https://www.fema.gov/sites/default/files/documents/fema_hma-guide-v2.1_2025.pdf",
    published: "2025-01-20",
    read: READ,
  },
  femaScreeningForm: {
    title:
      "Environmental and Historic Preservation Screening Form (FEMA Form FF-207-FY-21-100)",
    publisher: "Federal Emergency Management Agency",
    url: "https://www.fema.gov/sites/default/files/documents/fema_ehp-screening_form_ff-207-fy-21-100_3-31-2026_0.pdf",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/fema-ehp",
  title: "FEMA EHP Review: NEPA, CATEXs & Grant Checklist",
  description:
    "How FEMA EHP review works for Public Assistance and Hazard Mitigation grants: NEPA levels, CATEXs, the REC and submittals.",
  eyebrow: "FEMA EHP review",
  h1: "FEMA EHP review: environmental and historic preservation review for FEMA grants",
  primaryKeyword: "fema ehp",
  secondaryKeywords: [
    "fema environmental review",
    "fema nepa",
    "fema categorical exclusion",
  ],
  document: "EHP Review Narrative",
  answer:
    "FEMA EHP review is FEMA's environmental planning and historic preservation review of the projects it funds, including Public Assistance and Hazard Mitigation grants, under NEPA and other federal environmental and historic preservation laws [[femaEhpGuidance]] [[femaPappg]] [[femaHmaGuide]]. Each project gets a statutory exclusion, a [categorical exclusion](/for/nepa-categorical-exclusion), an EA or an EIS, and the review must be complete before funds are released [[femaInstruction]] [[femaEhpGuidance]].",
  glance: [
    {
      label: "Procedures",
      value:
        "FEMA Directive 108-1 and Instruction 108-1-1, reissued August 2025 [[femaDirective]] [[femaInstruction]]",
    },
    {
      label: "Levels of review",
      value:
        "STATEX, CATEX with a REC, EA and FONSI, or EIS and ROD [[femaInstruction]]",
    },
    {
      label: "Applicant provides",
      value:
        "Scope of work, locations, photos, building ages, studies and agency letters [[femaPappg]] [[femaHmaGuide]]",
    },
    {
      label: "Comment periods",
      value:
        "EA 30 days, or 15 for emergency actions; EIS 45 days [[femaInstruction]]",
    },
    {
      label: "Decided by",
      value: "FEMA staff with EHP Approval Authority [[femaInstruction]]",
    },
  ],
  hero: {
    prefix: "Draft an",
    placeholder: "I need FEMA EHP review for…",
    examples: [
      {
        emoji: "🌊",
        label: "Flood Repair",
        heading: "EHP Review Narrative for Flood Repair",
        eyebrow: "PUBLIC ASSISTANCE",
        prompt:
          "I'm a county public works engineer in eastern Kentucky applying for FEMA Public Assistance to repair a flood-damaged 1950s concrete bridge over a creek in place, to its pre-disaster design.",
      },
      {
        emoji: "🏚️",
        label: "Home Buyouts",
        heading: "EHP Review Narrative for Buyouts",
        eyebrow: "HAZARD MITIGATION",
        prompt:
          "I'm the hazard mitigation officer for a small city in Missouri seeking Hazard Mitigation Grant Program funds to buy out and demolish 14 repeatedly flooded homes and keep the lots as open space.",
      },
      {
        emoji: "🛡️",
        label: "Tornado Safe Room",
        heading: "EHP Review Narrative for a Safe Room",
        eyebrow: "TORNADO SAFETY",
        prompt:
          "I'm a school district facilities director in Oklahoma applying for hazard mitigation funds to build a 6,000-square-foot community safe room on our middle school campus.",
      },
      {
        emoji: "⚡",
        label: "Backup Generator",
        heading: "EHP Review Narrative for a Generator",
        eyebrow: "CRITICAL FACILITIES",
        prompt:
          "I'm the emergency manager for a small city in Louisiana installing a 500-kW backup generator on a new concrete pad at our wastewater treatment plant with hazard mitigation funds.",
      },
      {
        emoji: "🐟",
        label: "Culvert Upsizing",
        heading: "EHP Review Narrative for a Culvert",
        eyebrow: "STORMWATER",
        prompt:
          "I'm a consultant to a town in Vermont replacing an undersized culvert on a trout stream with a larger box culvert, funded through FEMA hazard mitigation.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the EHP review narrative with the scope of work, locations and resource findings; every fact it can't confirm is marked for you.",
    mock: {
      project: "County Road 12 bridge repair",
      documentTitle: "Flood Repair — EHP Review Narrative",
      summary:
        "I drafted the Flood Repair — EHP Review Narrative from your scope of work, following the information FEMA's Public Assistance guide asks applicants for. A few details still need your input:",
      missing: [
        "Staging area GPS coordinates",
        "Year built",
        "USACE permit type",
        "IPaC species list",
        "Flood map panel",
      ],
      letterhead: {
        left: [
          "[INSERT: county name] County, Kentucky",
          "Department of Public Works",
          "FEMA Public Assistance Applicant",
        ],
        right: [
          "Disaster: DR-[INSERT: number]-KY",
          "[INSERT: office street address]",
        ],
      },
      meta: ["Project: County Road 12 Bridge Repair", "Date: October 2, 2026"],
      paragraphs: [
        "Scope of work. The County will repair the flood-damaged County Road 12 bridge over Mill Creek in place and to its pre-disaster design: replace the scoured abutment footing, reset riprap at both abutments and patch the deck. Equipment will stage on an existing gravel lot at [INSERT: GPS coordinates].",
        "NEPA. The work restores the bridge on the same site, footprint and design, so FEMA may apply the Stafford Act section 316 statutory exclusion. Other EHP laws still apply, including Section 106, Section 7 of the Endangered Species Act and Clean Water Act permitting.",
        "Resources. The bridge was built in [INSERT: year built]; color photographs of each elevation are attached. Work below the ordinary high water mark will need [INSERT: USACE permit type]. The site is in flood zone [INSERT: flood zone].",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "A narrative that follows a reference document you upload or one it finds, with your scope of work filled in and gaps marked",
      manual: "A blank scope of work and FEMA's EHP checklist",
    },
    {
      label: "Agency tools",
      eplan:
        "Reads the IPaC species lists, maps and survey reports you upload; it does not run IPaC or submit anything to FEMA",
      manual: "Copying tool results into the narrative by hand",
    },
  ],
  sections: [
    {
      heading:
        "When is a FEMA environmental review required, and under which laws?",
      paragraphs: [
        "Every Public Assistance project gets an EHP review, documented in a record of environmental consideration (REC) [[femaPappg]]; for Hazard Mitigation, FEMA completes the review before making an award [[femaHmaGuide]]. FEMA keeps responsibility for consultation with tribes and resource agencies, even when an applicant prepares the studies [[femaInstruction]].",
        "Besides NEPA, FEMA's actions most often trigger NHPA [section 106](/for/section-106), [ESA section 7](/for/esa-section-7) and the floodplain and wetland Executive Orders 11988 and 11990, implemented in 44 CFR part 9 [[femaInstruction]]. Others include Clean Water Act permits, coastal zone and coastal barrier laws, and NAGPRA [[femaLawsPage]].",
      ],
    },
    {
      heading: "Statutory exclusions under Stafford Act section 316",
      paragraphs: [
        "Stafford Act section 316 says assistance that restores a facility substantially to its pre-disaster condition is not a major Federal action under NEPA [[femaUsc5159]]. FEMA applies this statutory exclusion (STATEX) to work under sections 402, 403, 407 and 502, and to section 406 repairs that substantially restore the pre-disaster facility on the same site; alternate or improved projects need NEPA review [[femaStatexPage]].",
        "A STATEX needs no NEPA document, but FEMA must still comply with the NHPA, the ESA, Clean Water Act section 404 and the floodplain and wetland orders [[femaInstruction]]. Public Assistance debris removal and emergency protective measures are usually statutorily excluded [[femaPappg]].",
      ],
    },
    {
      heading: "FEMA categorical exclusions (CATEXs) and the REC",
      paragraphs: [
        "If no STATEX applies, FEMA checks the CATEXs in Appendix A of DHS Instruction Manual 023-01-001-01; if one fits and no extraordinary circumstances exist, recording a REC completes NEPA [[femaInstruction]] [[femaDhsManual]]. Extraordinary circumstances include potentially significant effects on health, safety, protected species, historic properties or sensitive areas [[femaCatexPage]].",
        "DHS has also adopted other agencies' CATEXs under NEPA section 109, such as post-wildfire stream bank stabilization [[usc4336c]] [[femaDhs109Jun2025]] [[femaDhs109Aug2026]]. Federal assistance CATEXs in the DHS list include [[femaDhsManual]]:",
      ],
      bullets: [
        "N2: repairs matching pre-existing design, function, location and land use, not affecting streams or coastal wave zones",
        "N3: acquisition and demolition from willing sellers, with the land deed-restricted in perpetuity to open space uses",
        "N7: reconstruction, elevation, retrofits and code upgrades of existing facilities in already disturbed areas",
        "N8: new construction under one acre, outside undisturbed floodplains and wetlands",
        "N9: drainage, berm, crossing and pond projects addressing flood hazards on 25 acres or less",
      ],
    },
    {
      heading: "When does FEMA prepare an EA or EIS?",
      paragraphs: [
        "FEMA prepares an EA when impacts are unknown or unlikely to be significant, and an EIS when significant impacts are likely, such as extensive land use change or substantial effects on wetlands, floodplains or endangered species. An applicant FEMA finds capable may prepare either; FEMA reviews it and issues the FONSI or ROD [[femaInstruction]].",
        "FEMA may adopt other agencies' [EAs](/for/nepa-environmental-assessment) and EISs [[femaInstruction]], and posts its own in a NEPA repository searchable by region, program and project type [[femaRepo]].",
      ],
    },
  ],
  outline: {
    heading: "What an EHP review narrative covers",
    intro:
      "FEMA has no single form for this narrative. This outline combines what FEMA asks Public Assistance and Hazard Mitigation applicants for [[femaPappg]] [[femaHmaGuide]].",
    items: [
      {
        title: "Purpose, need and project description",
        detail:
          "What is proposed, where and how, and why it is needed, for each site [[femaScreeningForm]] [[femaInstruction]].",
      },
      {
        title: "Locations and site conditions",
        detail:
          "Addresses and GPS coordinates for work, staging, ground disturbance and fill sites, with labeled maps and photos [[femaPappg]] [[femaHmaGuide]].",
      },
      {
        title: "Alternatives",
        detail:
          "Alternatives that avoid or minimize impacts, including no action [[femaHmaGuide]] [[femaInstruction]].",
      },
      {
        title: "Historic and cultural resources",
        detail:
          "Construction dates of buildings and structures, with at least two color photos of any 45 years or older [[femaHmaGuide]] [[femaPappg]].",
      },
      {
        title: "Biological and water resources",
        detail:
          "Listed species, critical habitat, vegetation to be removed, and nearby surface waters [[femaHmaGuide]].",
      },
      {
        title: "Floodplains, wetlands and coastal areas",
        detail:
          "Work in or near floodplains or wetlands, and any coastal zone or Coastal Barrier Resources System unit [[femaHmaGuide]] [[femaPappg]].",
      },
      {
        title: "Hazardous materials and debris",
        detail:
          "Known hazardous materials at the site, and debris staging and disposal sites [[femaHmaGuide]] [[femaPappg]].",
      },
      {
        title: "Connected actions and other funding",
        detail:
          "Connected actions, even if FEMA does not fund them, and other federal assistance sought [[femaHmaGuide]] [[femaInstruction]].",
      },
      {
        title: "Permits, consultations and mitigation",
        detail:
          "Permits, agency letters, and measures to avoid or minimize impacts, with their costs in the budget [[femaPappg]] [[femaHmaGuide]].",
      },
    ],
  },
  faq: [
    {
      question: "How long does a FEMA environmental review take?",
      answer:
        "It varies with the scope of work, the resources affected, public notice and agency consultations. Restoring a facility to its pre-disaster condition with in-kind materials can qualify for streamlined review under programmatic agreements; an EA or EIS adds a public comment period.",
    },
    {
      question: "Does FEMA NEPA review apply to emergency work?",
      answer:
        "Most Stafford Act emergency work, such as debris removal and emergency protective measures, is statutorily excluded from NEPA. FEMA must still make sure the work meets other laws, such as the Endangered Species Act, the National Historic Preservation Act, the Clean Water Act and the floodplain executive order.",
    },
    {
      question: "Can I start work before FEMA finishes the EHP review?",
      answer:
        "Generally not. FEMA may deny an application if the applicant takes action that limits the choice of reasonable alternatives before the review is complete, and work started before the review may not be funded. Emergency actions have their own exemptions.",
    },
    {
      question: "Can ePlan submit my EHP documents to FEMA?",
      answer:
        "No. ePlan drafts the EHP narrative from your scope of work and files, reads documents you upload such as species lists and surveys, and marks every fact it can't confirm. You submit the application, and FEMA makes the EHP determination.",
    },
  ],
};
