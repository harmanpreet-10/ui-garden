
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'UI Garden/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
    },
    backgroundColor: {
      control: 'color',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    text: 'Click Me',
    backgroundColor: '#007bff',
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    disabled: true,
  },
};

export const Green: Story = {
  args: {
    text: 'Green Button',
    backgroundColor: '#28a745',
    disabled: false,
  },
};

export const Red: Story = {
  args: {
    text: 'Red Button',
    backgroundColor: '#dc3545',
    disabled: false,
  },
};
