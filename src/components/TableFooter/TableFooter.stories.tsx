import type { Meta, StoryObj } from '@storybook/react';
import { TableFooter } from './TableFooter';

const meta = {
  title: 'UI Garden/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Table Footer', backgroundColor: '#2563eb', disabled: false },
  render: (args: any) => <><table><TableFooter {...args} /></table></>,
} satisfies Meta<typeof TableFooter>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
