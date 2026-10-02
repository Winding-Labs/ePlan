import { toAbsoluteUrl } from "./site-url";

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
