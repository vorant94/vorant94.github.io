import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import { Badge } from './Badge.tsx';
import { Text } from './Text.tsx';
import { Title } from './Title.tsx';

export const ProjectCard: FunctionComponent = function () {
  return (
    <div
      style={{
        '--bg-image-url': `url(https://picsum.photos/seed/picsum/200/300)`,
      }}
      className={classNames(
        'w-56 h-64 flex flex-col shrink-0 cursor-pointer',
        'bg-[image:var(--bg-image-url)] bg-cover bg-center rounded-2xl',
      )}>
      <div className="bg-black bg-opacity-10 flex-1 flexflex-col items-start p-4 rounded-2xl">
        <Badge
          color="green"
          className="mb-2">
          Lorem.
        </Badge>
        <Title>Lorem ipsum dolor.</Title>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </div>
    </div>
  );
};
