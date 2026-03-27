export interface Project {
  slug: string;
  name: string;
  description: string;
  body: string;
  tags: string[];
  github: string;
}

export const projects: Project[] = [
  {
    slug: 'incident-lens',
    name: 'IncidentLens',
    description: 'AI-powered incident analysis system that processes logs and alerts asynchronously to generate root cause summaries.',
    body: 'IncidentLens addresses a critical pain point in on-call engineering: manual investigation during production incidents. The key architectural decision is full decoupling between ingestion and analysis — incidents are accepted and queued immediately, keeping the API responsive while a background worker processes logs and alerts through an LLM-based reasoning engine at its own pace. The result is a structured root cause summary that helps engineers triage faster without putting pressure on the critical path.',
    tags: ['Python', 'async processing', 'event-driven', 'LLM'],
    github: 'https://github.com/leonardorudolfocardoso/incident-lens',
  },
  {
    slug: 'hookbox',
    name: 'Hookbox',
    description: 'Webhook inspection tool — create unique endpoints, capture incoming requests, and inspect payloads in real time.',
    body: 'Hookbox is a webhook inspection tool built on serverless infrastructure. A deliberate design decision drives the API structure: the webhook receiver endpoint is intentionally public — any external service can POST to it without auth — while all management operations are JWT-protected. This separation means Stripe, GitHub, or any third-party can deliver payloads freely, while only the authenticated user can read, manage, or delete them. Built with SST v3 on AWS — Lambda, API Gateway, DynamoDB, and Cognito for auth.',
    tags: ['TypeScript', 'AWS Lambda', 'DynamoDB', 'serverless'],
    github: 'https://github.com/leonardorudolfocardoso/hookbox',
  },
  {
    slug: 'ticket-analyzer',
    name: 'Ticket Analyzer',
    description: 'FastAPI service that classifies support tickets using LLMs, returning category, priority, sentiment, and suggested responses.',
    body: 'A FastAPI service that automates support ticket triage using LLMs. Each ticket is classified by category, priority, and sentiment, with a confidence score and a suggested response. The LLM provider is abstracted behind a protocol interface — swapping OpenAI for another model requires no changes to core logic. The system also handles LLM unreliability directly: dual-layer validation (API-level JSON enforcement plus Pydantic models) combined with automatic retry ensures malformed outputs never reach the caller. The entire stack is async throughout.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/leonardorudolfocardoso/ticket-analyzer-api',
  },
  {
    slug: 'apidiff',
    name: 'Apidiff',
    description: 'CLI tool that compares OpenAPI 3.0 specs and detects breaking changes across paths, parameters, schemas, and responses.',
    body: 'A Rust CLI tool for detecting breaking changes between OpenAPI 3.0 specs. It analyzes seven specification layers — paths, operations, parameters, request bodies, responses, content types, and schemas. The detection is direction-aware: removing a required request property is non-breaking (clients simply stop sending it), but removing a response property is breaking (clients may depend on it). Exit codes 0, 1, and 2 map to no changes, breaking changes, and errors respectively — making it a drop-in step in any CI/CD pipeline. Supports both YAML and JSON input.',
    tags: ['Rust', 'OpenAPI', 'CLI', 'developer tooling'],
    github: 'https://github.com/leonardorudolfocardoso/apidiff',
  },
  {
    slug: 'themis',
    name: 'Themis',
    description: 'Financial transaction processor that applies deposits, withdrawals, disputes, and chargebacks to client accounts from CSV streams.',
    body: 'A financial transaction processor written in Rust that ingests CSV event streams and applies deposits, withdrawals, disputes, and chargebacks to client accounts. Monetary precision is handled at the type level: amounts are stored as scaled integers (4 decimal places), with floating-point parsing confined to the CSV boundary. The type system also distinguishes between Amount (non-negative, for valid transactions) and Funds (signed, to faithfully record negative balances after chargebacks). Locked accounts reject all further operations by design — a rule enforced structurally, not conditionally.',
    tags: ['Rust', 'event-driven', 'financial systems'],
    github: 'https://github.com/leonardorudolfocardoso/themis',
  },
  {
    slug: 'jobers',
    name: 'Jobers',
    description: 'CLI tool for saving and executing named shell commands — bookmarks for complex workflows with runtime argument support.',
    body: 'A Rust CLI tool for bookmarking complex shell commands as named jobs. The storage layer is decoupled from business logic through a Storable trait, keeping the domain model testable without touching the filesystem. The codebase has no unwrap() calls in production code — all error paths use custom types via thiserror, with 30 tests covering edge cases and workflows. Commands execute through the system shell with full feature support — pipes, redirects, variables, and globs — with proper exit code propagation for scripting.',
    tags: ['Rust', 'CLI', 'developer tooling'],
    github: 'https://github.com/leonardorudolfocardoso/jobers',
  },
];
