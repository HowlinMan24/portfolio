"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Full-bleed background treatment */}
      <div className="absolute inset-0 bg-zinc-900/40" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.1) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 pt-28 pb-20">

        {/* Top label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 mb-12"
        >
          Contact
        </motion.p>

        {/* Giant headline */}
        <div className="mb-16">
          {["Let's build", "something great"].map((line, i) => (
            <span key={i} className="line-clip block">
              <motion.span
                className="inline-block font-display font-bold text-white"
                style={{ fontSize: "clamp(44px, 9vw, 130px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </div>

        {/* Big email link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12"
        >
          <a
            href="mailto:hristijanmijalkov2@gmail.com"
            className="group inline-flex items-center gap-4 text-zinc-400 hover:text-sky-300 transition-colors duration-300"
          >
            <span className="w-10 h-px bg-zinc-600 group-hover:bg-sky-500 group-hover:w-16 transition-all duration-300" />
            <span className="text-lg sm:text-2xl font-medium tracking-tight">
              hristijanmijalkov2@gmail.com
            </span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap gap-3 mb-20"
        >
          <MagneticButton>
            <a
              href="mailto:hristijanmijalkov2@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 hover:shadow-sky-500/40 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden>
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" />
              </svg>
              Say hello
            </a>
          </MagneticButton>
          {[
            { href: "https://linkedin.com/in/hristijan-mijalkov", label: "LinkedIn" },
            { href: "https://github.com/HowlinMan24", label: "GitHub" },
            { href: "/CV_HM.pdf", label: "CV.pdf", download: true },
          ].map((s) => (
            <MagneticButton key={s.label}>
              <a
                href={s.href}
                target={s.download ? undefined : "_blank"}
                rel="noopener noreferrer"
                download={s.download}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3.5 text-sm font-semibold text-zinc-300 hover:border-sky-500/50 hover:text-sky-300 hover:bg-sky-500/5 transition-all duration-300"
              >
                {s.label}
              </a>
            </MagneticButton>
          ))}
        </motion.div>

        {/* Footer */}
        <div className="border-t border-zinc-800/60 pt-8 flex flex-col sm:flex-row justify-between gap-2 text-xs text-zinc-600">
          <span>hristijanmijalkov2@gmail.com</span>
          <span>© {new Date().getFullYear()} Hristijan Mijalkov</span>
        </div>
      </div>
    </section>
  );
}
