<script setup lang="ts">
import type { PostModel } from '~/posts/utils/post.model';
import { compareDesc, format } from 'date-fns';
import { PublishedAtFormat } from '~/utils/published-at-format';

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
  <TiledList title="Recent Posts">
    <TiledListItem
      v-for="post in sortedRecentPosts"
      :href="post._path">
      <template v-slot:title>{{ post.title }}</template>
      <template v-slot:description>
        {{ format(post.publishedAt, PublishedAtFormat.FULL) }}
      </template>
      <template v-slot:image>
        <ThemedImage
          :src="post.coverImage"
          :alt="post.coverImageAlt"
          :srcDark="post.coverImageDark" />
      </template>
    </TiledListItem>
  </TiledList>

  <AppLink
    class="self-center"
    href="/posts">
    See all
  </AppLink>
</template>
