import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Only for testing purposes
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
