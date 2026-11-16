"use client";
import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";

export default function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const ok = () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <span
      ref={ref}
      className="inline-block"
      onMouseMove={(e) => {
        if (!ok() || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        gsap.to(ref.current, { x: (e.clientX - (r.left + r.width / 2)) * strength, y: (e.clientY - (r.top + r.height / 2)) * strength, duration: 0.3 });
      }}
      onMouseLeave={() => ref.current && gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.4)" })}
    >
      {children}
    </span>
  );
}
