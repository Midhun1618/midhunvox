"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import ScoreRings from "./ScoreRings";
import { PROJECTS, type Track } from "@/content/projects";

const FILTERS: ("All" | Track)[] = ["All", "Edit", "Design", "Code", "Games", "Art"];
const tint = (t: Track) => (t === "Games" || t === "Art" ? "text-teal border-teal" : "text-vox border-vox");

export default function Work() {
  const [f, setF] = useState<"All" | Track>("All");
  const list = PROJECTS.filter((p) => f === "All" || p.track === f);
  return (
    <section id="work" className="bg-wash px-5 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal><h2 className="font-display text-5xl leading-none tracking-tight md:text-7xl">Selected work</h2></Reveal>
        <div role="group" aria-label="Filter by discipline" className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((x) => (
            <button key={x} onClick={() => setF(x)} aria-pressed={f === x} className={`rounded-full border px-4 py-2 text-sm transition-colors ${f === x ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink"}`}>{x}</button>
          ))}
        </div>
        <ul className="mt-10 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p.slug} className="flex flex-col bg-white p-6 transition-colors hover:bg-wash" data-cursor>
              <span className={`w-fit border-l-2 pl-2 font-mono text-xs ${tint(p.track)}`}>{p.track}</span>
              <h3 className="mt-5 font-display text-3xl leading-tight">{p.title}</h3>
              <p className="mt-2 text-ink/80">{p.hook}</p>
              <p className="mt-4 text-sm text-mute">Role: {p.role}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tools">
                {p.tools.map((t) => <li key={t} className="rounded-full bg-wash px-2.5 py-1 text-xs">{t}</li>)}
              </ul>
              <div className="mt-auto flex items-center justify-between pt-6 text-sm">
                <span className="text-mute">{p.status}</span>
                {p.href ? <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-vox underline underline-offset-4">{p.hrefLabel}</a> : <span className="text-mute">Link soon</span>}
              </div>
            </li>
          ))}
        </ul>
        {(f === "All" || f === "Code") && <ScoreRings />}
        <p className="mt-10 text-sm text-mute">Full case studies and the Video, Design, Dev, Games and Art pages are on the way.</p>
      </div>
    </section>
  );
}
