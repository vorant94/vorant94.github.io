export enum Route {
  HOME = '/',
  TYPESCRIPT_MONOREPOS_ARE_A_MESS = '/typescript-monorepos-are-a-mess',
  THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES = '/thoughts-on-modern-framework-features',
}

export const routeToName = {
  [Route.HOME]: 'Home',
  [Route.TYPESCRIPT_MONOREPOS_ARE_A_MESS]: 'Typescript Monorepos Are A Mess',
  [Route.THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES]:
    'Thoughts on Modern Framework Features',
} as const satisfies Record<Route, string>;
