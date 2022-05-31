/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  images: {
    domains: ['mcprod.jacquemus.com', 'static.zara.net','pngimg.com', 'cdn.iconscout.com','i.pinimg.com', 'res.cloudinary.com', 's7.toryburch.com'],
  },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/aboutUs': { page: '/aboutUs' },
      '/cesta': { page: '/cesta' },
      '/cookies': { page: '/cookies' },
      '/offices': { page: '/offices' },
      '/payment': { page: '/payment' },
      '/privacyPolicy': { page: '/privacyPolicy' },
      '/products': { page: '/products' },
      '/questions': { page: '/questions' },
      '/register': { page: '/register' },
      '/sesioninit': { page: '/sesionint' },
      '/shipping': { page: '/shipping' },
      '/workWithUs': { page: '/workWithUs' },
      
    }
  },

});
