import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta = {
  title: 'UI Garden/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Radio Button', backgroundColor: '#2563eb', disabled: false },
  
} satisfies Meta<typeof RadioButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
