import { describe, expect, test } from 'vitest';
import type { Issue } from '../../../../types/index.ts';
import { subissues } from './subissues.ts';

describe('subissues', () => {
  test('should return undefined', () => {
    expect(subissues(undefined)).toBeUndefined();
    expect(subissues([])).toBeUndefined();
  });

  test('should return subissues', () => {
    const issue1: Issue = {
      reason: 'string',
      validation: 'length',
      origin: 'value',
      message: 'Invalid length',
      input: 'foo',
      requirement: 2,
    };
    const issue2: Issue = {
      reason: 'string',
      validation: 'length',
      origin: 'value',
      message: 'Invalid length',
      input: 'foo',
      requirement: 4,
    };
    const issue3: Issue = {
      reason: 'string',
      validation: 'starts_with',
      origin: 'value',
      message: 'Invalid start',
      input: 'foo',
      requirement: 'bar',
    };
    expect(
      subissues([
        {
          typed: true,
          output: 'foo',
          issues: [issue1],
        },
        {
          typed: true,
          output: 'foo',
          issues: [issue2, issue3],
        },
      ])
    ).toEqual([issue1, issue2, issue3]);
  });
});
