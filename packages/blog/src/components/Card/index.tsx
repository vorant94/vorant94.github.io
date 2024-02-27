import { cn } from '@/shared/react.helpers';
import { theme } from '@/shared/tailwind.helpers';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { Overlay, type OverlayComponent } from './Overlay';

const Card: CardComponent = function ({
  children,
  overlay,
  className,
  ...rest
}) {
  return (
    <div
      className={cn(
        ...theme.border,
        ...theme.background,
        'border rounded-md p-5 flex gap-3 relative',
        className,
      )}
      {...rest}>
      {overlay}
      {children}
    </div>
  );
};

Card.Overlay = Overlay;

export { Card };

export interface CardComponent
  extends FunctionComponent<PropsWithChildren<CardProps>> {
  Overlay: OverlayComponent;
}

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  overlay?: ReactElement<OverlayComponent>;
}
