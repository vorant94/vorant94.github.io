import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { Card, type CardProps } from './Card';

export const StandOut: FunctionComponent<PropsWithChildren<StandOutProps>> =
  function ({ className, children }) {
    return <Card className={classNames('m-3', className)}>{children}</Card>;
  };

export interface StandOutProps extends Pick<CardProps, 'className'> {}
