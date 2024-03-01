import { cn } from '@/shared/react.helpers';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> =
  function ({ children, className, isOutlined, testId, ...rest }) {
    return (
      <button
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
      </button>
    );
  };

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  testId?: string;
  isOutlined?: boolean;
}
