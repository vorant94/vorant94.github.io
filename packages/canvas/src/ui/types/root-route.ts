export const rootRoute = {
	home: "/",
	typescriptMonoreposAreAMess: "/typescript-monorepos-are-a-mess",
	thoughtsOnModernFrameworkFeatures: "/thoughts-on-modern-framework-features",
	digitalGarden: "/digital-garden",
} as const;

export type RootRoute = (typeof rootRoute)[keyof typeof rootRoute];
