import { Meta, StoryObj } from '@storybook/react';

import { defaultHandRange } from '@/const';
import { HandMatrixContainer } from './HandMatrixContainer';
import { RecoilRoot } from 'recoil';
type Story = StoryObj<typeof HandMatrixContainer>;
const RecoilComponent = () => (
  <RecoilRoot>
    <HandMatrixContainer />
  </RecoilRoot>
);
const meta: Meta<typeof HandMatrixContainer> = {
  component: RecoilComponent,
  argTypes: {},
};
export default meta;
export const Default: Story = {};
