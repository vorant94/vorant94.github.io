/// <reference types="vite/client" />

declare module React {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
