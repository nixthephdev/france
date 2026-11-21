# Design direction and content handoff

## Audience and intended journey

The user confirmed that reading France's insights is the primary visitor action. Potential collaborators, event organisers, and people interested in mentorship are secondary audience hypotheses to validate with France.

The homepage opens with an editorial preview and reading action, followed by concise author context, a topic index, further previews, and supporting information about France and her work. The article index and dedicated reading pages make writing directly reachable. This hierarchy follows the confirmed reading goal; it is not a measured conversion result.

## Decisions

- Use the implemented Perspective Catalogue design: chalk ground, blue-green ink, cool author surface, restrained warm reading action, and upright Hanken Grotesk typography. The earlier ivory/olive/terracotta implementation was rejected.
- Use the supplied portrait as supporting author context, keeping her face clear across responsive crops. The supplied ASEAN event photo adds context beside Speaking & Mentorship, with a neutral attendance caption.
- Use plain navigation labels and a consistent contact action.
- Place real evidence alongside claims once available. Never fill credibility gaps with invented logos, metrics, testimonials, or affiliations.
- Show sample articles as editorial previews, with conspicuous disclosures on their dedicated reading pages. Do not use modals for reading.
- Use shadcn/ui for keyboard-aware mobile navigation, styled to the brand. Components complement Next.js and Tailwind.
- Keep readable line lengths, visible focus states, descriptive headings, and reduced-motion support.
- Contact opens LinkedIn directly. It does not imply that an email or enquiry has been submitted.

## Content to request from France

1. Preferred public name, a 60-word introduction, and a longer approved biography.
2. A portrait with permission to use it; ideally a high-resolution image with room around the subject.
3. Two or three speaking or work photographs; an optional captioned speaking clip and video poster.
4. Two or three projects: challenge, her exact role, partners allowed to be named, dates, and substantiated outcomes.
5. Two initial insights or existing articles with permission to republish.
6. Confirmed speaking themes, audience, format, mentorship scope, and preferred enquiry contact.
7. Approved testimonials and client or organisation logos only if she wants them and has permission.
8. Confirm the reading-first priority with France and supply any further reader/audience research.

The portrait and ASEAN event photograph are supplied assets. A concise project placeholder replaces the previous large decorative image panel; a speaking video has not been supplied. Biography and proposed topics are drafts. CMS, email delivery, and analytics require separate implementation and configuration.

## Validation

Check mobile navigation focus containment, Escape dismissal, focus return, anchor targets, topic filters, reading routes, horizontal overflow, keyboard navigation, reduced motion, readability, and production compilation. Before launch, test the site's key tasks with representative visitors; visual appeal does not establish usability by itself.
