/** @type {import('next').NextConfig} */
const nextConfig = {
  // Domain configuration
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Domain',
            value: 'www.asperbeautyshop.com',
          },
        ],
      },
    ];
  },
  // Redirect non-www to www
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'asperbeautyshop.com',
          },
        ],
        destination: 'https://www.asperbeautyshop.com',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
