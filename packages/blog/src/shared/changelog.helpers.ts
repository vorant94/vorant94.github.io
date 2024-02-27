import type { CollectionEntry } from 'astro:content';
import { compareDesc } from 'date-fns';
import { groupBy } from 'lodash-es';
import { formatPublishedAt, PublishedAtFormat } from './collection.helpers';

export type Changelog = CollectionEntry<'changelogs'>;

export function groupChangelogsByProject(
  changelogs: Changelog[],
): Record<string, Changelog[]> {
  return groupBy(changelogs, ({ data }) => data.project.slug);
}

export function sortChangelogsByPublishedAt(
  changelogs: Changelog[],
): Changelog[] {
  return changelogs.sort((a, b) =>
    compareDesc(a.data.publishedAt, b.data.publishedAt),
  );
}

export function getChangelogFullPath({ data }: Changelog): string {
  return `/projects/${data.project.slug}/changelogs/${formatPublishedAt(data.publishedAt, PublishedAtFormat.SLUGIFY)}`;
}
