// next.config.mjs

const nextConfig = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    // other Next.js configuration options
  };
  
  export default nextConfig;
  