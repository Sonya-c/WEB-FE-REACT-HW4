import type { Meta, StoryObj } from '@storybook/react';
import CardList from './CardList';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({});

const meta = {
  component: CardList,
  title: 'CardList',
} satisfies Meta<typeof CardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    title: lorem.generateWords(2),
    items: [
      {
        id: 1,
        name: lorem.generateWords(5),
        description: lorem.generateSentences(2),
      },
      {
        id: 1,
        name: lorem.generateWords(5),
        description: lorem.generateSentences(2),
      },
      {
        id: 1,
        name: lorem.generateWords(5),
        description: lorem.generateSentences(2),
      }
    ],
  },
};