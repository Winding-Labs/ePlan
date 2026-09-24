// ============================================================================
// USERS ROUTER
// ============================================================================
// Provides REST API endpoint for searching users by email or name, scoped to
// an organization tree the caller can read.
// ============================================================================

import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

import { Action } from "@wildfires-org/turboplan-rbac";
import {
  type RBACContext,
  requirePermission,
} from "@wildfires-org/turboplan-rbac/hono";

import {
  DEFAULT_USER_SEARCH_LIMIT,
  getOrganizationIdForSearchScope,
  MAX_USER_SEARCH_LIMIT,
  MIN_USER_QUERY_LENGTH,
  searchUsers,
} from "../users/queries";
import { resolveUserSearchScope } from "../users/scope";

const userSearchQuerySchema = z.object({
  q: z.string().min(MIN_USER_QUERY_LENGTH),
  limit: z.coerce
    .number()
    .int()
    .positive()
    .max(MAX_USER_SEARCH_LIMIT)
    .default(DEFAULT_USER_SEARCH_LIMIT)
    .optional(),
});

const scopedUserSearchQuerySchema = userSearchQuerySchema.extend({
  organizationId: z.string().uuid().optional(),
  officeId: z.string().uuid().optional(),
  projectId: z.string().uuid().optional(),
});

export const usersRouter = new Hono<RBACContext>();

/**
 * GET /search?q=<query>&limit=10&(organizationId|officeId|projectId)=<id>
 * Search users by email or name using fuzzy matching.
 *
 * Query params:
 * - q: Search query (required, minimum 3 characters)
 * - limit: Maximum results to return (optional, default 10, max 50)
 * - exactly one of organizationId / officeId / projectId (required): the
 *   entity the search is made for. The caller needs READ on it.
 *
 * Fuzzy matches are limited to members of that entity's organization tree;
 * other accounts are returned only on an exact full-email match.
 *
 * Returns: Array of matching users with id, email, firstName, lastName, avatarUrl
 */
usersRouter.get(
  "/search",
  zValidator("query", scopedUserSearchQuerySchema),
  async (c, next) => {
    const scope = resolveUserSearchScope(c.req.valid("query"));
    if (!scope) {
      return c.json(
        {
          error:
            "Exactly one of organizationId, officeId or projectId is required",
        },
        400,
      );
    }
    return requirePermission(
      scope.entityType,
      Action.READ,
      () => scope.entityId,
    )(c, next);
  },
  async (c) => {
    try {
      const query = c.req.valid("query");
      const { q, limit = DEFAULT_USER_SEARCH_LIMIT } = query;

      // Non-null: the middleware above already rejected a missing scope.
      const scope = resolveUserSearchScope(query)!;
      const organizationId = await getOrganizationIdForSearchScope(scope);
      if (!organizationId) {
        return c.json({ users: [] });
      }

      const users = await searchUsers(q, limit, { organizationId });

      // Remove similarity score from response (internal ranking detail)
      const sanitizedUsers = users.map(({ similarity, ...user }) => user);

      return c.json({ users: sanitizedUsers });
    } catch (error) {
      console.error("Error searching users:", error);
      return c.json({ users: [], message: "Failed to search users" }, 500);
    }
  },
);
