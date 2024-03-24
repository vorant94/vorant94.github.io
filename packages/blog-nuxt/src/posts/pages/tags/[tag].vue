<script setup lang="ts">
import type { PostModel } from '~/posts/utils/post.model';
import { compareDesc, format } from 'date-fns';
import { PublishedAtFormat } from '~/utils/published-at-format';

const route = useRoute();

const { data } = await useAsyncData(() =>
  queryContent<PostModel>()
    .where({ tags: { $contains: route.params.tag } })
    .sort({ publishedAt: -1 })
    .find(),
);

const title = computed(() => `#${route.params.tag}`);
</script>

<template>
  <ArchiveList :title="title">
    <ArchiveListItem
      v-for="post in data"
      :href="post._path">
      <template v-slot:left>{{ post.title }}</template>
      <template v-slot:right>
        {{ format(post.publishedAt, PublishedAtFormat.SHORT) }}
      </template>
    </ArchiveListItem>
  </ArchiveList>
</template>
