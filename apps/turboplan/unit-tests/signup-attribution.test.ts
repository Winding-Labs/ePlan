import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  buildAttributionEventProperties,
  mergeSignupAttribution,
} from "../lib/signup-attribution.js";

const cookieAttribution = {
  utm_source: "moab",
  utm_content: "abc123",
  link_code: "abc123",
  link_channel: "email",
  $set_once: {
    initial_utm_source: "moab",
    initial_utm_content: "abc123",
    initial_link_code: "abc123",
    initial_link_channel: "email",
  },
};

describe("mergeSignupAttribution", () => {
  it("lets the caller win on flat keys and keeps cookie-only keys", () => {
    const merged = mergeSignupAttribution(cookieAttribution, {
      signup_flow: "self_service",
      utm_source: "google",
    });
    assert.equal(merged.utm_source, "google");
    assert.equal(merged.signup_flow, "self_service");
    assert.equal(merged.link_code, "abc123");
    assert.equal(merged.utm_content, "abc123");
  });

  it("keeps both the hand-off $initial_* and the cookie initial_* person props", () => {
    const merged = mergeSignupAttribution(cookieAttribution, {
      signup_flow: "register",
      ...buildAttributionEventProperties({ utm_source: "google" }),
    });
    assert.deepEqual(merged.$set_once, {
      initial_utm_source: "moab",
      initial_utm_content: "abc123",
      initial_link_code: "abc123",
      initial_link_channel: "email",
      $initial_utm_source: "google",
    });
    assert.deepEqual(merged.$set, { utm_source: "google" });
  });

  it("returns the caller's properties untouched without cookie attribution", () => {
    const caller = { signup_flow: "register", method: "register" };
    assert.deepEqual(mergeSignupAttribution({}, caller), caller);
  });
});
