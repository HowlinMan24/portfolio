"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
}

export default function SectionHeader({ eyebrow, title }: Props) {
  const label = eyebrow.replace(/^\d+\s*[—–-]\s*/, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 mb-3">
        {label}
      </p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-sky-500 to-transparent" />
    </motion.div>
  );
}
