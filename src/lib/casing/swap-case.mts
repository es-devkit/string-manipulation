import { isLowerCase } from './is-lower-case.mjs';
import { lowerCase } from './lower-case.mjs';
import { upperCase } from './upper-case.mjs';

/**
 * Convert the input string by swapping the case of each character.
 * @param input the string to swap the case of.
 * @return the input string with the case of each character swapped.
 * @example
 * swapCase('Foo Bar'); // 'fOO bAR'
 * swapCase('fooBar'); // 'FOObAR'
 */
export function swapCase(input: string) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    result += isLowerCase(input[i]) ? upperCase(input[i]) : lowerCase(input[i]);
  }
  return result;
}
