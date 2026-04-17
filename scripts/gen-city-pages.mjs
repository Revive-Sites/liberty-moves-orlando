#!/usr/bin/env node
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const SLUGS = [
  'winter-park-orlando', 'kissimmee-orlando', 'altamonte-springs-orlando', 'lake-mary-orlando',
  'apopka-orlando', 'oviedo-orlando', 'sanford-orlando', 'windermere-orlando',
  'celebration-orlando', 'st-cloud-orlando', 'davenport-orlando', 'gotha-orlando',
  'montverde-orlando', 'winter-garden-orlando', 'college-park-orlando',
  'maitland-movers', 'winter-springs-movers', 'casselberry-movers',
];

const APP = '/Users/reviveagency/liberty-moves-orlando-build/src/app';

for (const slug of SLUGS) {
  const dir = join(APP, slug);
  await mkdir(dir, { recursive: true });
  const componentName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('') + 'Page';
  const content = `import CityPage from '@/components/sections/CityPage';
import { LocalBusinessLd, BreadcrumbsLd, ServiceLd } from '@/components/JsonLd';
import { SITE, CITIES } from '@/lib/site';

const city = CITIES.find((c) => c.slug === '${slug}')!;

export const metadata = {
  title: \`\${city.name} Movers | Liberty Moves Orlando — Licensed \${city.name} Moving Company\`,
  description: \`\${city.name}, FL movers with upfront pricing and careful crews. Serving \${city.region}. Licensed (USDOT 3455436), 5-star rated. Free quote in minutes.\`,
  keywords: [\`\${city.name.toLowerCase()} movers\`, \`\${city.name.toLowerCase()} moving company\`, \`movers in \${city.name.toLowerCase()}\`, 'orlando movers'],
  alternates: { canonical: \`\${SITE.url}/${slug}\` },
};

export default function ${componentName}() {
  return (
    <>
      <LocalBusinessLd />
      <ServiceLd name={\`\${city.name} Moving Services\`} slug="${slug}" description={\`Professional moving services in \${city.name}, FL. Local, long-distance, residential, commercial, and packing.\`} />
      <BreadcrumbsLd items={[
        { name: 'Home', url: SITE.url },
        { name: \`\${city.name} Movers\`, url: \`\${SITE.url}/${slug}\` },
      ]} />
      <CityPage city={city} />
    </>
  );
}
`;
  await writeFile(join(dir, 'page.tsx'), content);
  console.log(`✔ ${slug}/page.tsx`);
}
console.log(`\nGenerated ${SLUGS.length} city pages.`);
