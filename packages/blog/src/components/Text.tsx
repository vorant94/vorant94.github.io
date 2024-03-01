import { cn } from '@/shared/react.helpers';
import type { PropsWithChildren, ReactElement } from 'react';

export function Text({
  children,
  level = 'md',
}: PropsWithChildren<TextProps>): ReactElement {
  return (
    <span
      className={cn('va-primary-text', {
        'text-sm font-light': level === 'sm',
      })}>
      {children}
    </span>
  );
}

export interface TextProps {
  level?: TextLevel;
}

export const TEXT_LEVELS = ['md', 'sm'] as const;
export type TextLevel = (typeof TEXT_LEVELS)[number];
