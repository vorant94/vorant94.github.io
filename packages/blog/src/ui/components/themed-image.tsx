import type { ComponentPropsWithoutRef, FC } from "react";

// in some cases you must set both height and width or prefer width over height because of this tailwindcss DefaultLayout
// https://github.com/tailwindlabs/tailwindcss/issues/506
export const ThemedImage: FC<ThemedImageProps> = ({
	src,
	srcDark,
	...rest
}) => (
	<picture>
		{srcDark && (
			<source
				srcSet={srcDark}
				media="(prefers-color-scheme:dark)"
			/>
		)}
		{/* biome-ignore lint/a11y/useAltText: alt-text is controlled by a parent */}
		<img
			src={src}
			{...rest}
		/>
	</picture>
);

export interface ThemedImageProps extends ComponentPropsWithoutRef<"img"> {
	srcDark?: string | null;
}
