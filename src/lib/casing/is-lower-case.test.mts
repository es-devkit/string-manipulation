import { isLowerCase } from './is-lower-case.mjs';

const TEST_CASES: [string, boolean][] = [
  ['', false],
  ['test', true],
  ['TEST', false],
  ['Test', false],
  ['123', false],
  ['test String', false],
  ['snake_case', true],
];

describe('is lower case', () => {
  test.each(TEST_CASES)('isLowerCase(%s) === %s', (input, expected) => {
    expect(isLowerCase(input)).toEqual(expected);
  });
});
