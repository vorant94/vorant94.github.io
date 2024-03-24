<script setup lang="ts">
import { compareDesc, format } from 'date-fns';
import { PublishedAtFormat } from '~/utils/published-at-format';
import { groupBy } from 'lodash-es';
import type { PostModel } from '~/posts/utils/post.model';

useHead({
  title: `vorant94 | Posts`,
});

const { data } = await useAsyncData(() =>
  queryContent<PostModel>('/posts').sort({ publishedAt: -1 }).find(),
);

const postsByYear = computed(() =>
  groupBy(data.value, (post) =>
    format(post.publishedAt, PublishedAtFormat.YEAR),
  ),
);

const postYears = computed(() => Object.keys(postsByYear.value).reverse());
</script>

<template>
  <ArchiveList
    v-for="year in postYears"
    :title="year">
    <ArchiveListItem
      v-for="post in postsByYear[year]"
      :href="post._path">
      <template v-slot:left>{{ post.title }}</template>
      <template v-slot:right>
        {{ format(post.publishedAt, PublishedAtFormat.SHORT) }}
      </template>
    </ArchiveListItem>
  </ArchiveList>
</template>
