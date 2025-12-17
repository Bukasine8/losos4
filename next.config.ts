import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Vercel optimizations
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Output configuration for Vercel
  output: 'standalone',

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@tabler/icons-react'],
  },
};

export default nextConfig;

