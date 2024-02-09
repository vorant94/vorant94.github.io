import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { Slide, type SlideComponent } from './Slide';
import Styles from './styles.module.css';

const Carousel: CarouselComponent = function ({ children }) {
  return (
    <div
      className={classNames(
        'flex gap-6 overflow-x-auto scroll-smooth',
        Styles.carousel,
      )}>
      {children}
    </div>
  );
};

Carousel.Slide = Slide;

export { Carousel };

export interface CarouselComponent
  extends FunctionComponent<PropsWithChildren<CarouselProps>> {
  Slide: SlideComponent;
}

export interface CarouselProps {}

export type {
  SlideComponent as CarouselSlideComponent,
  SlideProps as CarouselSlideProps,
} from './Slide';
