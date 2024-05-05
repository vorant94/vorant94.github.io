import type { FC } from 'react';
import type { PostModel } from '../models/post.model.js';
import { PostTiledList } from './PostTiledList.js';
import { PostTiledListEmptyItem } from './PostTiledListEmptyItem.js';
import { PostTiledListItem } from './PostTiledListItem.js';

export const RecentPosts: FC<RecentPostsProps> = function ({ posts }) {
  return (
    <PostTiledList title={`Recent Posts`}>
      {posts.map((post) => (
        <PostTiledListItem
          post={post}
          key={post.id}
        />
      ))}
      <PostTiledListEmptyItem href={`/posts`}>See all</PostTiledListEmptyItem>
    </PostTiledList>
  );
};

export interface RecentPostsProps {
  posts: PostModel[];
}
