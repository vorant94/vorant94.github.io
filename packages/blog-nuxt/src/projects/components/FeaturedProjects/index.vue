<script setup lang="ts">
import type { ProjectModel } from '~/projects/utils/project.model';

const { data } = await useAsyncData(() =>
  queryContent<ProjectModel>('/projects').where({ isFeatured: true }).find(),
);
</script>

<template>
  <TiledGrid title="Featured Projects">
    <TiledGridCell
      v-for="project in data"
      :href="project._path"
      :status="project.status">
      <template v-slot:name>{{ project.name }}</template>
      <template v-slot:slogan>{{ project.slogan }}</template>
      <template v-slot:image>
        <ThemedImage
          :src="project.logo"
          alt="project logo"
          :srcDark="project.logoDark" />
      </template>
      <template v-slot:version>{{ project.version }}</template>
    </TiledGridCell>

    <TiledGridEmptyCell href="/projects"> See all </TiledGridEmptyCell>
  </TiledGrid>
</template>
