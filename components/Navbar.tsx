"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const doc = document.documentElement;
      const scrolled = doc.scrollTop || document.body.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);

      for (const l of [...links].reverse()) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(l.href);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed top-0 left-0 z-[60] h-0.5 bg-sky-500 transition-all duration-75"
        style={{ width: `${progress}%` }}
      />

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-sm shadow-zinc-100"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4" aria-label="Main navigation">
          <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-3 py-1.5 rounded-md transition-colors ${
                    active === l.href
                      ? "text-sky-500"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {active === l.href && (
                    <span className="absolute inset-0 rounded-md bg-sky-500/8" />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                {open ? (
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-zinc-200 px-6 pb-5">
            <ul className="flex flex-col gap-1 text-sm font-medium">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded-md transition-colors ${
                      active === l.href
                        ? "text-sky-500 bg-sky-500/8"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
