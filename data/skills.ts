export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C/C++", "SQL", "PHP", "Bash/Shell"],
  },
  {
    label: "Web & APIs",
    items: [
      "Spring Boot", "Angular", "NestJS", "Node.js", ".NET",
      "HTML", "CSS", "Tailwind CSS", "REST APIs", "WebSockets", "Nginx",
    ],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "AWS RDS", "AWS Aurora"],
  },
  {
    label: "Data & ML",
    items: [
      "PySpark", "Apache Spark", "Apache Flink", "Kafka",
      "scikit-learn", "Pandas", "Matplotlib", "Seaborn",
      "Deep Learning", "Data Mining", "ETL", "MLOps", "Databricks",
      "Statistics", "Data Visualization", "Bioinformatics",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (S3, EC2, IAM, CloudFront)", "Docker", "Kubernetes",
      "CI/CD", "Jenkins", "Git", "GitHub", "Linux/Unix", "SSH",
    ],
  },
  {
    label: "Architecture",
    items: [
      "Microservices", "Multi-Tenant SaaS", "Event-Driven", "MVC", "REST APIs",
      "ETL Pipelines", "Lambda Architecture", "Hexagonal/Clean Architecture",
    ],
  },
  {
    label: "Tools",
    items: [
      "SAP", "Hypatos", "GitHub", "ClickUp", "Postman", "Jira", "Confluence",
      "GitLab", "OpenAI API", "Contentful",
    ],
  },
];
