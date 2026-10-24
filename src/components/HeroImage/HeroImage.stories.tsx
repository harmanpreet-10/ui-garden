import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta = {
  title: 'UI Garden/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { text: 'Hero Image', backgroundColor: '#2563eb', disabled: false },
  
} satisfies Meta<typeof HeroImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
