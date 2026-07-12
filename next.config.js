/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'vercel.app'],
  },
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = nextConfig
