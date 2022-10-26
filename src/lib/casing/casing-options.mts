/**
 * Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
 */
export const DEFAULT_SPLIT_REGEXP = [
  /([a-z0-9])([A-Z])/g,
  /([A-Z])([A-Z][a-z])/g,
];

/**
 * Removes all non-word characters.
 */
export const DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;

/**
 * String casing options.
 * @property delimiter The delimiter to use when joining characters.
 * @property splitRegexp The regular expression to use when splitting characters.
 * @property stripRegexp The regular expression to use when stripping characters.
 * @property transform The transform function to use when transforming characters.
 */
export interface CasingOptions {
  splitRegexp?: RegExp | RegExp[];
  stripRegexp?: RegExp | RegExp[];
  delimiter?: string;
  transform?: (part: string, index: number, parts: string[]) => string;
}
