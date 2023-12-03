/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // build nextjs project to static files
  distDir: 'dist', // by default nextjs outputs to "out/"
  basePath: '/BASEPATH/', // postbuild adjusts this to relative url
};

module.exports = nextConfig;
