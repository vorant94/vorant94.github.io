import type { FastifyPluginAsync } from 'fastify';
import { contentType, statusCode } from '../../http/index.js';
import { PinnedPosts, RecentPosts, queryPosts } from '../../posts/index.js';
import { FeaturedProjects, queryProjects } from '../../projects/index.js';
import { DefaultLayout, render } from '../../ui/index.js';
import { Intro } from '../components/Intro.js';

export const homeHandler: FastifyPluginAsync = async function (app) {
  app.get('/', async (_, reply) => {
    const [allPosts, allProjects] = await Promise.all([
      queryPosts(),
      queryProjects(),
    ]);

    const pinnedPosts = allPosts.filter((post) => post.matter.isPinned);

    const recentPosts = allPosts.slice(0, 3);

    const featuredProjects = allProjects.filter(
      (project) => project.matter.isFeatured,
    );

    return reply
      .status(statusCode.ok)
      .type(contentType.html)
      .send(
        render(
          <DefaultLayout
            currentPath={'/'}
            env={app.env}>
            <PinnedPosts posts={pinnedPosts} />

            <Intro />

            <FeaturedProjects projects={featuredProjects} />

            <RecentPosts posts={recentPosts} />
          </DefaultLayout>,
        ),
      );
  });
};
