import type { ProjectStatus } from '~/projects/utils/project.model';
import type { TailwindColor } from '~/ui/utils/tailwind';

export const projectStatusToBadgeColor = {
  concept: 'neutral',
  mvp: 'yellow',
  live: 'green',
  freezed: 'blue',
  closed: 'indigo',
} as const satisfies Record<ProjectStatus, TailwindColor>;
