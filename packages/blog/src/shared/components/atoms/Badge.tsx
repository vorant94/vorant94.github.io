import classNames from 'classnames';
import type { PropsWithChildren, ReactElement } from 'react';
import { THEME } from '../../Theme.ts';

export function Badge({
  hashValue = '',
  children,
}: PropsWithChildren<BadgeProps>): ReactElement {
  const colors = hashToColor(hashValue);
  return (
    <span
      className={classNames(
        THEME.text,
        'inline-flex items-center rounded-full text-xs px-2.5 py-0.5 font-semibold',
        ...colors,
      )}>
      {children}
    </span>
  );
}

export interface BadgeProps {
  hashValue?: string;
}

function hashToColor(value: string): readonly [string, string] {
  const hash = value
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((prev, curr) => prev + curr, 0);

  return COLORS[hash % COLORS.length];
}

const COLORS = [
  ['bg-slate-100', 'dark:bg-slate-800'],
  ['bg-gray-100', 'dark:bg-gray-800'],
  ['bg-zinc-100', 'dark:bg-zinc-800'],
  ['bg-neutral-100', 'dark:bg-neutral-800'],
  ['bg-stone-100', 'dark:bg-stone-800'],
  ['bg-red-100', 'dark:bg-red-800'],
  ['bg-orange-100', 'dark:bg-orange-800'],
  ['bg-amber-100', 'dark:bg-amber-800'],
  ['bg-yellow-100', 'dark:bg-yellow-800'],
  ['bg-lime-100', 'dark:bg-lime-800'],
  ['bg-green-100', 'dark:bg-green-800'],
  ['bg-emerald-100', 'dark:bg-emerald-800'],
  ['bg-teal-100', 'dark:bg-teal-800'],
  ['bg-cyan-100', 'dark:bg-cyan-800'],
  ['bg-sky-100', 'dark:bg-sky-800'],
  ['bg-blue-100', 'dark:bg-blue-800'],
  ['bg-indigo-100', 'dark:bg-indigo-800'],
  ['bg-violet-100', 'dark:bg-violet-800'],
  ['bg-purple-100', 'dark:bg-purple-800'],
  ['bg-fuchsia-100', 'dark:bg-fuchsia-800'],
  ['bg-pink-100', 'dark:bg-pink-800'],
  ['bg-rose-100', 'dark:bg-rose-800'],
] as const;
