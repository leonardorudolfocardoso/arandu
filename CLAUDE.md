# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

Single-page homepage with four sections in order:
1. **Hero** — "Arandu / Systems, APIs and developer tools / by Leonardo Cardoso"
2. **Selected Work** — 3–4 project cards (IncidentLens, Hookbox, Ticket Analyzer, Apidiff)
3. **About** — Short bio paragraph
4. **Links** — GitHub, LinkedIn

Optional `/projects` page for expanded project listing.

## Git Conventions

Do not add `Co-Authored-By` trailers to commits.

## Components to Build

Reusable components live in `src/components/`:
- `Layout` — page shell
- `ProjectCard` — name, short description, tag highlights, subtle hover border/glow
- `Section` — consistent section wrapper
- `Container` — max-width content wrapper

## Tone

The portfolio communicates quiet confidence and engineering depth. Avoid flashy UI, over-animations, and startup-style landing pages.
