/** @type {import('next').NextConfig} */

const CopyPlugin = require('copy-webpack-plugin');

const nextConfig = {
  webpack: (config) => {
    const customPlugins = [
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/bootstrap/dist/js/bootstrap.js',
            to: 'static/bootstrap.js',
          },
        ],
      }),
    ];

    config.plugins.push(...customPlugins);

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com'
      },
    ],
  },
};

module.exports = nextConfig;