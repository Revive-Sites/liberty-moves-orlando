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
      '/blog/[slug]': ['./src/data/generated-blog-posts/**/*.json'],
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
    // OS native blog posts moved off /blog/b/ to the clean /blog/<slug> route
    // (Revive OS #50: drop the /b/). Permanent edge redirects so the already-
    // indexed /blog/b/<slug> URLs consolidate to the clean ones. Only the JSON-
    // driven posts are listed here; the 5 hand-authored /blog/b/<x> pages are
    // intentionally left untouched.
    const blogBToClean = [
      'the-real-cost-of-hiring-the-wrong-movers-in-orlando-and-how-to-avoid-it',
      'how-to-choose-the-best-moving-company-in-orlando-without-getting-burned-by',
      'orlando-apartment-move-checklist-30-day-plan',
      'why-liberty-moves-orlando-is-one-of-the-top-movers-in-lake-mary',
      'moving-with-kids-in-orlando-how-to-make-the-transition-easier-for-the-whole-fami',
      'apartment-moving-in-orlando-what-nobody-tells-you-before-move-in-day',
    ];
    // SEO 404 fixes (audit 2026-06): the real /contact-us page is sometimes
    // linked/indexed as /contact; redirect it to the page that 200s.
    const realPageRedirects = [
      { source: '/contact', destination: '/contact-us' },
    ];
    // Legacy GHL /blog/b/<short-slug> URLs whose content now lives at the clean
    // /blog/<short-slug> static route. Redirect to the real article (NOT the
    // index) so the matching content is served and link equity is preserved.
    const legacyGhlBlogBToClean = [
      'office-relocation-planning-guide',
      'storage-unit-sizes-guide',
      'how-to-choose-a-moving-company',
    ];
    // Old/inbound short blog-post slugs that were never routed here, but whose
    // article content DOES exist under the canonical long /blog/b/<slug> URL.
    // Redirect each to its real article rather than blanket-dumping to /blog.
    const shortSlugToRealPost = [
      { source: '/blog/what-makes-liberty-moves-different', destination: '/blog/b/what-makes-liberty-moves-orlando-different-why-every-resident-deserves-the-best-in-2026' },
      { source: '/blog/licensed-vs-unlicensed-orlando-movers', destination: '/blog/b/orlando-movers-the-real-difference-between-licensed-and-unlicensed' },
      { source: '/blog/how-professional-packing-services-protect-your-belongings', destination: '/blog/b/how-professional-packing-services-protect-your-belongings-during-a-move' },
    ];
    return [
      ...legacyToHome.map((source) => ({ source, destination: '/', permanent: true })),
      ...slugLowercase.map((r) => ({ ...r, permanent: true })),
      ...blogBToClean.map((s) => ({ source: `/blog/b/${s}`, destination: `/blog/${s}`, permanent: true })),
      ...realPageRedirects.map((r) => ({ ...r, permanent: true })),
      ...legacyGhlBlogBToClean.map((s) => ({ source: `/blog/b/${s}`, destination: `/blog/${s}`, permanent: true })),
      ...shortSlugToRealPost.map((r) => ({ ...r, permanent: true })),
    ];
  },
};

module.exports = nextConfig;
