// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // pathname: '/dmkjaieb2/image/upload/**',
      },
    ],
  },
};

export default nextConfig;
