import type { PropsWithChildren, ReactElement } from 'react';

export function Layout({ children }: PropsWithChildren): ReactElement {
  return (
    <main className="min-w-dvw min-h-dvh flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      {children}
    </main>
  );
}
