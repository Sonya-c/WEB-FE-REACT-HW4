import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import { LoremIpsum } from "lorem-ipsum";
import Chip from '../Chip';
import { ChipTypeEnum } from '../Chip/Chip';

const lorem = new LoremIpsum({});

const meta = {
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * ## Example
 * This example shows a Table. The columns goal, progress and compliance are transformed into currency, currency and percentage, respectively. The status column is transformed into a Chip component.
 */
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
      },
      {
        code: '2',
        objective: lorem.generateSentences(1),
        goal: 100,
        progress: 30,
        compliance: 30,
      },
      {
        code: '3',
        objective: lorem.generateSentences(1),
        goal: 100,
        progress: 70,
        compliance: 76,
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
        status: {
          transform: (_, row) => {
            if (!row) return '';

            const compliance = Number(row['compliance']);
            const status = compliance >= 76 ? 'Successful' : compliance >= 36 ? 'Acceptable' : 'Critical';

            return <Chip 
              value={status.toString()}
              type={status === 'Critical' ? ChipTypeEnum.danger : status === 'Successful' ? ChipTypeEnum.success : ChipTypeEnum.warning}
            />
          },
        }
      },
    }
  }
};