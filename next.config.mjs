/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mizzle.webestica.com",
      },
    ],
  },
};


export default nextConfig;
