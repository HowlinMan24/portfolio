"use client";

import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import MagneticButton from "./MagneticButton";

const EASE = [0.16, 1, 0.3, 1] as const;

function LineReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <span className="line-clip">
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: EASE } as Transition}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Subtle grid */}
      <div
        aria-hidden className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Sky glow */}
      <div aria-hidden className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 flex-1 flex flex-col md:flex-row mx-auto w-full max-w-7xl px-6 md:px-12 pt-28 pb-20">

        {/* Left: text */}
        <div className="flex-1 flex flex-col justify-end pb-2">
          <h1 className="font-display font-bold leading-[0.88] tracking-tight mb-8">
            <div>
              <LineReveal delay={0}>
                <span className="text-zinc-900" style={{ fontSize: "clamp(64px, 10vw, 160px)" }}>HRISTIJAN</span>
              </LineReveal>
            </div>
            <div>
              <LineReveal delay={0.1}>
                <span style={{ fontSize: "clamp(64px, 10vw, 160px)", WebkitTextStroke: "1.5px rgba(0,0,0,0.18)", color: "transparent" }}>
                  MIJALKOV
                </span>
              </LineReveal>
            </div>
          </h1>

          <div className="mb-8">
            <LineReveal delay={0.22}>
              <span className="text-lg sm:text-xl text-zinc-500 font-medium block">
                Full-stack Engineer &amp; Data Scientist
              </span>
            </LineReveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: EASE } as Transition}
            className="flex flex-wrap gap-3"
          >
            <MagneticButton>
              <a href="/CV_HM.pdf" download className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition-all duration-300">
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
                  className="inline-flex items-center rounded-full border border-zinc-300 bg-zinc-50 px-5 py-3 text-sm font-semibold text-zinc-600 hover:border-sky-500/50 hover:text-sky-500 hover:bg-sky-50 transition-all duration-300"
                >
                  {l.label}
                </a>
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: EASE } as Transition}
          className="hidden md:flex flex-col justify-end items-end ml-12 shrink-0"
        >
          <div className="relative w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-200">
            <Image
              src="/photo.jpg"
              alt="Hristijan Mijalkov"
              fill
              className="object-cover object-top grayscale-[10%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-3 text-right"
          >
            <p className="text-[10px] uppercase tracking-widest text-zinc-400">Based in</p>
            <p className="text-xs text-zinc-500 font-medium">North Macedonia</p>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
