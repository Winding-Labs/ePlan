import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

/**
 * /for/ceqanet — CEQAnet, the State Clearinghouse database, and CEQA Submit.
 *
 * Reused source keys (not redefined here):
 * - ceqa.ts: ceqaSch, ceqaPrc21152, ceqaPrc21167, ceqaGuide15105
 * - ceqa-exemptions.ts: exCeqanet
 * - ceqa-eir.ts: eirCeqanetSearch, eirCcr15094
 * - ceqa-initial-study.ts: isCcr15075
 *
 * eirCcr15094 and isCcr15075 point at Westlaw, which refuses automated reads;
 * their text was checked against Cornell LII's copy of the same sections
 * (14 CCR 15094 and 15075) on the date below.
 *
 * cnetNodRecord and cnetProjectPage are a real CEQAnet record and project page,
 * cited only to show what they look like. The hero prompts and the draft mock
 * are fictional.
 */

const READ = "2026-10-02";

const CCR = (section: string, heading: string): Source => ({
  title: `CEQA Guidelines, Cal. Code Regs., tit. 14, § ${section} - ${heading}`,
  publisher:
    "Legal Information Institute (Cornell Law School), California Code of Regulations",
  url: `https://www.law.cornell.edu/regulations/california/14-CCR-${section}`,
  read: READ,
});

export const sources = {
  cnetSubmission: {
    title: "Environmental Document Submission",
    publisher:
      "State Clearinghouse, Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/sch/document-submission/",
    read: READ,
  },
  cnetFaq: {
    title: "State Clearinghouse Frequently Asked Questions",
    publisher:
      "State Clearinghouse, Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/sch/faq/",
    read: READ,
  },
  cnetNodForm: {
    title: "Notice of Determination form (CEQA Guidelines Appendix D)",
    publisher:
      "State Clearinghouse, Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/wp-content/uploads/20210820-NOD.pdf",
    published: "2021-08",
    read: READ,
  },
  cnetNodRecord: {
    title:
      "CEQAnet record, SCH No. 2026080188: Notice of Determination, Alternative Education Campus Project (Sanger Unified School District)",
    publisher: "State Clearinghouse, LCI (CEQAnet)",
    url: "https://ceqanet.lci.ca.gov/2026080188/2",
    published: "2026-09-25",
    read: READ,
  },
  cnetProjectPage: {
    title:
      "CEQAnet project page, SCH No. 2026080188: Alternative Education Campus Project (2 documents)",
    publisher: "State Clearinghouse, LCI (CEQAnet)",
    url: "https://ceqanet.lci.ca.gov/Project/2026080188",
    read: READ,
  },
  cnetFgc7114: {
    title:
      "Cal. Fish and Game Code § 711.4 - Filing fees for projects subject to CEQA",
    publisher:
      "California Legislative Information (leginfo.legislature.ca.gov)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=711.4.&lawCode=FGC",
    published: "2025-01-01",
    read: READ,
  },
  cnetGuide15205: CCR("15205", "Review by state agencies"),
  cnetGuide15206: CCR(
    "15206",
    "Projects of statewide, regional, or areawide significance",
  ),
  cnetGuide15373: CCR("15373", "Notice of determination"),
} satisfies Record<string, Source>;

