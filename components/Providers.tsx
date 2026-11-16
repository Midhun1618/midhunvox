"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function Providers({ children }: { children: ReactNode }) {
  const ring = useRef<HTMLDivElement>(null);

  // Smooth scroll (Lenis) wired to ScrollTrigger. Skipped for reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);

  // Custom cursor: fine pointers only; it grows over links, buttons and [data-cursor].
  useEffect(() => {
    const el = ring.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.display = "block";
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      el.dataset.hot = (e.target as HTMLElement)?.closest?.("a,button,[data-cursor]") ? "1" : "0";
    };
    const loop = () => { x += (tx - x) * 0.2; y += (ty - y) * 0.2; el.style.transform = `translate(${x}px,${y}px)`; raf = requestAnimationFrame(loop); };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  // Easter egg: type "vox" for a waveform burst.
  useEffect(() => {
    let buf = "";
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.matches?.("input,textarea")) return;
      buf = (buf + e.key.toLowerCase()).slice(-3);
      if (buf !== "vox") return;
      const wrap = document.createElement("div");
      wrap.setAttribute("aria-hidden", "true");
      wrap.style.cssText = "position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;align-items:center;justify-content:center;gap:4px";
      for (let i = 0; i < 48; i++) {
        const b = document.createElement("span");
        const h = 20 + Math.abs(Math.sin(i * 0.7)) * 60 + Math.random() * 20;
        b.style.cssText = `width:6px;height:${h}vh;background:#e8502e;border-radius:3px;transform-origin:center;animation:burst .9s ${i * 12}ms ease-out both`;
        wrap.appendChild(b);
      }
      document.body.appendChild(wrap);
      setTimeout(() => wrap.remove(), 1800);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (<>{children}<div ref={ring} className="cursor-ring hidden" aria-hidden="true" /></>);
}
