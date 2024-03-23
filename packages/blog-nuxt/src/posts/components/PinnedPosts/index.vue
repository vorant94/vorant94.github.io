<script setup lang="ts">
import type { PostModel } from '~/posts/utils/post.model';
import { compareDesc, format } from 'date-fns';
import { PublishedAtFormat } from '~/utils/published-at-format';

const { data } = await useAsyncData(() =>
  queryContent<PostModel>('/posts').where({ isPinned: true }).find(),
);

// TODO move sorting to the query builder code #2
const sortedPosts = computed(() =>
  data.value!.toSorted((a, b) => compareDesc(a.publishedAt, b.publishedAt)),
);
</script>

<template>
  <menu>
    <StandOut
      v-for="post in sortedPosts"
      class="flex-col">
      <span class="flex gap-3 items-center">
        <span class="-scale-x-100">📌</span>

        <ArchiveListItem
          :href="post._path"
          class="flex-1 !py-0">
          <template v-slot:left>{{ post.title }}</template>
          <template v-slot:right>
            {{ format(post.publishedAt, PublishedAtFormat.SHORT) }}
          </template>
        </ArchiveListItem>
      </span>
    </StandOut>
  </menu>
</template>
