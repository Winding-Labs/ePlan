---
"turboplan": patch
---

Fix the profile page crashing for users whose session carries no user id. The
avatar in `ProfilePhotoUpload` called `userId.substring(0, 2)` on a value the
profile page passed through a non-null assertion that did not hold, throwing
`Cannot read properties of undefined (reading 'substring')` and taking the whole
page down via the error boundary. The id is only used to seed initials when the
profile has no name, so it is now optional.
