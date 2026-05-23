"use client";

import { motion, type Transition } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" } as Transition,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Subtle gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <motion.p
          {...fadeUp(0)}
          className="text-sm font-semibold uppercase tracking-widest text-indigo-500"
        >
          Available for new opportunities
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Hristijan
          <br />
          <span className="text-indigo-500">Mijalkov</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-xl sm:text-2xl font-medium text-zinc-500 dark:text-zinc-400"
        >
          Full-stack Engineer &amp; Aspiring Data Scientist
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          Building secure web apps and end-to-end ML pipelines. Comfortable
          across Angular, NestJS, Python data tooling, and cloud infrastructure.
          Especially interested in financial systems, fraud detection, and
          data-driven decisions.
        </motion.p>

        {/* CTA links — always visible without scrolling */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <a
            href="/CV_HM.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-600 active:scale-95 transition-all"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden>
              <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
              <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
            </svg>
            Download CV
          </a>

          <a
            href="https://github.com/HowlinMan24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 active:scale-95 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/hristijan-mijalkov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 active:scale-95 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="mailto:hristijanmijalkov2@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 active:scale-95 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 7 10-7" />
            </svg>
            Email
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.55)} className="pt-8">
          <a href="#about" aria-label="Scroll to about section">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-zinc-400 animate-bounce">
              <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
