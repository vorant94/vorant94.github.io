import type { Color } from '@digital-garden/utils';
import { z, type CollectionEntry, type SchemaContext } from 'astro:content';
import { groupBy } from 'lodash-es';

export type Project = CollectionEntry<'projects'>;

export const projectStatuses = [
  'concept',
  'mvp',
  'live',
  'freezed',
  'closed',
] as const;
export type ProjectStatus = (typeof projectStatuses)[number];

const base = z.object({
  name: z.string(),
  slogan: z.string(),
  status: z.enum(projectStatuses),
  isFeatured: z.boolean().default(false),
  sourceCodeUrl: z.string().url(),
  productionUrl: z.string().url().nullish(),
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

export const projectStatusToLabel = {
  concept: 'Concept',
  mvp: 'MVP',
  live: 'Live',
  freezed: 'Freezed',
  closed: 'Closed',
} as const satisfies Record<ProjectStatus, string>;

export const projectStatusToBadgeColor = {
  concept: 'neutral',
  mvp: 'yellow',
  live: 'green',
  freezed: 'blue',
  closed: 'indigo',
} as const satisfies Record<ProjectStatus, Color>;

export const projectStatusOrder = {
  live: 0,
  mvp: 1,
  concept: 2,
  freezed: 3,
  closed: 4,
} as const satisfies Record<ProjectStatus, number>;

export function groupProjectsByStatus(
  projects: Project[],
): Partial<Record<ProjectStatus, Project[]>> {
  return groupBy(projects, ({ data }) => data.status);
}

export function getProjectFullPath({ slug }: Project): string {
  return `/projects/${slug}`;
}
