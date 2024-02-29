/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
