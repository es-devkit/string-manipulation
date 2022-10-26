/**
 * Converts all alphabetic characters to lowercase
 * @param str the string to convert to lower case.
 * @returns a lower cased string.
 */
export function lowerCase(str: string): string;
/**
 * Converts all alphabetic characters to lowercase
 * @param str the string to convert to lower case.
 * @param locale taking into account the host environment's current locale.
 * @returns a lower cased string.
 * @example
 * lowerCase('Foo Bar'); // 'foo bar'
 * lowerCase('fooBar'); // 'foo bar'
 * lowerCase('__FOO_BAR__'); // 'foo bar'
 */
export function lowerCase(str: string, locale?: string | string[]): string {
  return str.toLocaleLowerCase(locale);
}
