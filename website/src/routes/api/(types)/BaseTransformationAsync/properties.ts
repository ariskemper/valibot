import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
  TInput: {
    modifier: 'extends',
    type: 'any',
  },
  BaseTransformationAsync: {
    type: {
      type: 'custom',
      name: 'Object',
      generics: [
        {
          type: 'custom',
          name: 'TInput',
        },
      ],
    },
  },
  async: {
    type: {
      type: 'boolean',
      value: true,
    },
  },
  _parse: {
    type: {
      type: 'function',
      params: [
        {
          name: 'input',
          type: {
            type: 'custom',
            name: 'TInput',
          },
        },
      ],
      return: {
        type: 'custom',
        name: 'Promise',
        generics: [
          {
            type: 'custom',
            name: 'PipeActionResult',
            href: '../PipeActionResult/',
            generics: [
              {
                type: 'custom',
                name: 'TInput',
              },
            ],
          },
        ],
      },
    },
  },
};
