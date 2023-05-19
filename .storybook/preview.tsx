import type { Decorator, Preview } from '@storybook/react';
import { theme } from '../src/theme';
import { RecoilRoot } from 'recoil';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: {
      theme,
    },
    layout: 'fullscreen',
    decorators: [
      (Story) => (
        <RecoilRoot>
          <Story />
        </RecoilRoot>
      ),
    ],
  },
};

export default preview;
