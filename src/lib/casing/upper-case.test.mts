import { upperCase } from './upper-case.mjs';

const TEST_CASES: [string, string][] = [
  ['', ''],
  ['test', 'TEST'],
  ['test string', 'TEST STRING'],
  ['Test String', 'TEST STRING'],
  ['\u0131', 'I'],
];

const LOCALE_TEST_CASES: [string, string, string][] = [['i', '\u0130', 'tr']];

describe('upperCase', () => {
  test.each(TEST_CASES)('upperCase(%s) === %s', (str, expected) => {
    expect(upperCase(str)).toEqual(expected);
  });

  test.each(LOCALE_TEST_CASES)(
    'upperCase(%s, %s) === %s',
    (str, expected, locale) => {
      expect(upperCase(str, locale)).toEqual(expected);
    }
  );
});
