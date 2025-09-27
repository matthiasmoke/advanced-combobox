import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/advanced-combobox",
  assetPrefix: "/advanced-combobox",
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export
  experimental: {
    esmExternals: false,
  },
};

export default nextConfig;
