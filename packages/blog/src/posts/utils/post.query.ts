import { compareDesc } from 'date-fns';
import type { VFile } from 'vfile';
import {
  getIdFromContentFilePath,
  processor,
  readContentDir,
  readContentFile,
} from '../../content/index.js';
import {
  isPostWithCover,
  postSchema,
  type PostModel,
} from '../models/post.model.js';

export async function queryPosts(): Promise<PostModel[]> {
  const postFilePaths = await readContentDir('posts');

  const posts = await Promise.all(
    postFilePaths.map(async (filePath) => {
      const rawFile = await readContentFile(filePath);

      // TODO make it process only the matter in cases where the content is not needed
      const processedFile = await processor.process(rawFile);
      const parsedPost = postSchema.parse(processedFile.data);
      return adjustPostMatterAssets(parsedPost);
    }),
  );

  return posts.toSorted((a, b) =>
    compareDesc(a.matter.publishedAt, b.matter.publishedAt),
  );
}

export async function queryPostsByIds(ids: string[]): Promise<PostModel[]> {
  const idsSet = new Set(ids);

  const allPostFilePaths = await readContentDir('posts');
  const postFilePaths = allPostFilePaths.filter((filePath) => {
    const id = getIdFromContentFilePath(filePath);
    return idsSet.has(id);
  });

  const posts = await Promise.all(
    postFilePaths.map(async (filePath) => {
      const rawFile = await readContentFile(filePath);

      const processedFile = await processor.process(rawFile);
      const parsedPost = postSchema.parse(processedFile.data);
      return adjustPostMatterAssets(parsedPost);
    }),
  );

  return posts.toSorted((a, b) =>
    compareDesc(a.matter.publishedAt, b.matter.publishedAt),
  );
}

export async function queryPostFile(slug: string): Promise<VFile> {
  const rawFile = await readContentFile(`posts/${slug}/index.md`);

  const processedFile = await processor.process(rawFile);
  const parsedData = postSchema.parse(processedFile.data);
  processedFile.data = adjustPostMatterAssets(parsedData);

  return processedFile;
}

function adjustPostMatterAssets(post: PostModel): PostModel {
  if (!isPostWithCover(post)) {
    return post;
  }

  post.matter.coverImage = `${post.path}/${post.matter.coverImage}`;
  post.matter.coverImageDark = post.matter.coverImageDark
    ? `${post.path}/${post.matter.coverImageDark}`
    : post.matter.coverImageDark;

  return post;
}
