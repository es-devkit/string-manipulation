import { lowerCaseFirst } from './lower-case-first.mjs';

const TEST_CASES: [string, string][] = [
  ['', ''],
  ['test', 'test'],
  ['TEST', 'tEST'],
  ['TEST sTring', 'tEST sTring'],
];

describe('lowerCaseFirst', () => {
  test.each(TEST_CASES)('lowerCaseFirst(%s) === %s', (input, expected) => {
    expect(lowerCaseFirst(input)).toEqual(expected);
  });
});
