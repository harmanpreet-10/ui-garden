import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';

const meta = {
  title: 'UI Garden/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Table Row', backgroundColor: '#2563eb', disabled: false },
  render: (args: any) => <><table><tbody><TableRow {...args} /></tbody></table></>,
} satisfies Meta<typeof TableRow>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
