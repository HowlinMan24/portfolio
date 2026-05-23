export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    items: ["Java", "Python", "C#", "JavaScript", "TypeScript", "SQL", "Shell"],
  },
  {
    label: "Web",
    items: [
      "Angular", "Node.js", ".NET", "Spring", "NestJS",
      "HTML5", "CSS3", "Tailwind", "REST APIs", "WebSockets",
      "Nginx", "Apache",
    ],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "AWS RDS", "AWS Aurora"],
  },
  {
    label: "Data & ML",
    items: [
      "Spark", "Flink", "PySpark", "Big Data",
      "scikit-learn", "Deep Learning", "EDA", "Data Mining",
      "ETL", "MLOps", "Databricks",
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      "AWS (S3, EC2, IAM, CloudFront)",
      "Docker", "Kubernetes", "CI/CD", "Git", "GitHub", "Jenkins", "SSH",
    ],
  },
  {
    label: "Tools",
    items: [
      "SAP", "Hypatos", "Postman", "Jira", "Confluence",
      "GitLab", "Contentful", "Slack",
    ],
  },
];
