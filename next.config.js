/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'as1.ftcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig
