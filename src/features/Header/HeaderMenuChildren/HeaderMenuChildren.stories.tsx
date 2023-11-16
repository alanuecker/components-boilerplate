import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HeaderMenu } from '../../../components/HeaderMenu';
import { HeaderWrapper } from '../../../components/HeaderWrapper';

import { HeaderMenuChildren } from './HeaderMenuChildren';

const meta: Meta<typeof HeaderMenuChildren> = {
  title: 'Components/Header/Header Menu Children',
  component: HeaderMenuChildren,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof HeaderMenuChildren> = ({ ...rest }) => (
  <HeaderWrapper>
    <HeaderMenu>
      <HeaderMenuChildren {...rest} />
    </HeaderMenu>
  </HeaderWrapper>
);

export const Default: Story = {
  render: Template,
};
