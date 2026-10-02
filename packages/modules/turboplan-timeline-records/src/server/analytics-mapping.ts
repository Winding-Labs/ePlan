import {
  ANALYTICS_EVENTS,
  type AnalyticsContext,
  type AnalyticsEvent,
  type AnalyticsSource,
} from "@wildfires-org/turboplan-analytics";
import { TaskStatus } from "@wildfires-org/turboplan-db";

import type { CreateTimelineRecordInput, FieldChange } from "../types";

export type TimelineAnalyticsEvent = {
  event: AnalyticsEvent;
  context: AnalyticsContext;
  extra: Record<string, unknown>;
};

type MappedEvent = {
  event: AnalyticsEvent;
  extra?: Record<string, unknown>;
};

// Tied to the DB enum so a status rename is a compile-time signal here,
// not a silently dead mapping.
const COMPLETED_STATUS = TaskStatus.COMPLETED as string;

const findChange = (
  input: CreateTimelineRecordInput,
  ...fields: string[]
): FieldChange | undefined => {
  return input.changes?.find((change) => fields.includes(change.field));
};

const isCompletedChange = (change: FieldChange | undefined): boolean => {
  return (
    change !== undefined &&
    String(change.newValue).toLowerCase() === COMPLETED_STATUS
  );
};

/** Whether an assignee change ADDS someone — unassigning is not an assignment. */
const addsAssignee = (change: FieldChange | undefined): boolean => {
  if (!change || !Array.isArray(change.newValue)) {
    return false;
  }
  const previous = Array.isArray(change.previousValue)
    ? change.previousValue
    : [];
  return change.newValue.some((id) => !previous.includes(id));
};

/** Undo replays a deleted row: a restore is not a new task or milestone. */
const isRestore = (input: CreateTimelineRecordInput): boolean => {
  return input.metadata?.restored === true;
};

const toSource = (
  metadata: Record<string, unknown> | undefined,
): AnalyticsSource => {
  const source = metadata?.source;
  if (source === "mcp") {
    return "mcp";
  }
  // Documenso records are written by its webhook, not by a user request.
  if (source === "system" || source === "documenso") {
    return "system";
  }
  return "web";
};

const mapProject = (input: CreateTimelineRecordInput): MappedEvent[] => {
  // `project/created` is deliberately NOT mapped: research, cataloger and
  // manual timeline entries all write it too. project_created is emitted
  // explicitly at the real creation sites instead. Submissions write
  // `ownershipStatus` (not `status`), so they never land here as a status
  // change — they have their own explicit events.
  if (input.action !== "updated") {
    return [];
  }
  const events: MappedEvent[] = [];
  const status = findChange(input, "status");
  if (status && typeof status.newValue === "string") {
    events.push({
      event: ANALYTICS_EVENTS.PROJECT_STATUS_CHANGED,
      extra: { status: status.newValue },
    });
  }
  const visibility = findChange(input, "isPublic");
  if (visibility) {
    events.push({
      event: ANALYTICS_EVENTS.PROJECT_VISIBILITY_CHANGED,
      extra: { is_public: visibility.newValue === true },
    });
  }
  return events;
};

const mapTask = (input: CreateTimelineRecordInput): MappedEvent[] => {
  if (input.action === "created") {
    return isRestore(input) ? [] : [{ event: ANALYTICS_EVENTS.TASK_CREATED }];
  }
  if (input.action === "deleted") {
    return [{ event: ANALYTICS_EVENTS.TASK_DELETED }];
  }
  if (input.action !== "updated") {
    return [];
  }
  // One event per update, most significant first.
  if (isCompletedChange(findChange(input, "status"))) {
    return [{ event: ANALYTICS_EVENTS.TASK_COMPLETED }];
  }
  if (addsAssignee(findChange(input, "assigneeIds"))) {
    return [{ event: ANALYTICS_EVENTS.TASK_ASSIGNED }];
  }
  if (findChange(input, "milestone", "milestoneId")) {
    return [{ event: ANALYTICS_EVENTS.TASK_MOVED }];
  }
  return [];
};

const mapMilestone = (input: CreateTimelineRecordInput): MappedEvent[] => {
  if (input.action === "created") {
    return isRestore(input)
      ? []
      : [{ event: ANALYTICS_EVENTS.MILESTONE_CREATED }];
  }
  if (input.action === "deleted") {
    return [{ event: ANALYTICS_EVENTS.MILESTONE_DELETED }];
  }
  if (
    input.action === "updated" &&
    isCompletedChange(findChange(input, "status"))
  ) {
    return [{ event: ANALYTICS_EVENTS.MILESTONE_COMPLETED }];
  }
  return [];
};

