export class Theme {
  readonly background = 'bg-slate-50 dark:bg-slate-900';
  readonly text = 'text-slate-800 dark:text-slate-100';
  readonly border = 'border-slate-300 dark:border-slate-600';
  readonly link = 'text-slate-500 hover:text-cyan-500';
  readonly linkDecoration =
    ' hover:underline underline-offset-4 decoration-4 decoration-dotted decoration-cyan-500';
}

export const THEME = new Theme();
