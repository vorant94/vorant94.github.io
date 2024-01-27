import { THEME } from '@/shared';
import classNames from 'classnames';
import type {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

export const Caption: FunctionComponent<PropsWithChildren<CaptionPros>> =
  function ({ children, className }) {
    return (
      <span className={classNames('text-sm', THEME.secondaryText, className)}>
        {children}
      </span>
    );
  };

export interface CaptionPros
  extends Pick<HTMLAttributes<HTMLSpanElement>, 'className'> {}
