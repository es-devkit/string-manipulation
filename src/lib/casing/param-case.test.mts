import { paramCase } from './param-case.mjs';

const TEST_CASES: [string, string][] = [
  ['', ''],
  ['test', 'test'],
  ['test string', 'test-string'],
  ['Test String', 'test-string'],
  ['TestV2', 'test-v2'],
  ['version 1.2.10', 'version-1-2-10'],
  ['version 1.21.0', 'version-1-21-0'],
];

describe('param case', () => {
  test.each(TEST_CASES)('paramCase(%s) === %s', (input, expected) => {
    expect(paramCase(input)).toEqual(expected);
  });
});
