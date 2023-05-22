import { Meta, StoryObj } from '@storybook/react';
import HandSquare from '.';
type Story = StoryObj<typeof HandSquare>;
const meta: Meta<typeof HandSquare> = {
  component: HandSquare,
  argTypes: {},
};
export default meta;
export const Default: Story = {
  args: {
    onMouseDown: () => {},
    gridNum: 6,
    text: 'AA',
    isExist: true,
    hands: [
      { isDeleted: false, actions: [{ move: 'FOLD', percent: 10 }] },
      {
        isDeleted: false,
        actions: [
          { move: 'FOLD', percent: 10 },
          { move: 'CALL', percent: 10 },
        ],
      },
      {
        isDeleted: false,
        actions: [{ move: 'FOLD', percent: 10 }],
      },
      {
        isDeleted: false,
        actions: [{ move: 'BET M', percent: 100 }],
      },
      {
        isDeleted: false,
        actions: [{ move: 'FOLD', percent: 100 }],
      },
      {
        isDeleted: false,
        actions: [{ move: 'FOLD', percent: 100 }],
      },
    ],
  },
};
