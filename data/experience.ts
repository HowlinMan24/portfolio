export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Founder",
    company: "DAWN",
    location: "North Macedonia (Remote)",
    period: "Jul 2026 – Present",
    tech: ["Go", "Angular", "PostgreSQL", "Terraform", "SSR/SSG"],
    bullets: [
      "Founded and solo-built DAWN, a bilingual (EN/MK) teaching platform for coding and economics, from system design through deployment, including the Terraform-managed infrastructure.",
      "Built a Go REST backend on a Postgres-backed schema paired with an Angular SSR/SSG frontend, optimizing public content for SEO and fast first-load performance.",
      "Own the full product as sole engineer: architecture, content model, and infrastructure as code. Has delivered lessons to 30+ students.",
    ],
  },
  {
    role: "Senior Full-stack Developer",
    company: "Vista Point",
    location: "North Macedonia",
    period: "May 2022 – Present",
    tech: ["Angular", "Node.js", "MySQL", "MongoDB", "Redis", "JWT", "OAuth 2.0", "Docker"],
    bullets: [
      "Built and maintained, together with the founder, a multi-tenant banking platform used by 30+ client banks, covering identity verification, cross-border wire transfers, and FX trading.",
      "Set up and queried MongoDB to store KYC customer-profile questionnaires alongside the MySQL data.",
      "Built a custom search system that stays in sync with the platform's main database, powering background screening (PEP and sanctions-list checks) on new customers.",
      "Deployed and maintained the platform separately for two countries (North Macedonia and Germany), each with its own environment and configuration.",
      "Hardened security on sensitive features (identity checks, money transfers, permissions) with OAuth 2.0 for user login, service-to-service and bank-client access, plus JWT and refresh-token rotation.",
      "Fixed a peak-load performance bottleneck with Redis read-through caching and rewritten MySQL queries.",
      "Refactored a monolithic Angular codebase into a reusable component library, cutting duplicated logic across KYC, wire-transfer, and FX trade screens; trained and mentored 6 interns.",
    ],
  },
  {
    role: "Backend and AI Engineer",
    company: "Xient GmbH",
    location: "Germany (Remote)",
    period: "Jun 2024 – Sep 2026",
    tech: ["FastAPI", "Python", "Go", "AWS", "React", "Next.js", "SAP", "Copilot Studio", "Terraform"],
    bullets: [
      "Shipped a Microsoft Teams tab application (FastAPI, Python) embedding a BW/4HANA KPI dashboard as both a personal and channel tab, surfacing real-time business intelligence data directly within Teams.",
      "Delivered a full-stack documentation PDF export tool (Go, React, Next.js, Python, Playwright) with BFS site crawling, per-section ZIP packaging, and SSE-streamed generation progress.",
      "Wired an on-premise SAP S/4HANA + BW system to a locally-hosted LLM (Ollama on Nvidia DGX Spark) via RFC/BAPI and OData; built Python extraction pipelines enabling zero-cloud AI-powered data analysis.",
      "Built Microsoft Copilot Studio agents backed by Power Automate flows that query the on-premise SAP system (OData through a data gateway, read-only), so purchasing and finance staff can ask plain-language questions about contracts, account balances, and production orders.",
      "Built a multi-format (docx/xlsx/pdf) RAG pipeline with a tool-calling agent loop combining document retrieval and live SAP queries; evaluated a knowledge-graph RAG approach against a ChromaDB baseline and shipped a from-scratch cross-encoder reranker to close a retrieval-quality gap, entirely on-prem via local Ollama models.",
    ],
  },
  {
    role: "Volunteer Developer",
    company: "Support Kocani",
    location: "North Macedonia",
    period: "Mar 2025 – Apr 2025",
    tech: ["PHP", "Laravel", "AWS", "OpenAI Vision API"],
    bullets: [
      "Designed and launched a donation-tracking website in 72 hours during a local disaster, so families could track relief donations in real time.",
      "Used AI to auto-read bank transfer screenshots, cutting manual data entry by about 4 hours a day.",
    ],
  },
  {
    role: "Full-stack Developer & Tutor",
    company: "Freelance",
    location: "North Macedonia",
    period: "Dec 2021 – Present",
    tech: ["Angular", "Node.js", "HTML", "CSS", "JavaScript", "PHP", "Python", "Pandas", "SQL"],
    bullets: [
      "Delivered 2 production websites end-to-end (solar energy provider, PVC construction company) covering requirements, UI/UX, full-stack development (HTML, CSS, JavaScript, PHP), and deployment, enabling clients with no prior web presence to generate online leads.",
      "Taught web development (Angular, Node.js, HTML/CSS/JS) and data science (Python, Pandas, SQL, ML, Deep Learning, LLMs, RAG systems) across 1-on-1 and small-group sessions, adapting curriculum to individual skill levels.",
    ],
  },
  {
    role: "Open-source Contributor",
    company: "Loka & nf-core Bioinformatics Hackathon",
    location: "North Macedonia",
    period: "Mar 2026",
    tech: ["Python", "nf-core", "Nextflow", "Bioinformatics"],
    bullets: [
      "Contributed code improvements, bug fixes, and documentation to nf-core Nextflow pipeline modules at an international hackathon, collaborating with researchers on reproducible bioinformatics workflows.",
    ],
  },
];
