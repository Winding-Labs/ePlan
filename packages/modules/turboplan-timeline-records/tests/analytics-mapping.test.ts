import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { toTimelineAnalyticsEvents } from "../src/server/analytics-mapping";
import type { CreateTimelineRecordInput } from "../src/types";

const record = (
  overrides: Partial<CreateTimelineRecordInput>,
): CreateTimelineRecordInput => ({
  projectId: "p1",
  userId: "u1",
  entityType: "task",
  entityId: "e1",
  action: "created",
  ...overrides,
});

const eventsOf = (overrides: Partial<CreateTimelineRecordInput>) => {
  return toTimelineAnalyticsEvents(record(overrides)).map((e) => e.event);
};

const only = (overrides: Partial<CreateTimelineRecordInput>) => {
  const events = toTimelineAnalyticsEvents(record(overrides));
  assert.equal(events.length, 1);
  return events[0];
};

describe("toTimelineAnalyticsEvents — context", () => {
  it("is keyed by the acting user, scoped to the project, with the record id", () => {
    const { context, extra } = only({});
    assert.deepEqual(context, {
      distinctId: "u1",
      userId: "u1",
      projectId: "p1",
      source: "web",
    });
    assert.equal(extra.entity_id, "e1");
  });

  it("derives source from the record metadata", () => {
    assert.equal(only({ metadata: { source: "mcp" } }).context.source, "mcp");
    assert.equal(
      only({ metadata: { source: "system" } }).context.source,
      "system",
    );
  });

  it("never copies the record's entity name (often an email) into props", () => {
    const { extra } = only({
      entityType: "member",
      action: "added",
      entityName: "someone@example.test",
    });
    assert.equal(Object.values(extra).includes("someone@example.test"), false);
  });
});

describe("toTimelineAnalyticsEvents — project", () => {
  it("does not map project/created (explicit at the real creation sites)", () => {
    assert.deepEqual(
      eventsOf({ entityType: "project", action: "created" }),
      [],
    );
    // Research / cataloger / manual timeline entries write the same shape.
    assert.deepEqual(
      eventsOf({
        entityType: "project",
        action: "created",
        metadata: { source: "mcp", backfilled: true },
      }),
      [],
    );
  });

  it("maps a status change to project_status_changed", () => {
    const { event, extra } = only({
      entityType: "project",
      action: "updated",
      changes: [
        {
          field: "status",
          previousValue: "active",
          newValue: "completed",
          valueType: "enum",
        },
      ],
    });
    assert.equal(event, "project_status_changed");
    assert.equal(extra.status, "completed");
  });

  it("maps an isPublic change to project_visibility_changed", () => {
    const { event, extra } = only({
      entityType: "project",
      action: "updated",
      changes: [
        {
          field: "isPublic",
          previousValue: false,
          newValue: true,
          valueType: "boolean",
        },
      ],
    });
    assert.equal(event, "project_visibility_changed");
    assert.equal(extra.is_public, true);
  });

  it("emits both when one update changes status and visibility", () => {
    assert.deepEqual(
      eventsOf({
        entityType: "project",
        action: "updated",
        changes: [
          { field: "status", newValue: "on_hold", valueType: "enum" },
          { field: "isPublic", newValue: false, valueType: "boolean" },
        ],
      }),
      ["project_status_changed", "project_visibility_changed"],
    );
  });

  it("ignores other project updates, including submission ownershipStatus", () => {
    assert.deepEqual(
      eventsOf({
        entityType: "project",
        action: "updated",
        changes: [{ field: "name", newValue: "New", valueType: "text" }],
      }),
      [],
    );
    assert.deepEqual(
      eventsOf({
        entityType: "project",
        action: "updated",
        changes: [
          {
            field: "ownershipStatus",
            previousValue: "draft",
            newValue: "submitted",
            valueType: "enum",
          },
        ],
      }),
      [],
    );
  });
});

describe("toTimelineAnalyticsEvents — tasks and milestones", () => {
  it("maps task created", () => {
    assert.deepEqual(eventsOf({}), ["task_created"]);
  });

  it("skips a restored task or milestone", () => {
    assert.deepEqual(eventsOf({ metadata: { restored: true } }), []);
    assert.deepEqual(
      eventsOf({
        entityType: "milestone",
        action: "created",
        metadata: { restored: true },
      }),
      [],
    );
  });

  it("maps task status change to completed", () => {
    assert.deepEqual(
      eventsOf({
        action: "updated",
        changes: [
          { field: "status", newValue: "completed", valueType: "enum" },
        ],
      }),
      ["task_completed"],
    );
  });

  it("ignores task status change to a non-completed status", () => {
    assert.deepEqual(
      eventsOf({
        action: "updated",
        changes: [
          { field: "status", newValue: "in_progress", valueType: "enum" },
        ],
      }),
      [],
    );
  });

  it("maps an assignee addition to task_assigned, not an unassignment", () => {
    assert.deepEqual(
      eventsOf({
        action: "updated",
        changes: [
          {
            field: "assigneeIds",
            previousValue: ["a"],
            newValue: ["a", "b"],
            valueType: "users",
          },
        ],
      }),
      ["task_assigned"],
    );
    assert.deepEqual(
      eventsOf({
        action: "updated",
        changes: [
          {
            field: "assigneeIds",
            previousValue: ["a", "b"],
            newValue: ["a"],
            valueType: "users",
          },
        ],
      }),
      [],
    );
  });

  it("maps task milestone change to task_moved", () => {
    assert.deepEqual(
      eventsOf({
        action: "updated",
        changes: [{ field: "milestone", newValue: "m2", valueType: "text" }],
      }),
      ["task_moved"],
    );
    assert.deepEqual(
      eventsOf({
        action: "updated",
        changes: [{ field: "milestoneId", newValue: "m2", valueType: "text" }],
      }),
      ["task_moved"],
    );
  });

  it("emits one event per task update, completion first", () => {
    assert.deepEqual(
      eventsOf({
        action: "updated",
        changes: [
          { field: "status", newValue: "completed", valueType: "enum" },
          { field: "assigneeIds", newValue: ["b"], valueType: "users" },
          { field: "milestoneId", newValue: "m2", valueType: "text" },
        ],
      }),
      ["task_completed"],
    );
  });

  it("maps task deleted", () => {
    assert.deepEqual(eventsOf({ action: "deleted" }), ["task_deleted"]);
  });

  it("maps milestone created, completed and deleted", () => {
    assert.deepEqual(eventsOf({ entityType: "milestone", action: "created" }), [
      "milestone_created",
    ]);
    assert.deepEqual(
      eventsOf({
        entityType: "milestone",
        action: "updated",
        changes: [
          { field: "status", newValue: "completed", valueType: "enum" },
        ],
      }),
      ["milestone_completed"],
    );
    assert.deepEqual(eventsOf({ entityType: "milestone", action: "deleted" }), [
      "milestone_deleted",
    ]);
  });
});

