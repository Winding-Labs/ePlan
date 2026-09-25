import { NextResponse } from "next/server";

import {
  getChatById,
  getMessagesByChatId,
  saveMessages,
} from "@wildfires-org/turboplan-db/queries";
import {
  formatMemorySnapshot,
  getMemorySnapshot,
} from "@wildfires-org/turboplan-documents/server";

import { auth } from "@/app/(auth)/auth";
import { userCanAccessChat } from "@/lib/api/chat-access";
import { ErrorResponses } from "@/lib/api/utils";
import { RESEARCH_SAVED_TYPE } from "@/lib/research-saved-annotation";

type ResearchSavedBody = {
  id?: string;
  totalSaved: number;
  sections: Array<{
    sectionKey: string;
    savedCount: number;
    itemNames: string[];
  }>;
};

/**
 * Character length of a value once serialized, or -1 when it cannot be
 * serialized. Diagnostics must never break the response.
 */
const safeJsonChars = (value: unknown): number => {
  try {
    return JSON.stringify(value)?.length ?? -1;
  } catch {
    return -1;
  }
};

const isValidResearchSavedBody = (body: unknown): body is ResearchSavedBody => {
  if (typeof body !== "object" || body === null) {
    return false;
  }
  const candidate = body as Record<string, unknown>;
  return (
    typeof candidate.totalSaved === "number" &&
    Array.isArray(candidate.sections)
  );
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ chatId: string }> },
) {
  const startedAt = Date.now();

  try {
    const session = await auth();

    if (!session?.user?.id) {
      return ErrorResponses.unauthorized();
    }

    const resolvedParams = await params;
    const { chatId } = resolvedParams;

    if (!chatId) {
      return ErrorResponses.badRequest("Chat ID is required");
    }

    const hasAccess = await userCanAccessChat(session.user.id, chatId);

    if (!hasAccess) {
      return ErrorResponses.forbidden();
    }

    const messages = await getMessagesByChatId({ id: chatId });

    console.log("[chat-messages] done", {
      chatId,
      count: messages.length,
      jsonChars: safeJsonChars(messages),
      elapsedMs: Date.now() - startedAt,
      mem: formatMemorySnapshot(getMemorySnapshot()),
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("[chat-messages] failed", {
      elapsedMs: Date.now() - startedAt,
      errorName: error instanceof Error ? error.name : typeof error,
      errorMessage: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      mem: formatMemorySnapshot(getMemorySnapshot()),
    });
    return ErrorResponses.internalServerError("Failed to fetch messages");
  }
}

// Persists a "research saved" summary card as an assistant message so it
// survives a page refresh. Intentionally limited to this message type — it is
// not a general-purpose message-injection endpoint.
export async function POST(
  request: Request,
  { params }: { params: Promise<{ chatId: string }> },
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return ErrorResponses.unauthorized();
    }

    const { chatId } = await params;

    if (!chatId) {
      return ErrorResponses.badRequest("Chat ID is required");
    }

    const body = await request.json().catch(() => null);

    if (!isValidResearchSavedBody(body)) {
      return ErrorResponses.badRequest("Invalid research-saved payload");
    }

    const chat = await getChatById({ id: chatId });

    if (!chat) {
      return ErrorResponses.notFound("Chat not found");
    }

    if (chat.userId !== session.user.id) {
      return ErrorResponses.forbidden();
    }

    await saveMessages({
      messages: [
        {
          id: body.id ?? crypto.randomUUID(),
          chatId,
          role: "assistant",
          parts: [
            {
              type: "data-research-saved",
              data: {
                type: RESEARCH_SAVED_TYPE,
                totalSaved: body.totalSaved,
                sections: body.sections,
              },
            },
          ],
          attachments: [],
          createdAt: new Date(),
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving research-saved message:", error);
    return ErrorResponses.internalServerError("Failed to save message");
  }
}
