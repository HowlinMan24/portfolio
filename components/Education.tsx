"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight mb-10 text-zinc-900 dark:text-zinc-50"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-1">
              B.Sc. Software Engineering &amp; Information Systems
            </p>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Faculty of Computer Science and Engineering (FINKI), UKIM
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
              Skopje, North Macedonia
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
              In-progress coursework (no grade yet)
            </p>
            <div className="flex flex-wrap gap-2">
              {["Data Mining", "Big Data Mining", "Information Security", "CI/CD", "Bioinformatics"].map(
                (c) => (
                  <span
                    key={c}
                    className="rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300"
                  >
                    {c}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-3 text-sm">
              <p className="text-xs text-zinc-500 mb-0.5">Certification</p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">AWS Certified AI Practitioner</p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-3 text-sm">
              <p className="text-xs text-zinc-500 mb-0.5">Languages</p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                Macedonian (Native) · English (C2) · German (A2)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
