import { format } from 'date-fns';

export enum PublishedAtFormat {
  FULL = 'MMM dd, yyyy',
  SHORT = 'MMM dd',
  YEAR = 'yyyy',
  SLUGIFY = 'MM-dd-yyyy',
}

export function formatPublishedAt(
  publishedAt: Date,
  formatStr = PublishedAtFormat.FULL,
): string {
  return format(publishedAt, formatStr);
}
