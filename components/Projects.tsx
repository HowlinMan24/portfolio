"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects, type Category } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const CATEGORIES: Array<Category | "All"> = [
  "All", "Web", "AI", "ML", "Data", "OS/Systems", "Other",
];

const sorted = [...projects].sort(
  (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
);

export default function Projects() {
  const [active, setActive] = useState<Set<Category>>(new Set());

  const filtered = useMemo(() => {
    if (active.size === 0) return sorted;
    return sorted.filter((p) => active.has(p.category));
  }, [active]);

  const toggleCategory = (cat: Category | "All") => {
    if (cat === "All") {
      setActive(new Set());
      return;
    }
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50"
        >
          Projects
        </motion.h2>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-3"
          role="group"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((cat) => {
            const isAll = cat === "All";
            const isOn = isAll ? active.size === 0 : active.has(cat as Category);
            return (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                aria-pressed={isOn}
                className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all ${
                  isOn
                    ? "bg-indigo-500 border-indigo-500 text-white shadow-sm"
                    : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Count line */}
        <p className="text-xs text-zinc-400 dark:text-zinc-600 mb-8">
          Showing {filtered.length} of {sorted.length} projects
        </p>

        {/* Grid with layout animation */}
        <LayoutGroup>
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full flex flex-col items-center justify-center py-20 text-zinc-400 dark:text-zinc-600"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10 mb-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                  </svg>
                  <p className="text-sm">No projects match this filter combination.</p>
                </motion.div>
              ) : (
                filtered.map((project) => (
                  <motion.div
                    key={project.name}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
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
