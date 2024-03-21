<script setup lang="ts">
import { socialLinks } from '~/home/components/SocialLinks/models';
</script>
<template>
  <ul class="mx-auto grid grid-cols-3 gap-5">
    <li v-for="item in socialLinks">
      <ButtonLink
        variant="outlined"
        :href="item.url.toString()"
        target="_blank"
        class="text-slate-800 dark:text-slate-100 flex h-24 w-24 flex-col items-center justify-center gap-2 p-2">
        <span class="text-xl">
          <Icon :glyph="item.glyph" />
        </span>
        <span class="truncate max-w-full">{{ item.glyph }}</span>
      </ButtonLink>
    </li>
  </ul>
</template>
