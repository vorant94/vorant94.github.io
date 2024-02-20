import { cn } from '@/shared/react.helpers';
import { THEME } from '@/shared/theme';
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
        ...THEME.primaryText,
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

export const BODY_LEVELS = ['md', 'sm'] as const;
export type TextLevel = (typeof BODY_LEVELS)[number];
