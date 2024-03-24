export const buttonLinkVariants = ['default', 'outlined'] as const;
export type ButtonLinkVariant = (typeof buttonLinkVariants)[number];

export const buttonLinkSizes = ['md', 'sm'] as const;
export type ButtonLinkSize = (typeof buttonLinkSizes)[number];
export const buttonLinkSizeToStyles = {
  sm: 'text-sm font-light',
  md: '',
} as const satisfies Record<ButtonLinkSize, string>;
