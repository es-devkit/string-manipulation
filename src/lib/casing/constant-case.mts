import { CasingOptions } from './casing-options.mjs';
import { noCase } from './no-case.mjs';
import { upperCase } from './upper-case.mjs';

export function constantCase(input: string, options: CasingOptions = {}) {
  return noCase(input, {
    delimiter: '_',
    transform: upperCase,
    ...options,
  });
}
