import { HOME_DESCRIPTION, HOME_TAGLINE } from "@/consts/home-metadata";
import {
  DESCRIPTION_MAX_LENGTH,
  indexableRobots,
  isProductionSite,
  TITLE_MAX_LENGTH,
  toAbsoluteUrl,
} from "./site-url";

describe("isProductionSite", () => {
  it("is true only for https://eplan.ai", () => {
    expect(isProductionSite(new URL("https://eplan.ai"))).toBe(true);
    expect(isProductionSite(new URL("https://eplan.ai/nepa"))).toBe(true);
  });

  it("is false for previews, staging, localhost and a missing URL", () => {
    expect(
      isProductionSite(
        new URL("https://turboplan-landing-pr-35.ilya-496.workers.dev"),
      ),
    ).toBe(false);
    expect(
      isProductionSite(
        new URL("https://turboplan-landing-staging.ilya-496.workers.dev"),
      ),
    ).toBe(false);
    expect(isProductionSite(new URL("http://eplan.ai"))).toBe(false);
    expect(isProductionSite(new URL("https://www.eplan.ai"))).toBe(false);
    expect(isProductionSite(new URL("http://localhost:3002"))).toBe(false);
    expect(isProductionSite(undefined)).toBe(false);
  });
});

describe("indexableRobots", () => {
  it("indexes on production", () => {
    expect(indexableRobots(new URL("https://eplan.ai"))).toEqual({
      index: true,
      follow: true,
    });
  });

  it("keeps every other host out of the index", () => {
    expect(
      indexableRobots(
        new URL("https://turboplan-landing-pr-35.ilya-496.workers.dev"),
      ),
    ).toEqual({ index: false, follow: false });
  });
});

describe("home metadata", () => {
  it("fits Google's title and description lengths", () => {
    expect(`ePlan.ai | ${HOME_TAGLINE}`.length).toBeLessThanOrEqual(
      TITLE_MAX_LENGTH,
    );
    expect(HOME_DESCRIPTION.length).toBeLessThanOrEqual(DESCRIPTION_MAX_LENGTH);
  });
});

describe("toAbsoluteUrl", () => {
  it("joins a path onto the site origin", () => {
    expect(
      toAbsoluteUrl("/nepa/scoping-letter", new URL("https://eplan.ai")),
    ).toBe("https://eplan.ai/nepa/scoping-letter");
  });

  it("keeps the path relative, with a warning, when no origin is configured", () => {
    const warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});

    expect(toAbsoluteUrl("/sitemap.xml", undefined)).toBe("/sitemap.xml");
    expect(warnSpy).toHaveBeenCalled();

    warnSpy.mockRestore();
  });
});
