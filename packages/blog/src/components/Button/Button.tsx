import classNames from 'classnames';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> =
  function ({ children, className, testId, ...rest }) {
    return (
      <button
        className={classNames(className)}
        data-testid={testId}
        {...rest}>
        {children}
      </button>
    );
  };

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  testId?: string;
}
