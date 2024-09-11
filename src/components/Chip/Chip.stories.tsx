import type { Meta, StoryObj } from '@storybook/react';

import Chip, { ChipTypeEnum } from './Chip';

const meta = {
  component: Chip,
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Chip',
  }
};

export const Success: Story = {
  args: {
    value: 'Success',
    type: ChipTypeEnum.success,
  }
};

export const Warning: Story = {
  args: {
    value: 'Warning',
    type: ChipTypeEnum.warning,
  }
};

export const Danger: Story = {
  args: {
    value: 'Danger',
    type: ChipTypeEnum.danger,
  }
};

