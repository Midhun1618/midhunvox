import Reveal from "./Reveal";
import { EXPERIENCE } from "@/content/copy";

export default function Experience() {
  return (
    <section id="experience" className="bg-wash px-5 py-24 md:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal><h2 className="font-display text-5xl leading-none tracking-tight md:text-7xl">Experience and learning</h2></Reveal>
        <ol className="relative mt-14 border-l border-ink pl-8">
          {EXPERIENCE.map((e) => (
            <li key={e.what + e.where} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-vox" aria-hidden="true" />
              <p className="font-mono text-xs text-mute">{e.when}</p>
              <h3 className="font-display text-2xl">{e.what}</h3>
              <p className="text-mute">{e.where}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
