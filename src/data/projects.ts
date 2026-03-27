export interface Project {
  name: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: 'IncidentLens',
    description: 'AI-powered incident analysis system that processes logs and alerts asynchronously to generate root cause summaries.',
    tags: ['Python', 'async processing', 'event-driven', 'LLM'],
  },
  {
    name: 'Hookbox',
    description: 'Webhook inspection tool — create unique endpoints, capture incoming requests, and inspect payloads in real time.',
    tags: ['TypeScript', 'AWS Lambda', 'DynamoDB', 'serverless'],
  },
  {
    name: 'Ticket Analyzer',
    description: 'FastAPI service that classifies support tickets using LLMs, returning category, priority, sentiment, and suggested responses.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL'],
  },
  {
    name: 'Apidiff',
    description: 'CLI tool that compares OpenAPI 3.0 specs and detects breaking changes across paths, parameters, schemas, and responses.',
    tags: ['Rust', 'OpenAPI', 'CLI', 'developer tooling'],
  },
  {
    name: 'Themis',
    description: 'Financial transaction processor that applies deposits, withdrawals, disputes, and chargebacks to client accounts from CSV streams.',
    tags: ['Rust', 'event-driven', 'financial systems'],
  },
  {
    name: 'Jobers',
    description: 'CLI tool for saving and executing named shell commands — bookmarks for complex workflows with runtime argument support.',
    tags: ['Rust', 'CLI', 'developer tooling'],
  },
];
