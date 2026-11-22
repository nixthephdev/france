# Dedicated navigation pages

## Scope

The user explicitly requested separate pages for the navbar destinations instead of homepage section jumps. This document records that route architecture. The subsequent framed/taupe redesign in docs/taupe-direction.md replaces its original visual world while preserving typography, supplied content, route behaviour and mobile navigation.

## Route contract

| Destination | Route | Visitor job | Opening |
| --- | --- | --- | --- |
| About | /about | Understand France's professional background | Clear page title, supplied portrait and five LinkedIn roles |
| Speaking | /speaking | Explore a speaking or mentorship invitation | Page heading, supplied speaker description, event photo with neutral caption |
| Projects | /projects | Find project stories or propose collaboration | Page heading, explicitly unfinished project/photo state and contact path |
| Contact | /contact | Email France or visit her LinkedIn | Page heading, visible email, working mailto and LinkedIn actions |
| Insights | /insights | Browse and read perspectives | Existing index, shareable filters and reading routes |

## Direction contract

THESIS: every navbar destination opens a complete, directly addressable page. The homepage is the portrait-led introduction and journal preview.

OWN-WORLD: inherit the current porcelain, taupe, espresso and walnut system, upright Hanken Grotesk, photographic frames and open reading layouts from DESIGN.md. Reuse existing components and measures.

STORY: choose a destination, read its relevant material, then continue to insights or contact. Current-page navigation is identified visually and with aria-current, including Insights article routes.

FIRST VIEWPORT: inner pages use normal paper navigation and a clear h1; About pairs portrait with roles, Speaking leads into the event feature, Projects shows its honest empty state, Contact presents direct contact actions. Mobile stacks content without hiding the About portrait.

FORM: seed: none (pinned). The user asked to “use the navbar links, create the actual pages of whats on nav bar”; the existing system and the migrated content determine these pages. No new aesthetic selection or comp reproduction is claimed.

FINISH: verify direct loads, desktop and mobile navigation, current-page states, home links, contact targets, insight filters, keyboard dismissal, responsive layouts, metadata, production build and rendered pages. Obtain an independent finish review of the extension; document its exact scope.

## Content limits

The supplied LinkedIn roles are not expanded into unsupported biography claims. The ASEAN image does not establish a speaking role at that event. Project evidence and speaking video remain unsupplied. Editorial samples remain disclosed. Email opens the visitor's mail application; there is no simulated submission form.

## Verification

- ESLint and the production build, including TypeScript compilation, passed.
- All five destinations return HTTP 200 on direct loads with a single visible h1 and dedicated metadata.
- Desktop navigation, browser back/forward, brand-to-home links and all mobile menu destinations passed.
- Current-page states, including nested insight articles, mobile focus containment, Escape dismissal, focus return and route dismissal passed.
- All page layouts checked at 320, 390, 768 and 1440px; an initial project-placeholder sizing overflow was fixed and the complete matrix rerun.
- About roles match the supplied text; contact email/LinkedIn, speaking invitations and collaboration links point to real destinations.
- Existing insight filtering, homepage reading/story links and reduced-motion behavior passed; no browser errors observed.
- Thirteen desktop/mobile/page/menu captures were opened and validated against the production server at http://127.0.0.1:3003.
- Source detector returned no findings. Asset provenance scan reported two rasters and no missing origins.

The independent review found one material issue: the active Contact action's current-page outline overrode its keyboard-focus outline. The correction explicitly restores a distinct 2px focus outline at 5px offset, while the unfocused current-page marker stays 1px at 3px offset. The full routing/capture matrix passed again after this correction, including runtime measurements of both outline states and additional focused-control evidence. The reviewer scored the focus fix **resolved**, found all 13 required recaptures valid with no visible regressions from the correction batch, and returned **ship** at that fix's scope within the previously reviewed extension. These checks do not turn editorial samples or missing project stories into approved client content.
