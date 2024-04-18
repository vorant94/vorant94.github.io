import { format } from 'date-fns';
import type { FastifyPluginAsync } from 'fastify';
import { groupBy } from 'lodash-es';
import { PublishedAtFormat } from '../../content/index.js';
import { contentType, statusCode } from '../../http/index.js';
import {
  ArchiveList,
  ArchiveListItem,
  DefaultLayout,
  render,
} from '../../ui/index.js';
import { queryPosts } from '../utils/post.query.js';

export const postsHandler: FastifyPluginAsync = async function (app) {
  app.get('/posts', async (_, reply) => {
    const allPosts = await queryPosts();

    const postsByPublishedAt = groupBy(allPosts, (post) =>
      format(post.matter.publishedAt, PublishedAtFormat.YEAR),
    );
    const years = Object.keys(postsByPublishedAt).reverse();

    return reply
      .status(statusCode.ok)
      .type(contentType.html)
      .send(
        render(
          <DefaultLayout
            title={`Posts`}
            currentPath={`/posts`}
            env={app.env}>
            {years.map((year) => (
              <ArchiveList
                title={year}
                key={year}>
                {postsByPublishedAt[year]!.map((post) => (
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
            ))}
          </DefaultLayout>,
        ),
      );
  });
};
