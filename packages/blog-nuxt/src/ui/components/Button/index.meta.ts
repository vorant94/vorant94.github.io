export const buttonVariants = ['default', 'outlined'] as const;
export type ButtonVariant = (typeof buttonVariants)[number];
