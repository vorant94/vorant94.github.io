<script setup lang="ts">
import type { PostModel } from '~/posts/utils/post.model';
import { compareDesc, format } from 'date-fns';
import '@fortawesome/fontawesome-free/css/solid.css';

const props = defineProps<{ slug: string }>();

const { data } = await useAsyncData('relatedPosts', () =>
  queryContent<PostModel>('/posts')
    .where({ related: { $contains: props.slug } })
    .find(),
);

const sortedPosts = computed(() =>
  data.value!.toSorted((a, b) => compareDesc(a.publishedAt, b.publishedAt)),
);
</script>

<template>
  <StandOut
    v-if="sortedPosts.length"
    class="flex-col">
    <details class="text-slate-800 dark:text-slate-100">
      <summary class="hover:cursor-pointer">
        <AppTitle
          base="h6"
          class="mb-0 inline-block">
          <span class="pl-2">Related posts</span>
        </AppTitle>
      </summary>

      <ArchiveList>
        <ArchiveListItem
          v-for="post in sortedPosts"
          :href="post._path">
          <template v-slot:left>{{ post.title }}</template>
          <template v-slot:right>
            {{ format(post.publishedAt, PublishedAtFormat.SHORT) }}
          </template>
        </ArchiveListItem>
      </ArchiveList>
    </details>
  </StandOut>
</template>

<style scoped>
details {
  > summary {
    /* Chrome */
    list-style-type: none;

    /* Safari */
    &::-webkit-details-marker {
      display: none;
    }

    &::before {
      content: '\f0d7';
      font: var(--fa-font-solid);
    }
  }

  &[open] > summary::before {
    content: '\f0d8';
  }
}
</style>
