const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // build nextjs project to static files
  distDir: 'dist', // by default nextjs outputs to "out/"
  ...(!isDev && {
    basePath: '/BASEPATH', // postbuild adjusts this to relative url
  }),
};

module.exports = nextConfig;
