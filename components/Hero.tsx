"use client";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";
import { COPY } from "@/content/copy";
import { ROLES, SITE } from "@/content/site";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-16 pt-28">
      {SITE.heroReel && (
        <video className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 grayscale" src={SITE.heroReel} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
      )}
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-4 h-8 overflow-hidden font-mono text-sm text-mute" aria-live="off">
          <span key={i} className="role-in inline-block text-vox">{ROLES[i]}</span>
          <span className="sr-only">Video Editor, Designer, Developer, Game Designer and Artist</span>
        </p>
        <h1 className="font-display text-[19vw] font-medium leading-[0.82] tracking-[-0.045em] md:text-[15vw]">
          midhunvox
          <span className="sr-only"> - Midhun KP, video editor, designer, developer and game designer</span>
        </h1>
        <div className="mt-10 grid items-end gap-8 md:grid-cols-[1.4fr_1fr]">
          <p className="max-w-xl font-display text-3xl leading-tight md:text-4xl">{COPY.heroLine}</p>
          <div className="flex flex-col items-start gap-3">
            <Magnetic>
              <a href="#contact" className="inline-block rounded-full bg-vox px-7 py-4 font-medium text-white transition-colors hover:bg-ink">{COPY.cta}</a>
            </Magnetic>
            <p className="max-w-xs text-sm text-mute">{COPY.ctaNote}</p>
          </div>
        </div>
      </div>
      <div className="ruler absolute inset-x-0 bottom-0 h-4" aria-hidden="true" />
    </section>
  );
}
