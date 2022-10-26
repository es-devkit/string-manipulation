import { capitalCase } from './capital-case.mjs';
import { CasingOptions } from './casing-options.mjs';

/**
 * Convert a string to header case.
 * @param input the string to convert to header case.
 * @param options the string manipulation options to use.
 * @returns the header case version of the input string.
 * @example
 * headerCase('Foo Bar'); // 'Foo-Bar'
 * headerCase('fooBar'); // 'Foo-Bar'
 * headerCase('foo bar'); // 'Foo-Bar'
 */
export function headerCase(input: string, options: CasingOptions = {}) {
  return capitalCase(input, {
    delimiter: '-',
    ...options,
  });
}
