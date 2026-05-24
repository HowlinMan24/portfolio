"use client";

const SKILLS = [
  "Angular", "NestJS", "TypeScript", "Python", "PySpark", "Apache Spark",
  "Apache Flink", "Kafka", "scikit-learn", "Deep Learning", "Docker",
  "Kubernetes", "AWS", "CI/CD", "MySQL", "Redis", "REST APIs",
  "Node.js", "PostgreSQL", "MongoDB", "C/C++", "Java", "Linux",
  "MLOps", "Data Mining", "ETL", "Bioinformatics", "Statistics",
];

function Track({ reverse = false }: { reverse?: boolean }) {
  const items = [...SKILLS, ...SKILLS];
  return (
    <div className="overflow-hidden py-3.5">
      <div className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 mx-6 text-sm font-medium text-zinc-400 hover:text-zinc-700 transition-colors shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-sky-500/50 shrink-0" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="select-none border-y border-zinc-200/80">
      <Track reverse={false} />
      <Track reverse={true} />
    </div>
  );
}
