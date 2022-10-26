import { camelCase, camelCaseTransformMerge } from './camel-case.mjs';
import { CasingOptions } from './casing-options.mjs';

const TEST_CASES: [string, string, CasingOptions?][] = [
  ['', ''],
  ['test', 'test'],
  ['test string', 'testString'],
  ['Test String', 'testString'],
  ['TestV2', 'testV2'],
  ['_foo_bar_', 'fooBar'],
  ['version 1.2.10', 'version_1_2_10'],
  ['version 1.21.0', 'version_1_21_0'],
  ['version 1.2.10', 'version1210', { transform: camelCaseTransformMerge }],
];

describe('camelCase', () => {
  test.each(TEST_CASES)('camelCase(%s) -> "%s"', (input, expected, options) => {
    expect(camelCase(input, options)).toEqual(expected);
  });
});
