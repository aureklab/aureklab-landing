import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/wilddetector",
        destination: "https://wild-landing-eight.vercel.app/",
      },
      {
        source: "/wilddetector/:path*",
        destination: "https://wild-landing-eight.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
