/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
    typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  remotePatterns: [
    {
      protocol: "https", 
      hostname: "avatars.githubusercontent.com", 
    },
  ],

};

module.exports = nextConfig;
