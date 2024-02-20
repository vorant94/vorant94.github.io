import { cn } from '@/shared/react.helpers';
import { THEME } from '@/shared/theme';
import type { PropsWithChildren, ReactElement } from 'react';

export function Text({
  children,
  level = 'md',
}: PropsWithChildren<TextProps>): ReactElement {
  return (
    <span
      className={cn(...THEME.primaryText, {
        'text-sm font-light': level === 'sm',
      })}>
      {children}
    </span>
  );
}

export interface TextProps {
  level?: TextLevel;
}

export const BODY_LEVELS = ['md', 'sm'] as const;
export type TextLevel = (typeof BODY_LEVELS)[number];
