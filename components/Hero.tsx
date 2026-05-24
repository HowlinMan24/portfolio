"use client";

import { motion, type Transition } from "framer-motion";
import MagneticButton from "./MagneticButton";

const EASE = [0.16, 1, 0.3, 1] as const;

function LineReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <span className="line-clip">
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, delay, ease: EASE } as Transition}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Subtle grain */}
      <div aria-hidden className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Very faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Indigo glow — bottom left */}
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)" }}
      />

      {/* Top-right small label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute top-8 right-8 text-right"
      >
        <p className="text-xs text-zinc-600 uppercase tracking-widest">Based in</p>
        <p className="text-xs text-zinc-400 font-medium">North Macedonia</p>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Giant name — line-by-line reveal */}
        <h1 className="font-display font-bold leading-[0.88] tracking-tight mb-10">
          <div>
            <LineReveal delay={0} className="text-white" >
              <span style={{ fontSize: "clamp(72px, 12vw, 180px)" }}>HRISTIJAN</span>
            </LineReveal>
          </div>
          <div>
            <LineReveal delay={0.1} className="text-transparent" >
              <span
                style={{
                  fontSize: "clamp(72px, 12vw, 180px)",
                  WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                }}
              >
                MIJALKOV
              </span>
            </LineReveal>
          </div>
        </h1>

        {/* Bottom row: role + CTAs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <LineReveal delay={0.25} className="block text-lg sm:text-xl text-zinc-400 font-medium">
              Full-stack Engineer
            </LineReveal>
            <LineReveal delay={0.32} className="block text-lg sm:text-xl text-zinc-400 font-medium">
              &amp; Aspiring Data Scientist
            </LineReveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: EASE } as Transition}
            className="flex flex-wrap gap-3"
          >
            <MagneticButton>
              <a
                href="/CV_HM.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400 hover:shadow-indigo-500/40 transition-all duration-300"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden>
                  <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                  <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                </svg>
                Download CV
              </a>
            </MagneticButton>

            {[
              { href: "https://github.com/HowlinMan24", label: "GitHub" },
              { href: "https://linkedin.com/in/hristijan-mijalkov", label: "LinkedIn" },
              { href: "mailto:hristijanmijalkov2@gmail.com", label: "Email" },
            ].map((l) => (
              <MagneticButton key={l.href}>
                <a
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-sm font-semibold text-zinc-300 hover:border-indigo-500/60 hover:text-indigo-300 transition-all duration-300"
                >
                  {l.label}
                </a>
              </MagneticButton>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600 hover:text-indigo-400 transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
            <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  );
}
