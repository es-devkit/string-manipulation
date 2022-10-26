import { lowerCase } from './lower-case.mjs';
import {
  DEFAULT_SPLIT_REGEXP,
  DEFAULT_STRIP_REGEXP,
  CasingOptions,
} from './casing-options.mjs';

/**
 * Normalize the string into something other libraries can manipulate easier.
 * @param str The string to normalize.
 * @param options The string manipulation options to use.
 * @returns The normalized string.
 * @example
 * noCase('Foo Bar'); // 'foo bar'
 * noCase('fooBar'); // 'foo bar'
 * noCase('foo bar'); // 'foo bar'
 * noCase('foo.bar'); // 'foo bar'
 */
export function noCase(str: string, options: CasingOptions = {}) {
  const {
    splitRegexp = DEFAULT_SPLIT_REGEXP,
    stripRegexp = DEFAULT_STRIP_REGEXP,
    transform = lowerCase,
    delimiter = ' ',
  } = options;

  let result = replace(replace(str, splitRegexp, '$1\0$2'), stripRegexp, '\0');
  let start = 0;
  let end = result.length;

  // Trim the delimiter from around the output string.
  while (result.charAt(start) === '\0') start++;
  while (result.charAt(end - 1) === '\0') end--;

  // Transform each token independently.
  return result.slice(start, end).split('\0').map(transform).join(delimiter);
}

function replace(input: string, regExp: RegExp | RegExp[], value: string) {
  if (regExp instanceof RegExp) return input.replace(regExp, value);
  return regExp.reduce((input, re) => input.replace(re, value), input);
}
