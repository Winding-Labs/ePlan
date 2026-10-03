import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

/**
 * /for/interior-blm-nepa — Interior's NEPA procedures as BLM applies them.
 *
 * Reused existing source keys (guides/sources.ts and pages/*.ts):
 * doiFinal, doi46107, ceqIfr, usc4336a, eisBlmEplanning.
 */

const READ = "2026-10-02";

const ECFR_43 = (section: string, heading: string): Source => ({
  title: `43 CFR ${section} - ${heading} (Interior)`,
  publisher: "Electronic Code of Federal Regulations (eCFR), current",
  url: `https://www.ecfr.gov/current/title-43/subtitle-A/part-46/section-${section}`,
  read: READ,
});

export const sources = {
  doiHandbook: {
    title:
      "516 DM 1 - Handbook of National Environmental Policy Act Implementing Procedures (DOI NEPA Handbook)",
    publisher:
      "U.S. Department of the Interior, Electronic Library of Interior Policies",
    url: "https://www.doi.gov/document-library/handbook/516-dm-1-handbook-national-environmental-policy-act-implementing",
    published: "2026-02-23",
    read: READ,
  },
  doiNepaPage: {
    title: "National Environmental Policy Act (NEPA)",
    publisher:
      "U.S. Department of the Interior, Office of Environmental Policy and Compliance",
    url: "https://www.doi.gov/oepc/national-environmental-policy-act-nepa",
    read: READ,
  },
  doi46205: ECFR_43(
    "46.205",
    "Actions categorically excluded from further NEPA review",
  ),
  doi46210: ECFR_43("46.210", "Listing of departmental categorical exclusions"),
  doi46215: ECFR_43(
    "46.215",
    "Categorical exclusions: Extraordinary circumstances",
  ),
  doiH1790Rescind: {
    title:
      "Rescission of H-1790-1, National Environmental Policy Act Handbook (Rel. 1-1710), handbook transmittal sheet",
    publisher: "Bureau of Land Management",
    url: "https://www.blm.gov/sites/default/files/docs/2026-03/H-1790-1%2C%20Rel.%201-1710%20Rescind.pdf",
    published: "2026-03-26",
    read: READ,
  },
  doi516dm11: {
    title:
      "National Environmental Policy Act Implementing Procedures for the Bureau of Land Management (516 DM 11) (notice), 90 FR 5981",
    publisher: "U.S. Department of the Interior, Federal Register",
    url: "https://www.federalregister.gov/documents/2025/01/17/2025-01084/national-environmental-policy-act-implementing-procedures-for-the-bureau-of-land-management-516-dm",
    published: "2025-01-17",
    read: READ,
  },
  doiDensityCe: {
    title:
      "National Environmental Policy Act Implementing Procedures: Forest and Woodland Density Management Categorical Exclusion (notice), 91 FR 54744",
    publisher: "U.S. Department of the Interior, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/08/24/2026-17252/national-environmental-policy-act-implementing-procedures-forest-and-woodland-density-management",
    published: "2026-08-24",
    read: READ,
  },
  doiSalvageCe: {
    title:
      "National Environmental Policy Act Implementing Procedures: Timber Salvage Harvest Categorical Exclusion (notice), 91 FR 54739",
    publisher: "U.S. Department of the Interior, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/08/24/2026-17251/national-environmental-policy-act-implementing-procedures-timber-salvage-harvest-categorical",
    published: "2026-08-24",
    read: READ,
  },
  doiUsc1752: {
    title: "43 U.S.C. 1752 - Grazing leases and permits (FLPMA section 402)",
    publisher: "United States Code, 2023 edition (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title43/html/USCODE-2023-title43-chap35-subchapIV-sec1752.htm",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/interior-blm-nepa",
  parent: "/for/nepa",
  family: "agency",
  name: "Interior and BLM NEPA",
  title: "BLM NEPA: DOI Handbook, CXs, DNAs and ePlanning",
  description:
    "BLM NEPA in 2026: the DOI NEPA Handbook (516 DM 1), what's left of 43 CFR part 46, BLM CXs, DNAs, the rescinded H-1790-1 and ePlanning.",
  eyebrow: "Interior & BLM",
  h1: "BLM NEPA in 2026: the DOI NEPA Handbook, CX records, DNAs and ePlanning",
  primaryKeyword: "blm nepa",
  secondaryKeywords: [
    "doi nepa handbook",
    "43 cfr 46.210",
    "blm nepa handbook",
    "doi nepa",
    "determination of nepa adequacy",
    "eplanning",
  ],
  document: "Categorical Exclusion Record",
  answer:
    "BLM NEPA is the process the Bureau of Land Management uses to bring the National Environmental Policy Act into its decisions on public lands, under procedures the Department of the Interior sets for all its bureaus [[doiHandbook]]. Since Interior's final rule took effect on February 24, 2026, those procedures are a short 43 CFR part 46, which keeps the departmental categorical exclusions at 43 CFR 46.210 and the extraordinary circumstances at 46.215, plus the DOI NEPA Handbook, 516 DM 1 [[doiFinal]] [[doiHandbook]]. BLM rescinded its own NEPA handbook, H-1790-1, on March 26, 2026, and posts its NEPA projects on ePlanning, its National NEPA Register [[doiH1790Rescind]] [[eisBlmEplanning]].",
  glance: [
    {
      label: "Regulations",
      value:
        "43 CFR part 46, cut back in 2025; final rule effective February 24, 2026 [[doiFinal]]",
    },
    {
      label: "Procedures",
      value: "DOI NEPA Handbook, 516 DM 1, February 2026 [[doiHandbook]]",
    },
    {
      label: "Categorical exclusions",
      value:
        "43 CFR 46.210, plus bureau lists in Handbook Appendix 2 [[doi46210]] [[doiHandbook]]",
    },
    {
      label: "BLM NEPA Handbook",
      value: "H-1790-1, rescinded March 26, 2026 [[doiH1790Rescind]]",
    },
    {
      label: "Public register",
      value: "ePlanning, BLM's National NEPA Register [[eisBlmEplanning]]",
    },
    {
      label: "Deadlines",
      value: "EA 1 year and 75 pages; EIS 2 years and 150 pages [[usc4336a]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder:
      "I'm renewing a grazing permit on our field office and need a CX record for…",
    examples: [
      {
        emoji: "🐄",
        label: "Grazing Permit",
        heading: "CX Record for a Grazing Permit",
        eyebrow: "RANGELAND",
        prompt:
          "I'm a rangeland management specialist at a BLM field office in southern Idaho renewing a 10-year cattle grazing permit on a 22,000-acre allotment with no change in management.",
      },
      {
        emoji: "🚵",
        label: "Recreation Permit",
        heading: "CX Record for a Recreation Permit",
        eyebrow: "RECREATION PERMITS",
        prompt:
          "I'm an outdoor recreation planner at a BLM field office in Utah reviewing a one-day mountain bike race on existing trails with a 2-acre staging area.",
      },
      {
        emoji: "📶",
        label: "Fiber Right-of-Way",
        heading: "CX Record for a Fiber Right-of-Way",
        eyebrow: "RIGHTS-OF-WAY",
        prompt:
          "I'm a realty specialist at a BLM field office in Nevada processing an application to bury 3 miles of fiber optic cable inside an existing highway right-of-way.",
      },
      {
        emoji: "🪨",
        label: "Gravel Sale",
        heading: "CX Record for a Gravel Sale",
        eyebrow: "MINERAL MATERIALS",
        prompt:
          "I'm a geologist at a BLM field office in Wyoming processing a county road department's request for 20,000 cubic yards of gravel from an existing community pit.",
      },
      {
        emoji: "🔥",
        label: "Prescribed Burn",
        heading: "CX Record for a Prescribed Burn",
        eyebrow: "WILDLIFE REFUGE",
        prompt:
          "I'm the fire management officer at a national wildlife refuge in North Dakota planning a 1,200-acre prescribed burn in grassland at the edge of a town.",
      },
    ],
  },
  draft: {
    description:
      "Describe the action and ePlan drafts the CX record with the category, its limits and the extraordinary circumstances screen filled in; every fact it can't confirm is marked for you.",
    mock: {
      project: "Coyote Flat Grazing Permit Renewal",
      documentTitle: "Coyote Flat Grazing Permit Renewal — CX Record",
      summary:
        "I drafted the Coyote Flat Grazing Permit Renewal — CX Record from your description, the DOI NEPA Handbook and FLPMA section 402(h). Five details are marked for you, and the responsible official decides whether the CX applies.",
      missing: [
        "Allotment number",
        "Land health evaluation year and finding",
        "Interdisciplinary reviewers",
        "NEPA number",
        "Field office address",
      ],
      letterhead: {
        left: [
          "United States Department of the Interior",
          "Bureau of Land Management",
          "Boise District — Bruneau Field Office",
        ],
        right: [
          "[INSERT: field office street address]",
          "[INSERT: city, state ZIP]",
        ],
      },
      meta: [
        "NEPA No.: [INSERT: DOI-BLM NEPA number]",
        "Date: October 2, 2026",
      ],
      paragraphs: [
        "Proposed action. Renew the 10-year grazing permit for the Coyote Flat Allotment ([INSERT: allotment number]), about 22,000 acres in Owyhee County, Idaho, with the same livestock numbers, season of use and pasture rotation as the current permit.",
        "Categorical exclusion. The renewal falls under FLPMA section 402(h), 43 U.S.C. 1752(h): it continues current grazing management, and the [INSERT: year] land health evaluation found the allotment [INSERT: meeting standards, or not meeting them for reasons other than livestock grazing].",
        "Extraordinary circumstances. This CX requires review. The interdisciplinary team screened the action against the nine circumstances at 43 CFR 46.215, and the review is attached [INSERT: reviewer names and dates].",
      ],
    },
  },
  comparison: [
    {
      label: "Category check",
      eplan:
        "Searches eCFR, the Federal Register and agency project pages such as ePlanning for the CX text and a precedent record",
      manual:
        "Cross-checking 43 CFR 46.210, Appendix 2 and later Federal Register additions by hand",
    },
    {
      label: "Old templates",
      eplan:
        "Follows the reference you choose and marks every unconfirmed fact as a highlighted [INSERT: …] placeholder",
      manual:
        "Templates built on H-1790-1 or 516 DM 11 can carry outdated citations",
    },
  ],
  sections: [
    {
      heading:
        "DOI NEPA rules: what Interior's 2026 final rule kept in 43 CFR part 46",
      paragraphs: [
        "Interior's interim final rule of July 3, 2025 rescinded most of its 2008 NEPA regulations, which had been written to supplement CEQ's regulations, 40 CFR parts 1500-1508, removed effective April 11, 2025 [[doiFinal]] [[ceqIfr]]. The final rule, effective February 24, 2026, adopted that rescission with changes; Interior puts it at about 80 percent of its prior NEPA regulations [[doiFinal]] [[doiNepaPage]].",
        "Everything not kept in regulation moved to the DOI NEPA Handbook, which Interior publishes in its Electronic Library of Interior Policies and does not codify [[doiFinal]]. The Handbook says its procedures do not have the force or effect of law [[doiHandbook]]. What stays in 43 CFR part 46 [[doiFinal]]:",
      ],
      bullets: [
        "46.105 and 46.107: bureau-directed contractors and applicant-prepared EAs and EISs [[doi46107]]",
        "46.150: emergency responses",
        "46.205, 46.210 and 46.215: categorical exclusions, the departmental CE list and extraordinary circumstances",
        "46.220 and 46.225: lead and cooperating agencies, added in the final rule",
      ],
    },
    {
      heading: "The DOI NEPA handbook (516 DM 1): what it covers",
      paragraphs: [
        "The Department of the Interior Handbook of National Environmental Policy Act Implementing Procedures, 516 DM 1, is dated February 23, 2026, and together with 43 CFR part 46 makes up Interior's NEPA procedures for every bureau. Its parts cover when NEPA applies and the level of review, categorical exclusions, EAs and FONSIs, notices of intent, EIS page limits and deadlines, reliance on existing documents, decision documents, and applicant-prepared documents [[doiHandbook]].",
        "Appendix 1 gives bureaus implementation guidance, including a CE and extraordinary circumstances review protocol and a method for using existing NEPA reviews. Appendix 2 lists each bureau's categorical exclusions. Cite it as, for example, DOI NEPA Handbook § 2.3(a)(3), or for a CE, DOI NEPA Handbook, Appendix 2, followed by the section and paragraph [[doiHandbook]].",
        "Interior amends Appendix 2 by Federal Register notice. On August 24, 2026, it added two BLM forestry CEs, one for timber salvage harvest and one for tree density management [[doiSalvageCe]] [[doiDensityCe]].",
      ],
    },
    {
      heading: "Is the BLM NEPA handbook (H-1790-1) still in effect?",
      paragraphs: [
        "No. BLM rescinded H-1790-1, its National Environmental Policy Act Handbook (Release 1-1710), by a handbook transmittal dated March 26, 2026. The transmittal says the DOI NEPA procedures and the DOI Handbook at 516 DM 1 superseded it, that its content largely referred to regulations since rescinded or revised, and that Interior is expected to direct bureaus to rescind agency-specific guidance in favor of DOI's [[doiH1790Rescind]].",
        "BLM's categorical exclusions used to sit in chapter 11 of part 516 of the Departmental Manual, 516 DM 11, at paragraph 11.9 [[doi516dm11]]. Appendix 2 of the Handbook keeps that 11.9 numbering for BLM's CXs, so a CX formerly cited as 516 DM 11.9 is now cited as DOI NEPA Handbook, Appendix 2, 11.9 [[doiHandbook]].",
      ],
    },
    {
      heading: "43 CFR 46.210 and BLM categorical exclusions (CXs)",
      paragraphs: [
        "43 CFR 46.210 lists twelve departmental CEs any bureau can use. Paragraphs (a) through (j), such as personnel actions, nondestructive data collection, and routine maintenance and replacement with limited context and intensity, need no documentation. Paragraph (k), hazardous fuels reduction with prescribed fire up to 4,500 acres or mechanical treatment up to 1,000 acres, not for use within the Ninth Circuit, and paragraph (l), post-fire rehabilitation up to 4,200 acres, must be documented [[doi46210]].",
        "BLM's own CXs are in Handbook Appendix 2, section 11.9, with CXs set by statute in 11.10. Documentation is required for CXs set by statute, adopted under NEPA section 109 or marked with an asterisk; for most others BLM recommends documenting which CX applies [[doiHandbook]]. Any bureau may use a CE another Interior bureau established or adopted, and combining several CEs for one action must be documented [[doi46205]]. Examples of BLM CXs:",
      ],
      bullets: [
        "Grazing permits or leases that continue current grazing management, where the allotment meets land health standards or misses them for reasons other than livestock grazing (FLPMA section 402(h)) [[doiUsc1752]] [[doiHandbook]]",
        "Special Recreation Permits for day use or up to 14 consecutive nights, with no more than 3 staging-area acres (11.9 H) [[doiHandbook]]",
        "Rights-of-way wholly within the boundaries of other compatibly developed rights-of-way (11.9 E(12)) [[doiHandbook]]",
        "Disposal of mineral materials such as sand and gravel, not exceeding 50,000 cubic yards or disturbing more than 5 acres, except in riparian areas (11.9 F(10)) [[doiHandbook]]",
        "Emergency stabilization after wildfire, flood or other events, up to 4,200 acres and completed within one year (11.9 I(1)) [[doiHandbook]]",
        "Modification of tree density on up to 5,000 acres of treatment area, effective August 24, 2026 (11.9 C(11)) [[doiDensityCe]]",
      ],
    },
    {
      heading: "Extraordinary circumstances at 43 CFR 46.215",
      paragraphs: [
        "Before relying on a CE, a bureau reviews the action for extraordinary circumstances; if one is present and the bureau cannot remove it by modifying the action, it prepares an EA or EIS [[doi46205]] [[doiHandbook]]. Some statutory CXs carry their own rules: the Energy Policy Act of 2005 oil and gas CXs need no extraordinary circumstances review, while the FLPMA grazing CX does [[doiHandbook]].",
        "The 2025 rule removed three older circumstances, for highly controversial effects, possible violation of other laws, and environmental justice, and the final rule kept them out [[doiFinal]]. Under 43 CFR 46.215, an extraordinary circumstance exists if the action may [[doi46215]]:",
      ],
      bullets: [
        "Have significant impacts on public health or safety",
        "Have significant impacts on natural resources and unique geographic characteristics, such as historic or cultural resources, park, recreation or refuge lands, wilderness, wild or scenic rivers, drinking water aquifers, prime farmlands, wetlands, floodplains, national monuments and migratory birds",
        "Have highly uncertain and potentially significant effects, or involve unique or unknown environmental risks",
        "Set a precedent for future action with potentially significant effects",
        "Have a direct relationship to other actions with potentially significant effects",
        "Have significant impacts on properties listed or eligible for listing on the National Register of Historic Places",
        "Have significant impacts on listed or proposed species or designated critical habitat",
        "Significantly limit access to and ceremonial use of Indian sacred sites on federal lands, or harm their physical integrity",
        "Contribute to potentially significant spread of noxious weeds or non-native invasive species",
      ],
    },
    {
      heading:
        "Determination of NEPA adequacy (DNA): reusing an existing EA or EIS",
      paragraphs: [
        "A determination of NEPA adequacy documents the responsible official's evaluation that a proposed action's effects lie within the scope of, and were analyzed in, existing EAs or EISs, with no new circumstances or information that warrant new or supplemental analysis. The Handbook allows a DNA, memorandum to file or other writing for this, after the official reevaluates whether the earlier analysis and assumptions remain valid [[doiHandbook]].",
        'Appendix 1 sets out five questions: whether the action is substantially the same as an analyzed alternative, in the same area or similar conditions, with an adequate range of alternatives, still valid in light of new information, and with similar effects. The official answers each with citations to the existing EA or EIS; any "no" means more analysis. Public involvement for a DNA is at the official\'s discretion [[doiHandbook]].',
        "A DNA is not a decision: the bureau documents the decision in a Decision Record or other decision document [[doiHandbook]]. Applicants may supply information such as DNA checklists, which the responsible official evaluates [[doiFinal]].",
      ],
    },
    {
      heading: "ePlanning: BLM's National NEPA Register",
      paragraphs: [
        "ePlanning gives the public access to BLM land use planning and NEPA information through the National NEPA Register, where visitors can search projects by name, NEPA number and keyword, read documents and comment during open comment periods [[eisBlmEplanning]]. The DOI NEPA Handbook names eplanning.blm.gov as BLM's site for its NEPA practice and environmental review documents [[doiHandbook]].",
        "The Handbook asks bureaus to give each project a unique identification number and use it on every related document [[doiHandbook]]; Interior's final rule cites BLM examples such as DOI-BLM-UT-C030-2025-0019-EA, a campground management EA from the St. George Field Office in Utah [[doiFinal]]. When ePlan researches precedent for a BLM project, it searches agency project pages like these for similar CX records, DNAs and EAs.",
      ],
    },
  ],
  outline: {
    heading: "What a BLM CX record contains",
    intro:
      "Interior prescribes no form for documenting a CE. It requires documentation for CEs set by statute, adopted under section 109 or marked with an asterisk, and for combinations of CEs, and the record shows the CE fits and no extraordinary circumstance is present [[doiHandbook]] [[doi46205]]. A checklist built from those requirements:",
    items: [
      {
        title: "Project and NEPA number",
        detail:
          "The proposed action, location and applicant, described well enough to show the CX fits, with the project's unique identification number [[doiHandbook]].",
      },
      {
        title: "CX cited",
        detail:
          "The citation, such as 43 CFR 46.210(k), DOI NEPA Handbook, Appendix 2, 11.9 H, or FLPMA section 402(h), and whether it was adopted from another agency [[doi46210]] [[doiHandbook]].",
      },
      {
        title: "Fit with the CX's terms",
        detail:
          "Each limit checked against the project: acres, nights, cubic yards or, for a grazing permit, unchanged management and the land health finding [[doiHandbook]] [[doiUsc1752]].",
      },
      {
        title: "Multiple CXs",
        detail:
          "When several CXs cover parts of one action, which CX covers each element, and a review of the action as a whole [[doi46205]].",
      },
      {
        title: "Extraordinary circumstances review",
        detail:
          "Each of the nine circumstances at 43 CFR 46.215 considered, unless a statute exempts the CX from review [[doi46215]] [[doiHandbook]].",
      },
      {
        title: "Plan conformance and design features",
        detail:
          "Consistency with the land use plan and with DOI and BLM manuals and handbooks, including design features, stipulations and conditions of approval [[doiHandbook]].",
      },
      {
        title: "Other laws",
        detail:
          "Where the Endangered Species Act, National Historic Preservation Act and other required reviews stand; Interior prefers they be met before the decision [[doiHandbook]].",
      },
      {
        title: "Decision Record",
        detail:
          "A separate Decision Record or other decision document, which the bureau may publish; the CX documentation itself is not a decision document [[doiHandbook]].",
      },
    ],
  },
  faq: [
    {
      question: "What is the DOI NEPA handbook?",
      answer:
        "The Department of the Interior Handbook of National Environmental Policy Act Implementing Procedures, 516 DM 1, dated February 23, 2026. Together with what remains of 43 CFR part 46, it sets Interior's NEPA procedures for every bureau, including BLM, and its Appendix 2 lists each bureau's categorical exclusions.",
    },
    {
      question: "Is the BLM NEPA handbook H-1790-1 still valid?",
      answer:
        "No. BLM rescinded H-1790-1 on March 26, 2026, stating that the DOI NEPA procedures and the DOI NEPA Handbook at 516 DM 1 superseded it.",
    },
    {
      question: "What does 43 CFR 46.210 cover?",
      answer:
        "Twelve categorical exclusions any Interior bureau can use, from personnel actions and nondestructive data collection to routine maintenance and educational activities. Most need no documentation; the two for hazardous fuels reduction and post-fire rehabilitation must be documented, and the fuels category cannot be used within the Ninth Circuit.",
    },
    {
      question: "What is a determination of NEPA adequacy?",
      answer:
        "A DNA is the responsible official's documented finding that a new proposed action was already adequately analyzed in an existing EA or EIS and that no new information or circumstances call for new analysis. The decision itself is then documented in a Decision Record.",
    },
    {
      question: "Where can I find BLM NEPA documents?",
      answer:
        "On ePlanning, BLM's National NEPA Register at eplanning.blm.gov, where you can search by project name, NEPA number or keyword and comment during open comment periods.",
    },
    {
      question: "Can ePlan draft a BLM CX record?",
      answer:
        "Yes. Describe the action and ePlan drafts the CX record from a reference record it finds or you upload, with the category and its limits filled in and every fact it cannot confirm, such as the land health finding, marked for you to fill in. The responsible official decides whether the CX applies and signs the decision.",
    },
  ],
};
