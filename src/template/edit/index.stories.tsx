import DrawActionGroupContainer from '@/feature/DrawActionGroup/DrawActionGoupContainer';
import { Meta, StoryObj } from '@storybook/react';
import EditPage from '.';

type Story = StoryObj<typeof EditPage>;

const meta: Meta<typeof EditPage> = {
  component: EditPage,
  argTypes: {},
};
export default meta;
export const Default: Story = {};
