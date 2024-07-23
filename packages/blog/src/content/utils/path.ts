import path from "node:path";
import process from "node:process";

/**
 * content-specific replacement for path.resolve
 */
export function resolveContentPath(contentPath = ""): string {
	return path.resolve(process.cwd(), `content/${contentPath}`);
}
