import type { CollectionEntry } from 'astro:content';
import { groupBy } from 'lodash-es';

export type Changelog = CollectionEntry<'changelogs'>;

export function groupChangelogsByProject(
  changelogs: Changelog[],
): Record<string, Changelog[]> {
  return groupBy(changelogs, ({ data }) => data.project.slug);
}

export function getChangelogFullPath({ data, slug }: Changelog): string {
  return `/projects/${data.project.slug}/changelogs/${slug.split('__')[1]}`;
}
