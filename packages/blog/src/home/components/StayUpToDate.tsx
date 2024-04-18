import type { FC } from 'react';
import { Divider, Link, Text, Title, cn } from '../../ui/index.js';

export const StayUpToDate: FC = function () {
  return (
    <div className={cn('flex flex-col gap-2')}>
      <Divider>
        <Title base="h3">Stay up to date</Title>
      </Divider>

      <Text base="span">
        If you wish to be up to date with new posts you can{' '}
        <Link
          href="/rss.xml"
          target="_blank">
          subscribe with RSS
        </Link>
      </Text>

      <Text base="span">
        There will also be an email newsletter somewhere in the future
      </Text>
    </div>
  );
};
