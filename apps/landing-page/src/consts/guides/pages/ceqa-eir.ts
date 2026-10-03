import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

// /for/ceqa-environmental-impact-report. Reused keys from nepa-pages.ts SOURCES: none.
// Reused keys defined in ceqa-exemptions.ts: exPrc21080, exPrc21108,
// exPrc21152, exPrc21167; from ceqa.ts: ceqaLciAbout.
// eirCcr15097 and eirCeqanetSearch are defined here but cited only by other pages.

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
  eirPrc2108031: PRC("21080.3.1", "tribal consultation (AB 52)", "2015-01-01"),
  eirPrc210804: PRC(
    "21080.4",
    "notice that an EIR is required; 30-day agency responses",
    "2022-01-01",
  ),
  eirPrc21091: PRC("21091", "public review periods and comments", "2022-01-01"),
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
  eirCcr15123: CCR("15123", "Summary", "I892F98985B4D11EC976B000D3A7C4BC3"),
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
  eirCcr15141: CCR("15141", "Page Limits", "I8998939A5B4D11EC976B000D3A7C4BC3"),
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
  path: "/for/ceqa-environmental-impact-report",
  parent: "/for/ceqa",
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
    "An environmental impact report (EIR) is the detailed statement a lead agency prepares under CEQA to analyze a project's significant environmental effects and ways to mitigate or avoid them [[eirCcr15362]]. It is required when substantial evidence shows a project may have a significant effect [[exPrc21080]]. The process runs from a notice of preparation to a notice of determination [[eirCcr15082]] [[eirCcr15094]].",
  glance: [
    {
      label: "Legal basis",
      value:
        "Pub. Resources Code §§21100 and 21151; CEQA Guidelines Article 9 [[eirPrc21100]] [[eirPrc21151]] [[eirCcr15120]]",
    },
    {
      label: "Prepared by",
      value:
        "The lead agency or its consultant; the draft must reflect the agency's independent judgment [[eirCcr15084]]",
    },
    {
      label: "Typical length",
      value:
        "Text normally under 150 pages; under 300 for unusual scope or complexity [[eirCcr15141]]",
    },
    {
      label: "Public review",
      value:
        "30 to 60 days; at least 45 through the State Clearinghouse [[eirCcr15105]]",
    },
    {
      label: "Time limit",
      value:
        "One year to certify for a private project, from accepting the application as complete [[eirCcr15108]]",
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
      documentTitle:
        "Notice of Preparation of a Draft Environmental Impact Report",
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
        left: [
          "Cedar Hollow Water District",
          "Engineering and Environmental Services",
        ],
        right: [
          "[INSERT: district street address]",
          "[INSERT: city], California",
        ],
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
      label: "Starting point",
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
        "The test is the fair argument standard: if the lead agency is presented with a fair argument that the project may have a significant effect, it prepares an EIR even if other substantial evidence points the other way. Public controversy alone does not require one [[eirCcr15064]]. An initial study usually comes first; the agency may skip it when an EIR is clearly required [[eirCcr15063]].",
      ],
    },
    {
      heading:
        "The notice of preparation, scoping and AB 52 tribal consultation",
      paragraphs: [
        "After deciding an EIR is required, the lead agency sends a notice of preparation (NOP) describing the project, location and probable effects to the Office of Planning and Research (now LCI) and to responsible, trustee and involved federal agencies [[eirCcr15082]] [[ceqaLciAbout]]. Those agencies have 30 days to say what the EIR must cover [[eirPrc210804]]. The draft can't circulate before then, and a project of statewide, regional or areawide significance needs a scoping meeting [[eirCcr15082]].",
        "Under AB 52, a California Native American tribe affiliated with the project area that has asked in writing to be notified gets formal notice within 14 days of the agency deciding to undertake the project or finding the application complete. The tribe has 30 days to request consultation, which must begin within 30 days of the request and before the EIR is released [[eirPrc2108031]].",
      ],
    },
    {
      heading: "Draft EIR review and the final EIR",
      paragraphs: [
        "When the draft EIR is done, the lead agency files a notice of completion with the Office of Planning and Research and gives public notice that it is available [[eirCcr15087]]. It must accept comments by email [[eirPrc21091]] and answer those raising significant environmental issues in writing, with reasoned analysis, sending proposed responses to commenting public agencies at least 10 days before certification [[eirCcr15088]].",
        "The final EIR is the draft or a revision of it plus the comments, a list of commenters and the lead agency's responses [[eirCcr15089]] [[eirCcr15132]].",
      ],
    },
    {
      heading: "Certification, findings and the notice of determination",
      paragraphs: [
        "Before approving the project, the lead agency certifies that the final EIR complies with CEQA, was considered by its decision-makers and reflects its independent judgment [[eirCcr15090]]. For each significant effect it makes written findings: project changes avoid or substantially lessen it, another agency is responsible, or mitigation and alternatives are infeasible [[eirPrc21081]] [[eirCcr15091]]. To approve a project with unavoidable significant effects, it adopts a statement of overriding considerations [[eirCcr15093]].",
        "Within five working days of approval, the lead agency files a notice of determination stating whether the project will have a significant effect and whether mitigation, findings and a statement of overriding considerations were adopted [[eirCcr15094]]. A local agency files with the county clerk and the State Clearinghouse, a state agency with LCI [[exPrc21152]] [[exPrc21108]]. Filing starts a 30-day window for CEQA lawsuits [[exPrc21167]].",
      ],
    },
  ],
  outline: {
    heading: "Draft EIR outline: the required sections",
    intro:
      "Required in every draft EIR by Guidelines §§15122-15131, in Article 9's order; the format can vary if each element is covered [[eirCcr15120]].",
    items: [
      {
        title: "Table of contents or index",
        detail:
          "At least one, so readers can find each subject [[eirCcr15122]].",
      },
      {
        title: "Summary",
        detail:
          "Each significant effect with mitigation and alternatives that would reduce or avoid it, areas of controversy and issues to resolve; normally 15 pages or less [[eirCcr15123]].",
      },
      {
        title: "Project description",
        detail:
          "Location and boundaries on a map, objectives and underlying purpose, technical, economic and environmental characteristics, and the approvals relying on the EIR [[eirCcr15124]].",
      },
      {
        title: "Environmental setting",
        detail:
          "Physical conditions when the NOP is published, normally the baseline, and inconsistencies with general, specific and regional plans [[eirCcr15125]].",
      },
      {
        title: "Environmental impacts",
        detail:
          "Significant direct and indirect effects, short and long term; unavoidable effects; irreversible changes; growth-inducing impacts [[eirCcr15126]] [[eirCcr151262]].",
      },
      {
        title: "Mitigation measures",
        detail:
          "Feasible, fully enforceable measures for each significant effect, with details deferred only under the Guidelines' conditions [[eirCcr151264]].",
      },
      {
        title: "Alternatives",
        detail:
          "A reasonable range that meets most basic objectives while avoiding or substantially lessening significant effects, plus no project [[eirCcr151266]].",
      },
      {
        title: "Cumulative impacts and effects found not significant",
        detail:
          "Cumulatively considerable impacts, and brief reasons other effects were found not significant [[eirCcr15130]] [[eirCcr15128]].",
      },
      {
        title: "Preparers and persons consulted",
        detail:
          "Who prepared the draft and which agencies, organizations and people were consulted [[eirCcr15129]].",
      },
    ],
  },
  faq: [
    {
      question: "How long does a CEQA EIR take?",
      answer:
        "For a private project, the lead agency has one year from accepting the application as complete to certify the EIR. Agencies get 30 days to respond to the NOP, and draft EIR review takes 30 to 60 days, or at least 45 through the State Clearinghouse.",
    },
    {
      question: "What is the difference between a draft EIR and a final EIR?",
      answer:
        "The draft EIR holds the analysis and goes out for public review. The final EIR adds the comments, a list of commenters and the lead agency's responses, and is certified before the project is approved.",
    },
    {
      question: "What is a statement of overriding considerations?",
      answer:
        "The lead agency's written reasons, supported by substantial evidence, why a project's specific benefits outweigh significant effects it cannot avoid or substantially lessen. It lets the agency approve the project anyway, and it does not replace the required findings.",
    },
    {
      question: "Can ePlan write the whole EIR?",
      answer:
        "No. ePlan drafts the notice of preparation, outlines the EIR's sections and finds past EIRs for similar projects on CEQAnet, marking every fact it can't confirm. Your team writes the analysis, and the lead agency certifies the EIR.",
    },
  ],
};
