import { Meta, StoryObj } from '@storybook/react';
import { HandMatrix } from '.';
import { defaultHandRange } from '@/const';
type Story = StoryObj<typeof HandMatrix>;
const meta: Meta<typeof HandMatrix> = {
  component: HandMatrix,
  argTypes: {},
};
export default meta;
export const Default: Story = {
  args: {
    handRange: defaultHandRange,
  },
};
