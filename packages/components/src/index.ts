import CenteredLayout from './layout/CenteredLayout/CenteredLayout.vue';

// need to import if it needs to include tailwind generated styles in the lib bundle
// import './index.css';

export { CenteredLayout };
// Cannot be used since WebStorm doesn't recognize it, even though vue itself works fine
// export default {
//   install(app) {
//     app.component('CenteredLayout', CenteredLayout);
//   },
// } satisfies Plugin;
