import { cn } from '@digital-garden/utils';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { type OverlayComponent } from './CardOverlay';

export const Card: FunctionComponent<PropsWithChildren<CardProps>> = function ({
  children,
  overlay,
  className,
  ...rest
}) {
  return (
    <div
      className={cn(
        'dg-border dg-background',
        'border rounded-md p-5 flex gap-3 relative',
        className,
      )}
      {...rest}>
      {overlay}
      {children}
    </div>
  );
};

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  overlay?: ReactElement<OverlayComponent>;
}
