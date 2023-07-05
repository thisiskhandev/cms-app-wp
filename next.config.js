/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mui.com",
      },
    ],
  },
};

module.exports = nextConfig;
