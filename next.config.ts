import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export a fully static site for Cloudflare Pages
  output: "export",
  images: {
    // Disable Next image optimization so assets are emitted directly in /out
    unoptimized: true,
  },
};

export default nextConfig;
