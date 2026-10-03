import type { GuidePath } from "../paths";
import type { GuideEntry, Source } from "../types";

/**
 * /for/usda-forest-service-nepa — the Forest Service under USDA's 7 CFR 1b.
 *
 * Reused existing source keys (guides/sources.ts and pages/*.ts):
 * usdaFinal, usda1b3, usda1b4, usda1b6, usfs218 (36 CFR 218.24),
 * ceqProcedures, usc4336a, eisUsda1b9 (7 CFR 1b.9).
 */

const READ = "2026-10-02";

const ECFR = "Electronic Code of Federal Regulations (eCFR), current";

export const sources = {
  usfsPart218: {
    title:
      "36 CFR part 218 - Project-Level Predecisional Administrative Review Process (Forest Service)",
    publisher: ECFR,
    url: "https://www.ecfr.gov/current/title-36/chapter-II/part-218",
    read: READ,
  },
  usfs218Proposed: {
    title:
      "Project-Level Predecisional Administrative Review Process (proposed rule), 91 FR 5387",
    publisher: "USDA Forest Service, Federal Register",
    url: "https://www.federalregister.gov/documents/2026/02/06/2026-02392/project-level-predecisional-administrative-review-process",
    published: "2026-02-06",
    read: READ,
  },
  usfs1b2: {
    title: "7 CFR 1b.2 - Policy (USDA)",
    publisher: ECFR,
    url: "https://www.ecfr.gov/current/title-7/subtitle-A/part-1b/section-1b.2",
    read: READ,
  },
  usfsNepaPage: {
    title: "Environmental Planning (Environmental Procedures and Guidance)",
    publisher: "USDA Forest Service",
    url: "https://www.fs.usda.gov/about-agency/regulations-policies/nepa",
    read: READ,
  },
  usfsFanecExample: {
    title:
      "Findings of Applicability and No Extraordinary Circumstances (FANEC): Sopris Urban Front Country Order, White River National Forest",
    publisher: "USDA Forest Service",
    url: "https://www.fs.usda.gov/sites/nfs/files/r02/whiteriver/publication/alerts/FANEC%20071025Sopris.pdf",
    published: "2025-08-29",
    read: READ,
  },
} satisfies Record<string, Source>;

