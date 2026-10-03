import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

/**
 * /for/interior-blm-nepa — Interior's NEPA procedures as BLM applies them.
 *
 * Reused existing source keys (guides/sources.ts and pages/*.ts):
 * doiFinal, doi46107, usc4336a, eisBlmEplanning.
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

export const entry: GuideContent<GuidePath> = {
  path: "/for/interior-blm-nepa",
  title: "BLM NEPA: DOI Handbook, CXs, DNAs and ePlanning",
  description:
    "BLM NEPA in 2026: the DOI NEPA Handbook, what's left of 43 CFR part 46, BLM CXs, DNAs and ePlanning.",
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
    "BLM NEPA is how the Bureau of Land Management applies the National Environmental Policy Act to its decisions on public lands, under procedures Interior sets for all its bureaus [[doiHandbook]]. Those procedures are a short 43 CFR part 46, which keeps the departmental [categorical exclusions](/for/nepa-categorical-exclusion) at 43 CFR 46.210, and the DOI NEPA Handbook, 516 DM 1 [[doiFinal]] [[doiHandbook]].",
  glance: [
    {
      label: "Regulations",
      value:
        "43 CFR part 46, final rule effective February 24, 2026 [[doiFinal]]",
    },
    {
      label: "BLM CXs",
      value:
        "DOI NEPA Handbook, Appendix 2, section 11.9; statutory CXs at 11.10 [[doiHandbook]]",
    },
    {
      label: "BLM NEPA Handbook",
      value:
        "H-1790-1, rescinded March 26, 2026; superseded by 516 DM 1 [[doiH1790Rescind]]",
    },
    {
      label: "Public register",
      value:
        "ePlanning, BLM's National NEPA Register, at eplanning.blm.gov [[eisBlmEplanning]] [[doiHandbook]]",
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
      heading: "The DOI NEPA handbook and what stays in 43 CFR part 46",
      paragraphs: [
        "Interior's final rule rescinded about 80 percent of its 2008 [NEPA regulations](/for/nepa-regulations) [[doiFinal]] [[doiNepaPage]]. The rest moved to the DOI NEPA Handbook, 516 DM 1, dated February 23, 2026, which is not codified and does not have the force of law [[doiFinal]] [[doiHandbook]]. Besides the CE sections, part 46 keeps [[doiFinal]]:",
      ],
      bullets: [
        "46.105 and 46.107: contractors and applicant-prepared [EAs](/for/nepa-environmental-assessment) and [EISs](/for/environmental-impact-statement) [[doi46107]]",
        "46.150: emergency responses",
        "46.220 and 46.225: lead and cooperating agencies",
      ],
    },
    {
      heading: "43 CFR 46.210 and BLM categorical exclusions (CXs)",
      paragraphs: [
        "43 CFR 46.210 lists twelve departmental CEs. Paragraphs (a) through (j), such as personnel actions and routine maintenance, need no documentation; (k), hazardous fuels reduction, which cannot be used within the Ninth Circuit, and (l), post-fire rehabilitation up to 4,200 acres, must be documented [[doi46210]].",
        "BLM's own CXs must be documented when set by statute, adopted under NEPA section 109 or marked with an asterisk; for most others BLM recommends documenting which CX applies [[doiHandbook]]. Interior amends Appendix 2 by Federal Register notice, as it did for timber salvage and tree density CXs on August 24, 2026 [[doiSalvageCe]] [[doiDensityCe]]. Examples [[doiHandbook]]:",
      ],
      bullets: [
        "Grazing permits continuing current management, where any unmet land health standard is not due to grazing (FLPMA 402(h)) [[doiUsc1752]]",
        "Special Recreation Permits: day use or up to 14 nights, 3 staging-area acres at most (11.9 H)",
        "Rights-of-way wholly within other compatibly developed rights-of-way (11.9 E(12))",
        "Sand and gravel disposals up to 50,000 cubic yards and 5 disturbed acres, outside riparian areas (11.9 F(10))",
        "Tree density modification on up to 5,000 acres of treatment area (11.9 C(11)) [[doiDensityCe]]",
      ],
    },
    {
      heading: "Extraordinary circumstances at 43 CFR 46.215",
      paragraphs: [
        "43 CFR 46.215 names nine extraordinary circumstances, including significant impacts on public health or safety, natural resources, historic properties, or listed species and critical habitat; highly uncertain or precedent-setting effects; limits on access to Indian sacred sites; and significant spread of noxious weeds [[doi46215]]. If modifying the action cannot remove one, the bureau prepares an EA or EIS [[doi46205]] [[doiHandbook]].",
        "Energy Policy Act of 2005 oil and gas CXs need no such review; the FLPMA grazing CX does [[doiHandbook]]. Interior's 2025 rule removed three older circumstances, highly controversial effects, possible violation of other laws and environmental justice, and the final rule kept them out [[doiFinal]].",
      ],
    },
    {
      heading:
        "Determination of NEPA adequacy (DNA): reusing an existing EA or EIS",
      paragraphs: [
        "A DNA documents the responsible official's finding that a proposed action's effects were analyzed in an existing EA or EIS, with no new circumstances or information that warrant new or supplemental analysis [[doiHandbook]].",
        'Appendix 1 asks five questions: is the action substantially the same as an analyzed alternative, in the same area or similar conditions, with an adequate range of alternatives, still valid given new information, and with similar effects? The official answers each with citations to the existing document; any "no" means more analysis [[doiHandbook]].',
      ],
    },
  ],
  outline: {
    heading: "What a BLM CX record contains",
    intro:
      "Interior prescribes no form; the record shows the CX fits and no extraordinary circumstance applies [[doiHandbook]] [[doi46205]].",
    items: [
      {
        title: "Project and NEPA number",
        detail:
          "The proposed action, location and applicant, in enough detail to show the CX fits, with the project's unique identification number [[doiHandbook]].",
      },
      {
        title: "CX cited",
        detail:
          "Such as 43 CFR 46.210(k), or DOI NEPA Handbook, Appendix 2, 11.9 H, which keeps the numbering of the former 516 DM 11.9 [[doi46210]] [[doiHandbook]] [[doi516dm11]].",
      },
      {
        title: "Fit with the CX's terms",
        detail:
          "Each limit checked: acres, nights, cubic yards or, for grazing, unchanged management and the land health finding [[doiHandbook]] [[doiUsc1752]].",
      },
      {
        title: "Multiple CXs",
        detail:
          "Which CX covers each element, and a review of the action as a whole [[doi46205]].",
      },
      {
        title: "Extraordinary circumstances review",
        detail:
          "Each of the nine circumstances at 43 CFR 46.215, unless a statute exempts the CX from review [[doi46215]] [[doiHandbook]].",
      },
      {
        title: "Plan conformance and design features",
        detail:
          "Consistency with the land use plan, and the design features, stipulations and conditions of approval [[doiHandbook]].",
      },
      {
        title: "Other laws",
        detail:
          "Where Endangered Species Act, National Historic Preservation Act and other reviews stand; Interior prefers they be met before the decision [[doiHandbook]].",
      },
      {
        title: "Decision Record",
        detail:
          "A separate decision document; the CX record itself is not one [[doiHandbook]].",
      },
    ],
  },
  faq: [
    {
      question: "Is a determination of NEPA adequacy a decision?",
      answer:
        "No. A DNA only documents that existing analysis is adequate; the bureau records the decision itself in a Decision Record or other decision document. Public involvement for a DNA is at the responsible official's discretion.",
    },
    {
      question: "Can BLM use another Interior bureau's categorical exclusions?",
      answer:
        "Yes. Any Interior bureau may use a categorical exclusion another bureau established or adopted. When several exclusions together cover one action, the combination must be documented.",
    },
    {
      question: "Where can I find BLM NEPA documents?",
      answer:
        "On ePlanning, BLM's National NEPA Register, where you can search projects by name, NEPA number or keyword, read the documents and comment during open comment periods.",
    },
    {
      question: "Can ePlan draft a BLM CX record?",
      answer:
        "Yes. Describe the action and ePlan drafts the CX record from a reference record it finds or you upload, with the category and its limits filled in and every fact it cannot confirm marked for you. The responsible official decides whether the CX applies and signs the decision.",
    },
  ],
};
