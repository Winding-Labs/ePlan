import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";

import { configureServerAnalytics, trackAnalyticsEvent } from "../src/server";

const STATE_KEY = Symbol.for("@wildfires-org/turboplan-analytics/server");

describe("server analytics sink", () => {
  afterEach(() => {
    configureServerAnalytics(null);
  });

  it("routes trackAnalyticsEvent to the registered sink", () => {
    const seen: string[] = [];
    configureServerAnalytics((event, context) => {
      seen.push(`${event}:${context.distinctId}`);
    });
    trackAnalyticsEvent("project_created", { distinctId: "user_1" });
    assert.deepEqual(seen, ["project_created:user_1"]);
  });

  it("is a silent no-op with no sink, and a throwing sink never escapes", () => {
    trackAnalyticsEvent("project_created", { distinctId: "user_1" });
    configureServerAnalytics(() => {
      throw new Error("boom");
    });
    assert.doesNotThrow(() =>
      trackAnalyticsEvent("project_created", { distinctId: "user_1" }),
    );
  });

  it("lives on globalThis so every bundle-layer copy of the module shares it", () => {
    const sink = () => {};
    configureServerAnalytics(sink);
    const state = (globalThis as Record<symbol, { sink: unknown }>)[STATE_KEY];
    assert.equal(state?.sink, sink);
  });
});
