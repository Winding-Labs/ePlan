// ============================================================================
// USER SEARCH SCOPE
// ============================================================================
// `GET /api/users/search` is not a global directory: every call names the
// organization, office or project it is searching on behalf of. The caller must
// be able to READ that entity, and fuzzy matches are limited to people inside
// the same organization tree.
// ============================================================================

import { EntityType, type EntityTypeType } from "@wildfires-org/turboplan-rbac";

export type UserSearchEntityScope = {
  entityType: EntityTypeType;
  entityId: string;
};

type ScopeParams = {
  organizationId?: string;
  officeId?: string;
  projectId?: string;
};

/**
 * Turn the query-string scope params into the entity whose READ permission
 * gates the search. Exactly one of them must be present; anything else (none,
 * or an ambiguous combination) yields `null` and a 400.
 */
export const resolveUserSearchScope = (
  params: ScopeParams,
): UserSearchEntityScope | null => {
  const candidates: UserSearchEntityScope[] = [];

  if (params.organizationId) {
    candidates.push({
      entityType: EntityType.ORGANIZATION,
      entityId: params.organizationId,
    });
  }
  if (params.officeId) {
    candidates.push({
      entityType: EntityType.OFFICE,
      entityId: params.officeId,
    });
  }
  if (params.projectId) {
    candidates.push({
      entityType: EntityType.PROJECT,
      entityId: params.projectId,
    });
  }

  return candidates.length === 1 ? candidates[0] : null;
};
