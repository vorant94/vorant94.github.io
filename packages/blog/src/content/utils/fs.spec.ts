import assert from "node:assert";
import { describe, it } from "node:test";
import { getIdFromContentFilePath } from "./fs.js";

describe("getIdFromContentFilePath", () => {
	it("should return the slug from the file path", async () => {
		const input =
			"posts/branding-an-angular-app-with-docker-volumes-and-css3-variables/index.md";
		const expected =
			"branding-an-angular-app-with-docker-volumes-and-css3-variables";

		const actual = getIdFromContentFilePath(input);

		assert.equal(actual, expected);
	});

	it("should throw an error if the file path is invalid", () => {
		const input =
			"posts/branding-an-angular-app-with-docker-volumes-and-css3-variables";

		assert.throws(() => getIdFromContentFilePath(input), {
			message: `Invalid content file path: ${input}`,
		});
	});

	it("should throw an error if the slug cannot be extracted", async () => {
		const input = "posts/index.md";

		assert.throws(() => getIdFromContentFilePath(input), {
			message: `Invalid content file path: ${input}`,
		});
	});
});
