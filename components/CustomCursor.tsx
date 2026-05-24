"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [hovering, setHovering] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const dotX = useSpring(rawX, { stiffness: 900, damping: 50, mass: 0.1 });
  const dotY = useSpring(rawY, { stiffness: 900, damping: 50, mass: 0.1 });
  const ringX = useSpring(rawX, { stiffness: 180, damping: 22, mass: 0.5 });
  const ringY = useSpring(rawY, { stiffness: 180, damping: 22, mass: 0.5 });

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(touch);
    if (touch) return;

    document.body.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => { rawX.set(e.clientX); rawY.set(e.clientY); };
    const onOver = (e: MouseEvent) => {
      setHovering(!!(e.target as Element).closest("a, button, [data-cursor]"));
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
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-sky-400/50"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovering ? 52 : 34, height: hovering ? 52 : 34, borderColor: hovering ? "rgba(56,189,248,0.9)" : "rgba(56,189,248,0.4)" }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-sky-400"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovering ? 5 : 7, height: hovering ? 5 : 7, opacity: hovering ? 0.4 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
