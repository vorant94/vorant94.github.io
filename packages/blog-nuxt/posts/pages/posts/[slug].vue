<script setup lang="ts">
import type { PostModel } from '~/posts/utils/post.model';
import { format } from 'date-fns';
import Giscus from '@giscus/vue';

const route = useRoute();

const { data } = await useAsyncData(() =>
  queryContent<PostModel>(route.path).findOne(),
);

useHead({
  title: data.value!.title,
});
</script>

<template>
  <div class="flex flex-col gap-6">
    <div
      v-if="data?.coverImage"
      class="self-center">
      <ThemedImage
        :src="data!.coverImage"
        :srcDark="data!.coverImageDark"
        :alt="data!.coverImageAlt" />
    </div>

    <AppTitle base="h1">{{ data!.title }}</AppTitle>

    <div
      class="flex flex-col lg:flex-row gap-2 lg:items-center justify-between">
      <div class="flex gap-2 items-center">
        <Caption>
          {{ format(data!.publishedAt, PublishedAtFormat.FULL) }}
        </Caption>
        <Caption>&#x2022;</Caption>
        <Caption>{{ data!.readingTime.text }}</Caption>
      </div>

      <menu class="flex list-none m-0 p-0 gap-1">
        <li
          v-for="tag in data!.tags"
          class="p-0 m-0">
          <Tag :tag="tag" />
        </li>
      </menu>
    </div>

    <Text base="em">{{ data!.description }}</Text>

    <p v-if="data?.code">
      All the code mentioned in the post can be found in my
      <NuxtLink
        :href="data!.code"
        target="_blank">
        GitHub
      </NuxtLink>
    </p>
  </div>

  <article class="mt-6">
    <ContentRendererMarkdown
      class="prose dark:prose-invert"
      :value="data" />
  </article>

  <RelatedPosts :slug="route.params.slug" />

  <Giscus
    repo="vorant94/digital-garden"
    repoId="R_kgDOKWcyPw"
    category="Posts"
    categoryId="DIC_kwDOKWcyP84Cc9LF"
    mapping="specific"
    :term="route.params.slug"
    strict="0"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="bottom"
    theme="preferred_color_scheme"
    lang="en"
    loading="lazy" />
</template>