/**
 * Signing requests live on `document` records too. `signing` records come
 * from user requests (send, in-app completion); `documenso` records from its
 * webhook. Completion is recorded by exactly one of the two — the webhook
 * skips a request the in-app completion already finalized — so both map to
 * signature_completed without double counting.
 */
const mapSigning = (
  input: CreateTimelineRecordInput,
  source: unknown,
): MappedEvent[] => {
  const signingEvent = input.metadata?.event;
  if (source === "signing") {
    if (input.action === "created") {
      return [{ event: ANALYTICS_EVENTS.SIGNATURE_REQUESTED }];
    }
    if (input.action === "updated" && signingEvent === "completed") {
      return [{ event: ANALYTICS_EVENTS.SIGNATURE_COMPLETED }];
    }
    return [];
  }
  if (input.action === "updated" && signingEvent === "completed") {
    return [{ event: ANALYTICS_EVENTS.SIGNATURE_COMPLETED }];
  }
  if (input.action === "updated" && signingEvent === "rejected") {
    return [
      {
        event: ANALYTICS_EVENTS.SIGNATURE_DECLINED,
        extra: { reason: "rejected" },
      },
    ];
  }
  if (input.action === "deleted" && signingEvent === "cancelled") {
    return [
      {
        event: ANALYTICS_EVENTS.SIGNATURE_DECLINED,
        extra: { reason: "cancelled" },
      },
    ];
  }
  return [];
};

const mapDocument = (input: CreateTimelineRecordInput): MappedEvent[] => {
  const source = input.metadata?.source;
  if (source === "signing" || source === "documenso") {
    return mapSigning(input, source);
  }
  if (input.action === "created" || input.action === "added") {
    return [{ event: ANALYTICS_EVENTS.DOCUMENT_UPLOADED }];
  }
  if (input.action === "deleted" || input.action === "removed") {
    return [{ event: ANALYTICS_EVENTS.DOCUMENT_DELETED }];
  }
  return [];
};

const mapMember = (input: CreateTimelineRecordInput): MappedEvent[] => {
  const roleChange = findChange(input, "role");
  const member = {
    entity_type: "project",
    member_user_id: input.entityId,
    ...(typeof roleChange?.newValue === "string"
      ? { role: roleChange.newValue }
      : {}),
  };
  if (input.action === "added") {
    return [
      {
        event: ANALYTICS_EVENTS.MEMBER_JOINED,
        extra: { ...member, via: "added" },
      },
    ];
  }
  if (input.action === "role_changed") {
    return [{ event: ANALYTICS_EVENTS.MEMBER_ROLE_CHANGED, extra: member }];
  }
  if (input.action === "removed") {
    return [{ event: ANALYTICS_EVENTS.MEMBER_REMOVED, extra: member }];
  }
  return [];
};

const mapRecord = (input: CreateTimelineRecordInput): MappedEvent[] => {
  switch (input.entityType) {
    case "project":
      return mapProject(input);
    case "task":
      return mapTask(input);
    case "milestone":
      return mapMilestone(input);
    case "document":
      return mapDocument(input);
    case "member":
      return mapMember(input);
    case "comment":
      return input.action === "created"
        ? [{ event: ANALYTICS_EVENTS.COMMENT_CREATED }]
        : [];
    case "field":
      return input.action === "created"
        ? [{ event: ANALYTICS_EVENTS.FIELD_CREATED }]
        : [];
    case "map_layer":
      return input.action === "created"
        ? [{ event: ANALYTICS_EVENTS.MAP_LAYER_ADDED }]
        : [];
    default:
      return [];
  }
};

/**
 * Maps a written timeline record to the product analytics events it implies
 * (usually zero or one). The timeline is project-scoped and every mutation
 * flows through the recorder (web, MCP, webhooks), so this one mapping gives
 * every process that registers an analytics sink the same project-data
 * events. Organization/office events are not derivable here — those are
 * emitted at the workspace routes instead.
 */
export const toTimelineAnalyticsEvents = (
  input: CreateTimelineRecordInput,
): TimelineAnalyticsEvent[] => {
  const context: AnalyticsContext = {
    distinctId: input.userId,
    userId: input.userId,
    projectId: input.projectId,
    source: toSource(input.metadata),
  };
  return mapRecord(input).map(({ event, extra }) => ({
    event,
    context,
    extra: { entity_id: input.entityId, ...extra },
  }));
};
