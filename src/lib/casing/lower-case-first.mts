import { lowerCase } from './lower-case.mjs';

/**
 * Lower case the first character of an input string.
 * @param input the string to lower case the first character of.
 * @returns the input string with the first character lower cased.
 * @example
 * lowerCaseFirst('Foo'); // 'foo'
 * lowerCaseFirst('FOO'); // 'fOO'
 * lowerCaseFirst('foo'); // 'foo'
 */
export function lowerCaseFirst(input: string) {
  return lowerCase(input.charAt(0)) + input.substring(1);
}
