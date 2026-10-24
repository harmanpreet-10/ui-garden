import type { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta = {
  title: 'UI Garden/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Image', backgroundColor: '#2563eb', disabled: false },
  
} satisfies Meta<typeof Img>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
