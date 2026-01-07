const nextConfig = {
  basePath: "", // Set to empty for root domain deployment
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', // This tells Next.js to generate the 'out' folder
};

export default nextConfig;
