import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './TableHeader';

const meta = {
  title: 'UI Garden/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Table Header', backgroundColor: '#2563eb', disabled: false },
  render: (args: any) => <><table><TableHeader {...args} /></table></>,
} satisfies Meta<typeof TableHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
