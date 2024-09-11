import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({});

const meta = {
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headers: ['code', 'objective', 'goal', 'progress', 'compliance', 'status'],
    data: [
      {
        code: '1',
        objective: lorem.generateSentences(2),
        goal: 100,
        progress: 50,
        compliance: 50,
        status: 'Acceptable',
      },
      {
        code: '2',
        objective: lorem.generateSentences(1),
        goal: 100,
        progress: 30,
        compliance: 30,
        status: 'Critical',
      },
      {
        code: '3',
        objective: lorem.generateSentences(1),
        goal: 100,
        progress: 70,
        compliance: 70,
        status: 'Successful',
      },
    ],
    options: {
      columns: {
        goal: {
          transform: (value) => `$${value}`,
        },
        progress: {
          transform: (value) => `$${value}`,
        },
        compliance: {
          transform: (value) => `${value}%`,
        },
      },
    }
  }
};