/** @type {import('next').NextConfig} */

const CopyPlugin = require('copy-webpack-plugin');

const nextConfig = {
  output: 'export',
  basePath: '/project-puok',
  images: {},
};

module.exports = nextConfig;