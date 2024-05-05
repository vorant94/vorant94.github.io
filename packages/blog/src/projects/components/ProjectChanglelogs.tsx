import { format } from 'date-fns';
import type { FC } from 'react';
import { PublishedAtFormat } from '../../content/index.js';
import { ArchiveList, ArchiveListItem } from '../../ui/index.js';
import type { ChangelogModel } from '../models/changelog.model.js';

export const ProjectChangelogs: FC<ProjectChangelogsProps> = function ({
  changelogs,
}) {
  return (
    <ArchiveList title={'Changelogs'}>
      {changelogs.map((changelog) => (
        <ArchiveListItem
          key={changelog.id}
          left={changelog.matter.version}
          right={format(changelog.matter.publishedAt, PublishedAtFormat.SHORT)}
          href={changelog.path}
        />
      ))}
    </ArchiveList>
  );
};

export interface ProjectChangelogsProps {
  changelogs: ChangelogModel[];
}
