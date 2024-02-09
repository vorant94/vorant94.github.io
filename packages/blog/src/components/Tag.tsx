import { extractStringFromReactNode } from '@/shared/react.helpers';
import { COLORS, type Color } from '@/shared/theme';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';
import { Badge } from './Badge';

export const Tag: FunctionComponent<PropsWithChildren<TagProps>> = function ({
  children,
  href,
}) {
  const hashValue = extractStringFromReactNode(children);
  const color = hashToColor(hashValue);

  const base = <Badge color={color}>#{children}</Badge>;

  // replace with Link here
  return href != null ? <a href={href}>{base}</a> : base;
};

export interface TagProps extends Pick<ComponentPropsWithoutRef<'a'>, 'href'> {}

function hashToColor(value: string): Color {
  const hash = value
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((prev, curr) => prev + curr, 0);

  return COLORS[hash % COLORS.length]!;
}
