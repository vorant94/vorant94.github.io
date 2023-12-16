/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module React {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
