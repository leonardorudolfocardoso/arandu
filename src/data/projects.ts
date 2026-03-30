export interface Project {
  slug: string;
  name: string;
  description: string;
  overview: string;
  problem: string;
  approach: string;
  decisions: Array<{
    title: string;
    detail: string;
  }>;
  tags: string[];
  github: string;
}

export const projects: Project[] = [
  {
    slug: 'incident-lens',
    name: 'IncidentLens',
    description: 'AI-powered incident analysis system that processes logs and alerts asynchronously to generate root cause summaries.',
    overview: 'An incident analysis system for on-call workflows that accepts incident context quickly and performs heavier reasoning asynchronously in the background.',
    problem: 'Production incidents are high-pressure moments, and manual investigation across logs, alerts, and fragmented context slows down triage. A useful system here cannot block the intake path or make responsiveness depend on expensive analysis.',
    approach: 'IncidentLens accepts incident data immediately, queues the work, and lets a background worker process logs and alerts through an LLM-based reasoning flow. That split keeps ingestion fast while still producing a structured summary for engineers once analysis completes.',
    decisions: [
      {
        title: 'Decoupled ingestion from analysis',
        detail: 'The API accepts incidents immediately and hands work to an asynchronous pipeline so heavy reasoning does not sit on the critical request path.',
      },
      {
        title: 'Optimized for incident pressure',
        detail: 'The design assumes operators need responsiveness first and rich analysis second, which is a better fit for real production triage than synchronous processing.',
      },
      {
        title: 'Returned structured summaries',
        detail: 'The analysis output is shaped as a root-cause summary rather than raw model text, making it easier to consume during stressful operational work.',
      },
    ],
    tags: ['Python', 'async processing', 'event-driven', 'LLM'],
    github: 'https://github.com/leonardorudolfocardoso/incident-lens',
  },
  {
    slug: 'hookbox',
    name: 'Hookbox',
    description: 'Webhook inspection tool — create unique endpoints, capture incoming requests, and inspect payloads in real time.',
    overview: 'A webhook inspection tool built for debugging external integrations without sacrificing a clean security model for user-owned data.',
    problem: 'Webhook tooling needs to receive calls from third-party services that cannot share user credentials, but users still need secure access to the events they own. That creates a boundary problem between public ingestion and protected management.',
    approach: 'Hookbox exposes public receiver endpoints for inbound webhook delivery and isolates all read, management, and deletion operations behind JWT-protected routes. The system runs on serverless AWS infrastructure with components chosen for low-ops event handling.',
    decisions: [
      {
        title: 'Separated public ingestion from protected management',
        detail: 'Webhook delivery stays unauthenticated by design, while every user-facing management path requires auth, which keeps the integration surface usable without weakening account security.',
      },
      {
        title: 'Used serverless infrastructure for event traffic',
        detail: 'Lambda, API Gateway, and DynamoDB fit bursty webhook workloads well and avoid operating always-on infrastructure for a traffic pattern that is naturally spiky.',
      },
      {
        title: 'Designed around real third-party constraints',
        detail: 'The API shape reflects how services like Stripe or GitHub actually deliver payloads, rather than forcing an artificial auth story onto the inbound path.',
      },
    ],
    tags: ['TypeScript', 'AWS Lambda', 'DynamoDB', 'serverless'],
    github: 'https://github.com/leonardorudolfocardoso/hookbox',
  },
  {
    slug: 'ticket-analyzer',
    name: 'Ticket Analyzer',
    description: 'FastAPI service that classifies support tickets using LLMs, returning category, priority, sentiment, and suggested responses.',
    overview: 'An async FastAPI service that automates support-ticket triage while treating model unreliability as a first-class engineering concern.',
    problem: 'LLM-backed classification is useful for support operations, but model outputs are not inherently trustworthy. A production service needs stable contracts, provider flexibility, and a way to reject malformed responses before they reach callers.',
    approach: 'The service classifies tickets by category, priority, and sentiment, and generates a suggested reply. It keeps the core logic provider-agnostic through an interface boundary and validates model output at multiple layers before returning a response.',
    decisions: [
      {
        title: 'Abstracted the model provider behind a protocol',
        detail: 'Provider-specific code is isolated so the core application can switch model backends without changing the surrounding business logic.',
      },
      {
        title: 'Added dual-layer output validation',
        detail: 'The service combines API-level response shaping with Pydantic validation so malformed model output is caught before it escapes the boundary.',
      },
      {
        title: 'Kept the stack asynchronous end to end',
        detail: 'Async execution fits I/O-heavy model calls and keeps the service architecture aligned with concurrent request handling.',
      },
    ],
    tags: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/leonardorudolfocardoso/ticket-analyzer-api',
  },
  {
    slug: 'apidiff',
    name: 'Apidiff',
    description: 'CLI tool that compares OpenAPI 3.0 specs and detects breaking changes across paths, parameters, schemas, and responses.',
    overview: 'A Rust CLI for checking OpenAPI changes with direction-aware breaking-change detection that fits naturally into automated delivery pipelines.',
    problem: 'API changes are easy to ship accidentally and difficult to reason about informally. A useful diff tool has to understand semantic compatibility, not just text differences, and it needs machine-friendly behavior for CI.',
    approach: 'Apidiff parses OpenAPI 3.0 specs in JSON or YAML and evaluates compatibility across paths, operations, parameters, request bodies, responses, content types, and schemas. It reports breaking changes through intentional exit codes so it can fail builds automatically when needed.',
    decisions: [
      {
        title: 'Made compatibility checks direction-aware',
        detail: 'The tool distinguishes between request-side and response-side changes because the same structural removal can be safe in one direction and breaking in another.',
      },
      {
        title: 'Covered multiple OpenAPI layers',
        detail: 'It inspects seven parts of the spec so the result reflects contract compatibility rather than a narrow subset of path-level changes.',
      },
      {
        title: 'Used CI-friendly exit codes',
        detail: 'Exit codes map directly to no changes, breaking changes, and errors, which makes the CLI easy to automate in release workflows.',
      },
    ],
    tags: ['Rust', 'OpenAPI', 'CLI', 'developer tooling'],
    github: 'https://github.com/leonardorudolfocardoso/apidiff',
  },
  {
    slug: 'themis',
    name: 'Themis',
    description: 'Financial transaction processor that applies deposits, withdrawals, disputes, and chargebacks to client accounts from CSV streams.',
    overview: 'A Rust transaction processor focused on precision, domain modeling, and correctness for disputed financial event streams.',
    problem: 'Financial systems are unforgiving: precision mistakes, invalid state transitions, or ad hoc business rules can all create subtle correctness failures. This kind of workflow benefits from types that encode invariants directly.',
    approach: 'Themis ingests CSV transaction events and applies deposits, withdrawals, disputes, resolves, and chargebacks to client accounts. It keeps floating-point handling at the CSV boundary, stores values as scaled integers, and uses domain-specific types to represent money safely inside the core system.',
    decisions: [
      {
        title: 'Encoded monetary precision in the domain model',
        detail: 'Amounts are represented as scaled integers so precision is preserved internally instead of depending on floating-point behavior.',
      },
      {
        title: 'Separated non-negative amounts from signed funds',
        detail: 'Different money types capture different invariants, which keeps the code honest about where negative balances can and cannot exist.',
      },
      {
        title: 'Enforced locked-account behavior structurally',
        detail: 'Once an account is locked, further operations are rejected as part of the model rather than scattered conditional checks.',
      },
    ],
    tags: ['Rust', 'event-driven', 'financial systems'],
    github: 'https://github.com/leonardorudolfocardoso/themis',
  },
  {
    slug: 'jobers',
    name: 'Jobers',
    description: 'CLI tool for saving and executing named shell commands — bookmarks for complex workflows with runtime argument support.',
    overview: 'A Rust CLI for saving and executing named shell workflows with an emphasis on testability, predictable error handling, and script-friendly behavior.',
    problem: 'Complex shell commands are easy to lose, hard to reuse safely, and awkward to maintain when tooling couples storage, execution, and domain logic too tightly. A useful CLI here should preserve shell power without turning the implementation into an opaque wrapper.',
    approach: 'Jobers stores commands as named jobs, supports runtime arguments, and executes through the system shell so existing shell features still work. Internally, storage is abstracted away from the domain model and errors are modeled explicitly instead of relying on panics.',
    decisions: [
      {
        title: 'Decoupled storage from core behavior',
        detail: 'A storage trait keeps the business logic testable in isolation and avoids tying the command model directly to filesystem concerns.',
      },
      {
        title: 'Treated error handling as part of the product',
        detail: 'Production code avoids unwrap calls and uses explicit error types so failures are easier to reason about and safer to surface.',
      },
      {
        title: 'Preserved native shell capabilities',
        detail: 'Commands run through the system shell so features like pipes, redirects, variables, and globs behave the way users already expect.',
      },
    ],
    tags: ['Rust', 'CLI', 'developer tooling'],
    github: 'https://github.com/leonardorudolfocardoso/jobers',
  },
];
