export const rootRoute = {
	home: "/",
	// biome-ignore lint/style/useNamingConvention: AMess is two word
	typescriptMonoreposAreAMess: "/typescript-monorepos-are-a-mess",
	thoughtsOnModernFrameworkFeatures: "/thoughts-on-modern-framework-features",
	digitalGarden: "/digital-garden",
} as const;

export type RootRoute = (typeof rootRoute)[keyof typeof rootRoute];
