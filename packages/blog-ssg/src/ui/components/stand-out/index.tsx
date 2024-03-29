import { cn } from '@/core/cn.js';
import type { FC, PropsWithChildren } from 'react';
import { Card, type CardProps } from '../card/index.js';

export const StandOut: FC<PropsWithChildren<StandOutProps>> = function ({
  className,
  children,
}) {
  return <Card className={cn('mx-3', className)}>{children}</Card>;
};

export interface StandOutProps extends Pick<CardProps, 'className'> {}
