import { compareDesc } from "date-fns";
import type { VFile } from "vfile";
import { readContentDir, readContentFile } from "../../content/utils/fs.js";
import { processor } from "../../content/utils/processor.js";
import { type ChangelogModel, changelogSchema } from "./changelog.model.js";

export async function findChangelogs(
	projectId = "*",
): Promise<Array<ChangelogModel>> {
	const projectFilePaths = await readContentDir(
		`projects/${projectId}/changelogs`,
	);

	const changelogs = await Promise.all(
		projectFilePaths.map(async (filePath) => {
			const rawFile = await readContentFile(filePath);

			const processedFile = await processor.process(rawFile);

			return changelogSchema.parse(processedFile.data);
		}),
	);

	return changelogs.toSorted((a, b) =>
		compareDesc(a.matter.publishedAt, b.matter.publishedAt),
	);
}

export async function getChangelog(
	projectId: string,
	changelogVersion: string,
): Promise<VFile> {
	const rawFile = await readContentFile(
		`projects/${projectId}/changelogs/${changelogVersion}/index.md`,
	);

	const processedFile = await processor.process(rawFile);
	processedFile.data = changelogSchema.parse(processedFile.data);

	return processedFile;
}
