import classNames from 'classnames';
import type {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import { THEME } from '../../shared/theme';

export const Title: FunctionComponent<PropsWithChildren<TitleProps>> =
  function ({ children, inline, className }) {
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
  };

export interface TitleProps
  extends Pick<HTMLAttributes<HTMLHeadingElement>, 'className'> {
  inline?: boolean;
}
