import { cn } from '@digital-garden/utils';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

// TODO align with dg-link styles
export const ButtonLink: FunctionComponent<PropsWithChildren<ButtonLinkProps>> =
  function ({ children, className, isOutlined, level, testId, prefetch, ...rest }) {
    return (
      <a
        className={cn(
          'p-1 hover:text-cyan-500',
          {
            ['border rounded-2xl hover:outline outline-cyan-500 hover:border-cyan-500']:
              isOutlined,
            'text-sm font-light': level === 'sm',
          },
          className,
        )}
        data-testid={testId}
        data-astro-prefetch={prefetch}
        {...rest}>
        {children}
      </a>
    );
  };

export interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  prefetch?: 'hover' | 'tap' | 'viewport' | 'load';
  testId?: string;
  isOutlined?: boolean;
  level?: ButtonLinkLevel;
}

export const BUTTON_LINK_LEVELS = ['md', 'sm'] as const;
export type ButtonLinkLevel = (typeof BUTTON_LINK_LEVELS)[number];
