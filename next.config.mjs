/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/new",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
