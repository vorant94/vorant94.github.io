import type { ParsedContent } from '@nuxt/content/types';
import type { ReadingTime } from '~/utils/reading-time';

export interface PostModel extends ParsedContent {
  title: string;
  description: string;
  tags: string[];
  publishedAt: string; // Date
  related?: string[]; // references to other posts
  isPinned?: boolean;
  code?: string; // URL
  coverImage?: string;
  coverImageAlt?: string;
  coverImageDark?: string;

  readingTime: ReadingTime;
}
