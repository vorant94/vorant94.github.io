/**
 * @description the value of this enum is to avoid memorizing prefixes
 */
export const contentType = {
	html: "text/html",
	xml: "application/xml",
} as const satisfies Record<string, string>;
export type ContentType = (typeof contentType)[keyof typeof contentType];
