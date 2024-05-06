import { compareDesc } from 'date-fns';
import path from 'node:path';
import type { VFile } from 'vfile';
import {
  processor,
  readContentDir,
  readContentFile,
} from '../../content/index.js';
import {
  changelogSchema,
  type ChangelogModel,
} from '../models/changelog.model.js';

export async function queryAllChangelogs(): Promise<ChangelogModel[]> {
  const projectFilePaths = await readContentDir(`projects/*/changelogs`);

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

export async function queryChangelogsByProject(
  projectId: string,
): Promise<ChangelogModel[]> {
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

export async function queryChangelog(
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

export function getProjectIdFromChangelogPath(filepath: string): string {
  const filepathParts = filepath.split(path.sep);
  if (filepathParts.length < 5) {
    throw new Error(`Invalid changelog path: ${filepath}`);
  }

  return filepath.split(path.sep).at(2)!;
}
