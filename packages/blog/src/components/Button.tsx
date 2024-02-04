import classNames from 'classnames';
import type {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> =
  function ({ children, className, ...props }) {
    return (
      <button
        className={classNames(className)}
        data-testid="button"
        {...props}>
        {children}
      </button>
    );
  };

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}
