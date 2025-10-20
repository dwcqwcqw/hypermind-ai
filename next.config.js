/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['usebear.ai'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig


