/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure all blog JSON files are bundled into the serverless function for
  // the dynamic /blog/b/[slug] route. Without this, Next.js's file tracer
  // misses JSON files added between builds because the path is constructed
  // at runtime — leading to 404s on newly-published posts even though they
  // exist in git. In Next.js 14 this lives under experimental.
  experimental: {
    outputFileTracingIncludes: {
      '/blog/b/[slug]': ['./src/data/generated-blog-posts/**/*.json'],
      '/blog': ['./src/data/generated-blog-posts/**/*.json'],
    },
  },
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
    const slugLowercase = [
      { source: '/About-Us', destination: '/about' },
      { source: '/Packing-Services', destination: '/packing-services' },
      { source: '/Why-Choose-Us', destination: '/why-choose-us' },
      { source: '/es/Packing-Services', destination: '/es/packing-services' },
    ];
    return [
      ...legacyToHome.map((source) => ({ source, destination: '/', permanent: true })),
      ...slugLowercase.map((r) => ({ ...r, permanent: true })),
    ];
  },
};

module.exports = nextConfig;
