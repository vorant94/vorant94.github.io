import { cn } from '@digital-garden/utils';
import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
} from 'react';

export function Text({
  children,
  level = 'md',
  className,
  ...rest
}: PropsWithChildren<TextProps>): ReactElement {
  return (
    <span
      className={cn(
        'va-primary-text',
        {
          'text-sm font-light': level === 'sm',
        },
        className,
      )}
      {...rest}>
      {children}
    </span>
  );
}

export interface TextProps extends ComponentPropsWithoutRef<'span'> {
  level?: TextLevel;
}

export const TEXT_LEVELS = ['md', 'sm'] as const;
export type TextLevel = (typeof TEXT_LEVELS)[number];
