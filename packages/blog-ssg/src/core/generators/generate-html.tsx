import fs from 'fs-extra';
import path from 'node:path';
import process from 'node:process';
import type { VNode } from 'preact';
import { renderToString } from 'preact-render-to-string';

export async function generateHtml(
  Page: VNode,
  filename: string,
): Promise<void> {
  filename += '.html';

  await fs.ensureDir(path.resolve(process.cwd(), outputDir));

  await fs.writeFile(
    path.resolve(process.cwd(), outputDir, filename),
    `<!doctype html>${renderToString(Page)}`,
  );
}

const outputDir = '.output';
