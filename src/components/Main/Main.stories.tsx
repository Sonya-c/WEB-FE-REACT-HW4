import type { Meta, StoryObj } from '@storybook/react';

import Main from './Main';

const meta = {
  component: Main,
} satisfies Meta<typeof Main>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};