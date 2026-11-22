---
name: "France"
description: "An open editorial portrait introducing ideas about business, people and purpose."
colors:
  background: "#fbf9f5"
  foreground: "#29241e"
  text-secondary: "#5f564c"
  surface: "#e9e0d5"
  accent: "#29241e"
  accent-hover: "#4c4033"
  accent-ink: "#5d4b38"
  line: "#d7cfc4"
  white: "#fffefd"
  canvas: "#f3eee6"
  stone: "#ded2c3"
  scrollbar-thumb: "#9b8772"
  tap-highlight: "#78634c26"
  menu-hover: "#78634c1a"
typography:
  hero:
    fontFamily: "Baskervville, serif"
    fontSize: "clamp(42px, 4.4vw, 64px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  hero-mobile:
    fontFamily: "Baskervville, serif"
    fontSize: "clamp(33px, 8.5vw, 50px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  display:
    fontFamily: "Baskervville, serif"
    fontSize: "clamp(48px, 6vw, 80px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Baskervville, serif"
    fontSize: "clamp(32px, 3.4vw, 48px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  article-title:
    fontFamily: "Baskervville, serif"
    fontSize: "clamp(42px, 5.4vw, 72px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  insight-title:
    fontFamily: "Baskervville, serif"
    fontSize: "clamp(28px, 3vw, 39px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  conversation-title:
    fontFamily: "Baskervville, serif"
    fontSize: "clamp(35px, 3.3vw, 47px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  contact-title:
    fontFamily: "Baskervville, serif"
    fontSize: "clamp(30px, 3.4vw, 46px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  profile-lead:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "clamp(25px, 2.6vw, 34px)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  brand:
    fontFamily: "Baskervville, serif"
    fontSize: "39px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
  footer-brand:
    fontFamily: "Baskervville, serif"
    fontSize: "35px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  journal-title:
    fontFamily: "Baskervville, serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  article-body:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.7
  article-body-mobile:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.7
  action:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.6
  text-link:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.6
  metadata:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  experience-role:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  sheet-description:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "0.875rem"
    lineHeight: "1.25rem"
  size-11:
    fontSize: "11px"
  size-12:
    fontSize: "12px"
  size-13:
    fontSize: "13px"
  size-14:
    fontSize: "14px"
  size-15:
    fontSize: "15px"
  size-16:
    fontSize: "16px"
  size-17:
    fontSize: "17px"
  size-18:
    fontSize: "18px"
  size-19:
    fontSize: "19px"
  size-20:
    fontSize: "20px"
  size-21:
    fontSize: "21px"
  size-22:
    fontSize: "22px"
  size-23:
    fontSize: "23px"
  size-24:
    fontSize: "24px"
  size-25:
    fontSize: "25px"
  size-26:
    fontSize: "26px"
  size-27:
    fontSize: "27px"
  size-28:
    fontSize: "28px"
  size-29:
    fontSize: "29px"
  size-30:
    fontSize: "30px"
  size-31:
    fontSize: "31px"
  size-32:
    fontSize: "32px"
  size-33:
    fontSize: "33px"
  size-35:
    fontSize: "35px"
  size-36:
    fontSize: "36px"
  size-37:
    fontSize: "37px"
  size-39:
    fontSize: "39px"
  size-40:
    fontSize: "40px"
  size-42:
    fontSize: "42px"
  size-46:
    fontSize: "46px"
  size-48:
    fontSize: "48px"
rounded:
  action: "3px"
  focus: "3px"
  contact: "6px"
  event-photo: "10px"
  photo: "12px"
  section: "16px"
  filter: "24px"
  curve: "50%"
  sheet-close: "0.125rem"
  menu-button: "0.375rem"
spacing:
  compact: "10px"
  inset: "20px"
  medium: "24px"
  group: "36px"
  section: "96px"
  section-tablet: "72px"
  section-mobile: "56px"
components:
  reading-button:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "14px 21px"
  reading-button-hover:
    backgroundColor: "{colors.accent-hover}"
  header-contact:
    textColor: "{colors.foreground}"
    rounded: "{rounded.action}"
    padding: "10px 18px"
  header-contact-hover:
    backgroundColor: "{colors.surface}"
  contact-link:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.contact}"
    padding: "13px 20px"
  contact-link-inverse:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.action}"
    rounded: "{rounded.contact}"
    padding: "13px 20px"
  contact-link-inverse-hover:
    backgroundColor: "{colors.surface}"
  publication-navigation:
    textColor: "{colors.foreground}"
  topic-link:
    textColor: "{colors.foreground}"
  topic-filter:
    textColor: "{colors.foreground}"
    rounded: "{rounded.filter}"
    padding: "8px 17px"
  topic-filter-current:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
  journal-preview:
    textColor: "{colors.foreground}"
  editorial-notice:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.contact}"
    padding: "16px 20px"
  experience-disclosure:
    textColor: "{colors.foreground}"
    padding: "6px 0"
