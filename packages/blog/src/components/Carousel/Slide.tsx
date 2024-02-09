import type { FunctionComponent, PropsWithChildren } from 'react';

export const Slide: SlideComponent = function ({ children }) {
  return <>{children}</>;
};

export type SlideComponent = FunctionComponent<PropsWithChildren<SlideProps>>;

export interface SlideProps {}
