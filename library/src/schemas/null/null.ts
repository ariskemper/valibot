import type { BaseSchema, ErrorMessage } from '../../types/index.ts';
import { parseResult, schemaIssue } from '../../utils/index.ts';

/**
 * Null schema type.
 */
export type NullSchema<TOutput = null> = BaseSchema<null, TOutput> & {
  /**
   * The schema type.
   */
  type: 'null';
  /**
   * The error message.
   */
  message: ErrorMessage;
};

/**
 * Creates a null schema.
 *
 * @param message The error message.
 *
 * @returns A null schema.
 */
export function null_(message: ErrorMessage = 'Invalid type'): NullSchema {
  return {
    type: 'null',
    async: false,
    message,
    _parse(input, info) {
      // Check type of input
      if (input !== null) {
        return schemaIssue(info, 'type', 'null', this.message, input);
      }

      // Return parse result
      return parseResult(true, input);
    },
  };
}

/**
 * See {@link null_}
 *
 * @deprecated Use `null_` instead.
 */
export const nullType = null_;
