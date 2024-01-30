import type { BaseSchema, ErrorMessage, Pipe } from '../../types/index.ts';
import { defaultArgs, pipeResult, schemaIssue } from '../../utils/index.ts';

/**
 * Bigint schema type.
 */
export type BigintSchema<TOutput = bigint> = BaseSchema<bigint, TOutput> & {
  /**
   * The schema type.
   */
  type: 'bigint';
  /**
   * The error message.
   */
  message: ErrorMessage;
  /**
   * The validation and transformation pipeline.
   */
  pipe: Pipe<bigint> | undefined;
};

/**
 * Creates a bigint schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A bigint schema.
 */
export function bigint(pipe?: Pipe<bigint>): BigintSchema;

/**
 * Creates a bigint schema.
 *
 * @param message The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A bigint schema.
 */
export function bigint(
  message?: ErrorMessage,
  pipe?: Pipe<bigint>
): BigintSchema;

export function bigint(
  arg1?: ErrorMessage | Pipe<bigint>,
  arg2?: Pipe<bigint>
): BigintSchema {
  // Get message and pipe argument
  const [message = 'Invalid type', pipe] = defaultArgs(arg1, arg2);

  // Create and return bigint schema
  return {
    type: 'bigint',
    async: false,
    message,
    pipe,
    _parse(input, info) {
      // Check type of input
      if (typeof input !== 'bigint') {
        return schemaIssue(info, 'type', 'bigint', this.message, input);
      }

      // Execute pipe and return result
      return pipeResult(input, this.pipe, info, 'bigint');
    },
  };
}
