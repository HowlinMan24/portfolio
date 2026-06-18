"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const subjects = [
  {
    name: "Algorithms & Data Structures",
    desc: "Complexity analysis, trees, graphs, dynamic programming, sorting and search algorithms.",
  },
  {
    name: "Operating Systems",
    desc: "Process and memory management, scheduling, file systems, concurrency and synchronisation.",
  },
  {
    name: "Computer Networks",
    desc: "TCP/IP stack, routing protocols, socket programming, and network security fundamentals.",
  },
  {
    name: "Databases",
    desc: "Relational modelling, SQL, query optimisation, transactions, and NoSQL fundamentals.",
  },
  {
    name: "Software Engineering",
    desc: "SDLC, agile methodologies, requirements engineering, testing, and design patterns.",
  },
  {
    name: "Artificial Intelligence",
    desc: "Search algorithms, knowledge representation, logic programming, and planning.",
  },
  {
    name: "Machine Learning",
    desc: "Supervised and unsupervised learning, model evaluation, feature engineering, neural networks.",
  },
  {
    name: "Data Mining",
    desc: "Association rules, clustering, classification, and pattern recognition in large datasets.",
  },
  {
    name: "Big Data Mining",
    desc: "Distributed processing with Apache Spark, Flink, and Kafka, batch and streaming pipelines at scale.",
  },
  {
    name: "DevOps Software Development",
    desc: "CI/CD pipelines, infrastructure as code, containerisation, automated testing, and release management.",
  },
  {
    name: "Information Security",
    desc: "Cryptography, access control, network security, threat modelling, and compliance.",
  },
  {
    name: "Statistics & Probability",
    desc: "Statistical inference, probability theory, hypothesis testing, and regression analysis.",
  },
  {
    name: "Web Programming",
    desc: "Client-server architecture, REST APIs, JavaScript frameworks, and authentication.",
  },
  {
    name: "Bioinformatics",
    desc: "Biological sequence analysis, genomic data pipelines, and computational biology tools.",
  },
  {
    name: "Computer Architecture",
    desc: "CPU design, instruction sets, memory hierarchy, pipelining, and parallel processing.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(56,189,248,0.025) 50%, transparent 100%)",
      }}
    >
      <div className="absolute inset-0 border-y border-zinc-100 pointer-events-none" />
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="05 — Education" title="Academic background" />

        {/* Degree card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-sky-500 mb-1.5">
              B.Sc. Software Engineering &amp; Information Systems
            </p>
            <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
              Faculty of Computer Science and Engineering (FINKI), UKIM
            </h3>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">Skopje, North Macedonia</p>
          </div>
          <span className="shrink-0 self-start rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            Graduated
          </span>
        </motion.div>

        {/* Coursework grid */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4"
        >
          Key coursework
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {subjects.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-4 py-3.5 hover:border-sky-200 dark:hover:border-sky-700/40 hover:bg-sky-50/40 dark:hover:bg-sky-500/5 transition-all duration-200"
            >
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">{s.name}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Cert + Languages */}
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Certification", value: "AWS Certified AI Practitioner" },
            { label: "Languages", value: "Macedonian (Native) · English (C1) · German (A2)" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 px-5 py-4"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1.5">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
