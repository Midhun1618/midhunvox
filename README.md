# midhunvox - portfolio (Phase 1: Home)

Classic white theme (#ffffff paper, #12141b ink, #e8502e accent, teal reserved for Games + Art).
Next.js 14 (App Router) + TypeScript + Tailwind + GSAP + Lenis. Fonts are self-hosted via @fontsource.

## Run
    npm install
    cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL and contact parts
    npm run dev                  # http://localhost:3000
    npm run build && npm start

## Phase 1 status (built)
Home `/` complete: timecode loader, hero + role switcher, playhead nav, About, Selected work
(filterable, score-ring demo), Skills, Experience, Contact CTA, "vox" easter egg, custom cursor,
Lenis smooth scroll, reduced-motion fallback, 404 page, JSON-LD (Person, WebSite, ProfilePage),
sitemap.xml (with image entry), robots.txt, manifest, favicon.

## Phase 2 roadmap (next token refill, one section at a time)
1. /video - 9:16 lazy YouTube facade cards + before/after grade slider
2. /design - Behance masonry + lightbox + tilt
3. /dev - project cards, live status, links
4. /games - Tiki Topple canvas teaser + design notes
5. /art - draggable/parallax collage
6. /work/[slug] case studies + VideoObject / SoftwareApplication schema
7. /about, /contact (Resend/Formspree + spam protection), next/og social images, analytics
8. Lighthouse pass + pre-launch checklist

## Add or edit a project
Edit `content/projects.ts`. Only real facts; unknown links stay empty (shown as "Link soon").

## Assets you must supply
- Portrait -> `public/midhunvox-midhun-kp-portrait.webp` (then update `SITE.portrait` in `content/site.ts`)
- Hero reel (optional, <4 MB) -> `public/reel/hero.mp4`, set `SITE.heroReel`
- LinkedIn URL and HAAi Google Play URL -> `content/site.ts` (LINKS)
- Logo mark (a simple "mv" mark is in `app/icon.svg` as a stand-in)
- Later phases: reel clips, Behance exports, Tiki Topple screenshots

## Email (undecided)
Pick midhunkp.work@gmail.com or midhumidhun342@gmail.com, then set
NEXT_PUBLIC_CONTACT_USER / NEXT_PUBLIC_CONTACT_DOMAIN. Until then the button is disabled. It is never printed in HTML.

## Deploy
Push to GitHub, import in Vercel, add env vars, attach midhunvox.com, pick one canonical host (apex), redirect the other.

## Off-site SEO to-do (no ranking is guaranteed)
- Verify the domain in Google Search Console, submit /sitemap.xml, request indexing of the home page
- Put the site URL in bios of YouTube, Instagram, Behance, GitHub, LinkedIn; use "midhunvox" exactly
- Same photo + name ("midhunvox" / "Midhun KP") everywhere
- Link back from YouTube About + video descriptions, and Behance project descriptions
- Keep a consistent Person profile (LinkedIn / About.me / Linktree) pointing to the site
- Indexing can take days to weeks

## Copy alternatives for the hero line
- "Edits that move. Designs that stay. Apps that ship."
- "Part editor, part designer, part engineer, all maker."
