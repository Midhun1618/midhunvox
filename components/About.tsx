import Reveal from "./Reveal";
import { COPY } from "@/content/copy";
import { SITE } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="px-5 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[minmax(0,360px)_1fr] md:gap-20">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SITE.portrait} alt={SITE.portraitAlt} width={800} height={1000} loading="lazy" decoding="async" className="aspect-[4/5] w-full bg-wash object-cover" />
          <p className="mt-3 font-mono text-xs text-mute">{SITE.location}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl leading-none tracking-tight md:text-7xl">Maker first, then everything else.</h2>
          <div className="mt-10 max-w-xl space-y-5 font-display text-xl leading-relaxed text-ink/85">
            {COPY.about.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}
          </div>
          <p className="mt-8 max-w-xl border-t border-line pt-4 text-sm text-mute"><span className="text-ink">Languages</span> {COPY.languages}</p>
        </Reveal>
      </div>
    </section>
  );
}
