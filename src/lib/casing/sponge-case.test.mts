import { spongeCase } from './sponge-case.mjs';

const TEST_CASES: [string, number][] = [
  ['', 0],
  ['test', 4],
  ['test string', 11],
  ['Test String', 11],
  ['TestV2', 6],
  ['rAnDoM cAsE', 11],
];

describe('spongeCase', () => {
  /* Since strings are non-deterministic, we test string length to ensure integrity */
  test.each(TEST_CASES)('spongeCase(%s) -> %s', (input, expected) => {
    expect(spongeCase(input).length).toEqual(expected);
  });
});
