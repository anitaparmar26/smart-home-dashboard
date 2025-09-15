/** @type {import('next').NextConfig} */
const repoName = 'smart-home-dashboard';
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
