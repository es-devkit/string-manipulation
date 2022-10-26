import { lowerCase } from './lower-case.mjs';
import { upperCase } from './upper-case.mjs';

/**
 * Check if the input string is upper case.
 * @param input the string to check if it is upper case.
 * @returns a boolean indicating whether the string is upper case.
 * @example
 * isUpperCase('FOO'); // true
 * isUpperCase('FOO BAR'); // true
 * isUpperCase('FOOBAR'); // true
 * isUpperCase('Foobar'); // false
 * isUpperCase('123'); // false
 */
export function isUpperCase(input: string) {
  return upperCase(input) === input && lowerCase(input) !== input;
}
