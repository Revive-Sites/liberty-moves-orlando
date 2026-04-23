// Local image library — previously served from GHL CDN, now bundled in /public/images/stock
// Old GHL hash strings are kept so existing inline `{ hash, ext }` references (e.g. in
// service pages and Gallery) continue to resolve via url().

const GHL_BASE = 'https://images.leadconnectorhq.com/image/f_webp/q_80';
const GHL_SRC = 'https://assets.cdn.filesafe.space/7pnMlJIyNsgtdaD576rT/media';

// Any hash listed here resolves to a local stock photo instead of the GHL CDN.
const HASH_TO_LOCAL: Record<string, string> = {
  // heroTruck / gallery banner
  '69666066aa336fee46b8e00b': '/images/stock/hero-truck.jpg',
  // heroMovers
  '6967f14225c12a7e4603b30c': '/images/stock/hero-movers.jpg',
  // localMovers / crewWorking
  '6966737be2d75bd6ac16fff0': '/images/stock/local-movers.jpg',
  // residential
  '6968ff5644b623c7e5fd8a70': '/images/stock/residential.jpg',
  // commercial
  '695fb25e6eabe665b924f386': '/images/stock/commercial.jpg',
  // longDistance
  '69a585f2320ef42744c0babb': '/images/stock/long-distance.jpg',
  // packing
  '6982b5e399f1bff20e92e47a': '/images/stock/packing.jpg',
  // packingAlt
  '697f84e91fd8279b465f05c8': '/images/stock/packing-alt.jpg',
  // packingCart
  '69816e3d1311f6256add592f': '/images/stock/packing-cart.jpg',
  // contactHero
  '6967ea1e5ce16c64a01539a8': '/images/stock/contact-hero.jpg',
  // lobbyMove
  '696908c7f43f8a25f73b23b2': '/images/stock/lobby-move.jpg',
  // apartmentMove
  '6967ea1ec802d94ad6138835': '/images/stock/apartment-move.jpg',
  // truckRamp
  '696675210475d420a14bbe91': '/images/stock/truck-ramp.jpg',
  // movingBox
  '69666061574eb20fd27153f9': '/images/stock/moving-box.jpg',
  // about1
  '69669c829a690c6153f6631e': '/images/stock/about1.jpg',
};

export function ghlImage(hash: string, ext: 'png' | 'jpg' | 'jpeg' | 'webp', width: number = 1200): string {
  const local = HASH_TO_LOCAL[hash];
  if (local) return local;
  return `${GHL_BASE}/r_${width}/u_${GHL_SRC}/${hash}.${ext}`;
}

// Logo stays on GHL (it IS the Liberty Moves Orlando logo — not a stock replacement).
export const IMG = {
  logo: { hash: '6980d4cc1fd8276091bc0ec6', ext: 'png' as const },
  heroTruck: { hash: '69666066aa336fee46b8e00b', ext: 'png' as const },
  heroMovers: { hash: '6967f14225c12a7e4603b30c', ext: 'jpeg' as const },
  localMovers: { hash: '6966737be2d75bd6ac16fff0', ext: 'jpg' as const },
  residential: { hash: '6968ff5644b623c7e5fd8a70', ext: 'png' as const },
  commercial: { hash: '695fb25e6eabe665b924f386', ext: 'jpg' as const },
  longDistance: { hash: '69a585f2320ef42744c0babb', ext: 'png' as const },
  packing: { hash: '6982b5e399f1bff20e92e47a', ext: 'jpg' as const },
  packingAlt: { hash: '697f84e91fd8279b465f05c8', ext: 'jpg' as const },
  packingCart: { hash: '69816e3d1311f6256add592f', ext: 'jpg' as const },
  contactHero: { hash: '6967ea1e5ce16c64a01539a8', ext: 'png' as const },
  lobbyMove: { hash: '696908c7f43f8a25f73b23b2', ext: 'jpeg' as const },
  apartmentMove: { hash: '6967ea1ec802d94ad6138835', ext: 'png' as const },
  truckRamp: { hash: '696675210475d420a14bbe91', ext: 'png' as const },
  crewWorking: { hash: '6966737be2d75bd6ac16fff0', ext: 'jpg' as const },
  movingBox: { hash: '69666061574eb20fd27153f9', ext: 'png' as const },
  about1: { hash: '69669c829a690c6153f6631e', ext: 'jpg' as const },
};

export type GhlImage = { hash: string; ext: 'png' | 'jpg' | 'jpeg' | 'webp' };
export const url = (i: { hash: string; ext: any }, width: number = 1200) => ghlImage(i.hash, i.ext, width);

// Videos from GHL (served from storage.googleapis.com)
export const VIDEOS = {
  heroPrimary: 'https://storage.googleapis.com/msgsndr/7pnMlJIyNsgtdaD576rT/media/695eb88df4549a3d84fba44e.mp4',
  heroSecondary: 'https://storage.googleapis.com/msgsndr/7pnMlJIyNsgtdaD576rT/media/695ef8a5a0a4841591294f70.mp4',
};
