export const linkLevels = ['sm', 'md'] as const;
export type AppLinkLevel = (typeof linkLevels)[number];
