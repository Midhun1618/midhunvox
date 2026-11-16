import Loader from "@/components/Loader";
import Playhead from "@/components/Playhead";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { LINKS, SITE } from "@/content/site";

const person = {
  "@context": "https://schema.org", "@type": "Person", "@id": `${SITE.url}/#person`,
  name: SITE.name, alternateName: ["midhunvox"], url: SITE.url,
  image: `${SITE.url}${SITE.portrait}`,
  jobTitle: "Video Editor, Graphic Designer, Developer and Game Designer",
  address: { "@type": "PostalAddress", addressLocality: "Malappuram", addressRegion: "Kerala", addressCountry: "IN" },
  knowsAbout: ["Video editing", "Colour grading", "Graphic design", "Android development", "Full-stack development", "Game design", "Retrieval-augmented generation"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Lovely Professional University" },
  sameAs: [LINKS.youtube, LINKS.instagram, LINKS.behance, LINKS.github, LINKS.linkedin].filter(Boolean),
};
const website = { "@context": "https://schema.org", "@type": "WebSite", name: "midhunvox", alternateName: "Midhun KP", url: SITE.url };
const profile = { "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: { "@id": `${SITE.url}/#person` }, url: SITE.url };

export default function Home() {
  return (
    <>
      <JsonLd data={person} /><JsonLd data={website} /><JsonLd data={profile} />
      <Loader />
      <Playhead />
      <main>
        <Hero /><About /><Work /><Skills /><Experience /><Contact />
      </main>
    </>
  );
}
