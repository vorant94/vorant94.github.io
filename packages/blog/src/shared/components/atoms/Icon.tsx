import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import classNames from 'classnames';
import type { HTMLAttributes, ReactElement } from 'react';

export interface IconPros
  extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {}

export function Icon({ className }: IconPros): ReactElement {
  return (
    <i
      className={classNames(
        'text-slate-800 dark:text-slate-50',
        className,
      )}></i>
  );
}
