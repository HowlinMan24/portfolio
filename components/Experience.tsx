"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)",
      }}
    >
      <div className="absolute inset-0 border-y border-zinc-800/50 pointer-events-none" />
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="02 — Experience" title="Where I've worked" />

        {/* Timeline */}
        <ol className="relative space-y-12">
          {/* Vertical gradient rail */}
          <div
            aria-hidden
            className="absolute left-3 top-2 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #6366f1 0%, rgba(99,102,241,0.2) 80%, transparent 100%)",
            }}
          />

          {experience.map((job, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="relative pl-10 group"
            >
              {/* Dot — w-6 h-6 centred on the rail at left-3 (12px).
                  left-0 = 0px from li. dot width = 24px, so centre = 12px.
                  Rail is at left-3 = 12px ✓ */}
              <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center">
                <span className="h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 group-hover:ring-indigo-500/40 group-hover:bg-indigo-400 transition-all duration-300" />
              </span>

              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-5 hover:border-indigo-500/30 hover:bg-zinc-900 transition-all duration-300">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-display text-base font-semibold text-white">
                    {job.role}
                  </h3>
                  <span className="text-sm font-medium text-indigo-400">
                    {job.company}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mb-4">
                  {job.period} · {job.location}
                </p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
