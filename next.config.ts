import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.colonoscopycompanion.ca" }],
        destination: "https://colonoscopycompanion.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
