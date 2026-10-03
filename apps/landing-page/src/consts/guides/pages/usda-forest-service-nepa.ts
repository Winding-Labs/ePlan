import type { GuidePath } from "../paths";
import type { GuideContent, Source } from "../types";

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

export const entry: GuideContent<GuidePath> = {
  path: "/for/usda-forest-service-nepa",
  title: "Forest Service NEPA: 7 CFR 1b and Decision Memos",
  description:
    "Forest Service NEPA under USDA's 7 CFR 1b: categorical exclusions, decision memos (FANECs) and 36 CFR 218 objections.",
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
    "Forest Service NEPA is how the U.S. Forest Service assesses the environmental effects of proposed actions on national forests and grasslands before deciding [[usfsNepaPage]]. It runs on USDA's [NEPA regulations](/for/nepa-regulations) at 7 CFR 1b, which replaced the rescinded 36 CFR 220 [[usdaFinal]] [[ceqProcedures]], and projects decided with an [EA](/for/nepa-environmental-assessment) or [EIS](/for/environmental-impact-statement) can draw objections under 36 CFR 218 [[usfsPart218]] [[usfsNepaPage]].",
  glance: [
    {
      label: "Regulations",
      value: "USDA's 7 CFR part 1b, final April 3, 2026 [[usdaFinal]]",
    },
    {
      label: "Who decides",
      value:
        "The responsible official, informed by interdisciplinary review [[usda1b3]]",
    },
    {
      label: "CE record",
      value:
        "A signed FANEC, formerly the decision memo; work may begin once signed [[usda1b3]] [[usdaFinal]]",
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
    prefix: "Draft a Decision Memo for",
    placeholder:
      "I'm planning a project on our ranger district and need a decision memo for…",
    examples: [
      {
        emoji: "🥾",
        label: "Trail Reroute",
        heading: "Trail Reroute",
        eyebrow: "RANGER DISTRICT",
        prompt:
          "I'm the recreation planner on the Cowlitz Valley Ranger District in Washington, rerouting 1.4 miles of the Kettle Bench Trail away from an eroding creek bank and restoring the old tread.",
      },
      {
        emoji: "🏕️",
        label: "Campground Upgrades",
        heading: "Campground Upgrades",
        eyebrow: "DEVELOPED RECREATION",
        prompt:
          "I'm a recreation staff officer on a national forest in Arizona replacing two vault toilets, rebuilding 12 campsites and paving the parking loop at an existing campground.",
      },
      {
        emoji: "🚧",
        label: "Road Decommissioning",
        heading: "Road Decommissioning",
        eyebrow: "WATERSHED RESTORATION",
        prompt:
          "I'm a hydrologist on a national forest in Idaho planning to decommission 6 miles of unneeded system and user-created roads in a steelhead watershed.",
      },
      {
        emoji: "📡",
        label: "Communications Site",
        heading: "a Communications Site",
        eyebrow: "SPECIAL USES",
        prompt:
          "I'm a special uses permit administrator in Colorado reviewing a wireless carrier's request to add an antenna and equipment shelter at an existing communications site on a forest summit.",
      },
      {
        emoji: "🔥",
        label: "Post-Fire Repairs",
        heading: "Post-Fire Repairs",
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
      heading: "USDA NEPA regulations: what replaced 36 CFR 220",
      paragraphs: [
        "USDA replaced seven agency NEPA regulations, including the Forest Service's 36 CFR part 220, with department-wide rules at 7 CFR part 1b: an interim final rule of July 3, 2025, made final on April 3, 2026. Part 220's [categorical exclusions](/for/nepa-categorical-exclusion) moved into part 1b, now numbered 7 CFR 1b.4(c)(19)-(29) and (d)(26)-(47) [[usdaFinal]].",
        "Part 1b replaces the Forest Service's determination of NEPA adequacy with reliance on existing analysis at 7 CFR 1b.9(e)(8) [[usdaFinal]] [[eisUsda1b9]]. The Forest Service notes that its NEPA pages are under review, so check the date on any Forest Service guidance [[usfsNepaPage]].",
      ],
    },
    {
      heading: "USFS NEPA categorical exclusions that need a decision memo",
      paragraphs: [
        "7 CFR 1b.4 lists categories in paragraph (c), which need no NEPA documentation, and paragraph (d), which do [[usda1b4]]. The Forest Service has also adopted 46 categories from other agencies [[usfsNepaPage]]. A federal court set aside USDA-30d-USFS, timber stand and wildlife habitat improvement, on January 13, 2026; decisions already signed may proceed [[usdaFinal]] [[usda1b4]]. Categories that need documentation include [[usda1b4]]:",
      ],
      bullets: [
        "USDA-26d-USFS: construction and reconstruction of trails",
        "USDA-28d-USFS: special uses on less than 20 acres",
        "USDA-34d-USFS: post-fire rehabilitation on up to 4,200 acres, finished within 3 years",
        "USDA-44d-USFS: facilities at an existing recreation site",
        "USDA-45d-USFS: road management on up to 8 miles, with no construction or realignment",
        "USDA-47d-USFS: restoration and resilience activities on up to 2,800 acres",
      ],
    },
    {
      heading: "Extraordinary circumstances: what the official screens",
      paragraphs: [
        "The official chooses which resources to consider, such as listed species and critical habitat, wetlands, inventoried roadless areas, historic properties, and American Indian and Alaska Native religious or cultural sites [[usda1b3]].",
        "A resource's presence is not an extraordinary circumstance; one exists only when it is reasonably uncertain whether an effect is significant, or certain that it is. The official may modify the action to remove that uncertainty, and may rely on Endangered Species Act, National Historic Preservation Act or Clean Water Act analysis [[usda1b3]].",
      ],
    },
    {
      heading: "36 CFR 218 objections: who can object, and by when",
      paragraphs: [
        "Part 218 covers projects that implement a land management plan and are decided with an EA or EIS [[usfsPart218]] [[usfsNepaPage]]; because part 1b has no decision notice, a FONSI can be titled as the decision document [[usda1b6]] [[usdaFinal]]. Only those who submitted timely, specific written comments may object, and federal agencies may not [[usfsPart218]].",
        "Objections are due 45 days after the legal notice of the EA or final EIS, or 30 days for Healthy Forests Restoration Act fuel projects; the reviewing officer has 45 days to respond, extendable by 30 [[usfsPart218]]. A February 2026 proposal would shorten these periods but had not taken effect as of October 2, 2026 [[usfs218Proposed]] [[usfsPart218]].",
      ],
    },
  ],
  outline: {
    heading: "What a Forest Service decision memo (FANEC) contains",
    intro:
      "7 CFR 1b.3(g) leaves the format open but sets minimum elements [[usda1b3]]; this order follows a 2025 White River National Forest FANEC [[usfsFanecExample]].",
    items: [
      {
        title: "Proposed action",
        detail:
          "What, where and when: forest, district, county, acres or miles and activities, in enough detail to show the category fits [[usda1b3]].",
      },
      {
        title: "Category used",
        detail:
          "Number and text, such as USDA-26d-USFS at 7 CFR 1b.4(d)(26), noting any category adopted from another agency [[usda1b3]] [[usda1b4]].",
      },
      {
        title: "How the category fits",
        detail:
          "How the action stays within the category's limits, such as acres, road miles or a ban on herbicides [[usda1b3]] [[usda1b4]].",
      },
      {
        title: "Resources considered",
        detail:
          "The resources screened, from the 7 CFR 1b.3(f)(1) list and any others the official chose [[usda1b3]].",
      },
      {
        title: "Other laws",
        detail:
          "Endangered Species Act, National Historic Preservation Act and Clean Water Act records, incorporated by reference [[usda1b3]] [[usfsFanecExample]].",
      },
      {
        title: "Finding",
        detail:
          "A statement that no extraordinary circumstances exist [[usda1b3]].",
      },
      {
        title: "Administrative review",
        detail:
          "Which review process, if any, applies to the decision [[usfsFanecExample]].",
      },
      {
        title: "Date and signature",
        detail: "Dated and signed by the responsible official [[usda1b3]].",
      },
    ],
  },
  faq: [
    {
      question: "Does the Forest Service still use decision memos?",
      answer:
        "Not by that name in regulation. 7 CFR 1b calls the record a finding of applicability and no extraordinary circumstance (FANEC), in any format that covers the minimum elements, and the categories that need one did not change. Some forests now title the document a FANEC.",
    },
    {
      question: "Can you object to a categorical exclusion under 36 CFR 218?",
      answer:
        "No. Categorically excluded projects are not subject to the part 218 notice and comment procedures, and a 2014 appropriations provision exempts them from objection.",
    },
    {
      question: "Is the Forest Service SOPA still required?",
      answer:
        "No. USDA rescinded the regulation requiring a schedule of proposed actions, but a forest may still publish one or post project information on its web page, depending on funding and staffing.",
    },
    {
      question: "Can ePlan draft a Forest Service decision memo?",
      answer:
        "Yes. Describe the project and ePlan drafts the decision memo (FANEC) from a reference it finds or you upload, marking every fact it cannot confirm for you to fill in. The responsible official decides whether the category applies and signs. Drafting decision memos is on the Max plan.",
    },
  ],
};
