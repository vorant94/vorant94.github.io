<script setup lang="ts">
import type { ProjectModel } from '~/projects/utils/project.model';
import type { ChangelogModel } from '~/projects/utils/changelog.model';

const props = defineProps<{ project: ProjectModel }>();

const { data } = await useAsyncData(() =>
  queryContent<ChangelogModel>(`${props.project._path}/changelogs`)
    .sort({ publishedAt: -1 })
    .limit(2)
    .find(),
);
</script>

<template>
  <Card
    :style="{
      '--bg-image-url': `url(${project.logo})`,
      '--bg-image-dark-url': `url(${project.logoDark})`,
    }"
    class="flex-1 flex-col bg-[image:var(--bg-image-url)] dark:bg-[image:var(--bg-image-dark-url)] bg-right bg-no-repeat bg-[length:auto_200%]">
    <CardOverlay
      class="bg-gradient-to-l from-transparent to-60% to-slate-50 dark:to-slate-900" />

    <div class="flex gap-2 items-center z-10">
      <AppLink :href="project._path">
        <AppTitle
          base="h6"
          class="hover:text-inherit">
          {{ project.name }}
        </AppTitle>
      </AppLink>
      <span>•</span>
      <Version
        :status="project.status"
        showStatus>
        {{ project.version }}
      </Version>
    </div>

    <Caption class="z-10">{{ project.slogan }}</Caption>

    <div class="grid grid-cols-2 z-10">
      <div class="flex flex-col">
        <Divider :isLeft="false">
          <Text base="span">Latest Changes</Text>
        </Divider>

        <menu class="flex flex-col divide-y divide-dashed">
          <li
            v-for="changelog in data"
            class="flex flex-col py-1">
            <AppLink
              level="sm"
              :href="changelog._path">
              v{{ changelog.version }}
            </AppLink>
          </li>
        </menu>
      </div>

      <div class="flex flex-col gap-2 items-end justify-end self-end">
        <ButtonLink
          v-if="project.productionUrl"
          size="sm"
          target="_blank"
          :href="project.productionUrl"
          variant="outlined"
          class="bg-slate-50 dark:bg-slate-900 p-2 flex gap-1.5 items-center">
          <Icon glyph="globe" />
          Production
        </ButtonLink>

        <ButtonLink
          size="sm"
          target="_blank"
          :href="project.sourceCodeUrl"
          variant="outlined"
          class="bg-slate-50 dark:bg-slate-900 p-2 flex gap-1.5 items-center">
          <Icon glyph="github" />
          Source
        </ButtonLink>
      </div>
    </div>
  </Card>
</template>
