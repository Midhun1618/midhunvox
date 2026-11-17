export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://midhunvox.com",
  brand: "midhunvox",
  name: "Midhun KP",
  title: "midhunvox | Midhun KP - Video Editor, Designer, Developer & Game Designer",
  description:
    "midhunvox is Midhun KP, a video editor, graphic designer, Android and full-stack developer and game designer from Malappuram, Kerala. Open for freelance.",
  // TODO(asset): replace with the real portrait -> /public/midhunvox-midhun-kp-portrait.webp
  portrait: "/midhunvox-portrait.webp",
  portraitAlt: "Midhun KP, known as midhunvox, video editor and developer",
  location: "Malappuram, Kerala, India",
  // TODO(asset): optional muted looping reel, e.g. "/reel/hero.mp4" (under 4 MB, 1280px)
  heroReel: "",
};

export const LINKS = {
  youtube: "https://youtube.com/@midhunvox",
  instagram: "https://www.instagram.com/midhunvox",
  behance: "https://www.behance.net/midhun-kp",
  github: "https://github.com/Midhun1618",
  linkedin: "", // TODO: INSERT URL
  playstore: "", // TODO: HAAi on Google Play URL
};

export const CONTACT = {
  user: process.env.NEXT_PUBLIC_CONTACT_USER ?? "",
  domain: process.env.NEXT_PUBLIC_CONTACT_DOMAIN ?? "",
};

export const ROLES = ["Video Editor", "Designer", "Developer", "Game Designer", "Artist"];

export const NAV = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
