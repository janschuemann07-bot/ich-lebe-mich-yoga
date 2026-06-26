/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows easy static hosting exports if needed later
  },
}

module.exports = nextConfig
