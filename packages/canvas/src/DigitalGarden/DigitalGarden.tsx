import { Layout } from '@/shared/Layout.tsx';
import { cn } from '@digital-garden/utils';
import type { FunctionComponent } from 'react';
import styles from './DigitalGarden.module.css';
import dark from './dark.png';
import light from './light.png';

export const DigitalGarden: FunctionComponent = function () {
  return (
    <Layout>
      <div className={cn('relative w-dvw h-dvh')}>
        <img
          src={dark}
          className={cn('absolute top-0 left-0 w-full h-full')}
          alt=""
        />
        <img
          src={light}
          className={cn(styles.light, 'absolute top-0 left-0 w-full h-full')}
          alt=""
        />
      </div>
    </Layout>
  );
};
