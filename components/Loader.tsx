"use client";
import { useEffect, useState } from "react";

const FRAMES = 72; // 3 seconds at 24fps, counted in ~1.6s
const fmt = (f: number) => `00:00:${String(Math.floor(f / 24)).padStart(2, "0")}:${String(f % 24).padStart(2, "0")}`;

export default function Loader() {
  const [frame, setFrame] = useState(0);
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setPhase("gone"); return; }
    const t0 = performance.now(); let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - t0) / 1600, 1);
      setFrame(Math.round((1 - Math.pow(1 - p, 3)) * FRAMES));
      if (p < 1) raf = requestAnimationFrame(step);
      else { setTimeout(() => setPhase("out"), 350); setTimeout(() => setPhase("gone"), 1100); }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (phase === "gone") return null;
  return (
    <div aria-hidden="true" className={`fixed inset-0 z-[120] flex flex-col items-center justify-center bg-white transition-all duration-700 ${phase === "out" ? "opacity-0 -translate-y-6 pointer-events-none" : ""}`}>
      <p className="font-display text-[15vw] md:text-[9vw] leading-none tracking-tight text-ink" style={{ opacity: frame / FRAMES }}>midhunvox</p>
      <p className="mt-6 font-mono text-sm text-vox tabular-nums">{fmt(frame)}</p>
      <div className="mt-4 h-px w-48 bg-line"><div className="h-px bg-vox" style={{ width: `${(frame / FRAMES) * 100}%` }} /></div>
    </div>
  );
}
