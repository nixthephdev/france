# Project brief

## Purpose

Create a personal brand website for Olga France Blas-Obias that reflects both who she is and the work she does. The site should feel minimalist, sophisticated, warm, and purpose-driven: professional without feeling overly corporate.

The client's messages identify five central themes:

1. Entrepreneurship.
2. Business strategy.
3. Sustainability.
4. Mentorship.
5. Thought leadership.

The website will showcase her professional background and provide a space for insights, advocacy, speaking engagements, projects, and collaborations.

## Visual direction

- The current user-selected inspiration is the supplied ÉLANORA fashion layout: an open portrait hero, warm neutrals, upright serif display type and generous editorial spacing.
- Ivory reading surfaces, dark ink, warm studio fields and clear rectangular reading actions accompany the actual photographs. Self-hosted Baskervville carries headlines; Hanken Grotesk carries body text and navigation.
- Generous spacing and layouts that work comfortably on small screens.
- Authentic, approved photography when it is available.
- Gentle motion that respects reduced-motion preferences.

The initial ivory/olive/terracotta treatment and the subsequent text-led catalogue were rejected. Reading insights remains the user-confirmed primary action. See PRODUCT.md, DESIGN.md, and docs/homepage-direction.md for the current implementation and decision context.

The supplied profile's line, "Growing businesses, people and purpose", anchors the first design. Draft content must be reviewed before launch. Do not invent clients, affiliations, testimonials, events, or impact metrics.

## Current information architecture

- **Home (/):** portrait introduction, story links, topic index, editorial previews and a contact invitation.
- **About (/about):** supplied portrait and five professional descriptions from France's LinkedIn About section.
- **Insights (/insights):** topic filters and dedicated editorial-preview reading routes.
- **Speaking & Mentorship (/speaking):** discussion topics, supplied speaker description, neutrally captioned event photo and invitation links.
- **Projects & Advocacy (/projects):** disclosed project/photo placeholder and collaboration path until real project evidence is supplied.
- **Contact (/contact):** visible email, mailto action and LinkedIn link. No enquiry submission form is simulated.

The user explicitly requested a multi-page site. Navbar and homepage story links open actual routes. Desktop and mobile navigation identify the current page; the brand returns home.

## Technical direction

Next.js App Router, TypeScript, Tailwind CSS, Sanity CMS, Vercel hosting, and Resend for enquiry emails. Prefer server-rendered content and small interactive components. Use CSS for simple movement; add Motion when the interaction warrants it.

The first repository commit establishes the application, draft visual direction, local development commands, and configuration examples. CMS functionality, email delivery, and production deployment are separate implementation milestones.

## Content editing experience

France should be able to create and update articles, talks, projects, photos, and core profile text without changing code. Configure clear field labels, required fields, image descriptions, drafts, and visual previews in Sanity.

## Public reference

LinkedIn: https://www.linkedin.com/in/olga-france-blas-obias-23912996/

Only portions of the profile were publicly indexed during initial research. Verify the full biography and current roles with France before publication. Private conversation screenshots are not repository assets.
