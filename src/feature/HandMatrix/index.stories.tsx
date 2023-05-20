import { Meta, StoryObj } from '@storybook/react';

import { HandMatrixContainer } from './HandMatrixContainer';
type Story = StoryObj<typeof HandMatrixContainer>;

const meta: Meta<typeof HandMatrixContainer> = {
  component: HandMatrixContainer,
  argTypes: {},
};
export default meta;
export const Default: Story = {};
