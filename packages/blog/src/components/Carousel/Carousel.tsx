import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import styles from './Carousel.module.css';
import {
  CarouselSlide,
  type CarouselSlideComponent,
} from './CarouselSlide.tsx';

const Carousel: CarouselComponent = function ({ children }) {
  return (
    <div
      className={classNames(
        'flex gap-6 overflow-x-auto scroll-smooth',
        styles.carousel,
      )}>
      {children}
    </div>
  );
};

Carousel.Slide = CarouselSlide;

export { Carousel };

export interface CarouselComponent
  extends FunctionComponent<PropsWithChildren<CarouselProps>> {
  Slide: CarouselSlideComponent;
}

export interface CarouselProps {}
