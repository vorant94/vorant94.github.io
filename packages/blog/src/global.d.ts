import 'fastify';
import 'react';
import type { EnvModel } from './config/index.js';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }

  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': any;
    }
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    env: EnvModel;
  }
}
