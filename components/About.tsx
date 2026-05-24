"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Marquee from "./Marquee";

const paras = [
  "Full-stack engineer and data scientist based in North Macedonia, delivering production-grade web applications and end-to-end machine learning pipelines since 2023.",
  "At Vista Point I lead full-stack development on a regulated banking and e-commerce platform — engineering Angular frontends, NestJS REST APIs, and MySQL/Redis backends that handle KYC onboarding, cross-border wire transfers, and FX trading. At Xient GmbH I design predictive models and large-scale PySpark ETL pipelines within the SAP × Hypatos document-intelligence ecosystem.",
  "Particularly drawn to fintech, fraud detection, and the intersection of data engineering and applied security.",
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="px-6 md:px-12 mx-auto max-w-6xl mb-16">
        <SectionHeader eyebrow="01 — About" title="Who I am" />
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div className="space-y-6 max-w-2xl">
            {paras.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-[1.05rem] leading-relaxed text-zinc-500"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3 min-w-[200px]"
          >
            {[
              { label: "Cert.", value: "AWS AI Practitioner" },
              { label: "English", value: "C2 · German A2" },
              { label: "Based", value: "North Macedonia" },
            ].map((item) => (
              <div key={item.label} className="border-t border-zinc-200 pt-3">
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-0.5">{item.label}</p>
                <p className="text-sm font-medium text-zinc-700">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
