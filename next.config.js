/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    CALLBACK_URL: process.env.CALLBACK_URL,
  }
}

module.exports = nextConfig
