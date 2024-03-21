export const textBase = ['span', 'strong', 'em'] as const;
export type TextBase = (typeof textBase)[number];
export const textBaseToStyle = {
  span: '',
  strong: 'font-semibold',
  em: 'font-light',
} as const satisfies Record<TextBase, string>;
