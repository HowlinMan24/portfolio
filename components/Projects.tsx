"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { projects, type Category } from "@/data/projects";
import SectionHeader from "./SectionHeader";

const CATEGORIES: Array<Category | "All"> = ["All", "Web", "AI", "ML", "Data", "OS/Systems", "Other"];

const sorted = [...projects].sort(
  (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
);

const categoryGradients: Record<string, string> = {
  Web:          "from-blue-100 to-sky-100",
  AI:           "from-violet-100 to-purple-100",
  ML:           "from-emerald-100 to-teal-100",
  Data:         "from-amber-100 to-orange-100",
  "OS/Systems": "from-rose-100 to-red-100",
  Other:        "from-zinc-100 to-zinc-200",
};

const categoryDot: Record<string, string> = {
  Web: "bg-blue-400", AI: "bg-violet-400", ML: "bg-emerald-400",
  Data: "bg-amber-400", "OS/Systems": "bg-rose-400", Other: "bg-zinc-400",
};

const categoryText: Record<string, string> = {
  Web: "text-blue-600", AI: "text-violet-600", ML: "text-emerald-600",
  Data: "text-amber-600", "OS/Systems": "text-rose-600", Other: "text-zinc-500",
};

interface ProjectRowProps {
  project: (typeof sorted)[0];
  index: number;
  onHover: (p: (typeof sorted)[0] | null) => void;
  onMove: (e: React.MouseEvent) => void;
}

function ProjectRow({ project, index, onHover, onMove }: ProjectRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
    >
      <a
        href={project.repoUrl || project.demoUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="true"
        className="group flex items-center justify-between py-6 border-t border-zinc-200/80 hover:border-zinc-300 transition-colors duration-300"
        onMouseEnter={() => { setHovered(true); onHover(project); }}
        onMouseLeave={() => { setHovered(false); onHover(null); }}
        onMouseMove={onMove}
      >
        {/* Left: number + name */}
        <div className="flex items-center gap-6 flex-1 min-w-0">
          <span className="text-xs text-zinc-300 font-mono tabular-nums shrink-0 w-6">
            {String(index + 1).padStart(2, "0")}
          </span>
          <motion.span
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-none truncate"
            animate={{ color: hovered ? "#0ea5e9" : "#18181b" }}
            transition={{ duration: 0.25 }}
          >
            {project.name}
          </motion.span>
        </div>

        {/* Right: category + arrow */}
        <div className="flex items-center gap-4 shrink-0 ml-6">
          <span className="hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-400">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${categoryDot[project.category]}`} />
            {project.category}
          </span>
          <motion.span
            className="text-zinc-400"
            animate={{ x: hovered ? 4 : 0, color: hovered ? "#0ea5e9" : "#a1a1aa" }}
            transition={{ duration: 0.2 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </motion.span>
        </div>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Set<Category>>(new Set());
  const [hoveredProject, setHoveredProject] = useState<(typeof sorted)[0] | null>(null);

  const curX = useMotionValue(-400);
  const curY = useMotionValue(-400);
  const thumbX = useSpring(curX, { stiffness: 280, damping: 28 });
  const thumbY = useSpring(curY, { stiffness: 280, damping: 28 });

  const handleMove = (e: React.MouseEvent) => {
    curX.set(e.clientX + 28);
    curY.set(e.clientY - 100);
  };

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
    <section id="projects" className="py-28 px-6 md:px-12 relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="03 — Projects" title="Things I've built" />

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
          role="group"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((cat) => {
            const on = cat === "All" ? active.size === 0 : active.has(cat as Category);
            return (
              <button
                key={cat}
                onClick={() => toggle(cat)}
                aria-pressed={on}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  on
                    ? "bg-sky-500 border-sky-500 text-white"
                    : "border-zinc-300 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700 bg-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
          <span className="ml-auto self-center text-xs text-zinc-400">
            {filtered.length} / {sorted.length}
          </span>
        </motion.div>

        {/* Project rows */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center text-zinc-400 text-sm"
            >
              No projects match this filter.
            </motion.p>
          ) : (
            filtered.map((project, i) => (
              <ProjectRow
                key={project.name}
                project={project}
                index={i}
                onHover={setHoveredProject}
                onMove={handleMove}
              />
            ))
          )}
        </AnimatePresence>

        {/* Last border */}
        <div className="border-t border-zinc-200/80" />
      </div>

      {/* Cursor-following thumbnail */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            key={hoveredProject.name}
            className="fixed pointer-events-none z-40 w-60 rounded-xl overflow-hidden shadow-xl shadow-zinc-200/60 border border-zinc-200"
            style={{ left: 0, top: 0, x: thumbX, y: thumbY }}
            initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.85, rotate: 2 }}
            transition={{ duration: 0.2 }}
          >
            {/* Gradient header */}
            <div className={`h-24 bg-gradient-to-br ${categoryGradients[hoveredProject.category]} flex items-end p-3`}>
              <span className={`text-xs font-semibold ${categoryText[hoveredProject.category]}`}>
                {hoveredProject.category}
              </span>
            </div>
            {/* Info body */}
            <div className="bg-white p-3">
              <p className="text-xs font-semibold text-zinc-900 mb-2 truncate">
                {hoveredProject.name}
              </p>
              <div className="flex flex-wrap gap-1">
                {hoveredProject.tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
