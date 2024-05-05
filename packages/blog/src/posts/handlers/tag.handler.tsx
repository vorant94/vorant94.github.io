import { format } from 'date-fns';
import type { FastifyPluginAsync } from 'fastify';
import { PublishedAtFormat } from '../../content/index.js';
import { contentType, statusCode } from '../../http/index.js';
import {
  ArchiveList,
  ArchiveListItem,
  DefaultLayout,
  render,
} from '../../ui/index.js';
import { queryPosts } from '../utils/post.query.js';

export const tagHandler: FastifyPluginAsync = async function (app) {
  app.get<{ Params: { tag: string } }>('/tags/:tag', async (request, reply) => {
    const allPosts = await queryPosts();

    const postsByTag = allPosts.filter((post) =>
      post.matter.tags.includes(request.params.tag),
    );

    return reply
      .status(statusCode.ok)
      .type(contentType.html)
      .send(
        render(
          <DefaultLayout
            title={`${request.params.tag} posts`}
            currentPath={`/tags/${request.params.tag}`}
            env={app.env}>
            <ArchiveList title={`#${request.params.tag}`}>
              {postsByTag.map((post) => (
                <ArchiveListItem
                  key={post.id}
                  left={post.matter.title}
                  right={format(
                    post.matter.publishedAt,
                    PublishedAtFormat.SHORT,
                  )}
                  href={post.path}
                />
              ))}
            </ArchiveList>
          </DefaultLayout>,
        ),
      );
  });
};
