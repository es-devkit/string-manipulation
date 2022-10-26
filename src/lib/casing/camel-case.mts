import { lowerCase } from './lower-case.mjs';
import { CasingOptions } from './casing-options.mjs';
import {
  pascalCase,
  pascalCaseTransform,
  pascalCaseTransformMerge,
} from './pascal-case.mjs';

/**
 * Transform a string to camel case.
 * @param input the string to convert to camel case.
 * @param index the index of the current word in the input string.
 * @returns the camel case version of the input string.
 */
export function camelCaseTransform(input: string, index: number) {
  if (index === 0) return lowerCase(input);
  return pascalCaseTransform(input, index);
}

/**
 * Transform a pre merged string to camel case
 * @param input the string to convert to camel case.
 * @param index the index of the current word in the input string.
 * @returns the camel case version of the input string.
 */
export function camelCaseTransformMerge(input: string, index: number) {
  if (index === 0) return lowerCase(input);
  return pascalCaseTransformMerge(input);
}

/**
 * Convert a string to camel case.
 * @param input the string to convert to camel case.
 * @param options the string manipulation options to use.
 * @returns the camel case version of the input string.
 * @example
 * camelCase('Foo Bar'); // 'fooBar'
 * camelCase('fooBar'); // 'fooBar'
 * camelCase('_foo_bar_'); // 'fooBar'
 * camelCase('FOO_BAR'); // 'fooBar'
 */
export function camelCase(input: string, options: CasingOptions = {}) {
  return pascalCase(input, {
    transform: camelCaseTransform,
    ...options,
  });
}
