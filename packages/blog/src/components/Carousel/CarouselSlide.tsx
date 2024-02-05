import type { FunctionComponent, PropsWithChildren } from 'react';

export const CarouselSlide: CarouselSlideComponent = function ({ children }) {
  return <>{children}</>;
};

export type CarouselSlideComponent = FunctionComponent<
  PropsWithChildren<CarouselSlideProps>
>;

export interface CarouselSlideProps {}
