import { LINKS } from "./site";
export type Track = "Edit" | "Design" | "Code" | "Games" | "Art";
export type Project = {
  slug: string; track: Track; title: string; hook: string; role: string;
  tools: string[]; status: string; href?: string; hrefLabel?: string;
};
// Only real facts. Anything unknown is a TODO, never invented.
export const PROJECTS: Project[] = [
  { slug: "short-form-reels", track: "Edit", title: "Short-form reels", hook: "100+ Reels, Shorts and TikToks, cut to the beat.", role: "Editor", tools: ["Premiere Pro", "After Effects"], status: "Ongoing", href: LINKS.youtube, hrefLabel: "YouTube" },
  { slug: "travel-film", track: "Edit", title: "Cinematic travel film", hook: "A travel story told through rhythm and grade.", role: "Editor, colourist", tools: ["Premiere Pro", "LUTs and curves"], status: "Released", href: LINKS.youtube, hrefLabel: "YouTube" },
  { slug: "short-films", track: "Edit", title: "Narrative short films", hook: "Including an action fight scene.", role: "Editor", tools: ["Premiere Pro", "After Effects"], status: "Released", href: LINKS.youtube, hrefLabel: "YouTube" },
  { slug: "design-work", track: "Design", title: "Thumbnails and retouching", hook: "Click-worthy frames and clean portraits.", role: "Designer", tools: ["Photoshop", "Lightroom"], status: "Portfolio on Behance", href: LINKS.behance, hrefLabel: "Behance" },
  { slug: "haai", track: "Code", title: "HAAi", hook: "An AI health assistant, live on Google Play.", role: "Android and backend developer", tools: ["Kotlin", "Firebase", "Express.js", "Gemini API", "R8"], status: "Live on Google Play", href: LINKS.playstore || undefined, hrefLabel: "Google Play" },
  { slug: "reposcope", track: "Code", title: "RepoScope", hook: "GitHub repository analytics with Health, Risk, Consistency and Evolution scores.", role: "Full-stack developer", tools: ["React", "Node", "Express", "Recharts", "Framer Motion"], status: "Built", href: LINKS.github, hrefLabel: "GitHub" },
  { slug: "octovector-ai", track: "Code", title: "OctoVector AI", hook: "A RAG platform: 98.53% Hit@5 on 136 benchmark questions.", role: "Developer", tools: ["FastAPI", "FAISS + BM25", "Cross-encoder re-ranking"], status: "Built", href: LINKS.github, hrefLabel: "GitHub" },
  { slug: "vox", track: "Code", title: "VOX", hook: "Voice-powered tasks with a 24-hour lifecycle and a Focus Index.", role: "Developer", tools: ["Android", "Windows"], status: "Built", href: LINKS.github, hrefLabel: "GitHub" },
  { slug: "tiki-topple", track: "Games", title: "Tiki Topple", hook: "A real-time multiplayer strategy board game on Android.", role: "Game designer and developer", tools: ["Android", "Firebase Realtime Database", "Anonymous auth"], status: "Playable build" },
  { slug: "sketches", track: "Art", title: "Sketches and digital art", hook: "Pencil and pixels, side by side.", role: "Artist", tools: ["Sketchbook", "Digital"], status: "Collage coming soon" },
];
