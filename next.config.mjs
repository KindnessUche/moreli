/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [new URL("https://framerusercontent.com/images/**")],
  },
};

export default nextConfig;
