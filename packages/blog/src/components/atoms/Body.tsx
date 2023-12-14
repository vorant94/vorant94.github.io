import classNames from 'classnames';
import type { PropsWithChildren, ReactElement } from 'react';
import { THEME } from '../../shared/theme';

export function Body({
  children,
  level = 'md',
}: PropsWithChildren<BodyProps>): ReactElement {
  return (
    <span
      className={classNames(...THEME.primaryText, {
        'text-sm font-light': level === 'sm',
      })}>
      {children}
    </span>
  );
}

export interface BodyProps {
  level?: BodyLevel;
}

export const BODY_LEVELS = ['md', 'sm'] as const;
export type BodyLevel = (typeof BODY_LEVELS)[number];
