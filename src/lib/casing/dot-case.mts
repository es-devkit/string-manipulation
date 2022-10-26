import { noCase } from './no-case.mjs';
import { CasingOptions } from './casing-options.mjs';

/**
 * Convert a string to dot case.
 * @param input the string to convert to dot case.
 * @param options the string manipulation options to use.
 * @returns the dot case version of the input string.
 * @example
 * dotCase('Foo Bar'); // 'foo.bar'
 * dotCase('fooBar'); // 'foo.bar'
 * dotCase('foo bar'); // 'foo.bar'
 */
export function dotCase(input: string, options: CasingOptions = {}) {
  return noCase(input, {
    delimiter: '.',
    ...options,
  });
}
