import { noCase } from './no-case.mjs';
import { CasingOptions } from './casing-options.mjs';

/**
 * Convert a string to path case.
 * @param input the string to convert to path case.
 * @param options the string manipulation options to use.
 * @returns the path case version of the input string.
 * @example
 * pathCase('Foo Bar'); // 'foo/bar'
 * pathCase('fooBar'); // 'foo/bar'
 * pathCase('foo bar'); // 'foo/bar'
 */
export function pathCase(input: string, options: CasingOptions = {}) {
  return noCase(input, {
    delimiter: '/',
    ...options,
  });
}
