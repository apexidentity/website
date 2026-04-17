/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dncdx1dm9/**',
      },
    ],
    // Prefer AVIF first (smaller), fallback to WebP
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;