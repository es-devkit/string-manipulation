import { lowerCase } from './lower-case.mjs';

/**
 * Converts all alphabetic characters to uppercase
 * @param str the string to convert to upper case.
 * @returns a upper cased string.
 * @example
 * upperCase('Foo Bar'); // 'FOO BAR'
 * upperCase('fooBar'); // 'FOO BAR'
 * upperCase('__foo_bar__'); // 'FOO BAR'
 */
export function upperCase(str: string): string;
/**
 * Converts all alphabetic characters to uppercase taking into account the host environment's current locale.
 * @param str the string to convert to upper case.
 * @param locale taking into account the host environment's current locale.
 * @returns a upper cased string.
 * @example
 * upperCase('i', 'tr'); // '\u0130'
 */
export function upperCase(str: string, locale?: string | string[]): string {
  return str.toLocaleUpperCase(locale);
}
