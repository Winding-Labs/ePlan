import type { Source } from "./types";

/** The date every source below was read. Shown on each page. */
export const GUIDE_SOURCES_READ_ON = "2026-10-02";

const READ = GUIDE_SOURCES_READ_ON;

const USC = (section: string, heading: string): Source => ({
  title: `42 U.S.C. ${section} - ${heading}`,
  publisher: "United States Code, 2023 edition (GovInfo)",
  url: `https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap55-subchapI-sec${section}.htm`,
  read: READ,
});

const ECFR = (citation: string, heading: string, url: string): Source => ({
  title: `${citation} - ${heading}`,
  publisher: "Electronic Code of Federal Regulations (eCFR), current",
  url,
  read: READ,
});

export const NEPA_SOURCES = {
  usc4332: USC(
    "4332",
    "Cooperation of agencies; reports; availability of information; recommendations; international and national coordination of efforts",
  ),
  usc4336: USC("4336", "Procedure for determination of level of review"),
  usc4336a: USC("4336a", "Timely and unified Federal reviews"),
  usc4336c: USC("4336c", "Adoption of categorical exclusions"),
  usc4336e: USC("4336e", "Definitions"),
  fra2023: {
    title:
      "Fiscal Responsibility Act of 2023, Pub. L. 118-5, section 321 (BUILDER Act)",
    publisher: "GovInfo",
    url: "https://www.govinfo.gov/content/pkg/PLAW-118publ5/html/PLAW-118publ5.htm",
    published: "2023-06-03",
    read: READ,
  },
  pl11921: {
    title:
      "Pub. L. 119-21, section 60026: Project sponsor opt-in fees for environmental reviews (42 U.S.C. 4336f)",
    publisher: "GovInfo",
    url: "https://www.govinfo.gov/content/pkg/PLAW-119publ21/html/PLAW-119publ21.htm",
    published: "2025-07-04",
    read: READ,
  },
  ceqIfr: {
    title:
      "Removal of National Environmental Policy Act Implementing Regulations (interim final rule), 90 FR 10610",
    publisher: "Council on Environmental Quality, Federal Register",
    url: "https://www.federalregister.gov/documents/2025/02/25/2025-03014/removal-of-national-environmental-policy-act-implementing-regulations",
    published: "2025-02-25",
    read: READ,
  },
  ceqFinal: {
    title:
      "Removal of National Environmental Policy Act Implementing Regulations (final rule), 91 FR 618",
    publisher: "Council on Environmental Quality, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/01/08/2026-00178/removal-of-national-environmental-policy-act-implementing-regulations",
    published: "2026-01-08",
    read: READ,
  },
  ceqCeGuidance: {
    title:
      "Establishing, Revising, Adopting, and Applying Categorical Exclusions Under the National Environmental Policy Act (memorandum)",
    publisher: "Council on Environmental Quality",
    url: "https://nepa.gov/sites/default/files/documents/Categorical%20Exclusion%20Guidance%202026.pdf",
    published: "2026-04-09",
    read: READ,
  },
  ceqCePage: {
    title: "Agency Categorical Exclusions",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/agency-nepa-implementation/agency-categorical-exclusions",
    read: READ,
  },
  ceqProcedures: {
    title: "Agency NEPA Procedures and Contacts",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/agency-nepa-implementation/agency-nepa-procedures-and-contacts",
    read: READ,
  },
  ceqFlowchart: {
    title: "The NEPA Process (flowchart)",
    publisher: "Council on Environmental Quality, nepa.gov",
    url: "https://nepa.gov/sites/default/files/documents/THE%20NEPA%20PROCESS-Jan2026.pdf",
    published: "2026-01",
    read: READ,
  },
  usda1b3: ECFR(
    "7 CFR 1b.3",
    "Categorical exclusions and findings of applicability and no extraordinary circumstance (USDA)",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.3",
  ),
  usda1b4: ECFR(
    "7 CFR 1b.4",
    "Categorical exclusion of USDA subcomponents and actions",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.4",
  ),
  usda1b5: ECFR(
    "7 CFR 1b.5",
    "Environmental assessments (USDA)",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.5",
  ),
  usda1b6: ECFR(
    "7 CFR 1b.6",
    "Finding of no significant impact (USDA)",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.6",
  ),
  usda1b7: ECFR(
    "7 CFR 1b.7",
    "Environmental impact statements (USDA)",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.7",
  ),
  usda1b8: ECFR(
    "7 CFR 1b.8",
    "Records of decision (USDA)",
    "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.8",
  ),
  usdaFinal: {
    title: "National Environmental Policy Act (USDA final rule), 91 FR 17062",
    publisher: "U.S. Department of Agriculture, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/04/03/2026-06537/national-environmental-policy-act",
    published: "2026-04-03",
    read: READ,
  },
  doiFinal: {
    title:
      "National Environmental Policy Act Implementing Regulations (Interior final rule), 91 FR 8738",
    publisher: "U.S. Department of the Interior, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/02/24/2026-03708/national-environmental-policy-act-implementing-regulations",
    published: "2026-02-24",
    read: READ,
  },
  doi46107: ECFR(
    "43 CFR 46.107",
    "Procedures for applicant-prepared environmental impact statements and environmental assessments (Interior)",
    "https://www.ecfr.gov/current/title-43/subtitle-A/part-46/section-46.107",
  ),
  doeProcedures: {
    title:
      "DOE National Environmental Policy Act (NEPA) Implementing Procedures",
    publisher: "U.S. Department of Energy",
    url: "https://www.energy.gov/sites/default/files/2026-07/DOE%20NEPA%20Implementing%20Procedures%2020260713.pdf",
    published: "2026-07-13",
    read: READ,
  },
  doe1021: ECFR(
    "10 CFR part 1021",
    "National Environmental Policy Act Implementing Procedures (DOE), appendix B to subpart D",
    "https://www.ecfr.gov/current/title-10/chapter-X/part-1021",
  ),
  fhwa771117: ECFR(
    "23 CFR 771.117",
    "FHWA categorical exclusions",
    "https://www.ecfr.gov/current/title-23/chapter-I/subchapter-H/part-771/section-771.117",
  ),
  fhwaFinal: {
    title:
      "National Environmental Policy Act Regulations (FHWA, FRA and FTA final rule), 91 FR 56029",
    publisher: "U.S. Department of Transportation, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/09/01/2026-17904/national-environmental-policy-act-regulations",
    published: "2026-09-01",
    read: READ,
  },
  army651: {
    title:
      "Environmental Analysis of Army Actions (AR 200-2), interim final rule rescinding 32 CFR part 651, 90 FR 29450",
    publisher: "Department of the Army, Federal Register",
    url: "https://www.federalregister.gov/documents/2025/07/03/2025-12318/environmental-analysis-of-army-actions-ar-200-2",
    published: "2025-07-03",
    read: READ,
  },
  usfs218: ECFR(
    "36 CFR 218.24",
    "Notification of opportunity to comment on proposed projects and activities (Forest Service)",
    "https://www.ecfr.gov/current/title-36/chapter-II/part-218/subpart-B/section-218.24",
  ),
  sevenCounty: {
    title:
      "Seven County Infrastructure Coalition v. Eagle County, No. 23-975 (opinion of the Court)",
    publisher: "Supreme Court of the United States",
    url: "https://www.supremecourt.gov/opinions/24pdf/23-975_m648.pdf",
    published: "2025-05-29",
    read: READ,
  },
  permitai: {
    title: "PermitAI",
    publisher: "Pacific Northwest National Laboratory (PNNL)",
    url: "https://www.pnnl.gov/projects/permitai",
    read: READ,
  },
  permitaiApps: {
    title: "AI Applications (PermitAI)",
    publisher: "Pacific Northwest National Laboratory (PNNL)",
    url: "https://www.pnnl.gov/projects/permitai/ai-applications",
    read: READ,
  },
  nepatec1: {
    title: "PolicyAI/NEPATEC1.0 dataset card",
    publisher: "Hugging Face",
    url: "https://huggingface.co/datasets/PolicyAI/NEPATEC1.0",
    read: READ,
  },
  nepatec2: {
    title:
      "National Environmental Policy Act Text Corpus (NEPATEC2.0) dataset card",
    publisher: "Hugging Face (PNNL)",
    url: "https://huggingface.co/datasets/PNNL/NEPATEC2.0",
    read: READ,
  },
  radial: {
    title: "NEPA AI",
    publisher: "Radial Spatial Ltd.",
    url: "https://www.radialspatial.com/general-9",
    read: READ,
  },
  radialEsri: {
    title: "NEPA AI by Radial Spatial ltd (Esri Partner Solution)",
    publisher: "Esri",
    url: "https://www.esri.com/partners/radial-spatial-ltd-a2TUU0000014HT72AM/nepa-ai-a2dUU000008JcEfYAK",
    read: READ,
  },
  transect: {
    title: "Environmental Risk & Renewable Site Assessment Platform",
    publisher: "Transect",
    url: "https://www.transect.com/",
    read: READ,
  },
  transectNepa: {
    title: "NEPA: Understanding Environmental Impact Assessments",
    publisher: "Transect",
    url: "https://www.transect.com/insights/nepa",
    read: READ,
  },
  permitflow: {
    title: "PermitFlow | Construction Permitting Software",
    publisher: "PermitFlow",
    url: "https://www.permitflow.com/",
    read: READ,
  },
} satisfies Record<string, Source>;
