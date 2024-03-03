import { Layout } from '@/components/Layout.tsx';
import { cn } from '@digital-garden/utils';
import type { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { routeToLabel } from '../shared/route.ts';

export const Home: FunctionComponent = function () {
  return (
    <Layout>
      <nav>
        <ul>
          {Object.entries(routeToLabel).map(([link, label]) => (
            <li key={link}>
              <Link
                to={link}
                className={cn('text-slate-500 hover:text-cyan-500')}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Layout>
  );
};
