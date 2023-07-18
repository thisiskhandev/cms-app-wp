/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mui.com",
      },
      {
        protocol: "https",
        hostname: "dev-testing.funnelpageinc.com",
      },
    ],
  },
};

module.exports = nextConfig;
