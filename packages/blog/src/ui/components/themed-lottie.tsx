import type { FunctionComponent } from "react";
import { cn } from "../utils/cn.js";

/**
 * @description need to use custom web element instead of react wrapper here
 * since we are not really running the react app, we just using JSX as a template language
 */
export const ThemedLottie: FunctionComponent<ThemedLottieProps> = ({
	srcDark,
	src,
	autoplay = true,
}) => (
	<>
		<lottie-player
			class={cn("dark:hidden")}
			src={src}
			autoplay={autoplay}
		/>
		<lottie-player
			class={cn("hidden dark:flex")}
			src={srcDark}
			autoplay={autoplay}
		/>
	</>
);

// TODO extend here from lottie-player lit element, the catch is to import its type
//  without causing side-effect of trying to register custom element on the server side
export interface ThemedLottieProps {
	src: string;
	srcDark: string;
	autoplay?: boolean;
}
