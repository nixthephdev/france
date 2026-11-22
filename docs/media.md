# Photographs and portrait cutout

The user supplied these two downloaded photographs for the website. The original photographic pixels are preserved; responsive crops are presentation styles. JPEG comments record each asset's supplied origin, and decoded pixels were verified against the original files.

| File | Dimensions | Placement |
| --- | --- | --- |
| public/images/france-portrait.jpg | 2048 × 2048 | Original supplied photograph; About page portrait on desktop and mobile |
| public/images/france-asean-event.jpg | 1920 × 2048 | Original supplied photograph; Speaking & Mentorship page |
| public/images/france-portrait-cutout.png | 1254 × 1254 | Derived transparent hero portrait; built-in image generation/editing tool, background removal |

Next.js Image generates responsive sources. The hero cutout is preloaded and reserves its display area; supporting photography retains its existing loading behaviour. The original source JPEGs remain unchanged. The PNG is a generated derivative, not a claim of pixel-identical extraction: it removes the interior background for a transparent silhouette while preserving the supplied identity, dress and existing crop. No body extension was requested. Its alpha channel was checked, its embedded prompt retained, and the rendered result inspected on the actual taupe canvas.

The event caption describes only what the supplied image establishes. It does not claim France spoke at, represented, or organised the event. Event title, date, photographer credit, and any additional context can be added when supplied.

No project photograph or speaking video has been supplied. The Projects page retains a visibly labelled photograph placeholder rather than fabricated project imagery.

## Cutout provenance

Source: public/images/france-portrait.jpg. Method: built-in image_gen edit with transparent_background true. Final project asset: public/images/france-portrait-cutout.png. The original generated output is retained in Codex's generated-images directory. The exact prompt is also embedded in the PNG metadata and reproduced below.

```text
Edit target: the supplied photograph of Olga France Blas-Obias in a light blue dress. Purpose: a transparent photographic cutout for her personal website hero. Remove ONLY the entire interior background (curtains, shelving, books and objects). Keep the original woman and her actual silhouette: preserve her exact identity, face, expression, gaze, hairstyle and fine hair edges, jewelry, skin texture, clothing colors and existing body crop. Do not retouch, beautify, redraw, change pose, add limbs or extend her body beyond the supplied crop. Preserve the original photograph's subject pixels and natural lighting as faithfully as possible. Output one high-resolution PNG with genuine transparent alpha around the subject, no shadow, no background, no text, no logos. Keep her whole visible hair and shoulders within the square crop.
```
