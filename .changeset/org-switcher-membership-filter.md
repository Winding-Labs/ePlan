---
"turboplan": minor
"@wildfires-org/turboplan-workspace": minor
"@wildfires-org/turboplan-utils": minor
---

Hide the public agency catalog in the sidebar organization switcher by default.
The switcher previously listed every publicly-listed organization (government
agencies and environmental-planning firms) alongside the ones the user actually
belongs to. A new "Only my organizations" toggle at the bottom of the switcher
popover hides non-member organizations and is **on by default**; turning it off
restores the full catalog. The choice is stored per-device in `localStorage`
under `turboplan-org-switcher-members-only`.

The currently-active organization is always shown, even when the user is not a
member of it. The submit-application and add-project flows are unaffected — they
exist to pick an agency the user is not a member of, so they still list
everything.

`OrganizationWithOffices` gains an additive `isMember` field (true only for a
real RBAC membership at organization, office or project level). The existing
`hasAccess` field could not be used for this, since it is true for every
publicly-listed organization regardless of membership.

`@wildfires-org/turboplan-utils` gains a `Switch` primitive.
