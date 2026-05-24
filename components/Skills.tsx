"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 border-b border-zinc-800/50 pointer-events-none" />
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="04 — Skills" title="What I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-zinc-700 transition-colors duration-200"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-400 mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-700/60 bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-300 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-default"
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
