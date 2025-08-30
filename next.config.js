/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/nombre-repositorio" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/nombre-repositorio/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
