import { pathCase } from './path-case.mjs';

const TEST_CASES: [string, string][] = [
  ['', ''],
  ['test', 'test'],
  ['test string', 'test/string'],
  ['Test String', 'test/string'],
  ['TestV2', 'test/v2'],
  ['version 1.2.10', 'version/1/2/10'],
  ['version 1.21.0', 'version/1/21/0'],
];

describe('pathCase', () => {
  test.each(TEST_CASES)('pathCase(%s) -> %s', (input, expected) => {
    expect(pathCase(input)).toEqual(expected);
  });
});
