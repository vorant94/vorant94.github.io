import { contentProcessor } from '@/content/content-processor.js';
import { resolveContent } from '@/content/resolve-content.js';
import { PublishedAtFormat } from '@/shared/published-at-format.js';
import { render } from '@/shared/render.js';
import { ArchiveList } from '@/ui/components/ArchiveList.js';
import { ArchiveListItem } from '@/ui/components/ArchiveListItem.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import { compareDesc, format } from 'date-fns';
import type { FastifyPluginAsync } from 'fastify';
import { groupBy } from 'lodash-es';
import fs from 'node:fs/promises';
import { read } from 'to-vfile';
import { postSchema, type PostModel } from '../models/post.model.js';

export const postsHandler: FastifyPluginAsync = async function (app) {
  app.get('/posts', async (_, reply) => {
    const postFilesPaths = await listPostFilesPaths();
    const posts = await parsePostFiles(postFilesPaths);
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

async function listPostFilesPaths(): Promise<string[]> {
  const contentFilesPaths = await fs.readdir(resolveContent('posts'), {
    recursive: true,
    encoding: 'utf-8',
  });

  return contentFilesPaths.filter((f) => f.endsWith('index.md'));
}

async function parsePostFiles(filePaths: string[]): Promise<PostModel[]> {
  return await Promise.all(
    filePaths.map(async (filePath) => {
      const rawFile = await read(resolveContent(`posts/${filePath}`));

      const processedFile = await contentProcessor.process(rawFile);

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
