import {
  guideLinks,
  orderCitations,
  splitCitations,
  stripCitations,
} from "./citations";

describe("splitCitations", () => {
  it("splits text and citation markers in order", () => {
    expect(splitCitations("A rule [[usc4336]] applies [[ceqIfr]].")).toEqual([
      { type: "text", value: "A rule " },
      { type: "cite", key: "usc4336" },
      { type: "text", value: " applies " },
      { type: "cite", key: "ceqIfr" },
      { type: "text", value: "." },
    ]);
  });

  it("returns plain text untouched", () => {
    expect(splitCitations("No sources here.")).toEqual([
      { type: "text", value: "No sources here." },
    ]);
  });
});

describe("guide links", () => {
  it("splits a /for link into its own segment", () => {
    expect(
      splitCitations("See the [Section 7 guide](/for/esa-section-7) [[a]]."),
    ).toEqual([
      { type: "text", value: "See the " },
      { type: "link", label: "Section 7 guide", href: "/for/esa-section-7" },
      { type: "text", value: " " },
      { type: "cite", key: "a" },
      { type: "text", value: "." },
    ]);
  });

  it("leaves a link to anywhere but a guide page as text", () => {
    expect(splitCitations("[out](https://example.com)")).toEqual([
      { type: "text", value: "[out](https://example.com)" },
    ]);
  });

  it("strips a link to its label", () => {
    expect(stripCitations("Read the [IPaC guide](/for/ipac) [[a]].")).toBe(
      "Read the IPaC guide.",
    );
  });

  it("lists the guide paths linked", () => {
    expect(guideLinks(["[a](/for/ipac) and [b](/for)", "none"])).toEqual([
      "/for/ipac",
      "/for",
    ]);
  });
});

describe("orderCitations", () => {
  it("numbers sources by first appearance across texts", () => {
    expect(
      orderCitations(["x [[b]] y [[a]]", "z [[b]] [[c]]", "plain"]),
    ).toEqual(["b", "a", "c"]);
  });
});

describe("stripCitations", () => {
  it("removes markers and the space before punctuation", () => {
    expect(stripCitations("Due in one year [[usc4336a]] [[usda1b5]].")).toBe(
      "Due in one year.",
    );
  });
});
