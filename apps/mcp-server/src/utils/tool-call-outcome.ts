// Pure helpers the Worker entry uses to report each tools/call once its
// JSON-RPC response goes out. Kept free of runtime imports so they are
// unit-testable.
import { extractToolCall } from "./request-charges.js";

export type ToolCallOutcome = "success" | "error";

type JsonRpcId = string | number;

const isJsonRpcId = (value: unknown): value is JsonRpcId =>
  typeof value === "string" || typeof value === "number";

/**
 * JSON-RPC id → tool name for every tools/call element of a request. An
 * element without an id is a notification: it never gets a response, so it
 * is not tracked.
 */
export const toolCallNamesById = (
  elements: readonly unknown[],
): Map<JsonRpcId, string> => {
  const names = new Map<JsonRpcId, string>();
  for (const element of elements) {
    const call = extractToolCall(element);
    const id = (element as { id?: unknown } | null)?.id;
    if (call && isJsonRpcId(id)) {
      names.set(id, call.name);
    }
  }
  return names;
};

/**
 * The id and outcome of an outgoing JSON-RPC response, or null for any other
 * message (requests, notifications). A tool that failed answers with a
 * `result` flagged `isError` (handler errors, invalid arguments); a protocol
 * failure answers with `error`.
 */
export const toolCallResponseOutcome = (
  message: unknown,
): { id: JsonRpcId; outcome: ToolCallOutcome } | null => {
  if (typeof message !== "object" || message === null) {
    return null;
  }
  const response = message as Record<string, unknown>;
  if (!isJsonRpcId(response.id)) {
    return null;
  }
  if ("error" in response) {
    return { id: response.id, outcome: "error" };
  }
  if ("result" in response) {
    const result = response.result as { isError?: unknown } | null;
    return {
      id: response.id,
      outcome: result?.isError === true ? "error" : "success",
    };
  }
  return null;
};
