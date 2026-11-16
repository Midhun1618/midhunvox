/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
};
export default nextConfig;
