import { THEME } from '@/shared/theme.ts';
import classNames from 'classnames';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';
import { ButtonLink } from '../ButtonLink.tsx';

export const EmptyLinkSlide: EmptyLinkSlideComponent = function ({
  children,
  href,
}) {
  return (
    <ButtonLink
      isOutlined={true}
      href={href}
      className={classNames(
        '!p-0 w-56 h-64 flex flex-col shrink-0 items-center justify-center group',
      )}>
      <span
        className={classNames(
          'truncate max-w-full',
          THEME.link,
          'group-hover:text-cyan-500',
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
