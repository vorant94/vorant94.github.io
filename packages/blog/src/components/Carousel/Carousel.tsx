import { cn } from '@digital-garden/utils';
import type { FunctionComponent, PropsWithChildren } from 'react';
import Styles from './Carousel.module.css';

export const Carousel: FunctionComponent<PropsWithChildren<CarouselProps>> =
  function ({ children }) {
    return (
      <div
        className={cn(
          'p-1 flex gap-6 overflow-x-auto scroll-smooth',
          Styles.carousel,
        )}>
        {children}
      </div>
    );
  };

export interface CarouselProps {}
