---
"turboplan-landing-page": minor
"@wildfires-org/turboplan-env": minor
"@wildfires-org/turboplan-billing": patch
"turboplan": patch
---

The marketing site now has a Privacy Policy (`/privacy`) and Terms of Service
(`/terms`). Both are in the sitemap. They read the brand name and support email
from env, so forks get their own. The "agree to the Terms of Service and
Privacy Policy" checkbox in landing checkout and in the app's upgrade dialog now
links to them. Before, the links went to `#` or to nothing. A new
`getLandingUrl()` in `@wildfires-org/turboplan-env` builds those links.

The landing app dropped dead code:
- 22 unused files and 27 unused dependencies.
- Its own boilerplate Playwright suite.
- The ESLint and Prettier setup (the repo uses Biome).
- The `dotenv` call in the root layout.
- The `NEXT_PUBLIC_CATALOG_BASE_URL` example variable.
