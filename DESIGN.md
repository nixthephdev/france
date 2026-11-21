---
name: France
description: An author-led Perspective Catalogue for business, people and purpose.
colors:
  chalk: "#f5f8f7"
  ink: "#173e46"
  secondary-text: "#436168"
  author-surface: "#e0ece9"
  reading-gold: "#dfc47e"
  reading-gold-hover: "#d3b368"
  preview-ink: "#66501e"
  gold-link: "#735c27"
  gold-rule: "#b99a50"
  line: "#b9cdcb"
  inverse-copy: "#d5e2df"
  inverse-caption: "#c2d4d3"
  inverse-rule: "#557779"
  inverse-link: "#e5cc8c"
typography:
  display:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "clamp(56px, 7vw, 100px)"
    fontWeight: 500
    lineHeight: 1.01
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "clamp(30px, 3.2vw, 44px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "clamp(28px, 3vw, 39px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "17px"
    lineHeight: 1.6
  article:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "21px"
    lineHeight: 1.7
  label:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "15px"
    lineHeight: 1.65
  reading-action:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  focus: "2px"
  notice: "4px"
  reading-mobile: "12px"
  reading: "15px"
  filter: "24px"
spacing:
  inline-small: "10px"
  inline: "18px"
  mobile-gutter: "20px"
  author-gap: "42px"
  section-mobile: "52px"
  section-tablet: "64px"
  section: "86px"
components:
  reading-action:
    backgroundColor: "{colors.reading-gold}"
    textColor: "{colors.ink}"
    typography: "{typography.reading-action}"
    rounded: "{rounded.reading}"
    padding: "13px 28px"
  reading-action-hover:
    backgroundColor: "{colors.reading-gold-hover}"
  reading-action-mobile:
    rounded: "{rounded.reading-mobile}"
    padding: "12px 23px"
  filter-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.filter}"
    padding: "8px 17px"
  filter-link-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
  editorial-notice:
    backgroundColor: "{colors.author-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.notice}"
    padding: "16px 20px"
---

# Design System: France

## Overview

**Creative North Star: "The Perspective Catalogue"**

An author-led, upright publication identity: clear humanist typography, pale chalk ground, blue-green ink, a cool author surface and a restrained gold reading action. The tone is sophisticated, warm and professional without corporate decoration. Large type, open space and explicit dividers carry the hierarchy.

The system uses real photographs in rectangular crops and keeps editorial content easy to scan and read. This document describes the implemented website. The generated decision mockup is a composition critique reference; it is not an approved comp or a claim of pixel fidelity.

**Key Characteristics:**

- Upright Hanken Grotesk across display, navigation and reading text.
- Chalk and blue-green surfaces with gold used for reading and selected supporting details.
- Flat, rule-separated content with rectangular photography.
- Responsive reading measures and visible keyboard focus.

## Colors

The palette combines cool, quiet surfaces and dense blue-green text with a small warm reading accent. Frontmatter contains the normative color values.

### Primary

- **Blue-green ink** (`ink`): headings, body copy, navigation, selected topic filters and the inverse speaking section.
- **Reading gold** (`reading-gold`): the primary reading action and text selection; its darker hover shade is `reading-gold-hover`.

### Secondary

- **Preview ink** (`preview-ink`): the editorial-preview label beside the cover reading action.
- **Gold link** (`gold-link`): author link and selected hover treatments; **gold rule** (`gold-rule`) frames the homepage topic index.
- **Inverse link** (`inverse-link`): links and keyboard outlines on the dark speaking surface.

### Neutral

- **Chalk** (`chalk`): page background and main inverse text.
- **Cool author surface** (`author-surface`): author band, editorial notices and unselected-filter hover.
- **Secondary text** (`secondary-text`): summaries, metadata and supporting copy.
- **Line** (`line`): section boundaries, rows, filters and mobile navigation dividers.
- **Inverse copy**, **inverse caption** and **inverse rule**: subdued text and dividers on the speaking section.

