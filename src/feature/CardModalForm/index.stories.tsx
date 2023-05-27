import { Meta, StoryObj } from '@storybook/react';

import { CardModalFormContainer } from './CardModalFormContainer';

type Story = StoryObj<typeof CardModalFormContainer>;

const meta: Meta<typeof CardModalFormContainer> = {
  component: CardModalFormContainer,
  argTypes: {},
};
export default meta;
export const Default: Story = {
  args: {},
};
