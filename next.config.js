/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignores ESLint errors in build step
  },
  remotePatterns: [
    {
      protocol: "https", // Specify the protocol (http or https)
      hostname: "avatars.githubusercontent.com", // Define the hostname
    },
  ],

};

module.exports = nextConfig;
