<script setup lang="ts">
useHead({
  title: 'About',
});
</script>

<template>
  <Intro />

  <Divider>
    <AppTitle base="h3">Stay up to date</AppTitle>
  </Divider>

  <Text base="span">
    If you wish to be up to date with new posts you can
    <AppLink
      href="/rss.xml"
      target="_blank">
      subscribe with RSS
    </AppLink>
  </Text>

  <Text base="span">
    There will also be an email newsletter somewhere in the future
  </Text>

  <Divider>
    <AppTitle base="h3">How to reach me</AppTitle>
  </Divider>

  <SocialLinks />
</template>
