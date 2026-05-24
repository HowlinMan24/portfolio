"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [hovering, setHovering] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Dot follows immediately
  const dotX = useSpring(rawX, { stiffness: 900, damping: 50, mass: 0.1 });
  const dotY = useSpring(rawY, { stiffness: 900, damping: 50, mass: 0.1 });

  // Ring lags pleasantly behind
  const ringX = useSpring(rawX, { stiffness: 180, damping: 22, mass: 0.5 });
  const ringY = useSpring(rawY, { stiffness: 180, damping: 22, mass: 0.5 });

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    // Detect touch
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(touch);
    if (touch) return;

    document.body.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      setHovering(!!t.closest("a, button, [data-cursor]"));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [rawX, rawY]);

  if (!mounted || isTouch) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-indigo-400/50"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovering ? 56 : 36, height: hovering ? 56 : 36, borderColor: hovering ? "rgba(99,102,241,0.9)" : "rgba(99,102,241,0.5)" }}
        transition={{ duration: 0.2 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-indigo-400"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovering ? 6 : 8, height: hovering ? 6 : 8, opacity: hovering ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
