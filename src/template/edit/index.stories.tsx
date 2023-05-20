import DrawActionGroupContainer from '@/feature/DrawActionGroup/DrawActionGoupContainer';
import { Meta, StoryObj } from '@storybook/react';
import EditPageContainer from './EditPageContainer';

type Story = StoryObj<typeof EditPageContainer>;

const meta: Meta<typeof EditPageContainer> = {
  component: EditPageContainer,
  argTypes: {},
};
export default meta;
export const Default: Story = {};
