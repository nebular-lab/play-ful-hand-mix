import { Meta, StoryObj } from '@storybook/react';

import IncludeSuitSelectContainer from './IncludeSuitSelectContainer';

type Story = StoryObj<typeof IncludeSuitSelectContainer>;

const meta: Meta<typeof IncludeSuitSelectContainer> = {
  component: IncludeSuitSelectContainer,
  argTypes: {},
};
export default meta;
export const Default: Story = {};
