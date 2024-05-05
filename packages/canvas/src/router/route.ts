export const route = {
  home: '/',
  typescriptMonoreposAreAMess: '/typescript-monorepos-are-a-mess',
  thoughtsOnModernFrameworkFeatures: '/thoughts-on-modern-framework-features',
  digitalGarden: '/digital-garden',
} as const;
export type Route = (typeof route)[keyof typeof route];
