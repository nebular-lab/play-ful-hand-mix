import { Meta, StoryObj } from '@storybook/react';
import { HandSquare } from '.';
type Story = StoryObj<typeof HandSquare>;
const meta: Meta<typeof HandSquare> = {
  component: HandSquare,
  argTypes:{
    
  }
};
export default meta;
export const Default: Story = {
  args: {
    handleDraw: () => {},
    suit: 'pair',
    hands: [
      {
        actions: [{ move: 'FOLD', percent: 100 }],
      },
      {
        actions: [{ move: 'FOLD', percent: 100 }],
      },
      {
        actions: [{ move: 'FOLD', percent: 100 }],
      },
      {
        actions: [{ move: 'FOLD', percent: 100 }],
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
