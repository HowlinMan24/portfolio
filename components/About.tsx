"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Marquee from "./Marquee";

const paras = [
  "Full-stack and AI engineer with 4+ years of production experience across banking, SaaS, ERP integration, CMS and AI — shipping a banking platform used by multiple client banks and on-prem AI tooling for an SAP environment, alongside freelance web development, volunteer disaster-relief tooling and a few products of my own.",
  "At Vista Point I build and maintain a multi-tenant banking platform with Angular frontends, NestJS and Node.js services, and MySQL, MongoDB and Redis behind them, covering KYC workflows, wire transfers, webhooks and OAuth 2.0 security. At Xient GmbH I connected an on-premise SAP system to a local LLM, built Copilot Studio agents for purchasing and finance staff, and shipped a Teams dashboard, a documentation export tool and a RAG assistant. I also founded DAWN, a bilingual teaching platform with its own CMS (Go, Angular, PostgreSQL), and I'm building Close, a financial close engine, and TempChain, cold-chain monitoring on SAP.",
  "Comfortable with microservices, multi-tenant SaaS and event-driven design. Strongest in Angular, Node.js, TypeScript, Go and Python (FastAPI), on AWS with Terraform. Drawn to products where careful data handling matters: banking, ERP and AI that keeps company data private.",
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
