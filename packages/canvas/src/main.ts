import './index.css';

import DigitalGarden from '@/DigitalGarden/index.vue';
import { Route, routeToName } from '@/Home/index.meta.ts';
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
        path: Route.HOME,
        name: routeToName[Route.HOME],
        component: Home,
      },
      {
        path: Route.TYPESCRIPT_MONOREPOS_ARE_A_MESS,
        name: routeToName[Route.TYPESCRIPT_MONOREPOS_ARE_A_MESS],
        component: TypescriptMonoreposAreAMess,
      },
      {
        path: Route.THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES,
        name: routeToName[Route.THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES],
        component: ThoughtsOnModernFrameworkFeatures,
      },
      {
        path: Route.DIGITAL_GARDEN,
        name: routeToName[Route.DIGITAL_GARDEN],
        component: DigitalGarden,
      },
    ],
  }),
);

app.mount('#app');
