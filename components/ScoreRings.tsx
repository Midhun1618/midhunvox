"use client";
import { useEffect, useRef, useState } from "react";

// RepoScope-style demo. Values are SAMPLE data for the interaction only.
const SAMPLE = [{ k: "Health", v: 82 }, { k: "Risk", v: 24 }, { k: "Consistency", v: 67 }, { k: "Evolution", v: 91 }];
const R = 34, C = 2 * Math.PI * R;

export default function ScoreRings() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [n, setN] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setOn(true), { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const replay = () => { setOn(false); setN((x) => x + 1); requestAnimationFrame(() => requestAnimationFrame(() => setOn(true))); };
  return (
    <div ref={ref} className="mt-16 border-t border-line pt-10">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl">RepoScope scores</h3>
        <button onClick={replay} className="text-sm text-vox underline underline-offset-4">Replay</button>
      </div>
      <p className="mt-1 text-sm text-mute">Interactive demo with sample numbers, not real repository data.</p>
      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4" key={n}>
        {SAMPLE.map((s) => (
          <figure key={s.k} className="flex flex-col items-center" aria-label={`${s.k} sample score ${s.v} out of 100`}>
            <svg viewBox="0 0 80 80" className="h-28 w-28 -rotate-90">
              <circle cx="40" cy="40" r={R} fill="none" stroke="#dcdde2" strokeWidth="6" />
              <circle cx="40" cy="40" r={R} fill="none" stroke="#e8502e" strokeWidth="6" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={on ? C * (1 - s.v / 100) : C} style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.2,.8,.2,1)" }} />
            </svg>
            <figcaption className="mt-2 text-center"><span className="font-mono text-lg tabular-nums">{on ? s.v : 0}</span><span className="block text-sm text-mute">{s.k}</span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
