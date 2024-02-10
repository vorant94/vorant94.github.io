import classNames from 'classnames';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const ButtonLink: FunctionComponent<PropsWithChildren<ButtonLinkProps>> =
  function ({ children, className, isOutlined, testId, ...rest }) {
    return (
      <a
        className={classNames(
          'p-1 hover:text-cyan-500',
          {
            ['border rounded-2xl hover:outline outline-cyan-500 hover:border-cyan-500']:
              isOutlined,
          },
          className,
        )}
        data-testid={testId}
        {...rest}>
        {children}
      </a>
    );
  };

export interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  testId?: string;
  isOutlined?: boolean;
}
