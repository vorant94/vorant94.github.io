export default defineNitroPlugin((nitroApp) => {
  // TODO make WebStorm happy
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    // TODO add zod schema validation here
  });
});
