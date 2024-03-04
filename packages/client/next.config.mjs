/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_API_DOMAIN: process.env.REACT_APP_API_DOMAIN,
  },
  reactStrictMode: true,
};

export default nextConfig;
