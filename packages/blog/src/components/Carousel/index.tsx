import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { EmptyLinkSlide, type EmptyLinkSlideComponent } from './EmptyLinkSlide';
import { LinkSlide, type LinkSlideComponent } from './LinkSlide';
import Styles from './styles.module.css';

const Carousel: CarouselComponent = function ({ children }) {
  return (
    <div
      className={classNames(
        'p-1 flex gap-6 overflow-x-auto scroll-smooth',
        Styles.carousel,
      )}>
      {children}
    </div>
  );
};

Carousel.LinkSlide = LinkSlide;
Carousel.EmptyLinkSlide = EmptyLinkSlide;

export { Carousel };

export interface CarouselComponent
  extends FunctionComponent<PropsWithChildren<CarouselProps>> {
  LinkSlide: LinkSlideComponent;
  EmptyLinkSlide: EmptyLinkSlideComponent;
}

export interface CarouselProps {}

export type {
  LinkSlideComponent as CarouselLinkSlideComponent,
  LinkSlideProps as CarouselLinkSlideProps,
} from './LinkSlide';

export type {
  EmptyLinkSlideComponent as CarouselEmptyLinkSlideComponent,
  EmptyLinkSlideProps as CarouselEmptyLinkSlideProps,
} from './EmptyLinkSlide';
