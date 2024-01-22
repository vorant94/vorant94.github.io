import classNames from 'classnames';
import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import { THEME } from '../../shared/theme';

export function Title({
  children,
  inline,
  className,
}: PropsWithChildren<TitleProps>): ReactElement {
  return (
    <h6
      className={classNames(
        ...THEME.primaryText,
        'text-lg font-medium',
        {
          'inline-block': inline,
          'mb-0': inline,
        },
        className,
      )}>
      {children}
    </h6>
  );
}

export interface TitleProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  inline?: boolean;
}
