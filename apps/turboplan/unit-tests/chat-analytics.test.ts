import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { chatMessageAnalytics } from "../lib/chat-analytics.js";

const text = { type: "text" };
const file = { type: "file" };

describe("chatMessageAnalytics", () => {
  it("marks the chat's first user message as its start", () => {
    assert.deepEqual(chatMessageAnalytics([{ role: "user", parts: [text] }]), {
      message_index: 1,
      has_attachments: false,
      is_first_message: true,
    });
  });

  it("indexes by user messages only, across the full history", () => {
    const analytics = chatMessageAnalytics([
      { role: "user", parts: [text] },
      { role: "assistant", parts: [text] },
      { role: "user", parts: [text] },
      { role: "assistant", parts: [text] },
      { role: "user", parts: [text] },
    ]);
    assert.equal(analytics.message_index, 3);
    assert.equal(analytics.is_first_message, false);
  });

  it("treats an initial chat's assistant greeting as not starting it", () => {
    const analytics = chatMessageAnalytics([
      { role: "assistant", parts: [text] },
      { role: "user", parts: [text] },
    ]);
    assert.equal(analytics.message_index, 1);
    assert.equal(analytics.is_first_message, true);
  });

  it("detects attachments on the sent message as file parts or legacy attachments", () => {
    assert.equal(
      chatMessageAnalytics([{ role: "user", parts: [text, file] }])
        .has_attachments,
      true,
    );
    assert.equal(
      chatMessageAnalytics([
        {
          role: "user",
          parts: [text],
          experimental_attachments: [{ url: "https://x.test/a.pdf" }],
        },
      ]).has_attachments,
      true,
    );
  });

  it("ignores attachments on earlier messages", () => {
    const analytics = chatMessageAnalytics([
      { role: "user", parts: [file] },
      { role: "assistant", parts: [text] },
      { role: "user", parts: [text], experimental_attachments: [] },
    ]);
    assert.equal(analytics.has_attachments, false);
  });

  it("reports no message for a history without a user message", () => {
    assert.deepEqual(chatMessageAnalytics([]), {
      message_index: 0,
      has_attachments: false,
      is_first_message: false,
    });
  });
});
