#!/usr/bin/env node
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const SLUGS = ['new-york', 'new-jersey', 'chicago', 'atlanta', 'los-angeles'];
const APP = '/Users/reviveagency/liberty-moves-orlando-build/src/app';

for (const slug of SLUGS) {
  const dir = join(APP, `moving-to-orlando-from-${slug}`);
  await mkdir(dir, { recursive: true });
  const componentName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('') + 'Page';
  const content = `import InboundRelocationPage from '@/components/sections/InboundRelocation';
import { ORIGINS } from '@/lib/inbound';
import { SITE } from '@/lib/site';

const origin = ORIGINS.find((o) => o.slug === '${slug}')!;

export const metadata = {
  title: \`Moving from \${origin.city} to Orlando, FL | Long-Distance Movers\`,
  description: \`Moving from \${origin.city}, \${origin.stateCode} to Orlando? Liberty Moves handles \${origin.city}-to-Orlando relocations with direct delivery, binding estimates, and licensed interstate carriers. Get a free quote.\`,
  keywords: [\`moving from \${origin.city.toLowerCase()} to orlando\`, \`\${origin.city.toLowerCase()} to orlando movers\`, \`long distance movers orlando\`, 'interstate movers orlando'],
  alternates: { canonical: \`\${SITE.url}/moving-to-orlando-from-${slug}\` },
};

export default function ${componentName}() {
  return <InboundRelocationPage origin={origin} />;
}
`;
  await writeFile(join(dir, 'page.tsx'), content);
  console.log(`\u2714 moving-to-orlando-from-${slug}/page.tsx`);
}
console.log(`\\nGenerated ${SLUGS.length} inbound relocation pages.`);
