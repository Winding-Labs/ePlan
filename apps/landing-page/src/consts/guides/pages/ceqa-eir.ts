import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

// /ceqa/environmental-impact-report. Reused keys from nepa-pages.ts SOURCES: none.
// Reused keys defined in ceqa-exemptions.ts: exPrc21080, exPrc21108,
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
  publisher: "California Code of Regulations (Office of Administrative Law, Westlaw)",
  url: `https://govt.westlaw.com/calregs/Document/${id}`,
  ...(published ? { published } : {}),
  read: READ,
});

export const sources = {
  eirPrc21100: PRC(
    "21100",
    "lead agencies prepare and certify EIRs; required contents",
    "1994-09-30",
  ),
  eirPrc21151: PRC(
    "21151",
    "local agencies prepare and certify EIRs",
    "2003-01-01",
  ),
  eirPrc2108031: PRC(
    "21080.3.1",
    "tribal consultation (AB 52)",
    "2015-01-01",
  ),
  eirPrc210804: PRC(
    "21080.4",
    "notice that an EIR is required; 30-day agency responses",
    "2022-01-01",
  ),
  eirPrc21091: PRC(
    "21091",
    "public review periods and comments",
    "2022-01-01",
  ),
  eirPrc21081: PRC(
    "21081",
    "findings required before approving a project with significant effects",
    "1994-10-01",
  ),
  eirCcr15063: CCR(
    "15063",
    "Initial Study",
    "I87A7E72C5B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  eirCcr15064: CCR(
    "15064",
    "Determining the Significance of the Environmental Effects Caused by a Project",
    "I87B888FD5B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  eirCcr15082: CCR(
    "15082",
    "Notice of Preparation and Determination of Scope of EIR",
    "I88584B665B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  eirCcr15083: CCR(
    "15083",
    "Early Public Consultation",
    "I8861C1485B4D11EC976B000D3A7C4BC3",
  ),
  eirCcr15084: CCR(
    "15084",
    "Preparing the Draft EIR",
    "I886B5E3A5B4D11EC976B000D3A7C4BC3",
  ),
  eirCcr15087: CCR(
    "15087",
    "Public Review of Draft EIR",
    "I888660495B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  eirCcr15088: CCR(
    "15088",
    "Evaluation of and Response to Comments",
    "I888FD62B5B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  eirCcr15089: CCR(
    "15089",
    "Preparation of Final EIR",
    "I88A09F065B4D11EC976B000D3A7C4BC3",
  ),
  eirCcr15090: CCR(
    "15090",
    "Certification of the Final EIR",
    "I88A2E8FF5B4D11EC976B000D3A7C4BC3",
    "1997-05-27",
  ),
  eirCcr15091: CCR(
    "15091",
    "Findings",
    "I88AA14E75B4D11EC976B000D3A7C4BC3",
    "1998-10-26",
  ),
  eirCcr15093: CCR(
    "15093",
    "Statement of Overriding Considerations",
    "I88B5FBC35B4D11EC976B000D3A7C4BC3",
    "2010-03-18",
  ),
  eirCcr15094: CCR(
    "15094",
    "Notice of Determination",
    "I88BD27C05B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  eirCcr15097: CCR(
    "15097",
    "Mitigation Monitoring or Reporting",
    "I88DC21695B4D11EC976B000D3A7C4BC3",
    "2004-09-07",
  ),
  eirCcr15105: CCR(
    "15105",
    "Public Review Period for a Draft EIR or a Proposed Negative Declaration or Mitigated Negative Declaration",
    "I88F8D1295B4D11EC976B000D3A7C4BC3",
    "2007-07-27",
  ),
  eirCcr15108: CCR(
    "15108",
    "Completion and Certification of EIR",
    "I8904B80A5B4D11EC976B000D3A7C4BC3",
  ),
  eirCcr15120: CCR(
    "15120",
    "General (Article 9, Contents of Environmental Impact Reports)",
    "I8923B1B85B4D11EC976B000D3A7C4BC3",
    "1998-10-26",
  ),
  eirCcr15122: CCR(
    "15122",
    "Table of Contents or Index",
    "I892ADDAA5B4D11EC976B000D3A7C4BC3",
  ),
  eirCcr15123: CCR(
    "15123",
    "Summary",
    "I892F98985B4D11EC976B000D3A7C4BC3",
  ),
  eirCcr15124: CCR(
    "15124",
    "Project Description",
    "I8936C48B5B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  eirCcr15125: CCR(
    "15125",
    "Environmental Setting",
    "I894061765B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  eirCcr15126: CCR(
    "15126",
    "Consideration and Discussion of Environmental Impacts",
    "I894766585B4D11EC976B000D3A7C4BC3",
    "1998-10-26",
  ),
  eirCcr151262: CCR(
    "15126.2",
    "Consideration and Discussion of Significant Environmental Impacts",
    "I894E92475B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  eirCcr151264: CCR(
    "15126.4",
    "Consideration and Discussion of Mitigation Measures Proposed to Minimize Significant Effects",
    "I895A79285B4D11EC976B000D3A7C4BC3",
    "2018-12-28",
  ),
  eirCcr151266: CCR(
    "15126.6",
    "Consideration and Discussion of Alternatives to the Proposed Project",
    "I8968D1085B4D11EC976B000D3A7C4BC3",
    "1998-10-26",
  ),
  eirCcr15128: CCR(
    "15128",
    "Effects Not Found to Be Significant",
    "I8974B7EA5B4D11EC976B000D3A7C4BC3",
  ),
  eirCcr15129: CCR(
    "15129",
    "Organizations and Persons Consulted",
    "I897728EA5B4D11EC976B000D3A7C4BC3",
  ),
  eirCcr15130: CCR(
    "15130",
    "Discussion of Cumulative Impacts",
    "I89809EC65B4D11EC976B000D3A7C4BC3",
    "2010-03-18",
  ),
  eirCcr15132: CCR(
    "15132",
    "Contents of Final Environmental Impact Report",
    "I898EF6A45B4D11EC976B000D3A7C4BC3",
  ),
  eirCcr15141: CCR(
    "15141",
    "Page Limits",
    "I8998939A5B4D11EC976B000D3A7C4BC3",
  ),
  eirCcr15362: CCR(
    "15362",
    "EIR--Environmental Impact Report",
    "I8DD6163C5B4D11EC976B000D3A7C4BC3",
  ),
  eirCeqanetSearch: {
    title: "CEQAnet Advanced Search",
    publisher:
      "State Clearinghouse, Governor's Office of Land Use and Climate Innovation (CEQAnet)",
    url: "https://ceqanet.lci.ca.gov/Search/Advanced",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/ceqa/environmental-impact-report",
  parent: "/ceqa",
  family: "ceqa",
  name: "Environmental impact report",
  title: "Environmental Impact Report (EIR): CEQA Guide",
  description:
    "When CEQA requires an environmental impact report, the NOP and scoping, AB 52, draft and final EIR contents, review periods, findings and the NOD.",
  eyebrow: "CEQA EIR",
  h1: "The CEQA environmental impact report, from notice of preparation to notice of determination",
  primaryKeyword: "environmental impact report",
  secondaryKeywords: [
    "notice of determination",
    "notice of preparation",
    "draft eir",
    "final eir",
    "ceqa eir",
    "ab 52 tribal consultation",
    "statement of overriding considerations",
  ],
  document: "Notice of Preparation",
  answer:
    "An environmental impact report (EIR) is the detailed statement a lead agency prepares under CEQA to describe and analyze a project's significant environmental effects and discuss ways to mitigate or avoid them [[eirCcr15362]]. It is required when there is substantial evidence, in light of the whole record, that a project may have a significant effect on the environment [[exPrc21080]] [[eirCcr15064]]. The process runs from a notice of preparation through a draft EIR, public review and a final EIR to certification, findings and a notice of determination [[eirCcr15082]] [[eirCcr15090]] [[eirCcr15094]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "Pub. Resources Code §§21100 and 21151; CEQA Guidelines Article 9, from §15120 [[eirPrc21100]] [[eirPrc21151]] [[eirCcr15120]]",
    },
    {
      label: "Prepared by",
      value:
        "The lead agency, with its own staff or under contract; any draft must reflect its independent judgment [[eirCcr15084]]",
    },
    {
      label: "Typical length",
      value:
        "Text normally under 150 pages; under 300 for unusual scope or complexity [[eirCcr15141]]",
    },
    {
      label: "Public review",
      value:
        "30 to 60 days; at least 45 when sent to state agencies through the State Clearinghouse [[eirCcr15105]]",
    },
    {
      label: "Time limit",
      value:
        "For a private project, one year from accepting the application as complete; agency procedures may allow one 90-day extension [[eirCcr15108]]",
    },
    {
      label: "Challenge window",
      value: "30 days after the notice of determination is filed [[exPrc21167]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder: "I'm preparing an EIR for…",
    examples: [
      {
        emoji: "💧",
        label: "Water Storage",
        heading: "Notice of Preparation for Water Storage",
        eyebrow: "WATER SUPPLY",
        prompt:
          "I'm an environmental planner at a county water district preparing an EIR for a 5-million-gallon storage reservoir and 1.4 miles of pipeline on 12 acres of grazing land in Placer County.",
      },
      {
        emoji: "🏙️",
        label: "Downtown Plan",
        heading: "Notice of Preparation for Downtown Plan",
        eyebrow: "LAND USE PLANNING",
        prompt:
          "I'm a senior planner with a city in Riverside County preparing a program EIR for a downtown specific plan that allows 2,400 new homes on 180 acres.",
      },
      {
        emoji: "☀️",
        label: "Solar Facility",
        heading: "Notice of Preparation for Solar Facility",
        eyebrow: "RENEWABLE ENERGY",
        prompt:
          "I'm a consultant preparing an EIR for a county planning department on a 300-megawatt solar and battery storage facility on 2,000 acres of farmland in Kern County.",
      },
      {
        emoji: "🛣️",
        label: "Highway Widening",
        heading: "Notice of Preparation for Highway Widening",
        eyebrow: "TRANSPORTATION",
        prompt:
          "I'm an environmental planner at a county transportation authority adding an auxiliary lane to 4 miles of a state highway in San Mateo County.",
      },
      {
        emoji: "🎓",
        label: "Campus Expansion",
        heading: "Notice of Preparation for Campus Expansion",
        eyebrow: "HIGHER EDUCATION",
        prompt:
          "I'm a campus planner at a state university preparing an EIR for a long-range development plan that adds 3,000 student beds and two academic buildings.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the Notice of Preparation and lays out the EIR's sections, with the project description, location and probable effects filled in; every fact it can't confirm is marked for you.",
    mock: {
      project: "Ridge Road water storage",
      documentTitle: "Notice of Preparation of a Draft Environmental Impact Report",
      summary:
        "I drafted the NOP from your description, with the project, location and probable effects that Guidelines §15082 asks for. Five details still need your input before it goes out.",
      missing: [
        "Site address or parcel number",
        "Other probable environmental effects",
        "Comment deadline",
        "Scoping meeting date and place",
        "Responsible and trustee agency list",
      ],
      letterhead: {
        left: ["Cedar Hollow Water District", "Engineering and Environmental Services"],
        right: ["[INSERT: district street address]", "[INSERT: city], California"],
      },
      meta: ["File No.: [INSERT: project number]", "Date: October 2, 2026"],
      salutation:
        "To: Responsible and trustee agencies, the State Clearinghouse and interested parties",
      paragraphs: [
        "Cedar Hollow Water District, as lead agency, will prepare an environmental impact report for the Ridge Road Storage Project and asks for your views on the scope and content of the environmental information the EIR should contain, as it relates to your agency's statutory responsibilities.",
        "The project is a 5-million-gallon storage reservoir and 1.4 miles of pipeline on 12 acres of grazing land at [INSERT: site address or APN], Placer County. Probable effects include biological resources, cultural and tribal cultural resources, hydrology, construction noise and [INSERT: other probable effects].",
        "Please respond within 30 days of receiving this notice, by [INSERT: comment deadline]. A public scoping meeting will be held on [INSERT: date and place].",
      ],
    },
  },
  comparison: [
    {
      label: "Start from",
      eplan:
        "Your description and files, plus CEQAnet documents for up to two similar projects",
      manual: "A blank notice or the last project's file",
    },
    {
      label: "EIR structure",
      eplan:
        "Drafts the NOP and outlines the EIR's sections; your team writes the analysis",
      manual: "Build the section list from Guidelines Article 9 by hand",
    },
  ],
  sections: [
    {
      heading: "When is a CEQA EIR required?",
      paragraphs: [
        "Every lead agency must prepare, or have prepared under contract, and certify an EIR for any project it proposes to carry out or approve that may have a significant effect on the environment [[eirPrc21100]] [[eirPrc21151]]. The test is whether there is substantial evidence, in light of the whole record, that the project may have such an effect [[exPrc21080]].",
        "Under Guidelines §15064(f), an agency presented with a fair argument that a project may have a significant effect prepares an EIR even if other substantial evidence points the other way. Public controversy alone does not require one, and argument, speculation and unsubstantiated opinion are not substantial evidence [[eirCcr15064]]. The decision usually follows an initial study, which the agency may skip when an EIR will clearly be required [[eirCcr15063]].",
      ],
    },
    {
      heading: "The notice of preparation and scoping",
      paragraphs: [
        "Immediately after deciding an EIR is required, the lead agency sends a notice of preparation (NOP) to the Office of Planning and Research (renamed LCI in 2024), each responsible and trustee agency and every federal agency involved, and files it with the county clerk. At a minimum, the NOP describes the project, its location and its probable environmental effects [[eirCcr15082]] [[ceqaLciAbout]].",
        "Those agencies have 30 days after receiving the NOP to tell the lead agency what environmental information the EIR must cover for their statutory responsibilities [[eirPrc210804]]. The lead agency may start drafting right away but may not circulate the draft EIR until that period ends, and a project of statewide, regional or areawide significance needs at least one scoping meeting [[eirCcr15082]].",
        "Scoping helps identify the range of actions, alternatives, mitigation measures and significant effects to study in depth, and it is necessary for a joint EIR/EIS with a federal agency [[eirCcr15083]]. The State Clearinghouse number issued for the NOP identifies every later document on the project [[eirCcr15082]].",
      ],
    },
    {
      heading: "AB 52 tribal consultation",
      paragraphs: [
        "AB 52 added Public Resources Code §21080.3.1, effective January 1, 2015. Before releasing a negative declaration, mitigated negative declaration or EIR, the lead agency must begin consultation with a California Native American tribe traditionally and culturally affiliated with the project area if the tribe has asked in writing to be notified of projects there and then requests consultation [[eirPrc2108031]].",
        "Within 14 days of deciding to undertake a project or finding an application complete, the lead agency sends formal notice to those tribes. Each tribe has 30 days to request consultation, and the agency must begin within 30 days of a request [[eirPrc2108031]]. A public EIR may not reveal the location of archaeological sites or sacred lands [[eirCcr15120]].",
      ],
    },
    {
      heading: "What goes in a draft EIR?",
      paragraphs: [
        "A draft EIR must contain the information required by Guidelines §§15122 through 15131. The format can vary, but every element must be covered, and when elements are not in separate sections the document must say where each is discussed [[eirCcr15120]]. The outline below lists them.",
        "The text should normally run under 150 pages, or under 300 for proposals of unusual scope or complexity [[eirCcr15141]], and the summary should normally not exceed 15 pages [[eirCcr15123]]. The lead agency may write the draft itself, contract it out, or start from a draft by the applicant or its consultant, but the draft sent out for review must reflect the lead agency's independent judgment [[eirCcr15084]].",
      ],
    },
    {
      heading: "Public review and the final EIR",
      paragraphs: [
        "The lead agency gives public notice that the draft EIR is available when it sends a notice of completion to the Office of Planning and Research [[eirCcr15087]]. Review lasts at least 30 days and normally no more than 60; when state agencies review the draft through the State Clearinghouse, at least 45 days unless the Clearinghouse allows a shorter period of at least 30 [[eirCcr15105]]. The agency must accept comments by email [[eirPrc21091]].",
        "The agency responds in writing to comments raising significant environmental issues, with good-faith, reasoned analysis rather than conclusory statements, and sends proposed responses to commenting public agencies at least 10 days before certifying the EIR [[eirCcr15088]].",
        "The final EIR, prepared before the project is approved, consists of the draft or a revision of it, the comments received, a list of commenters, the lead agency's responses and any other information it adds [[eirCcr15089]] [[eirCcr15132]].",
      ],
    },
    {
      heading: "Certification, findings and the statement of overriding considerations",
      paragraphs: [
        "Before approving the project, the lead agency certifies that the final EIR was completed in compliance with CEQA, that its decision-making body reviewed and considered it, and that it reflects the agency's independent judgment [[eirCcr15090]].",
        "For each significant effect the EIR identifies, the agency makes written findings, supported by substantial evidence: changes to the project avoid or substantially lessen the effect, another agency is responsible for those changes, or specific considerations make the mitigation or alternatives infeasible [[eirPrc21081]] [[eirCcr15091]]. When it requires mitigation, it adopts a program to report on or monitor it [[eirCcr15097]].",
        "If significant effects remain unavoidable, the agency may still approve the project by finding that its specific economic, legal, social, technological or other benefits outweigh them. It states its reasons in a written statement of overriding considerations, supported by substantial evidence and mentioned in the notice of determination; the statement does not replace the findings [[eirCcr15093]].",
      ],
    },
    {
      heading: "Filing the notice of determination and finding past EIRs on CEQAnet",
      paragraphs: [
        "The lead agency files a notice of determination within five working days after approving the project. It identifies the project and its State Clearinghouse number, states whether the project will have a significant effect and that an EIR was prepared and certified, and says whether mitigation, findings and a statement of overriding considerations were part of the approval [[eirCcr15094]].",
        "A local agency files with the county clerk of each county where the project is located and with the State Clearinghouse; a state agency files with the Office of Planning and Research [[exPrc21152]] [[exPrc21108]]. Filing starts a 30-day period for a lawsuit alleging the EIR does not comply with CEQA [[exPrc21167]].",
        "To find past EIRs, search CEQAnet, the State Clearinghouse database. It holds key information on CEQA documents submitted to the Clearinghouse since 1990, with full text since March 2019, but it is not complete, because not every document goes to the Clearinghouse [[exCeqanet]]. Its advanced search filters by State Clearinghouse number and by document type, such as NOP, draft EIR, final document or NOD [[eirCeqanetSearch]].",
      ],
    },
  ],
  outline: {
    heading: "Draft EIR outline: the required sections",
    intro:
      "The elements Guidelines §§15122 through 15131 require in every draft EIR, in Article 9's order. The format can vary as long as each element is covered [[eirCcr15120]].",
    items: [
      {
        title: "Table of contents or index",
        detail: "At least one, so readers can find each subject and issue [[eirCcr15122]].",
      },
      {
        title: "Summary",
        detail:
          "Each significant effect with the mitigation and alternatives that would reduce or avoid it, areas of controversy, and issues to resolve; normally no more than 15 pages [[eirCcr15123]].",
      },
      {
        title: "Project description",
        detail:
          "A detailed map of the location and boundaries, the objectives including the underlying purpose, the technical, economic and environmental characteristics, and the agencies, permits and approvals that will rely on the EIR [[eirCcr15124]].",
      },
      {
        title: "Environmental setting",
        detail:
          "Physical conditions in the vicinity when the NOP is published, which normally form the baseline, and any inconsistencies with applicable general, specific and regional plans [[eirCcr15125]].",
      },
      {
        title: "Environmental impacts",
        detail:
          "Significant direct and indirect effects, short and long term; effects that cannot be avoided; irreversible changes; and growth-inducing impacts [[eirCcr15126]] [[eirCcr151262]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "Feasible measures for each significant effect, fully enforceable, with details deferred only under the conditions the Guidelines set [[eirCcr151264]].",
      },
      {
        title: "Alternatives",
        detail:
          "A reasonable range that would attain most of the basic objectives while avoiding or substantially lessening significant effects, plus the no project alternative [[eirCcr151266]].",
      },
      {
        title: "Cumulative impacts and effects found not significant",
        detail:
          "Cumulative impacts where the project's incremental effect is cumulatively considerable, and brief reasons other possible effects were found not significant [[eirCcr15130]] [[eirCcr15128]].",
      },
      {
        title: "Preparers and persons consulted",
        detail:
          "The agencies, organizations and individuals consulted, and who prepared the draft EIR [[eirCcr15129]].",
      },
    ],
  },
  faq: [
    {
      question: "When is a CEQA EIR required?",
      answer:
        "When there is substantial evidence, in light of the whole record, that a project may have a significant effect on the environment. If a lead agency is presented with a fair argument that the project may have such an effect, it prepares an EIR even if other evidence suggests the effect will not be significant.",
    },
    {
      question: "What is the difference between a draft EIR and a final EIR?",
      answer:
        "The draft EIR contains the analysis required by CEQA Guidelines sections 15122 through 15131 and goes out for public review. The final EIR adds the comments received, a list of commenters and the lead agency's responses, and the lead agency certifies it before approving the project.",
    },
    {
      question: "How long is the public review period for a draft EIR?",
      answer:
        "At least 30 days and normally no more than 60. When the draft goes to state agencies through the State Clearinghouse, at least 45 days, unless the Clearinghouse allows a shorter period of at least 30 days.",
    },
    {
      question: "What is a statement of overriding considerations?",
      answer:
        "The lead agency's written explanation of why a project's specific economic, legal, social, technological or other benefits outweigh significant environmental effects that cannot be avoided or substantially lessened. It must be supported by substantial evidence and does not replace the required findings.",
    },
    {
      question: "What is a notice of determination?",
      answer:
        "The notice a lead agency files within five working days after approving a project. A local agency files it with the county clerk and the State Clearinghouse. Filing starts a 30-day period for lawsuits claiming the EIR does not comply with CEQA.",
    },
    {
      question: "Can ePlan write the whole EIR?",
      answer:
        "No. ePlan drafts the notice of preparation, outlines the EIR's sections and looks up past EIRs for similar projects on CEQAnet, marking every fact it can't confirm. Your team writes and reviews the analysis, and the lead agency certifies the EIR.",
    },
  ],
};
