import { Meta, StoryObj } from '@storybook/react';

import HandTreeContainer from './HandTreeContainer';

type Story = StoryObj<typeof HandTreeContainer>;

const meta: Meta<typeof HandTreeContainer> = {
  component: HandTreeContainer,
  argTypes: {},
};
export default meta;
export const Default: Story = {};
