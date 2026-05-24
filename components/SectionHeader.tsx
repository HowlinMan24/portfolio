"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
}

export default function SectionHeader({ eyebrow, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-indigo-500 to-transparent" />
    </motion.div>
  );
}
