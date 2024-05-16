/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "truchasmazzarello.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
