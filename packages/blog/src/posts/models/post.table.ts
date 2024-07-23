import { compareDesc } from "date-fns";
import type { VFile } from "vfile";
import { ParsingError } from "../../content/models/content.model.js";
import {
	getIdFromContentFilePath,
	readContentDir,
	readContentFile,
} from "../../content/utils/fs.js";
import { processor } from "../../content/utils/processor.js";
import { isPostWithCover, postSchema, type PostModel } from "./post.model.js";

export async function findPosts(
	ids: Array<string> = [],
): Promise<Array<PostModel>> {
	let postFilePaths = await readContentDir("posts");

	const idsSet = new Set(ids);
	if (idsSet.size) {
		postFilePaths = postFilePaths.filter((filePath) => {
			const id = getIdFromContentFilePath(filePath);
			return idsSet.has(id);
		});
	}

	const posts = await Promise.all(
		postFilePaths.map(async (filePath) => {
			const rawFile = await readContentFile(filePath);

			// TODO make it process only the matter in cases where the content is not needed
			const processedFile = await processor.process(rawFile);

			let parsedPost: PostModel;
			try {
				parsedPost = postSchema.parse(processedFile.data);
			} catch (e) {
				throw new ParsingError(processedFile.data as PostModel, e);
			}

			return adjustPostMatterAssets(parsedPost);
		}),
	);

	return posts.toSorted((a, b) =>
		compareDesc(a.matter.publishedAt, b.matter.publishedAt),
	);
}

export async function getPostFile(slug: string): Promise<VFile> {
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
	post.matter.darkCoverImage = post.matter.darkCoverImage
		? `${post.path}/${post.matter.darkCoverImage}`
		: post.matter.darkCoverImage;

	return post;
}
