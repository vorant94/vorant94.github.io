import { env } from '@/core/env.js';
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

  // livereload is needed only during local development
  if (env.CI) {
    return;
  }

  await fs.appendFile(
    path.resolve(process.cwd(), outputDir, filename),
    `<script src="http://localhost:35729/livereload.js?snipver=1"></script>`,
  );
}

const outputDir = '.output';
