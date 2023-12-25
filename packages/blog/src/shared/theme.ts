export const THEME: Theme = {
  // TODO put this tuple to shared lib since they are used in canvas as well
  background: ['bg-slate-50', 'dark:bg-slate-900'],
  primaryText: ['text-slate-800', 'dark:text-slate-100'],
  border: ['border-slate-300', 'dark:border-slate-600'],
  link: 'text-slate-500 hover:text-cyan-500',
  linkDecoration:
    'hover:underline underline-offset-4 decoration-4 decoration-dotted decoration-cyan-500',
  secondaryText: 'text-slate-500',
};

export interface Theme {
  readonly background: ThemedStyle<BackgroundColor>;
  readonly primaryText: ThemedStyle<TextColor>;
  readonly border: ThemedStyle<BorderColor>;

  readonly link: string;
  readonly linkDecoration: string;
  readonly secondaryText: string;
}

export type ThemedStyle<T extends string> = readonly [T, `dark:${T}`];

export type BackgroundColor = `bg-${Color}-${string}`;
export type TextColor = `text-${Color}-${string}`;
export type BorderColor = `border-${Color}-${string}`;

export const COLORS = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;
export type Color = (typeof COLORS)[number];
