/**
 * The slice of a chat request message the analytics need — structural, so
 * this stays a pure helper (v6 UIMessage, or a v4-era message that still
 * carries `experimental_attachments`).
 */
type ChatRequestMessage = {
  role: string;
  parts?: ReadonlyArray<{ type: string }>;
  experimental_attachments?: ReadonlyArray<unknown>;
};

export type ChatMessageAnalytics = {
  /** 1-based position of the sent message among the chat's user messages. */
  message_index: number;
  has_attachments: boolean;
  /** The chat's first user message — the moment the chat starts. */
  is_first_message: boolean;
};

/**
 * `chat_message_sent` properties for a chat request. The client sends the
 * chat's full history, so the user-message count is the index of the message
 * just sent, and a count of 1 means this message starts the chat — also for
 * an initial chat that was created empty before its first message.
 */
export const chatMessageAnalytics = (
  messages: ReadonlyArray<ChatRequestMessage>,
): ChatMessageAnalytics => {
  const userMessages = messages.filter((message) => message.role === "user");
  const sent = userMessages.at(-1);
  const hasAttachments = Boolean(
    sent &&
      ((sent.experimental_attachments?.length ?? 0) > 0 ||
        sent.parts?.some((part) => part.type === "file")),
  );
  return {
    message_index: userMessages.length,
    has_attachments: hasAttachments,
    is_first_message: userMessages.length === 1,
  };
};
