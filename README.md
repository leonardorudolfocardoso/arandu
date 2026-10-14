# Arandu

My personal portfolio, focused on backend systems, APIs, cloud infrastructure, and developer tooling.

“Arandu” means knowledge or wisdom in Tupi-Guarani. The site reflects that idea through a calm, minimal design centered on engineering decisions and practical system design.

## Tech stack

- Astro 6
- TypeScript in strict mode
- Plain CSS with custom properties
- Static site generation

No client-side framework or CSS framework is used.

## Content

The homepage presents professional experience: a hero with contact links, followed by work history at Arqgen and Hype Empreendimentos.

Personal projects (IncidentLens, Hookbox, Ticket Analyzer, Apidiff, Themis, Jobers) are not featured on the homepage for now, since they don't demonstrate professional experience. Their case-study pages are still generated at `/projects/<slug>` from [`src/data/projects.ts`](src/data/projects.ts) and can be linked again later. They are marked `noindex, nofollow` so search engines skip them.

## Project structure

```text
src/
├── components/        Reusable UI components
├── data/              Project content and types
├── layouts/           Shared page shell and metadata
├── pages/
│   ├── index.astro    Portfolio homepage
│   └── projects/
│       └── [slug].astro
└── styles/
    └── global.css     Design tokens and global styles
```

Astro generates the (unlinked) project pages statically from the project data during the build.

## Local development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

The development server runs at [localhost:4321](http://localhost:4321).

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- <command>` | Run an Astro CLI command |

## Design direction

Arandu is designed around:

- Quiet confidence
- Clear technical communication
- Generous whitespace
- Restrained interaction
- Accessible, readable typography

The visual system uses a dark background, muted text, and a green accent, with Inter and JetBrains Mono as its primary typefaces.
