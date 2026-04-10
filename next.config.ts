import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.digitizebox.com',
          },
        ],
        destination: 'https://digitizebox.com/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
