import {
  getChangelogFullPath,
  type Changelog,
} from '@/shared/changelog.helpers.ts';
import {
  PublishedAtFormat,
  formatEntryPublishedAt,
} from '@/shared/collection.helpers.ts';
import type { FunctionComponent } from 'react';
import { ArchiveList } from './ArchiveList/ArchiveList.tsx';
import { ArchiveListItem } from './ArchiveList/ArchiveListItem.tsx';

export const ProjectChangelogs: FunctionComponent<ProjectChangelogsProps> =
  function ({ changelogs }) {
    return (
      <ArchiveList>
        {changelogs.map((changelog) => (
          <ArchiveListItem
            left={`v${changelog.data.version}`}
            right={formatEntryPublishedAt(
              changelog.data.publishedAt,
              PublishedAtFormat.SHORT,
            )}
            href={getChangelogFullPath(changelog)}
          />
        ))}
      </ArchiveList>
    );
  };

export interface ProjectChangelogsProps {
  changelogs: Changelog[];
}
