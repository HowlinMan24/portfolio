"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects, type Category } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const CATEGORIES: Array<Category | "All"> = [
  "All", "Web", "AI", "ML", "Data", "OS/Systems", "Other",
];

const chipActive =
  "bg-indigo-500 border-indigo-500 text-white shadow-sm shadow-indigo-500/30";
const chipInactive =
  "border-zinc-700 text-zinc-400 hover:border-indigo-500/50 hover:text-indigo-400 bg-zinc-900/50";

const sorted = [...projects].sort(
  (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
);

export default function Projects() {
  const [active, setActive] = useState<Set<Category>>(new Set());

  const filtered = useMemo(() => {
    if (active.size === 0) return sorted;
    return sorted.filter((p) => active.has(p.category));
  }, [active]);

  const toggle = (cat: Category | "All") => {
    if (cat === "All") { setActive(new Set()); return; }
    setActive((prev) => {
      const next = new Set(prev);
      next.has(cat as Category) ? next.delete(cat as Category) : next.add(cat as Category);
      return next;
    });
  };

  return (
    <section
      id="projects"
      className="py-28 px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.04) 30%, transparent 100%)",
      }}
    >
      <div className="absolute inset-0 border-y border-zinc-800/50 pointer-events-none" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="03 — Projects" title="Things I've built" />

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-4"
          role="group"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((cat) => {
            const isOn = cat === "All" ? active.size === 0 : active.has(cat as Category);
            return (
              <button
                key={cat}
                onClick={() => toggle(cat)}
                aria-pressed={isOn}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${isOn ? chipActive : chipInactive}`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        <p className="text-xs text-zinc-600 mb-8">
          Showing {filtered.length} of {sorted.length} projects
        </p>

        <LayoutGroup>
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full flex flex-col items-center justify-center py-24 text-zinc-600"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10 mb-3 opacity-40">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                  </svg>
                  <p className="text-sm">No projects match this filter.</p>
                </motion.div>
              ) : (
                filtered.map((project) => (
                  <motion.div
                    key={project.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.22 }}
                    className="flex flex-col"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
