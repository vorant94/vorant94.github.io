<script setup lang="ts">
import {
  type ProjectModel,
  projectStatusOrder,
  projectStatuses,
} from '~/projects/utils/project.model';
import { groupBy, orderBy } from 'lodash-es';

useHead({
  title: `Projects`,
});

const { data } = await useAsyncData(() =>
  queryContent<ProjectModel>('/projects').find(),
);

const projectsByStatus = computed(() => groupBy(data.value, (p) => p.status));

const statuses = computed(() => {
  const sortedStatuses = orderBy(
    projectStatuses,
    (status) => projectStatusOrder[status],
  );

  return sortedStatuses.filter(
    (status) =>
      status in projectsByStatus.value &&
      projectsByStatus.value[status]!.length > 0,
  );
});
</script>

<template>
  <ProjectTiledList
    v-for="status in statuses"
    :title="projectStatusToLabel[status]">
    <ProjectTiledListItem
      v-for="project in projectsByStatus[status]"
      :project="project" />
  </ProjectTiledList>
</template>
