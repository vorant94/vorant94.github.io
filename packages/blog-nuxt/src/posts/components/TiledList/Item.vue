<script setup lang="ts">
defineProps<{ href: string }>();
</script>

<template>
  <li
    class="flex flex-col text-medium rounded-md duration-100 border border-transparent group cursor-pointer hover:border-slate-300 hover:dark:border-slate-600 hover:shadow-md hover:scale-105">
    <AppLink
      :href="href"
      class="flex items-center p-3">
      <!-- adding display: flex here breaks inline-block hack from below -->
      <div class="flex-1 overflow-hidden">
        <AppTitle
          base="h6"
          class="truncate group-hover:text-inherit">
          <slot name="title" />
        </AppTitle>
        <!-- this inline-block removes the inherited text-decoration, since it cannot be simply overridden like any other parent css style -->
        <Caption class="inline-block">
          <slot name="description" />
        </Caption>
      </div>

      <div class="h-20 w-20 object-scale-down flex items-center justify-center">
        <slot name="image" />
      </div>
    </AppLink>
  </li>
</template>
