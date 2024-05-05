import type { FunctionComponent } from 'react';
import { cn } from '../../ui/index.js';

/**
 * @description need to use custom web element instead of react wrapper here
 * since we are not really running the react app, we just using JSX as a template language
 */
export const ThemedLottie: FunctionComponent<ThemedLottieProps> = function ({
  srcDark,
  src,
  autoplay = true,
}) {
  return (
    <>
      <lottie-player
        class={cn(`dark:hidden`)}
        src={src}
        autoplay={autoplay}></lottie-player>
      <lottie-player
        class={cn(`hidden dark:flex`)}
        src={srcDark}
        autoplay={autoplay}></lottie-player>
    </>
  );
};

// TODO extend here from lottie-player lit element, the catch is to import its type
//  without causing side-effect of trying to register custom element on the server side
export interface ThemedLottieProps {
  src: string;
  srcDark: string;
  autoplay?: boolean;
}
