export const profile = {
  name: "Santosh G",
  title: "Software Engineer",
  bio: "I build scalable systems and thoughtful software. Interested in distributed systems, developer tooling, and the intersection of engineering and product.",
  email: "santosh@santoshg.io",
  github: "https://github.com/santoshgdev",
  linkedin: "https://linkedin.com/in/santoshgdev",
  location: "San Francisco, CA",
};

export const experience = [
  {
    company: "Company Name",
    role: "Senior Software Engineer",
    period: "2022 – Present",
    description:
      "Led platform engineering initiatives, built internal developer tooling, and drove architectural decisions across microservices.",
    tags: ["Python", "Kubernetes", "GCP"],
  },
  {
    company: "Previous Company",
    role: "Software Engineer",
    period: "2019 – 2022",
    description:
      "Designed and implemented data pipelines processing millions of events per day. Improved system reliability from 99.5% to 99.95% uptime.",
    tags: ["Go", "Kafka", "PostgreSQL"],
  },
  {
    company: "Earlier Company",
    role: "Software Engineer",
    period: "2017 – 2019",
    description:
      "Built full-stack features for a B2B SaaS product. Owned the billing and subscription system end-to-end.",
    tags: ["TypeScript", "React", "Node.js"],
  },
];

export const projects = [
  {
    name: "Project Alpha",
    description:
      "An open-source CLI tool for managing environment configurations across multiple cloud providers.",
    tags: ["Go", "CLI", "Cloud"],
    github: "https://github.com/santoshgdev/project-alpha",
    live: "",
  },
  {
    name: "Project Beta",
    description:
      "A real-time data visualization dashboard for monitoring distributed system metrics.",
    tags: ["TypeScript", "React", "WebSockets"],
    github: "https://github.com/santoshgdev/project-beta",
    live: "",
  },
  {
    name: "Project Gamma",
    description:
      "Lightweight job scheduler with pluggable backends — supports Redis, Postgres, and in-memory queues.",
    tags: ["Python", "Redis", "PostgreSQL"],
    github: "https://github.com/santoshgdev/project-gamma",
    live: "",
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "Go", "TypeScript", "SQL"] },
  { category: "Infrastructure", items: ["Kubernetes", "Terraform", "GCP", "AWS"] },
  { category: "Data", items: ["Kafka", "PostgreSQL", "BigQuery", "dbt"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
];

export type DiagramNode = {
  id: string;
  position: { x: number; y: number };
  data: { label: string; type: string; description?: string };
  type?: string;
};

export type DiagramEdge = {
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
};

export type Diagram = {
  id: string;
  name: string;
  description: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
};

export const diagrams: Diagram[] = [
  {
    id: "krw-platform",
    name: "KRW Platform",
    description: "Cloud-native ETL pipeline on Azure — ingests legal case and call data from LawRuler and Zoom Phone into a medallion data warehouse.",
    nodes: [
      { id: "airflow",    position: { x: 400, y: 0   }, data: { label: "Apache Airflow",          type: "client",   description: "Orchestrates LawRuler & Zoom pipelines via DAGs" } },
      { id: "caj",        position: { x: 400, y: 120 }, data: { label: "Container App Jobs",       type: "infra",    description: "Azure-managed compute for ETL job execution" } },
      { id: "handler",    position: { x: 400, y: 240 }, data: { label: "TaskHandler",              type: "service",  description: "Python CLI entry point (Fire) orchestrating ETL stages" } },
      { id: "lr-svc",     position: { x: 160, y: 360 }, data: { label: "LawRuler Ingestion",       type: "service",  description: "ROPC OAuth client — fetches case summaries & inbox items" } },
      { id: "zoom-svc",   position: { x: 640, y: 360 }, data: { label: "Zoom Phone Ingestion",     type: "service",  description: "S2S OAuth client — fetches call history & queue metrics" } },
      { id: "lr-api",     position: { x: 0,   y: 500 }, data: { label: "LawRuler API",             type: "external", description: "auth.lawruler.com / apim.lawruler.com" } },
      { id: "zoom-api",   position: { x: 800, y: 500 }, data: { label: "Zoom Phone API",           type: "external", description: "api.zoom.us/v2 — paginated call data" } },
      { id: "blob-raw",   position: { x: 160, y: 500 }, data: { label: "Blob Storage (Raw)",       type: "database", description: "JSON pages + manifests: lawruler-raw, zoom-raw" } },
      { id: "blob-stg",   position: { x: 640, y: 500 }, data: { label: "Blob Storage (Staging)",   type: "database", description: "Parquet chunks: lawruler-staging, zoom-staging" } },
      { id: "keyvault",   position: { x: 160, y: 640 }, data: { label: "Azure Key Vault",          type: "infra",    description: "API credentials — injected via Managed Identity" } },
      { id: "sql",        position: { x: 400, y: 640 }, data: { label: "Azure SQL Database",       type: "database", description: "staging + bronze schemas for LawRuler & Zoom" } },
      { id: "logs",       position: { x: 640, y: 640 }, data: { label: "Log Analytics",            type: "infra",    description: "Execution logs & query tracing (30-day retention)" } },
      { id: "bi",         position: { x: 400, y: 780 }, data: { label: "ThoughtSpot BI",           type: "external", description: "Read-only Entra ID access to bronze layer" } },
    ],
    edges: [
      { id: "e1",  source: "airflow",  target: "caj",       animated: true,  label: "triggers" },
      { id: "e2",  source: "caj",      target: "handler",   animated: true,  label: "executes" },
      { id: "e3",  source: "handler",  target: "lr-svc" },
      { id: "e4",  source: "handler",  target: "zoom-svc" },
      { id: "e5",  source: "lr-svc",   target: "lr-api",    animated: true },
      { id: "e6",  source: "zoom-svc", target: "zoom-api",  animated: true },
      { id: "e7",  source: "lr-svc",   target: "blob-raw",  label: "write JSON" },
      { id: "e8",  source: "zoom-svc", target: "blob-raw",  label: "write JSON" },
      { id: "e9",  source: "blob-raw", target: "blob-stg",  label: "normalize → Parquet" },
      { id: "e10", source: "blob-stg", target: "sql",       label: "BULK INSERT" },
      { id: "e11", source: "keyvault", target: "lr-svc",    label: "secrets" },
      { id: "e12", source: "keyvault", target: "zoom-svc",  label: "secrets" },
      { id: "e13", source: "caj",      target: "logs" },
      { id: "e14", source: "sql",      target: "bi",        label: "read-only" },
    ],
  },
];
