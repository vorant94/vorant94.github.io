<script setup lang="ts">
import type { ProjectModel } from '~/projects/utils/project.model';
import Giscus from '@giscus/vue';

const route = useRoute();

const { data } = await useAsyncData(() =>
  queryContent<ProjectModel>(route.path).findOne(),
);

useHead({
  title: `vorant94 | ${data.value!.name}`,
});
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <AppTitle base="h1">{{ data!.name }}</AppTitle>

    <Version
      :status="data!.status"
      showStatus>
      {{ data!.version }}
    </Version>

    <ThemedImage
      :src="data?.demo"
      :srcDark="data?.demoDark"
      alt="demo" />

    <Text base="em">{{ data!.slogan }}</Text>

    <menu class="flex gap-2">
      <li v-if="data!.productionUrl">
        <ButtonLink
          size="sm"
          target="_blank"
          :href="data!.productionUrl"
          variant="outlined"
          class="bg-slate-50 dark:bg-slate-900 p-2 flex gap-1.5 items-center">
          <Icon glyph="globe" />
          Production
        </ButtonLink>
      </li>

      <li>
        <ButtonLink
          size="sm"
          target="_blank"
          :href="data!.sourceCodeUrl"
          variant="outlined"
          class="bg-slate-50 dark:bg-slate-900 p-2 flex gap-1.5 items-center">
          <Icon glyph="github" />
          Source
        </ButtonLink>
      </li>
    </menu>
  </div>

  <article class="mt-6">
    <ContentRendererMarkdown
      class="prose dark:prose-invert"
      :value="data" />
  </article>

  <ProjectChangelogs :slug="route.params.slug" />

  <Giscus
    repo="vorant94/digital-garden"
    repoId="R_kgDOKWcyPw"
    category="Projects"
    categoryId="DIC_kwDOKWcyP84Cd672"
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
