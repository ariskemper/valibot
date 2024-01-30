import { IPV4_REGEX } from '../../regex.ts';
import type { BaseValidation, ErrorMessage } from '../../types/index.ts';
import { actionIssue, actionOutput } from '../../utils/index.ts';

/**
 * IPv4 validation type.
 */
export type Ipv4Validation<TInput extends string> = BaseValidation<TInput> & {
  /**
   * The validation type.
   */
  type: 'ipv4';
  /**
   * The IPv4 regex.
   */
  requirement: RegExp;
};

/**
 * Creates a pipeline validation action that validates an [IPv4](https://en.wikipedia.org/wiki/IPv4) address.
 *
 * @param message The error message.
 *
 * @returns A validation action.
 */
export function ipv4<TInput extends string>(
  message: ErrorMessage = 'Invalid IPv4'
): Ipv4Validation<TInput> {
  return {
    type: 'ipv4',
    async: false,
    message,
    requirement: IPV4_REGEX,
    _parse(input) {
      return !this.requirement.test(input)
        ? actionIssue(this.type, this.message, input, this.requirement)
        : actionOutput(input);
    },
  };
}
