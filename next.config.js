/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/new" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/new/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
