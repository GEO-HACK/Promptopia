/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // If you're using the app directory
  },
  serverExternalPackages: ["mongoose", "styled-jsx"], // Ensure correct package handling
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        pathname: "/**", // Allows all paths from this domain
      },
    ],
  },
  webpack(config) {
    // Adding configuration for top-level await
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    // Fix potential issues with resourceQuery in next-font-loader
    const nextFontLoaderRule = config.module.rules.find((rule) =>
      rule.loader?.includes("next-font-loader")
    );

    if (nextFontLoaderRule) {
      nextFontLoaderRule.resourceQuery = { not: [/^$/] }; // Avoid empty resourceQuery parsing issues
    }

    return config;
  },
};

export default nextConfig;
