<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  type IconGlyph,
  iconGlyphToFaIcon,
} from '~/ui/components/Icon/index.meta';

defineProps<{ glyph: IconGlyph }>();
</script>

<template>
  <FontAwesomeIcon
    :fixed-width="true"
    :icon="iconGlyphToFaIcon[glyph]" />
</template>
