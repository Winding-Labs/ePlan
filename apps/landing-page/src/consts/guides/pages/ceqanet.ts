import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

/**
 * /for/ceqanet — CEQAnet, the State Clearinghouse database, and CEQA Submit.
 *
 * Reused source keys (not redefined here):
 * - ceqa.ts: ceqaSch, ceqaLciStart, ceqaLciAbout, ceqaPrc21082dot1,
 *   ceqaPrc21108, ceqaPrc21152, ceqaPrc21167, ceqaGuide15082, ceqaGuide15105
 * - ceqa-exemptions.ts: exCeqanet
 * - ceqa-eir.ts: eirCeqanetSearch, eirCcr15094
 * - ceqa-initial-study.ts: isCcr15075, isPrc21091
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
  cnetMistakes: {
    title: "Common Mistakes to Avoid in CEQA Submit",
    publisher:
      "State Clearinghouse, Governor's Office of Land Use and Climate Innovation (LCI)",
    url: "https://lci.ca.gov/wp-content/uploads/20250911-Common_Mistakes_to_Avoid_in_CEQA_Submit_2025.pdf",
    published: "2025-09",
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
  cnetGuide15023: CCR("15023", "Duties of OPR"),
  cnetGuide15205: CCR("15205", "Review by state agencies"),
  cnetGuide15206: CCR(
    "15206",
    "Projects of statewide, regional, or areawide significance",
  ),
  cnetGuide15373: CCR("15373", "Notice of determination"),
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/ceqanet",
  parent: "/for/ceqa",
  family: "tools",
  name: "CEQAnet",
  title: "CEQAnet: Search the CEQA State Clearinghouse",
  description:
    "What CEQAnet holds, how to search it for precedent by document type, lead agency, county and date, SCH numbers, CEQA Submit and review periods.",
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
    "CEQAnet is the online, searchable database of the State Clearinghouse in California's Governor's Office of Land Use and Climate Innovation (LCI) [[exCeqanet]]. It holds summaries and, since March 2019, full copies of the CEQA documents and notices submitted to the Clearinghouse, from notices of preparation, negative declarations and EIRs to notices of exemption and determination, plus some NEPA documents [[exCeqanet]] [[ceqaSch]]. Agencies file through a separate portal, CEQA Submit, and Clearinghouse staff publish each filing to CEQAnet under a State Clearinghouse number [[cnetSubmission]].",
  glance: [
    {
      label: "Run by",
      value: "The State Clearinghouse, a division of LCI [[ceqaSch]]",
    },
    {
      label: "Holds",
      value:
        "NOPs, negative declarations, MNDs, EIRs, NOEs, NODs and some NEPA documents [[eirCeqanetSearch]] [[exCeqanet]]",
    },
    { label: "Full text since", value: "March 2019 [[ceqaSch]]" },
    {
      label: "Filed through",
      value:
        "CEQA Submit, the only route since November 3, 2020 [[cnetSubmission]]",
    },
    {
      label: "Coverage",
      value: "Not every CEQA document goes to the Clearinghouse [[exCeqanet]]",
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
      heading: "What is CEQAnet?",
      paragraphs: [
        "CEQAnet is the online, searchable environmental database of the State Clearinghouse (SCH) in the Governor's Office of Land Use and Climate Innovation (LCI) [[exCeqanet]], the Office of Planning and Research until July 1, 2024 [[ceqaLciAbout]]. The CEQA Guidelines direct the office to keep an internet database of notices of exemption, preparation, determination and completion [[cnetGuide15023]]. CEQAnet also summarizes EIRs, negative declarations, environmental impact statements and other CEQA and NEPA documents, with each project's title, location, lead agency, contact and description [[exCeqanet]].",
        "Since March 2019 CEQAnet has posted full-text copies of documents and notices. For anything received earlier it keeps the record but not the file, and you ask the lead agency for a copy [[ceqaSch]] [[cnetSubmission]]. It is not a complete record of CEQA in California, because not every environmental document is submitted to the Clearinghouse. LCI is not a regulatory agency: it posts documents as received and does not review them for legal adequacy [[exCeqanet]].",
      ],
    },
    {
      heading: "What does the CEQA State Clearinghouse do?",
      paragraphs: [
        "Established in 1973, the State Clearinghouse coordinates state-level review of CEQA documents: it distributes them to state agencies for review, advises agencies and the public on the process, and keeps records of every document and notice it receives [[ceqaSch]]. By statute, the lead agency submits its draft EIR, proposed negative declaration or proposed mitigated negative declaration to the Clearinghouse electronically and posts it on its own website [[ceqaPrc21082dot1]].",
        "The Guidelines send documents to the Clearinghouse for state agency review in these cases, and LCI lists the same categories for submission [[cnetGuide15205]] [[cnetSubmission]]:",
      ],
      bullets: [
        "Draft EIRs and negative declarations prepared by a state agency as lead agency",
        "Drafts where a state agency is a responsible or trustee agency, or otherwise has jurisdiction by law over the project",
        "Drafts for projects of statewide, regional or areawide significance, such as more than 500 dwelling units or a project substantially affecting wetlands, riparian lands or endangered species habitat [[cnetGuide15206]]",
        "Every notice of preparation of a draft EIR [[cnetSubmission]]",
        "NEPA documents: draft EISs, environmental assessments and findings of no significant impact [[cnetSubmission]]",
      ],
    },
    {
      heading: "How to search CEQAnet for precedent",
      paragraphs: [
        "CEQAnet's Advanced Search looks up a State Clearinghouse number directly, or filters by date range, document type, lead agency, reviewing state agency, county, city or region, local action (such as a use permit or rezone), project issue (such as biological resources, tribal cultural resources or wildfire) and development type [[eirCeqanetSearch]]. A record shows the agency, document type, received and posted dates, contacts, location down to coordinates, parcel numbers and nearby waterways, and the attachments, and downloads as CSV [[cnetNodRecord]].",
        "For precedent, start with the document type you are drafting and your county, narrow the date range to recent years, then add the project issue or development type that matches your project [[eirCeqanetSearch]]. Each record links to a project page listing every document filed under the same SCH number, such as a mitigated negative declaration and, weeks later, its notice of determination [[cnetProjectPage]]. ePlan's research agent runs this kind of search for your project and up to two analog projects; it only reads CEQAnet and never files there.",
        "The document type codes you will use most [[eirCeqanetSearch]]:",
      ],
      bullets: [
        "NOP: notice of preparation of a draft EIR",
        "NEG and MND: negative declaration and mitigated negative declaration",
        "EIR and FIN: draft EIR and final document",
        "NOE and NOD: notice of exemption and notice of determination",
        "EA, EIS and FON: NEPA environmental assessment, draft EIS and finding of no significant impact",
      ],
    },
    {
      heading: "What is a State Clearinghouse number (SCH#)?",
      paragraphs: [
        "The SCH number is the Clearinghouse's identification number for a project. For an EIR it is assigned when the notice of preparation is submitted; otherwise, when the first document is published. Later documents for the same project are filed under that existing number [[cnetSubmission]], and the Clearinghouse recalls a submission filed under a new number when it belonged under an existing one [[cnetFaq]].",
        "The number follows the project to its final notice. A notice of determination filed with the Clearinghouse gives the SCH number of the draft EIR or proposed negative declaration [[eirCcr15094]] [[isCcr15075]], and the check for the California Department of Fish and Wildlife filing fee must carry it too [[cnetFaq]]. Once you have a number, CEQAnet's direct lookup opens the project record [[eirCeqanetSearch]].",
      ],
    },
    {
      heading: "CEQA Submit: how documents get onto CEQAnet",
      paragraphs: [
        "CEQA Submit is the State Clearinghouse's online filing portal, launched with the updated CEQAnet in March 2019. Since November 3, 2020, the Clearinghouse has not accepted emailed or paper filings: agencies submit through CEQA Submit, Clearinghouse staff review each submission, then publish it to CEQAnet and email a confirmation [[cnetSubmission]] [[ceqaLciStart]].",
        "Accounts are tied to agencies. Lead agency staff request an Admin or Submitter role, which the Clearinghouse approves; a consultant can only be a Submitter, a role the lead agency's Admin must approve [[cnetFaq]]. Submissions get recalled for filing under a new SCH number by mistake, attachments without optical character recognition, missing minimum attachments, or a local agency's missing NOD or NOE form [[cnetFaq]]. LCI also warns against fillable forms and project details that don't match the attached notices [[cnetMistakes]].",
        "For same-day processing, drafts and finals must be in by 3:30 p.m. and NOEs and NODs by 4 p.m. on a business day [[cnetFaq]]. ePlan does not file in CEQA Submit; it drafts the documents and notices your agency files.",
      ],
    },
    {
      heading: "How long are State Clearinghouse review periods?",
      paragraphs: [
        "Public review of a draft EIR runs at least 30 days and normally no more than 60; of a proposed negative declaration or mitigated negative declaration, at least 20. When the document goes to the Clearinghouse for state agency review, the minimums rise to 45 and 30 days, unless the Clearinghouse approves a shorter period of no less than 30 or 20 days [[ceqaGuide15105]].",
        "The public review must last at least as long as the state review, and day one of the state review is the date the Clearinghouse distributes the document, which it does within three working days of a complete submittal [[ceqaGuide15105]] [[isPrc21091]]. A shortened review must be requested in writing by the lead agency's decision-making body with the agreement of responsible and trustee agencies, and is never granted for a project of statewide, regional or areawide significance [[ceqaGuide15105]].",
        "A notice of preparation gets a 30-day minimum review [[cnetSubmission]], within which responsible and trustee agencies tell the lead agency what the EIR must cover [[ceqaGuide15082]]. State agency comments on drafts are posted on CEQAnet [[cnetSubmission]].",
      ],
    },
    {
      heading: "Notices of determination and exemption on CEQAnet",
      paragraphs: [
        "A local agency that approves a project files a notice of determination within five working days with the county clerk of each county where the project is located and with the State Clearinghouse, electronically, and may file a notice of exemption with both. The Clearinghouse posts each notice on its website within 24 hours for 30 days [[ceqaPrc21152]]. SB 69 added the Clearinghouse filing for local agencies' NODs, and for any NOE they file with the county clerk, starting January 1, 2024 [[cnetSubmission]]. State agencies file their notices electronically with LCI [[ceqaPrc21108]].",
        "Filing starts the clock on lawsuits: 30 days after a notice of determination, 35 days after a notice of exemption, and 180 days if no notice of exemption was filed [[ceqaPrc21167]]. The Clearinghouse will not post an NOD until the California Department of Fish and Wildlife filing fee is paid [[cnetFaq]]. That fee applies to each project unless an exception, such as no effect on fish and wildlife, applies, and the project is not operative, vested or final until it is paid [[cnetFgc7114]].",
      ],
    },
  ],
  outline: {
    heading: "Notice of determination: what it must contain",
    intro:
      "A notice of determination is the brief notice a public agency files after approving a project subject to CEQA [[cnetGuide15373]]. Below are the Guidelines' minimum contents, in the order of the State Clearinghouse's form [[eirCcr15094]] [[isCcr15075]] [[cnetNodForm]]; an agency may use its own form if it meets the minimums [[isCcr15075]].",
    items: [
      {
        title: "Addressees and filing agency",
        detail:
          'The State Clearinghouse and the county clerk, then the public agency filing and the lead agency if different [[cnetNodForm]]. The form\'s "Office of Planning and Research" is LCI since July 1, 2024 [[ceqaLciAbout]].',
      },
      {
        title: "State Clearinghouse number",
        detail:
          "The SCH number of the draft EIR or proposed negative declaration, if the notice is filed with the Clearinghouse [[eirCcr15094]] [[isCcr15075]].",
      },
      {
        title: "Project title, location and applicant",
        detail:
          "The title as it appeared on the draft EIR or proposed negative declaration, the location by street address and cross street or a map, and the applicant's name [[eirCcr15094]] [[isCcr15075]].",
      },
      {
        title: "Project description",
        detail: "A brief description of the project [[eirCcr15094]].",
      },
      {
        title: "Approving agency and date",
        detail:
          "The lead or responsible agency that approved the project and the date it did [[eirCcr15094]] [[cnetNodForm]].",
      },
      {
        title: "Determinations",
        detail:
          "Whether the project will have a significant effect; whether an EIR or a negative declaration was prepared; whether mitigation measures were made a condition of approval and a mitigation monitoring or reporting plan adopted; and, after an EIR, whether findings were made and a statement of overriding considerations adopted [[eirCcr15094]] [[isCcr15075]] [[cnetNodForm]].",
      },
      {
        title: "Where the record is available",
        detail:
          "The address where the final EIR and the record of project approval, or the negative declaration, may be examined [[eirCcr15094]] [[isCcr15075]].",
      },
      {
        title: "Person undertaking the project",
        detail:
          "If different from the applicant, the person receiving public funding or an entitlement for the project [[eirCcr15094]]; local agency notices must identify that person [[ceqaPrc21152]].",
      },
      {
        title: "Signature and filing fee",
        detail:
          "The agency's signature, title and date [[cnetNodForm]], with the Fish and Wildlife filing fee unless an exception, such as no effect on fish and wildlife, applies [[cnetFgc7114]].",
      },
    ],
  },
  faq: [
    {
      question: "What is CEQA Net?",
      answer:
        "CEQA Net is another way of writing CEQAnet, the online database of the State Clearinghouse in California's Governor's Office of Land Use and Climate Innovation. It holds summaries and, since March 2019, full copies of the CEQA documents and notices submitted to the Clearinghouse.",
    },
    {
      question: "Is every CEQA document on CEQAnet?",
      answer:
        "No. CEQAnet holds what was submitted to the State Clearinghouse, and not every environmental document is submitted. It also has no copies of documents received before March 2019; ask the lead agency for those.",
    },
    {
      question: "How do I submit a document to the State Clearinghouse?",
      answer:
        "Through CEQA Submit, the Clearinghouse's online portal; it has not accepted email or paper filings since November 3, 2020. Lead agency staff register and request a role, consultants register as Submitters, a role the lead agency's Admin approves, and Clearinghouse staff review each submission before publishing it to CEQAnet.",
    },
    {
      question: "What is a State Clearinghouse number?",
      answer:
        "The identification number the Clearinghouse gives a project: at the notice of preparation for an EIR, or when the first document is published. Later documents for the same project, including the notice of determination, use the same number.",
    },
    {
      question: "How long is State Clearinghouse review?",
      answer:
        "Normally 45 days for a draft EIR and 30 days for a negative declaration or mitigated negative declaration sent to the Clearinghouse. The Clearinghouse can approve shorter periods of no less than 30 and 20 days, but not for projects of statewide, regional or areawide significance.",
    },
    {
      question: "Does ePlan file on CEQAnet or CEQA Submit?",
      answer:
        "No. ePlan is not affiliated with the Office of Land Use and Climate Innovation and does not file anything. Its research agent reads CEQAnet for precedent, and it drafts notices and documents for your agency to review, sign and file.",
    },
  ],
};
