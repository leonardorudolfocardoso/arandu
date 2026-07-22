# Arandu

My personal portfolio, focused on backend systems, APIs, cloud infrastructure, and developer tooling.

“Arandu” means knowledge or wisdom in Tupi-Guarani. The site reflects that idea through a calm, minimal design centered on engineering decisions and practical system design.

## Tech stack

- Astro 6
- TypeScript in strict mode
- Plain CSS with custom properties
- Static site generation

No client-side framework or CSS framework is used.

## Projects

The portfolio currently includes case studies for:

- IncidentLens
- Hookbox
- Ticket Analyzer
- Apidiff
- Themis
- Jobers

Each project has a generated detail page covering its problem, approach, and key engineering decisions.

Project content is maintained in [`src/data/projects.ts`](src/data/projects.ts).

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

Astro generates the project pages statically from the project data during the build.

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
