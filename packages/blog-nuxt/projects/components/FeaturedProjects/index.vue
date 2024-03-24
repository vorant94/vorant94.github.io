<script setup lang="ts">
import type { ProjectModel } from '~/projects/utils/project.model';

const { data } = await useAsyncData(() =>
  queryContent<ProjectModel>('/projects').where({ isFeatured: true }).find(),
);
</script>

<template>
  <ProjectTiledGrid title="Featured Projects">
    <ProjectTiledGridCell
      v-for="project in data"
      :project="project" />

    <ProjectTiledGridEmptyCell href="/projects">
      See all
    </ProjectTiledGridEmptyCell>
  </ProjectTiledGrid>
</template>
