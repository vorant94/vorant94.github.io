// https://github.com/testing-library/jest-dom/issues/515#issuecomment-1987823474
//  workaround for https://github.com/testing-library/jest-dom/issues/515
/// <reference types="@testing-library/jest-dom" />

import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/vue';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
