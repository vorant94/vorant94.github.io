<script setup lang="ts">
import type { PostModel } from '~/posts/utils/post.model';
import { format } from 'date-fns';

defineProps<{ post: PostModel }>();
</script>

<template>
  <li
    class="flex flex-col text-medium rounded-md duration-100 border border-transparent group cursor-pointer hover:border-slate-300 hover:dark:border-slate-600 hover:shadow-md hover:scale-105">
    <AppLink
      :href="post._path"
      class="flex items-center p-3">
      <!-- adding display: flex here breaks inline-block hack from below -->
      <div class="flex-1 overflow-hidden">
        <AppTitle
          base="h6"
          class="truncate group-hover:text-inherit">
          {{ post.title }}
        </AppTitle>
        <!-- this inline-block removes the inherited text-decoration, since it cannot be simply overridden like any other parent css style -->
        <Caption class="inline-block">
          {{ format(post.publishedAt, PublishedAtFormat.FULL) }}
        </Caption>
      </div>

      <div
        v-if="post.coverImage"
        class="h-20 w-20 object-scale-down flex items-center justify-center">
        <ThemedImage
          :src="post.coverImage"
          :alt="post.coverImageAlt"
          :srcDark="post.coverImageDark" />
      </div>
    </AppLink>
  </li>
</template>
