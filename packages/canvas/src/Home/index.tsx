import { route, type Route } from '@/router/route.ts';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const Home: FC = function () {
  return (
    <nav>
      <ul>
        {Object.entries(routeToName).map(([link, label]) => (
          <li key={link}>
            <Link
              to={link}
              className="text-slate-500 hover:text-cyan-500">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const routeToName = {
  [route.home]: 'Home',
  [route.typescriptMonoreposAreAMess]: 'Typescript Monorepos Are A Mess',
  [route.thoughtsOnModernFrameworkFeatures]:
    'Thoughts on Modern Framework Features',
  [route.digitalGarden]: 'Digital Garden',
} as const satisfies Record<Route, string>;
