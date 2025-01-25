import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-sa-east-1.amazonaws.com",
      },
    ],
  },
};
export default nextConfig;
