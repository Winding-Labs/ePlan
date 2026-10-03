---
"turboplan-landing-page": patch
---

The sitemap no longer lists catalog office pages. They are noindex (their
project and template lists load in the browser), so all 235 were "noindex page
in sitemap" errors, and one was a 404. Crawlers still reach them through the
organization pages. Generating the sitemap also costs one public API call per
organization less.
