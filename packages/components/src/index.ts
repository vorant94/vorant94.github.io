import type { Plugin } from 'vue';
import CenteredLayout from './layout/CenteredLayout/CenteredLayout.vue';

// need to import if it needs to include tailwind generated styles in the lib bundle
// import './index.css';

export default {
  install(app) {
    app.component('CenteredLayout', CenteredLayout);
  },
} satisfies Plugin;
