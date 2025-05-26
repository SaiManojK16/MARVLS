/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/marvls-website' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 