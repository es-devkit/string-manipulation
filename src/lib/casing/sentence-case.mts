import { noCase } from './no-case.mjs';
import { CasingOptions } from './casing-options.mjs';
import { upperCaseFirst } from './upper-case-first.mjs';

/**
 * Transform a string to sentence case.
 * @param input the string to transform to sentence case.
 * @param index the index of the current character in the input string.
 * @returns the sentence case version of the input string.
 */
export function sentenceCaseTransform(input: string, index: number) {
  const result = input.toLowerCase();
  if (index === 0) return upperCaseFirst(result);
  return result;
}

/**
 * Convert a string to sentence case.
 * @param input the string to convert to sentence case.
 * @param options the string manipulation options to use.
 * @returns the sentence case version of the input string.
 */
export function sentenceCase(input: string, options: CasingOptions = {}) {
  return noCase(input, {
    delimiter: ' ',
    transform: sentenceCaseTransform,
    ...options,
  });
}
