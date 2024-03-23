export default defineNitroPlugin((nitroApp) => {
  // TODO understand why WebStorm doesn't catch Nuxt Content hooks
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    // TODO add zod schema validation here
  });
});
