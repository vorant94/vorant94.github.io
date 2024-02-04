import { COLORS, extractStringFromReactNode, type Color } from '@/shared';
import type {
  AnchorHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
} from 'react';
import { Badge } from './Badge.tsx';

export const Tag: FunctionComponent<PropsWithChildren<TagProps>> = function ({
  children,
  href,
}) {
  const hashValue = extractStringFromReactNode(children);
  const color = hashToColor(hashValue);

  const base = <Badge color={color}>#{children}</Badge>;

  return href != null ? <a href={href}>{base}</a> : base;
};

export interface TagProps
  extends AnchorHTMLAttributes<Pick<HTMLAnchorElement, 'href'>> {}

function hashToColor(value: string): Color {
  const hash = value
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((prev, curr) => prev + curr, 0);

  return COLORS[hash % COLORS.length];
}
