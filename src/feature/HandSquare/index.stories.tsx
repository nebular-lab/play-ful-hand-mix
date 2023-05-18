import { Meta, StoryObj } from '@storybook/react';
import { HandSquare } from '.';
type Story = StoryObj<typeof HandSquare>;
const meta: Meta<typeof HandSquare> = {
  component: HandSquare,
  argTypes: {},
};
export default meta;
export const Default: Story = {
  args: {
    handleDraw: () => {},
    suit: 'pair',
    text: 'AA',
    isExist: true,
    hands: [
      {
        actions: [{ move: 'FOLD', percent: 10 }],
      },
      {
        actions: [
          { move: 'FOLD', percent: 10 },
          { move: 'CALL', percent: 10 },
        ],
      },
      {
        actions: [{ move: 'FOLD', percent: 10 }],
      },
      {
        actions: [{ move: 'BET M', percent: 100 }],
      },
      {
        actions: [{ move: 'FOLD', percent: 100 }],
      },
      {
        actions: [{ move: 'FOLD', percent: 100 }],
      },
    ],
  },
};
