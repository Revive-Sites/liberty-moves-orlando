/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'assets.cdn.filesafe.space' },
      { protocol: 'https', hostname: 'images.leadconnectorhq.com' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
    ],
  },
  async redirects() {
    const legacyToHome = [
      '/home',
      '/residential',
      '/Commercial',
      '/Distance',
      '/Winter-Park-Movers',
      '/Kissimmee-Movers',
      '/Altamonte-Springs-Movers',
      '/Lake-Mary-Movers',
      '/Apopka-Movers',
      '/Oviedo-Movers',
      '/Sanford-Movers',
      '/Windermere-Movers',
      '/Celebration-Movers',
      '/St-Cloud-Movers',
      '/Davenport-Movers',
      '/Gotha-Movers',
      '/Montverde-Movers',
      '/Winter-Garden-Movers',
    ];
    return legacyToHome.map((source) => ({ source, destination: '/', permanent: true }));
  },
};

module.exports = nextConfig;
