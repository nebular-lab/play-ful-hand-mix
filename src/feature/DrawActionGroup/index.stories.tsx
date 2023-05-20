import { Meta, StoryObj } from '@storybook/react';
import DrawActionGroup from '.';

type Story = StoryObj<typeof DrawActionGroup>;

const meta: Meta<typeof DrawActionGroup> = {
  component: DrawActionGroup,
  argTypes: {},
};
export default meta;
export const Default: Story = {
  args: {
    actions: [
      { move: 'CHECK', percent: 10 },
      { move: 'BET S', percent: 10 },
      { move: 'BET M', percent: 10 },
      { move: 'BET L', percent: 10 },
    ],
  },
};
