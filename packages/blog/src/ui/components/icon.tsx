import type { FC } from "react";
import { cn } from "../utils/cn.js";

export const Icon: FC<IconProps> = ({ glyph }) => (
	<i className={cn(iconGlyphToFaIcon[glyph])} />
);

export interface IconProps {
	glyph: IconGlyph;
}

export const iconGlyphs = [
	"linked-in",
	"github",
	"medium",
	"stack-overflow",
	"telegram",
	"twitter",
	"rss",
	"menu",
	"close",
	"globe",
] as const;
export type IconGlyph = (typeof iconGlyphs)[number];

export const iconGlyphToFaIcon = {
	"linked-in": "fa-brands fa-linkedin",
	github: "fa-brands fa-github",
	medium: "fa-brands fa-medium",
	"stack-overflow": "fa-brands fa-stack-overflow",
	telegram: "fa-brands fa-telegram",
	twitter: "fa-brands fa-x-twitter",
	rss: "fa-solid fa-rss",
	menu: "fa-solid fa-bars",
	close: "fa-solid fa-xmark",
	globe: "fa-solid fa-globe",
} as const satisfies Record<IconGlyph, string>;
