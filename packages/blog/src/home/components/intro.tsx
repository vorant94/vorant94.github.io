import type { FC } from "react";
import { StandOut } from "../../ui/components/stand-out.js";
import { Text } from "../../ui/components/text.js";
import { ThemedImage } from "../../ui/components/themed-image.js";
import { cn } from "../../ui/utils/cn.js";

export const Intro: FC = () => (
	<StandOut className="items-center my-4 dark:!border-2 dark:!rounded-lg dark:!border-sky-200 dark:rotate-3 dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_rgb(6,182,255),0_0_15px_rgb(6,182,255),0_0_30px_rgb(6,182,255)]">
		<div className="hidden lg:block shrink-0">
			<ThemedImage
				src="/home/intro-logo.webp"
				srcDark="/home/intro-logo-dark.webp"
				alt="Logo"
				width="80"
			/>
		</div>

		<div className="flex flex-col gap-2">
			<Text base="strong">Hi, there, I'm Mordechai! 👋</Text>
			<Text
				base="span"
				className={cn("text-sm font-light")}
			>
				Welcome to my digital garden, here I write about all sorts of things
				(mostly about technologies, a little bit on gaming, traveling and
				self-reflecting)
			</Text>
			<Text
				base="span"
				className={cn("text-sm font-light")}
			>
				Make yourself at home, take a sit and grab something to{" "}
				<span className="line-through">drink</span> read
			</Text>
		</div>
	</StandOut>
);
