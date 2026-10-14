# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npm run astro     # Run Astro CLI (e.g. astro add, astro check)
```

No test framework is configured.

## Project Overview

**Arandu** (Tupi-Guarani for "knowledge") is a personal developer portfolio for Leonardo Cardoso — a backend/cloud engineer. The site showcases backend systems and developer tools with a calm, minimal, technical aesthetic.

**Stack:** Astro 6 + plain CSS (CSS custom properties) + TypeScript (strict mode). Static output, no backend. No Tailwind.

## Design System

Colors:
- Background: `#0B0F14`
- Primary text: `#E6EDF3`
- Accent: `#7EE787`
- Muted: `#8B949E`

Typography: Inter (sans-serif headings/body), JetBrains Mono or Fira Code (technical accents).

UI rules: no gradients, no heavy shadows, subtle transitions at `0.2s ease`, generous whitespace.

## Site Structure

Single-page homepage focused on professional experience:
1. **Hero** — name, role, short summary, availability, and contact links (Email, LinkedIn, GitHub)
2. **Professional experience** — Arqgen and Hype Empreendimentos

Personal projects (IncidentLens, Hookbox, Ticket Analyzer, Apidiff, Themis, Jobers) are intentionally not featured on the homepage: they don't demonstrate professional experience. Their data (`src/data/projects.ts`), `ProjectCard` and `/projects/[slug]` pages are kept in place and can be re-surfaced later.

## Git Conventions

- Use semantic commit messages (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`, etc.)
- Do not add `Co-Authored-By` trailers

## Components

Reusable components live in `src/components/` (the page shell is `src/layouts/Layout.astro`):
- `ProjectCard` — name, short description, tag highlights, subtle hover border/glow (currently unused on the homepage)
- `Section` — consistent section wrapper
- `Container` — max-width content wrapper
- `AranduGlyph` / `AranduWordmark` — brand mark

## Tone

The portfolio communicates quiet confidence and engineering depth. Avoid flashy UI, over-animations, and startup-style landing pages.
