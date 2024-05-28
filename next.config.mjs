/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  compress: true,
  productionBrowserSourceMaps: false,
  cacheMaxMemorySize: 0,
};

export default nextConfig;
