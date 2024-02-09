import { THEME } from '@/shared/theme';
import classNames from 'classnames';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const Caption: FunctionComponent<PropsWithChildren<CaptionPros>> =
  function ({ children, className, ...rest }) {
    return (
      <span
        className={classNames('text-sm', THEME.secondaryText, className)}
        {...rest}>
        {children}
      </span>
    );
  };

export interface CaptionPros extends ComponentPropsWithoutRef<'span'> {}
