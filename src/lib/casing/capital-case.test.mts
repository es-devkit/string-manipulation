import { capitalCase } from './capital-case.mjs';

const TEST_CASES: [string, string][] = [
  ['', ''],
  ['test', 'Test'],
  ['test string', 'Test String'],
  ['Test String', 'Test String'],
  ['TestV2', 'Test V2'],
  ['version 1.2.10', 'Version 1 2 10'],
  ['version 1.21.0', 'Version 1 21 0'],
];

describe('capitalCase', () => {
  test.each(TEST_CASES)('capitalCase(%s) -> "%s"', (input, expected) => {
    expect(capitalCase(input)).toEqual(expected);
  });
});
