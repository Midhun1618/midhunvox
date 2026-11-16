import { SITE } from "@/content/site";

// Hand-written so we can include <image:image> entries (image sitemap).
// Add each new page + its images to PAGES as sections are built.
const PAGES = [{ path: "/", priority: "1.0", images: [{ src: SITE.portrait, title: SITE.portraitAlt }] }];

export const dynamic = "force-static";
export function GET() {
  const urls = PAGES.map((p) => `<url><loc>${SITE.url}${p.path === "/" ? "" : p.path}</loc><priority>${p.priority}</priority>${p.images.map((i) => `<image:image><image:loc>${SITE.url}${i.src}</image:loc><image:title>${i.title}</image:title></image:image>`).join("")}</url>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
