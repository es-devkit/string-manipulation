import { upperCase } from './upper-case.mjs';

const SMALL_WORDS =
  /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i;
const TOKENS = /[^\s:–—-]+|./g;
const WHITESPACE = /\s/;
const IS_MANUAL_CASE = /.(?=[A-Z]|\..)/;
const ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/;

/**
 * Convert a string to title case.
 * @param input the string to convert to title case.
 * @returns the title case version of the input string.
 * @example
 * titleCase('foo bar'); // 'Foo Bar'
 * titleCase('fooBar'); // 'Foo Bar'
 * titleCase('pass camelCase through'); // 'Pass camelCase Through'
 */
export function titleCase(input: string) {
  let result = '';
  let m: RegExpExecArray | null;

  while ((m = TOKENS.exec(input)) !== null) {
    const { 0: token, index } = m;

    if (
      // Ignore already capitalized words.
      !IS_MANUAL_CASE.test(token) &&
      // Ignore small words except at beginning or end.
      (!SMALL_WORDS.test(token) ||
        index === 0 ||
        index + token.length === input.length) &&
      // Ignore URLs.
      (input.charAt(index + token.length) !== ':' ||
        WHITESPACE.test(input.charAt(index + token.length + 1)))
    ) {
      // Find and uppercase first word character, skips over *modifiers*.
      result += token.replace(ALPHANUMERIC_PATTERN, (m) => upperCase(m));
      continue;
    }

    result += token;
  }

  return result;
}
