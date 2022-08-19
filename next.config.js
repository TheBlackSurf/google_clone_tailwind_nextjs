/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  allowFutureImage: true,
  images: {
    domains: ['www.google.com'],
  },

  experimental: {
    images: {
      allowFutureImage: true,
      domain: ["www.google.com"],
    },
  },
};

module.exports = nextConfig
