import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
  ParseInfo: {
    type: {
      type: 'custom',
      name: 'Partial',
      generics: [
        {
          type: 'custom',
          name: 'Pick',
          generics: [
            {
              type: 'custom',
              name: 'Issue',
              href: '../Issue/',
            },
            {
              type: 'union',
              options: [
                { type: 'string', value: 'origin' },
                { type: 'string', value: 'abortEarly' },
                { type: 'string', value: 'abortPipeEarly' },
                { type: 'string', value: 'skipPipe' },
              ],
            },
          ],
        },
      ],
    },
  },
};
