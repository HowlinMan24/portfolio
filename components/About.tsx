"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Marquee from "./Marquee";

const paras = [
  "Full-stack engineer and data scientist with 4+ years of production experience in fintech, e-commerce, and ML — shipping a live banking platform, enterprise forecasting models, and distributed data pipelines for clients across Europe.",
  "At Vista Point I engineer a multi-tenant banking and e-commerce SaaS platform with microservices architecture: Angular frontends, NestJS REST APIs, and MySQL/Redis backends handling KYC onboarding, cross-border wire transfers, and FX trading under compliance constraints. At Xient GmbH I build classification, regression, and time-series forecasting models alongside PySpark ETL pipelines (Lambda architecture: batch + streaming) within the SAP × Hypatos document-intelligence ecosystem, turning multi-source enterprise data into decision-ready forecasts.",
  "Experienced designing Microservices, Multi-Tenant SaaS, Event-Driven, and Lambda architectures. Proven across Angular, Node.js, Spring Boot, FastAPI, Flask, Python, PySpark, AWS, Java, SQL, and NoSQL. Drawn to fintech, fraud detection, and the intersection of data engineering and applied security.",
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
                className="text-[1.05rem] leading-relaxed text-zinc-500 dark:text-zinc-400"
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
              { label: "English", value: "C1 · German A2" },
              { label: "Based", value: "North Macedonia" },
            ].map((item) => (
              <div key={item.label} className="border-t border-zinc-200 dark:border-zinc-800 pt-3">
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-0.5">{item.label}</p>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
