import type { ParsedContent } from '@nuxt/content/types';
import type { ReadingTime } from '~/utils/reading-time';

export interface ProjectModel extends ParsedContent {
  name: string;
  slogan: string;
  status: ProjectStatus;
  version?: string;
  isFeatured?: boolean;
  sourceCodeUrl: string; // URL
  productionUrl?: string; // URL
  logo: string;
  logoDark?: string;
  demo: string;
  demoDark?: string;

  readingTime: ReadingTime;
}

export const projectStatuses = [
  'concept',
  'mvp',
  'live',
  'freezed',
  'closed',
] as const;
export type ProjectStatus = (typeof projectStatuses)[number];

export const projectStatusToLabel = {
  concept: 'Concept',
  mvp: 'MVP',
  live: 'Live',
  freezed: 'Freezed',
  closed: 'Closed',
} as const satisfies Record<ProjectStatus, string>;

export const projectStatusOrder = {
  live: 0,
  mvp: 1,
  concept: 2,
  freezed: 3,
  closed: 4,
} as const satisfies Record<ProjectStatus, number>;
