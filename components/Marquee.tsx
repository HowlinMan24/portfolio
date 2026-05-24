"use client";

const SKILLS = [
  "Angular", "NestJS", "Node.js", "TypeScript", "React",
  "Python", "PySpark", "Apache Spark", "Apache Flink", "Kafka",
  "scikit-learn", "Deep Learning", "MLOps", "Databricks",
  "Docker", "Kubernetes", "AWS", "CI/CD", "MySQL", "Redis",
  "JWT", "REST APIs", "WebSockets", "PostgreSQL", "MongoDB",
];

function Track({ dir = 1 }: { dir?: 1 | -1 }) {
  return (
    <div className="flex overflow-hidden py-4">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="flex shrink-0 animate-marquee gap-10 pr-10"
          style={{
            animationDirection: dir === -1 ? "reverse" : "normal",
            animationDelay: copy === 1 ? "-17.5s" : "0s",
          }}
        >
          {SKILLS.map((s) => (
            <span key={s} className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors">
              <span className="w-1 h-1 rounded-full bg-indigo-500/60 shrink-0" />
              {s}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="select-none overflow-hidden border-y border-zinc-800/60">
      <Track dir={1} />
      <Track dir={-1} />
    </div>
  );
}
