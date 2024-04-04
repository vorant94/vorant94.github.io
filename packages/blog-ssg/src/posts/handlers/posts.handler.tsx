import { listContentFiles, resolveContentPath } from '@/content/path-utils.js';
import { processor } from '@/content/processor.js';
import { PublishedAtFormat } from '@/shared/published-at-format.js';
import { render } from '@/shared/render.js';
import { ArchiveList } from '@/ui/components/ArchiveList.js';
import { ArchiveListItem } from '@/ui/components/ArchiveListItem.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import { compareDesc, format } from 'date-fns';
import type { FastifyPluginAsync } from 'fastify';
import { groupBy } from 'lodash-es';
import { read } from 'to-vfile';
import { postSchema, type PostModel } from '../models/post.model.js';

export const postsHandler: FastifyPluginAsync = async function (app) {
  app.get('/posts', async (_, reply) => {
    const postFiles = await listContentFiles('posts');
    const posts = await parsePostFiles(postFiles);
    const postsByPublishedAt = sortAndGroupPostsByPublishedAt(posts);

    const years = Object.keys(postsByPublishedAt).reverse();

    return reply.type('text/html').send(
      render(
        <DefaultLayout title={`Posts`}>
          {years.map((year) => (
            <ArchiveList
              title={year}
              key={year}>
              {postsByPublishedAt[year]!.map((post) => (
                <ArchiveListItem
                  key={post.matter.title}
                  left={post.matter.title}
                  right={format(
                    post.matter.publishedAt,
                    PublishedAtFormat.SHORT,
                  )}
                  href={`/posts/${post.slug}`}
                />
              ))}
            </ArchiveList>
          ))}
        </DefaultLayout>,
      ),
    );
  });
};

async function parsePostFiles(filePaths: string[]): Promise<PostModel[]> {
  return await Promise.all(
    filePaths.map(async (filePath) => {
      const rawFile = await read(resolveContentPath(`posts/${filePath}`));

      const processedFile = await processor.process(rawFile);

      return postSchema.parse(processedFile.data);
    }),
  );
}

function sortAndGroupPostsByPublishedAt(
  posts: PostModel[],
): Record<string, PostModel[]> {
  const sortedPosts = posts.toSorted((a, b) =>
    compareDesc(a.matter.publishedAt, b.matter.publishedAt),
  );

  return groupBy(sortedPosts, (post) =>
    format(post.matter.publishedAt, PublishedAtFormat.YEAR),
  );
}
