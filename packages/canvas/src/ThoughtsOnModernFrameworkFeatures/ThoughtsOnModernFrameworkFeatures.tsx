import { Layout } from '@/components/Layout.tsx';
import type { FunctionComponent } from 'react';
import angularLogo from './angular-logo.png';
import reactLogo from './react-logo.svg';
import spiderManTriple from './spider-man-triple.jpg';
import vueLogo from './vue-logo.png';

export const ThoughtsOnModernFrameworkFeatures: FunctionComponent =
  function () {
    return (
      <Layout>
        <div className="relative">
          <img
            src={spiderManTriple}
            alt=""
          />

          <img
            className="absolute top-[160px] left-[70px] w-24 h-24"
            src={vueLogo}
            alt=""
          />

          <img
            className="absolute top-[110px] left-[250px] w-24 h-24"
            src={reactLogo}
            alt=""
          />

          <img
            className="absolute top-[165px] left-[400px] w-24 h-24"
            src={angularLogo}
            alt=""
          />
        </div>
      </Layout>
    );
  };
