import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import { LoremIpsum } from "lorem-ipsum";
import Chip from '../Chip';
import { ChipTypeEnum } from '../Chip';

const lorem = new LoremIpsum({});

const meta = {
  component: Table,
  argTypes: {
    tableKey: {
      description: 'Table key. This key is used to generate unique ids for the table elements.',
    },
    headers: {
      description: 'Table headers',
    },
    data: {
      description: 'Table data',
    },
    options: {
      description: `The data to be displayed in the table.

\`headers\`: Object with the column name as key and an object with the transform function as value. The transform function is used to format the data before rendering it.

\`headers.transform\`: Function that receives the header name and returns a string, number, boolean or JSX.Element.

\`rows\`: Object with the column name as key and an object with the equation and transform functions as value. The equation function is used to transform the data before rendering it. The transform function is used to format the data before rendering it.
      
\`rows.equation\`: Function that receives the row data and returns a string, number or boolean.

\`rows.transform\`: Function that receives the data and returns a string, number, boolean or JSX.Element.
`,
      table: {
        type: {
          summary: 'TableProps options',
          detail: `
options?: {
  headers?: {
    [key: string]: {
      transform?: (value: string | number | boolean) => string | number | boolean | JSX.Element;
    };
  },
  rows?: {
    [key: string]: {
      equation? (row: rowType): string | number | boolean;
      transform?: (value: string | number | boolean) => string | number | boolean | JSX.Element;
    };
  }
};
          `
        },
      },
    },
  }
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * ## Example
 * This example shows a Table. The columns goal, progress and compliance are transformed into currency, currency and percentage, respectively. The status column is transformed into a Chip component.
 */
export const Default: Story = {
  args: {
    tableKey: 'story-table',
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
      rows: {
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
          equation: (row) => {
            const compliance = Number(row['compliance']);
            return compliance >= 76 ? 'Successful' : compliance >= 36 ? 'Acceptable' : 'Critical';
          },
          transform: (value) => {
            return <Chip 
              value={value.toString()}
              type={value === 'Critical' ? ChipTypeEnum.danger : value === 'Successful' ? ChipTypeEnum.success : ChipTypeEnum.warning}
            />
          },
        }
      },
    }
  }
};