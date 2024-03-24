<script setup lang="ts">
import type { PostModel } from '~/posts/utils/post.model';

const { data } = await useAsyncData(() =>
  queryContent<PostModel>('/posts').sort({ publishedAt: -1 }).limit(3).find(),
);
</script>

<template>
  <PostTiledList title="Recent Posts">
    <PostTiledListItem
      v-for="post in data"
      :post="post" />
  </PostTiledList>

  <AppLink
    class="self-center"
    href="/posts">
    See all
  </AppLink>
</template>
