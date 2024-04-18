import assert from 'node:assert';
import { describe, it } from 'node:test';
import { isHttpUrl, isInternalUrl } from './url.js';

describe('isHttpUrl', () => {
  it('should return true for http urls', () => {
    const input = 'https://www.vorant94.io';
    const expected = true;

    const actual = isHttpUrl(input);
    assert.equal(actual, expected);
  });

  it('should return false for regular strings', () => {
    const input = 'foo-bar';
    const expected = false;

    const actual = isHttpUrl(input);
    assert.equal(actual, expected);
  });

  it('should return false for file urls', () => {
    const input = 'file:///Users/pony/pics/unicorn.jpg';
    const expected = false;

    const actual = isHttpUrl(input);
    assert.equal(actual, expected);
  });
});

describe('isInternalUrl', () => {
  it('should return true for local urls', () => {
    const input = '/posts';
    const expected = true;

    const actual = isInternalUrl(input);
    assert.equal(actual, expected);
  });

  it('should return false for external urls', () => {
    const input = 'https://www.example.com/posts';
    const expected = false;

    const actual = isInternalUrl(input);
    assert.equal(actual, expected);
  });
});
