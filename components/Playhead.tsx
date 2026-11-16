"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/content/site";

const tc = (s: number) => { const f = Math.floor((s % 1) * 24), t = Math.floor(s); return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}:${String(f).padStart(2, "0")}`; };

export default function Playhead() {
  const fill = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("00:00:00");
  const [active, setActive] = useState("");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (fill.current) fill.current.style.transform = `scaleX(${p})`;
      if (head.current) head.current.style.left = `${p * 100}%`;
      setTime(tc(p * 180));
      let cur = "";
      for (const n of NAV) {
        const r = document.getElementById(n.id)?.getBoundingClientRect();
        if (r && r.top <= window.innerHeight * 0.4 && r.bottom > window.innerHeight * 0.4) cur = n.id;
      }
      setActive(cur);
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    update();
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-5">
        <Link href="/" className="font-display text-xl tracking-tight" aria-label="midhunvox home">midhunvox</Link>
        <nav aria-label="Sections" className="hidden gap-6 text-sm md:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`transition-colors hover:text-vox ${active === n.id ? "text-vox" : "text-mute"}`}>{n.label}</a>
          ))}
        </nav>
        <span className="font-mono text-xs tabular-nums text-mute" aria-hidden="true">{time}</span>
      </div>
      <div className="relative h-[3px] bg-line" aria-hidden="true">
        <div ref={fill} className="h-full origin-left bg-vox" style={{ transform: "scaleX(0)" }} />
        <div ref={head} className="absolute -top-[5px] h-[13px] w-[3px] -translate-x-1/2 bg-ink" />
      </div>
    </header>
  );
}
