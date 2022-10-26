import { CasingOptions } from './casing-options.mjs';
import { pascalCase, pascalCaseTransformMerge } from './pascal-case.mjs';

const TEST_CASES: [string, string, CasingOptions?][] = [
  ['', ''],
  ['test', 'Test'],
  ['test string', 'TestString'],
  ['Test String', 'TestString'],
  ['TestV2', 'TestV2'],
  ['version 1.2.10', 'Version_1_2_10'],
  ['version 1.21.0', 'Version_1_21_0'],
  ['version 1.21.0', 'Version1210', { transform: pascalCaseTransformMerge }],
];

describe('pascalCase', () => {
  test.each(TEST_CASES)(
    'pascalCase(%s, %o) -> %s',
    (input, expected, options) => {
      expect(pascalCase(input, options)).toEqual(expected);
    }
  );
});
