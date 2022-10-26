import { snakeCase } from './snake-case.mjs';

const TEST_CASES: [string, string][] = [
  ['', ''],
  ['_id', 'id'],
  ['test', 'test'],
  ['test string', 'test_string'],
  ['Test String', 'test_string'],
  ['TestV2', 'test_v2'],
  ['version 1.2.10', 'version_1_2_10'],
  ['version 1.21.0', 'version_1_21_0'],
];

describe('snakeCase', () => {
  test.each(TEST_CASES)('snakeCase(%s) -> %s', (input, expected) => {
    expect(snakeCase(input)).toEqual(expected);
  });
});
