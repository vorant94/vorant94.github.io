import type { PropsWithChildren, ReactElement } from 'react';

export function Caption({ children }: PropsWithChildren): ReactElement {
  return <span className="text-sm text-slate-500">{children}</span>;
}

export interface CaptionPros {}
