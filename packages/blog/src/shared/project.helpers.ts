import type { CollectionEntry } from 'astro:content';
import { groupBy } from 'lodash-es';

export type Project = CollectionEntry<'projects'>;

export type ProjectStatus = Project['data']['status'];

export const PROJECT_STATUS_TO_LABEL: Record<ProjectStatus, string> = {
  concept: 'Concept',
  mvp: 'MVP',
  live: 'Live',
  freezed: 'Freezed',
  closed: 'Closed',
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
