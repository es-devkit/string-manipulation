/**
 * Convert a string to sponge case (random casing).
 * @param input the string to convert to sponge case.
 * @returns the sponge case version of the input string.
 * @example
 * spongeCase('Foo Bar'); // 'fOo bAr'
 * spongeCase('Foo Bar'); // 'FOo BaR'
 */
export function spongeCase(input: string): string {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    result +=
      Math.random() > 0.5 ? input[i].toUpperCase() : input[i].toLowerCase();
  }
  return result;
}
