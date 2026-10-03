import { orderCitations, splitCitations, stripCitations } from "./citations";

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
