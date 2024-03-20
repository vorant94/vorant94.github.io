<script setup lang="ts">
import { routeToName } from '@/home/route.ts';
import CenteredLayout from '@/shared/layouts/CenteredLayout.vue';
</script>

<template>
  <CenteredLayout>
    <nav>
      <ul>
        <li v-for="name in Object.values(routeToName)">
          <router-link
            :to="{ name }"
            class="text-slate-500 hover:text-cyan-500">
            {{ name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </CenteredLayout>
</template>
