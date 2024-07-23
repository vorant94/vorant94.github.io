import path from "node:path";

export function getProjectIdFromChangelogPath(filepath: string): string {
	const filepathParts = filepath.split(path.sep);
	if (filepathParts.length < 5) {
		throw new Error(`Invalid changelog path: ${filepath}`);
	}

	return filepath.split(path.sep).at(2)!;
}
