"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const inProgress = ["Data Mining", "Big Data Mining", "Information Security", "CI/CD", "Bioinformatics"];

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)",
      }}
    >
      <div className="absolute inset-0 border-y border-zinc-800/50 pointer-events-none" />
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="05 — Education" title="Academic background" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 mb-6"
        >
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-sky-400 mb-2">
            B.Sc. Software Engineering &amp; Information Systems
          </p>
          <h3 className="font-display text-xl font-semibold text-white mb-1">
            Faculty of Computer Science and Engineering (FINKI), UKIM
          </h3>
          <p className="text-sm text-zinc-500 mb-5">Skopje, North Macedonia</p>

          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
            In-progress coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {inProgress.map((c) => (
              <span
                key={c}
                className="rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Certification", value: "AWS Certified AI Practitioner" },
            { label: "Languages", value: "Macedonian (Native) · English (C2) · German (A2)" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1.5">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-zinc-100">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
