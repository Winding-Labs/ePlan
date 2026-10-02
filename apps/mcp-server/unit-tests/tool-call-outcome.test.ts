import assert from "node:assert";
import { describe, it } from "node:test";

import {
  toolCallNamesById,
  toolCallResponseOutcome,
} from "../src/utils/tool-call-outcome.js";

const toolCall = (id: unknown, name: string) => ({
  jsonrpc: "2.0",
  id,
  method: "tools/call",
  params: { name, arguments: {} },
});

describe("toolCallNamesById", () => {
  it("maps every tools/call element of a batch by its JSON-RPC id", () => {
    const names = toolCallNamesById([
      toolCall(1, "create_task"),
      toolCall("b", "get_project"),
      { jsonrpc: "2.0", id: 3, method: "tools/list" },
    ]);
    assert.deepStrictEqual(
      [...names],
      [
        [1, "create_task"],
        ["b", "get_project"],
      ],
    );
  });

  it("skips tools/call notifications, which never get a response", () => {
    const names = toolCallNamesById([
      toolCall(undefined, "create_task"),
      toolCall(null, "get_project"),
    ]);
    assert.strictEqual(names.size, 0);
  });
});

describe("toolCallResponseOutcome", () => {
  it("is a success for a result without isError", () => {
    assert.deepStrictEqual(
      toolCallResponseOutcome({
        jsonrpc: "2.0",
        id: 1,
        result: { content: [{ type: "text", text: "{}" }] },
      }),
      { id: 1, outcome: "success" },
    );
  });

  it("is an error for a tool result flagged isError", () => {
    assert.deepStrictEqual(
      toolCallResponseOutcome({
        jsonrpc: "2.0",
        id: "a",
        result: {
          isError: true,
          content: [{ type: "text", text: "Access denied." }],
        },
      }),
      { id: "a", outcome: "error" },
    );
  });

  it("is an error for a JSON-RPC error response", () => {
    assert.deepStrictEqual(
      toolCallResponseOutcome({
        jsonrpc: "2.0",
        id: 2,
        error: { code: -32602, message: "Invalid params" },
      }),
      { id: 2, outcome: "error" },
    );
  });

  it("ignores requests, notifications and non-objects", () => {
    assert.strictEqual(
      toolCallResponseOutcome({
        jsonrpc: "2.0",
        method: "notifications/progress",
        params: {},
      }),
      null,
    );
    assert.strictEqual(
      toolCallResponseOutcome({ jsonrpc: "2.0", id: 4, method: "ping" }),
      null,
    );
    assert.strictEqual(toolCallResponseOutcome(null), null);
  });
});
