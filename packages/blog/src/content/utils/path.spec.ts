import path from "node:path";
import process from "node:process";
import { describe, expect, it } from "vitest";
import { resolveContentPath } from "./path.js";

describe("resolveContentPath", () => {
	it("should resolve absolute path to content", () => {
		const input = "posts";
		const expected = path.resolve(process.cwd(), "content/posts");

		const actual = resolveContentPath(input);
		expect(actual).toEqual(expected);
	});

	it("should ignore leading slash", () => {
		const input = "/posts";
		const expected = path.resolve(process.cwd(), "content/posts");

		const actual = resolveContentPath(input);
		expect(actual).toEqual(expected);
	});
});
