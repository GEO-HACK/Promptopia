/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      
  },
  serverExternalPackages: ["mongoose", "styled-jsx"], // Moved out of experimental
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
