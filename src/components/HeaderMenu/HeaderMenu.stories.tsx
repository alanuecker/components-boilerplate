import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HeaderWrapper } from '../HeaderWrapper';

import { HeaderMenu } from './HeaderMenu';

const meta: Meta<typeof HeaderMenu> = {
  title: 'Components/Header/Header Menu',
  component: HeaderMenu,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof HeaderMenu> = ({ ...rest }) => (
  <HeaderWrapper>
    <HeaderMenu {...rest} />
  </HeaderWrapper>
);

const SmallTemplate: StoryFn<typeof HeaderMenu> = ({ ...rest }) => (
  <HeaderWrapper>
    <HeaderMenu small {...rest} />
  </HeaderWrapper>
);

export const Default: Story = {
  render: Template,
};

export const Small: Story = {
  render: SmallTemplate,
};
