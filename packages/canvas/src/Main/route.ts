export enum Route {
  MAIN = '/',
  TYPESCRIPT_MONOREPOS_ARE_A_MESS = 'typescript-monorepos-are-a-mess',
  THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES = 'thoughts-on-modern-framework-features',
}

export const routeToLabel = {
  [Route.MAIN]: 'Main',
  [Route.TYPESCRIPT_MONOREPOS_ARE_A_MESS]: 'Typescript Monorepos Are A Mess',
  [Route.THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES]:
    'Thoughts on Modern Framework Features',
} as const satisfies Record<Route, string>;
