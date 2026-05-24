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
      "Architect and maintain a secure, multi-tenant banking and e-commerce platform — delivering customer KYC onboarding flows, payment pages, FX trading dashboards, and internal admin tooling used by operations teams daily.",
      "Refactored a monolithic Angular frontend into a modular component library, eliminating duplicated logic across KYC profile management, international wire transfers, and FX trade execution screens, significantly reducing onboarding time for new features.",
      "Designed RESTful APIs in NestJS with JWT authentication, refresh-token rotation, and role-based access control governing compliance-sensitive operations including identity verification and fund transfers.",
      "Improved platform responsiveness by introducing Redis caching on high-traffic endpoints and optimising MySQL query plans, reducing average API response times under peak production load.",
    ],
  },
  {
    role: "Data Scientist — SAP × Hypatos",
    company: "Xient GmbH",
    location: "Germany (Remote)",
    period: "Jun 2025 – Present",
    tech: ["Python", "PySpark", "scikit-learn", "ETL", "SAP", "Hypatos"],
    bullets: [
      "Build and productionise classification, regression, and time-series forecasting models — leveraging scikit-learn and custom feature-engineering pipelines — to predict revenue, customer churn, and demand for enterprise clients.",
      "Design and maintain distributed PySpark ETL pipelines that ingest, clean, and transform complex multi-source datasets, integrating SAP ERP data with Hypatos document-intelligence outputs to surface actionable business insights.",
      "Collaborate with cross-functional teams across Germany to translate business requirements into production-ready ML models and data products, contributing to design reviews and model evaluation sessions.",
    ],
  },
  {
    role: "Humanitarian Developer",
    company: "Support Kocani",
    location: "North Macedonia",
    period: "Mar 2025 – Apr 2025",
    tech: ["PHP", "Laravel", "AWS", "OpenAI API", "Python"],
    bullets: [
      "Volunteered to rapidly design and ship supportkocani.com — a donation coordination platform built with Laravel and deployed on AWS — within days of the Kocani earthquake tragedy to help affected families receive aid.",
      "Integrated the OpenAI Vision API to automatically parse wire transfer and cheque screenshots, aggregating donation totals in real time and eliminating a fully manual counting process that would have taken hours per day.",
    ],
  },
  {
    role: "Full-stack Developer & Tutor",
    company: "Freelance",
    location: "North Macedonia",
    period: "Dec 2021 – Present",
    tech: ["Angular", "Node.js", "HTML5", "CSS3", "Python", "Pandas", "SQL"],
    bullets: [
      "Designed and delivered production websites for a solar energy provider and a PVC construction company, handling requirements gathering, UI/UX design, full-stack development, and deployment end-to-end.",
      "Provided 1-on-1 and small-group tutoring in web development (HTML/CSS/JS, Angular, Node.js) and data science (Python, Pandas, SQL, machine learning, deep learning) for students at various skill levels.",
    ],
  },
  {
    role: "Contributor",
    company: "Loka & nf-core Bioinformatics Hackathon",
    location: "North Macedonia",
    period: "Mar 2026",
    tech: ["Python", "nf-core", "Nextflow", "Bioinformatics"],
    bullets: [
      "Participated in an international nf-core bioinformatics hackathon, contributing code improvements, bug fixes, and documentation to reproducible Nextflow pipeline workflows used by the global research community.",
    ],
  },
];
