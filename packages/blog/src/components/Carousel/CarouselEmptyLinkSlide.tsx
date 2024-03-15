import { cn } from '@digital-garden/utils';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';
import { ButtonLink } from '../ButtonLink.tsx';
import Styles from './CarouselEmptyLinkSlide.module.css';

export const CarouselEmptyLinkSlide: FunctionComponent<
  PropsWithChildren<EmptyLinkSlideProps>
> = function ({ children, href }) {
  return (
    <ButtonLink
      isOutlined={true}
      href={href}
      className={cn(
        'p-0 w-56 h-64 flex flex-col shrink-0 items-center justify-center group',
      )}>
      <span
        className={cn(
          'truncate max-w-full text-slate-500 group-hover:text-inherit',
          Styles.textOutline,
        )}>
        {children}
      </span>
    </ButtonLink>
  );
};

export interface EmptyLinkSlideProps
  extends Pick<ComponentPropsWithoutRef<'a'>, 'href'> {}
