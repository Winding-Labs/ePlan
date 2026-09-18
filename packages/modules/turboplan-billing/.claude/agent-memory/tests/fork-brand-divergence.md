---
name: fork-brand-divergence
description: This repo is an ePlan fork of upstream turboplan; billing tests that hardcode the brand slug break here — assert against catalog/brand.yaml instead
metadata:
  type: project
---

This checkout is the **ePlan** fork of upstream **turboplan**. `packages/modules/turboplan-billing/catalog/brand.yaml` is fork-owned (`merge=ours` in the repo-root `.gitattributes`) and declares `product: eplan` / `meter_event_name: eplan_credits`, while upstream declares `turboplan`.

**Why:** the two brand values name live Stripe objects (price lookup keys `<product>_pro_monthly`, coupon id prefixes, the usage meter), so each deployment must be able to diverge without upstream merges renaming its Stripe identity.

**How to apply:** any test that hardcodes `"turboplan"` or a `turboplan_*` lookup key is brand-fragile and will fail in this fork. Derive the expected value from `readCatalogSource()` / the catalog's own `product` (as `tests/catalog.test.ts` now does) rather than from a literal. As of 2026-09-18 the same class of failure still exists in `tests/seat-items.test.ts`, `tests/stripe-desired-state.test.ts`, `tests/types.test.ts` and `tests/webhook-helpers.test.ts` (30 failures total, pre-existing and untouched) — fixture strings in `stripe-diff.test.ts` and the rejection cases in `catalog.test.ts` are arbitrary and pass regardless.
