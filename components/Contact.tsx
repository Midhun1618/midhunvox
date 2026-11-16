"use client";
import Magnetic from "./Magnetic";
import { COPY } from "@/content/copy";
import { CONTACT, LINKS } from "@/content/site";

const socials = [
  { label: "YouTube", href: LINKS.youtube },
  { label: "Instagram", href: LINKS.instagram },
  { label: "Behance", href: LINKS.behance },
  { label: "GitHub", href: LINKS.github },
  { label: "LinkedIn", href: LINKS.linkedin },
].filter((s) => s.href);

export default function Contact() {
  const ready = Boolean(CONTACT.user && CONTACT.domain);
  // Address is assembled on click so it never appears in page HTML.
  const open = () => { window.location.href = `mailto:${CONTACT.user}@${CONTACT.domain}?subject=${encodeURIComponent("Hello midhunvox")}`; };
  return (
    <section id="contact" className="px-5 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-[14vw] font-medium leading-[0.85] tracking-[-0.04em] md:text-[10vw]">Let&apos;s make something.</h2>
        <div className="mt-12 flex flex-col items-start gap-4">
          <Magnetic>
            <button onClick={open} disabled={!ready} className="rounded-full bg-vox px-8 py-5 text-lg font-medium text-white transition-colors enabled:hover:bg-ink disabled:cursor-not-allowed disabled:opacity-50">{COPY.cta}</button>
          </Magnetic>
          <p className="text-mute">{ready ? COPY.ctaNote : `${COPY.ctaNote} The contact form and email go live soon.`}</p>
        </div>
        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-lg">
          {socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="me noopener noreferrer" className="underline-offset-4 hover:text-vox hover:underline">{s.label}</a></li>)}
        </ul>
        <p className="mt-10 font-mono text-xs text-mute">midhunvox, Midhun KP. Press v, o, x for a surprise.</p>
      </div>
    </section>
  );
}
