import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HeaderLogo } from './HeaderLogo';

const meta: Meta<typeof HeaderLogo> = {
  title: 'Components/Header/Header Logo',
  component: HeaderLogo,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof HeaderLogo> = ({ ...rest }) => (
  <HeaderLogo {...rest} />
);

export const Default: Story = {
  render: Template,
};
