import type { CollectionEntry } from 'astro:content';
import { groupBy } from 'lodash-es';
import type { Color } from './theme';

export type Project = CollectionEntry<'projects'>;

export type ProjectStatus = Project['data']['status'];

export const PROJECT_STATUS_TO_LABEL: Record<ProjectStatus, string> = {
  concept: 'Concept',
  mvp: 'MVP',
  live: 'Live',
  freezed: 'Freezed',
  closed: 'Closed',
};

export const PROJECT_STATUS_TO_BADGE_COLOR: Record<ProjectStatus, Color> = {
  concept: 'neutral',
  mvp: 'yellow',
  live: 'green',
  freezed: 'blue',
  closed: 'indigo',
};

const PROJECT_STATUS_ORDER: Record<ProjectStatus, number> = {
  live: 0,
  mvp: 1,
  concept: 2,
  freezed: 3,
  closed: 4,
};

export function sortProjectsByStatus(projects: Project[]): Project[] {
  return projects.toSorted(
    (a, b) =>
      PROJECT_STATUS_ORDER[a.data.status] - PROJECT_STATUS_ORDER[b.data.status],
  );
}

export function groupProjectsByStatus(
  projects: Project[],
): Record<string, Project[]> {
  return groupBy(projects, ({ data }) => data.status);
}

export function getProjectFullPath({ slug }: Project): string {
  return `/projects/${slug}`;
}