export const entry: GuideContent<GuidePath> = {
  path: "/for/ceqanet",
  title: "CEQAnet: Search the CEQA State Clearinghouse",
  description:
    "What CEQAnet holds, how to search it for CEQA precedent by document type, agency and county, SCH numbers and CEQA Submit.",
  eyebrow: "CEQAnet",
  h1: "CEQAnet: searching the State Clearinghouse database and reading what you find",
  primaryKeyword: "ceqanet",
  secondaryKeywords: [
    "ceqa net",
    "ceqa state clearinghouse",
    "ceqa submit",
    "state clearinghouse number",
  ],
  document: "Notice of Determination",
  answer:
    "CEQAnet (also written [CEQA](/for/ceqa) Net) is the online, searchable database of the State Clearinghouse in California's Governor's Office of Land Use and Climate Innovation (LCI) [[exCeqanet]]. It holds the CEQA documents and notices agencies submit to the Clearinghouse, with full copies since March 2019, searchable by document type, agency, county and date [[ceqaSch]] [[eirCeqanetSearch]].",
  glance: [
    {
      label: "Holds",
      value:
        "NOPs, negative declarations, MNDs, EIRs, NOEs, NODs and some NEPA documents [[eirCeqanetSearch]] [[exCeqanet]]",
    },
    {
      label: "Before March 2019",
      value:
        "Record only, no file; ask the lead agency for a copy [[cnetSubmission]]",
    },
    {
      label: "Coverage",
      value:
        "Only what is submitted to the Clearinghouse, not every CEQA document [[exCeqanet]]",
    },
    {
      label: "Legal review",
      value:
        "None; LCI posts documents as received, without checking legal adequacy [[exCeqanet]]",
    },
    {
      label: "Filed through",
      value:
        "CEQA Submit, the only route since November 3, 2020 [[cnetSubmission]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I'm filing a notice of determination for…",
    examples: [
      {
        emoji: "💧",
        label: "Water Tank",
        heading: "Notice of Determination for a Water Tank",
        eyebrow: "WATER DISTRICT",
        prompt:
          "I'm an environmental planner at a county water district in Placer County filing the notice of determination for a 2-million-gallon water storage tank after our board adopted the mitigated negative declaration.",
      },
      {
        emoji: "🏘️",
        label: "Subdivision",
        heading: "Notice of Determination for a Subdivision",
        eyebrow: "CITY PLANNING",
        prompt:
          "I'm a city planner in Stanislaus County preparing the notice of determination for a 120-lot subdivision the city council approved with a certified EIR and a statement of overriding considerations.",
      },
      {
        emoji: "🌉",
        label: "Bridge Replacement",
        heading: "Notice of Determination for a Bridge",
        eyebrow: "COUNTY PUBLIC WORKS",
        prompt:
          "I'm with a county public works department in Humboldt County drafting the notice of determination for a creek bridge replacement approved with a mitigated negative declaration.",
      },
      {
        emoji: "🏫",
        label: "Middle School",
        heading: "Notice of Determination for a School",
        eyebrow: "SCHOOL DISTRICT",
        prompt:
          "I'm a facilities planner at a school district in San Bernardino County filing the notice of determination for a new 600-student middle school after the board certified the EIR.",
      },
      {
        emoji: "☀️",
        label: "Solar Facility",
        heading: "Notice of Determination for a Solar Farm",
        eyebrow: "COUNTY PLANNING",
        prompt:
          "I'm a consultant to a county planning department in Kern County preparing the notice of determination for a 20-megawatt solar facility approved with a conditional use permit and a certified EIR.",
      },
    ],
  },
  draft: {
    description:
      "Describe the approval and ePlan drafts the Notice of Determination with the project description, approval date and the six determinations in the Clearinghouse form's order; every fact it can't confirm is marked for you.",
    mock: {
      project: "Ridgeview Water Tank",
      documentTitle: "Ridgeview Water Tank — Notice of Determination",
      summary:
        "The Ridgeview Water Tank — Notice of Determination draft is ready. I followed the State Clearinghouse's NOD form and marked the determinations for an adopted mitigated negative declaration. A few details still need your input:",
      missing: [
        "SCH number from the MND filing",
        "Board approval date",
        "Project parcel number",
        "Where the record can be examined",
        "CDFW filing fee or no-effect determination",
      ],
      letterhead: {
        left: [
          "Foxtail Ridge County Water District",
          "Engineering and Environmental Services",
        ],
        right: [
          "To: State Clearinghouse, Office of Land Use and Climate Innovation",
          "County Clerk, County of Placer",
          "[INSERT: county clerk address]",
        ],
      },
      meta: [
        "SCH No.: [INSERT: SCH number of the MND]",
        "Date: October 2, 2026",
      ],
      salutation:
        "Subject: Filing of Notice of Determination in compliance with Section 21152 of the Public Resources Code",
      paragraphs: [
        "Project: Ridgeview Water Storage Tank Replacement, [INSERT: location and parcel number], Placer County. The District will replace a 1950s steel tank with a 2-million-gallon welded steel tank on the same parcel and add 800 feet of transmission main.",
        "This is to advise that the Foxtail Ridge County Water District, as lead agency, approved the project on [INSERT: board approval date] and made these determinations: the project will not have a significant effect on the environment; a mitigated negative declaration was adopted; mitigation measures were made a condition of approval; and a mitigation monitoring and reporting program was adopted.",
        "The mitigated negative declaration and the record of project approval are available to the public at [INSERT: address where the record may be examined].",
      ],
    },
  },
  comparison: [
    {
      label: "Precedent research",
      eplan: "Searches CEQAnet for your project and up to two analog projects",
      manual: "Run CEQAnet searches by hand and open each record",
    },
    {
      label: "Starting point",
      eplan:
        "Your project description and the approval documents you upload as PDF or Word",
      manual: "A blank NOD form",
    },
  ],
  sections: [
    {
      heading: "How to search CEQAnet for precedent",
      paragraphs: [
        "Advanced Search looks up a State Clearinghouse number directly, or filters by date range, document type, lead agency, reviewing state agency, county, city, local action, project issue and development type. For [precedent](/for/nepa-examples), start with the document type you are drafting and your county, narrow to recent years, then add the matching project issue or development type [[eirCeqanetSearch]].",
        "A record shows the agency, dates, contacts, location, parcel numbers, nearby waterways and attachments, and downloads as CSV [[cnetNodRecord]]. Its project page lists every document filed under the same SCH number, such as an MND and its later NOD [[cnetProjectPage]]. The document type codes you will use most [[eirCeqanetSearch]]:",
      ],
      bullets: [
        "NOP: notice of preparation of a draft [EIR](/for/ceqa-environmental-impact-report)",
        "NEG and MND: negative declaration and mitigated negative declaration",
        "EIR and FIN: draft EIR and final document",
        "NOE and NOD: [notice of exemption](/for/ceqa-exemptions) and notice of determination",
        "EA, EIS and FON: NEPA environmental assessment, draft EIS and finding of no significant impact",
      ],
    },
    {
      heading: "What is a State Clearinghouse number (SCH#)?",
      paragraphs: [
        "The SCH number identifies a project. For an EIR it is assigned when the notice of preparation is submitted; otherwise, when the first document is published. Later documents use the same number [[cnetSubmission]]. The notice of determination and the Fish and Wildlife filing fee check carry it too [[eirCcr15094]] [[isCcr15075]] [[cnetFaq]].",
      ],
    },
    {
      heading: "What does the CEQA State Clearinghouse do?",
      paragraphs: [
        "The Clearinghouse distributes CEQA documents to state agencies for review, advises agencies and the public, and keeps a record of every document and notice it receives [[ceqaSch]]. State review means at least 45 days of public review for a draft EIR and 30 for a negative declaration, unless the Clearinghouse approves less, which it never does for projects of statewide, regional or areawide significance [[ceqaGuide15105]]. What goes to it:",
      ],
      bullets: [
        "Draft EIRs and negative declarations when a state agency is the lead, responsible or trustee agency [[cnetGuide15205]]",
        "Drafts for projects of statewide, regional or areawide significance, such as more than 500 dwelling units [[cnetGuide15206]]",
        "Every notice of preparation of a draft EIR [[cnetSubmission]]",
        "NEPA documents: draft EISs, environmental assessments and findings of no significant impact [[cnetSubmission]]",
      ],
    },
    {
      heading: "CEQA Submit: how documents get onto CEQAnet",
      paragraphs: [
        "Agencies file through CEQA Submit, the Clearinghouse's online portal; staff review each submission, publish it to CEQAnet and email a confirmation [[cnetSubmission]]. Lead agency staff hold Admin or Submitter roles; a consultant can only be a Submitter, a role the lead agency's Admin must approve [[cnetFaq]].",
        "Since January 1, 2024, local agencies also file NODs, and any NOE filed with the county clerk, with the Clearinghouse [[cnetSubmission]], which posts each within 24 hours for 30 days [[ceqaPrc21152]]. It won't post an NOD until the Fish and Wildlife filing fee is paid [[cnetFaq]]; filing starts a 30-day window for lawsuits [[ceqaPrc21167]].",
      ],
    },
  ],
  outline: {
    heading: "Notice of determination: what it must contain",
    intro:
      "The brief notice an agency files after approving a project [[cnetGuide15373]]: the Guidelines' minimum contents, in the order of the State Clearinghouse's form [[eirCcr15094]] [[isCcr15075]] [[cnetNodForm]].",
    items: [
      {
        title: "Addressees and filing agency",
        detail:
          "State Clearinghouse and county clerk, then the filing agency and the lead agency if different [[cnetNodForm]].",
      },
      {
        title: "State Clearinghouse number",
        detail:
          "The SCH number of the draft EIR or proposed negative declaration, if filed with the Clearinghouse [[eirCcr15094]] [[isCcr15075]].",
      },
      {
        title: "Project title, location and applicant",
        detail:
          "The title as on the draft EIR or proposed negative declaration, the street address and cross street or a map, and the applicant [[eirCcr15094]] [[isCcr15075]].",
      },
      {
        title: "Project description",
        detail: "A brief description of the project [[eirCcr15094]].",
      },
      {
        title: "Approving agency and date",
        detail:
          "The lead or responsible agency that approved the project, and the date [[eirCcr15094]] [[cnetNodForm]].",
      },
      {
        title: "Determinations",
        detail:
          "Whether there is a significant effect, an EIR or negative declaration was prepared, mitigation and a monitoring plan adopted, and findings and overriding considerations made [[eirCcr15094]] [[isCcr15075]] [[cnetNodForm]].",
      },
      {
        title: "Where the record is available",
        detail:
          "Where the final EIR or negative declaration and the record of project approval can be examined [[eirCcr15094]] [[isCcr15075]].",
      },
      {
        title: "Person undertaking the project",
        detail:
          "If not the applicant, whoever receives public funding or an entitlement [[eirCcr15094]]; local agency notices must name that person [[ceqaPrc21152]].",
      },
      {
        title: "Signature and filing fee",
        detail:
          "Signature, title and date [[cnetNodForm]], plus the Fish and Wildlife filing fee unless an exception, such as no effect on fish and wildlife, applies [[cnetFgc7114]].",
      },
    ],
  },
  faq: [
    {
      question: "Is every CEQA document on CEQAnet?",
      answer:
        "No. It holds only what was submitted to the State Clearinghouse, and not every environmental document is. For documents received before March 2019 it has the record but not the file; ask the lead agency for a copy.",
    },
    {
      question: "How do I submit a document to the State Clearinghouse?",
      answer:
        "Through CEQA Submit, the Clearinghouse's online portal; it has not taken email or paper filings since November 3, 2020. Register for a role under your lead agency, and Clearinghouse staff review each submission before publishing it to CEQAnet.",
    },
    {
      question: "How long is State Clearinghouse review?",
      answer:
        "At least 45 days for a draft EIR and 30 days for a negative declaration or mitigated negative declaration sent to the Clearinghouse. It can approve less, but never for projects of statewide, regional or areawide significance.",
    },
    {
      question: "Does ePlan file on CEQAnet or CEQA Submit?",
      answer:
        "No. ePlan is not affiliated with LCI and files nothing. Its research agent reads CEQAnet for precedent, and it drafts notices and documents for your agency to review, sign and file.",
    },
  ],
};
