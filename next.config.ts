import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/wilddetector",
        destination: "https://wild-landing-o4tjka0ch-trumanhuman001-3750s-projects.vercel.app/",
      },
      {
        source: "/wilddetector/:path*",
        destination: "https://wild-landing-o4tjka0ch-trumanhuman001-3750s-projects.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
