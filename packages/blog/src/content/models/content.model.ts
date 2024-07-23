import { z } from "zod";

export const contentSchema = z.object({
	id: z.string(),
	path: z.string(),
	readingTime: z.object({
		text: z.string(),
		minutes: z.number(),
		time: z.number(),
		words: z.number(),
	}),
});

export type ContentModel = z.infer<typeof contentSchema>;

export class ParsingError extends Error {
	constructor(content: ContentModel, error: unknown) {
		super(
			`Failed to parse content ${content.id}, details are ${error instanceof Error ? error.message : JSON.stringify(error)}`,
		);
	}
}
