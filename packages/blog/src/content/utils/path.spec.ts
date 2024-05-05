import assert from 'node:assert';
import path from 'node:path';
import process from 'node:process';
import { describe, it } from 'node:test';
import { resolveContentPath } from './path.js';

describe(`resolveContentPath`, () => {
  it(`should resolve absolute path to content`, async () => {
    const input = 'posts';
    const expected = path.resolve(process.cwd(), 'content/posts');

    const actual = resolveContentPath(input);
    assert.equal(actual, expected);
  });

  it(`should ignore leading slash`, async () => {
    const input = '/posts';
    const expected = path.resolve(process.cwd(), 'content/posts');

    const actual = resolveContentPath(input);
    assert.equal(actual, expected);
  });
});
