---
"@wildfires-org/turboplan-map": patch
---

Fix stored XSS in project maps. GeoJSON feature property values were inserted
into Leaflet popups and permanent feature labels as raw HTML, so a project
editor could upload a layer whose properties ran script for every viewer —
including anonymous viewers of public projects. Popup and label content is now
built as DOM text nodes.
