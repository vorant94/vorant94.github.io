<script setup lang="ts">
import type { ChangelogModel } from '~/projects/utils/changelog.model';
import { format } from 'date-fns';
import { PublishedAtFormat } from '~/utils/published-at-format';

const props = defineProps<{ slug: string }>();

const { data } = await useAsyncData(() =>
  queryContent<ChangelogModel>(`/projects/${props.slug}/changelogs`)
    .sort({ publishedAt: -1 })
    .find(),
);
</script>

<template>
  <ArchiveList title="Changelogs">
    <ArchiveListItem
      v-for="changelog in data"
      :href="changelog._path">
      <template v-slot:left>v{{ changelog.version }}</template>
      <template v-slot:right>
        {{ format(changelog.publishedAt, PublishedAtFormat.SHORT) }}
      </template>
    </ArchiveListItem>
  </ArchiveList>
</template>
