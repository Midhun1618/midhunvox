import Reveal from "./Reveal";
import { SKILLS } from "@/content/copy";

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal><h2 className="font-display text-5xl leading-none tracking-tight md:text-7xl">Five tracks, one timeline</h2></Reveal>
        <div className="mt-14 border-t border-ink">
          {SKILLS.map((s) => (
            <Reveal key={s.track} className="grid gap-3 border-b border-line py-6 md:grid-cols-[200px_1fr] md:gap-10">
              <h3 className={`font-display text-3xl ${s.track === "Games" || s.track === "Art" ? "text-teal" : "text-vox"}`}>{s.track}</h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-1 text-lg">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
