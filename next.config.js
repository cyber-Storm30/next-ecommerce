/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactRefresh: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wixmp.com",
      },
      {
        protocol: "https",
        hostname: "amazon.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
};

module.exports = nextConfig;
