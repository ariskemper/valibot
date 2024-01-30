import { EMAIL_REGEX } from '../../regex.ts';
import type { BaseValidation, ErrorMessage } from '../../types/index.ts';
import { actionIssue, actionOutput } from '../../utils/index.ts';

/**
 * Email validation type.
 */
export type EmailValidation<TInput extends string> = BaseValidation<TInput> & {
  /**
   * The validation type.
   */
  type: 'email';
  /**
   * The email regex.
   */
  requirement: RegExp;
};

/**
 * Creates a pipeline validation action that validates an email.
 *
 * @param message The error message.
 *
 * @returns A validation action.
 */
export function email<TInput extends string>(
  message: ErrorMessage = 'Invalid email'
): EmailValidation<TInput> {
  return {
    type: 'email',
    async: false,
    message,
    requirement: EMAIL_REGEX,
    _parse(input) {
      return !this.requirement.test(input)
        ? actionIssue(this.type, this.message, input, this.requirement)
        : actionOutput(input);
    },
  };
}
