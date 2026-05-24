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
    role: "Full-stack Developer",
    company: "Vista Point",
    location: "North Macedonia",
    period: "May 2023 – Present",
    tech: ["Angular", "NestJS", "MySQL", "Redis", "JWT", "Docker", "Nginx"],
    bullets: [
      "Built and maintained a secure banking & e-commerce platform: onboarding flows, payment pages, internal admin dashboards.",
      "Refactored legacy Angular into reusable components/services (KYC profiles, wire transfers, FX trades) without duplicating logic.",
      "Designed REST APIs in NestJS with JWT auth and role-based access control.",
      "Added Redis caching and optimized queries on high-traffic endpoints.",
    ],
  },
  {
    role: "Data Scientist — SAP × Hypatos",
    company: "Xient GmbH",
    location: "Germany (Remote)",
    period: "Jun 2025 – Present",
    tech: ["Python", "PySpark", "scikit-learn", "ETL", "SAP", "Hypatos"],
    bullets: [
      "Built predictive models (classification, regression, time series) to forecast revenue, churn, and demand.",
      "Built ETL pipelines with PySpark to extract, transform, and load complex multi-source datasets and surface decision-driving insights.",
    ],
  },
  {
    role: "Humanitarian Developer",
    company: "Support Kocani",
    location: "North Macedonia",
    period: "Mar 2025 – Apr 2025",
    tech: ["PHP", "Laravel", "AWS", "OpenAI API", "Python"],
    bullets: [
      "Helped build and deploy supportkocani.com to aid victims of the Kocani tragedy using PHP (Laravel) + AWS.",
      "Integrated the OpenAI API to read wire/check screenshots and automatically total up donations.",
    ],
  },
  {
    role: "Full-stack Developer & Tutor",
    company: "Freelance",
    location: "North Macedonia",
    period: "Dec 2021 – Present",
    tech: ["Angular", "Node.js", "HTML5", "CSS3", "Python", "Pandas", "SQL"],
    bullets: [
      "Built clean, responsive sites for a solar electricity provider and a PVC construction company.",
      "Tutored 1-on-1 and small groups in web dev (HTML/CSS/JS, Angular, Node.js) and data programming (Python, Pandas, SQL, ML, Deep Learning).",
    ],
  },
  {
    role: "Contributor",
    company: "Loka & nf-core Bioinformatics Hackathon",
    location: "North Macedonia",
    period: "Mar 2026",
    tech: ["Python", "nf-core", "Nextflow", "Bioinformatics"],
    bullets: [
      "International hackathon on real-world data pipelines; contributed code, debugging, and docs to improve reproducible workflows.",
    ],
  },
];
