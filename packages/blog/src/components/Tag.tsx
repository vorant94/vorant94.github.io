import { getPostTagFullPath } from '@/shared/post.helpers.ts';
import {
  colors,
  extractStringFromReactNode,
  type Color,
} from '@digital-garden/utils';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { Badge } from './Badge.tsx';

export const Tag: FunctionComponent<PropsWithChildren<TagProps>> = function ({
  children,
}) {
  const tag = extractStringFromReactNode(children);
  const color = hashToColor(tag);

  return (
    <a href={getPostTagFullPath(tag)}>
      <Badge color={color}>#{tag}</Badge>
    </a>
  );
};

export interface TagProps {}

function hashToColor(value: string): Color {
  const hash = value
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((prev, curr) => prev + curr, 0);

  return colors[hash % colors.length]!;
}
