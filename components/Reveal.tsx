"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(ref.current, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 90%", once: true } });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}
