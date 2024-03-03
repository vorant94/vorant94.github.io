import { Home } from '@/Home';
import { Route } from '@/Home/route.ts';
import { ThoughtsOnModernFrameworkFeatures } from '@/ThoughtsOnModernFrameworkFeatures';
import { TypescriptMonoreposAreAMess } from '@/TypescriptMonoreposAreAMess';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: Route.MAIN,
    element: <Home />,
  },
  {
    path: Route.TYPESCRIPT_MONOREPOS_ARE_A_MESS,
    element: <TypescriptMonoreposAreAMess />,
  },
  {
    path: Route.THOUGHTS_ON_MODERN_FRAMEWORK_FEATURES,
    element: <ThoughtsOnModernFrameworkFeatures />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
