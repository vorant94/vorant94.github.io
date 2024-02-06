import { Player, type IPlayerProps } from '@lottiefiles/react-lottie-player';
import type { FunctionComponent } from 'react';
import { useMediaQuery } from 'react-responsive';

export const ThemedLottie: FunctionComponent<ThemedLottieProps> = function ({
  srcDark,
  src,
  ...props
}) {
  const isDark = useMediaQuery({ query: '(prefers-color-scheme: dark)' });

  const themedSrc = isDark && srcDark ? srcDark : src;

  return (
    <Player
      src={themedSrc}
      {...props}></Player>
  );
};

export interface ThemedLottieProps extends IPlayerProps {
  srcDark?: IPlayerProps['src'];
}
