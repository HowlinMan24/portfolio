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
    role: "Senior Full-stack Developer",
    company: "Vista Point",
    location: "North Macedonia",
    period: "May 2022 – Present",
    tech: ["Angular", "Node.js", "MySQL", "Redis", "JWT", "Docker", "Java", "C#", "HTML", "CSS", "JavaScript"],
    bullets: [
      "Engineered a multi-tenant banking and e-commerce SaaS platform with microservices architecture (Angular, Node.js, MySQL, Redis, Java, C#, HTML, CSS, JavaScript) handling KYC onboarding, cross-border wire transfers, and FX trading.",
      "Cut feature delivery time ~40% by refactoring a monolithic Angular codebase into a reusable component library, eliminating duplicated logic across KYC, wire-transfer, and FX trade screens.",
      "Secured REST API endpoints covering compliance-sensitive operations - identity verification, fund transfers, and role management - by implementing JWT auth and refresh-token rotation.",
      "Reduced high-traffic endpoint response times ~35% by introducing Redis read-through caching and rewriting inefficient MySQL queries, improving throughput under peak transaction load.",
    ],
  },
  {
    role: "Data Scientist - SAP x Hypatos",
    company: "Xient GmbH",
    location: "",
    period: "Jun 2024 – Present",
    tech: ["Python", "PySpark", "scikit-learn", "ETL", "SAP", "Hypatos"],
    bullets: [
      "Built classification, regression, and time-series forecasting models with scikit-learn on SAP ERP and Hypatos document-intelligence data, achieving ~15% improvement in accuracy for revenue, churn, and demand prediction across enterprise clients.",
      "Designed distributed PySpark ETL pipelines (Lambda architecture: batch + streaming) integrating SAP ERP and Hypatos document-intelligence data, cutting manual data preparation time ~60% and surfacing decision-ready business insights.",
      "Deployed 3 production ML models into the SAP x Hypatos ecosystem, collaborating with cross-functional teams in Germany to translate business requirements into measurable forecasting outputs.",
    ],
  },
  {
    role: "Volunteer Developer",
    company: "Support Kocani",
    location: "North Macedonia",
    period: "Mar 2025 – Apr 2025",
    tech: ["PHP", "Laravel", "AWS", "OpenAI API", "Python"],
    bullets: [
      "Designed and shipped supportkocani.com (PHP/Laravel, AWS) within 72 hours of the Kocani disco fire, enabling real-time donation tracking for hundreds of affected families.",
      "Integrated OpenAI Vision API to automatically parse wire-transfer and cheque screenshots, eliminating ~4 hours of daily manual donation tallying and accelerating fund distribution to injured victims.",
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
      "Taught web development (Angular, Node.js, HTML/CSS/JS) and data science (Python, Pandas, SQL, ML, Deep Learning) across 1-on-1 and small-group sessions, adapting curriculum to individual skill levels.",
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
