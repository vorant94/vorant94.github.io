export const appLinkLevels = ['sm', 'md'] as const;
export type AppLinkLevel = (typeof appLinkLevels)[number];
