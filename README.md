# France

The personal website of **Olga France Blas-Obias**: a warm, thoughtful digital home for entrepreneurship, business strategy, sustainability, mentorship, and thought leadership.

Repository: https://github.com/nixthephdev/france

## Current foundation

- Next.js App Router, React, and TypeScript.
- Tailwind CSS and a responsive editorial starting design.
- Customised shadcn/ui buttons, dialogs, and mobile navigation.
- About, Focus, Insights, Speaking, Projects, and Contact sections.
- Supplied portrait and event photographs, with labelled project placeholders and sample editorial previews.
- Keyboard navigation, focus styles, and reduced-motion support.
- ESLint, TypeScript checks, and a production build command.
- A committed npm lockfile for repeatable installs.

This is the initial project foundation. Homepage copy and design are drafts for review. Sanity publishing, enquiry emails, and production hosting are not connected yet.

## Local development

Use Node.js 24 or later and npm.

    npm ci
    npm run dev

Open http://localhost:3000. Although the project folder lives under XAMPP, Next.js runs through Node.js; Apache and PHP are not required.

On Windows PowerShell, use npm.cmd if the execution policy blocks npm.ps1.

## Checks

    npm run lint
    npm run typecheck
    npm run build

Run all three with npm run check. To serve a production build locally, run npm run start after building.

## Project layout

- src/app/: App Router pages, metadata, and global styles.
- public/: public assets.
- docs/project-brief.md: design direction and implementation scope.
- docs/design-direction.md: audience hypotheses, design rationale, and content handoff.
- docs/media.md: supplied photo placements and image handling.
- .env.example: reserved configuration keys, without credentials.

## Planned integrations

- **Sanity CMS:** editable biography, articles, speaking engagements, projects, and site settings; drafts and visual previews.
- **Resend:** speaking and collaboration enquiry emails through a validated server-side form.
- **Vercel:** preview deployments and production hosting with the approved domain.
- **Motion:** only where interactions need more than CSS transitions.

The Sanity and Resend dependencies will be added with their implementations. Copy .env.example to .env.local when configuring those services. Environment files containing credentials are ignored by Git. Only NEXT_PUBLIC_ variables are suitable for public values; keep API tokens server-side.

## Before launch

- Review biography, claims, site copy, and the preferred public display name with France.
- Add approved portraits and speaking or project photos, with meaningful alt text.
- Connect Sanity, configure draft preview access, and test publishing.
- Connect a verified sending domain and recipient address; add form validation and spam protection.
- Set the production URL, page metadata, share images, sitemap, and robots policy.
- Verify mobile layouts, keyboard access, contrast, and performance.

Domain, hosting, CMS, and email service accounts should belong to the client or the agreed project owner. No production site has been deployed by this setup.
