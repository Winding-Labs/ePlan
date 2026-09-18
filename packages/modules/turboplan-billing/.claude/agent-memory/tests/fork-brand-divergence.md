---
name: fork-brand-divergence
description: This repo is an ePlan fork of upstream turboplan; billing tests that hardcode the brand slug break here — assert against catalog/brand.yaml instead
metadata:
  type: project
---

This checkout is the **ePlan** fork of upstream **turboplan**. `packages/modules/turboplan-billing/catalog/brand.yaml` is fork-owned (`merge=ours` in the repo-root `.gitattributes`) and declares `product: eplan` / `meter_event_name: eplan_credits`, while upstream declares `turboplan`.

**Why:** the two brand values name live Stripe objects (price lookup keys `<product>_pro_monthly`, coupon id prefixes, the usage meter), so each deployment must be able to diverge without upstream merges renaming its Stripe identity.

**How to apply:** any test that hardcodes `"turboplan"` or a `turboplan_*` lookup key is brand-fragile and will fail in this fork. Derive the expected value from `readCatalogSource()` / `catalog.product` / `PLANS[plan].lookup_key` rather than from a literal, and keep the suffix (`_additional_seat`, `_credit_overage`) literal in the expectation so the assertion still pins key structure instead of restating the implementation. As of 2026-09-18 the whole billing suite is brand-agnostic and green (162 pass / 0 fail); `catalog.test.ts`, `seat-items.test.ts`, `stripe-desired-state.test.ts`, `types.test.ts` and `webhook-helpers.test.ts` were all converted. `stripe-diff.test.ts` still contains `turboplan_*` strings deliberately: it never reads the catalog, its fixtures are hand-built and self-consistent, so the brand never reaches an assertion. Genuinely foreign keys (`someone_elses_price`) must stay literal — that is what proves rejection.
