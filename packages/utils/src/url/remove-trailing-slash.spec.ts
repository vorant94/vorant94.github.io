import { describe, expect, it } from 'vitest';
import { removeTrailingSlash } from './remove-trailing-slash.ts';

describe(`url.helpers`, () => {
  it(`should remove trailing slash from a string`, () => {
    const input = 'https://www.vorant94.io/posts/';
    const expected = 'https://www.vorant94.io/posts';

    const actual = removeTrailingSlash(input);

    expect(actual).toBe(expected);
  });

  it(`should keep input unmodified if it doesn't end up with slash`, () => {
    const input = 'https://www.vorant94.io/posts';
    const expected = 'https://www.vorant94.io/posts';

    const actual = removeTrailingSlash(input);

    expect(actual).toBe(expected);
  });
});
