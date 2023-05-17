import { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from '.';

type T = typeof CustomButton;
type Story = StoryObj<T>;
const meta: Meta<T> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */

  component: CustomButton,
};

export default meta;