**The Accent Mapping Rule.** The CSS property `--accent` is reading gold. Tailwind's `--color-accent` maps to the cool surface for shadcn ghost and outline treatments. Do not treat these as interchangeable.

## Typography

**Display and body font:** locally hosted variable Hanken Grotesk (weight range 100–900, sans-serif fallback, swap loading). The implementation uses the normal, upright face; there is no separate serif or mono family.

The character is humanist and direct. Headings use balanced wrapping and medium weight; paragraphs use pretty wrapping. Keep the typography upright rather than introducing italic slogans.

- **Display:** frontmatter display role, limited to 20ch. At 850px and below it becomes `clamp(54px, 8vw, 72px)`; at 640px and below, `clamp(40px, 11.4vw, 64px)` with line height 1.04.
- **Headline:** the headline role serves section titles; the mobile base is 32px. Individual author, contact and article headings have contextual sizes.
- **Title:** insight titles use the title role with a 27ch maximum; mobile titles are 29px with line height 1.17.
- **Cover summary:** `clamp(22px, 2.6vw, 34px)`, line height 1.34 and maximum 66ch; 26px at the tablet breakpoint and 21px/1.4 on mobile.
- **Body:** the body role is the default. Supporting summaries use 18px/1.65, becoming 17px on mobile.
- **Article:** the article role uses a maximum 68ch; mobile prose is 19px/1.7. Paragraph separation is 1.2em.
- **Label:** metadata uses the label role, becoming 14px on mobile. Small preview sublabels are 13px. Preserve natural case.
- **Masthead:** 48px/1, weight 600 and tracking -0.035em; 40px at 1100px and 33px at 640px. The byline scales from 16px to 14px to 12px.

## Layout

The shared shell is `min(1350px, calc(100% - 128px))`, centered. At a maximum viewport width of 1100px it becomes `calc(100% - 80px)`; at 640px it becomes `calc(100% - 40px)`. Standard section padding follows the frontmatter section scale: desktop, tablet at 850px, and mobile at 640px. These are inclusive maximum-width breakpoints.

The masthead is a single row, with minimum heights 108px, 96px at 850px and 86px at 640px. Desktop links disappear at 850px, when the menu trigger appears. The homepage topic index has four equal columns, then two at 850px. Insight rows pair a narrow metadata column with a wider title/summary column. The title/summary/action comes first in the DOM; explicit desktop grid placement keeps metadata in column one and content in column two, both in row one. At 640px both placements reset to auto, so metadata follows the title, summary and reading action. About and project sections also stack at 640px; contact stacks at 850px.

The author strip uses a 184px square portrait with a 42px gap, moving to 145px/30px at 850px, then an 84 × 100px portrait and 20px gap at 640px. Crops use `object-fit: cover`; source images remain undistorted. The event photograph uses a 1 / 1.08 frame on desktop and square frame at 640px.

Article pages cap the shell at 1050px. Article headings cap at 22ch, prose at 68ch, and related content at 75ch. Reading pages use 55px/85px top/bottom padding, becoming 30px/55px on mobile. Topic filters wrap naturally and use real query-string links.

## Elevation & Depth

Page content is flat. Surface changes, whitespace and thin rules provide depth; article rows do not float above the page. The mobile dialog is the exception: a right-hand sheet above a black 50% overlay uses the library's large shadow (`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`).

State changes use the CSS easing `cubic-bezier(0.2, 0.7, 0.2, 1)`: navigation/topic transitions last 160ms, and reading-action background/lift transitions last 180ms. The reading action lifts 2px on hover. The sheet uses ease-in-out, a 500ms entrance and 300ms exit. Smooth anchor scrolling includes a 24px offset.

With reduced motion, scrolling becomes automatic and all animations and transitions are disabled. The existing hover transform remains an immediate state change; do not claim that all transforms are removed.

## Shapes

Rectangular photography and horizontal rules define the page. There are no ornamental geometric shapes. The reading action has a soft 15px radius (12px on mobile), notices use 4px, and filter links use 24px. These differences communicate the component's role; do not round all surfaces to the same shape.

