import { describe, expect, it } from "vitest";
import { getProjectIdFromChangelogPath } from "../utils/get-project-id-from-changelog-path.js";

describe("getProjectIdFromChangelogPath", () => {
	it("should return project id from the file path", () => {
		const input = "/projects/digital-garden/changelogs/100";
		const expected = "digital-garden";

		const actual = getProjectIdFromChangelogPath(input);

		expect(actual).toEqual(expected);
	});

	it("should throw an error if the file path is invalid", () => {
		const input = "projects/digital-garden/changelogs/100";

		expect(() => getProjectIdFromChangelogPath(input)).toThrowError(
			`Invalid changelog path: ${input}`,
		);
	});
});
