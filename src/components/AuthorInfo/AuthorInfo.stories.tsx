import type { Meta, StoryObj } from "@storybook/react";

import AuthorInfo from "./AuthorInfo";

const meta = {
  component: AuthorInfo,
} satisfies Meta<typeof AuthorInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/50",
    authorName: "John Doe",
    date: new Date(),
  },
};
