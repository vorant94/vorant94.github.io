import { THEME } from '@/shared/theme';
import classNames from 'classnames';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const Title: FunctionComponent<PropsWithChildren<TitleProps>> =
  function ({ children, inline, className, ...rest }) {
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
        )}
        {...rest}>
        {children}
      </h6>
    );
  };

export interface TitleProps extends ComponentPropsWithoutRef<'h6'> {
  inline?: boolean;
}
