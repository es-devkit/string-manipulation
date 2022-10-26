import { sentenceCase } from './sentence-case.mjs';

const TEST_CASES: [string, string][] = [
  ['', ''],
  ['test', 'Test'],
  ['test string', 'Test string'],
  ['Test String', 'Test string'],
  ['TestV2', 'Test v2'],
  ['version 1.2.10', 'Version 1 2 10'],
  ['version 1.21.0', 'Version 1 21 0'],
];

describe('sentenceCase', () => {
  test.each(TEST_CASES)('sentenceCase(%s) -> %s', (input, expected) => {
    expect(sentenceCase(input)).toEqual(expected);
  });
});
