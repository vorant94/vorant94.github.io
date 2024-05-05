import type { FC } from 'react';
import {
  Badge,
  cn,
  Link,
  tailwindColors,
  type TailwindColor,
} from '../../ui/index.js';

export const Tag: FC<TagProps> = function ({ tag }) {
  return (
    <Link href={`/tags/${tag}`}>
      <Badge
        className={cn(
          `!inline-block max-w-24 sm:max-w-none lg:max-w-24 xl:max-w-none truncate`,
        )}
        color={tagToColor(tag)}>
        #{tag}
      </Badge>
    </Link>
  );
};

export interface TagProps {
  tag: string;
}

function tagToColor(value: string): TailwindColor {
  const hash = value
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((prev, curr) => prev + curr, 0);

  return tailwindColors[hash % tailwindColors.length]!;
}
