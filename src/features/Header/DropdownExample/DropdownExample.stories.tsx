import React from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { DropdownExample } from './DropdownExample';

const meta: Meta<typeof DropdownExample> = {
  title: 'Features/Header/Menus/DropdownExample',
  component: DropdownExample,
  argTypes: {
    open: { control: 'boolean', defaultValue: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof DropdownExample> = ({ ...rest }) => (
  <div style={{ marginLeft: '3rem', position: 'relative' }}>
    <DropdownExample {...rest} />
  </div>
);

export const Default: Story = {
  render: Template,
};
