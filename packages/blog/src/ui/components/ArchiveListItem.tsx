import type { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { cn } from '../utils/cn.js';
import { Link } from './Link.js';

export const ArchiveListItem: FunctionComponent<ArchiveListItemProps> =
  function ({ className, left, right, href, ...rest }) {
    return (
      <li
        className={cn('flex flex-col py-3 text-medium', className)}
        {...rest}>
        <Link
          href={href}
          className={cn(
            'text-slate-800 dark:text-slate-100 flex gap-3 items-center',
          )}
          aria-label={left}>
          <span className="flex-1 truncate">{left}</span>
          <span className="whitespace-nowrap text-xs">{right}</span>
        </Link>
      </li>
    );
  };

export interface ArchiveListItemProps extends ComponentPropsWithoutRef<'li'> {
  left: string;
  right: string;
  href: string;
}
