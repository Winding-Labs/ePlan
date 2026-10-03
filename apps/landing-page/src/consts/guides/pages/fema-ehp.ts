import type { GuidePath } from "../paths";
// /for/fema-ehp. Reused source keys (defined in the shared NEPA sources):
// ceqIfr, ceqFinal, usc4336c.
import type { GuideEntry, Source } from "../types";

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
  femaDhsNepaPage: {
    title: "National Environmental Policy Act Compliance",
    publisher: "U.S. Department of Homeland Security",
    url: "https://www.dhs.gov/ocrso/eed/epb/nepa",
    published: "2026-09-17",
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

export const entry: GuideEntry<GuidePath> = {
  path: "/for/fema-ehp",
  parent: "/for/nepa",
  family: "agency",
  name: "FEMA EHP review",
  title: "FEMA EHP Review: NEPA, CATEXs & Grant Checklist",
  description:
    "How FEMA EHP review works for Public Assistance and Hazard Mitigation grants: NEPA levels, Stafford Act exclusions, CATEXs, the REC and what to submit.",
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
    "FEMA EHP review is FEMA's environmental planning and historic preservation review of the actions it funds, including Public Assistance and Hazard Mitigation grants, for compliance with NEPA and other federal environmental and historic preservation laws and executive orders [[femaEhpGuidance]] [[femaPappg]] [[femaHmaGuide]]. FEMA follows Directive 108-1 and Instruction 108-1-1, reissued in August 2025, which tier off DHS's NEPA directive and instruction manual [[femaDirective]] [[femaInstruction]]. FEMA first checks for a Stafford Act statutory exclusion or a categorical exclusion, recorded in a record of environmental consideration (REC); otherwise it prepares an environmental assessment or environmental impact statement [[femaInstruction]]. The review must be complete before funds are released [[femaEhpGuidance]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "NEPA and other EHP laws; FEMA Directive 108-1 and Instruction 108-1-1 [[femaDirective]] [[femaInstruction]]",
    },
    {
      label: "Applies to",
      value:
        "FEMA-funded projects, including Public Assistance and Hazard Mitigation grants [[femaPappg]] [[femaHmaGuide]]",
    },
    {
      label: "Levels of review",
      value:
        "STATEX, CATEX with a REC, EA and FONSI, or EIS and ROD [[femaInstruction]]",
    },
    {
      label: "Statutory exclusion",
      value: "Stafford Act section 316, 42 U.S.C. 5159 [[femaUsc5159]]",
    },
    {
      label: "Applicant provides",
      value:
        "Scope of work, locations, photos, building ages, studies and agency letters [[femaPappg]] [[femaHmaGuide]]",
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
      heading: "What is a FEMA environmental review, and when is it required?",
      paragraphs: [
        "DHS/FEMA must consider the effects of its actions on the environment and historic properties, so grant-funded projects such as communication towers, building renovations and new construction go through EHP review [[femaEhpGuidance]]. The review considers floodplains, wetlands, archeological sites, historic structures, coastal areas, threatened and endangered species, critical habitat, soils, and air and water, and must be complete before funds are released [[femaEhpGuidance]].",
        "Every Public Assistance project gets an EHP review, documented in a REC included in every project [[femaPappg]]. For Hazard Mitigation Assistance, FEMA evaluates impacts, completes consultations and documents alternatives before an award is made [[femaHmaGuide]]. FEMA keeps ultimate responsibility for EHP compliance and for formal consultation with tribes and resource agencies, even when an applicant prepares the studies or documents [[femaInstruction]].",
      ],
    },
    {
      heading: "FEMA NEPA procedures after CEQ's regulations were removed",
      paragraphs: [
        "CEQ's NEPA regulations, 40 CFR parts 1500-1508, were removed effective April 11, 2025, and the removal was finalized on January 8, 2026 [[ceqIfr]] [[ceqFinal]]. FEMA reissued Directive 108-1 and Instruction 108-1-1 in August 2025 as an administrative update, and Chapter 3 of the Instruction serves as FEMA's NEPA implementing procedures [[femaDirective]] [[femaInstruction]]. Both note CEQ's guidance that agencies keep following their existing procedures while they revise them [[femaDirective]].",
        "The FEMA documents tier off DHS Directive 023-01 and Instruction Manual 023-01-001-01, Revision 01, whose Appendix A lists the categorical exclusions FEMA uses [[femaInstruction]] [[femaDhsManual]]. DHS says it is drafting revised NEPA procedures for all its components [[femaDhsNepaPage]].",
        "DHS has also adopted other agencies' categorical exclusions under NEPA section 109: 27 on June 16, 2025, and 35 on August 26, 2026 [[usc4336c]] [[femaDhs109Jun2025]] [[femaDhs109Aug2026]]. The 2026 notice names FEMA uses such as post-wildfire stream bank stabilization and backup water wells for disaster recovery [[femaDhs109Aug2026]].",
      ],
    },
    {
      heading: "Statutory exclusions under Stafford Act section 316",
      paragraphs: [
        "Stafford Act section 316 says assistance under certain Stafford Act sections that has the effect of restoring a facility substantially to its condition before the disaster or emergency is not a major Federal action significantly affecting the quality of the human environment under NEPA [[femaUsc5159]]. FEMA applies this statutory exclusion (STATEX) to actions under sections 402, 403, 407 and 502, and to section 406 work that restores a facility as it existed before the disaster [[femaStatexPage]].",
        "Section 406 work qualifies only on the same site and when it conforms substantially to the pre-existing condition, footprint and location; alternate or improved projects need NEPA review [[femaStatexPage]]. A STATEX needs no NEPA documentation, but FEMA must still comply with the NHPA, the ESA, Clean Water Act section 404 and Executive Orders 11988 and 11990 [[femaInstruction]]. Public Assistance debris removal and emergency protective measures are usually statutorily excluded, yet other laws still apply before FEMA funds the work [[femaPappg]].",
      ],
    },
    {
      heading: "FEMA categorical exclusions (CATEXs) and the REC",
      paragraphs: [
        "If no STATEX applies, FEMA staff with EHP Approval Authority check the CATEXs in Appendix A of the DHS instruction manual. If one fits and there are no extraordinary circumstances, recording a REC in the official system of record completes the NEPA process, and staff then decide which other EHP laws apply. FEMA documents every CATEX with a REC before deciding to proceed [[femaInstruction]].",
        "Extraordinary circumstances that can rule out a CATEX include potentially significant effects on public health or safety, protected species or habitats, historic properties or environmentally sensitive areas, and cumulatively significant impacts [[femaCatexPage]]. The federal assistance CATEXs in the DHS list include [[femaDhsManual]]:",
      ],
      bullets: [
        "N2: repair of structures and facilities that conforms to pre-existing design, function, location and land use, not in or affecting streams or areas seaward of the limit of moderate wave action",
        "N3: acquisition and demolition of properties from willing sellers, with the land deed-restricted in perpetuity to open space, recreation, wildlife habitat or wetland uses",
        "N7: reconstruction, elevation, retrofitting and code upgrades of pre-existing facilities in developed, already disturbed areas",
        "N8: new construction of less than one acre in undisturbed or undeveloped areas, outside undisturbed floodplains and wetlands",
        "N9: drainage, berm, water crossing and detention, retention or sediment pond projects addressing flood hazards on no more than 25 acres",
      ],
    },
    {
      heading: "When does FEMA prepare an EA or EIS?",
      paragraphs: [
        "If neither exclusion applies, FEMA scopes an EA or EIS. It prepares an EA when impacts are unknown or unlikely to be significant, for example for changes within an already developed area, and an EIS for actions likely to have significant impacts, such as extensive land use change or substantial effects on wetlands, floodplains or endangered species. An applicant FEMA finds capable may prepare the EA or EIS; FEMA reviews its sufficiency and prepares the FONSI or ROD [[femaInstruction]].",
        "EAs normally get a 30-day public comment period, 15 days for emergency actions, and at least 15 days when tiered from a completed programmatic analysis; EISs get 45 days. FONSIs and RODs carry two signatures, an EHP official with approval authority and a program official [[femaInstruction]]. FEMA may adopt other agencies' EAs and EISs, including those of HUD responsible entities [[femaInstruction]], and posts its own in a NEPA repository searchable by region, program and project type [[femaRepo]].",
      ],
    },
    {
      heading: "What does an applicant submit for FEMA EHP review?",
      paragraphs: [
        "Hazard Mitigation subapplications include an EHP checklist and, for each property, a detailed scope of work, clearly labeled maps, building photographs, the ages of all buildings and structures, and coordination letters; buildings and structures 45 years or older need at least two color photographs [[femaHmaGuide]]. Preparedness grant projects start with the EHP Screening Form, FEMA Form FF-207-FY-21-100, which requires labeled site photographs for every project [[femaScreeningForm]].",
        "For Public Assistance, FEMA asks applicants for [[femaPappg]]:",
      ],
      bullets: [
        "Address and GPS coordinates for work sites, staging areas, ground disturbance and fill sources",
        "Dimensions of all ground disturbance: length, width and depth",
        "Repair or restoration details, with materials, equipment and supplies, and staging information",
        "The facility's original construction date and later renovations",
        "Temporary and final debris disposal sites, the source of fill and the timeframe of work",
        "Maps, photographs, plans and drawings, any requested studies and surveys, and permits and agency correspondence",
      ],
    },
    {
      heading: "Which laws does FEMA review alongside NEPA?",
      paragraphs: [
        "The EHP requirements FEMA's actions most often trigger are NHPA section 106, ESA section 7, Executive Order 11988 on floodplains, Executive Order 11990 on wetlands, and NEPA. FEMA implements the two executive orders in 44 CFR part 9, and uses the Unified Federal Review process, set up under the Sandy Recovery Improvement Act of 2013, to coordinate reviews of disaster recovery projects with other agencies [[femaInstruction]]. FEMA's list of applicable laws also includes [[femaLawsPage]]:",
      ],
      bullets: [
        "Clean Water Act and Rivers and Harbors Act section 10 permits",
        "Coastal Zone Management Act and Coastal Barrier Resources Act",
        "Clean Air Act, farmland protection and the Fish and Wildlife Coordination Act",
        "Archeological and tribal laws: AHPA, ARPA, AIRFA, NAGPRA and Executive Order 13007 on Indian sacred sites",
        "Resource Conservation and Recovery Act, Wild and Scenic Rivers Act and Wilderness Act",
      ],
    },
  ],
  outline: {
    heading: "What an EHP review narrative covers",
    intro:
      "FEMA has no single form for this narrative. This outline combines what FEMA asks Public Assistance and Hazard Mitigation applicants to submit [[femaPappg]] [[femaHmaGuide]] with the summaries FEMA's own decision documents may include [[femaInstruction]].",
    items: [
      {
        title: "Purpose, need and project description",
        detail:
          "What is proposed, where and how, its objectives and why it is needed, for each site [[femaScreeningForm]] [[femaInstruction]].",
      },
      {
        title: "Locations and site conditions",
        detail:
          "Addresses and GPS coordinates for work, staging, ground disturbance and fill sites, with labeled maps and photographs [[femaPappg]] [[femaHmaGuide]].",
      },
      {
        title: "Alternatives",
        detail:
          "Alternatives that avoid or minimize impacts, including no action [[femaHmaGuide]] [[femaInstruction]].",
      },
      {
        title: "Historic and cultural resources",
        detail:
          "Construction dates of buildings and structures, and color photographs of any 45 years or older [[femaHmaGuide]] [[femaPappg]].",
      },
      {
        title: "Biological and water resources",
        detail:
          "Listed species and critical habitat, vegetation to be removed, and surface waters in the project area with their dimensions and proximity [[femaHmaGuide]].",
      },
      {
        title: "Floodplains, wetlands and coastal areas",
        detail:
          "Work in or near the floodplain or wetlands, and whether the site is in a coastal zone or a Coastal Barrier Resources System unit [[femaHmaGuide]] [[femaPappg]].",
      },
      {
        title: "Hazardous materials and debris",
        detail:
          "Known hazardous or toxic materials at the site, and debris staging and disposal sites [[femaHmaGuide]] [[femaPappg]].",
      },
      {
        title: "Connected actions and other funding",
        detail:
          "Actions connected to the project even if FEMA does not fund them, and any other federal assistance sought [[femaHmaGuide]] [[femaInstruction]].",
      },
      {
        title: "Permits, consultations and mitigation",
        detail:
          "Permits, agency correspondence, and measures to avoid or minimize impacts, with their costs in the project budget [[femaPappg]] [[femaHmaGuide]].",
      },
    ],
  },
  faq: [
    {
      question: "What does EHP stand for at FEMA?",
      answer:
        "Environmental planning and historic preservation; FEMA's grant pages also say environmental and historic preservation. It is FEMA's review of the actions it funds or carries out for compliance with NEPA, the National Historic Preservation Act, the Endangered Species Act, the floodplain and wetland executive orders and other federal laws.",
    },
    {
      question: "How long does a FEMA environmental review take?",
      answer:
        "It varies with the complexity of the scope of work, the resources affected, public notice requirements and consultation with regulatory agencies. Projects that restore a facility to its pre-disaster condition with in-kind materials can qualify for streamlined review under programmatic agreements. An environmental assessment normally adds a 30-day public comment period, and a draft EIS a 45-day period.",
    },
    {
      question: "Does FEMA NEPA review apply to emergency work?",
      answer:
        "Most Stafford Act emergency work, such as debris removal and emergency protective measures, is statutorily excluded from NEPA. FEMA must still make sure the work complies with other laws, such as the Endangered Species Act, the National Historic Preservation Act, the Clean Water Act and the floodplain executive order.",
    },
    {
      question: "What is a FEMA categorical exclusion?",
      answer:
        "A category of actions DHS has found does not normally have a significant environmental effect, listed in Appendix A of DHS Instruction Manual 023-01-001-01, such as repairing a facility to its pre-existing design. FEMA checks for extraordinary circumstances and records each one it applies in a record of environmental consideration.",
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
