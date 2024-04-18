import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import {
  projectStatusToLabel,
  type ProjectStatus,
} from '../../projects/index.js';
import { Badge, type TailwindColor } from '../../ui/index.js';

export const Version: FC<PropsWithChildren<VersionProps>> = function ({
  status = 'live',
  showStatus,
  children,
  ...rest
}) {
  return (
    <Badge
      color={projectStatusToBadgeColor[status]}
      {...rest}>
      {showStatus && projectStatusToLabel[status]} {children}
    </Badge>
  );
};

export interface VersionProps
  extends Omit<ComponentPropsWithoutRef<'span'>, 'color'> {
  status?: ProjectStatus;
  showStatus?: boolean;
}

const projectStatusToBadgeColor = {
  concept: 'neutral',
  mvp: 'yellow',
  live: 'green',
  freezed: 'blue',
  closed: 'indigo',
} as const satisfies Record<ProjectStatus, TailwindColor>;
