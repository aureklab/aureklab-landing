import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/wilddetector/docs",
        permanent: false,
      },
      {
        source: "/docs/:path*",
        destination: "/wilddetector/docs/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
