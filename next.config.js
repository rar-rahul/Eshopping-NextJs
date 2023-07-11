/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URL: process.env.MONGO_URL,
    SECRETE_TOKEN: process.env.SECRETE_TOKEN,
  }
}

module.exports = nextConfig
