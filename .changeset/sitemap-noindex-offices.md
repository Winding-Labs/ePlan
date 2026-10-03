---
"turboplan-landing-page": patch
---

The sitemap no longer lists catalog office pages. They are noindex (their
project and template lists load in the browser), so all 235 were "noindex page
in sitemap" errors, and one was a 404. Crawlers still reach them through the
organization pages. Generating the sitemap also costs one public API call per
organization less.

Page descriptions are also cut to what a result snippet shows (920 px) at a
word boundary. Catalog project pages passed their whole description, up to
660 characters.