describe("toTimelineAnalyticsEvents — documents and signing", () => {
  it("maps document lifecycle", () => {
    assert.deepEqual(eventsOf({ entityType: "document", action: "created" }), [
      "document_uploaded",
    ]);
    assert.deepEqual(eventsOf({ entityType: "document", action: "added" }), [
      "document_uploaded",
    ]);
    assert.deepEqual(eventsOf({ entityType: "document", action: "deleted" }), [
      "document_deleted",
    ]);
    assert.deepEqual(eventsOf({ entityType: "document", action: "removed" }), [
      "document_deleted",
    ]);
  });

  it("maps a signing request send to signature_requested, as a user action", () => {
    const { event, context } = only({
      entityType: "document",
      action: "created",
      metadata: { source: "signing", event: "invited" },
    });
    assert.equal(event, "signature_requested");
    assert.equal(context.source, "web");
  });

  it("maps signing completion from either the app or the Documenso webhook", () => {
    assert.deepEqual(
      eventsOf({
        entityType: "document",
        action: "updated",
        metadata: { source: "signing", event: "completed" },
      }),
      ["signature_completed"],
    );
    const webhook = only({
      entityType: "document",
      action: "updated",
      metadata: { source: "documenso", event: "completed" },
    });
    assert.equal(webhook.event, "signature_completed");
    assert.equal(webhook.context.source, "system");
  });

  it("maps Documenso rejection and cancellation to signature_declined", () => {
    const rejected = only({
      entityType: "document",
      action: "updated",
      metadata: { source: "documenso", event: "rejected", reason: "free text" },
    });
    assert.equal(rejected.event, "signature_declined");
    // The signer's free-text reason never leaves the timeline.
    assert.equal(rejected.extra.reason, "rejected");

    const cancelled = only({
      entityType: "document",
      action: "deleted",
      metadata: { source: "documenso", event: "cancelled" },
    });
    assert.equal(cancelled.event, "signature_declined");
    assert.equal(cancelled.extra.reason, "cancelled");
  });

  it("never maps a signing record to a document upload or deletion", () => {
    assert.deepEqual(
      eventsOf({
        entityType: "document",
        action: "updated",
        metadata: { source: "documenso", event: "signed" },
      }),
      [],
    );
    assert.deepEqual(
      eventsOf({
        entityType: "document",
        action: "deleted",
        metadata: { source: "signing", event: "cancelled" },
      }),
      [],
    );
  });
});

describe("toTimelineAnalyticsEvents — members and project data", () => {
  it("maps member added, role change and removal", () => {
    const joined = only({
      entityType: "member",
      action: "added",
      entityId: "member_1",
      changes: [{ field: "role", newValue: "editor", valueType: "role" }],
    });
    assert.equal(joined.event, "member_joined");
    assert.deepEqual(joined.extra, {
      entity_id: "member_1",
      entity_type: "project",
      member_user_id: "member_1",
      role: "editor",
      via: "added",
    });

    const roleChanged = only({
      entityType: "member",
      action: "role_changed",
      entityId: "member_1",
      changes: [
        {
          field: "role",
          previousValue: "viewer",
          newValue: "owner",
          valueType: "role",
        },
      ],
    });
    assert.equal(roleChanged.event, "member_role_changed");
    assert.equal(roleChanged.extra.member_user_id, "member_1");
    assert.equal(roleChanged.extra.role, "owner");

    const removed = only({
      entityType: "member",
      action: "removed",
      entityId: "member_1",
    });
    assert.equal(removed.event, "member_removed");
    assert.equal(removed.extra.entity_type, "project");
    assert.equal(removed.extra.member_user_id, "member_1");
  });

  it("maps comment, field and map layer creation", () => {
    assert.deepEqual(eventsOf({ entityType: "comment" }), ["comment_created"]);
    assert.deepEqual(eventsOf({ entityType: "field" }), ["field_created"]);
    assert.deepEqual(eventsOf({ entityType: "map_layer" }), [
      "map_layer_added",
    ]);
    assert.deepEqual(
      eventsOf({ entityType: "comment", action: "updated" }),
      [],
    );
  });

  it("returns nothing for out-of-plan record types", () => {
    for (const entityType of ["context", "dependency"] as const) {
      assert.deepEqual(eventsOf({ entityType }), []);
    }
  });
});
