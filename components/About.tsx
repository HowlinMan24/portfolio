"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute inset-0 border-b border-zinc-800/50 pointer-events-none" />
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="01 — About" title="Who I am" />
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-zinc-400">
          {[
            "I'm a full-stack engineer and aspiring data scientist based in North Macedonia, building secure web apps and end-to-end ML pipelines professionally since 2023.",
            <span key="vp">
              At <span className="text-zinc-100 font-semibold">Vista Point</span> I work on a banking &amp; e-commerce platform — Angular frontends, NestJS APIs, MySQL, and Redis — handling KYC onboarding, wire transfers, and FX trading flows. Concurrently, at{" "}
              <span className="text-zinc-100 font-semibold">Xient GmbH</span> I build predictive models and PySpark ETL pipelines in the SAP × Hypatos ecosystem.
            </span>,
            "I'm especially drawn to financial systems, fraud detection, and wherever data and security intersect. Outside work I tutor students in web development and data programming, and contribute to open-source pipelines like the nf-core Bioinformatics hackathon.",
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="flex flex-wrap gap-3 pt-3"
          >
            {[
              "AWS Certified AI Practitioner",
              "Macedonian — Native",
              "English — C2",
              "German — A2",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-3.5 py-1 text-xs font-medium text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
