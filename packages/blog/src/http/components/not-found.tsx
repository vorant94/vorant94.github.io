import type { FC } from "react";
import { ThemedLottie } from "../../ui/components/themed-lottie.js";

export const NotFound: FC = () => (
	<ThemedLottie
		src={"/ui/lottie-404.json"}
		srcDark={"/ui/lottie-404-dark.json"}
	/>
);
