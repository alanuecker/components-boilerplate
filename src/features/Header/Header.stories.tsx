import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderWrapper } from '../../components/HeaderWrapper';

import { Header } from './Header';
import { HeaderMenuChildren } from './HeaderMenuChildren';

const meta: Meta<typeof Header> = {
  title: 'Features/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Header> = ({ ...rest }) => (
  <header>
    <Header {...rest} />
  </header>
);

const SmallTemplate: StoryFn<typeof Header> = ({ ...rest }) => (
  <header>
    <Header small {...rest} />
  </header>
);

const MenuTemplate: StoryFn<typeof Header> = ({ ...rest }) => (
  <header>
    <HeaderWrapper {...rest}>
      <div />
      <HeaderMenu>
        <HeaderMenuChildren />
      </HeaderMenu>
    </HeaderWrapper>
  </header>
);

export const Default: Story = {
  render: Template,
};

export const Menu: Story = {
  render: MenuTemplate,
};

export const Small: Story = {
  render: SmallTemplate,
};
