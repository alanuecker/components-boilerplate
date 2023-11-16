import type { Preview } from '@storybook/react';

import '../src/styles/fonts.scss';
import '../src/styles/variables.scss';
import '../src/styles/typography.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
