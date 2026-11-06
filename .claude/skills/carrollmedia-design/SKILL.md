---
name: carrollmedia-design
description: Use this skill to generate well-branded interfaces and assets for CarrollMedia, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## In this repository

The design system is already ported into the site at the repository root:

- `styles/tokens/` — the five token files, unchanged from the design project.
- `styles/components.css` — component styles (inline styles in the design project, classes here).
- `components/` — `core/`, `media/`, `sales/` and `chrome/`. Import from `@/components`.
- `design-system/adherence.oxlintrc.json` — adherence rules, run with `pnpm lint`.
- `public/aerial/` — plates pulled from the studio's own drone footage.

The design project itself is https://claude.ai/design/p/00bb010f-45dd-4b55-8ea7-482e260a1514.
