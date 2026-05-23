export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Full-stack Developer",
    company: "Vista Point",
    location: "North Macedonia",
    period: "May 2023 – Present",
    bullets: [
      "Built and maintained a secure banking & e-commerce platform (Angular, NestJS, MySQL, Redis): onboarding flows, payment pages, internal admin dashboards.",
      "Refactored legacy Angular into reusable components/services (KYC profiles, wire transfers, FX trades) without duplicating logic.",
      "Designed REST APIs in NestJS with JWT auth and role-based access control.",
      "Added Redis caching and optimized queries on high-traffic endpoints.",
    ],
  },
  {
    role: "Data Scientist (SAP × Hypatos)",
    company: "Xient GmbH",
    location: "Germany (Remote)",
    period: "Jun 2025 – Present",
    bullets: [
      "Built predictive models (classification, regression, time series) to forecast revenue, churn, and demand, improving forecasting precision.",
      "Built ETL pipelines with PySpark to extract, transform, and load complex multi-source datasets and surface decision-driving insights.",
    ],
  },
  {
    role: "Humanitarian Developer",
    company: "Support Kocani",
    location: "North Macedonia",
    period: "Mar 2025 – Apr 2025",
    bullets: [
      "Helped build and deploy supportkocani.com to aid victims of the Kocani tragedy. PHP (Laravel) + AWS for data entry, analysis, and hosting.",
      "Integrated the OpenAI API and tested LLMs to read wire/check screenshots and total up donations.",
    ],
  },
  {
    role: "Full-stack Developer / Tutor",
    company: "Freelance",
    location: "North Macedonia",
    period: "Dec 2021 – Present",
    bullets: [
      "Built clean, responsive sites for a solar electricity provider and a PVC construction company; added contact forms and simple admin views.",
      "Tutored 1-on-1 and small groups in web dev (HTML/CSS/JS, Angular, Node.js) and data programming (Python, Pandas, SQL, ML, Deep Learning).",
    ],
  },
  {
    role: "Contributor",
    company: "Loka & nf-core Bioinformatics Hackathon",
    location: "North Macedonia",
    period: "Mar 2026",
    bullets: [
      "International hackathon on real-world data pipelines; contributed code, debugging, and docs to improve reproducible workflows.",
    ],
  },
];
