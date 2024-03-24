<script setup lang="ts">
import type { PostModel } from '~/posts/utils/post.model';
import { compareDesc } from 'date-fns';

const { data } = await useAsyncData(() =>
  queryContent<PostModel>('/posts').find(),
);

// TODO move sorting to the query builder code #1
//  https://github.com/nuxt/content/issues/2383
const sortedRecentPosts = data
  .value!.toSorted((a, b) => compareDesc(a.publishedAt, b.publishedAt))
  .slice(0, 3);
</script>

<template>
  <PostTiledList title="Recent Posts">
    <PostTiledListItem
      v-for="post in sortedRecentPosts"
      :post="post" />
  </PostTiledList>

  <AppLink
    class="self-center"
    href="/posts">
    See all
  </AppLink>
</template>
