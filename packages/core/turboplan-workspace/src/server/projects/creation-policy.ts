import { OwnershipStatus } from "@wildfires-org/turboplan-db";
import { UserRole } from "@wildfires-org/turboplan-db/types";

interface ProjectCreationPolicyInput {
  /** Caller holds CREATE on the target office (staff). False = the government-office application fallback. */
  hasOfficeCreate: boolean;
  /** Caller holds MANAGE_MEMBERS on the target office — the bar for publishing. */
  hasOfficeManageMembers: boolean;
  userRole: string | null | undefined;
  requestedIsPublic: boolean | undefined;
  requestedIsTemplate: boolean | undefined;
}

interface ProjectCreationFlags {
  ownershipStatus: OwnershipStatus;
  isPublic: boolean;
  isTemplate: boolean;
}

/**
 * Decides the ownership / visibility flags of a newly created project.
 *
 * - Government-office fallback (no CREATE on the office): the project is a
 *   citizen application — always a private, non-template DRAFT, whatever the
 *   body asks for or the caller's role is (a user who never finished onboarding
 *   has no role).
 * - Staff (CREATE on the office): citizens start as DRAFT, everyone else
 *   ACCEPTED. `isPublic` / `isTemplate` may only be set by office MANAGE_MEMBERS
 *   holders — the same bar the update route uses for these flags.
 */
export const resolveProjectCreationFlags = ({
  hasOfficeCreate,
  hasOfficeManageMembers,
  userRole,
  requestedIsPublic,
  requestedIsTemplate,
}: ProjectCreationPolicyInput): ProjectCreationFlags => {
  if (!hasOfficeCreate) {
    return {
      ownershipStatus: OwnershipStatus.DRAFT,
      isPublic: false,
      isTemplate: false,
    };
  }

  return {
    ownershipStatus:
      userRole === UserRole.CITIZEN
        ? OwnershipStatus.DRAFT
        : OwnershipStatus.ACCEPTED,
    isPublic: hasOfficeManageMembers && requestedIsPublic === true,
    isTemplate: hasOfficeManageMembers && requestedIsTemplate === true,
  };
};
