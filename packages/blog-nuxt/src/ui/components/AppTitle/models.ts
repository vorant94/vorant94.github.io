export const appTitleBases = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type AppTitleBase = (typeof appTitleBases)[number];
export const appTitleBaseToStyles = {
  h1: 'text-4xl font-extrabold',
  h2: '',
  h3: 'text-2xl font-semibold',
  h4: '',
  h5: '',
  h6: ' text-lg font-medium',
} as const satisfies Record<AppTitleBase, string>;
