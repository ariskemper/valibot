import type { BaseValidation, ErrorMessage } from '../../types/index.ts';
import { actionIssue, actionOutput } from '../../utils/index.ts';

/**
 * Min bytes validation type.
 */
export type MinBytesValidation<
  TInput extends string,
  TRequirement extends number
> = BaseValidation<TInput> & {
  /**
   * The validation type.
   */
  type: 'min_bytes';
  /**
   * The minimum byte length.
   */
  requirement: TRequirement;
};

/**
 * Creates a pipeline validation action that validates the byte length of a
 * string.
 *
 * @param requirement The minimum length in byte.
 * @param message The error message.
 *
 * @returns A validation action.
 */
export function minBytes<TInput extends string, TRequirement extends number>(
  requirement: TRequirement,
  message: ErrorMessage = 'Invalid byte length'
): MinBytesValidation<TInput, TRequirement> {
  return {
    type: 'min_bytes',
    async: false,
    message,
    requirement,
    _parse(input) {
      return new TextEncoder().encode(input).length < this.requirement
        ? actionIssue(this.type, this.message, input, this.requirement)
        : actionOutput(input);
    },
  };
}
