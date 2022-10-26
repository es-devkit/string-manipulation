import { swapCase } from './swap-case.mjs';

const TEST_CASES: [string, string][] = [
  ['', ''],
  ['test', 'TEST'],
  ['test string', 'TEST STRING'],
  ['Test String', 'tEST sTRING'],
  ['TestV2', 'tESTv2'],
  ['sWaP cAsE', 'SwAp CaSe'],
];

describe('swapCase', () => {
  test.each(TEST_CASES)('swapCase(%s) -> %s', (input, expected) => {
    expect(swapCase(input)).toEqual(expected);
  });
});
