import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { TypescriptMonoreposAreAMess } from './typescript-monorepos-are-a-mess';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TypescriptMonoreposAreAMess />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
