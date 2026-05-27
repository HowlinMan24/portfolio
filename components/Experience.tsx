"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-12 relative">
      <div className="absolute inset-0 border-y border-zinc-100 dark:border-zinc-900 pointer-events-none" />
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Experience" title="Where I've worked" />

        <div className="space-y-5">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 p-6 hover:border-sky-300/60 dark:hover:border-sky-500/25 hover:shadow-md hover:shadow-sky-500/5 transition-all duration-300 overflow-hidden"
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-sky-500/80 via-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white">{job.company}</h3>
                    <span className="rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 px-2.5 py-0.5 text-xs font-semibold text-sky-600 dark:text-sky-300">
                      {job.role}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">{job.location}</p>
                </div>
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-full px-3 py-1 shrink-0">
                  {job.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-5">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-sky-500/70 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                {job.tech.map((t) => (
                  <span key={t} className="rounded-md bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-zinc-800 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
