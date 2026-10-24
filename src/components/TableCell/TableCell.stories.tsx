import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';

const meta = {
  title: 'UI Garden/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Table Cell', backgroundColor: '#2563eb', disabled: false },
  render: (args: any) => <><table><tbody><tr><TableCell {...args} /></tr></tbody></table></>,
} satisfies Meta<typeof TableCell>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
