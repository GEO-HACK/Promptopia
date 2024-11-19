/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      
  },
  serverExternalPackages: ["mongoose", "styled-jsx"], // Moved out of experimental
  images: {
    remotePatterns: [
      { 
         hostname:"lh3.googleusercontent.com",
         protocol:"https",
         pathname:"/**" //allows all paths from this domain
      }
     
    ],
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
