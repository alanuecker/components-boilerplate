import React from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { HeaderDropdown } from './HeaderDropdown';

const meta: Meta<typeof HeaderDropdown> = {
  title: 'Components/Header/Header Dropdown',
  component: HeaderDropdown,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof HeaderDropdown> = ({ children, ...rest }) => (
  <HeaderDropdown {...rest}>
    <ul style={{ padding: '1rem' }}>
      <li>
        <a href="https://storybook.js.org/">Storybook</a>
      </li>
    </ul>
  </HeaderDropdown>
);

export const Default: Story = {
  render: Template,
  args: {
    title: 'Storybook',
  },
};
