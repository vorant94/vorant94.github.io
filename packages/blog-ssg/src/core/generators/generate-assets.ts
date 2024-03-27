import { env } from '@/core/env.js';
import fs from 'fs-extra';
import path from 'node:path';
import process from 'node:process';

export const assets = new Map<string, string>();

export async function generateAssets() {
  await Promise.all(
    Array.from(assets.entries()).map(async ([src, dest]) => {
      const filename = path.basename(src);
      fs.copyFile(
        src,
        path.resolve(process.cwd(), env.OUTPUT_DIR, dest, filename),
      );
    }),
  );
}
