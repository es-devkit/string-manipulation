import { dotCase } from './dot-case.mjs';

const TEST_CASES: [string, string][] = [
  ['', ''],
  ['test', 'test'],
  ['test string', 'test.string'],
  ['Test String', 'test.string'],
  ['dot.case', 'dot.case'],
  ['path/case', 'path.case'],
  ['TestV2', 'test.v2'],
  ['version 1.2.10', 'version.1.2.10'],
  ['version 1.21.0', 'version.1.21.0'],
];

describe('dotCase', () => {
  test.each(TEST_CASES)('dotCase(%s) -> "%s"', (input, expected) => {
    expect(dotCase(input)).toEqual(expected);
  });
});