---

# Design System: France

## Overview

**Creative North Star: "The Open Editorial Portrait"**

France's site pairs a real portrait with upright serif headlines, warm open fields and a direct invitation to read. The full-width opening has no enclosing frame: a simple curved canvas field meets stone behind the portrait, while generous space keeps the purpose statement and reading action clear.

The same materials continue through dedicated pages, open journal previews, fine editorial rules and restrained photographic windows. Baskervville supplies the reflective voice; Hanken Grotesk keeps navigation, supporting copy and professional experience straightforward. Supplied imagery and visible editorial disclosures keep the publication personal and candid.

**Key Characteristics:**

- Ivory, studio neutrals and dark ink across open surfaces.
- Self-hosted upright Baskervville headlines with Hanken Grotesk supporting text.
- A real portrait silhouette and a broad curved hero field.
- Open journal previews, real page navigation and native experience disclosures.

## Colors

Warm neutral fields create the atmosphere; dark ink carries text and direct actions. Frontmatter names preserve the source custom-property meanings rather than introducing a parallel palette.

### Primary

- **Accent / Dark Ink** fills reading actions and supplies the selection background. **Accent Hover** softens filled actions to a warm brown.
- **Accent Ink** gives categories and current mobile navigation a supporting brown emphasis.

### Secondary

- **Studio Surface** supports speaking panels, invitations, notices and quiet hover fills.
- **Stone** fills the hero behind the portrait; **Canvas** supplies its lighter curved field.

### Neutral

- **Ivory Background** is the page ground; **Foreground / Dark Ink** carries headings, navigation and the dark contact panel.
- **Secondary Text** carries descriptions and metadata; **Line** supplies fine editorial separators and outlined controls.
- **White** supplies inverse action text. **Scrollbar Thumb**, **Tap Highlight** and **Menu Hover** are functional interaction colors, not additional brand accents.

**The Action Mapping Rule.** CSS --accent is dark ink for direct actions. Tailwind --color-accent maps to the studio surface for library ghost states. Preserve these distinct meanings.

## Typography

**Display Font:** self-hosted Baskervville (serif fallback), upright regular (400).
**Body Font:** self-hosted variable Hanken Grotesk (sans-serif fallback), available weights (100?900).

**Character:** the serif is open and reflective; the sans keeps practical information direct. Headings use balanced wrapping and body paragraphs use pretty wrapping. There is no separate mono or label face.

### Hierarchy

- **Hero:** fluid purpose statement with a dedicated mobile range; below (1100px) it becomes (46px), below (720px) it uses the mobile range, and below (370px) it becomes (29px).
- **Display:** page and Insights titles; mobile titles become (48px). Article titles have their own fluid range, a measure (22ch), and mobile size (42px).
- **Headline:** section headings; journal introduction, conversation, invitation and contact titles have local sizes reflected in the size inventory.
- **Title:** open journal preview titles use the journal-title role. Insight-list titles use their fluid role and become (29px) on mobile. Profile names use (32px), then (29px); experience role titles use Hanken, becoming (23px) on mobile.
- **Body:** base reading uses the body role. Article copy uses article-body at a measure (68ch), reduced through article-body-mobile. Introductory copy uses (21px), reduced to (19px); summaries use (18px), reduced to (17px).
- **Action and metadata:** Hanken at medium or semibold weight, without uppercase styling or letterspaced introductory labels. Captions and supporting disclosures use smaller size steps.

The size-only entries in frontmatter inventory every fixed font-size in the global stylesheet, including responsive values and brand shorthand sizes. They inherit family, weight and leading from their semantic role. Fluid entries record each actual clamp rather than inventing a mathematical scale. The sheet description uses Tailwind text-sm (0.875rem / 1.25rem).

**The Two Voices Rule.** Use upright Baskervville for publication headings and Hanken Grotesk for reading, navigation, organisations and role titles. Size and measure carry the hierarchy.

## Layout

The main container caps at (1280px), with desktop side allowances (64px). These narrow to (40px) below (1100px) and (20px) below (720px). Shared section spacing reduces from (96px) to (72px) below (850px), then (56px) below (720px).

The separate ivory header is (108px) high, then (94px) below (850px) and (85px) below (720px). The full-width hero places copy in a left column (56%) and portrait stage on the right (55%), with minimum height (580px), then (520px) below (1100px). Phones stack copy and actions before a portrait stage (310px), reduced to (265px) below (370px).

The topic index uses four desktop columns and two phone columns. The journal places a narrow introduction beside three open previews; below (1100px) the introduction moves above them, and below (720px) previews become a single ruled list. The event photograph and conversation copy form two columns, then one below (720px). The bottom invitation is a full-width tonal band with contents in the shared container.

