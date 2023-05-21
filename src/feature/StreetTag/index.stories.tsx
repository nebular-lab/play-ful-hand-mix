import { Meta, StoryObj } from '@storybook/react';
import StreetTagContainer from './StreetTagContainer';
type Story = StoryObj<typeof StreetTagContainer>;
const meta: Meta<typeof StreetTagContainer> = {
  component: StreetTagContainer,
  argTypes: {},
};
export default meta;

export const Default: Story = {
  args: {
    onClick: () => {},
    isSelected: false,
  },
};
