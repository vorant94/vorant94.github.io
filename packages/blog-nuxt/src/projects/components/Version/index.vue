<script setup lang="ts">
import {
  type ProjectStatus,
  projectStatusToLabel,
} from '~/projects/utils/project.model';
import { projectStatusToBadgeColor } from './index.meta';

withDefaults(defineProps<{ status?: ProjectStatus; showStatus?: boolean }>(), {
  status: 'live',
});
</script>

<template>
  <Badge :color="projectStatusToBadgeColor[status]">
    <template v-if="showStatus">
      {{ projectStatusToLabel[status] }}
    </template>
    v<slot />
  </Badge>
</template>
