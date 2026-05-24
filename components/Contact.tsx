"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const socials = [
  { href: "https://github.com/HowlinMan24", label: "GitHub" },
  { href: "https://linkedin.com/in/hristijan-mijalkov", label: "LinkedIn" },
  { href: "/CV_HM.pdf", label: "CV.pdf", download: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(99,102,241,0.14) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-6"
        >
          06 — Contact
        </motion.p>

        {/* Giant CTA text */}
        <div className="mb-14">
          {["Let's build", "something great"].map((line, i) => (
            <span key={i} className="line-clip block">
              <motion.span
                className="inline-block font-display font-bold text-white"
                style={{ fontSize: "clamp(40px, 8vw, 120px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}
                initial={{ y: "110%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <MagneticButton>
            <a
              href="mailto:hristijanmijalkov2@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-full bg-indigo-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-400 hover:shadow-indigo-500/50 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
              Say hello
            </a>
          </MagneticButton>

          {socials.map((s) => (
            <MagneticButton key={s.label}>
              <a
                href={s.href}
                target={s.download ? undefined : "_blank"}
                rel="noopener noreferrer"
                download={s.download}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-4 text-sm font-semibold text-zinc-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-300"
              >
                {s.label}
              </a>
            </MagneticButton>
          ))}
        </motion.div>

        {/* Footer line */}
        <div className="border-t border-zinc-800/60 pt-8 flex flex-col sm:flex-row justify-between gap-2 text-xs text-zinc-600">
          <span>hristijanmijalkov2@gmail.com</span>
          <span>© {new Date().getFullYear()} Hristijan Mijalkov</span>
        </div>
      </div>
    </section>
  );
}
