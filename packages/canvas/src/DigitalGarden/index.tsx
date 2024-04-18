import clsx from 'clsx';
import type { FC } from 'react';
import dark from './dark.png';
import styles from './index.module.css';
import light from './light.png';

export const DigitalGarden: FC = function () {
  return (
    <div className="relative w-dvw h-dvh">
      <img
        src={dark}
        alt=""
        className="absolute top-0 left-0 w-full h-full"
      />
      <img
        src={light}
        alt=""
        className={clsx(
          styles.light,
          `light absolute top-0 left-0 w-full h-full`,
        )}
      />
    </div>
  );
};
