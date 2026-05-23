"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight mb-12 text-zinc-900 dark:text-zinc-50"
        >
          Experience
        </motion.h2>

        <ol className="relative border-l border-zinc-200 dark:border-zinc-800 space-y-12 pl-8">
          {experience.map((job, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[2.125rem] flex h-4 w-4 items-center justify-center rounded-full border-2 border-indigo-500 bg-white dark:bg-zinc-950 ring-4 ring-white dark:ring-zinc-950" />

              <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {job.role}
                </h3>
                <span className="text-indigo-500 font-medium text-sm">{job.company}</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 mb-3">
                {job.period} · {job.location}
              </p>
              <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
