export enum IndexMeta {
  HOME = '/',
  TYPESCRIPT_MONOREPOS_ARE_A_MESS = '/typescript-monorepos-are-a-mess',
  THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES = '/thoughts-on-modern-framework-features',
  DIGITAL_GARDEN = '/digital-garden',
}

export const routeToName = {
  [IndexMeta.HOME]: 'Home',
  [IndexMeta.TYPESCRIPT_MONOREPOS_ARE_A_MESS]:
    'Typescript Monorepos Are A Mess',
  [IndexMeta.THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES]:
    'Thoughts on Modern Framework Features',
  [IndexMeta.DIGITAL_GARDEN]: 'Digital Garden',
} as const satisfies Record<IndexMeta, string>;
