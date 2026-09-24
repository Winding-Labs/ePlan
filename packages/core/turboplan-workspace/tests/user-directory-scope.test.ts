import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { EntityType } from "@wildfires-org/turboplan-rbac";

import { buildUserSearchUrl } from "../src/hooks/use-user-search";
import { mergePublicAndAccessibleProjects } from "../src/server/projects/visibility";
import { resolveUserSearchScope } from "../src/server/users/scope";

const ORG_ID = "11111111-1111-4111-8111-111111111111";
const OFFICE_ID = "22222222-2222-4222-8222-222222222222";
const PROJECT_ID = "33333333-3333-4333-8333-333333333333";

describe("resolveUserSearchScope", () => {
  it("maps each single param to its entity", () => {
    assert.deepEqual(resolveUserSearchScope({ organizationId: ORG_ID }), {
      entityType: EntityType.ORGANIZATION,
      entityId: ORG_ID,
    });
    assert.deepEqual(resolveUserSearchScope({ officeId: OFFICE_ID }), {
      entityType: EntityType.OFFICE,
      entityId: OFFICE_ID,
    });
    assert.deepEqual(resolveUserSearchScope({ projectId: PROJECT_ID }), {
      entityType: EntityType.PROJECT,
      entityId: PROJECT_ID,
    });
  });

  it("rejects a search with no scope", () => {
    assert.equal(resolveUserSearchScope({}), null);
    assert.equal(resolveUserSearchScope({ organizationId: "" }), null);
  });

  it("rejects an ambiguous scope", () => {
    assert.equal(
      resolveUserSearchScope({ organizationId: ORG_ID, projectId: PROJECT_ID }),
      null,
    );
  });
});

describe("buildUserSearchUrl", () => {
  it("adds the entity scope param to the scoped search", () => {
    const url = new URL(
      buildUserSearchUrl(
        { entityType: EntityType.OFFICE, entityId: OFFICE_ID },
        "ada",
        10,
      ),
      "http://localhost",
    );

    assert.equal(url.pathname, "/api/users/search");
    assert.equal(url.searchParams.get("q"), "ada");
    assert.equal(url.searchParams.get("limit"), "10");
    assert.equal(url.searchParams.get("officeId"), OFFICE_ID);
  });

  it("uses the admin route for the admin scope", () => {
    const url = new URL(
      buildUserSearchUrl("admin", "ada", 5),
      "http://localhost",
    );

    assert.equal(url.pathname, "/api/admin/users/search");
    assert.equal(url.searchParams.get("q"), "ada");
  });
});

describe("mergePublicAndAccessibleProjects", () => {
  const project = (id: string) => ({
    id,
    creatorEmail: `${id}@example.test`,
  });

  it("drops the creator email from projects known only publicly", () => {
    const merged = mergePublicAndAccessibleProjects(
      [project("public-only"), project("shared")],
      [project("shared"), project("private")],
    );

    assert.deepEqual(merged, [
      { id: "public-only", creatorEmail: null },
      project("shared"),
      project("private"),
    ]);
  });

  it("keeps accessible projects untouched when there is no public list", () => {
    assert.deepEqual(mergePublicAndAccessibleProjects([], [project("a")]), [
      project("a"),
    ]);
  });
});