Focus outlines are 2px of ink, offset by 5px, with a 2px corner radius. The speaking section substitutes the inverse gold outline. Use line borders for content separation rather than adding card containers.

## Components

### Reading action

A gold link styled as the principal reading button. Use ink text, a right arrow, the frontmatter padding and radius, a 32px internal gap and minimum height 60px. On mobile use the mobile variant, 18px type, 25px gap and minimum height 52px. Hover uses darker gold and the small upward movement described above. Retain semantic links for route navigation. On the cover, the action and visible editorial-preview label sit together after the summary in a wrapping, vertically centered flex row: gap 16px/24px and top margin 30px, becoming gap 12px/18px and top margin 24px at 640px. The reading action has no independent top margin inside this row.

### Navigation

The masthead stacks the publication name and author byline. Desktop links are 18px, reducing to 16px at 1100px, with 44px minimum height and a bottom border on hover. The keyboard skip link becomes visible on focus. Footer links remain quiet, underlining on hover.

The mobile Menu trigger opens a Radix right-hand dialog sheet. Its width is 75% of the viewport, capped at 384px from the library's 640px minimum-width breakpoint. The panel uses chalk, 32px/25px padding, scrollable overflow and contained overscroll. Navigation links have 65px minimum height, 23px type, arrows and lower rules. The close control is 44px square, 6px from the top/right. Preserve the dialog's accessible name/description, focus management, Escape dismissal and link-triggered close behavior.

### Topic index and filter links

The homepage index is a ruled navigation grid, not a set of cards: 74px minimum-height links on desktop, 64px at 850px and 63px at 640px. Labels scale 23px → 20px at 1100px → 22px at 850px → 18px at 640px. Each has a northeast arrow; hover uses gold-link ink.

The insights page uses wrapping pill-shaped filter links with 44px minimum height and the frontmatter padding. Unselected links have a line border and cool hover surface. The current page is ink with chalk text, expressed with `aria-current="page"`. Mobile padding is 8px/13px and type is 14px. These navigate to topic URLs; they are not toggle buttons or input fields.

### Insight rows and reading

Rows place the linked heading, secondary summary and text link with arrow before metadata in the DOM. Desktop grid placement keeps metadata alongside the content; on mobile it follows the reading action. Top/bottom rules separate records; default vertical padding is 33px and mobile padding is 26px. Text links have 44px minimum height and underline on hover. Article categories follow the article heading. Related reading repeats this vocabulary without a separate card shell, placing its linked heading before ?Continue exploring / Editorial preview?; that metadata has a 12px top margin.

### Editorial notice

A quiet cool-surface block with the frontmatter shape and padding, 15px/1.65 copy and a 75ch maximum. At 640px use 14px type and 15px/17px padding. Preserve visible preview disclosure while content remains illustrative.

### Author and speaking surfaces

The author strip pairs the rectangular portrait with a medium-weight author heading, supplied profile line and quiet gold link. The speaking section uses inverse ink/chalk colors, a rectangular event photograph and fine list rules. Photograph captions state what the supplied image establishes; the event photograph does not establish a speaking role.

## Do's and Don'ts

### Do:

- **Do** use upright Hanken Grotesk and the established reading measures.
- **Do** distinguish the gold reading action from the cool shadcn accent surface.
- **Do** use rules and tonal surfaces to organize content.
- **Do** preserve responsive crops, visible focus, reduced-motion behavior and semantic navigation.
- **Do** keep editorial previews visibly disclosed until approved writing replaces them.

### Don't:

- **Don't** add stock geometric decoration or repeated italic slogans.
- **Don't** return to the rejected cream, olive and terracotta treatment.
- **Don't** turn every content section into an identical rounded card.
- **Don't** invent input fields, publishing controls or biography claims to fill visual space.
- **Don't** describe the decision mockup as an approved comp or claim pixel fidelity.
