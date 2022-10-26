import { lowerCase } from './lower-case.mjs';
import { noCase } from './no-case.mjs';
import { CasingOptions } from './casing-options.mjs';
import { upperCase } from './upper-case.mjs';

/**
 * Transform a string to pascal case.
 * @param input the string to convert to pascal case.
 * @param index the index of the string
 * @returns the pascal case version of the input string.
 */
export function pascalCaseTransform(input: string, index: number) {
  const firstChar = input.charAt(0);
  const lowerChars = input.substring(1).toLowerCase();
  if (index > 0 && firstChar >= '0' && firstChar <= '9') {
    return `_${firstChar}${lowerChars}`;
  }
  return `${firstChar.toUpperCase()}${lowerChars}`;
}

/**
 * Transform a pre merged string to pascal case.
 * @param input the string to convert to pascal case.
 * @returns the pascal case version of the input string.
 */
export function pascalCaseTransformMerge(input: string) {
  return upperCase(input.charAt(0)) + lowerCase(input.slice(1));
}

/**
 * Convert a string to pascal case.
 * @param input the string to convert to pascal case.
 * @param options the string manipulation options to use.
 * @returns the pascal case version of the input string.
 */
export function pascalCase(input: string, options: CasingOptions = {}) {
  return noCase(input, {
    delimiter: '',
    transform: pascalCaseTransform,
    ...options,
  });
}
