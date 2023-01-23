/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { 
    appDir: true,
    optimizeCss: true, 
  },
  compiler: {
    styledComponents: {
      ssr: true
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'starwars-visualguide.com',
      },
      {
        protocol: 'https',
        hostname: 'i.giphy.com',
      },
    ],
  },
}

module.exports = nextConfig
