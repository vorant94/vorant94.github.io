import type { FC } from 'react';
import { ThemedLottie } from '../../ui/index.js';

export const NotFound: FC = function () {
  return (
    <ThemedLottie
      src={`/ui/lottie-404.json`}
      srcDark={`/ui/lottie-404-dark.json`}
    />
  );
};
