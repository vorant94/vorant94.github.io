export enum Route {
  MAIN = '/',
  TYPESCRIPT_MONOREPOS_ARE_A_MESS = 'typescript-monorepos-are-a-mess',
  THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES = 'thoughts-on-modern-framework-features',
  DIGITAL_GARDEN = 'digital-garden',
}

export const routeToLabel = {
  [Route.MAIN]: 'Main',
  [Route.TYPESCRIPT_MONOREPOS_ARE_A_MESS]: 'Typescript Monorepos Are A Mess',
  [Route.THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES]:
    'Thoughts on Modern Framework Features',
  [Route.DIGITAL_GARDEN]: 'Digital Garden',
} as const satisfies Record<Route, string>;
