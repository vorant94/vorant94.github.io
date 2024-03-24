<script setup lang="ts">
import Giscus from '@giscus/vue';
import type { ChangelogModel } from '~/projects/utils/changelog.model';
import type { ProjectModel } from '~/projects/utils/project.model';

const route = useRoute();

const { data: changelog } = await useAsyncData(() =>
  queryContent<ChangelogModel>(route.path).findOne(),
);

const projectPath = computed(() =>
  route.path.split('/').splice(0, 3).join('/'),
);
const { data: project } = await useAsyncData(() =>
  queryContent<ProjectModel>(projectPath.value).findOne(),
);

useHead({
  title: `vorant94 | ${project.value!.name} v${changelog.value!.version}`,
});
</script>

<template>
  <div class="flex flex-col gap-6">
    <AppTitle base="h1">{{ project!.name }} v{{ changelog!.version }}</AppTitle>
  </div>

  <article class="mt-6">
    <ContentRendererMarkdown
      class="prose dark:prose-invert"
      :value="changelog" />
  </article>

  <Giscus
    repo="vorant94/digital-garden"
    repoId="R_kgDOKWcyPw"
    category="Changelogs"
    categoryId="DIC_kwDOKWcyP84Cd674"
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
