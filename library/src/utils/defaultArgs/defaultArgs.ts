import type { ErrorMessage, Pipe, PipeAsync } from '../../types/index.ts';

/**
 * Returns message and pipe from dynamic arguments.
 *
 * @param arg1 First argument.
 * @param arg2 Second argument.
 *
 * @returns The default arguments.
 */
export function defaultArgs<TPipe extends Pipe<any> | PipeAsync<any>>(
  arg1: ErrorMessage | TPipe | undefined,
  arg2: TPipe | undefined
): [ErrorMessage | undefined, TPipe | undefined] {
  return Array.isArray(arg1) ? [undefined, arg1] : [arg1, arg2];
}
