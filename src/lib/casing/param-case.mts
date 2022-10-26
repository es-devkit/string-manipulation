import { noCase } from './no-case.mjs';
import { CasingOptions } from './casing-options.mjs';

/**
 * Convert a string to param case.
 * @param input The string to convert.
 * @param options The string manipulation options to use.
 * @returns The param case version of the input string.
 * @example
 * paramCase('Foo Bar'); // 'foo-bar'
 * paramCase('fooBar'); // 'foo-bar'
 */
export function paramCase(input: string, options: CasingOptions = {}) {
  return noCase(input, {
    delimiter: '-',
    ...options,
  });
}