Dedicated profile, speaking and projects layouts use two columns before stacking below (720px). The profile photograph stays visible on its dedicated mobile page. Experience groups put an organisation column beside a wider roles column, then stack at the same breakpoint. Insight rows put metadata beside copy, then stack it. Contact becomes vertical below (850px); footer and next-page invitations stack below (720px). Desktop navigation becomes a modal mobile sheet below (850px); the sheet is (75%) wide, capped at (24rem) from the library's (640px) breakpoint.

## Elevation & Depth

Editorial surfaces have no box shadows. Depth comes from the real alpha portrait, curved light field against stone, warm tonal sections, fine rules and photography. The mobile modal alone retains a functional overlay (black at 50%) and library sheet shadow: (0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)).

**The Open Surface Rule.** Keep journal previews and experience groups flat. Tonal fields, the portrait silhouette and fine rules supply depth; reserve the sheet shadow for the functional modal.

Color, border and disclosure-chevron transitions use (180ms) with cubic-bezier(0.2, 0.7, 0.2, 1). The sheet opens over (500ms) and closes over (300ms). Reduced-motion preference disables animation, transitions and smooth scrolling. There is no autonomous entrance sequence.

## Shapes

Reading actions and outlined header contact use restrained near-square corners. Contact actions and notices are slightly softer; photographic windows and tonal speaking/contact sections use larger curves. The homepage conversation photograph stays square. Filters are pills, while the homepage topic index is open text.

The broad rotated hero field uses a percentage curve and clips at the full-width hero edges. It is decorative backing, not an enclosing frame. The portrait preserves the supplied face, pose and clothing. Fine separators are (1px); keyboard focus is a current-color outline (2px), offset (5px), with a small corner radius. The radius inventory also records the shipped library close-button and menu-button corners; these do not define editorial container shapes.

## Components

### Buttons

- **Reading action:** dark ink and white, with the frontmatter action shape and padding, minimum height (54px). Mobile uses minimum height (52px), padding (13px 17px), size (15px); the smallest breakpoint reduces padding and type again.
- **Header contact:** outlined, transparent action, minimum height (46px), studio-surface hover and a separate current-page outline.
- **Contact action:** default ink/white treatment with minimum height (56px). Inside the ink contact panel it reverses to ivory/ink and uses studio on hover.
- **Text links:** inline text with optional SVG arrows, minimum target (44px), underline on hover. The hero background link has minimum height (48px).
- **Focus:** visible outlines remain independent of hover. Reading and header actions use foreground focus; contact actions use white on their dark panel.

### Chips

Insights topic filters use a fine border, pill corners and minimum height (44px). The current filter reverses to ink/ivory with aria-current="page". The homepage topic index uses open text links with arrows and minimum height (48px). Both navigate to actual filtered, shareable Insights URLs.

### Cards / Containers

Journal previews are open editorial columns: no card fill, radius or shadow. They use serif titles, brown categories, secondary summaries and a reading link aligned after the summary. Phone previews gain a bottom divider and vertical padding (25px). Insights lists use rule-separated rows.

Editorial notices use studio fill, ink copy and frontmatter spacing, reduced to (15px 17px) on mobile. The project photograph placeholder uses studio surface, soft photo corners, an inline SVG image symbol and an explicit pending-photography message. It is an empty state, not project evidence.

### Navigation

The publication name uses Baskervville above a small Hanken byline. Desktop links use a fine current-page/hover underline and semibold current-page text. The Radix sheet supplies modal focus management and close behavior on mobile; links use large Hanken text, fine dividers and brown current-page emphasis. Its close action is a reachable (44px) target. Preserve /insights, /about, /speaking, /projects and /contact as real destinations.

### Experience disclosures

Native details/summary elements show supplied role details, with a minimum summary target (44px), inline SVG chevron rotating when open, underline hover and visible focus. Organisation headings and role titles use Hanken. Fourteen roles are grouped by organisation on the About page. Their content is supplied profile material.

No form inputs or submission states are implemented; contact uses email and LinkedIn links.

## Do's and Don'ts

### Do:

- **Do** carry ivory, studio neutrals, ink and the upright serif/sans pairing across every route.
- **Do** preserve the real portrait silhouette and keep its curved backing decorative and hidden from assistive technology.
- **Do** keep the reading action before the portrait on phones and preserve open journal previews.
- **Do** preserve real page destinations, shareable topic URLs, visible keyboard focus, reduced-motion behavior and native experience disclosures.
- **Do** keep sample writing and missing project imagery visibly disclosed.

### Don't:

- **Don't** restore the superseded enclosing hero frame, outline lettering or floating featured-insight panel.
- **Don't** import shopping, account or carousel controls from the fashion inspiration.
- **Don't** turn journal previews or experience roles into raised cards.
- **Don't** invent credentials, outcomes, article authorship or replacement portrait details.