export const entry: GuideEntry<GuidePath> = {
  path: "/for/usda-forest-service-nepa",
  parent: "/for/nepa",
  family: "agency",
  name: "Forest Service NEPA",
  title: "Forest Service NEPA: 7 CFR 1b and Decision Memos",
  description:
    "Forest Service NEPA under USDA's 7 CFR 1b: what replaced 36 CFR 220, how CE decision memos (FANECs) work, and 36 CFR 218 objections and the SOPA.",
  eyebrow: "Forest Service",
  h1: "Forest Service NEPA under 7 CFR 1b: decision memos, objections and the SOPA",
  primaryKeyword: "forest service nepa",
  secondaryKeywords: [
    "7 cfr 1b",
    "36 cfr 218",
    "usda nepa regulations",
    "36 cfr 220",
    "usfs nepa",
    "decision memo",
  ],
  document: "Decision Memo",
  answer:
    "Forest Service NEPA is the process the U.S. Forest Service uses to assess the environmental effects of proposed actions on national forests and grasslands before deciding on them [[usfsNepaPage]]. Since July 3, 2025, it has run on USDA's department-wide NEPA regulations at 7 CFR 1b instead of the Forest Service's own 36 CFR 220, which was rescinded; USDA made the change final on April 3, 2026 [[usdaFinal]] [[ceqProcedures]]. When a categorical exclusion needs documentation, the responsible official signs a finding the old rules called a decision memo [[usda1b3]] [[usdaFinal]], and projects analyzed in an EA or EIS still go through the objection process at 36 CFR 218 [[usfsPart218]].",
  glance: [
    {
      label: "Procedures",
      value:
        "USDA's 7 CFR part 1b, final April 3, 2026 [[usdaFinal]] [[ceqProcedures]]",
    },
    {
      label: "36 CFR 220",
      value: "Rescinded July 2025; its CEs moved to 7 CFR 1b.4 [[usdaFinal]]",
    },
    {
      label: "CE record",
      value:
        "A signed finding of applicability and no extraordinary circumstance (FANEC) [[usda1b3]]",
    },
    {
      label: "Objections",
      value:
        "36 CFR 218, for projects decided with an EA or EIS [[usfsPart218]] [[usfsNepaPage]]",
    },
    {
      label: "Comment periods",
      value: "30 days for an EA; 45 days for a draft EIS [[usfs218]]",
    },
    {
      label: "Deadlines",
      value: "EA 1 year and 75 pages; EIS 2 years and 150 pages [[usc4336a]]",
    },
  ],
  hero: {
    prefix: "Draft a",
    placeholder:
      "I'm planning a project on our ranger district and need a decision memo for…",
    examples: [
      {
        emoji: "🥾",
        label: "Trail Reroute",
        heading: "Decision Memo for Trail Reroute",
        eyebrow: "RANGER DISTRICT",
        prompt:
          "I'm the recreation planner on the Cowlitz Valley Ranger District in Washington, rerouting 1.4 miles of the Kettle Bench Trail away from an eroding creek bank and restoring the old tread.",
      },
      {
        emoji: "🏕️",
        label: "Campground Upgrades",
        heading: "Decision Memo for Campground Upgrades",
        eyebrow: "DEVELOPED RECREATION",
        prompt:
          "I'm a recreation staff officer on a national forest in Arizona replacing two vault toilets, rebuilding 12 campsites and paving the parking loop at an existing campground.",
      },
      {
        emoji: "🚧",
        label: "Road Decommissioning",
        heading: "Decision Memo for Road Decommissioning",
        eyebrow: "WATERSHED RESTORATION",
        prompt:
          "I'm a hydrologist on a national forest in Idaho planning to decommission 6 miles of unneeded system and user-created roads in a steelhead watershed.",
      },
      {
        emoji: "📡",
        label: "Communications Site",
        heading: "Decision Memo for a Communications Site",
        eyebrow: "SPECIAL USES",
        prompt:
          "I'm a special uses permit administrator in Colorado reviewing a wireless carrier's request to add an antenna and equipment shelter at an existing communications site on a forest summit.",
      },
      {
        emoji: "🔥",
        label: "Post-Fire Repairs",
        heading: "Decision Memo for Post-Fire Repairs",
        eyebrow: "BURNED AREA RECOVERY",
        prompt:
          "I'm a district ranger in Oregon planning tree planting, fence replacement and trail repair on 1,800 acres of national forest that burned last summer.",
      },
    ],
  },
  draft: {
    description:
      "Describe the project and ePlan drafts the decision memo with the category, location and resources screened filled in; every fact it can't confirm is marked for you.",
    mock: {
      project: "Kettle Bench Trail Reroute",
      documentTitle: "Kettle Bench Trail Reroute — Decision Memo",
      summary:
        "I drafted the Kettle Bench Trail Reroute — Decision Memo from your description, using the minimum elements in 7 CFR 1b.3(g). Five details are marked for you, and the district ranger decides whether the category applies.",
      missing: [
        "Trail number and work season",
        "Listed fish and critical habitat in Kettle Creek",
        "Whether to cite USDA-42d-USFS too",
        "District office address",
        "File code",
      ],
      letterhead: {
        left: [
          "United States Department of Agriculture",
          "Forest Service",
          "Gifford Pinchot National Forest — Cowlitz Valley Ranger District",
        ],
        right: [
          "[INSERT: district office street address]",
          "[INSERT: city, state ZIP]",
        ],
      },
      meta: ["File Code: [INSERT: file code]", "Date: October 2, 2026"],
      paragraphs: [
        "Decision. I have decided to reroute 1.4 miles of the Kettle Bench Trail away from an eroding bank of Kettle Creek, Lewis County, Washington, building new tread on the slope above and restoring the abandoned segment [INSERT: trail number and work season].",
        "Category. The reroute falls within USDA-26d-USFS, construction and reconstruction of trails, at 7 CFR 1b.4(d)(26), a category that requires documentation. Restoring the old tread may also fit USDA-42d-USFS [INSERT: confirm whether to cite a second category].",
        "Extraordinary circumstances. The interdisciplinary team considered the resources listed at 7 CFR 1b.3(f)(1), including [INSERT: listed fish and critical habitat in Kettle Creek]. I find that no extraordinary circumstances exist. Because the project is categorically excluded, it is not subject to objection under 36 CFR 218.",
      ],
    },
  },
  comparison: [
    {
      label: "Starting point",
      eplan:
        "A project description or uploaded files; the research agent searches Forest Service project pages, eCFR and the Federal Register",
      manual:
        "Finding a current memo to copy and checking each category against 7 CFR 1b.4 by hand",
    },
    {
      label: "Old templates",
      eplan:
        "Follows the reference you choose and marks every unconfirmed fact as a highlighted [INSERT: …] placeholder",
      manual:
        "Templates built on the rescinded 36 CFR 220 can carry outdated citations",
    },
  ],
  sections: [
    {
      heading:
        "USDA NEPA regulations: what 7 CFR 1b means for the Forest Service",
      paragraphs: [
        "USDA rewrote its department-wide NEPA regulations at 7 CFR part 1b in an interim final rule published July 3, 2025, effective immediately, and adopted it as final, with changes, on April 3, 2026. The rule rescinded seven agency-specific NEPA regulations, including the Forest Service's 36 CFR part 220, and moved what USDA kept into part 1b [[usdaFinal]]. CEQ's directory now lists 7 CFR part 1b as the Forest Service's NEPA procedures [[ceqProcedures]].",
        "Part 1b lets each USDA agency issue its own NEPA guidance where its laws and programs need it, as long as that guidance avoids unnecessary process and does not repeat the rule [[usfs1b2]]. The Forest Service's environmental planning page describes the consolidation and notes that the site is under review, so check the date on any Forest Service guidance before relying on it [[usfsNepaPage]].",
      ],
    },
    {
      heading: "What happened to 36 CFR 220?",
      paragraphs: [
        "USDA rescinded 36 CFR part 220 in full except two pieces it moved into 7 CFR 1b: the categorical exclusions at 220.6(d) and (e), and the emergency provision at 220.4(b)(2). The Forest Service's CEs are now numbered 7 CFR 1b.4(c)(19) through (29) and (d)(26) through (47) [[usdaFinal]].",
        "Forest Service terms and tools went with it. Part 1b no longer uses decision memo or decision notice; it states which CEs need documentation, and those categories did not change [[usdaFinal]]. The Forest Service's determination of NEPA adequacy, used four times in five years, gave way to a USDA-wide provision for relying on existing analysis at 7 CFR 1b.9(e)(8) [[usdaFinal]] [[eisUsda1b9]]. The requirement to publish a schedule of proposed actions was rescinded too [[usdaFinal]]. The final rule also changed several Forest Service CEs:",
      ],
      bullets: [
        "USDA-27c-USFS, for reissuing ski area permits, was removed because 16 U.S.C. 497c(i) already says such a reissuance is not a major Federal action [[usdaFinal]]",
        "USDA-33d-USFS, minor allotment management practices, no longer applies only where no allotment management plan is in place [[usdaFinal]]",
        "USDA-30d-USFS, timber stand and wildlife habitat improvement, was set aside by the U.S. District Court for the District of Oregon on January 13, 2026, in Oregon Wild v. USFS; decisions already signed may proceed, and USDA kept the text while it weighed an appeal [[usdaFinal]] [[usda1b4]]",
        "USDA-38d-USFS: the land management plan approval document required by 36 CFR part 219 now satisfies the category's documentation requirement [[usdaFinal]]",
      ],
    },
    {
      heading: "Forest Service categorical exclusions and the decision memo",
      paragraphs: [
        "7 CFR 1b.4 sorts CEs into two lists: paragraph (c), which needs no NEPA documentation, and paragraph (d), which does [[usda1b4]]. For a (d) category, the responsible official documents a finding of applicability and no extraordinary circumstance, or FANEC, in any format, covering at least the category used, how it fits the action, the resources considered, a statement that no extraordinary circumstance exists, and the date and signature [[usda1b3]].",
        "Once the FANEC is signed, the action may begin unless another law says otherwise [[usda1b3]]. The White River National Forest, for example, titled its August 2025 record for a forest order a FANEC and used the 7 CFR 1b.3 elements as numbered headings [[usfsFanecExample]]. The Forest Service has also adopted 46 CE categories from other agencies, including ones from Interior and the Department of War in 2026 [[usfsNepaPage]]. Forest Service CEs that need documentation include [[usda1b4]]:",
      ],
      bullets: [
        "USDA-26d-USFS: construction and reconstruction of trails",
        "USDA-28d-USFS: special uses that require less than 20 acres of National Forest System land",
        "USDA-34d-USFS: post-fire rehabilitation on up to 4,200 acres, completed within 3 years of the fire",
        "USDA-44d-USFS: construction, reconstruction, decommissioning or disposal of facilities at an existing recreation site",
        "USDA-45d-USFS: road management on up to 8 miles of National Forest System roads, with no construction or realignment",
        "USDA-47d-USFS: restoration and resilience activities on up to 2,800 acres",
      ],
    },
    {
      heading:
        "Extraordinary circumstances: what the responsible official screens",
      paragraphs: [
        "Before applying a CE, the responsible official considers resources in the potentially affected environment, chosen at the official's discretion and informed by interdisciplinary review. The list may include listed species and critical habitat, floodplains and wetlands, special water sources, designated areas such as wilderness and inventoried roadless areas, specially managed areas, important farmland, historic properties, and American Indian and Alaska Native religious or cultural sites [[usda1b3]].",
        "A resource's presence alone is not an extraordinary circumstance; one exists only when there is reasonable uncertainty whether an effect is significant, or certainty that it is. The official may modify the action to remove that uncertainty, and may rely on analysis done for the Endangered Species Act, the National Historic Preservation Act or the Clean Water Act [[usda1b3]].",
      ],
    },
    {
      heading:
        "36 CFR 218 objections: which projects, who can object, and when",
      paragraphs: [
        "36 CFR part 218 is the Forest Service's pre-decisional administrative review, or objection, process for projects that implement a land management plan and are documented with a record of decision or decision notice [[usfsPart218]]; the Forest Service describes these as projects documented in an EA or EIS, with plan amendments and revisions handled under 36 CFR part 219 [[usfsNepaPage]]. Categorically excluded projects are not subject to part 218's notice and comment procedures [[usfsPart218]].",
        "The responsible official publishes a legal notice opening a 30-day comment period for an EA, or a 45-day period after the Federal Register notice of availability for a draft EIS [[usfs218]]. Only people and entities who submitted timely, specific written comments may object, and federal agencies may not. Objections are due 45 days after the legal notice of the EA or final EIS (30 days for Healthy Forests Restoration Act fuel projects), and the reviewing officer has 45 days to respond, extendable by 30 [[usfsPart218]].",
        "Because 7 CFR 1b has no decision notice, USDA lets a FONSI be retitled as a decision document where another regulation requires one, so part 218 keeps working for EAs [[usda1b6]] [[usdaFinal]].",
      ],
    },
    {
      heading: "The proposed rewrite of 36 CFR 218",
      paragraphs: [
        "On February 6, 2026, the Forest Service proposed to rewrite part 218 to reflect the rescission of 36 CFR 220 and NEPA's statutory deadlines. It would cut the comment period from 30 to 10 days for an EA and from 45 to 20 days for an EIS, set objection periods of 10 and 20 days, shorten the response to 15 and 20 days with no extension, and replace newspaper legal notices with notice on the USDA website [[usfs218Proposed]].",
        "Comments closed March 9, 2026 [[usfs218Proposed]]. As of October 2, 2026, the current eCFR text of part 218 still carries the 2013 rule's 45-day objection period, so the proposal has not taken effect [[usfsPart218]]. The proposal would also write into part 218 a 2014 appropriations provision that exempts categorically excluded projects from objection [[usfs218Proposed]].",
      ],
    },
    {
      heading: "Is the Schedule of Proposed Actions (SOPA) still required?",
      paragraphs: [
        "No. USDA rescinded the Forest Service regulation that required a schedule of proposed actions, but says the agency may still publish one or post project information on each forest's or grassland's web page, depending on funding and staffing. USDA is also coordinating with CEQ on a department-wide permitting technology plan that is expected to retire older systems [[usdaFinal]].",
        "Notices that remain required still go online: part 218 legal notices must be posted on the web within 4 days of publication [[usfs218]], and a FONSI issued separately from its EA goes on the USDA website where the EA is published [[usda1b6]]. For an EIS, USDA requires a Federal Register notice of intent that invites public comment [[usdaFinal]].",
      ],
    },
  ],
  outline: {
    heading: "What a Forest Service decision memo (FANEC) contains",
    intro:
      "7 CFR 1b.3(g) lets each agency choose the format but sets minimum elements for the finding the former 36 CFR 220 called a decision memo [[usda1b3]] [[usdaFinal]]. The order below follows the White River National Forest's 2025 FANEC [[usfsFanecExample]].",
    items: [
      {
        title: "Proposed action",
        detail:
          "What, where and when: forest, district, county, miles or acres, and the activities, described well enough to show the category fits [[usda1b3]].",
      },
      {
        title: "Category used",
        detail:
          "The category number and text, such as USDA-26d-USFS at 7 CFR 1b.4(d)(26), noting any category adopted from another agency [[usda1b3]] [[usda1b4]].",
      },
      {
        title: "How the category fits",
        detail:
          "A short explanation tying the action to the category and its limits, such as acres, road miles or a ban on herbicides [[usda1b3]] [[usda1b4]].",
      },
      {
        title: "Resources considered",
        detail:
          "The resources screened for extraordinary circumstances, from the 7 CFR 1b.3(f)(1) list and any others the official chose [[usda1b3]].",
      },
      {
        title: "Other laws",
        detail:
          "Endangered Species Act, National Historic Preservation Act, Clean Water Act and other review records, incorporated by reference [[usda1b3]] [[usfsFanecExample]].",
      },
      {
        title: "Finding",
        detail:
          "A statement that no extraordinary circumstances exist, as informed by interdisciplinary review [[usda1b3]].",
      },
      {
        title: "Administrative review",
        detail:
          "Whether any review process applies; categorically excluded projects fall outside the 36 CFR 218 notice and comment procedures [[usfsPart218]] [[usfsFanecExample]].",
      },
      {
        title: "Date and signature",
        detail:
          "Issued, dated and signed by the responsible official; work can begin after signature unless another law requires otherwise [[usda1b3]].",
      },
    ],
  },
  faq: [
    {
      question: "Where are the USFS NEPA procedures now?",
      answer:
        "In USDA's department-wide NEPA regulations at 7 CFR part 1b. USDA's interim final rule of July 3, 2025 rescinded the Forest Service's own regulations at 36 CFR part 220 and moved its categorical exclusions into 7 CFR 1b.4; the final rule took effect April 3, 2026.",
    },
    {
      question: "Does the Forest Service still use decision memos?",
      answer:
        "Not by that name in regulation. USDA's rule dropped the term and, for categories that need documentation, requires a finding of applicability and no extraordinary circumstance (FANEC) in any format that covers minimum elements. Some forests now title the document a FANEC.",
    },
    {
      question: "Can you object to a categorical exclusion under 36 CFR 218?",
      answer:
        "No. The 36 CFR 218 objection process covers projects documented with a record of decision or decision notice, which the Forest Service describes as projects analyzed in an EA or EIS. Categorically excluded projects are not subject to its notice and comment procedures.",
    },
    {
      question: "How long is the Forest Service objection period?",
      answer:
        "Under the current 36 CFR 218, objections are due 45 days after the legal notice of the EA or final EIS (30 days for Healthy Forests Restoration Act fuel projects), and the reviewing officer has 45 days to respond, extendable by 30. A February 2026 proposal would shorten these periods; it had not taken effect as of October 2, 2026.",
    },
    {
      question: "Does the Forest Service still publish a SOPA?",
      answer:
        "The regulation requiring a schedule of proposed actions was rescinded in 2025. USDA said the agency may keep publishing one or post project information on each forest's web page, depending on funding and staffing.",
    },
    {
      question: "Can ePlan draft a Forest Service decision memo?",
      answer:
        "Yes. Describe the project and ePlan drafts the decision memo or FANEC from a reference document it finds or you upload, marking every fact it cannot confirm, such as survey results or the category number, for you to fill in. The responsible official decides whether the category applies and signs. Drafting decision memos is on the Max plan.",
    },
  ],
};
