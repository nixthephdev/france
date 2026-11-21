# Professional experience extension

The user supplied three LinkedIn Experience screenshots and asked to add them. This extends /about in the existing design system; it does not create another navbar destination or change the visual world.

## Source handling

src/lib/experience.ts records the supplied organisation names, role titles, month/year dates and visible employment types. Multiple roles at The Green Earth Group and Pfizer are grouped together. Company names use readable text rather than invented or recreated logos. Responsibility paragraphs are concise summaries of the supplied descriptions, not new professional claims. RISE Lending Corporation is the shortened supplied employer name. Screenshots and private conversation images are not repository assets.

The current-role endDate value records Present as shown in the supplied profile; it is not a live verification. Do not calculate screenshot tenure totals or add missing employment types, certification issuers, results, compensation or locations. Career dates are historical profile content, not generated publication dates.

## UI and interaction

The heading, organisation column, role titles, visible dates and optional employment types remain available at a glance. Native details/summary disclosures expose responsibility summaries with keyboard and pointer input and without adding a client-side component. Multiple roles can be open for comparison. The mobile layout stacks each organisation above its roles. Focus uses the existing two-pixel outline; chevron movement respects reduced motion.

Verify source coverage, meaningful date markup, collapsed and expanded layouts, Enter/Space toggling, focus visibility, mobile widths and onward links. Preserve the existing typography, colors, menu and profile content.

## Verification

- ESLint and production build, including TypeScript compilation, passed.
- The rendered page contains all 11 supplied organisations and 14 roles, including the grouped Green Earth and Pfizer roles.
- Date values use month/year time elements. No duration totals are calculated.
- All responsibility disclosures open independently; Enter and Space toggle correctly, with the existing visible focus outline.
- Collapsed and fully expanded layouts have no horizontal overflow at 320, 390, 768 and 1440px.
- About navigation remains current; the onward Insights link and reduced-motion behaviour passed. No browser JavaScript errors were observed.
- Four desktop/mobile collapsed/expanded captures were opened and validated against the production build at http://127.0.0.1:3003/about.
- Source detector returned no findings. This extension introduces no new visual tokens or rasters; the existing design-system files and photographic provenance remain intact.

The independent reviewer returned **ship** for this component extension, with no material fixes. It confirmed valid captures, readable grouping, inherited styling, native disclosure semantics and consistency with the supplied transcription packet. The original screenshots were unavailable to that reviewer for independent transcription checking. UI checks establish rendering and interaction, not independent verification of profile appointments.
