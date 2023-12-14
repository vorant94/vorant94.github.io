export const THEME: Theme = {
  background: ['bg-slate-50', 'dark:bg-slate-900'],
  primaryText: ['text-slate-800', 'dark:text-slate-100'],
  border: ['border-slate-300', 'dark:border-slate-600'],
  link: 'text-slate-500 hover:text-cyan-500',
  linkDecoration:
    'hover:underline underline-offset-4 decoration-4 decoration-dotted decoration-cyan-500',
  secondaryText: 'text-slate-500',
};

export interface Theme {
  readonly background: ThemedColor<BackgroundColor>;
  readonly primaryText: ThemedColor<TextColor>;
  readonly border: ThemedColor<BorderColor>;

  readonly link: string;
  readonly linkDecoration: string;
  readonly secondaryText: string;
}

export type ThemedColor<T extends string> = readonly [T, `dark:${T}`];

export type BackgroundColor = `bg-${string}-${string}`;
export type TextColor = `text-${string}-${string}`;
export type BorderColor = `border-${string}-${string}`;
