import type { FunctionComponent, PropsWithChildren } from 'react';
import { extractStringFromReactNode } from '../../shared/extract-string-from-react-node.ts';
import { COLORS, type Color } from '../../shared/theme';
import { Badge } from '../atoms/Badge.tsx';

export const Tag: FunctionComponent<PropsWithChildren<TagProps>> = function ({
  children,
}) {
  const hashValue = extractStringFromReactNode(children);
  const color = hashToColor(hashValue);
  return <Badge color={color}>#{children}</Badge>;
};

export interface TagProps {}

function hashToColor(value: string): Color {
  const hash = value
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((prev, curr) => prev + curr, 0);

  return COLORS[hash % COLORS.length];
}
