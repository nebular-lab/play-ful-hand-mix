import { Meta, StoryObj } from '@storybook/react';

import TagContainer from './TagContainer';
type Story = StoryObj<typeof TagContainer>;
const meta: Meta<typeof TagContainer> = {
  component: TagContainer,
  argTypes: {},
};
export default meta;
export const OOP: Story = {
  args: {
    type: 'Position',
    position: 'OOP',
  },
};
export const IP: Story = {
  args: {
    type: 'Position',
    position: 'IP',
  },
};
export const BETS: Story = {
  args: {
    type: 'Move',
    move: 'BET S',
  },
};
export const BETM: Story = {
  args: {
    type: 'Move',
    move: 'BET M',
  },
};
export const BETL: Story = {
  args: {
    type: 'Move',
    move: 'BET L',
  },
};
export const CHECK: Story = {
  args: {
    type: 'Move',
    move: 'CHECK',
  },
};
export const CALL: Story = {
  args: {
    type: 'Move',
    move: 'CALL',
  },
};
export const FOLD: Story = {
  args: {
    type: 'Move',
    move: 'FOLD',
  },
};
export const RAISE: Story = {
  args: {
    type: 'Move',
    move: 'RAISE',
  },
};
export const ALLIN: Story = {
  args: {
    type: 'Move',
    move: 'ALLIN',
  },
};
