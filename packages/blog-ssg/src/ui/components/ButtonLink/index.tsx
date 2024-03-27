import { cn } from '@/core/cn.js';
import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';

export const ButtonLink: FC<PropsWithChildren<ButtonLinkProps>> = function ({
  children,
  variant = 'default',
  size = 'md',
  ...rest
}) {
  return (
    <a
      className={cn(
        'p-1 hover:text-cyan-500',
        {
          'border rounded-2xl hover:outline outline-cyan-500 hover:border-cyan-500':
            variant === 'outlined',
        },
        buttonLinkSizeToStyles[size],
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

export const buttonLinkSizes = ['md', 'sm'] as const;
export type ButtonLinkSize = (typeof buttonLinkSizes)[number];
export const buttonLinkSizeToStyles = {
  sm: 'text-sm font-light',
  md: '',
} as const satisfies Record<ButtonLinkSize, string>;
