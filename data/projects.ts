export type Category = "Web" | "AI" | "ML" | "Data" | "OS/Systems" | "Cloud" | "Other";

export interface Project {
  name: string;
  description: string;
  category: Category; // auto (unless marked manual)
  secondaryTags?: string[];
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  updatedAt: string;
  highlight?: boolean;
}

export const projects: Project[] = [
  // ── Manual entries ──────────────────────────────────────────────────────────
  {
    name: "Calendar SaaS App",
    description:
      "Google Calendar–style app for managing events across multiple calendars. Reusable month/week/day views, event dialogs, and filters. Dockerized with Nginx config for dev/prod.",
    category: "Web",
    tech: ["Angular", "NestJS", "MySQL", "Docker", "Nginx"],
    repoUrl: "https://github.com/HowlinMan24/CalendarWebApp",
    demoUrl: undefined, // TODO: add live URL
    updatedAt: "2024-09-21",
    highlight: true,
  },
  {
    name: "Algorithms Visualizer",
    description:
      "Interactive site visualizing sorting and pathfinding algorithms step by step as animations. Controls for algorithm, input size, and speed. Plain HTML/CSS/JS, no frameworks.",
    category: "Web",
    tech: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
    repoUrl: "https://github.com/HowlinMan24/AlgorithmsVizualizer",
    demoUrl: "https://howlinman24.github.io/AlgorithmsVizualizer/",
    updatedAt: "2024-04-26",
  },

  // ── Auto-imported from GitHub ────────────────────────────────────────────────
  {
    name: "Go Notes API + Next.js Frontend", // auto
    description:
      "Full-stack notes application: layered-architecture Go REST API (JWT auth, bcrypt password hashing, MySQL) paired with a Next.js frontend.",
    category: "Web", // auto — Go REST API + Next.js frontend
    tech: ["Go", "Next.js", "TypeScript", "MySQL", "JWT"],
    repoUrl: "https://github.com/HowlinMan24/LearningGOAndReact",
    updatedAt: "2026-07-14",
    highlight: true,
  },
  {
    name: "cpabe-secure-share", // auto
    description:
      "Secure file sharing using CP-ABE (BSW07) with hybrid AES-256-GCM encryption — university Data Security project.",
    category: "Other", // auto — crypto/security, not a standard Web/ML category
    secondaryTags: ["Security"],
    tech: ["Python", "Docker", "Encryption", "CP-ABE"],
    repoUrl: "https://github.com/HowlinMan24/cpabe-secure-share",
    updatedAt: "2026-05-23",
    highlight: true,
  },
  {
    name: "Student Grading App with LLMs", // auto
    description:
      "Student grading application powered by large language models for automated assessment and feedback.",
    category: "AI", // auto — LLMs in name + TypeScript + Java
    tech: ["Java", "TypeScript", "HTML", "LLMs"],
    repoUrl: "https://github.com/HowlinMan24/Student-Grading-App-with-LLMs",
    updatedAt: "2026-05-23",
    highlight: true,
  },
  {
    name: "KYC Service", // auto
    description:
      "Production-grade KYC verification microservice with JWT auth, Zod validation, Sequelize ORM, and full OpenAPI docs.",
    category: "Web", // auto — express + fintech + kyc topics
    secondaryTags: ["Fintech"],
    tech: ["TypeScript", "Express", "JWT", "Docker", "Sequelize", "OpenAPI"],
    repoUrl: "https://github.com/HowlinMan24/kyc-service",
    updatedAt: "2026-05-17",
    highlight: true,
  },
  {
    name: "Pathway Analysis — Data Mining", // auto
    description:
      "Pathway analysis using sequence mining techniques: EDA, feature engineering, and pattern extraction on real datasets.",
    category: "Data", // auto — Jupyter Notebook + data mining in description
    tech: ["Python", "Jupyter", "Data Mining", "PySpark", "EDA"],
    repoUrl: "https://github.com/HowlinMan24/Pathway-Analysis-Data-Mining",
    updatedAt: "2026-02-12",
    highlight: true,
  },
  {
    name: "Parts Marketplace", // auto
    description:
      "Full-stack parts marketplace web app with Dockerized deployment and shell-scripted CI helpers.",
    category: "Web", // auto — C# .NET + HTML + Dockerfile
    tech: ["C#", ".NET", "HTML", "CSS", "Docker", "Shell"],
    repoUrl: "https://github.com/HowlinMan24/PartsMarketplace",
    updatedAt: "2026-01-30",
  },
  {
    name: "DIAS Project", // auto
    description:
      "Full-stack project combining a TypeScript/Angular front-end with a Python back-end for data-driven features.",
    category: "Web", // auto — TypeScript primary + Python + HTML
    secondaryTags: ["Data"],
    tech: ["TypeScript", "Python", "JavaScript", "HTML", "Angular"],
    repoUrl: "https://github.com/HowlinMan24/DIASProject",
    updatedAt: "2025-02-02",
  },
  {
    name: "Machine Learning Notebooks", // auto
    description:
      "Collection of ML experiments: classification, regression, and model evaluation using scikit-learn and Pandas.",
    category: "ML", // auto — Python + name
    tech: ["Python", "scikit-learn", "Pandas", "Jupyter"],
    repoUrl: "https://github.com/HowlinMan24/Machine-Learning",
    updatedAt: "2024-09-20",
  },
  {
    name: "Movies Angular App", // auto
    description:
      "Movie browsing app built with Angular, featuring search, filtering, and detailed movie views.",
    category: "Web", // auto — TypeScript + HTML (Angular)
    tech: ["TypeScript", "Angular", "HTML", "SCSS"],
    repoUrl: "https://github.com/HowlinMan24/MoviesAngularApp",
    updatedAt: "2024-06-26",
  },
  {
    name: "Operating Systems (Java)", // auto
    description:
      "Java implementations of OS-level concepts: scheduling, concurrency, synchronization, and memory management.",
    category: "OS/Systems", // auto — name + Java
    tech: ["Java", "Concurrency", "Scheduling"],
    repoUrl: "https://github.com/HowlinMan24/OperatingSystems",
    updatedAt: "2024-09-17",
  },

  // ── Newly pushed from local ─────────────────────────────────────────────────
  {
    name: "DAWN — Bilingual Teaching Platform",
    description:
      "Solo-built bilingual (EN/MK) teaching platform for coding and economics, from scratch. Go backend (Postgres), Angular SSR/SSG frontend. Actively in development — private repo, no public link yet.",
    category: "Web",
    secondaryTags: ["EdTech"],
    tech: ["Go", "Angular", "PostgreSQL"],
    updatedAt: "2026-07-23",
  },
  {
    name: "Treatment Pathway Analysis",
    description:
      "Sequence mining and ML pipeline for diabetes treatment pathway analysis. EDA, preprocessing, and pattern extraction on real clinical data.",
    category: "Data",
    secondaryTags: ["ML"],
    tech: ["Python", "Jupyter", "Sequence Mining", "scikit-learn", "Data Mining"],
    repoUrl: "https://github.com/HowlinMan24/Pathway-Analysis",
    updatedAt: "2025-08-29",
    highlight: true,
  },
  {
    name: "Diabetes ML Streaming",
    description:
      "End-to-end diabetes prediction pipeline: offline Spark ML model training and online real-time inference via Kafka streaming producer/consumer.",
    category: "ML",
    secondaryTags: ["Data"],
    tech: ["Python", "PySpark", "Kafka", "Docker", "Streaming", "scikit-learn"],
    repoUrl: "https://github.com/HowlinMan24/diabetes-ml-streaming",
    updatedAt: "2025-11-30",
    highlight: true,
  },
  {
    name: "Spark ALS — Movie Recommender",
    description:
      "Movie recommendation system using Apache Spark's ALS collaborative filtering on the MovieLens 100K dataset. Jupyter-based training and evaluation.",
    category: "ML",
    secondaryTags: ["Data"],
    tech: ["PySpark", "Spark ALS", "Jupyter", "Collaborative Filtering"],
    repoUrl: "https://github.com/HowlinMan24/spark-als-movielens",
    updatedAt: "2025-05-24",
  },
  {
    name: "Data Science Labs",
    description:
      "Intro to Data Science lab exercises: EDA on climate and power consumption data, feature engineering, model training, and visualizations.",
    category: "Data",
    tech: ["Python", "Jupyter", "Pandas", "EDA", "scikit-learn"],
    repoUrl: "https://github.com/HowlinMan24/data-science-labs",
    updatedAt: "2025-01-19",
  },
  {
    name: "Architecture & System Designs",
    description:
      "Architecture patterns from monolith to event-driven and AWS systems - each with Mermaid diagrams, trade-off analysis, and when-to-use guidance.",
    category: "OS/Systems",
    tech: ["System Design", "AWS", "Microservices", "CQRS", "Event-Driven"],
    repoUrl: "https://github.com/HowlinMan24/system-design",
    updatedAt: "2026-05-27",
    highlight: true,
  },
  {
    name: "Flink Streaming App",
    description:
      "Apache Flink Big Data streaming application built with Java and Maven — stateful stream processing and real-time event handling.",
    category: "Data",
    secondaryTags: ["OS/Systems"],
    tech: ["Java", "Apache Flink", "Maven", "Stream Processing"],
    repoUrl: "https://github.com/HowlinMan24/flink-streaming",
    updatedAt: "2025-05-24",
  },

  // ── Auto-imported from GitHub (new) ──────────────────────────────────────────
  {
    name: "SAP LLM Connector", // auto
    description:
      "Scripts that pull data out of an on-premise SAP system (S/4HANA and/or BW-on-HANA) and hand a pandas-summarized version to a local Ollama LLM for analysis, so no SAP data ever leaves the network.",
    category: "AI", // auto — on-prem LLM + SAP integration
    secondaryTags: ["Fintech"],
    tech: ["Python", "SAP", "Ollama", "RFC/BAPI", "Pandas"],
    repoUrl: "https://github.com/HowlinMan24/sap-llm-connector",
    updatedAt: "2026-07-30",
    highlight: true,
  },
  {
    name: "Multi-Format RAG Pipeline", // auto
    description:
      "Retrieval pipeline for mixed-format documentation (docx, xlsx, pdf) feeding a local Ollama LLM, plus a tool-calling agent loop combining retrieval with live read-only queries against a real backend system (SAP).",
    category: "AI", // auto — RAG + LLMs + Python
    secondaryTags: ["RAG"],
    tech: ["Python", "RAG", "Ollama", "LLMs", "SAP"],
    repoUrl: "https://github.com/HowlinMan24/multiformat-rag-pipeline",
    updatedAt: "2026-07-30",
    highlight: true,
  },
  {
    name: "RAG-Anything Evaluation", // auto
    description:
      "On-prem evaluation of the knowledge-graph RAG library RAG-Anything against a simpler ChromaDB-based retrieval pipeline, plus a from-scratch cross-encoder reranker built to close a retrieval-quality gap found along the way.",
    category: "AI", // auto — RAG + LLMs + Python
    secondaryTags: ["RAG"],
    tech: ["Python", "RAG", "ChromaDB", "Ollama", "Reranking"],
    repoUrl: "https://github.com/HowlinMan24/rag-anything-eval",
    updatedAt: "2026-07-30",
    highlight: true,
  },
  {
    name: "LLM Fine-Tuning Demo", // auto
    description:
      "QLoRA fine-tuning demonstration using a deliberately fictional company so any correct answer from the fine-tuned model is unambiguous proof the fine-tuning worked, isolated from base-model knowledge leakage.",
    category: "AI", // auto — fine-tuning + LLMs + Python
    tech: ["Python", "QLoRA", "Fine-tuning", "LLMs"],
    repoUrl: "https://github.com/HowlinMan24/llm-finetuning-demo",
    updatedAt: "2026-07-30",
  },
  {
    name: "AWS VPC Foundation", // auto
    description:
      "Reusable, secure-by-default multi-AZ VPC Terraform module for AWS with private subnets that have no route to the internet, plus a minimal EC2 instance proving it works.",
    category: "Cloud", // auto — Terraform/HCL + AWS infra
    tech: ["Terraform", "HCL", "AWS", "VPC", "EC2"],
    repoUrl: "https://github.com/HowlinMan24/aws-vpc-foundation",
    updatedAt: "2026-08-03",
    highlight: true,
  },
  {
    name: "Terraform CI/CD Pipeline", // auto
    description:
      "GitHub Actions pipeline for Terraform: every PR gets a plan, format check, and security scan; merging to main auto-deploys dev and requires human approval before touching prod, authenticating via separate OIDC roles instead of long-lived keys.",
    category: "Cloud", // auto — Terraform/HCL + CI/CD
    tech: ["Terraform", "HCL", "GitHub Actions", "AWS", "OIDC", "Checkov"],
    repoUrl: "https://github.com/HowlinMan24/terraform-cicd-pipeline",
    updatedAt: "2026-08-03",
    highlight: true,
  },
  {
    name: "Serverless Observability Stack", // auto
    description:
      "Serverless items API (API Gateway to Lambda to DynamoDB) with a full observability layer on top: a CloudWatch dashboard, percentage-based metric-math alarms, and SNS email alerting.",
    category: "Cloud", // auto — Terraform/HCL + AWS serverless
    secondaryTags: ["Observability"],
    tech: ["Terraform", "AWS Lambda", "API Gateway", "DynamoDB", "CloudWatch", "SNS"],
    repoUrl: "https://github.com/HowlinMan24/serverless-observability-stack",
    updatedAt: "2026-08-04",
    highlight: true,
  },
];
