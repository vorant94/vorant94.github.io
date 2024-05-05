import type { FastifyPluginAsync } from 'fastify';
import { groupBy } from 'lodash-es';
import { contentType, statusCode } from '../../http/index.js';
import { DefaultLayout, render } from '../../ui/index.js';
import { ProjectTiledList } from '../components/ProjectTiledList.js';
import { ProjectTiledListItem } from '../components/ProjectTiledListItem.js';
import {
  projectStatusOrder,
  projectStatusToLabel,
  type ProjectStatus,
} from '../models/project.model.js';
import {
  getProjectIdFromChangelogPath,
  queryAllChangelogs,
} from '../utils/changelog.query.js';
import { queryProjects } from '../utils/project.query.js';

export const projectsHandler: FastifyPluginAsync = async function (app) {
  app.get('/projects', async (_, reply) => {
    const [allProjects, allChangelogs] = await Promise.all([
      queryProjects(),
      queryAllChangelogs(),
    ]);

    const projectsByStatus = groupBy(
      allProjects,
      (project) => project.matter.status,
    );

    const statuses = (
      Object.keys(projectsByStatus) as ProjectStatus[]
    ).toSorted((a, b) => projectStatusOrder[a] - projectStatusOrder[b]);

    const changelogsByProject = groupBy(allChangelogs, (changelog) =>
      getProjectIdFromChangelogPath(changelog.path),
    );

    return reply
      .status(statusCode.ok)
      .type(contentType.html)
      .send(
        render(
          <DefaultLayout
            title={`Projects`}
            currentPath={`/projects`}
            env={app.env}>
            {statuses.map((status) => (
              <ProjectTiledList
                title={projectStatusToLabel[status]}
                key={status}>
                {projectsByStatus[status]!.map((project) => (
                  <ProjectTiledListItem
                    key={project.id}
                    project={project}
                    changelogs={changelogsByProject[project.id]!}
                  />
                ))}
              </ProjectTiledList>
            ))}
          </DefaultLayout>,
        ),
      );
  });
};
