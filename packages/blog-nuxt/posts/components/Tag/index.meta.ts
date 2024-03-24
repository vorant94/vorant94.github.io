import { tailwindColors, type TailwindColor } from '~/ui/utils/tailwind';

export function tagToColor(value: string): TailwindColor {
  const hash = value
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((prev, curr) => prev + curr, 0);

  return tailwindColors[hash % tailwindColors.length]!;
}
