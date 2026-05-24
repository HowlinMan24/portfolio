"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12 relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="04 — Skills" title="What I work with" />

        <div className="divide-y divide-zinc-800/60">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col sm:flex-row sm:items-start gap-6 py-6 group"
            >
              <p className="w-32 shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 pt-1">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2 flex-1">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-sky-500/40 hover:text-sky-300 hover:bg-sky-500/5 transition-all duration-200"
                  >
                    {skill}
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
