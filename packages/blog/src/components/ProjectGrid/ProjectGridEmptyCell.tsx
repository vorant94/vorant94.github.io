import { ButtonLink } from '@/components/ButtonLink.tsx';
import { cn } from '@digital-garden/utils';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const ProjectGridEmptyCell: FunctionComponent<
  PropsWithChildren<ProjectGridEmptyCellProps>
> = function ({ children, href }) {
  return (
    <ButtonLink
      href={href}
      isOutlined={true}
      className={cn('p-3 flex items-center justify-center h-24')}>
      {children}
    </ButtonLink>
  );
};
export interface ProjectGridEmptyCellProps
  extends Pick<ComponentPropsWithoutRef<'a'>, 'href'> {}
