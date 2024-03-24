import type { ParsedContent } from '@nuxt/content/types';
import type { ReadingTime } from '~/utils/reading-time';

export interface ChangelogModel extends ParsedContent {
  publishedAt: string; // Data
  project: string;
  version: string;

  readingTime: ReadingTime;
}
