import { cn } from '@/shared/react.helpers';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

// TODO align with va-link styles
export const ButtonLink: FunctionComponent<PropsWithChildren<ButtonLinkProps>> =
  function ({ children, className, isOutlined, testId, ...rest }) {
    return (
      <a
        className={cn(
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
