import { noCase } from './no-case.mjs';
import { CasingOptions } from './casing-options.mjs';
import { upperCaseFirst } from './upper-case-first.mjs';

/**
 * Convert a string to capital case.
 * @param input the string to convert to capital case.
 * @returns the capital case version of the input string.
 */
export function capitalCaseTransform(input: string) {
  return upperCaseFirst(input.toLowerCase());
}

/**
 * Convert a string to capital case.
 * @param input The string to convert to capital case.
 * @param options The string manipulation options to use.
 * @returns The capital case version of the input string.
 * @example
 * capitalCase('Foo Bar'); // 'Foo Bar'
 * capitalCase('fooBar'); // 'Foo Bar'
 * capitalCase('foo bar'); // 'Foo Bar'
 */
export function capitalCase(input: string, options: CasingOptions = {}) {
  return noCase(input, {
    delimiter: ' ',
    transform: capitalCaseTransform,
    ...options,
  });
}
