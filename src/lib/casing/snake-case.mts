import { noCase } from './no-case.mjs';
import { CasingOptions } from './casing-options.mjs';

/**
 * Convert a string to snake case.
 * @param input the string to convert to snake case.
 * @param options the string manipulation options to use.
 * @returns the snake case version of the input string.
 */
export function snakeCase(input: string, options: CasingOptions = {}) {
  return noCase(input, {
    delimiter: '_',
    ...options,
  });
}
