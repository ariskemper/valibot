import { MAC48_REGEX } from '../../regex.ts';
import type { BaseValidation, ErrorMessage } from '../../types/index.ts';
import { actionIssue, actionOutput } from '../../utils/index.ts';

/**
 * MAC validation type.
 */
export type Mac48Validation<TInput extends string> = BaseValidation<TInput> & {
  /**
   * The validation type.
   */
  type: 'mac48';
  /**
   * The 48 bit MAC regex.
   */
  requirement: RegExp;
};

/**
 * Creates a pipeline validation action that validates a 48 bit [MAC](https://en.wikipedia.org/wiki/MAC_address).
 *
 * @param message The error message.
 *
 * @returns A validation action.
 */
export function mac48<TInput extends string>(
  message: ErrorMessage = 'Invalid 48 bit MAC'
): Mac48Validation<TInput> {
  return {
    type: 'mac48',
    async: false,
    message,
    requirement: MAC48_REGEX,
    _parse(input) {
      return !this.requirement.test(input)
        ? actionIssue(this.type, this.message, input, this.requirement)
        : actionOutput(input);
    },
  };
}
