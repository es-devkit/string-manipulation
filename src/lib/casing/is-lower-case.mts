import { lowerCase } from './lower-case.mjs';
import { upperCase } from './upper-case.mjs';

/**
 * Check if the input string is lowercase.
 * @param input the string to check if it is lowercase.
 * @returns a boolean indicating whether the string is lower case.
 * @example
 * isLowerCase('foo'); // true
 * isLowerCase('foo bar'); // true
 * isLowerCase('fooBar'); // false
 * isLowerCase('123'); // false
 */
export function isLowerCase(input: string) {
  return lowerCase(input) === input && upperCase(input) !== input;
}
