import fg from 'fast-glob';
import { read } from 'to-vfile';
import { VFile } from 'vfile';
import { resolveContentPath } from './path.js';

/**
 * content-specific replacement for fs.readdir with filter for only content files (excluding content assets files)
 * @returns list of content file paths relative to content root directory
 */
export async function readContentDir(prefix: string = ''): Promise<string[]> {
  return await fg(`${prefix}/**/index.md`, {
    absolute: false,
    cwd: resolveContentPath(),
  });
}

/**
 * content-specific replacement for fs.readFile resulting in VFile for easier integration with unified package
 * @param filepath path of the target file relative to the content root directory
 */
export async function readContentFile(filepath: string): Promise<VFile> {
  return await read(resolveContentPath(filepath));
}
