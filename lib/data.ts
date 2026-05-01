export const profile = {
  name: "Santosh Gummidipundi",
  short: "Santosh G.",
  title: "Data Engineer — Healthcare & Biotech",
  location: "San Francisco Bay Area",
  email: "santosh@santoshg.io",
  github: "https://github.com/santoshgdev",
  linkedin: "https://www.linkedin.com/in/santosheg/",
  scholar: "https://scholar.google.com/citations?user=bf7OX6AAAAAJ",
  heroLine: "I build pipelines that move clinical and life-science data from messy reality into systems people can trust.",
  bio: "Healthcare and biotech data engineer with 4+ years building production pipelines and 10+ years in life-sciences data — clinical trials, biostatistics, and ML infrastructure. Currently at Sprinter Health.",
};

export const experience = [
  {
    period: "2026 — Present",
    role: "Data Engineer",
    company: "Sprinter Health",
    location: "Menlo Park, CA",
    description: "Building data infrastructure for in-home preventive care.",
    tags: ["Python", "Spark", "AWS"],
  },
  {
    period: "2022 — 2026",
    role: "Data Engineer II",
    company: "Verana Health",
    location: "San Francisco, CA",
    description: "Authored post-processing components and Airflow orchestration for LLM inference pipelines, integrating Databricks preprocessing with AWS Bedrock batch inference — the org's first production-ready LLM inference capability. Optimized a GPU-intensive SageMaker pipeline to a Spark UDF using spaCy, reducing cost 90%+. Migrated EKS pipelines to Databricks for a 50% processing-time reduction.",
    tags: ["Databricks", "AWS Bedrock", "Airflow", "PySpark", "Delta Lake", "spaCy"],
  },
  {
    period: "2021 — 2022",
    role: "Data Scientist / Data Engineer",
    company: "Thermo Fisher Scientific",
    location: "South San Francisco, CA",
    description: "Designed event-driven ETL pipelines from multiple sources to AWS. Python and Java services with CI/CD to serverless. Root-cause analysis using statistical tools, results presented to cross-functional teams.",
    tags: ["Python", "Java", "AWS", "ETL", "R"],
  },
  {
    period: "2018 — 2021",
    role: "Biostatistician / Data Scientist",
    company: "Stanford University — QSU, School of Medicine",
    location: "Palo Alto, CA",
    description: "Biostatistics and informatics on the Apple Heart Study (n > 400,000). Built end-to-end demographics + retention ETL on GCP serving an R Shiny dashboard. Trained BERT and LSTM models in PyTorch for clinical-note classification.",
    tags: ["BERT", "PyTorch", "GCP", "R", "Shiny"],
  },
  {
    period: "2018 — 2021",
    role: "Clinical Research Data Analyst II",
    company: "Department of Veterans Affairs — PAVIR",
    location: "Palo Alto, CA",
    description: "Statistical models and hypothesis testing on the VA Corporate Data Warehouse for manuscript submissions.",
    tags: ["R", "Statistics"],
  },
  {
    period: "2015 — 2018",
    role: "Quantitative Research Analyst I",
    company: "Sutter Health — PAMF",
    location: "Palo Alto, CA",
    description: "Healthcare-disparity research across 17 racial/ethnic groups and 50 metrics on the full PAMF adult EMR population, using GLMs in SAS.",
    tags: ["SAS", "Healthcare", "GLMs"],
  },
];

export type Project = {
  name: string;
  kind: "work" | "consulting" | "research" | "open-source" | "civic";
  status: "on-going" | "shipped" | "archived";
  period: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  diagramId?: string;
};

export const projects: Project[] = [
  {
    name: "symbol-screen",
    kind: "work",
    status: "on-going",
    period: "2025 — present",
    role: "Solo build",
    summary: "A screening tool for symbol-level patterns in financial markets. Private project.",
    highlights: [
      "Designing the ingestion + scoring pipeline end-to-end.",
      "Evaluating Polars vs DuckDB for the analytics layer.",
    ],
    stack: ["Python", "DuckDB"],
    links: [],
  },
  {
    name: "Marketing-law data infrastructure",
    kind: "consulting",
    status: "on-going",
    period: "2026 — present",
    role: "Advisor",
    summary: "Embedded with a marketing law firm to design their data infrastructure — intake, matter management, and reporting. Details to follow.",
    highlights: [
      "Auditing current data flows.",
      "Scoping a warehouse + dashboarding plan.",
    ],
    stack: ["Strategy", "Data warehousing"],
    links: [],
  },
];

export const publications = [
  {
    year: "2020",
    venue: "JAMA Cardiology",
    title: "Rhythm classification from a large remote, prospective cohort",
    authors: "Apple Heart Study Investigators incl. S. Gummidipundi",
    href: "https://scholar.google.com/citations?user=bf7OX6AAAAAJ",
  },
  {
    year: "2019",
    venue: "NEJM",
    title: "Large-Scale Assessment of a Smartwatch to Identify Atrial Fibrillation",
    authors: "Perez M.V. et al.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa1901183",
  },
];

export const now = [
  "Ramping at Sprinter Health.",
  "Building symbol-screen on the side.",
  "Advising a marketing law firm on data infrastructure.",
  "Re-reading Designing Data-Intensive Applications.",
];

export const skills = [
  { category: "Programming", items: ["Python", "R", "SQL", "Shell"] },
  { category: "Data / Frameworks", items: ["Spark", "Airflow", "Delta Lake", "Terraform", "Kubernetes", "Docker"] },
  { category: "Cloud", items: ["Databricks", "AWS Bedrock", "AWS SageMaker", "GCP BigQuery", "GCP Cloud Run", "Azure"] },
  { category: "ML / NLP", items: ["PyTorch", "spaCy", "BERT", "LSTMs"] },
];

// SVG-based architecture diagram (no React Flow dependency)
export type DiagramNode = {
  id: string;
  x: number;
  y: number;
  type: "external" | "database" | "service" | "queue" | "infra" | "client";
  label: string;
  desc: string;
};

export type DiagramDef = {
  id: string;
  title: string;
  description: string;
  nodes: DiagramNode[];
  edges: [string, string][];
};

export const diagrams: DiagramDef[] = [
  {
    id: "verana-llm",
    title: "Verana Health — LLM inference pipeline",
    description: "Production LLM inference: Databricks preprocessing → AWS Bedrock batch inference, orchestrated by Airflow.",
    nodes: [
      { id: "src",     x: 60,  y: 40,  type: "external", label: "Clinical sources", desc: "EHR exports" },
      { id: "raw",     x: 60,  y: 170, type: "database", label: "Raw lake",         desc: "S3 / Delta" },
      { id: "prep",    x: 290, y: 170, type: "service",  label: "Databricks prep",  desc: "PySpark UDF (spaCy)" },
      { id: "queue",   x: 520, y: 170, type: "queue",    label: "Bedrock queue",    desc: "Batch jobs" },
      { id: "infer",   x: 520, y: 40,  type: "service",  label: "AWS Bedrock",      desc: "LLM inference" },
      { id: "post",    x: 520, y: 300, type: "service",  label: "Post-processing",  desc: "Validation + tagging" },
      { id: "out",     x: 290, y: 300, type: "database", label: "Curated marts",    desc: "Delta tables" },
      { id: "airflow", x: 60,  y: 300, type: "infra",    label: "Airflow",          desc: "Orchestration" },
    ],
    edges: [
      ["src", "raw"], ["raw", "prep"], ["prep", "queue"], ["queue", "infer"],
      ["infer", "post"], ["post", "out"], ["airflow", "out"], ["airflow", "prep"],
    ],
  },
];
