import { isUpperCase } from './is-upper-case.mjs';

const TEST_CASES: [string, boolean][] = [
  ['', false],
  ['test', false],
  ['TEST', true],
  ['Test', false],
  ['123', false],
  ['CONSTANT_CASE', true],
];

describe('isUpperCase', () => {
  test.each(TEST_CASES)('isUpperCase(%s) === %s', (input, expected) => {
    expect(isUpperCase(input)).toEqual(expected);
  });
});
