import path from 'node:path';
import process from 'node:process';

export function resolveContent(contentPath: string): string {
  return path.resolve(process.cwd(), `content/${contentPath}`);
}
