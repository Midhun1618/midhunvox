import Link from "next/link";
export const metadata = { title: "Page not found | midhunvox", robots: { index: false } };
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center px-5">
      <p className="font-mono text-sm text-vox">Error 404, clip not found</p>
      <h1 className="mt-4 font-display text-[16vw] leading-[0.85] tracking-tight md:text-[10vw]">Cut.</h1>
      <p className="mt-6 max-w-md text-mute">This page isn&apos;t on the timeline yet. Head back to the start.</p>
      <Link href="/" className="mt-8 rounded-full bg-vox px-7 py-4 font-medium text-white hover:bg-ink">Back to midhunvox</Link>
    </main>
  );
}
