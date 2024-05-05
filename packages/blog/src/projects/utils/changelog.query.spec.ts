import assert from 'node:assert';
import { describe, it } from 'node:test';
import { getProjectIdFromChangelogPath } from './changelog.query.js';

describe('getProjectIdFromChangelogPath', () => {
  it('should return project id from the file path', async () => {
    const input = '/projects/digital-garden/changelogs/100';
    const expected = 'digital-garden';

    const actual = getProjectIdFromChangelogPath(input);

    assert.equal(actual, expected);
  });

  it('should throw an error if the file path is invalid', () => {
    const input = 'projects/digital-garden/changelogs/100';

    assert.throws(() => getProjectIdFromChangelogPath(input), {
      message: `Invalid changelog path: ${input}`,
    });
  });
});
