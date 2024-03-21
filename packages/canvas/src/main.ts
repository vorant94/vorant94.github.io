import './index.css';

import DigitalGarden from '@/DigitalGarden/index.vue';
import { IndexMeta, routeToName } from '@/Home/index.meta.ts';
import Home from '@/Home/index.vue';
import ThoughtsOnModernFrameworkFeatures from '@/ThoughtsOnModernFrameworkFeatures/index.vue';
import TypescriptMonoreposAreAMess from '@/TypescriptMonoreposAreAMess/index.vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const app = createApp(App);

app.use(
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: IndexMeta.HOME,
        name: routeToName[IndexMeta.HOME],
        component: Home,
      },
      {
        path: IndexMeta.TYPESCRIPT_MONOREPOS_ARE_A_MESS,
        name: routeToName[IndexMeta.TYPESCRIPT_MONOREPOS_ARE_A_MESS],
        component: TypescriptMonoreposAreAMess,
      },
      {
        path: IndexMeta.THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES,
        name: routeToName[IndexMeta.THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES],
        component: ThoughtsOnModernFrameworkFeatures,
      },
      {
        path: IndexMeta.DIGITAL_GARDEN,
        name: routeToName[IndexMeta.DIGITAL_GARDEN],
        component: DigitalGarden,
      },
    ],
  }),
);

app.mount('#app');
