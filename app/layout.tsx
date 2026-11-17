import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { SITE } from "@/content/site";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: "/" },
  applicationName: "midhunvox",
  verification: {
    google: "e7aRRjQfrJxIAjKLtQT3RN9Pd6AQkDL8wvvW0Q_vIRM"
  },
  authors: [{ name: SITE.name, url: SITE.url }],
  openGraph: { type: "website", url: SITE.url, siteName: "midhunvox", title: SITE.title, description: SITE.description, images: [{ url: SITE.portrait, alt: SITE.portraitAlt }] },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description, images: [SITE.portrait] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[300] focus:bg-ink focus:px-3 focus:py-2 focus:text-white">Skip to content</a><Providers>{children}</Providers></body>
    </html>
  );
}
