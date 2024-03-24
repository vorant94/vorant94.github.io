<script setup lang="ts">
import type { ProjectModel } from '~/projects/utils/project.model';

defineProps<{ project: ProjectModel }>();
</script>

<template>
  <div
    class="flex h-24 items-center justify-center relative overflow-hidden rounded-md duration-100 border border-transparent group cursor-pointer hover:border-slate-300 hover:dark:border-slate-600 hover:shadow-md hover:scale-105">
    <AppLink
      :href="project._path"
      class="flex items-center p-3 gap-2">
      <div class="h-12 w-12 object-scale-down">
        <ThemedImage
          :src="project.logo"
          alt="project logo"
          :srcDark="project.logoDark" />
      </div>

      <div class="flex-1">
        <AppTitle
          base="h6"
          class="group-hover:text-inherit">
          {{ project.name }}
        </AppTitle>
        <!-- this inline-block removes the inherited text-decoration, since it cannot be simply overridden like any other parent css style -->
        <Caption class="inline-block">
          {{ project.slogan }}
        </Caption>
      </div>
    </AppLink>

    <Version
      :status="project.status"
      showStatus
      class="absolute top-0 right-0 rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-2xl">
      {{ project.version }}
    </Version>
  </div>
</template>
