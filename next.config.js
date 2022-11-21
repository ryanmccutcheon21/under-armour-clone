/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.underarmour.com',
      'underarmour.scene7.com',
      'media.kohlsimg.com'
    ]
  }
}

module.exports = nextConfig
