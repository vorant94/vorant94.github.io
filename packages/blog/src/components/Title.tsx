import { cn } from '@digital-garden/utils';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const Title: FunctionComponent<PropsWithChildren<TitleProps>> =
  function ({ children, inline, className, ...rest }) {
    return (
      <h6
        className={cn(
          'va-primary-text',
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
