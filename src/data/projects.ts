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
    body: 'IncidentLens addresses a critical pain point in on-call engineering: manual investigation during production incidents. The system ingests incident data through an API, enqueues analysis jobs, and uses a background worker to process logs and alerts through an LLM-based reasoning engine. The result is a structured root cause summary that helps engineers triage faster and reduce mean time to resolution.',
    tags: ['Python', 'async processing', 'event-driven', 'LLM'],
    github: 'https://github.com/leonardorudolfocardoso/incident-lens',
  },
  {
    slug: 'hookbox',
    name: 'Hookbox',
    description: 'Webhook inspection tool — create unique endpoints, capture incoming requests, and inspect payloads in real time.',
    body: 'Hookbox is a webhook inspection tool built on serverless infrastructure. Users create uniquely tokenized endpoints, share them with external services like Stripe or GitHub, and inspect captured request payloads in real time through a React dashboard. Authentication is handled via Amazon Cognito with email verification. Built with SST v3 on AWS — Lambda, API Gateway, DynamoDB, and Cognito.',
    tags: ['TypeScript', 'AWS Lambda', 'DynamoDB', 'serverless'],
    github: 'https://github.com/leonardorudolfocardoso/hookbox',
  },
  {
    slug: 'ticket-analyzer',
    name: 'Ticket Analyzer',
    description: 'FastAPI service that classifies support tickets using LLMs, returning category, priority, sentiment, and suggested responses.',
    body: 'A FastAPI service that automates support ticket triage using OpenAI models. Each ticket is classified by category, priority, and sentiment, with a confidence score and a suggested response. The system uses dual-layer validation — API-level JSON enforcement plus Pydantic models — with automatic retry on malformed model outputs. All classification records are persisted to PostgreSQL via async SQLAlchemy.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/leonardorudolfocardoso/ticket-analyzer-api',
  },
  {
    slug: 'apidiff',
    name: 'Apidiff',
    description: 'CLI tool that compares OpenAPI 3.0 specs and detects breaking changes across paths, parameters, schemas, and responses.',
    body: 'A Rust CLI tool for detecting breaking changes between OpenAPI 3.0 specs. It analyzes seven specification layers — paths, operations, parameters, request bodies, responses, content types, and schemas — and exits with distinct codes for breaking changes, non-breaking changes, and errors. Context-aware by design: removing required request properties is non-breaking, while removing response properties is breaking. Supports both YAML and JSON input.',
    tags: ['Rust', 'OpenAPI', 'CLI', 'developer tooling'],
    github: 'https://github.com/leonardorudolfocardoso/apidiff',
  },
  {
    slug: 'themis',
    name: 'Themis',
    description: 'Financial transaction processor that applies deposits, withdrawals, disputes, and chargebacks to client accounts from CSV streams.',
    body: 'A financial transaction processor written in Rust that ingests CSV event streams and applies deposits, withdrawals, disputes, and chargebacks to client accounts. Uses scaled integer arithmetic (4 decimal places) to avoid floating-point precision errors in monetary values. Enforces strict immutability rules — locked accounts reject all further operations — and produces deterministic sorted output by client ID.',
    tags: ['Rust', 'event-driven', 'financial systems'],
    github: 'https://github.com/leonardorudolfocardoso/themis',
  },
  {
    slug: 'jobers',
    name: 'Jobers',
    description: 'CLI tool for saving and executing named shell commands — bookmarks for complex workflows with runtime argument support.',
    body: 'A Rust CLI tool for bookmarking complex shell commands as named jobs. Commands are stored in ~/.jobers/jobs.json, support runtime argument injection, and execute with full shell feature support — pipes, redirects, variables, and globs. Cross-platform across Unix, macOS, and Windows, with proper exit code propagation for use in scripts.',
    tags: ['Rust', 'CLI', 'developer tooling'],
    github: 'https://github.com/leonardorudolfocardoso/jobers',
  },
];
