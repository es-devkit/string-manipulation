import { upperCaseFirst } from './upper-case-first.mjs';

const TEST_CASES: [string, string][] = [
  ['', ''],
  ['test', 'Test'],
  ['TEST', 'TEST'],
  ['test text', 'Test text'],
];

describe('upperCaseFirst', () => {
  test.each(TEST_CASES)('upperCaseFirst(%s) === %s', (input, expected) => {
    expect(upperCaseFirst(input)).toEqual(expected);
  });
});
