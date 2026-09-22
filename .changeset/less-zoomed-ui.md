---
"turboplan": minor
"turboplan-landing-page": minor
"@wildfires-org/turboplan-utils": minor
---

Make the interface a little less zoomed, and let people adjust it.

Both the web app and the landing page now render at 93.75% via CSS `zoom`, so
more content fits on screen. `zoom` is used rather than a smaller
root font size because both apps hardcode a lot of pixel utilities
(`text-[36px]`, `h-[34px]`, `gap-[12px]`): a root font size only scales `rem`,
which left every heading, control height and gap untouched.

Profile → Appearance has an "Interface scale" slider (80–120%) that overrides
the default. The value is stored in the `turboplan-ui-scale` cookie rather than
`localStorage` so the landing page honours it too — `localStorage` is
partitioned per origin, while cookies key on host and can be scoped to a shared
parent domain via the existing `AUTH_COOKIE_DOMAIN`. The landing page reads and
applies the value but has no control of its own. Per-device, not synced to the
account.

Both root layouts read the cookie on the server and render `--ui-scale` onto
`<html>`, so the first paint is already at the chosen scale. Statically
generated pages (the landing page's `/docs`) have no request to read from and
are generated at the default scale, corrected on the client after hydration.

Both apps also re-read the cookie while a page is open — on focus, tab visibility,
bfcache restore and a slow poll — so a tab that was already open when the scale
changed elsewhere updates without a reload. Cookies fire no change event, and
the two apps are separate origins, so `storage` events and BroadcastChannel are
not available.

The scale is published as the `--ui-scale` custom property on `<html>`, and
each stylesheet zooms the children of `<body>` by it — everything except
Radix's popper wrappers, whose content is zoomed instead. The zoom must stay
off `<html>`: Floating UI positions menus, popovers, selects and tooltips in
visual pixels, and a zoomed ancestor scales that position a second time, so a
popper drifts by (scale - 1) x its distance from the top-left corner. At 93.75%
a menu 400px down the page opened ~22px too high, on top of its own trigger,
where the mouse-up of the opening click selected the item under the cursor and
closed it again. The variable exists
because viewport units need compensating: they resolve against the unzoomed
visual viewport and are only then scaled, so an unadjusted `h-svh` rendered at
93.75% of the window and left a band down the bottom and right edges. Both
stylesheets divide the scale back out of the screen-height and screen-width
utilities (`vh`, `svh`, `dvh`, `lvh`, `vw`). `svh`/`dvh` matter as much as `vh`
because the shadcn sidebar shell is built on `h-svh`.

Known issue with `zoom`: arbitrary viewport-unit utilities written inline
(`max-h-[80vh]` and friends) are not compensated, so they render at
`--ui-scale` of their intended size.
