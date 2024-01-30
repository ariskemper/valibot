import type {
  BaseSchema,
  BaseSchemaAsync,
  ErrorMessage,
} from '../../types/index.ts';
import { schemaIssue } from '../../utils/index.ts';
import type { NonNullishInput, NonNullishOutput } from './types.ts';

/**
 * Non nullish schema async type.
 */
export type NonNullishSchemaAsync<
  TWrapped extends BaseSchema | BaseSchemaAsync,
  TOutput = NonNullishOutput<TWrapped>
> = BaseSchemaAsync<NonNullishInput<TWrapped>, TOutput> & {
  /**
   * The schema type.
   */
  type: 'non_nullish';
  /**
   * The wrapped schema.
   */
  wrapped: TWrapped;
  /**
   * The error message.
   */
  message: ErrorMessage;
};

/**
 * Creates an async non nullish schema.
 *
 * @param wrapped The wrapped schema.
 * @param message The error message.
 *
 * @returns An async non nullish schema.
 */
export function nonNullishAsync<TWrapped extends BaseSchema | BaseSchemaAsync>(
  wrapped: TWrapped,
  message: ErrorMessage = 'Invalid type'
): NonNullishSchemaAsync<TWrapped> {
  return {
    type: 'non_nullish',
    async: true,
    wrapped,
    message,
    async _parse(input, info) {
      // Allow `null` and `undefined` values not to pass
      if (input === null || input === undefined) {
        return schemaIssue(info, 'type', 'non_nullish', this.message, input);
      }

      // Return result of wrapped schema
      return this.wrapped._parse(input, info);
    },
  };
}
