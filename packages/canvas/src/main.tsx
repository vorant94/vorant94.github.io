import { route } from '@/router/route.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DigitalGarden } from 'src/digital-garden';
import { Home } from 'src/home';
import { ThoughtsOnModernFrameworkFeatures } from 'src/thoughts-on-modern-framework-features';
import { TypescriptMonoreposAreAMess } from 'src/typescript-monorepos-are-a-mess';
import './index.css';

const router = createBrowserRouter([
  {
    path: route.home,
    element: <Home />,
  },
  {
    path: route.typescriptMonoreposAreAMess,
    element: <TypescriptMonoreposAreAMess />,
  },
  {
    path: route.thoughtsOnModernFrameworkFeatures,
    element: <ThoughtsOnModernFrameworkFeatures />,
  },
  {
    path: route.digitalGarden,
    element: <DigitalGarden />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="min-w-dvw min-h-dvh flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>,
);
