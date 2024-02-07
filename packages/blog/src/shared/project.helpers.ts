import type { CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export type ProjectStatus = Project['data']['status'];

export const PROJECT_STATUS_TO_LABEL: Record<ProjectStatus, string> = {
  draft: 'Draft',
  'in progress': 'In Progress',
  mvp: 'MVP',
  prod: 'Production',
  freezed: 'Freezed',
  closed: 'Closed',
};
