import { routeToLabel } from '@/Main/route.ts';
import { Layout } from '@/components/Layout.tsx';
import type { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Main: FunctionComponent = function () {
  return (
    <Layout>
      <nav>
        <ul>
          {Object.entries(routeToLabel).map(([link, label]) => (
            <li key={link}>
              <Link
                to={link}
                className={'text-slate-500 hover:text-cyan-500'}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Layout>
  );
};
