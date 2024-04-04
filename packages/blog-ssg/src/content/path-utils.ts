import fg from 'fast-glob';
import path from 'node:path';
import process from 'node:process';

export function resolveContentPath(contentPath: string = ''): string {
  return path.resolve(process.cwd(), `content/${contentPath}`);
}

export async function listContentFiles(prefix: string = ''): Promise<string[]> {
  return await fg(`**/index.md`, {
    absolute: false,
    cwd: resolveContentPath(prefix),
  });
}
