import type { VFile } from 'vfile';
import {
  processor,
  readContentDir,
  readContentFile,
} from '../../content/index.js';
import { projectSchema, type ProjectModel } from '../models/project.model.js';

export async function queryProjects(): Promise<ProjectModel[]> {
  const projectFilePaths = await readContentDir('projects');

  return await Promise.all(
    projectFilePaths.map(async (filePath) => {
      const rawFile = await readContentFile(filePath);

      const processedFile = await processor.process(rawFile);
      const parsedProject = projectSchema.parse(processedFile.data);
      return adjustProjectMatterAssets(parsedProject);
    }),
  );
}

export async function queryProject(id: string): Promise<ProjectModel> {
  const rawFile = await readContentFile(`projects/${id}/index.md`);

  const processedFile = await processor.process(rawFile);
  const parsedProject = projectSchema.parse(processedFile.data);
  return adjustProjectMatterAssets(parsedProject);
}

export async function queryProjectFile(id: string): Promise<VFile> {
  const rawFile = await readContentFile(`projects/${id}/index.md`);

  const processedFile = await processor.process(rawFile);
  const parsedProject = projectSchema.parse(processedFile.data);
  processedFile.data = adjustProjectMatterAssets(parsedProject);

  return processedFile;
}

function adjustProjectMatterAssets(project: ProjectModel): ProjectModel {
  project.matter.logoImage = `${project.path}/${project.matter.logoImage}`;
  project.matter.darkLogoImage = project.matter.darkLogoImage
    ? `${project.path}/${project.matter.darkLogoImage}`
    : project.matter.darkLogoImage;

  project.matter.demoImage = `${project.path}/${project.matter.demoImage}`;
  project.matter.darkDemoImage = project.matter.darkDemoImage
    ? `${project.path}/${project.matter.darkDemoImage}`
    : project.matter.darkDemoImage;

  return project;
}
