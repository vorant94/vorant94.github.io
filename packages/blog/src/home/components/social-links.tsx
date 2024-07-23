import type { FC, ReactNode } from "react";
import { ButtonLink } from "../../ui/components/button-link.js";
import { Divider } from "../../ui/components/divider.js";
import { Icon } from "../../ui/components/icon.js";
import { Title } from "../../ui/components/title.js";
import { cn } from "../../ui/utils/cn.js";

export const SocialLinks: FC = () => (
	<div className={cn("flex flex-col gap-2")}>
		<Divider>
			<Title base="h3">How to reach me</Title>
		</Divider>
		<menu className={cn("mx-auto grid grid-cols-3 gap-5")}>{socialLinks}</menu>
	</div>
);

const socialLinksMeta = [
	{
		glyph: "linked-in",
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/vorant94/",
	},
	{
		glyph: "github",
		label: "Github",
		url: "https://github.com/vorant94/",
	},
	{
		glyph: "medium",
		label: "Medium",
		url: "https://vorant94.medium.com/",
	},
	{
		glyph: "stack-overflow",
		label: "Stack Overflow",
		url: "https://stackoverflow.com/users/4995200/vorant94",
	},
	{
		glyph: "telegram",
		label: "Telegram",
		url: "https://t.me/vorant94/",
	},
	{
		glyph: "twitter",
		label: "Twitter / X",
		url: "https://twitter.com/vorant94",
	},
] as const;

const socialLinks: Array<ReactNode> = socialLinksMeta.map((socialLink) => (
	<li key={socialLink.url}>
		<ButtonLink
			variant="outlined"
			href={socialLink.url}
			target="_blank"
			className={cn(
				"flex h-24 w-24 flex-col items-center justify-center gap-2 p-2 text-slate-800 dark:text-slate-100",
			)}
		>
			<span className="text-xl">
				<Icon glyph={socialLink.glyph} />
			</span>
			<span className="max-w-full truncate">{socialLink.label}</span>
		</ButtonLink>
	</li>
));
