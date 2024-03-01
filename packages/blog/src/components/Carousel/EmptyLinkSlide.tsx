import { cn } from '@/shared/react.helpers';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';
import { ButtonLink } from '../ButtonLink';
import Styles from './EmptyLinkSlide.module.css';

export const EmptyLinkSlide: EmptyLinkSlideComponent = function ({
  children,
  href,
}) {
  return (
    <ButtonLink
      isOutlined={true}
      href={href}
      className={cn(
        'p-0 w-56 h-64 flex flex-col shrink-0 items-center justify-center group',
      )}>
      <span
        className={cn(
          'truncate max-w-full va-secondary-text group-hover:text-inherit',
          Styles.textOutline,
        )}>
        {children}
      </span>
    </ButtonLink>
  );
};

export type EmptyLinkSlideComponent = FunctionComponent<
  PropsWithChildren<EmptyLinkSlideProps>
>;

export interface EmptyLinkSlideProps
  extends Pick<ComponentPropsWithoutRef<'a'>, 'href'> {}
