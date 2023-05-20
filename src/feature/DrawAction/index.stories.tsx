import { Meta, StoryObj } from '@storybook/react';
import DrawActionContainer from './DrawActionContainer';

type Story = StoryObj<typeof DrawActionContainer>;

const meta: Meta<typeof DrawActionContainer> = {
  component: DrawActionContainer,
  argTypes: {},
};
export default meta;
export const Default: Story = {
  args: {
    action: { move: 'FOLD', percent: 10 },
  },
};
