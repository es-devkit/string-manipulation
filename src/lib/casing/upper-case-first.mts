import { upperCase } from './upper-case.mjs';

/**
 * Upper case the first character of an input string.
 * @param input the string to upper case the first character of.
 * @returns the input string with the first character upper cased.
 * @example
 * upperCaseFirst('foo'); // 'Foo'
 * upperCaseFirst('foo bar'); // 'Foo bar'
 * upperCaseFirst('fooBar'); // 'FooBar'
 */
export function upperCaseFirst(input: string) {
  return upperCase(input.charAt(0)) + input.substring(1);
}
