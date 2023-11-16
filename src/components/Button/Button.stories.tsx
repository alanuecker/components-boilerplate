import React from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ButtonTheme } from './types';

const ExampleIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 11.5L6 8L9.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    theme: {
      name: 'theme',
      defaultValue: ButtonTheme.Primary,
      description:
        'Change the theme of the button element to a predefined style.',
      table: {
        type: { summary: 'ButtonTheme' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Button> = ({ children, ...rest }) => (
  <Button {...rest}>{children ?? 'Button'}</Button>
);

export const Primary: Story = {
  render: Template,
  args: { theme: ButtonTheme.Primary },
};

export const PrimaryWithIcon: Story = {
  render: Template,
  args: {
    theme: ButtonTheme.Primary,
    leadingIcon: <ExampleIcon />,
  },
};

export const Secondary: Story = {
  render: Template,
  args: { theme: ButtonTheme.Secondary },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};

export const Tertiary: Story = {
  render: Template,
  args: { theme: ButtonTheme.Tertiary },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};

export const Text: Story = {
  render: Template,
  args: { theme: ButtonTheme.Text },
};

export const Small: Story = {
  render: Template,
  args: {
    small: true,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};

export const SmallWithIcon: Story = {
  render: Template,
  args: {
    small: true,
    leadingIcon: <ExampleIcon />,
    children: 'Back to Showcases',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
