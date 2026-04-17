// GHL image library — keeps hosting on GHL CDN, no local bloat
const BASE = 'https://images.leadconnectorhq.com/image/f_webp/q_80';
const SRC = 'https://assets.cdn.filesafe.space/7pnMlJIyNsgtdaD576rT/media';

export function ghlImage(hash: string, ext: 'png' | 'jpg' | 'jpeg' | 'webp', width: number = 1200): string {
  return `${BASE}/r_${width}/u_${SRC}/${hash}.${ext}`;
}

export const IMG = {
  logo: { hash: '6980d4cc1fd8276091bc0ec6', ext: 'png' as const },
  heroTruck: { hash: '69666066aa336fee46b8e00b', ext: 'png' as const },
  heroMovers: { hash: '6967f14225c12a7e4603b30c', ext: 'jpeg' as const },
  residential: { hash: '6968ff5644b623c7e5fd8a70', ext: 'png' as const },
  commercial: { hash: '695fb25e6eabe665b924f386', ext: 'jpg' as const },
  longDistance: { hash: '69a585f2320ef42744c0babb', ext: 'png' as const },
  packing: { hash: '6982b5e399f1bff20e92e47a', ext: 'jpg' as const },
  packingAlt: { hash: '697f84e91fd8279b465f05c8', ext: 'jpg' as const },
  packingCart: { hash: '69816e3d1311f6256add592f', ext: 'jpg' as const },
  contactHero: { hash: '6967ea1e5ce16c64a01539a8', ext: 'png' as const },
  team: { hash: '696675210475d420a14bbe91', ext: 'png' as const },
  about1: { hash: '696908c7f43f8a25f73b23b2', ext: 'jpeg' as const },
  about2: { hash: '69669c829a690c6153f6631e', ext: 'jpg' as const },
  crewWorking: { hash: '6966737be2d75bd6ac16fff0', ext: 'jpg' as const },
  movingBox: { hash: '69666061574eb20fd27153f9', ext: 'png' as const },
  truckSide: { hash: '697201df15885e248f7aa335', ext: 'png' as const },
  truckFront: { hash: '697202f5d4fb909b9a06f068', ext: 'png' as const },
};

export const url = (i: { hash: string; ext: any }, width: number = 1200) => ghlImage(i.hash, i.ext, width);
