import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import { type ReactElement } from 'react';
import { Card, type CardProps } from '../atoms/Card';

export interface StandOutProps extends Pick<CardProps, 'className'> {}

export function StandOut({
  className,
  children,
}: PropsWithChildren<StandOutProps>): ReactElement {
  return <Card className={classNames('m-3', className)}>{children}</Card>;
}
