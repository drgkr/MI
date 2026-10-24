import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? "/MI" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/MI/" : "",
};

export default nextConfig;
