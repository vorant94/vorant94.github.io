import { cn } from '@digital-garden/utils';
import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
} from 'react';

export function Text({
  children,
  base,
  className,
  ...rest
}: PropsWithChildren<TextProps>): ReactElement {
  const Base = base;

  return (
    <Base
      className={cn(
        'text-slate-800 dark:text-slate-100',
        textBaseToStyle[base],
        className,
      )}
      {...rest}>
      {children}
    </Base>
  );
}

export interface TextProps extends ComponentPropsWithoutRef<'span'> {
  base: TextBase;
}

export const textBase = ['span', 'strong', 'em'] as const;
export type TextBase = (typeof textBase)[number];
const textBaseToStyle = {
  span: '',
  strong: 'font-semibold',
  em: 'font-light',
} as const satisfies Record<TextBase, string>;
