"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-zinc-50"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-zinc dark:prose-invert text-lg leading-relaxed space-y-4 text-zinc-600 dark:text-zinc-400"
        >
          <p>
            I&apos;m a full-stack engineer and aspiring data scientist currently based
            in North Macedonia, building secure web apps and end-to-end ML
            pipelines professionally since 2023.
          </p>
          <p>
            At <span className="font-semibold text-zinc-800 dark:text-zinc-200">Vista Point</span> I work on a banking &amp; e-commerce platform — Angular
            frontends, NestJS APIs, MySQL, and Redis — handling KYC onboarding,
            wire transfers, and FX trading flows. Concurrently, at{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">Xient GmbH</span> I build
            predictive models and PySpark ETL pipelines in the SAP × Hypatos
            ecosystem.
          </p>
          <p>
            I&apos;m especially drawn to financial systems, fraud detection, and
            anywhere data and security intersect. Outside work I tutor students
            in web development and data programming, and contribute to open-source
            pipelines like the nf-core Bioinformatics hackathon.
          </p>
          <p>
            AWS Certified AI Practitioner · Macedonian (native) · English C2 · German A2
          </p>
        </motion.div>
      </div>
    </section>
  );
}
