import { lowerCase } from './lower-case.mjs';

const TEST_CASES: [string, string][] = [
  ['', ''],
  ['test', 'test'],
  ['TEST', 'test'],
  ['test string', 'test string'],
  ['TEST STRING', 'test string'],
];

const LOCALE_TEST_CASES: [string, string, string][] = [
  ['STRING', 'strıng', 'tr'],
];

describe('lowerCase', () => {
  test.each(TEST_CASES)('lowerCase(%s) === %s', (str, expected) => {
    expect(lowerCase(str)).toEqual(expected);
  });

  test.each(LOCALE_TEST_CASES)(
    'lowerCase(%s, %s) === %s',
    (str, expected, locale) => {
      expect(lowerCase(str, locale)).toEqual(expected);
    }
  );
});
