import { cn } from '@/core/cn.js';
import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';

export const ButtonLink: FC<PropsWithChildren<ButtonLinkProps>> = function ({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...rest
}) {
  return (
    <a
      className={cn(
        'p-1 hover:text-cyan-500',
        buttonLinkVariantToStyle[variant],
        buttonLinkSizeToStyles[size],
        className,
      )}
      {...rest}>
      {children}
    </a>
  );
};

export interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
}

export const buttonLinkVariants = ['default', 'outlined'] as const;
export type ButtonLinkVariant = (typeof buttonLinkVariants)[number];
const buttonLinkVariantToStyle = {
  default: '',
  outlined:
    'border rounded-2xl hover:outline outline-cyan-500 hover:border-cyan-500',
} as const satisfies Record<ButtonLinkVariant, string>;

export const buttonLinkSizes = ['md', 'sm'] as const;
export type ButtonLinkSize = (typeof buttonLinkSizes)[number];
export const buttonLinkSizeToStyles = {
  sm: 'text-sm font-light',
  md: '',
} as const satisfies Record<ButtonLinkSize, string>;
