import { z, type CollectionEntry, type SchemaContext } from 'astro:content';
import { groupBy } from 'lodash-es';
import type { Color } from './theme';

export type Project = CollectionEntry<'projects'>;

const base = z.object({
  name: z.string(),
  slogan: z.string(),
  status: z.enum(['concept', 'mvp', 'live', 'freezed', 'closed']),
  code: z.string().url(),
});

export const projectWithoutCover = base.extend({
  coverImage: z.void(),
});

export const projectWithCover = ({ image }: SchemaContext) =>
  base.extend({
    coverImage: image(),
    coverImageAlt: z.string(),
    coverImageDark: image().nullish(),
  });

export type ProjectWithoutCoverData = z.infer<typeof projectWithoutCover>;
export type ProjectWithCoverData = z.infer<ReturnType<typeof projectWithCover>>;
export type ProjectData = ProjectWithoutCoverData | ProjectWithCoverData;
export type ProjectStatus = ProjectData['status'];

export function isProjectDataWithCover(
  data: ProjectData,
): data is ProjectWithCoverData {
  return 'coverImage' in data;
}

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
