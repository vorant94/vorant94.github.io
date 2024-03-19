import { cn } from '@digital-garden/utils';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { Card, type CardProps } from './Card/Card.tsx';

export const StandOut: FunctionComponent<PropsWithChildren<StandOutProps>> =
  function ({ className, children }) {
    return <Card className={cn('mx-3', className)}>{children}</Card>;
  };

export interface StandOutProps extends Pick<CardProps, 'className'> {}
