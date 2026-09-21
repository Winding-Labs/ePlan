"use client";

import {
  useDeferredValue,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  ArrowLeftRight,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";
import { useLocalStorage } from "usehooks-ts";

import { cn, Switch } from "@wildfires-org/turboplan-utils";
import type { OrganizationWithOffices } from "@wildfires-org/turboplan-workspace/types";

import { OrgAvatar } from "../org-avatar";

export const ORG_MEMBERSHIP_FILTER_STORAGE_KEY =
  "turboplan-org-switcher-members-only";

/**
 * Narrows orgs (and their offices) to those matching a free-text query. Kept
 * standalone so the empty state can re-run it against the unfiltered catalog.
 */
const filterByQuery = (
  organizations: OrganizationWithOffices[],
  query: string,
) => {
  const q = query.toLowerCase().trim();
  if (!q) {
    return organizations;
  }

  return organizations
    .map((org) => {
      const orgNameMatches =
        org.name.toLowerCase().includes(q) ||
        (org.shortName?.toLowerCase().includes(q) ?? false);
      const matchingOffices = org.offices.filter((office) =>
        office.name.toLowerCase().includes(q),
      );

      if (orgNameMatches) {
        return org;
      }
      if (matchingOffices.length > 0) {
        return { ...org, offices: matchingOffices };
      }
      return null;
    })
    .filter(Boolean) as OrganizationWithOffices[];
};

interface SidebarOrgOfficeSearchProps {
  organizations: OrganizationWithOffices[];
  currentOrgSlug?: string;
  currentOfficeSlug?: string;
  onOfficeSelect: (orgSlug: string, officeSlug: string) => void;
  onOrgSelect: (orgSlug: string) => void;
  listClassName?: string;
  /**
   * When true, organizations without any offices are rendered disabled with a
   * hint and cannot be selected. Used by the submit-application flow, where a
   * project can only be accepted into a specific office of the target org.
   * Defaults to false so sidebar navigation can still switch to office-less orgs.
   */
  requireOffice?: boolean;
  /**
   * When true, renders an "Only my organizations" toggle that hides orgs the
   * user has no RBAC membership in. Only the sidebar switcher wants this — the
   * submit-application and add-project flows exist to pick a government agency
   * the user is by definition *not* a member of, so they keep the full catalog.
   * Defaults to false.
   */
  showMembershipFilter?: boolean;
}

export function SidebarOrgOfficeSearch({
  organizations,
  currentOrgSlug,
  currentOfficeSlug,
  onOfficeSelect,
  onOrgSelect,
  listClassName,
  requireOffice = false,
  showMembershipFilter = false,
}: SidebarOrgOfficeSearchProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const inputRef = useRef<HTMLInputElement>(null);
  const membershipFilterId = useId();

  // `initializeWithValue: false` keeps the first render identical on server and
  // client (see `components/providers/ui-scale-provider.tsx`). The cost is that
  // the first client render reports the default — `true`, i.e. filtered — so a
  // user who turned the filter off sees a one-tick filtered -> unfiltered
  // settle. That direction is the safe one (we never flash orgs the user asked
  // to hide) and the popover mounts on open, so it is not worth more machinery.
  const [onlyMyOrgs, setOnlyMyOrgs] = useLocalStorage<boolean>(
    ORG_MEMBERSHIP_FILTER_STORAGE_KEY,
    true,
    { initializeWithValue: false },
  );
  const isMembershipFilterActive = showMembershipFilter && onlyMyOrgs;

  // Expand current org by default
  const [expandedOrgs, setExpandedOrgs] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    if (currentOrgSlug) {
      const currentOrg = organizations.find((o) => o.slug === currentOrgSlug);
      if (currentOrg) initial.add(currentOrg.id);
    }
    return initial;
  });

  // Auto-focus search input on mount
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(timer);
  }, []);

  const toggleOrg = (orgId: string) => {
    setExpandedOrgs((prev) => {
      const next = new Set(prev);
      if (next.has(orgId)) {
        next.delete(orgId);
      } else {
        next.add(orgId);
      }
      return next;
    });
  };

  // Offices the user cannot open are hidden entirely — clicking one would
  // only land on an access-restricted page (government org offices are
  // always accessible, so this only affects private orgs).
  const accessibleOrganizations = useMemo(
    () =>
      organizations.map((org) => ({
        ...org,
        offices: org.offices.filter((office) => office.hasAccess),
      })),
    [organizations],
  );

  // Membership filter runs first, so the search box searches *within* the
  // user's own orgs. The currently-active org always survives the filter:
  // switching into a catalog org would otherwise make the switcher look like it
  // had lost its own selection.
  const membershipVisible = useMemo(() => {
    if (!isMembershipFilterActive) {
      return accessibleOrganizations;
    }
    return accessibleOrganizations.filter(
      (org) => org.isMember || org.slug === currentOrgSlug,
    );
  }, [accessibleOrganizations, isMembershipFilterActive, currentOrgSlug]);

  const hiddenCount = accessibleOrganizations.length - membershipVisible.length;

  // Filter organizations and offices by search query
  const filtered = useMemo(
    () => filterByQuery(membershipVisible, deferredQuery),
    [membershipVisible, deferredQuery],
  );

  // A query that matches nothing in the user's own orgs but would match in the
  // full catalog gets a pointer at the toggle rather than a bare "not found".
  const catalogOnlyMatches = useMemo(() => {
    if (filtered.length > 0 || hiddenCount === 0 || !deferredQuery.trim()) {
      return 0;
    }
    return filterByQuery(accessibleOrganizations, deferredQuery).length;
  }, [filtered.length, hiddenCount, deferredQuery, accessibleOrganizations]);

  // When searching, auto-expand all filtered orgs
  const effectiveExpandedOrgs = useMemo(() => {
    if (deferredQuery.trim()) {
      return new Set(filtered.map((o) => o.id));
    }
    return expandedOrgs;
  }, [deferredQuery, filtered, expandedOrgs]);

  return (
    <div className="flex flex-col">
      {/* Search input — h-[34px] per Figma */}
      <div className="flex h-[34px] items-center gap-3 px-3 pr-4">
        <Search className="size-[19px] shrink-0 text-neutral-400" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent text-xs leading-4 tracking-[0.12px] text-gray-900 placeholder:text-gray-600 outline-none"
        />
      </div>

      {/* Separator — py-[6px] per Figma */}
      <div className="py-1.5 pr-2">
        <div className="h-px bg-gray-200" />
      </div>

      {/* Org & office list */}
      <div
        className={cn(
          "flex flex-col gap-2 max-h-[60vh] overflow-y-auto",
          listClassName,
        )}
      >
        {filtered.length === 0 && (
          <div className="px-3 pr-4 py-4 text-center">
            <p className="text-sm text-gray-500">
              No organizations or offices found
            </p>
            {catalogOnlyMatches > 0 && (
              <p className="mt-1 text-xs leading-4 text-neutral-400">
                {catalogOnlyMatches === 1
                  ? "1 match is outside your organizations"
                  : `${catalogOnlyMatches} matches are outside your organizations`}{" "}
                — turn off "Only my organizations" to see{" "}
                {catalogOnlyMatches === 1 ? "it" : "them"}.
              </p>
            )}
          </div>
        )}

        {filtered.map((org, index) => {
          const isExpanded = effectiveExpandedOrgs.has(org.id);
          const isCurrentOrg = org.slug === currentOrgSlug;
          const hasOffices = org.offices.length > 0;
          // Office-less orgs are invalid submit targets: a project can only be
          // accepted into an office, so they are disabled when requireOffice.
          const isOfficeless = requireOffice && !hasOffices;

          return (
            <div key={org.id} className="flex flex-col">
              {/* Org header — px-3 py-1.5 per Figma */}
              <div className="group/org flex h-[38px] w-full items-center gap-2 rounded-md px-3 pr-4">
                <button
                  type="button"
                  onClick={() => hasOffices && toggleOrg(org.id)}
                  disabled={isOfficeless}
                  className={cn(
                    "flex flex-1 items-center gap-2 min-w-0 transition-colors",
                    hasOffices ? "cursor-pointer" : "cursor-default",
                    isOfficeless && "opacity-50 cursor-not-allowed",
                  )}
                >
                  <OrgAvatar
                    name={org.name}
                    logoUrl={org.logoUrl}
                    className={cn(
                      "size-[35px] shrink-0 rounded border",
                      isCurrentOrg ? "border-[#1b845c]" : "border-gray-100",
                    )}
                  />
                  <span
                    className="text-sm text-gray-900 truncate"
                    title={org.name}
                  >
                    {org.name}
                  </span>
                </button>
                <div className="flex items-center gap-1 shrink-0">
                  {isOfficeless ? (
                    <span className="text-xs font-medium leading-4 tracking-[0.24px] text-neutral-400">
                      No offices available
                    </span>
                  ) : isCurrentOrg ? (
                    <span className="text-xs font-medium leading-4 tracking-[0.24px] text-[#1b845c]">
                      Active
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOrgSelect(org.slug);
                      }}
                      className="rounded p-0.5 opacity-0 group-hover/org:opacity-100 transition-opacity hover:bg-gray-100"
                      title={`Switch to ${org.name}`}
                    >
                      <ArrowLeftRight className="size-[16px] text-neutral-400" />
                    </button>
                  )}
                  {hasOffices &&
                    (isExpanded ? (
                      <button
                        type="button"
                        onClick={() => toggleOrg(org.id)}
                        className="rounded p-0.5 hover:bg-gray-100 transition-colors"
                      >
                        <ChevronUp className="size-[19px] shrink-0 text-neutral-400" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => toggleOrg(org.id)}
                        className="rounded p-0.5 hover:bg-gray-100 transition-colors"
                      >
                        <ChevronDown className="size-[19px] shrink-0 text-neutral-400" />
                      </button>
                    ))}
                </div>
              </div>

              {/* Office list */}
              {isExpanded && hasOffices && (
                <div className="flex flex-col">
                  {org.offices.map((office) => {
                    const isCurrent =
                      isCurrentOrg && office.slug === currentOfficeSlug;

                    return (
                      <button
                        key={office.id}
                        type="button"
                        onClick={() => {
                          if (!isCurrent) {
                            onOfficeSelect(org.slug, office.slug);
                          }
                        }}
                        className={cn(
                          "group/office flex w-full items-center gap-2 rounded-md px-3 pr-4 py-2.5 text-left transition-colors",
                          isCurrent ? "bg-gray-100" : "hover:bg-gray-50",
                        )}
                      >
                        {/* Left gutter aligns office name with org name; green ✓✓ marks the active office */}
                        <span className="flex size-[35px] shrink-0 items-center justify-center">
                          {isCurrent && (
                            <CheckCheck className="size-[19px] text-[#1b845c]" />
                          )}
                        </span>

                        <span
                          className="flex-1 text-sm text-gray-900 truncate"
                          title={office.name}
                        >
                          {office.name}
                        </span>

                        {!isCurrent && (
                          <span className="flex items-center gap-[5px] opacity-0 group-hover/office:opacity-100 transition-opacity">
                            <Check className="size-[19px] text-[#1489FF]" />
                            <span className="text-xs font-medium leading-4 tracking-[0.24px] text-[#1489FF]">
                              Switch
                            </span>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Separator after expanded org or between collapsed orgs */}
              {index < filtered.length - 1 && (
                <div className="py-3 pr-2">
                  <div className="h-px bg-gray-200" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Membership toggle — deliberately outside the scrolling list container
          so it stays visible while the org list scrolls. */}
      {showMembershipFilter && (
        <>
          <div className="py-1.5 pr-2">
            <div className="h-px bg-gray-200" />
          </div>
          <div className="flex items-center gap-2 px-3 pr-4 py-1">
            {/* `htmlFor` on a <button> is valid — buttons are labelable — and
                avoids nesting a button inside a clickable wrapper. */}
            <label
              htmlFor={membershipFilterId}
              className="flex min-w-0 flex-1 cursor-pointer items-center gap-1.5 text-xs font-medium leading-4 tracking-[0.24px] text-gray-900"
            >
              Only my organizations
              {isMembershipFilterActive && hiddenCount > 0 && (
                <span className="shrink-0 text-neutral-400">
                  {hiddenCount} hidden
                </span>
              )}
            </label>
            <Switch
              id={membershipFilterId}
              checked={onlyMyOrgs}
              onCheckedChange={setOnlyMyOrgs}
              aria-label="Only my organizations"
              // The shared Switch defaults to `bg-primary`, which is near-black
              // in this app and reads as the heaviest element in a popover
              // whose whole accent language is green. Match the "Active" label
              // and the checked-office ticks instead.
              className={cn(onlyMyOrgs && "bg-[#1b845c]")}
            />
          </div>
        </>
      )}
    </div>
  );
}
