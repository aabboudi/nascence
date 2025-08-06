import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      }
    ],
  },
  // other Next.js config options can go here
  /* config options here */
};

export default nextConfig;
