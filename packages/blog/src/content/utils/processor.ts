import path from "node:path";
import rehypeShiki from "@shikijs/rehype";
import type { Root, Text } from "hast";
import { h } from "hastscript";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkReadingTime from "remark-reading-time";
import remarkRehype from "remark-rehype";
import { type Plugin, unified } from "unified";
import { visit } from "unist-util-visit";
import { matter } from "vfile-matter";
import { isHttpUrl } from "../../http/utils/url.js";
import { cn } from "../../ui/utils/cn.js";
import type { ContentModel } from "../models/content.model.js";
import { resolveContentPath } from "./path.js";

const remarkFrontmatterParse: Plugin = () => (_, file) => {
	matter(file);
};

const remarkContent: Plugin = () => (_, file) => {
	if (!file.dirname) {
		throw new Error("Expected dirname to be defined");
	}

	(file.data as ContentModel).id = file.dirname
		.split(path.sep)
		.at(-1) as string;
	(file.data as ContentModel).path = file.dirname.replace(
		resolveContentPath(),
		"",
	);
};

const rehypeModify: Plugin<[], Root> = () => (root, file) => {
	visit(root, "element", (element) => {
		switch (true) {
			case element.tagName.startsWith("h"): {
				element.properties.className = cn(
					"group",
					element.properties.className,
				);
				break;
			}
			case element.tagName === "img" &&
				!isHttpUrl(element.properties.src as string): {
				element.properties.src = `${(file.data as ContentModel).path}/${element.properties.src}`;
				break;
			}
		}
	});
};

export const processor = unified()
	.use(remarkParse) // parses the content itself
	.use(remarkFrontmatter) // adds support for yaml frontmatter so it is treated separately from other content
	.use(remarkFrontmatterParse) // parses frontmatter and attaches it as metadata
	.use(remarkContent) // attach common content meta stuff
	.use(remarkReadingTime, { name: "readingTime" }) // adds reading time
	.use(remarkGfm) // add footnotes support
	.use(remarkRehype) // converts content tree to html tree
	.use(rehypeSlug) // adds ids to headings
	.use(rehypeModify) // adds .group class to headings so autolink heading from below will work, adjust image paths so they work regardless of trailing slash
	.use(rehypeAutolinkHeadings, {
		behavior: "append",
		content() {
			return h("span.ml-2.invisible.text-sm.group-hover:visible", "🔗");
		},
		properties({ children }) {
			const text = children.find(
				(child): child is Text => child.type === "text",
			);
			return {
				className: "no-underline",
				ariaLabel: text?.value,
			};
		},
	}) // adding nice hoverable links to headings
	.use(rehypeExternalLinks, { target: "_blank" }) // open external links in new tab
	.use(rehypeShiki, {
		themes: {
			light: "github-light-default",
			dark: "github-dark-default",
		},
	}) // code syntax highlighting
	.use(rehypeStringify); // renders html tree to actual html
