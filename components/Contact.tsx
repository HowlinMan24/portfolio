"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-zinc-50 dark:bg-zinc-900/30 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-20">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">

          {/* Left: heading + email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 mb-4">
              Contact
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-6">
              Let's work together.
            </h2>
            <a
              href="mailto:hristijanmijalkov2@gmail.com"
              className="group inline-flex items-center gap-4 text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors duration-300"
            >
              <span className="w-10 h-px bg-zinc-300 group-hover:bg-sky-400 group-hover:w-16 transition-all duration-300" />
              <span className="text-base sm:text-lg font-medium tracking-tight">
                hristijanmijalkov2@gmail.com
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </motion.div>

          {/* Right: CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            <MagneticButton>
              <a
                href="mailto:hristijanmijalkov2@gmail.com"
                className="inline-flex items-center gap-2.5 rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-sky-500/20 hover:bg-sky-400 transition-all duration-300"
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
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3.5 text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:border-sky-400/60 hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-500/10 transition-all duration-300"
                >
                  {s.label}
                </a>
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between gap-2 text-xs text-zinc-400 dark:text-zinc-600">
          <span>hristijanmijalkov2@gmail.com</span>
          <span>© {new Date().getFullYear()} Hristijan Mijalkov</span>
        </div>
      </div>
    </section>
  );
}
